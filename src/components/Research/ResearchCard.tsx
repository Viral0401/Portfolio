"use client";

import { Research } from '@/lib/types';
import { FiExternalLink, FiGithub, FiFileText } from 'react-icons/fi';
import { useState } from 'react';

interface ResearchCardProps {
  data: Research;
}

const ResearchCard: React.FC<ResearchCardProps> = ({ data }) => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  return (
    <div className="bg-secondary border-border flex flex-col rounded-[14px] border p-5 relative">
      <div className="flex justify-between items-start">
        <h5 className="text-accent text-xl font-semibold pr-24">{data.title}</h5>
        
        <div className="absolute top-5 right-5 inline-block rounded-md bg-[#10B9811A] px-3 py-1 text-xs font-medium text-[#34D399]">
          {data.status}
        </div>
      </div>
      
      <div className="text-neutral text-sm mt-2 mb-4">
        Venue: <span className="text-gray-400 italic font-light">{data.venue}</span> ({data.year})
      </div>
      
      <div className="bg-primary rounded-2xl p-4">
        {data.keyPoints.length === 1 ? (
            <p className="text-primary-content text-sm">{data.keyPoints[0]}</p>
        ) : (
            <ul className="text-primary-content space-y-2 text-sm list-disc pl-5">
            {data.keyPoints.map((point, index) => (
                <li key={index}>{point}</li>
            ))}
            </ul>
        )}
        </div>
      
      <div className="mt-4 flex justify-end space-x-3">
        {data.githubUrl && (
          <div className="relative group">
            <a 
              href={data.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral hover:text-accent"
              onMouseEnter={() => setActiveTooltip('github')}
              onMouseLeave={() => setActiveTooltip(null)}
            >
              <FiGithub className="h-5 w-5" />
            </a>
            <div className={`absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-zinc-800 text-white text-xs rounded whitespace-nowrap transition-opacity ${
              activeTooltip === 'github' ? 'opacity-100' : 'opacity-0'
            }`}>
              GitHub
            </div>
          </div>
        )}
        {data.paperUrl && (
          <div className="relative group">
            <a 
              href={data.paperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral hover:text-accent"
              onMouseEnter={() => setActiveTooltip('paper')}
              onMouseLeave={() => setActiveTooltip(null)}
            >
              <FiFileText className="h-5 w-5" />
            </a>
            <div className={`absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-zinc-800 text-white text-xs rounded whitespace-nowrap transition-opacity ${
              activeTooltip === 'paper' ? 'opacity-100' : 'opacity-0'
            }`}>
              Paper
            </div>
          </div>
        )}
        {data.proofUrl && (
          <div className="relative group">
            <a 
              href={data.proofUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral hover:text-accent"
              onMouseEnter={() => setActiveTooltip('proof')}
              onMouseLeave={() => setActiveTooltip(null)}
            >
              <FiExternalLink className="h-5 w-5" />
            </a>
            <div className={`absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-zinc-800 text-white text-xs rounded whitespace-nowrap transition-opacity ${
              activeTooltip === 'proof' ? 'opacity-100' : 'opacity-0'
            }`}>
              Proof of Acceptance
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResearchCard;