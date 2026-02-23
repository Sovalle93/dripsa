import React from 'react'

export default function AboutTopLeft() {
  return (
    <div className="relative w-full h-full min-h-[300px] md:min-h-[400px] lg:min-h-[500px] overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="https://res.cloudinary.com/dmivjpb65/video/upload/v1771876243/Video_Tagle_d3bmor.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  )
}