import Image from 'next/image'

export default function AboutBottomLeft() {
  const pillars = [
    {
      id: 1,
      image: "https://res.cloudinary.com/dmivjpb65/image/upload/v1771875767/Pilar_1-removebg-preview_fxqpch.png",
      text: "Formar parte de nuestro esencias el poner en primer lugar los requerimientos y necesidades de cada uno de nuestros clientes."
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dmivjpb65/image/upload/v1771875767/Pilar_2-removebg-preview_nmnkp7.png",
      text: "El servicio es nuestra prioridad, ya que es nuestra forma de presentarnos y demostrar nuestra capacidades frente al cliente, por lo que es un pilar transversal de DRIPSA"
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dmivjpb65/image/upload/v1771875766/Pilar_3-removebg-preview_wfqvtv.png",
      text: "Junto con nuestros socios estratégicos potenciamos el uso de productos de alta calidad, los que constituyen a una mayor durabilidad y desempeño en nuestros proyectos. "
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/dmivjpb65/image/upload/v1771875766/Pilar_4-removebg-preview_qe5uox.png",
      text: "Al momento de diseñar y estructurar nuestros proyectos, siempre tenemos como principio el uso eficiente del agua y electricidad."
    },
    {
      id: 5,
      image: "https://res.cloudinary.com/dmivjpb65/image/upload/v1771875766/Pilar_4-removebg-preview_qe5uox.png",
      text: "En búsqueda de constantes mejoras, estamos siempre consciente de que nuestros productos cumplan con los requerimientos y sean ecológicamente amigables al mismo tiempo que desarrollamos con nuestros socios mejoras en el producto y procesos."
    }
  ]

  // Split pillars into two rows
  const topRow = pillars.slice(0, 2)  // First 2 pillars
  const bottomRow = pillars.slice(2)  // Last 3 pillars

  return (
    <section className="py-16 px-4 md:py-20 md:px-8 lg:px-16" style={{ backgroundColor: '#e99b4f' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12 md:mb-16">
          Nuestros Pilares
        </h2>

        {/* Top Row - 2 Pillars */}
        <div className="grid grid-cols-2 gap-8 md:gap-6 mb-8 md:mb-10 max-w-3xl mx-auto">
          {topRow.map((pillar) => (
            <div key={pillar.id} className="flex flex-col items-center text-center">
              {/* Image Container */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mb-4">
                <Image
                  src={pillar.image}
                  alt={`Pilar ${pillar.id}`}
                  fill
                  sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 192px"
                  className="object-contain"
                />
              </div>
              
              {/* Text */}
              <p className="text-white text-lg md:text-2xl leading-relaxed max-w-[200px]">
                {pillar.text}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Row - 3 Pillars */}
        <div className="grid grid-cols-3 gap-6 md:gap-4 max-w-4xl mx-auto">
          {bottomRow.map((pillar) => (
            <div key={pillar.id} className="flex flex-col items-center text-center">
              {/* Image Container - Slightly smaller for 3-column layout */}
              <div className="relative w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 mb-4">
                <Image
                  src={pillar.image}
                  alt={`Pilar ${pillar.id}`}
                  fill
                  sizes="(max-width: 640px) 112px, (max-width: 768px) 128px, 144px"
                  className="object-contain"
                />
              </div>
              
              {/* Text */}
              <p className="text-white text-lg md:text-2xl leading-relaxed max-w-[200px]">
                {pillar.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}