import React from "react";
import ParticlesBackground from "./functions/ParticlesBackground";

const LandingPage = () => {
    return (
        <div className='bg-gradient-to-b from-neutral-900  to-[#0a72fa] '> 
            <ParticlesBackground className='grid content-center'/>
            <div className=' text-slate-200 md:px-10 px-5 '>
                {/* Content for the landing page */}
            </div>
        </div>
    );
};

export default LandingPage;