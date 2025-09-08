import { Research } from '@/lib/types'
import SectionHeading from '../SectionHeading/SectionHeading'
import ResearchCard from './ResearchCard'

interface ResearchSectionProps {
  research: Research[]
}

const ResearchSection: React.FC<ResearchSectionProps> = ({ research }) => {
  return (
    <section id="research">
      <div className="flex justify-center">
        <SectionHeading title="Research" />
      </div>

      <div className="my-8 flex flex-col gap-8 md:my-12">
        {research.map((paper) => (
          <ResearchCard key={paper.id} data={paper} />
        ))}
      </div>
    </section>
  )
}

export default ResearchSection