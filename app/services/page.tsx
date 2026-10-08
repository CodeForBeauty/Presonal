import { services, ServiceType } from '@/utils/services'

function Service({ service }: { service: ServiceType }) {
  return (
    <div>
      <div>{service.title}</div>
      <div>Deliverable: {service.deliverable}</div>
      <div>Budget: {service.price}</div>
      <div>Deadline: {service.duration}</div>
    </div>
  )
}

export default function Services() {
  return (
    <div>
      <h1>
        Don't know where to start? Grab any of predefined services below as a
        template.
      </h1>
      <div>
        {services.map((s) => (
          <Service service={s} key={s.title} />
        ))}
      </div>
      <h3>Contact me with your needs for a fast and easy consultation.</h3>
    </div>
  )
}
