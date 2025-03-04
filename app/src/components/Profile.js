import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Profile = () => {
  const { darkMode } = useTheme();
  
  return (
    <section className="mb-16 pb-8 border-b border-gray-700">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-shrink-0 max-w-xs mx-auto md:mx-0">
          {/* Use process.env.PUBLIC_URL to ensure correct path in GitHub Pages */}
          <img
            src={`${process.env.PUBLIC_URL}/PFP_LI.jpg`}
            alt="Narciso Montes"
            className="rounded-full w-full shadow-md"
          />
        </div>
        <div>
          <h1 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Narciso Montes</h1>
          <h2 className="text-2xl mb-4">Technologist and Developer</h2>
          <div className="space-y-4">
            <p>
              Engineering Technology and Computer Science graduate passionate about solving real-world problems through technology. My expertise spans data engineering, AI, computer vision, and software development across medical, automotive, aerospace, and energy sectors.
            </p>
            <p>
              As a Junior Data Engineer at EOG Resources, I contributed to developing and maintaining internal AI systems, building data pipelines, optimizing ETL workflows, and integrating AI into enterprise applications.
            </p>
            </div>
          
          <div className="flex flex-wrap gap-4 my-6">
            <a href="mailto:narcisomontes85@gmail.com" className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <span>📧</span> narcisomontes85@gmail.com
            </a>
            <a href="tel:+18327045898" className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <span>📱</span> (832) 704-5898
            </a>
          </div>
          
          <div className="flex gap-4">
            <a href="https://github.com/TheSilverClassic?tab=repositories" className={`flex items-center gap-2 ${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'}`}>
              <span className="text-xl">💻</span> GitHub
            </a>
            <a href="https://www.linkedin.com/in/narciso-montes/" className={`flex items-center gap-2 ${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'}`}>
              <span className="text-xl">🔗</span> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;