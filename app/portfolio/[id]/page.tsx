import { PortfolioType } from '@/types/portfolio'
import { getPortfolios } from '@/utils/portfolio'
import Image from 'next/image'

export default async function Portfolio({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const portfolios: PortfolioType[] = await getPortfolios()

  const project = portfolios.find((p) => p.id == id)

  if (project == undefined) {
    return <div>Project not found</div>
  }

  return (
    <div className='flex p-8 w-[stretch] gap-8 wrap-anywhere'>
      <div className='flex flex-col bg-tertiary-bg p-2 rounded-md w-[40vw] gap-4'>
        {project.images.map((i) => {
          return (
            <Image
              key={i.url}
              src={i.url}
              alt='Project image'
              width={1024}
              height={614}
              style={{ width: '100%', height: 'auto' }}
              loading='eager'
            />
          )
        })}
      </div>
      <div className='bg-primary-bg w-[50vw] p-4 rounded-lg'>
        <h1 className='text-xl'>{project.title}</h1>
        <p className='mt-2'>{project.description}</p>
        <p className='text-lg mt-4'>Skills</p>
        <div className='flex flex-wrap gap-4 mt-2'>
          {project.skills.map((skill, id) => {
            return (
              <p key={id} className='bg-primary text-text-inv p-1'>
                {skill}
              </p>
            )
          })}
        </div>
        {project.links.length > 0 && (
          <div className='mt-4'>
            <h3 className='text-lg'>Project Links</h3>
            <div className='flex flex-col gap-4 mt-2'>
              {project.links.map((link) => {
                return (
                  <a
                    className='w-fit text-primary underline'
                    href={link}
                    key={link}
                    target='_blank'
                  >
                    {link.replace('https://', '')}
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
