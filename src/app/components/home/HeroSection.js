export default function HeroSection() {
  return (
    <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="https://res.cloudinary.com/dmivjpb65/video/upload/v1771870528/Video_1_gbctay.mp4"
          type="video/mp4"
        />
      </video>

      {/* Hero Text */}
      <div className="absolute bottom-12 left-6 md:bottom-16 md:left-10 z-10 text-white">
        <h1 className="text-xl md:text-2xl leading-tight">
          Bienvenidos a Dripsa
          <br />
          Soluciones integrales de riego
        </h1>
      </div>
    </section>
  )
}