import Image from 'next/image'
import React from 'react'

const TeamMember = ({ name, role, imageUrl }) => {
  // Use a placeholder image if none provided
  const imgSrc = imageUrl || "https://placehold.co/200x200/ffffff/415978?text=Profile"
  
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden mb-2 border-2 border-white/30">
        <Image 
          src={imgSrc} 
          alt={name} 
          fill 
          className="object-cover"
          sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 112px"
        />
      </div>
      <h3 className="font-bold text-sm md:text-base text-white"> {/* White text */}
        {name}
      </h3>
      <p className="text-xs md:text-sm text-white/80"> {/* White with opacity */}
        {role}
      </p>
    </div>
  )
}

export default TeamMember