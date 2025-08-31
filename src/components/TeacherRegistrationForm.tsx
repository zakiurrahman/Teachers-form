'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TeacherRegistrationForm: React.FC = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  // Success message component
  if (showSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl mx-auto text-center"
      >
        <div className="bg-green-900/70 backdrop-blur-2xl rounded-[2rem] shadow-2xl border border-green-700/40 p-12 md:p-16">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="text-6xl mb-6"
          >
            ✅
          </motion.div>
          <h2 className="text-4xl font-black bg-gradient-to-r from-green-100 via-white to-green-200 bg-clip-text text-transparent mb-4">
            Thank You!
          </h2>
          <p className="text-green-100 text-lg mb-6">
            Your registration has been submitted successfully. We&apos;ll get back to you soon!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setShowSuccess(false);
              // Reset form by reloading
              window.location.reload();
            }}
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300"
          >
            Submit Another Application
          </motion.button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      id="teacher-form"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-2xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ 
          y: -5,
          boxShadow: "0 25px 50px rgba(0, 0, 0, 0.25)"
        }}
        className="bg-gray-900/70 backdrop-blur-2xl rounded-[2rem] shadow-2xl border border-gray-700/40 p-12 md:p-16 relative overflow-hidden group"
      >
        {/* Subtle decorative background elements */}
        <div className="floating-element absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-gray-700/8 via-gray-600/5 to-gray-800/6 rounded-full blur-2xl"></div>
        <div className="floating-element absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-tl from-gray-600/8 via-gray-700/5 to-gray-500/6 rounded-full blur-2xl"></div>
        <div className="morphing-blob absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl opacity-10"></div>
        
        {/* Minimal ambient particles */}
        <div className="particle absolute top-1/4 right-1/4 w-1 h-1 rounded-full opacity-60"></div>
        <div className="particle absolute bottom-1/4 left-1/4 w-1 h-1 rounded-full opacity-60"></div>
        
        <div className="relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-black bg-gradient-to-r from-gray-100 via-white to-gray-200 bg-clip-text text-transparent text-center mb-16 tracking-tight leading-tight"
        >
          Teacher Registration
        </motion.h1>

        <form 
          action="https://formspree.io/f/mpwjrlpg"
          method="POST"
          encType="multipart/form-data"
          className="space-y-6"
        >
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.02 }}
              whileFocus={{ scale: 1.02 }}
            >
              <label className="block text-white/90 text-sm font-semibold mb-3">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                className="w-full px-5 py-4 bg-gray-800/60 border border-gray-600/40 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500/50 focus:border-gray-500/50 focus:bg-gray-800/80 transition-all duration-300 backdrop-blur-sm"
                placeholder="Enter your full name"
                required
              />

            </motion.div>

            {/* Father's Name */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.02 }}
              whileFocus={{ scale: 1.02 }}
            >
              <label className="block text-white/90 text-sm font-semibold mb-3">
                Father&apos;s Name
              </label>
              <input
                type="text"
                name="fatherName"
                className="w-full px-5 py-4 bg-gray-800/60 border border-gray-600/40 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500/50 focus:border-gray-500/50 focus:bg-gray-800/80 transition-all duration-300 backdrop-blur-sm"
                placeholder="Enter father's name"
                required
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Gender */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.02 }}
              whileFocus={{ scale: 1.02 }}
            >
              <label className="block text-white/90 text-sm font-semibold mb-3">
                Gender
              </label>
              <select
                name="gender"
                className="w-full px-5 py-4 bg-gray-800/60 border border-gray-600/40 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-gray-500/50 focus:border-gray-500/50 focus:bg-gray-800/80 transition-all duration-300 backdrop-blur-sm"
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </motion.div>

            {/* Experience Years */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.02 }}
              whileFocus={{ scale: 1.02 }}
            >
              <label className="block text-white/90 text-sm font-semibold mb-3">
                Experience Years
              </label>
              <input
                type="number"
                name="experienceYears"
                className="w-full px-5 py-4 bg-gray-800/60 border border-gray-600/40 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500/50 focus:border-gray-500/50 focus:bg-gray-800/80 transition-all duration-300 backdrop-blur-sm"
                placeholder="Years of experience"
                min="0"
                required
              />
            </motion.div>
          </div>

          {/* Subjects You can Teach */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.02 }}
            whileFocus={{ scale: 1.02 }}
          >
            <label className="block text-white/90 text-sm font-semibold mb-3">
                Subjects You can Teach
              </label>
            <input
              type="text"
              name="subjects"
              className="w-full px-5 py-4 bg-gray-800/60 border border-gray-600/40 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500/50 focus:border-gray-500/50 focus:bg-gray-800/80 transition-all duration-300 backdrop-blur-sm"
              placeholder="e.g., Mathematics, Physics, Chemistry"
              required
            />
          </motion.div>

          {/* Qualification */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.02 }}
            whileFocus={{ scale: 1.02 }}
          >
            <label className="block text-white/90 text-sm font-semibold mb-3">
                Qualification
              </label>
            <input
              type="text"
              name="qualification"
              className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400/50 focus:bg-white/15 transition-all duration-300 backdrop-blur-sm"
              placeholder="e.g., Master's in Education, PhD in Mathematics"
              required
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Number */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.5, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.02 }}
              whileFocus={{ scale: 1.02 }}
            >
              <label className="block text-white/90 text-sm font-semibold mb-3">
                Contact Number
              </label>
              <input
                type="tel"
                name="contactNumber"
                className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400/50 focus:bg-white/15 transition-all duration-300 backdrop-blur-sm"
                placeholder="Enter contact number"
                required
              />

            </motion.div>

            {/* Email Address */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.5, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.02 }}
              whileFocus={{ scale: 1.02 }}
            >
              <label className="block text-white/90 text-sm font-semibold mb-3">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400/50 focus:bg-white/15 transition-all duration-300 backdrop-blur-sm"
                placeholder="Enter email address"
                required
              />

            </motion.div>
          </div>

          {/* Current Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.02 }}
            whileFocus={{ scale: 1.02 }}
          >
            <label className="block text-white/90 text-sm font-semibold mb-3">
              Current Address
            </label>
            <textarea
              name="currentAddress"
              rows={3}
              className="w-full px-5 py-4 bg-gray-800/60 border border-gray-600/40 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500/50 focus:border-gray-500/50 focus:bg-gray-800/80 transition-all duration-300 backdrop-blur-sm resize-none"
              placeholder="Enter your current address"
              required
            />
          </motion.div>

          {/* Document Upload */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.02 }}
            whileFocus={{ scale: 1.02 }}
          >
            <label className="block text-white/90 text-sm font-semibold mb-3">
              Document Attachment
            </label>
            <div className="relative">
              <input
                type="file"
                name="document"
                className="w-full px-5 py-4 bg-gray-800/60 border border-gray-600/40 rounded-xl text-white file:mr-4 file:py-3 file:px-6 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-gradient-to-r file:from-gray-700 file:to-gray-600 file:text-white hover:file:from-gray-600 hover:file:to-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500/50 focus:border-gray-500/50 focus:bg-gray-800/80 transition-all duration-300 backdrop-blur-sm"
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              />
            </div>
            <p className="text-gray-400 text-xs mt-2 font-medium">
              Accepted formats: PDF, DOC, DOCX, JPG, JPEG, PNG (Max 5MB)
            </p>
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="pt-4"
          >
            <motion.button
              type="submit"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(139, 92, 246, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="w-full font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-2xl border backdrop-blur-sm text-lg bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 hover:from-gray-600 hover:via-gray-500 hover:to-gray-600 hover:shadow-gray-500/25 border-gray-500/30 text-white"
            >
              Submit Your Info
            </motion.button>
          </motion.div>

        </form>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TeacherRegistrationForm;