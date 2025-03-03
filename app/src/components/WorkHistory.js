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
      title: 'Senior Frontend Developer',
      company: 'Tech Company Inc.',
      period: 'January 2022 - Present',
      location: 'San Francisco, CA',
      responsibilities: [
        'Led the frontend development of a major product redesign',
        'Implemented responsive design principles across all company products',
        'Mentored junior developers and conducted code reviews'
      ]
    },
    {
      title: 'Web Developer',
      company: 'Digital Agency LLC',
      period: 'June 2019 - December 2021',
      location: 'New York, NY',
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