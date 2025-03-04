import React from 'react';
import Section from './Section';
import { useTheme } from '../context/ThemeContext';

const SkillCategory = ({ title, skills }) => {
  const { darkMode } = useTheme();
  
  return (
    <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md`}>
      <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index} 
            className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-700 text-blue-300' : 'bg-blue-100 text-blue-800'}`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming & Development',
      skills: ['Python', 'SQL', 'PL/SQL', 'C++', 'Data Schema Design', 'Workflow Automation', 'Git', 'SVN', 'SQL Optimization', 'Backend Integration']
    },
    {
      title: 'Data Engineering',
      skills: ['ETL', 'Data Pipelines', 'Relational Databases', 'NoSQL Databases']
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS', 'GCP', 'Docker', 'Kubernetes']
    },
    {
      title: 'Data Visualization',
      skills: ['Tableau', 'Power BI', 'Spotfire', 'Dashboard Creation', 'Forecasting']
    },
    {
      title: 'Professional Skills',
      skills: ['Process Improvement', 'IT Asset Management', 'Cross-functional Collaboration', 'Stakeholder Engagement', 'Lifecycle Management']
    },
    {
      title: 'Languages',
      skills: ['English (Fluent)', 'Spanish (Fluent)']
    }
  ];
  
  return (
    <Section id="skills" title="Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <SkillCategory key={index} {...category} />
        ))}
      </div>
    </Section>
  );
};

export default Skills;