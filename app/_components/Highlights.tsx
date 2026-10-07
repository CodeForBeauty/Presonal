import { PortfolioType } from '@/types/portfolio'
import { getHighlights } from '@/utils/hightlights'
import Image from 'next/image'
import Link from 'next/link'

function Highlight({ project }: { project: PortfolioType }) {
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

export default async function Highlights() {
  const highlights: PortfolioType[] = await getHighlights()

  return (
    <div>
      <h1>Highlights</h1>
      <div
        className='grid gap-4'
        style={{ gridTemplateColumns: 'repeat(auto-fill, 24rem)' }}
      >
        {highlights.map((d) => {
          return <Highlight project={d} key={d.id} />
        })}
      </div>
      <a href='/projects'>
        <button>More</button>
      </a>
    </div>
  )
}
