import Image from 'next/image'

export default function PillarsSection() {
  const pillars = [
    {
      id: 1,
      image: "https://res.cloudinary.com/dmivjpb65/image/upload/v1771875767/Pilar_1-removebg-preview_fxqpch.png",
      text: "Somos una empresa creada el año 2003, especialistas en la importación"
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dmivjpb65/image/upload/v1771875767/Pilar_2-removebg-preview_nmnkp7.png",
      text: "Somos una empresa creada el año 2003, especialistas en la importación"
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dmivjpb65/image/upload/v1771875766/Pilar_3-removebg-preview_wfqvtv.png",
      text: "Somos una empresa creada el año 2003, especialistas en la importación"
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/dmivjpb65/image/upload/v1771875766/Pilar_4-removebg-preview_qe5uox.png",
      text: "Somos una empresa creada el año 2003, especialistas en la importación"
    }
  ]

  return (
    <section className="py-16 px-4 md:py-20 md:px-8 lg:px-16" style={{ backgroundColor: '#5b74aa' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12 md:mb-16">
          Nuestros Pilares
        </h2>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {pillars.map((pillar) => (
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
              <p className="text-white text-sm md:text-base leading-relaxed max-w-[250px]">
                {pillar.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}