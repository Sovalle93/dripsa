'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function ProjectCard({ project, isEven }) {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <section className={`py-16 md:py-24 px-4 md:px-8 lg:px-16 transition-all duration-300 ${
      isEven ? 'bg-white' : 'bg-gradient-to-br from-gray-50 to-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className={`flex flex-col ${
          isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
        } gap-8 md:gap-12 lg:gap-16 items-center`}>
          
          {/* Image Container - Modern, Clean, Properly Sized */}
          <div className="w-full lg:w-1/2">
            <div className="relative overflow-hidden rounded-2xl shadow-xl group">
              {/* Blur placeholder while loading */}
              <div className={`absolute inset-0 bg-gray-200 animate-pulse transition-opacity duration-500 ${
                imageLoaded ? 'opacity-0' : 'opacity-100'
              }`} />
              
              {/* Next.js Optimized Image */}
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={project.imageUrl}
                  alt={project.alt || project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                  className={`object-cover transition-transform duration-700 group-hover:scale-105 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setImageLoaded(true)}
                  quality={85}
                  priority={project.id === 1}
                />
              </div>
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          {/* Content Container */}
          <div className="w-full lg:w-1/2 space-y-6">
            {/* Title with decorative line */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 uppercase mb-4">
                {project.title}
              </h2>
              <div className="w-16 h-1 bg-[#d3751b] rounded-full" />
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                {project.description}
              </p>
            </div>

            {/* Year with modern styling */}
            <div className="pt-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#d3751b]/10 rounded-full">
                <svg className="w-4 h-4 text-[#d3751b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-lg font-semibold text-[#d3751b]">{project.year}</span>
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}