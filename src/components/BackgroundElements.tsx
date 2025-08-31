'use client';

import { motion } from 'framer-motion';

export default function BackgroundElements() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Floating orbs */}
      {Array.from({ length: 5 }).map((_, i) => {
        // Use deterministic sizing and positioning based on index
        const orbConfigs = [
          { size: 80, left: 15, top: 25 },
          { size: 120, left: 75, top: 60 },
          { size: 60, left: 40, top: 80 },
          { size: 100, left: 85, top: 20 },
          { size: 90, left: 25, top: 50 }
        ];
        const config = orbConfigs[i] || { size: 80, left: 50, top: 50 };
        
        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm"
            style={{
              width: `${config.size}px`,
              height: `${config.size}px`,
              left: `${config.left}%`,
              top: `${config.top}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        );
      })}
      
      {/* Twinkling particles */}
      {Array.from({ length: 20 }).map((_, i) => {
        // Use deterministic positioning based on index to avoid hydration mismatch
        const positions = [
          { left: 10, top: 20 }, { left: 85, top: 15 }, { left: 25, top: 80 }, { left: 70, top: 60 },
          { left: 45, top: 30 }, { left: 90, top: 75 }, { left: 15, top: 45 }, { left: 60, top: 85 },
          { left: 35, top: 10 }, { left: 80, top: 40 }, { left: 5, top: 70 }, { left: 55, top: 25 },
          { left: 75, top: 90 }, { left: 20, top: 55 }, { left: 95, top: 35 }, { left: 40, top: 65 },
          { left: 65, top: 5 }, { left: 30, top: 95 }, { left: 85, top: 50 }, { left: 50, top: 75 }
        ];
        const position = positions[i] || { left: 50, top: 50 };
        
        return (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full"
            style={{
              left: `${position.left}%`,
              top: `${position.top}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2 + (i * 0.2),
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        );
      })}
      
      {/* Morphing blob */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
        style={{ transform: 'translate(-50%, -50%)' }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
}