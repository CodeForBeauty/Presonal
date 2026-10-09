import config from './config'
import { ProjectType } from '@/types/project'

export async function getProjects() {
  const response = await fetch(config.cmsUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      query GetProjects {
        projects {
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
          review
        }
      }
    `,
      cache: 'force-cache',
      next: { revalidate: 60 * 60 * 2 }, // 2 hours
    }),
  })

  const data = await response.json()

  const projects: ProjectType[] = data.data.projects

  return projects.reverse()
}
