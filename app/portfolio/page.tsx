import { PortfolioType } from '@/types/portfolio'
import { getPortfolios } from '@/utils/portfolio'
import ProjectCard from '../_components/ProjectCard'

export default async function Portfolio() {
  const portfolios: PortfolioType[] = await getPortfolios()

  return (
    <div className='pt-8'>
      <h1 className='text-2xl text-center'>Portfolio</h1>
      <div
        className='grid gap-4 p-4 justify-center'
        style={{ gridTemplateColumns: 'repeat(auto-fit, 24rem)' }}
      >
        {portfolios.map((d) => {
          return <ProjectCard project={d} subfolder='portfolio' key={d.id} />
        })}
      </div>
    </div>
  )
}
