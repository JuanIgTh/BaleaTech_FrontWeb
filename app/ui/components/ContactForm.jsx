import React, { useRef, useState } from "react";
import { AiFillInstagram, AiFillPhone } from "react-icons/ai";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

const ContactForm = () => {

    const form = useRef();
    const [formLoadedAt] = useState(() => Date.now());
    const [sending, setSending] = useState(false);

    const sendEmail = async (e) => {
        e.preventDefault();
        setSending(true);

        try {
            const formData = new FormData(form.current);
            const data = Object.fromEntries(formData.entries());
            data._timestamp = formLoadedAt;

            const response = await fetch("/api/sendEmail", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(data),
            });

            if (response.ok) {
                show('success', 'Éxito', 'Hemos recibido tu mensaje');
                form.current.reset();
            } else if (response.status === 429) {
                show('warn', 'Espera', 'Demasiados envíos. Inténtalo en unos minutos.');
            } else {
                show('error', 'Error', 'Ha ocurrido un error.');
            }
        } catch {
            show('error', 'Error', 'No se pudo conectar con el servidor.');
        } finally {
            setSending(false);
        }
      };

    const toast = useRef(null);

    const show = (severity, summary, detail) => {
        toast.current.show({ severity: severity, summary: summary, detail: detail });
    };
    

    return (
        // <section id="contacto" className="w-2/3 z-10 h-dvh content-center flex  items-center">
        // <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-m content-center">

        //     <h2 className="mb-4 text-4xl w-full tracking-tight font-extrabold text-center text-baleatech-blue">Contacta con nosotros!</h2>
        //     <p className="mb-4 lg:mb-8 text-center text-gray-500 sm:text-xl">
        //         Estamos dispuestos a resolver cualquier duda, no dudes en escribirnos
        //     </p>
        //     <form ref={form} onSubmit={sendEmail} className="space-y-8 w-full max-w-lg">
        //         <label>Name</label>
        //         <input type="text" name="user_name" required className="shadow-sm border border-gray-300 text-baleatech-blue rounded-lg p-2 w-full" />

        //         <label>Email</label>
        //         <input type="email" name="user_email" required className="shadow-sm border border-gray-300 text-baleatech-blue rounded-lg p-2 w-full" />

        //         <label>Message</label>
        //         <textarea name="message" required className="shadow-sm border border-gray-300 text-baleatech-blue rounded-lg p-2 w-full" />

        //         <input type="submit" value="Send" className="py-3 px-5 text-sm font-medium text-white rounded-lg bg-baleatech-blue hover:bg-primary-800 focus:ring-4 focus:outline-none" />
        //     </form>

        //     <div className="py-8 flex flex-col items-center">
        //         <div className="flex space-x-4">
        //             <AiFillInstagram size={40} className="text-baleatech-blue opacity-75" />
        //             <AiFillInstagram size={40} className="text-baleatech-blue opacity-75" />
        //             <AiFillInstagram size={40} className="text-baleatech-blue opacity-75" />
        //         </div>
        //     </div>
        // </div>
        // </section>

        <section id="contacto" class="sm:w-2/3 z-10 h-svh sm:h-dvh content-center flex mb-8">
            <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-m content-center ">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center  text-baleatech-blue">Contacta con nosotros!</h2>
                <p class="mb-4   lg:mb-8  text-center text-gray-500 text-gray-400 sm:text-xl">Estamos dispuesto a resolver cualquier duda, no dudes en escribirnos.</p>
                <form ref={form} onSubmit={sendEmail} action="#" class="space-y-8 ">
                    {/* Honeypot anti-bot: invisible para usuarios, los bots lo rellenan */}
                    <input type="text" name="_honeypot" style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0 }} tabIndex={-1} autoComplete="off" />
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium  text-gray-300">Email</label>
                        <input type="email" id="email" name="email" class="block p-3 w-full text-sm   rounded-xl border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-gray-500 bg-opacity-50 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="tu-mail@mail.com" required></input>
                    </div>
                    <div>
                        <label for="subject" class="block mb-2 text-sm font-medium  text-gray-300">Asunto</label>
                        <input type="text" id="subject" name="subject" class="block p-3 w-full text-sm   rounded-xl border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-gray-500 bg-opacity-50 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="Cuéntanos tu idea" required></input>
                    </div>
                    <div class="sm:col-span-2">
                        <label for="message" class="block mb-2 text-sm font-medium  text-gray-400">Tu mensaje</label>
                        <textarea id="message" name="message" rows="6" class="block p-3 w-full text-sm resize-none	rounded-2xl border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-gray-500 bg-opacity-50 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="Deja un comentario..."></textarea>
                    </div>
                    <div>
                        <div className="text-center w-full ">
                            <button type="submit" disabled={sending} class="py-3 px-5 text-sm font-medium text-center text-white rounded-full bg-baleatech-blue sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-primary-600 hover:bg-baleatech-blue focus:ring-primary-800 disabled:opacity-50 disabled:cursor-not-allowed">
                                {sending ? (
                                    <span className="flex items-center gap-2">
                                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                        </svg>
                                        Enviando...
                                    </span>
                                ) : 'Enviar Mensaje'}
                            </button>
                        </div>
                        <Toast ref={toast} position="bottom-right" />
                    </div>
                </form>
                <hr class=" h-1 mt-10 bg-gray-100 border-0 rounded-sm dark:bg-baleatech-blue"/>
                <div className="flex justify-around content-center mt-6">
                    <a href="https://www.instagram.com/baleatech">
                        <div className="flex content-center items-center ">
                            <AiFillInstagram size={50} color="" className="text-baleatech-blue mr-2" />
                            <label className="hidden sm:block" htmlFor="">@baleatech</label>
                        </div>
                    </a>
                    <a href="tel:+34640758702">
                        <div className="flex content-center items-center">
                            <IoLogoWhatsapp size={50} color="" className="text-baleatech-blue mr-2" />
                            <label className="hidden sm:block" htmlFor="">+34 640758702</label>
                        </div>
                    </a>
                    {/* <a href="">
                        <div className="flex content-center items-center">
                            <FaSquareFacebook size={45} color="" className="text-baleatech-blue mr-2" />
                            <label className="hidden sm:block" htmlFor="">baleatech</label>
                        </div>
                    </a> */}
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
