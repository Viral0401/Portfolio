import React from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import EducationCard from './EducationCard'
import { education } from '@/appData'
import { StaticImageData } from 'next/image'

const EducationSection: React.FC = () => {
  return (
    <section id="education">
      <div className="flex flex-col items-center">
        <div className="text-center">
          <SectionHeading
            title="Education"
            // subtitle=" My relevant experiences in the industry of engineering and technology"
          />
        </div>

        {/* one column only, stacked vertically */}
        <div className="my-8 grid grid-cols-1 gap-8 md:my-12">
          {education.map((edu) => {
            const cover = (edu.cover as StaticImageData).src
              ? (edu.cover as StaticImageData).src
              : (edu.cover as string)

            return (
              <EducationCard
                key={edu.title}
                data={{
                  ...edu,
                  cover,
                }}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default EducationSection
