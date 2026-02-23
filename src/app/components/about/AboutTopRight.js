import React from 'react'

export default function AboutTopRight() {
  return (
    <div className="w-full h-full min-h-[300px] md:min-h-[400px] lg:min-h-[500px] p-6 md:p-8 lg:p-10 flex items-center" style={{ backgroundColor: '#415978' }}>
      <div className="text-white space-y-4 text-sm md:text-base lg:text-lg leading-relaxed">
        <p>
          Somos una empresa creada el año 2003, especialistas en la importación y distribución de materiales hidráulicos para la Agroindustria. Contamos con profesionales altamente capacitados para entregar una asesoría al momento de la venta de materiales y equipos necesarios para la implementación, reparación y mantención de sistemas de riego tecnificado.
        </p>
        <p>
          Además, de una red de distribución presente desde la III a la X región. Somos distribuidores de grandes marcas reconocidas a nivel mundial, las cuales entregan la mejor calidad y tecnología para optimizar el consumo del agua.
        </p>
      </div>
    </div>
  )
}