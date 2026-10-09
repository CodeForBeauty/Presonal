export type ServiceType = {
  title: string
  deliverable: string
  price: string
  duration: string
}

export const services: ServiceType[] = [
  {
    title: 'Fix a bug',
    deliverable: 'Fix a specific bug in our code base.',
    price: '50-100 USD',
    duration: '1-2 days',
  },
  {
    title: 'Implement a feature',
    deliverable: 'Implement a specific feature.',
    price: '100-200 USD',
    duration: '3-7 days',
  },
  {
    title: 'Create a software/game',
    deliverable: 'Build a software/game from scratch.',
    price: '500-1000 USD',
    duration: '1-2 weeks',
  },
  {
    title: 'Profile and find performance hitting areas',
    deliverable:
      'Profile a specific area of our code base and find performance issues.',
    price: '100-300 USD',
    duration: '3-5 days',
  },
]
