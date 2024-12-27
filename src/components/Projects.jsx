// src/components/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/utils/constants';
import { Card } from './ui/Card';

const Projects = () => {
  return (
    <section className="py-16 container mx-auto px-6">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-3xl font-bold mb-8"
      >
        Notable Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={project.title}>
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h3 className="text-xl font-bold text-blue-600 mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;