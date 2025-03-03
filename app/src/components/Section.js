import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Section = ({ id, title, children }) => {
  const { darkMode } = useTheme();
  
  return (
    <section id={id} className={`mb-16 pb-8 ${id !== 'projects' ? (darkMode ? 'border-gray-700' : 'border-gray-200') + ' border-b' : ''}`}>
      <h2 className={`text-3xl font-bold mb-8 inline-block relative after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-12 after:h-1 ${darkMode ? 'after:bg-blue-400' : 'after:bg-blue-600'}`}>
        {title}
      </h2>
      <div className="mt-8">
        {children}
      </div>
    </section>
  );
};

export default Section;