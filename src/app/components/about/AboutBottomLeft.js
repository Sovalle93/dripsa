import React from 'react'
import TeamMember from './TeamMember'
import MiniPillar from './MiniPillar'

export default function AboutBottomLeft() {
  // Placeholder data
  const team = [
    { name: "Nombre Apellido", role: "CEO" },
    { name: "Nombre Apellido", role: "Gerente Técnico" },
    { name: "Nombre Apellido", role: "Jefe de Ventas" },
  ]
  const pillars = [
    { 
      id: 1, 
      img: "https://res.cloudinary.com/dmivjpb65/image/upload/v1771875767/Pilar_1-removebg-preview_fxqpch.png", 
      text: "Somos una empresa creada el año 2003, especialistas en la importación" 
    },
    { 
      id: 2, 
      img: "https://res.cloudinary.com/dmivjpb65/image/upload/v1771875767/Pilar_2-removebg-preview_nmnkp7.png", 
      text: "Somos una empresa creada el año 2003, especialistas en la importación" 
    },
    { 
      id: 3, 
      img: "https://res.cloudinary.com/dmivjpb65/image/upload/v1771875766/Pilar_3-removebg-preview_wfqvtv.png", 
      text: "Somos una empresa creada el año 2003, especialistas en la importación" 
    },
    { 
      id: 4, 
      img: "https://res.cloudinary.com/dmivjpb65/image/upload/v1771875766/Pilar_4-removebg-preview_qe5uox.png", 
      text: "Somos una empresa creada el año 2003, especialistas en la importación" 
    },
  ]

  return (
    <div 
      className="w-full h-full min-h-[500px] md:min-h-[600px] p-4 md:p-6 lg:p-8 flex flex-col justify-between"
      style={{ backgroundColor: '#5b74aa' }} // Adding the blue background
    >
      {/* Top part: Team Profiles */}
      <div>
        <h2 
          className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 text-center md:text-left"
          style={{ color: '#ffffff' }} // White text for title
        >
          Nuestro Equipo
        </h2>
        <div className="grid grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10">
          {team.map((member, index) => (
            <TeamMember key={index} name={member.name} role={member.role} />
          ))}
        </div>
      </div>

      {/* Bottom part: Mini Pillars */}
      <div>
        <h2 
          className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 text-center md:text-left"
          style={{ color: '#ffffff' }} // White text for title
        >
          Nuestros Pilares
        </h2>
        <div className="grid grid-cols-4 gap-2 md:gap-4">
          {pillars.map((pillar) => (
            <MiniPillar key={pillar.id} imageUrl={pillar.img} text={pillar.text} />
          ))}
        </div>
      </div>
    </div>
  )
}