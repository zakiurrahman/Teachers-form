'use client';

import { motion } from 'framer-motion';
import TeacherRegistrationForm from '@/components/TeacherRegistrationForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-black bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent mb-8 leading-[0.9] tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            Join Our Teaching
            <br />
            <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
              Community
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed font-normal tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Become part of CLASSIC&apos;s mission to transform education. Share your knowledge, 
            inspire students, and make a lasting impact on the future.
          </motion.p>
          
          {/* Subtle decorative elements */}
         <div className="floating-element absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-gray-700/12 via-gray-600/8 to-gray-800/10 rounded-full blur-3xl"></div>
         <div className="floating-element absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-tl from-gray-600/12 via-gray-700/8 to-gray-500/10 rounded-full blur-3xl"></div>
         <div className="morphing-blob absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-15"></div>
         
         {/* Minimal ambient elements */}
         <div className="particle absolute top-1/6 left-1/6 w-2 h-2 rounded-full opacity-70"></div>
         <div className="particle absolute top-5/6 right-1/6 w-1.5 h-1.5 rounded-full opacity-70"></div>
          
          <motion.div
            className="flex justify-center mt-12 space-x-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse shadow-lg"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full animate-pulse shadow-lg" style={{animationDelay: '0.2s'}}></div>
            <div className="w-3 h-3 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full animate-pulse shadow-lg" style={{animationDelay: '0.4s'}}></div>
          </motion.div>
          

        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <TeacherRegistrationForm />
        </motion.div>
      </div>
    </div>
  );
}
