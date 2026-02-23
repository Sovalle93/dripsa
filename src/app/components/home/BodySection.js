import Image from 'next/image'

export default function BodySection() {
  return (
    <section className="py-12 px-4 md:py-16 md:px-8 lg:px-16">
      {/* Using a 6-column grid on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-12">
          {/* LEFT COLUMN - Text - Takes 4 columns on desktop */}
          <div className="md:col-span-4 flex flex-col space-y-[30px] md:space-y-[32px] lg:space-y-[34px]">
            {/* Big text - H1 */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight" style={{ color: '#584e2d' }}>
              Mas de 20 años creando soluciones a la medida para nuestros agricultores.
            </h1>
            
            {/* Medium text - H2 */}
            <h2 className="text-xl md:text-2xl lg:text-3xl leading-relaxed" style={{ color: '#584e2d' }}>
              En el año 2003 nuestros fundadores vieron en Chile un gran desarrollo agronómico, con ansias de los productores por aumentar su producción y manejar sus huertos de una forma más eficiente. Para poder realizar su objetivo nuestros fundadores llegaron a la conclusión de que el productor debe centrarse en el corazón de su negocio, la producción y el rendimiento.
            </h2>
            
            {/* Smaller text - H3 */}
            <h3 className="text-lg md:text-xl lg:text-2xl leading-relaxed" style={{ color: '#584e2d' }}>
              Es por eso por lo que para facilitar la consecución de este objetivo crean DRIP S.A. una empresa que presenta una solución Integral para su riego, siempre teniendo presente los 5 pilares bases de nuestra cultura
            </h3>
          </div>

        {/* RIGHT COLUMN - Media - Takes 2 columns on desktop */}
        <div className="md:col-span-2 flex flex-col space-y-[30px] md:space-y-[32px] lg:space-y-[34px] justify-center">
          {/* Image */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-4/5 sm:w-3/4 md:w-full lg:w-11/12 aspect-[4/3]">
              <Image
                src="https://res.cloudinary.com/dmivjpb65/image/upload/v1771870525/Foto_Grupal_wysar4.png"
                alt="Foto Grupal"
                fill
                sizes="(max-width: 640px) 80vw, (max-width: 768px) 75vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Video */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-4/5 sm:w-3/4 md:w-full lg:w-11/12 aspect-[4/3]">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-lg shadow-md"
              >
                <source
                  src="https://res.cloudinary.com/dmivjpb65/video/upload/v1771870535/Video_4_srpg2t.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}