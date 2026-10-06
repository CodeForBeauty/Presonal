import { PortfolioType } from '@/types/portfolio'

export default async function Portfolio() {
  const response = await fetch(
    'CHANGE THIS',
    {
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
          description
          skills
          images {
            url
          }
          links
          type
        }
      }
    `,
      }),
    },
  )

  const data = await response.json()

  const portfolios: PortfolioType[] = data.data.portfolios

  console.log(data)

  return (
    <div>
      {portfolios.map((d) => {
        return <div key={d.id}>{d.title}</div>
      })}
      <p>This is a portfolio page.</p>
    </div>
  )
}
