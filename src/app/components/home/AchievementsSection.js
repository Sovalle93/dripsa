export default function AchievementsSection() {
  const achievements = [
    {
      number: "2600",
      text: "PROYECTOS COMPLETADOS"
    },
    {
      number: "8000",
      text: "MTS BODEGAS EN SANTIAGO Y LA SERENA"
    },
    {
      number: "+20",
      text: "AÑOS DE EXPERIENCIA"
    },
    {
      number: "+70",
      text: "TRABAJADORES"
    }
  ]

  return (
    <section className="py-16 px-4 md:py-20 md:px-8 lg:px-16 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 max-w-7xl mx-auto">
        {achievements.map((item, index) => (
          <div key={index} className="relative text-center lg:text-left">
            {/* Add vertical separator between items (except last) */}
            {index < achievements.length - 1 && (
              <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gray-300"></div>
            )}
            
            <div 
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-2" 
              style={{ color: '#6B4F4F' }}
            >
              {item.number}
            </div>
            <div 
              className="text-sm md:text-base font-bold tracking-wide max-w-[200px] mx-auto lg:mx-0" 
              style={{ color: '#6B4F4F' }}
            >
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}