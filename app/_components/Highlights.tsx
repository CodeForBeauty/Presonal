import { getHighlights, HightlightType } from '@/utils/hightlights'
import ProjectCard from './ProjectCard'

export default async function Highlights() {
  const highlights: HightlightType[] = await getHighlights()

  return (
    <div className='flex flex-col pt-8'>
      <h1 className='text-2xl text-center'>Highlights</h1>
      <div
        className='grid gap-4 p-4 justify-center'
        style={{ gridTemplateColumns: 'repeat(auto-fit, 24rem)' }}
      >
        {highlights.map((d) => {
          return (
            <ProjectCard
              project={d.project}
              subfolder={
                d.project.__typename.toLowerCase() == 'portfolio'
                  ? 'portfolio'
                  : 'projects'
              }
              key={d.id}
            />
          )
        })}
      </div>
      <a href='/projects' className='self-center'>
        <button className='bg-primary p-2 rounded-lg'>See more</button>
      </a>
    </div>
  )
}
