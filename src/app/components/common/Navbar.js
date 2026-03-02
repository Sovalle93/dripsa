'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-gradient-to-b from-black/30 to-transparent">
      {/* INCREASE THIS CONTAINER - this is the white/gray area you want bigger */}
      <div className="h-[130px] md:h-[160px] lg:h-[200px] flex justify-between items-center px-6 md:px-10 lg:px-16 bg-white/90 backdrop-blur-sm">
        
        {/* Logo - FILL the bigger space */}
        <Link href="/" className="relative h-4/5 w-auto aspect-[2/1]">
          <Image
            src="https://res.cloudinary.com/dmivjpb65/image/upload/v1771870598/Logo_Dripsa_yw0czn.png"
            alt="Dripsa Logo"
            fill
            className="object-contain object-left"
            priority
            sizes="(max-width: 768px) 280px, (max-width: 1024px) 360px, 440px"
          />
        </Link>

        {/* Navigation Links - MUCH BIGGER */}
        <div className="hidden md:flex items-center h-full">
          <div className="flex space-x-8 lg:space-x-12 xl:space-x-16">
            <Link 
              href="/nosotros" 
              className="text-2xl lg:text-3xl xl:text-4xl font-medium hover:opacity-80 transition whitespace-nowrap" 
              style={{ color: '#584e2d' }}
            >
              Nosotros
            </Link>
            <Link 
              href="/servicios" 
              className="text-2xl lg:text-3xl xl:text-4xl font-medium hover:opacity-80 transition whitespace-nowrap" 
              style={{ color: '#584e2d' }}
            >
              Nuestros Servicios
            </Link>
            <Link 
              href="/proyectos" 
              className="text-2xl lg:text-3xl xl:text-4xl font-medium hover:opacity-80 transition whitespace-nowrap" 
              style={{ color: '#584e2d' }}
            >
              Proyectos
            </Link>
            <Link 
              href="/contacto" 
              className="text-2xl lg:text-3xl xl:text-4xl font-medium hover:opacity-80 transition whitespace-nowrap" 
              style={{ color: '#584e2d' }}
            >
              Contáctanos
            </Link>
          </div>
        </div>

        {/* Hamburger Button */}
        <button 
          className="md:hidden text-5xl z-50" 
          style={{ color: '#584e2d' }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu - Adjusted position */}
      {isOpen && (
        <div className="md:hidden absolute top-[160px] left-0 w-full bg-white/95 backdrop-blur-sm py-8 px-6 shadow-lg">
          <div className="flex flex-col space-y-6">
            <Link 
              href="/nosotros" 
              className="text-3xl" 
              style={{ color: '#584e2d' }} 
              onClick={() => setIsOpen(false)}
            >
              Nosotros
            </Link>
            <Link 
              href="/servicios" 
              className="text-3xl" 
              style={{ color: '#584e2d' }} 
              onClick={() => setIsOpen(false)}
            >
              Nuestros Servicios
            </Link>
            <Link 
              href="/proyectos" 
              className="text-3xl" 
              style={{ color: '#584e2d' }} 
              onClick={() => setIsOpen(false)}
            >
              Proyectos
            </Link>
            <Link 
              href="/contacto" 
              className="text-3xl" 
              style={{ color: '#584e2d' }} 
              onClick={() => setIsOpen(false)}
            >
              Contáctanos
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}