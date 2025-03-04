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
        'Led the frontend development of a major product redesign',
        'Implemented responsive design principles across all company products',
        'Mentored junior developers and conducted code reviews'
      ]
    },
    {
      title: 'Tutor',
      company: 'Scholarly Enrichment Program',
      period: 'January 2021 - December 2023',
      location: 'Houston, TX',
      responsibilities: [
        'Developed and maintained websites for various clients',
        'Collaborated with design and marketing teams',
        'Optimized website performance and improved SEO rankings'
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