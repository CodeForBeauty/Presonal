import { PortfolioType } from '@/types/portfolio'
import Image from 'next/image'
import Link from 'next/link'

export default function ProjectCard({
  project,
  subfolder,
}: {
  project: PortfolioType
  subfolder: string
}) {
  return (
    <Link href={`/${subfolder}/${project.id}`} className='h-fit animate-in'>
      <div className='bg-primary-bg p-3 rounded-lg shadow-md hover:shadow-xl hover:outline-2 transition-all hover:outline-blue-400/40 outline-transparent shadow-black-800 hover:-translate-y-1'>
        <Image
          src={project.thumbnail.url}
          alt='Project thumbnail'
          width={512}
          height={307}
          style={{ height: '50%', width: 'auto' }}
          loading='eager'
        />
        <div className='text-lg mt-2'>{project.title}</div>
        <div>{project.brief}</div>
        <div>{project.type}</div>
      </div>
    </Link>
  )
}
