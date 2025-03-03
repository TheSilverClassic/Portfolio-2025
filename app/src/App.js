import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Profile from './components/Profile';
import WorkHistory from './components/WorkHistory';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-8">
          <Profile />
          <WorkHistory />
          <Education />
          <Skills />
          <Projects />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;