import { serviceData } from '../../appData'
import SectionHeading from '../SectionHeading/SectionHeading'
import ServiceCard from './ServiceCard'


const ServiceSection = () => {
  return (
    <section id="services">
      <div>
        <div>
          <SectionHeading
            title="Experiences"
            subtitle="Building production AI, data, and software systems across research, startups, and community leadership."
          />
        </div>

        <div className="experience-grid mt-10 grid w-full grid-cols-1 gap-5 md:grid-cols-2">
          {serviceData.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              position={service.position}
              date={service.date}
              shortDescription={service.shortDescription}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceSection
