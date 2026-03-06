import Image from 'next/image'
import { brandsData } from '../../data/DataBrands'

export default function BrandsGrid() {
  return (
    <div className="w-full h-full bg-white rounded-xl p-4 md:p-6 flex flex-col">
      {/* Title - Restored */}
      <h2 
        className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 text-center"
        style={{ color: '#5C3A3A' }}
      >
        Marcas que Trabajan con Nosotros
      </h2>
      
      {/* Grid - OPTIMIZED FOR MAXIMUM LOGO SIZE */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-3 md:gap-4 flex-1 items-center">
        {brandsData.map((brand) => (
          <div 
            key={brand.id}
            className="relative aspect-square flex items-center justify-center p-1 bg-gray-50 rounded-lg hover:shadow-md transition-shadow duration-300"
          >
            {/* Logo Image - NOW EVEN BIGGER */}
            <div className="relative w-11/12 h-5/6">
              <Image
                src={brand.imageUrl}
                alt={brand.alt}
                fill
                sizes="(max-width: 640px) 100px, (max-width: 768px) 120px, (max-width: 1024px) 140px, 160px"
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}