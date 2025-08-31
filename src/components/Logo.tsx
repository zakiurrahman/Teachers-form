'use client';

import { motion } from 'framer-motion';

export default function Logo() {
  return (
    <motion.div 
      className="flex items-center space-x-2"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-sm">CT</span>
      </div>
      <span className="text-white font-semibold text-lg">
        CLASSIC Tuitions
      </span>
    </motion.div>
  );
}