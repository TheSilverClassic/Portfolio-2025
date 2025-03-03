import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Profile = () => {
  const { darkMode } = useTheme();
  
  return (
    <section className="mb-16 pb-8 border-b border-gray-700">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-shrink-0 max-w-xs mx-auto md:mx-0">
          <img src="/logo192.png" alt="Profile" className="rounded-full w-full shadow-md" />
        </div>
        <div>
          <h1 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Your Name</h1>
          <h2 className="text-2xl mb-4">Full Stack Developer</h2>
          <p className="mb-4">
            Passionate developer with expertise in web development
            and a strong background in building responsive and user-friendly applications.
          </p>
          
          <div className="flex flex-wrap gap-4 my-6">
            <a href="mailto:your.email@example.com" className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <span>📧</span> your.email@example.com
            </a>
            <a href="tel:+1234567890" className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <span>📱</span> (123) 456-7890
            </a>
          </div>
          
          <div className="flex gap-4">
            <a href="#" className={`flex items-center gap-2 ${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'}`}>
              <span>GitHub</span>
            </a>
            <a href="#" className={`flex items-center gap-2 ${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'}`}>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;