import VideoProject from '../components/projects/VideoProject'
import { Projects } from '../data/DataProjects'

export default function ProyectosPage() {
  // Create a sorted copy of the projects array (newest first)
  const sortedProjects = [...Projects].sort((a, b) => {
    // Convert year to number and compare (descending = newest first)
    return parseInt(b.year) - parseInt(a.year)
  })

  return (
    <div className="min-h-screen bg-white">
      {sortedProjects.map((project, index) => (
        <VideoProject 
          key={project.id} 
          project={project} 
          isEven={index % 2 === 0}
        />
      ))}
    </div>
  )
}