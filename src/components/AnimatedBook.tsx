'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const AnimatedBook = () => {
  const bookRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  // Transform scroll progress to realistic page flipping angles
  const page1Rotation = useTransform(scrollYProgress, [0, 0.25], [0, -180]);
  const page2Rotation = useTransform(scrollYProgress, [0.25, 0.5], [0, -180]);
  const page3Rotation = useTransform(scrollYProgress, [0.5, 0.75], [0, -180]);
  const page4Rotation = useTransform(scrollYProgress, [0.75, 1], [0, -180]);
  
  // Book floating animation - more subtle
  const bookY = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const bookRotation = useTransform(scrollYProgress, [0, 1], [0, 2]);

  return (
    <motion.div
      ref={bookRef}
      className="fixed top-1/2 right-10 transform -translate-y-1/2 z-10 pointer-events-none"
      style={{
        y: bookY,
        rotate: bookRotation,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.7, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div className="relative w-32 h-40">
        {/* Book Cover */}
        <svg
          width="128"
          height="160"
          viewBox="0 0 128 160"
          className="absolute inset-0"
        >
          {/* Book spine and back cover */}
          <rect
            x="4"
            y="8"
            width="120"
            height="144"
            fill="#8B4513"
            stroke="#654321"
            strokeWidth="2"
            rx="4"
          />
          
          {/* Book cover gradient */}
          <defs>
            <linearGradient id="bookGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D2691E" />
              <stop offset="50%" stopColor="#8B4513" />
              <stop offset="100%" stopColor="#654321" />
            </linearGradient>
          </defs>
          
          <rect
            x="8"
            y="12"
            width="112"
            height="136"
            fill="url(#bookGradient)"
            rx="2"
          />
          
          {/* Book title area */}
          <rect
            x="16"
            y="24"
            width="96"
            height="20"
            fill="#FFD700"
            opacity="0.8"
            rx="2"
          />
          
          {/* Decorative lines */}
          <line x1="16" y1="60" x2="112" y2="60" stroke="#FFD700" strokeWidth="1" opacity="0.6" />
          <line x1="16" y1="70" x2="112" y2="70" stroke="#FFD700" strokeWidth="1" opacity="0.6" />
          <line x1="16" y1="80" x2="112" y2="80" stroke="#FFD700" strokeWidth="1" opacity="0.6" />
        </svg>
        
        {/* Animated Pages with realistic flipping */}
        <div className="absolute inset-0" style={{ perspective: '1000px' }}>
          {/* Page 4 - Bottom page */}
          <motion.div
            className="absolute top-2 left-2 w-28 h-36"
            style={{
              transformOrigin: 'left center',
              rotateY: page4Rotation,
              transformStyle: 'preserve-3d',
              zIndex: 1,
            }}
          >
            <div className="w-full h-full relative">
              {/* Front of page */}
              <svg width="112" height="144" className="absolute inset-0" style={{ backfaceVisibility: 'hidden' }}>
                <rect width="112" height="144" fill="#FFFEF7" stroke="#E0E0E0" strokeWidth="1" rx="2" />
                <line x1="8" y1="20" x2="102" y2="20" stroke="#CCCCCC" strokeWidth="1" />
                <line x1="8" y1="30" x2="94" y2="30" stroke="#CCCCCC" strokeWidth="1" />
                <line x1="8" y1="40" x2="98" y2="40" stroke="#CCCCCC" strokeWidth="1" />
                <line x1="8" y1="50" x2="104" y2="50" stroke="#CCCCCC" strokeWidth="1" />
              </svg>
              {/* Back of page */}
              <svg width="112" height="144" className="absolute inset-0" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                <rect width="112" height="144" fill="#F8F8F8" stroke="#E0E0E0" strokeWidth="1" rx="2" />
              </svg>
            </div>
          </motion.div>
          
          {/* Page 3 */}
          <motion.div
            className="absolute top-2 left-2 w-28 h-36"
            style={{
              transformOrigin: 'left center',
              rotateY: page3Rotation,
              transformStyle: 'preserve-3d',
              zIndex: 2,
            }}
          >
            <div className="w-full h-full relative">
              <svg width="112" height="144" className="absolute inset-0" style={{ backfaceVisibility: 'hidden' }}>
                <rect width="112" height="144" fill="#FFFEF7" stroke="#E0E0E0" strokeWidth="1" rx="2" />
                <line x1="8" y1="20" x2="96" y2="20" stroke="#CCCCCC" strokeWidth="1" />
                <line x1="8" y1="30" x2="100" y2="30" stroke="#CCCCCC" strokeWidth="1" />
                <line x1="8" y1="40" x2="104" y2="40" stroke="#CCCCCC" strokeWidth="1" />
                <line x1="8" y1="50" x2="90" y2="50" stroke="#CCCCCC" strokeWidth="1" />
              </svg>
              <svg width="112" height="144" className="absolute inset-0" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                <rect width="112" height="144" fill="#F8F8F8" stroke="#E0E0E0" strokeWidth="1" rx="2" />
              </svg>
            </div>
          </motion.div>
          
          {/* Page 2 */}
          <motion.div
            className="absolute top-2 left-2 w-28 h-36"
            style={{
              transformOrigin: 'left center',
              rotateY: page2Rotation,
              transformStyle: 'preserve-3d',
              zIndex: 3,
            }}
          >
            <div className="w-full h-full relative">
              <svg width="112" height="144" className="absolute inset-0" style={{ backfaceVisibility: 'hidden' }}>
                <rect width="112" height="144" fill="#FFFEF7" stroke="#E0E0E0" strokeWidth="1" rx="2" />
                <line x1="8" y1="20" x2="100" y2="20" stroke="#CCCCCC" strokeWidth="1" />
                <line x1="8" y1="30" x2="104" y2="30" stroke="#CCCCCC" strokeWidth="1" />
                <line x1="8" y1="40" x2="92" y2="40" stroke="#CCCCCC" strokeWidth="1" />
                <line x1="8" y1="50" x2="98" y2="50" stroke="#CCCCCC" strokeWidth="1" />
              </svg>
              <svg width="112" height="144" className="absolute inset-0" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                <rect width="112" height="144" fill="#F8F8F8" stroke="#E0E0E0" strokeWidth="1" rx="2" />
              </svg>
            </div>
          </motion.div>
          
          {/* Page 1 - Top page */}
          <motion.div
            className="absolute top-2 left-2 w-28 h-36"
            style={{
              transformOrigin: 'left center',
              rotateY: page1Rotation,
              transformStyle: 'preserve-3d',
              zIndex: 4,
            }}
          >
            <div className="w-full h-full relative">
              <svg width="112" height="144" className="absolute inset-0" style={{ backfaceVisibility: 'hidden' }}>
                <rect width="112" height="144" fill="#FFFEF7" stroke="#E0E0E0" strokeWidth="1" rx="2" />
                <line x1="8" y1="20" x2="104" y2="20" stroke="#CCCCCC" strokeWidth="1" />
                <line x1="8" y1="30" x2="96" y2="30" stroke="#CCCCCC" strokeWidth="1" />
                <line x1="8" y1="40" x2="100" y2="40" stroke="#CCCCCC" strokeWidth="1" />
                <line x1="8" y1="50" x2="88" y2="50" stroke="#CCCCCC" strokeWidth="1" />
              </svg>
              <svg width="112" height="144" className="absolute inset-0" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                <rect width="112" height="144" fill="#F8F8F8" stroke="#E0E0E0" strokeWidth="1" rx="2" />
              </svg>
            </div>
          </motion.div>
        </div>
        
        {/* Book binding */}
        <div className="absolute left-1 top-2 w-1 h-36 bg-gradient-to-b from-yellow-600 to-yellow-800 rounded-sm" />
      </div>
    </motion.div>
  );
};

export default AnimatedBook;