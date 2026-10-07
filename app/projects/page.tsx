import { ProjectType } from '@/types/project'
import { getProjects } from '@/utils/projects'
import Image from 'next/image'
import Link from 'next/link'

function ClientProject({ project }: { project: ProjectType }) {
  return (
    <Link href={`/projects/${project.id}`}>
      <div className='bg-gray-800'>
        <Image
          src={project.thumbnail.url}
          alt='Project thumbnail'
          width={512}
          height={307}
          style={{ height: '50%', width: 'auto' }}
        ></Image>
        <div>{project.title}</div>
        <div>{project.brief}</div>
        <div>{project.type}</div>
      </div>
    </Link>
  )
}

export default async function Projects() {
  const projects: ProjectType[] = await getProjects()

  return (
    <div>
      <h1>Client Projects</h1>
      <div
        className='grid gap-4'
        style={{ gridTemplateColumns: 'repeat(auto-fill, 24rem)' }}
      >
        {projects.map((d) => {
          return <ClientProject project={d} key={d.id} />
        })}
      </div>
    </div>
  )
}
