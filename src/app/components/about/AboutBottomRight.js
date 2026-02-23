import Image from 'next/image'
import React from 'react'

export default function AboutBottomRight() {
  return (
    <div className="relative w-full h-full min-h-[300px] md:min-h-[400px] lg:min-h-[500px] overflow-hidden">
      <Image
        src="https://res.cloudinary.com/dmivjpb65/image/upload/q_auto/v1771870525/Foto_Grupal_wysar4.png"
        alt="Equipo Dripsa"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
        quality={100}
      />
    </div>
  )
}