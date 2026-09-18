import React from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import EducationCard from './EducationCard'
import { education } from '@/appData'
import { StaticImageData } from 'next/image'

const EducationSection: React.FC = () => {
  return (
    <section id="education">
      <div>
        <div>
          <SectionHeading
            title="Education"
            // subtitle=" My relevant experiences in the industry of engineering and technology"
          />
        </div>

        {/* one column only, stacked vertically */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {education.map((edu) => {
            // Properly check the type and handle the conversion safely
            const cover = typeof edu.cover === 'string'
              ? edu.cover
              : ((edu.cover as StaticImageData).src || '')

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
