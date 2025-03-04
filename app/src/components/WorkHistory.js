import React from 'react';
import Section from './Section';
import { useTheme } from '../context/ThemeContext';

const Job = ({ title, company, period, location, responsibilities }) => {
  const { darkMode } = useTheme();
  
  return (
    <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md`}>
      <div className="flex justify-between flex-wrap gap-4 mb-4">
        <div>
          <h3 className={`text-xl font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>{title}</h3>
          <p className="text-lg">{company}</p>
        </div>
        <div className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          <p>{period}</p>
          <p>{location}</p>
        </div>
      </div>
      <ul className="list-disc pl-5 space-y-2">
        {responsibilities.map((resp, index) => (
          <li key={index}>{resp}</li>
        ))}
      </ul>
    </div>
  );
};

const WorkHistory = () => {
  const jobs = [
    {
      title: 'Data Engineer',
      company: 'EOG Resources',
      period: 'Apri1 2024 - December 2024',
      location: 'Houston, TX',
      responsibilities: [
        'Optimized SQL and PL/SQL workflows, improving query performance by 30% and enabling faster data-driven decisions across operational teams.',
        'Developed and automated ETL pipelines using Python, increasing processing speed by 4x through multithreading and deployment on upgraded hardware.',
        'Transformed and loaded vendor data into conversational databases, supporting compliance tracking and streamlined reporting for 100+ end users.',
        'Collaborated with engineers to enhance internal AI platforms, integrating legacy applications and achieving a 25% improvement in data accessibility.',
        'Processed and analyzed budgeting data from thousands of company vendors, delivering insights that supported accurate forecasts and financial planning.',
        'Utilized internal tools for ticket management and testing, ensuring alignment with user expectations and successful software deployment.'
      ]
    },
    {
      title: 'Tutor',
      company: 'Scholarly Enrichment Program',
      period: 'January 2021 - December 2023',
      location: 'Houston, TX',
      responsibilities: [
        'Tutored and provided academic support in CIS, CS, PHYS, and MATH courses, enhancing students understanding and performance.',
        'Mentored students, offering guidance and insights to facilitate their academic and personal development.',
      ]
    }
  ];
  
  return (
    <Section id="work" title="Work History">
      <div className="space-y-8">
        {jobs.map((job, index) => (
          <Job key={index} {...job} />
        ))}
      </div>
    </Section>
  );
};

export default WorkHistory;