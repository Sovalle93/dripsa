'use client'

import { useRef, useEffect } from 'react'

export default function VideoProject({ project, isEven }) {
  const videoRef = useRef(null)

  useEffect(() => {
    // Ensure video plays on load
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay prevented:", error)
      })
    }
  }, [])

  return (
    <section className={`py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-16 ${
      isEven ? 'bg-white' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto">
        {/* Video Container - Full width, shortened height */}
        <div className="relative w-full h-[40vh] md:h-[45vh] lg:h-[50vh] mb-8 md:mb-10 lg:mb-12 rounded-lg overflow-hidden shadow-xl">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src={project.videoUrl} type="video/mp4" />
          </video>
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
            <p className="text-base md:text-lg lg:text-xl leading-relaxed" style={{ color: '#548e7d' }}>
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