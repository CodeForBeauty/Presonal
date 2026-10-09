import { ProjectType } from '@/types/project'
import { getProjects } from '@/utils/projects'
import ProjectCard from '../_components/ProjectCard'

export default async function Projects() {
  const projects: ProjectType[] = await getProjects()

  return (
    <div className='pt-8'>
      <h1 className='text-2xl text-center'>Client Projects</h1>
      <div
        className='grid gap-4 p-4 justify-center'
        style={{ gridTemplateColumns: 'repeat(auto-fit, 24rem)' }}
      >
        {projects.map((d) => {
          return <ProjectCard project={d} subfolder='projects' key={d.id} />
        })}
      </div>
    </div>
  )
}
