import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useIsVisible } from "./functions/FadeAnimationTW";

const ZigZagSection = ({ title, description, reverse, imgRoute }) => {
  const ref = useRef();
  const isVisible = useIsVisible(ref);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    if (isVisible && !hasBeenVisible) {
      setHasBeenVisible(true); // Marca como visible cuando se muestra por primera vez
    }
  }, [isVisible, hasBeenVisible]);

  return (
    <div
      ref={ref}
      className={`flex flex-col h-96 md:flex-row ${reverse ? "md:flex-row-reverse" : ""} justify-between transition-opacity ease-in duration-1000 
      ${hasBeenVisible ? "opacity-100" : "opacity-0"} 
      ${!hasBeenVisible && isVisible ? (reverse ? "animate-fade-right" : "animate-fade-left") : ""}`}
    >
      <div className="md:w-1/2  content-center">
        <h2 className="text-5xl font-bold text-baleatech-blue">{title}</h2>
        <p className="mt-2 text-xl text-gray-300">{description}</p>
      </div>
      <div className="md:w-1/2  flex items-center justify-center">
        <div className={`w-full ${imgRoute ? "border border-gray-700" : ""} h-full rounded-lg flex items-center justify-center hover:scale-105 ease-in-out transition delay-100`}>
          {imgRoute ? 
            <Image src={imgRoute}            
              width={500}
              height={500}
              alt="escubi"
              className="rounded-lg"
            />
            :
            <span className="text-gray-400">Imagen / Gráfico</span>
          }
        </div>
      </div>
    </div>
  );
};

const Description = () => {
  return (
    <div id="servicios" className={`z-10 pt-24 md:w-5/6 mx-auto transition-opacity ease-in duration-1000`}>
      <main className="  lg:pb-24 bg-[] bg-opacity-75 antialiased">
        <div className="px-4 mx-auto max-w-screen-xl">
          <header className="mb-16">
            <h1  className="mt-5 text-6xl font-extrabold leading-tight lg:text-4xl text-white">
              Bienvenido a <span className="text-5xl text-baleatech-blue">BaleaTech</span>
            </h1>
            <p className="text-xl mt-4 text-gray-500 italic">
              - Donde nace el compromiso tecnológico con las islas 
            </p>
            <p className="text-xl mt-10 text-gray-300">
              Impulsamos la productividad y presencia de tu empresa con la solución Software que necesites, por eso te ofrecemos:
            </p>
          </header>

          <article className="mx-auto w-full format format-sm sm:format-base lg:format-lg format-invert">
            <ZigZagSection
              title="Aplicaciones móviles"
              description="Creamos aplicaciones móvil nativas que convergan con tu web, garantizando la centralización y flexibilidad de los datos de tu empresa"
              imgRoute="/mobile-pc.png"
              reverse
            />
            <ZigZagSection
              title="Chatbot de IA adaptado"
              description="Entrenamos e integramos modelos de Inteligencia Artificial con toda la información de tu empresa."
              imgRoute="/FFlex-ScreenShoot.png"
            />
            <ZigZagSection
              title="Soluciones Web"
              description="Desarrollamos aplicaciones web versátiles incluso a niveles ERP, adaptadas a las necesidades de nuestros clientes."
              reverse
              imgRoute="/FFlex-ScreenShoot.png"
            />
            <ZigZagSection
              title="Bases de datos"
              description="Somos expertos en la gestión y administración de bases de datos, simplificando al máximo la presentación final de la información."
              imgRoute="/FFlex-ScreenShoot.png"
            />

            {/* <ZigZagSection
              title="Bases de datos"
              description="Nuestro equipo de expertos está aquí para guiarte en cada paso del proceso de desarrollo."
              imgRoute="/FFlex-ScreenShoot.png"
            /> */}
          </article>
        </div>
      </main>
    </div>
  );
};

export default Description;
