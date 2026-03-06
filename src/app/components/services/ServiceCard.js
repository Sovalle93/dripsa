import Image from 'next/image'

export default function ServiceCard({ service, index }) {
  // Alternate animation direction based on index
  const delay = index * 0.1
  
  return (
    <div 
      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#5C3A3A]/20"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="p-8 md:p-10 flex flex-col items-center text-center">
        {/* Image Container with hover effect */}
        <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mb-6 transform group-hover:scale-110 transition-transform duration-300">
          <Image
            src={service.imageUrl}
            alt={service.alt}
            fill
            sizes="(max-width: 768px) 128px, (max-width: 1024px) 160px, 192px"
            className="object-contain drop-shadow-md"
          />
        </div>

        {/* Title with gradient line */}
        <h3 className="text-2xl md:text-3xl font-bold mb-4 relative inline-block">
          <span style={{ color: '#5C3A3A' }}>{service.title}</span>
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-[#5C3A3A] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          {service.description}
        </p>

        {/* Subtle learn more indicator */}
        <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-sm font-medium" style={{ color: '#5C3A3A' }}>
            Conoce más →
          </span>
        </div>
      </div>
    </div>
  )
}