import { services, ServiceType } from '@/utils/services'

function Service({ service }: { service: ServiceType }) {
  return (
    <div className='bg-primary-bg rounded-md p-4 animate-in transition-all hover:border-blue-800/40 border-2 border-transparent'>
      <div>{service.title}</div>
      <div>Deliverable: {service.deliverable}</div>
      <div>Budget: {service.price}</div>
      <div>Deadline: {service.duration}</div>
    </div>
  )
}

export default function Services() {
  return (
    <div className='flex flex-col items-center'>
      <div className='w-stretch max-w-5xl m-4 mt-8'>
        <h1 className='text-2xl'>
          Don't know where to start? Grab any of predefined services below as a
          template.
        </h1>
        <div className='flex flex-col mt-4 gap-4'>
          {services.map((s) => (
            <Service service={s} key={s.title} />
          ))}
        </div>
        <h3 className='text-lg text-center mt-4'>
          Contact me with your needs for a fast and easy consultation.
        </h3>
      </div>
    </div>
  )
}
