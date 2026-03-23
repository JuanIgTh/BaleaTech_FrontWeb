import tls from "tls";

function createSmtpConnection(host, port) {
  return new Promise((resolve, reject) => {
    const socket = tls.connect(port, host, { rejectUnauthorized: false });
    socket.once("secureConnect", () => resolve(socket));
    socket.once("error", reject);
  });
}

function waitForResponse(socket) {
  return new Promise((resolve, reject) => {
    let buffer = "";
    const timeout = setTimeout(() => {
      socket.removeListener("data", onData);
      reject(new Error("SMTP timeout"));
    }, 10000);

    function onData(chunk) {
      buffer += chunk.toString();
      // SMTP multi-line: "250-..." continues, "250 ..." is final
      const lines = buffer.split("\r\n");
      for (const line of lines) {
        if (line.length >= 4 && line[3] === " ") {
          // Final response line found
          clearTimeout(timeout);
          socket.removeListener("data", onData);
          const code = parseInt(line.substring(0, 3), 10);
          if (code >= 400) {
            reject(new Error(`SMTP error ${code}: ${buffer.trim()}`));
          } else {
            resolve(buffer);
          }
          return;
        }
      }
    }

    socket.on("data", onData);
  });
}

async function smtpSend(socket, command) {
  socket.write(command + "\r\n");
  return waitForResponse(socket);
}

async function sendRawEmail({ from, to, subject, body }) {
  const host = "smtp.panel247.com";
  const port = 465;
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  const recipients = Array.isArray(to) ? to : [to];

  const socket = await createSmtpConnection(host, port);

  try {
    // Greeting
    await waitForResponse(socket);
    // EHLO
    await smtpSend(socket, "EHLO baleatech.com");
    // Auth
    await smtpSend(socket, "AUTH LOGIN");
    await smtpSend(socket, Buffer.from(user).toString("base64"));
    await smtpSend(socket, Buffer.from(pass).toString("base64"));
    // Envelope
    await smtpSend(socket, `MAIL FROM:<${from}>`);
    for (const r of recipients) {
      await smtpSend(socket, `RCPT TO:<${r}>`);
    }
    // Data
    await smtpSend(socket, "DATA");

    const date = new Date().toUTCString();
    const msg = [
      `From: ${from}`,
      `To: ${recipients.join(", ")}`,
      `Subject: ${subject}`,
      `Date: ${date}`,
      `MIME-Version: 1.0`,
      `Content-Type: text/plain; charset=utf-8`,
      "",
      body.replace(/^\./gm, ".."), // dot-stuffing per RFC
      ".",
    ].join("\r\n");

    await smtpSend(socket, msg);
    socket.write("QUIT\r\n");
  } finally {
    socket.end();
  }
}

// Rate limit: máx 3 envíos por IP cada 10 minutos
const rateMap = new Map();
const MAX_REQUESTS = 3;
const WINDOW_MS = 10 * 60 * 1000;

function isRateLimited(ip) {
  const now = Date.now();
  const entry = rateMap.get(ip) || [];
  const recent = entry.filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_REQUESTS) return true;
  recent.push(now);
  rateMap.set(ip, recent);
  return false;
}

export async function POST(req) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return new Response(
        JSON.stringify({ error: "Demasiados envíos. Inténtalo en unos minutos." }),
        { status: 429, headers: { "Content-Type": "application/json" } }
      );
    }

    const { email, subject, message, _honeypot, _timestamp } = await req.json();

    // Honeypot: si se rellena, es un bot
    if (_honeypot) {
      // Fingimos éxito para no dar pistas
      return new Response(
        JSON.stringify({ success: true, message: "Correo enviado exitosamente" }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }

    // Tiempo mínimo: si envían en menos de 2s, es bot
    if (_timestamp && Date.now() - Number(_timestamp) < 2000) {
      return new Response(
        JSON.stringify({ success: true, message: "Correo enviado exitosamente" }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }

    // Enviar a los 3 destinatarios
    await sendRawEmail({
      from: process.env.EMAIL_USER,
      to: ["info@baleatech.com", "jit9rex@gmail.com", "cvecinav@gmail.com"],
      subject,
      body: `Has recibido un mensaje de ${email} que dice lo siguiente:\n\n${message}`,
    });

    // Confirmación al remitente
    await sendRawEmail({
      from: process.env.EMAIL_USER,
      to: email,
      subject,
      body: `Desde Baleatech <3 hemos recibido tu mensaje y nos pondremos en contacto contigo lo más pronto posible.`,
    });

    return new Response(
      JSON.stringify({ success: true, message: "Correo enviado exitosamente" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Email error:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
