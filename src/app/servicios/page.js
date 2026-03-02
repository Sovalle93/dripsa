import ServiceCard from '../components/services/ServiceCard'
import { servicesData } from '../data/DataServices'

export default function ServiciosPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-32 md:pt-40 pb-20">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 mb-16">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-center">
          <span style={{ color: '#012758' }}>Nuestros</span>{' '}
          <span style={{ color: '#548e7d' }}>Servicios</span>
        </h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
          Soluciones integrales de riego diseñadas para maximizar la productividad de tu campo, 
          con tecnología de punta y el respaldo de más de 20 años de experiencia.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 mt-20">
        <div className="bg-gradient-to-r from-[#012758] to-[#548e7d] rounded-3xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Necesitas una solución personalizada?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Nuestro equipo de expertos está listo para diseñar el sistema perfecto para tu proyecto.
          </p>
          <a 
            href="/contacto"
            className="inline-block bg-white text-[#012758] px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Contáctanos
          </a>
        </div>
      </div>
    </main>
  )
}