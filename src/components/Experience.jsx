// src/components/Experience.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '@/utils/constants';
import { Card } from './ui/Card';

const Experience = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold mb-8"
        >
          Professional Experience
        </motion.h2>
        <div className="space-y-8">
          {experience.map((job, index) => (
            <Card key={job.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <h3 className="text-2xl font-bold text-blue-600">{job.title}</h3>
                <p className="text-gray-600 mb-2">{job.company} | {job.period}</p>
                <ul className="list-disc list-inside space-y-2">
                  {job.description.map((item, i) => (
                    <li key={i} className="text-gray-700">{item}</li>
                  ))}
                </ul>
              </motion.div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;