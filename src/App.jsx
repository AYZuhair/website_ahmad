// src/App.jsx
import React from 'react';
import MainLayout from './layouts/MainLayout';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <MainLayout>
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </MainLayout>
  );
}

export default App;