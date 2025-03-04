import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  
  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' }
  ];
  
  return (
    <header className={`sticky top-0 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md z-10 px-6 py-4`}>
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div className={`text-xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Narciso Montes</div>
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme} 
            className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map(link => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className={`font-medium ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
            <div className={`w-6 h-0.5 ${darkMode ? 'bg-gray-300' : 'bg-gray-800'} mb-1.5 transition-all ${menuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 ${darkMode ? 'bg-gray-300' : 'bg-gray-800'} mb-1.5 transition-all ${menuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 ${darkMode ? 'bg-gray-300' : 'bg-gray-800'} transition-all ${menuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></div>
          </div>
        </div>
      </div>
      
      {menuOpen && (
        <div className="block md:hidden mt-4 pb-4">
          <ul className="flex flex-col space-y-4">
            {navLinks.map(link => (
              <li key={link.name}>
                <a href={link.href} className="font-medium" onClick={() => setMenuOpen(false)}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;