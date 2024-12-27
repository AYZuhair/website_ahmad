// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20"
    >
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-bold mb-4">Ahmad Yousif Zuhair</h1>
        <h2 className="text-2xl mb-6">Junior AI Ops Engineer</h2>
        <p className="text-xl mb-8">Specializing in AI-powered solutions and engineering innovation</p>
        <div className="flex space-x-4">
          <a href="https://linkedin.com/in/a-zuhair" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:ahmadyalzuhair@gmail.com" className="hover:text-blue-200">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;