import { serviceData } from '../../appData'
import SectionHeading from '../SectionHeading/SectionHeading'
import ServiceCard from './ServiceCard'


const ServiceSection = () => {
  return (
    <section id="services" className="my-14">
      <div className="flex flex-col items-center">
        <div className="text-center">
          <SectionHeading
            title="Experiences"
            subtitle=" My relevant experiences in the industry of engineering and technology"
          />
        </div>

        <div className="mt-8 w-full max-w-[1100px] grid grid-cols-1 gap-x-8 gap-y-8 md:mt-[3.75rem] md:grid-cols-2">
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
