import { ProjectType } from '@/types/project'
import { getProjects } from '@/utils/projects'
import Image from 'next/image'

export default async function Portfolio({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const projects: ProjectType[] = await getProjects()

  const project = projects.find((p) => p.id == id)

  if (project == undefined) {
    return <div>Project not found</div>
  }

  return (
    <div className='flex p-8 w-[stretch] gap-8'>
      <div className='flex flex-col w-[40vw] gap-4'>
        {project.images.map((i) => {
          return (
            <Image
              key={i.url}
              src={i.url}
              alt='Project image'
              width={1024}
              height={614}
              style={{ width: '100%', height: 'auto' }}
            />
          )
        })}
      </div>
      <div className='bg-gray-800 w-[50vw]'>
        <div>{project.title}</div>
        <div>{project.description}</div>
        <div>{project.type}</div>
        {project.skills.map((skill, id) => {
          return <div key={id}>{skill}</div>
        })}
        <div>
          <h3>Client review</h3>
          <p>{project.review}</p>
        </div>
        {project.links.length > 0 && (
          <div>
            <p>Links</p>
            <div>
              {project.links.map((link) => {
                return (
                  <a href={link} key={link} target='_blank'>
                    {link}
                  </a>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
