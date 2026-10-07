export type PortfolioType = {
  id: string
  title: string
  brief: string
  description: string
  skills: string[]
  images: { url: string }[]
  thumbnail: { url: string }
  links: string
  type: 'cpp' | 'unity' | 'webDevelopment'
}
