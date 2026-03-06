import Image from 'next/image'

export default function ProjectCard({ project, isEven }) {
  return (
    <section className={`py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-16 ${
      isEven ? 'bg-white' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto">
        {/* Image Container - Using Next.js Image instead of video */}
        <div className="relative w-full h-[40vh] md:h-[45vh] lg:h-[50vh] mb-8 md:mb-10 lg:mb-12 rounded-lg overflow-hidden shadow-xl">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-fit hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 80vw"
            priority={project.id === 1} 
          />
        </div>

        {/* Text Container - Three columns on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {/* First Column - Title */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black uppercase">
              {project.title}
            </h2>
          </div>

          {/* Second Column - Description */}
          <div className="text-center md:text-left">
            <p className="text-base md:text-lg lg:text-xl leading-relaxed" style={{ color: '#b55f14' }}>
              {project.description}
            </p>
          </div>

          {/* Third Column - Year */}
          <div className="text-center md:text-left">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">
              {project.year}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}