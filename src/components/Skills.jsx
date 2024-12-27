// src/components/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '@/utils/constants';
import { ProgressBar } from './ui/ProgressBar';
import { Terminal, Code, Server, Cpu, Layout } from 'lucide-react';

const getIcon = (iconName) => {
  const icons = {
    Terminal: <Terminal className="w-6 h-6" />,
    Code: <Code className="w-6 h-6" />,
    Server: <Server className="w-6 h-6" />,
    Cpu: <Cpu className="w-6 h-6" />,
    Layout: <Layout className="w-6 h-6" />
  };
  return icons[iconName];
};

const Skills = () => {
  return (
    <section className="py-16 container mx-auto px-6">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-3xl font-bold mb-8"
      >
        Skills & Expertise
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <div className="flex items-center mb-4">
              {getIcon(skill.icon)}
              <h3 className="ml-2 text-xl font-semibold">{skill.name}</h3>
            </div>
            <ProgressBar progress={skill.level} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;