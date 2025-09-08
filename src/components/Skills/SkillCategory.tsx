import React from 'react';

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  return (
    <div className="mb-6">
      <h3 className="text-accent text-lg font-semibold mb-3 flex items-center">
        <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2.5"></span>
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index}
            className="bg-primary px-3 py-1.5 rounded-md text-sm text-primary-content border border-[#1e2d3d] hover:border-accent transition-colors duration-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;