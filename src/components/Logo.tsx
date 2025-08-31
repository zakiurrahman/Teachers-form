'use client';

import { motion } from 'framer-motion';

export default function Logo() {
  return (
    <motion.div 
      className="flex flex-col items-center justify-center"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="text-4xl font-black text-gray-900 tracking-tight leading-none">
        CLASSIC
      </div>
      <div className="text-xs text-blue-600 tracking-[0.2em] uppercase font-medium mt-0.5 text-center">
        home tuitions
      </div>
    </motion.div>
  );
}