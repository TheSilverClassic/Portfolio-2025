import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { darkMode } = useTheme();
  const currentYear = new Date().getFullYear();
  
  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' }
  ];
  
  return (
    <footer className={`${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-800 text-white'} py-8`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} Your Name. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {navLinks.map(link => (
              <a 
                key={link.name}
                href={link.href} 
                className={`${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-300'} transition-colors`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;