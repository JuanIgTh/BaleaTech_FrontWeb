import ProductCard from "./ProductCard";

const ProductsSection = () => {
  return (
    <section id="productos" className="py-16 px-4">
        <h2 className="
        text-4xl font-extrabold text-center
        text-white mb-16
        tracking-widest
        ">
        <span className="text-baleatech-blue">Nuestros</span> Productos
        </h2>

        <div className="flex flex-wrap justify-center gap-12">

            <ProductCard
                title="FastMesa"
                description="Da el salto digital a tu restaurante. Transforma tu carta en QR con FastMesa"
                image="/screenshot_fm.png"
                badge="NUEVO"
                url="https://www.fastmesa.com/"
            />

            <ProductCard
                title="Sweet CRM"
                description="Una solución inteligente para gestionar clientes y automatizar procesos."
                image="/screenshot_sweet.png"
                badge="PRÓXIMAMENTE"
                url="https://baleatech-crm.vercel.app/#/"
            />

        </div>
    </section>
  );
};

export default ProductsSection;
