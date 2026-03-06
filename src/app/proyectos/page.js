import ProjectCard from '../components/projects/ProjectCard' // Changed import name
import { Projects } from '../data/DataProjects'

export default function ProyectosPage() {
  // Create a sorted copy of the projects array (newest first)
  const sortedProjects = [...Projects].sort((a, b) => {
    return parseInt(b.year) - parseInt(a.year)
  })

  return (
    <div className="min-h-screen bg-white">
      {sortedProjects.map((project, index) => (
        <ProjectCard // Changed component name
          key={project.id} 
          project={project} 
          isEven={index % 2 === 0}
        />
      ))}
    </div>
  )
}