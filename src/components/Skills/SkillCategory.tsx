import React from 'react';

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  return (
    <div className="mb-6">
      <h3 className="text-neutral mb-4 flex items-center text-sm font-semibold">
        <span className="mr-2.5 h-px w-4 bg-accent"></span>
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index}
            className="rounded-lg border border-border bg-primary/60 px-3 py-1.5 text-xs text-primary-content transition duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:text-neutral"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
