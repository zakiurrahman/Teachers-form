'use client';

import { motion } from 'framer-motion';
import Logo from './Logo';

export default function Navbar() {
  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-white/80 hover:text-white transition-colors duration-200">
              Home
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors duration-200">
              About
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors duration-200">
              Contact
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}