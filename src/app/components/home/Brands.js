import React from 'react'
import BrandsGrid from './BrandsGrid'

export default function Brands() {
  return (
    <div 
      className="w-full h-full min-h-[450px] md:min-h-[550px] p-3 md:p-4 flex items-center"
      style={{ backgroundColor: '#fef0e3' }}
    >
      <BrandsGrid />
    </div>
  )
}