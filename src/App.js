import React, { useState } from 'react';
import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Blog from './components/Blog';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('intro');

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'work-experience':
        return <WorkExperience />;
      case 'education':
        return <Education />;
      case 'blog':
        return <Blog />;
      case 'contact':
        return <Contact />;
      default:
        return <Intro />;
    }
  };

  return (
    <div className="App">
      <div className="tabs">
        <button onClick={() => setActiveTab('intro')}>Intro</button>
        <button onClick={() => setActiveTab('about')}>About</button>
        <button onClick={() => setActiveTab('skills')}>Skills</button>
        <button onClick={() => setActiveTab('work-experience')}>Work Experience</button>
        <button onClick={() => setActiveTab('education')}>Education</button>
        <button onClick={() => setActiveTab('blog')}>Blog</button>
        <button onClick={() => setActiveTab('contact')}>Contact Me</button>
      </div>
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;
