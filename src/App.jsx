import React from 'react';
import Header from './components/Header';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import VisitorCounter from './components/VisitorCounter';
import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <VisitorCounter />
    </div>
  );
}

export default App; 