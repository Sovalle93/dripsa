import VideoProject from '../components/projects/VideoProject'

export default function ProyectosPage() {
  const projects = [
    {
      id: 1,
      videoUrl: "https://res.cloudinary.com/dmivjpb65/video/upload/v1771870527/Video_3_zs5tnj.mp4",
      title: "AGRÍCOLA PUERTO MORI OSORNO",
      description: "Proyecto de regadío para plantación de avellanos realizado en 5 etapas de 100 hectáreas anuales, utilizando línea de goteros no auto-compensados Netafim.",
      year: "2020"
    },
    {
      id: 2,
      videoUrl: "https://res.cloudinary.com/dmivjpb65/video/upload/v1771870531/Video_2_syzs8a.mp4",
      title: "AGRÍCOLA EL CÁNTARO TALAGANTE",
      description: "Proyecto de plantación de 25 hectáreas de cítricos realizado en la zona de Talagante, utilizando en el equipo de riego filtros de arena Tacsa y línea de goteros Netafim Aries.",
      year: "2020"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {projects.map((project, index) => (
        <VideoProject 
          key={project.id} 
          project={project} 
          isEven={index % 2 === 0}
        />
      ))}
    </div>
  )
}