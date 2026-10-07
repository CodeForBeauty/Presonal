import { PortfolioType } from '@/types/portfolio'
import config from './config'

export async function getPortfolios() {
  const response = await fetch(config.cmsUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      query GetPortfolios {
        portfolios {
          id
          title
          brief
          description
          skills
          images {
            url
          }
          thumbnail {
            url
          }
          links
          type
        }
      }
    `,
      cache: 'force-cache',
    }),
  })

  const data = await response.json()

  const portfolios: PortfolioType[] = data.data.portfolios

  return portfolios
}
