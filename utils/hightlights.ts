import { PortfolioType } from '@/types/portfolio'
import config from './config'

export type HightlightType = {
  id: string
  project: PortfolioType & {
    __typename: string
  }
}

export async function getHighlights() {
  const response = await fetch(config.cmsUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      query GetHighlights {
        highlights {
          id
          project {
            __typename
            ... on Project {
              id
              title
              brief
              skills
              thumbnail {
                url
              }
              type
            }
            ... on Portfolio {
              id
              title
              brief
              skills
              thumbnail {
                url
              }
              type
            }
          }
        }
      }
    `,
      cache: 'force-cache',
    }),
  })

  const data = await response.json()

  const highlights: HightlightType[] = data.data.highlights

  return highlights.reverse()
}
