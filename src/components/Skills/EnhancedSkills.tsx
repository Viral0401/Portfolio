import React from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';
import SkillCategory from './SkillCategory';

interface EnhancedSkillsProps {
  skillCategories: {
    title: string;
    skills: string[];
  }[];
}

const EnhancedSkills: React.FC<EnhancedSkillsProps> = ({ skillCategories }) => {
  return (
    <section id="skills">
      <div>
        <div>
          <SectionHeading
            title="Technical Skills"
            subtitle="Technologies and tools I work with"
          />
        </div>

        <div className="mt-10 w-full rounded-2xl border border-border bg-secondary/60 p-6 md:p-8">
          <div className="grid grid-cols-1 gap-x-10 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, index) => (
              <SkillCategory
                key={index}
                title={category.title}
                skills={category.skills}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedSkills;
