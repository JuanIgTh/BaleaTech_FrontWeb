'use client'
import React from "react";
import ParticlesBackground from "./functions/ParticlesBackground";
import Image from 'next/image'

const NavBar = () => {
    
    
    return (

    <nav id="navbar" className="bg-gradient-to-b from-[#0e0e0e] to-transparent z-50">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse ">
        <Image
                        src="/Isotipo BT.svg"
                         width={50}
                        height={50}
                        alt="escubi"

                        className=""
                    />
                    <Image
                        src="/Logotipo BT.svg"  
                        width={150}
                        height={150}
                        alt="escubi"
                        className=""
                    />
        </a>
        <button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-dropdown" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">

            <div className="hidden md:flex space-x-8">
            <ul className="md:flex text-lg">
            <a href="#home" className="nav-link text-[#ffff] hover:text-white mr-4">Home</a>
            
            <a href="#servicios" className="text-[#0a72fa] hover:text-white mr-4">Nuestros servicios</a>
            <a href="#" className="text-[#0a72fa] hover:text-white mr-4">Pricing</a>
            <a href="#contacto" className="text-[#0a72fa] hover:text-white">Contacto</a>
            </ul>
            </div>
        </div>
    </div>
    </nav>

    );
};

export default NavBar;

