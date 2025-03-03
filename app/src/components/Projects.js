import React from 'react';
import Section from './Section';
import { useTheme } from '../context/ThemeContext';

const ProjectCard = ({ title, description, technologies }) => {
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
        <a 
          href="#" 
          className={`px-3 py-1.5 rounded text-sm font-medium ${darkMode ? 'bg-gray-700 text-blue-300 hover:bg-gray-600' : 'bg-blue-600 text-white hover:bg-blue-700'} transition-colors`}
        >
          View Code
        </a>
        <a 
          href="#" 
          className={`px-3 py-1.5 rounded text-sm font-medium ${darkMode ? 'bg-blue-600 text-white hover:bg-blue-500' : 'bg-blue-600 text-white hover:bg-blue-700'} transition-colors`}
        >
          Live Demo
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe']
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates',
      technologies: ['Vue.js', 'Firebase', 'Vuetify']
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather forecast application with location-based services',
      technologies: ['React', 'OpenWeather API', 'Chart.js']
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