import { Research } from '@/lib/types';
import { FiExternalLink, FiGithub, FiFileText } from 'react-icons/fi';

interface ResearchCardProps {
  data: Research;
}

const ResearchCard: React.FC<ResearchCardProps> = ({ data }) => {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-border bg-secondary/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-black/15">
      <div className="mb-5 flex items-center justify-between gap-3">
        <span className="text-primary-content text-xs font-medium uppercase tracking-widest">{data.year} · Research</span>
        <div className="rounded-full border border-accent/20 bg-accent/5 px-2.5 py-1 text-[11px] font-medium text-accent">
          {data.status}
        </div>
      </div>
      <h3 className="text-neutral text-lg font-semibold leading-7">{data.title}</h3>
      <p className="text-primary-content mt-3 text-xs leading-5">{data.venue}</p>
      <div className="mt-5 flex-1 border-t border-border pt-5">
        {data.keyPoints.length === 1 ? (
            <p className="text-primary-content text-sm leading-6">{data.keyPoints[0]}</p>
        ) : (
            <ul className="text-primary-content space-y-2 text-sm list-disc pl-5">
            {data.keyPoints.map((point, index) => (
                <li key={index}>{point}</li>
            ))}
            </ul>
        )}
        </div>
      
      <div className="mt-6 flex items-center gap-2">
        {data.githubUrl && (
            <a 
              href={data.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View GitHub repository"
              className="rounded-lg border border-border p-2 text-primary-content transition hover:border-accent/50 hover:text-accent"
            >
              <FiGithub className="h-5 w-5" />
            </a>
        )}
        {data.paperUrl && (
            <a 
              href={data.paperUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Read paper"
              className="rounded-lg border border-border p-2 text-primary-content transition hover:border-accent/50 hover:text-accent"
            >
              <FiFileText className="h-5 w-5" />
            </a>
        )}
        {data.proofUrl && (
            <a 
              href={data.proofUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View acceptance proof"
              className="rounded-lg border border-border p-2 text-primary-content transition hover:border-accent/50 hover:text-accent"
            >
              <FiExternalLink className="h-5 w-5" />
            </a>
        )}
      </div>
    </article>
  );
};

export default ResearchCard;
