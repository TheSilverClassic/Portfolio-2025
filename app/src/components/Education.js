import React from 'react';
import Section from './Section';
import { useTheme } from '../context/ThemeContext';

const EducationItem = ({ degree, institution, period, details, gpa }) => {
  const { darkMode } = useTheme();
  
  return (
    <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md`}>
      <div className="flex justify-between flex-wrap gap-4 mb-4">
        <div>
          <h3 className={`text-xl font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>{degree}</h3>
          <p className="text-lg">{institution}</p>
        </div>
        <div className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          <p>{period}</p>
        </div>
      </div>
      <p>{details}</p>
      {gpa && <p className="mt-2">GPA: {gpa}</p>}
    </div>
  );
};

const Education = () => {
  const educationItems = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Houston',
      period: '2021 - 2023',
      details: 'Programming, and Hardware and Software Systems',
      gpa: '3.6/4.0'
    },
    {
      degree: 'Associates of Science in Mathematics',
      institution: 'SanJacinto College',
      period: '2018 - 2020',
      details: 'Honors Program Student',
      gpa: '3.6/4.0'
    }
  ];
  
  return (
    <Section id="education" title="Education">
      <div className="space-y-8">
        {educationItems.map((item, index) => (
          <EducationItem key={index} {...item} />
        ))}
      </div>
    </Section>
  );
};

export default Education;