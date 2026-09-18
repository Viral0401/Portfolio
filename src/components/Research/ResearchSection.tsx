import { Research } from '@/lib/types'
import SectionHeading from '../SectionHeading/SectionHeading'
import ResearchCard from './ResearchCard'
import { SiGooglescholar } from 'react-icons/si'

interface ResearchSectionProps {
  research: Research[]
}

const ResearchSection: React.FC<ResearchSectionProps> = ({ research }) => {
  return (
    <section id="research">
      <div>
        <SectionHeading title="Research" subtitle="Work at the intersection of trustworthy AI, peer review, applied NLP, and human-centered systems." />
        <a
          href="https://scholar.google.com/citations?user=wwizFiEAAAAJ&hl=en"
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/60 px-4 py-2.5 text-sm text-primary-content transition hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
        >
          <SiGooglescholar className="h-5 w-5" />
          Google Scholar
          <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs text-accent">8 citations</span>
        </a>
      </div>

      <div className="research-grid mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
        {research.map((paper) => (
          <ResearchCard key={paper.id} data={paper} />
        ))}
      </div>
    </section>
  )
}

export default ResearchSection
