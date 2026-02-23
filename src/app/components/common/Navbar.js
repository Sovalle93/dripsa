'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      {/* Top bar with logo and hamburger */}
      <div className="flex justify-between items-center p-4 md:p-6">
        {/* Logo - Links to homepage */}
        <Link href="/" className="relative w-32 h-16 md:w-48 md:h-24">
          <Image
            src="https://res.cloudinary.com/dmivjpb65/image/upload/v1771870598/Logo_Dripsa_yw0czn.png"
            alt="Dripsa Logo"
            fill
            sizes="(max-width: 768px) 128px, 192px"
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6 text-base lg:text-lg" style={{ color: '#584e2d' }}>
          <Link href="/nosotros" className="hover:opacity-80 transition">
            Nosotros
          </Link>
          <Link href="/servicios" className="hover:opacity-80 transition">
            Nuestros Servicios
          </Link>
          <Link href="/proyectos" className="hover:opacity-80 transition">
            Proyectos
          </Link>
          <Link href="/contacto" className="hover:opacity-80 transition">
            Contáctanos
          </Link>
        </div>

        {/* Hamburger Button */}
        <button 
          className="md:hidden text-2xl z-50" 
          style={{ color: '#584e2d' }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-24 left-0 w-full bg-white/95 backdrop-blur-sm py-4 px-6 shadow-lg">
          <div className="flex flex-col space-y-4">
            <Link 
              href="/nosotros" 
              className="text-lg" 
              style={{ color: '#584e2d' }} 
              onClick={() => setIsOpen(false)}
            >
              Nosotros
            </Link>
            <Link 
              href="/servicios" 
              className="text-lg" 
              style={{ color: '#584e2d' }} 
              onClick={() => setIsOpen(false)}
            >
              Nuestros Servicios
            </Link>
            <Link 
              href="/proyectos" 
              className="text-lg" 
              style={{ color: '#584e2d' }} 
              onClick={() => setIsOpen(false)}
            >
              Proyectos
            </Link>
            <Link 
              href="/contacto" 
              className="text-lg" 
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