import config from '@/utils/config'
import { getPortfolios } from '@/utils/portfolio'
import { getProjects } from '@/utils/projects'
import type { MetadataRoute } from 'next'

const urlBase: string = config.siteUrl

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let output: MetadataRoute.Sitemap = [
    { url: urlBase, lastModified: new Date(), priority: 1 },
    { url: `${urlBase}/services`, lastModified: new Date(), priority: 1 },
    { url: `${urlBase}/portfolio`, lastModified: new Date(), priority: 0.5 },
    { url: `${urlBase}/projects`, lastModified: new Date(), priority: 0.5 },
  ]

  const portfolios = await getPortfolios()

  for (let i = 0; i < portfolios.length; i++) {
    output = output.concat({
      url: `${urlBase}/portfolio/${portfolios[i].id}`,
      lastModified: new Date(),
      priority: 0.5,
    })
  }

  const projects = await getProjects()

  for (let i = 0; i < projects.length; i++) {
    output = output.concat({
      url: `${urlBase}/projects/${projects[i].id}`,
      lastModified: new Date(),
      priority: 0.5,
    })
  }

  return output
}
