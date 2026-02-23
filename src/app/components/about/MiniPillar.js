import Image from 'next/image'
import React from 'react'

const MiniPillar = ({ imageUrl, text }) => {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Image Container - Following the same sizing pattern but smaller */}
      <div className="relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mb-2">
        <Image
          src={imageUrl}
          alt="Pillar icon"
          fill
          sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, 96px"
          className="object-contain"
        />
      </div>
      
      {/* Text - White color to match the original PillarsSection */}
      <p className="text-white text-xs md:text-sm leading-tight max-w-[120px]">
        {text}
      </p>
    </div>
  )
}

export default MiniPillar