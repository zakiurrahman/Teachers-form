'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ParentsRegistrationForm: React.FC = () => {
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
            Your parent registration has been submitted successfully. We&apos;ll get back to you soon!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setShowSuccess(false);
              window.location.reload();
            }}
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300"
          >
            Submit Another Registration
          </motion.button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      id="parent-form"
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
        <div className="floating-element absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-purple-700/8 via-purple-600/5 to-purple-800/6 rounded-full blur-2xl"></div>
        <div className="floating-element absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-tl from-purple-600/8 via-purple-700/5 to-purple-500/6 rounded-full blur-2xl"></div>
        <div className="morphing-blob absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl opacity-10"></div>
        
        {/* Minimal ambient particles */}
        <div className="particle absolute top-1/4 right-1/4 w-1 h-1 rounded-full opacity-60"></div>
        <div className="particle absolute bottom-1/4 left-1/4 w-1 h-1 rounded-full opacity-60"></div>
        
        <div className="relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-black bg-gradient-to-r from-purple-100 via-white to-purple-200 bg-clip-text text-transparent text-center mb-16 tracking-tight leading-tight"
        >
          Parent Registration
        </motion.h1>
            {/* 
              TODO: Create a new form in Formspree dashboard:
              1. Log into Formspree dashboard
              2. Click + New Form
              3. Name it "Parent Registration Form"
              4. Copy the form ID and replace "mpwjrlpg" below
              5. Set recipient email in form settings
            */}
        <form 
          action="https://formspree.io/f/mpwjrlpg"
          method="POST"
          encType="multipart/form-data"
          className="space-y-6"
        >
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Parent Name */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.02 }}
              whileFocus={{ scale: 1.02 }}
            >
              <label className="block text-white/90 text-sm font-semibold mb-3">
                Parent Name
              </label>
              <input
                type="text"
                name="parentName"
                className="w-full px-5 py-4 bg-gray-800/60 border border-gray-600/40 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 focus:bg-gray-800/80 transition-all duration-300 backdrop-blur-sm"
                placeholder="Enter parent's full name"
                required
              />
            </motion.div>

            {/* Child's Name */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.02 }}
              whileFocus={{ scale: 1.02 }}
            >
              <label className="block text-white/90 text-sm font-semibold mb-3">
                Child's Name
              </label>
              <input
                type="text"
                name="childName"
                className="w-full px-5 py-4 bg-gray-800/60 border border-gray-600/40 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 focus:bg-gray-800/80 transition-all duration-300 backdrop-blur-sm"
                placeholder="Enter child's full name"
                required
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Child's Grade */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.02 }}
              whileFocus={{ scale: 1.02 }}
            >
              <label className="block text-white/90 text-sm font-semibold mb-3">
                Child's Grade
              </label>
              <select
                name="childGrade"
                className="w-full px-5 py-4 bg-gray-800/60 border border-gray-600/40 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 focus:bg-gray-800/80 transition-all duration-300 backdrop-blur-sm"
                required
              >
                <option value="" className="bg-gray-800 text-gray-400">Select grade</option>
                <option value="Pre-K" className="bg-gray-800 text-white">Pre-K</option>
                <option value="Kindergarten" className="bg-gray-800 text-white">Kindergarten</option>
                <option value="1st Grade" className="bg-gray-800 text-white">1st Grade</option>
                <option value="2nd Grade" className="bg-gray-800 text-white">2nd Grade</option>
                <option value="3rd Grade" className="bg-gray-800 text-white">3rd Grade</option>
                <option value="4th Grade" className="bg-gray-800 text-white">4th Grade</option>
                <option value="5th Grade" className="bg-gray-800 text-white">5th Grade</option>
                <option value="6th Grade" className="bg-gray-800 text-white">6th Grade</option>
                <option value="7th Grade" className="bg-gray-800 text-white">7th Grade</option>
                <option value="8th Grade" className="bg-gray-800 text-white">8th Grade</option>
                <option value="9th Grade" className="bg-gray-800 text-white">9th Grade</option>
                <option value="10th Grade" className="bg-gray-800 text-white">10th Grade</option>
                <option value="11th Grade" className="bg-gray-800 text-white">11th Grade</option>
                <option value="12th Grade" className="bg-gray-800 text-white">12th Grade</option>
              </select>
            </motion.div>

            {/* Phone Number */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.02 }}
              whileFocus={{ scale: 1.02 }}
            >
              <label className="block text-white/90 text-sm font-semibold mb-3">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                className="w-full px-5 py-4 bg-gray-800/60 border border-gray-600/40 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 focus:bg-gray-800/80 transition-all duration-300 backdrop-blur-sm"
                placeholder="Enter phone number"
                required
              />
            </motion.div>
          </div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.02 }}
            whileFocus={{ scale: 1.02 }}
          >
            <label className="block text-white/90 text-sm font-semibold mb-3">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full px-5 py-4 bg-gray-800/60 border border-gray-600/40 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 focus:bg-gray-800/80 transition-all duration-300 backdrop-blur-sm"
              placeholder="Enter email address"
              required
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Child's Gender */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.5, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.02 }}
              whileFocus={{ scale: 1.02 }}
            >
              <label className="block text-white/90 text-sm font-semibold mb-3">
                Child's Gender
              </label>
              <select
                name="childGender"
                className="w-full px-5 py-4 bg-gray-800/60 border border-gray-600/40 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 focus:bg-gray-800/80 transition-all duration-300 backdrop-blur-sm"
                required
              >
                <option value="" className="bg-gray-800 text-gray-400">Select gender</option>
                <option value="Male" className="bg-gray-800 text-white">Male</option>
                <option value="Female" className="bg-gray-800 text-white">Female</option>
                <option value="Other" className="bg-gray-800 text-white">Other</option>
              </select>
            </motion.div>

            {/* Child's School Name */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.5, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.02 }}
              whileFocus={{ scale: 1.02 }}
            >
              <label className="block text-white/90 text-sm font-semibold mb-3">
                Child's School Name
              </label>
              <input
                type="text"
                name="childSchool"
                className="w-full px-5 py-4 bg-gray-800/60 border border-gray-600/40 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 focus:bg-gray-800/80 transition-all duration-300 backdrop-blur-sm"
                placeholder="Enter child's school name"
                required
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Subject to Study */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.5, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.02 }}
              whileFocus={{ scale: 1.02 }}
            >
              <label className="block text-white/90 text-sm font-semibold mb-3">
                Subject to Study
              </label>
              <select
                name="subjectToStudy"
                className="w-full px-5 py-4 bg-gray-800/60 border border-gray-600/40 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 focus:bg-gray-800/80 transition-all duration-300 backdrop-blur-sm"
                required
              >
                <option value="" className="bg-gray-800 text-gray-400">Select subject</option>
                <option value="Mathematics" className="bg-gray-800 text-white">Mathematics</option>
                <option value="English" className="bg-gray-800 text-white">English</option>
                <option value="Science" className="bg-gray-800 text-white">Science</option>
                <option value="Physics" className="bg-gray-800 text-white">Physics</option>
                <option value="Chemistry" className="bg-gray-800 text-white">Chemistry</option>
                <option value="Biology" className="bg-gray-800 text-white">Biology</option>
                <option value="History" className="bg-gray-800 text-white">History</option>
                <option value="Geography" className="bg-gray-800 text-white">Geography</option>
                <option value="Computer Science" className="bg-gray-800 text-white">Computer Science</option>
                <option value="Art" className="bg-gray-800 text-white">Art</option>
                <option value="Music" className="bg-gray-800 text-white">Music</option>
                <option value="Other" className="bg-gray-800 text-white">Other</option>
              </select>
            </motion.div>

            {/* Meeting Time */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.5, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.02 }}
              whileFocus={{ scale: 1.02 }}
            >
              <label className="block text-white/90 text-sm font-semibold mb-3">
                Preferred Meeting Time
              </label>
              <select
                name="meetingTime"
                className="w-full px-5 py-4 bg-gray-800/60 border border-gray-600/40 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 focus:bg-gray-800/80 transition-all duration-300 backdrop-blur-sm"
                required
              >
                <option value="" className="bg-gray-800 text-gray-400">Select time</option>
                <option value="Morning (8:00 AM - 12:00 PM)" className="bg-gray-800 text-white">Morning (8:00 AM - 12:00 PM)</option>
                <option value="Afternoon (12:00 PM - 5:00 PM)" className="bg-gray-800 text-white">Afternoon (12:00 PM - 5:00 PM)</option>
                <option value="Evening (5:00 PM - 8:00 PM)" className="bg-gray-800 text-white">Evening (5:00 PM - 8:00 PM)</option>
                <option value="Weekend Morning" className="bg-gray-800 text-white">Weekend Morning</option>
                <option value="Weekend Afternoon" className="bg-gray-800 text-white">Weekend Afternoon</option>
                <option value="Flexible" className="bg-gray-800 text-white">Flexible</option>
              </select>
            </motion.div>
          </div>

          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.5, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.02 }}
            whileFocus={{ scale: 1.02 }}
          >
            <label className="block text-white/90 text-sm font-semibold mb-3">
              Address
            </label>
            <textarea
              name="address"
              rows={4}
              className="w-full px-5 py-4 bg-gray-800/60 border border-gray-600/40 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 focus:bg-gray-800/80 transition-all duration-300 backdrop-blur-sm resize-none"
              placeholder="Enter full address"
              required
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            className="text-center pt-6"
          >
            <motion.button
              type="submit"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 hover:from-purple-500 hover:via-purple-600 hover:to-purple-700 text-white font-bold py-4 px-12 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/25 border border-purple-500/20"
            >
              Submit Registration
            </motion.button>
          </motion.div>
        </form>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ParentsRegistrationForm;