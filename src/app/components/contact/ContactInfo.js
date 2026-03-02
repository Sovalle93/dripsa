'use client'

import Image from 'next/image'
import dynamic from 'next/dynamic'

// Dynamically import the map to avoid SSR issues
const LeafletMap = dynamic(() => import('./LeafLetMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[300px] bg-gray-200 rounded-lg flex items-center justify-center">
      <p className="text-gray-600">Cargando mapa...</p>
    </div>
  ),
})

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Header Text - same as before */}
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-black">
          Conversemos
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-black">
          ¿Tienes alguna pregunta?
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Tenemos diversas plataformas a disposición para que nuestro equipo resuelva lo más pronto posible tus dudas.
        </p>
      </div>

      {/* Contact Details - same as before */}
      <div className="space-y-4" style={{ color: '#012758' }}>
        <div className="flex items-center gap-3">
          <div className="relative w-6 h-6">
            <Image
              src="/whatsapp-icon.svg"
              alt="WhatsApp"
              fill
              className="object-contain"
            />
          </div>
          <a href="tel:+56225788000" className="text-lg hover:underline">
            +562 2578 8000
          </a>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative w-6 h-6">
            <Image
              src="/email-icon.svg"
              alt="Email"
              fill
              className="object-contain"
            />
          </div>
          <a href="mailto:ventas@dripsa.cl" className="text-lg hover:underline">
            ventas@dripsa.cl
          </a>
        </div>

        <div className="flex items-start gap-3">
          <div className="relative w-6 h-6 mt-1">
            <Image
              src="/location-icon.svg"
              alt="Location"
              fill
              className="object-contain"
            />
          </div>
          <div className="text-lg">
            <p>Cordillera 251, 8730608 Quilicura,</p>
            <p>Región Metropolitana</p>
          </div>
        </div>
      </div>

      {/* Free Map - replaces Google Maps */}
      <LeafletMap />
    </div>
  )
}