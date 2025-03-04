import React from 'react';
import Section from './Section';
import { useTheme } from '../context/ThemeContext';

const ProjectCard = ({ title, description, technologies, github }) => {
  const { darkMode } = useTheme();
  
  return (
    <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md hover:shadow-lg transition-shadow hover:translate-y-[-5px] transform transition-transform p-6`}>
      <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>{title}</h3>
      <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span 
            key={index} 
            className={`text-xs px-3 py-1 rounded-full ${darkMode ? 'bg-gray-700 text-blue-300' : 'bg-blue-100 text-blue-800'}`}
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        {github ? (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-3 py-1.5 rounded text-sm font-medium ${darkMode ? 'bg-gray-700 text-blue-300 hover:bg-gray-600' : 'bg-blue-600 text-white hover:bg-blue-700'} transition-colors`}
          >
            View Code
          </a>
        ) : (
          <a 
            href="#"
            className={`px-3 py-1.5 rounded text-sm font-medium ${darkMode ? 'bg-gray-700 text-blue-300 hover:bg-gray-600' : 'bg-blue-600 text-white hover:bg-blue-700'} transition-colors opacity-50 cursor-not-allowed`}
          >
            Code Coming Soon
          </a>
        )}
        {/* Only show Live Demo button if we implement this feature in the future */}
        {/*
        <a
          href="#"
          className={`px-3 py-1.5 rounded text-sm font-medium ${darkMode ? 'bg-blue-600 text-white hover:bg-blue-500' : 'bg-blue-600 text-white hover:bg-blue-700'} transition-colors`}
        >
          Live Demo
        </a>
        */}
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Mastermind Game',
      description: 'Color guessing game created using Test-Driven Development (TDD) principles, emphasizing code quality and design principles.',
      technologies: ['Python', 'TDD', 'JUnit', 'OOP'],
      github: 'https://github.com/TheSilverClassic/Mastermind'
    },
    {
      title: 'Spelling Service',
      description: 'Program that identifies and corrects spelling errors in text files using an external spelling check service.',
      technologies: ['Python', 'Test-First Development', 'API Integration', 'File I/O'],
      github: 'https://github.com/TheSilverClassic/Spelling_Service'
    },
    {
      title: 'Airport Sorter Terminal',
      description: 'Console program for sorting airport data based on user-defined criteria, following Single Responsibility and Open-Closed principles.',
      technologies: ['Python', 'Design Patterns', 'OOP', 'Console Application'],
      github: 'https://github.com/TheSilverClassic/Airports'
    },
    {
      title: 'Application Processor',
      description: 'Console application to evaluate job applicants using dynamically selected criteria and applied strategy pattern.',
      technologies: ['Python', 'Design Patterns', 'Strategy Pattern', 'Command Pattern'],
      github: 'https://github.com/TheSilverClassic/Application_Processor'
    },
    {
      title: 'Perfect Number',
      description: 'Program that identifies and prints perfect numbers based on user input ranges.',
      technologies: ['Python', 'Test-First Development', 'Mathematics', 'Console Application'],
      github: 'https://github.com/TheSilverClassic/Perfect_Number'
    },
    {
      title: 'Raspberry Pi Temperature Monitor',
      description: 'System using Raspberry Pi 3A+ with temperature sensor to monitor and record temperature variations over time.',
      technologies: ['Python', 'Raspberry Pi', 'IoT', 'Sensors', 'Data Visualization']
    }
  ];
  
  return (
    <Section id="projects" title="Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;