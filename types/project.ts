import { PortfolioType } from './portfolio'

export type ProjectType = PortfolioType & {
  review: string
}
