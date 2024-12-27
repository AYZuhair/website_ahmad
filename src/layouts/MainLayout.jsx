// src/layouts/MainLayout.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MainLayout = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-gray-50"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default MainLayout;