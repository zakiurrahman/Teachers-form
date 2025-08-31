'use client';

import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-[100] bg-white/10 backdrop-blur-sm border-b border-gray-200/10 shadow-sm"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            className="flex flex-col justify-center items-center cursor-pointer select-none"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight transition-all duration-300 hover:from-purple-600 hover:to-blue-600 text-center">
              CLASSIC
            </h1>
            <p className="text-xs text-gray-600 font-medium tracking-wide -mt-1 transition-colors duration-300 hover:text-gray-800 text-center">
              HOME TUITIONS
            </p>
          </motion.div>
          <motion.button
            onClick={() => {
              const formElement = document.querySelector('#teacher-form');
              if (formElement) {
                formElement.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-6 py-2.5 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 cursor-pointer select-none"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ 
              scale: 1.05,
              background: "linear-gradient(to right, #3b82f6, #8b5cf6)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}