import React from "react";

const ProductCard = ({ title, description, image, badge, url}) => {
  return (
    <div className="
    relative max-w-sm rounded-3xl 
   
    bg-gradient-to-t from-[#1c1c1c] to-white/0
    shadow-xl p-6
    transition-transform duration-300
    hover:-translate-y-2 hover:shadow-2xl
    ">

    {/* Badge estilo */}
    {badge && (
        <span className="
        absolute -top-4 -right-4
        bg-baleatech-blue text-white
        px-4 py-1 rounded-full
        text-xs font-bold tracking-widest
        rotate-6
        ">
        {badge}
        </span>
    )}

    {/* Imagen */}
    <div className="mb-4 rounded-3xl overflow-hidden border-2 border-gray-700">
        <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover"
        />
    </div>

    {/* Título */}
    <h3 className="
        text-2xl font-extrabold
        text-baleatech-blue tracking-wide
        mb-2
    ">
        {title}
    </h3>

    {/* Descripción */}
    <p className="text-wh mb-4 text-sm leading-relaxed">
        {description}
    </p>

    {/* Botón */}
    <a href={url}  target="_blank" rel="noopener noreferrer">
        <button className="
        w-full py-2 rounded-full
        bg-baleatech-blue text-white
        font-semibold tracking-wide
        hover:bg-opacity-90
        transition
        ">
            Saber más
        </button>
    </a>
    </div>
    
  );
};

export default ProductCard;
