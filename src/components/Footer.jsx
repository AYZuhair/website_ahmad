// src/components/Footer.jsx
import React from 'react';
import {  Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <a href="tel:+60186633804" className="flex items-center hover:text-blue-400">
                <Phone className="w-4 h-4 mr-2" />
                +60 186633804
              </a>
              <a href="mailto:ahmadyalzuhair@gmail.com" className="flex items-center hover:text-blue-400">
                <Mail className="w-4 h-4 mr-2" />
                ahmadyalzuhair@gmail.com
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Social</h3>
            <div className="space-y-2">
              <a href="https://linkedin.com/in/a-zuhair" className="flex items-center hover:text-blue-400">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>© 2024 Ahmad Yousif Zuhair. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;