export type PortfolioType = {
  id: number
  title: string
  description: string
  skills: string[]
  images: string[]
  links: { url: string }[]
  type: 'cpp' | 'unity' | 'webDevelopment'
}
