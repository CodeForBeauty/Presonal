import { PortfolioType } from '@/types/portfolio'
import { getPortfolios } from '@/utils/portfolio'
import Image from 'next/image'

export default async function Portfolio({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  console.log(id)

  const portfolios: PortfolioType[] = await getPortfolios()

  const project = portfolios.find((p) => p.id == id)

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
      </div>
    </div>
  )
}
