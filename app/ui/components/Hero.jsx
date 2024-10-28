import Image from "next/image";
import { RiArrowDownWideLine } from "react-icons/ri";

const Hero = () => {
    return (
        <div id="home" className='w-screen h-screen items-center content-center justify-between flex flex-col pb-24 md:px-10 px-5 '>
            <div className="flex items-center content-center justify-center invisible  ">
                <RiArrowDownWideLine size={100} color="white" />
            </div>
            <div className="sm:flex items-center content-center justify-center">
                <div className='flex justify-center'>
                <Image
                    src="/Isotipo BT.svg"
                    width={300}
                    height={300}
                    alt="escubi"

                    className="md:animate-fade-right mb-5 animate-fade-down animate-delay-900 animate-once  "
                />
                </div>
                <Image
                    src="/Logotipo BT (1).svg"
                    width={600}
                    height={600}
                    alt="escubi"
                    className="animate-fade-up animate-delay-500 animate-once md:ml-10 "
                    timeout={5000}
                />
            </div>
            <div className="flex items-center content-center justify-center animate-bounce ">
                <RiArrowDownWideLine className="opacity-75	" size={100} color="#0a72fa" />
            </div>
        </div>
    )
}

export default Hero;