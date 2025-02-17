import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.panel247.com", // Cambia esto al SMTP real
      port: 465, // Cambia al puerto correcto (587 o 465)
      secure: true, // true para 465, false para 587
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "info@baleatech.com", // Puedes cambiarlo al correo del usuario: email
      subject,
      text: `Has recibido un mensaje de ${email} que dice lo siguiente:\n\n${message}`,
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email, // Puedes cambiarlo al correo del usuario: email
      subject,
      text: `Desde Baleatech <3 hemos recibido tu mensaje y nos pondremos en contacto contigo lo más pronto posible.`,
    });

    return new Response(JSON.stringify({ success: true, message: "Correo enviado exitosamente" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
