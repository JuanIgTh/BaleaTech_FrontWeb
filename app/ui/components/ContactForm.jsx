import React, { useRef } from "react";
import { AiFillInstagram } from "react-icons/ai";
import emailjs from '@emailjs/browser';

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
        <section id="contacto" class="w-2/3 z-10 h-dvh content-center flex content-center ">
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-m content-center ">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center  text-baleatech-blue">Contacta con nosotros!</h2>
            <p class="mb-4   lg:mb-8  text-center text-gray-500 text-gray-400 sm:text-xl">Estamos dispuesto a resolver cualquier duda, no dudes en escribirnos</p>
            <form action="#" class="space-y-8">
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium  text-gray-300">Email</label>
                    <input type="email" id="email" class="shadow-sm  border border-gray-300  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-500  bg-opacity-50 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="name@flowbite.com" required></input>
                </div>
                <div>
                    <label for="subject" class="block mb-2 text-sm font-medium  text-gray-300">Subject</label>
                    <input type="text" id="subject" class="block p-3 w-full text-sm   rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-gray-500 bg-opacity-50 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="Let us know how we can help you" required></input>
                </div>
                <div class="sm:col-span-2">
                    <label for="message" class="block mb-2 text-sm font-medium  text-gray-400">Your message</label>
                    <textarea id="message" rows="6" class="block p-2.5 w-full text-sm   rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 bg-gray-500  bg-opacity-50 bg-opacity-70 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                </div>
                <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-baleatech-blue sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-primary-600 hover:bg-baleatech-blue focus:ring-primary-800">Send message</button>
            </form>
        </div>
        <div className="w-1/3 flex flex-col items-center justify-center">
        <AiFillInstagram size={200} color="" className="text-baleatech-blue opacity-75" />
        <AiFillInstagram size={200} color="" className="text-baleatech-blue opacity-75" />
        <AiFillInstagram size={200} color="" className="text-baleatech-blue opacity-75" />
        </div>
    </section>
    );
};

export default ContactForm;
