'use client';

import Image from 'next/image';

export default function Storage() {
  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Título de la sección */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#012758] mb-4">
            Nuestra Bodega
          </h2>
          <div className="w-24 h-1 bg-[#415978] mx-auto rounded-full"></div>
        </div>

        {/* Contenido de imagen y texto */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Imagen de la bodega - izquierda */}
          <div className="lg:w-3/5 relative group">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://res.cloudinary.com/dmivjpb65/image/upload/v1773420076/IMG_3676_whzxzx.jpg"
                alt="Bodega Tagle y Cía - Materiales de riego"
                width={1200}
                height={800}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              {/* Overlay decorativo */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            {/* Borde decorativo (opcional) */}
            <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-[#415978]/20 rounded-2xl -z-10"></div>
          </div>

          {/* Texto descriptivo - derecha */}
          <div className="lg:w-2/5 space-y-6">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Material siempre disponible
              </h3>
              
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                Contamos con una bodega de más de 9,000 m² completamente equipada para 
                garantizar la disponibilidad inmediata de todos nuestros productos. 
                Más de 5,000 SKU en stock permanente.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                <div className="text-center">
                  <span className="block text-3xl font-bold text-[#415978]">24/7</span>
                  <span className="text-sm text-gray-500">Disponibilidad</span>
                </div>
                <div className="text-center">
                  <span className="block text-3xl font-bold text-[#415978]">9000</span>
                  <span className="text-sm text-gray-500">m² de bodega</span>
                </div>
              </div>
            </div>

            {/* Badge de calidad (opcional) */}
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-[#415978] rounded-full flex items-center justify-center text-white text-xl font-bold">
                ✓
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-[#415978]">Stock inmediato</span>
                <br />
                Despacho a todo Chile
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}