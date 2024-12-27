// src/components/ui/Card.jsx
import React from 'react';

export const Card = ({ children, className = '' }) => {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-lg ${className}`}>
      {children}
    </div>
  );
};