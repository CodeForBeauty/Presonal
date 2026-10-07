import { PortfolioType } from '@/types/portfolio'
import { getPortfolios } from '@/utils/portfolio'
import Image from 'next/image'
import Link from 'next/link'

function PortfolioProject({ project }: { project: PortfolioType }) {
  console.log(project)
  return (
    <Link href={`/portfolio/${project.id}`}>
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

export default async function Portfolio() {
  const portfolios: PortfolioType[] = await getPortfolios()

  return (
    <div>
      <h1>Portfolio</h1>
      <div
        className='grid gap-4'
        style={{ gridTemplateColumns: 'repeat(auto-fill, 24rem)' }}
      >
        {portfolios.map((d) => {
          return <PortfolioProject project={d} key={d.id} />
        })}
        {portfolios.map((d) => {
          return <PortfolioProject project={d} key={d.id} />
        })}
        {portfolios.map((d) => {
          return <PortfolioProject project={d} key={d.id} />
        })}
      </div>
    </div>
  )
}
