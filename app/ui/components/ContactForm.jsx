import React, { useRef } from "react";
import { AiFillInstagram, AiFillPhone } from "react-icons/ai";
import emailjs from '@emailjs/browser';
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

const ContactForm = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault()
        // alert(process.env.NEXT_PUBLIC_SERVICE_ID)
        // alert(process.env.NEXT_PUBLIC_TEMPLATE_ID)
        // alert(process.env.NEXT_PUBLIC_PUBLIC_KEY)
        emailjs

            .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_PUBLIC_KEY)
            .then(
                () => {
                    console.log('SUCCESS!');
                    alert('Message sent successfully!');
                    form.current.reset(); // Clear the form after successful submission
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    alert('Message failed to send. Please try again later.');
                },
            );
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

        <section id="contacto" class="sm:w-2/3 z-10 h-svh sm:h-dvh content-center flex ">
            <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-m content-center ">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center  text-baleatech-blue">Contacta con nosotros!</h2>
                <p class="mb-4   lg:mb-8  text-center text-gray-500 text-gray-400 sm:text-xl">Estamos dispuesto a resolver cualquier duda, no dudes en escribirnos.</p>
                <form ref={form} onSubmit={sendEmail} action="#" class="space-y-8 ">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium  text-gray-300">Email</label>
                        <input type="email" id="email" class="block p-3 w-full text-sm   rounded-xl border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-gray-500 bg-opacity-50 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="tu-mail@mail.com" required></input>
                    </div>
                    <div>
                        <label for="subject" class="block mb-2 text-sm font-medium  text-gray-300">Asunto</label>
                        <input type="text" id="subject" class="block p-3 w-full text-sm   rounded-xl border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-gray-500 bg-opacity-50 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="Cuéntanos tu idea" required></input>
                    </div>
                    <div class="sm:col-span-2">
                        <label for="message" class="block mb-2 text-sm font-medium  text-gray-400">Tu mensaje</label>
                        <textarea id="message" rows="6" class="block p-3 w-full text-sm resize-none	rounded-2xl border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-gray-500 bg-opacity-50 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="Deja un comentario..."></textarea>
                    </div>
                    <div>   
                        <div className="text-center w-full ">
                            <button type="submit" class="py-3 px-5  text-sm font-medium text-center text-white rounded-full bg-baleatech-blue sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-primary-600 hover:bg-baleatech-blue focus:ring-primary-800 ">Enviar Mensaje</button>
                        </div>
                    </div>
                </form>
                <hr className="mt-10 bg-blue-500" />
                <div className="flex justify-around content-center mt-6">
                    <a href="https://www.instagram.com/baleatech">
                        <div className="flex content-center items-center ">
                            <AiFillInstagram size={50} color="" className="text-baleatech-blue mr-2" />
                            <label className="hidden sm:block" htmlFor="">@baleatech</label>
                        </div>
                    </a>
                    <a href="tel:555-555-5555">
                        <div className="flex content-center items-center">
                            <IoLogoWhatsapp size={47} color="" className="text-baleatech-blue mr-2" />
                            <label className="hidden sm:block"  htmlFor="">+34 640758702</label>
                        </div>
                    </a>
                    <a href="">
                        <div className="flex content-center items-center">
                            <FaSquareFacebook size={45} color="" className="text-baleatech-blue mr-2" />
                            <label className="hidden sm:block" htmlFor="">baleatech</label>
                        </div>
                    </a>

                </div>
            </div>
        </section>
    );
};

export default ContactForm;
