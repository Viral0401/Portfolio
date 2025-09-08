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
    <section id="skills" className="my-14">
      <div className="flex flex-col items-center">
        <div className="text-center">
          <SectionHeading
            title="Technical Skills"
            subtitle="Technologies and tools I work with"
          />
        </div>

        <div className="mt-8 w-full max-w-[1100px] bg-secondary border-border rounded-[14px] border p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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