'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

export default function BackgroundElements() {
  const [isClient, setIsClient] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  // Subtle scroll-based transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 180]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Clean gradient background */}
      <motion.div
        className="absolute inset-0 z-10"
        style={{
          y: backgroundY,
          background: 'radial-gradient(circle at 30% 70%, rgba(147, 197, 253, 0.25) 0%, transparent 60%), radial-gradient(circle at 70% 30%, rgba(196, 181, 253, 0.20) 0%, transparent 60%)'
        }}
        animate={{
          background: [
            'radial-gradient(circle at 30% 70%, rgba(147, 197, 253, 0.25) 0%, transparent 60%), radial-gradient(circle at 70% 30%, rgba(196, 181, 253, 0.20) 0%, transparent 60%)',
            'radial-gradient(circle at 70% 30%, rgba(147, 197, 253, 0.25) 0%, transparent 60%), radial-gradient(circle at 30% 70%, rgba(196, 181, 253, 0.20) 0%, transparent 60%)',
            'radial-gradient(circle at 30% 70%, rgba(147, 197, 253, 0.25) 0%, transparent 60%), radial-gradient(circle at 70% 30%, rgba(196, 181, 253, 0.20) 0%, transparent 60%)'
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Subtle floating orbs - only 3 */}
      {Array.from({ length: 3 }).map((_, i) => {
        const orbConfigs = [
          { size: 200, left: 15, top: 25, gradient: 'from-blue-300/30 via-cyan-300/25 to-transparent' },
          { size: 150, left: 75, top: 60, gradient: 'from-purple-300/28 via-pink-300/22 to-transparent' },
          { size: 180, left: 45, top: 80, gradient: 'from-indigo-300/26 via-blue-300/20 to-transparent' }
        ];
        const config = orbConfigs[i];
        
        return (
          <motion.div
            key={`orb-${i}`}
            className={`absolute rounded-full bg-gradient-to-br ${config.gradient} backdrop-blur-sm z-20`}
            style={{
              width: `${config.size}px`,
              height: `${config.size}px`,
              left: `${config.left}%`,
              top: `${config.top}%`,
              rotateX
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5
            }}
          />
        );
      })}

      {/* Minimal geometric accents - only 2 */}
      {Array.from({ length: 2 }).map((_, i) => {
        const shapes = [
          { shape: 'square', left: 85, top: 20, size: 40 },
          { shape: 'diamond', left: 20, top: 75, size: 35 }
        ];
        const config = shapes[i];
        
        return (
          <motion.div
            key={`shape-${i}`}
            className="absolute bg-white/8 backdrop-blur-sm border border-white/15 z-30"
            style={{
              width: `${config.size}px`,
              height: `${config.size}px`,
              left: `${config.left}%`,
              top: `${config.top}%`,
              clipPath: config.shape === 'diamond' ? 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' : 'none',
              borderRadius: config.shape === 'square' ? '6px' : '0'
            }}
            animate={{
              rotate: [0, 360],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 15 + i * 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        );
      })}

      {/* Subtle particle system - only 8 particles */}
      {Array.from({ length: 8 }).map((_, i) => {
        const positions = [
          { left: 10, top: 15 }, { left: 90, top: 25 }, { left: 25, top: 45 }, { left: 75, top: 55 },
          { left: 15, top: 85 }, { left: 85, top: 75 }, { left: 55, top: 20 }, { left: 35, top: 90 }
        ];
        const pos = positions[i];
        
        return (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-white/40 rounded-full z-40"
            style={{
              left: `${pos.left}%`,
              top: `${pos.top}%`
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1.2, 0.5],
              y: [0, -10, 0]
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          />
        );
      })}

      {/* Single elegant wave effect */}
      <motion.div
        className="absolute inset-0 z-15"
        style={{
          background: 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(147, 197, 253, 0.15) 60deg, transparent 120deg)',
          borderRadius: '50%'
        }}
        animate={{
          rotate: [0, 360]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
}