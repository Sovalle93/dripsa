import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-white py-12 px-4 md:py-16 md:px-8 lg:px-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-12">
          
          {/* Logo - Centered on mobile, left on desktop */}
          <div className="flex justify-center md:justify-start w-full md:w-auto">
            <div className="relative w-48 h-24 md:w-56 md:h-28 lg:w-64 lg:h-32">
              <Image
                src="https://res.cloudinary.com/dmivjpb65/image/upload/v1772826603/Logo_Dripsa_yw0czn.png"
                alt="Dripsa Logo"
                fill
                sizes="(max-width: 768px) 192px, (max-width: 1024px) 224px, 256px"
                className="object-contain"
              />
            </div>
          </div>

          {/* Contact Info - Centered on mobile, right on desktop */}
          <div className="text-black space-y-2 text-base md:text-lg text-center md:text-right">
            <p className="font-medium">Cordillera 251, 8730608 Quilicura</p>
            <p className="font-medium">Región Metropolitana</p>
            <p className="font-medium mt-4">ventas@dripsa.cl</p>
            <p className="font-medium">+562 2578 8000</p>
          </div>
        </div>
      </div>
    </footer>
  )
}