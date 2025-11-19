'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface PreloaderProps {
  isVisible: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  const fadeInUp = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: "easeOut" as const },
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#050816] via-[#020016] to-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeOut" as const } }}
    >
      {/* Animated gradient blobs */}
      <motion.div
        className="pointer-events-none absolute -top-32 -left-24 h-80 w-80 rounded-full bg-violet-500/35 blur-3xl"
        initial={{ opacity: 0.5, scale: 0.9, x: -20 }}
        animate={{
          opacity: [0.4, 0.9, 0.4],
          scale: [0.9, 1.05, 0.9],
          x: [-20, 10, -20],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="pointer-events-none absolute -bottom-40 -right-24 h-96 w-96 rounded-full bg-indigo-500/30 blur-3xl"
        initial={{ opacity: 0.4, scale: 0.9, x: 20 }}
        animate={{
          opacity: [0.3, 0.8, 0.3],
          scale: [0.9, 1.1, 0.9],
          x: [20, -5, 20],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="pointer-events-none absolute h-72 w-72 rounded-full bg-purple-500/25 blur-3xl"
        initial={{ opacity: 0.3, scale: 0.85 }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [0.85, 1.05, 0.85],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        }}
      />

      {/* Centered text with glow */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <motion.span
          {...fadeInUp}
          className="mb-4 text-[0.7rem] sm:text-xs tracking-[0.35em] text-gray-400/80 uppercase"
        >
          Invisible Mechanics
        </motion.span>

        {/* Glow wrapper */}
        <div className="relative inline-block">
          {/* Glow layer (aria-hidden so it doesn't repeat for screen readers) */}
          <motion.span
            aria-hidden="true"
            className="absolute inset-0 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-purple-400/80 blur-md"
            initial={{ opacity: 0, scale: 1 }}
            animate={{
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
            }}
          >
            IM-All Stars 2026
          </motion.span>

          {/* Main headline */}
          <motion.h1
            {...fadeInUp}
            className="relative text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#8C52FF] via-[#C084FC] to-[#6366F1]"
          >
            IM-All Stars 2026
          </motion.h1>
        </div>

        <motion.p
          {...fadeInUp}
          className="mt-4 text-sm sm:text-base text-gray-300"
        >
          Flagship JEE Mains Physics Program
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Preloader;
