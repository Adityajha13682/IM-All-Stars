'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CurvedRoadmapPathProps {
  stepCount: number;
  activeStep?: number | null;
  onStepClick?: (step: number) => void;
}

// Icon SVG paths for each step
const STEP_ICONS = [
  // 1. Target/Baseline
  'M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z',
  // 2. Book
  'M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z',
  // 3. List
  'M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z',
  // 4. Assessment
  'M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z',
  // 5. Settings
  'M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94L14.4 2.81c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z',
  // 6. Trophy
  'M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z',
];

export default function CurvedRoadmapPath({ stepCount, activeStep, onStepClick }: CurvedRoadmapPathProps) {
  // Calculate positions with smoother spacing
  const getStepPosition = (index: number): { x: number; y: number } => {
    const percentage = index / (stepCount - 1);
    const x = 100 + percentage * 800;
    
    // Smoother wave with better control
    const waveOffset = Math.sin(percentage * Math.PI * 1.2) * 90;
    const y = 180 + waveOffset;
    
    return { x, y };
  };

  // Generate premium smooth curve
  const generateCurvePath = () => {
    const points = Array.from({ length: stepCount }, (_, i) => getStepPosition(i));
    
    let path = `M ${points[0].x} ${points[0].y}`;
    
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const current = points[i];
      const next = points[i + 1];
      
      // Better control points for smoother curves
      const cpX1 = prev.x + (current.x - prev.x) * 0.5;
      const cpY1 = prev.y;
      const cpX2 = prev.x + (current.x - prev.x) * 0.5;
      const cpY2 = current.y;
      
      path += ` C ${cpX1} ${cpY1}, ${cpX2} ${cpY2}, ${current.x} ${current.y}`;
    }
    
    return path;
  };

  const nodeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.3 + i * 0.15,
        duration: 0.4,
        type: "spring" as const,
        stiffness: 200,
      },
    }),
  };

  return (
    <svg
      viewBox="0 0 1000 400"
      className="w-full h-auto"
      preserveAspectRatio="xMidYMid meet"
      role="presentation"
    >
      <defs>
        {/* Premium gradient for path */}
        <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8C52FF" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#8B5CF6" stopOpacity="1" />
          <stop offset="100%" stopColor="#6366F1" stopOpacity="0.9" />
        </linearGradient>
        
        {/* Consistent node gradient for all nodes */}
        <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A855FF" />
          <stop offset="100%" stopColor="#6366F1" />
        </linearGradient>
        
        {/* Consistent glow filter */}
        <filter id="nodeGlow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      
      {/* Animated path */}
      <motion.path
        d={generateCurvePath()}
        fill="none"
        stroke="url(#pathGradient)"
        strokeWidth="5"
        strokeDasharray="20 15"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          pathLength: { duration: 2, ease: "easeInOut" },
          opacity: { duration: 0.5 },
        }}
        className="drop-shadow-[0_0_20px_rgba(139,92,246,0.7)]"
      />
      
      {/* Step nodes with premium styling */}
      {Array.from({ length: stepCount }, (_, i) => {
        const pos = getStepPosition(i);
        const isActive = activeStep === i + 1;
        const icon = STEP_ICONS[i];
        
        return (
          <motion.g
            key={i}
            custom={i}
            variants={nodeVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Spotlight glow for active node only */}
            {isActive && (
              <motion.circle
                cx={pos.x}
                cy={pos.y}
                r="50"
                fill="rgba(139, 92, 246, 0.12)"
                className="blur-xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.12, 0.18, 0.12],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )}
            
            {/* Outer halo ring - consistent for all */}
            <circle
              cx={pos.x}
              cy={pos.y}
              r={isActive ? "38" : "36"}
              fill="none"
              stroke="#8B5CF6"
              strokeWidth={isActive ? "2.5" : "2"}
              opacity={isActive ? 1 : 0.7}
              className="transition-all duration-300"
            />
            
            {/* Main circle with consistent gradient */}
            <motion.circle
              cx={pos.x}
              cy={pos.y}
              r="32"
              fill="url(#nodeGradient)"
              filter="url(#nodeGlow)"
              className="cursor-pointer transition-all duration-300"
              onClick={() => onStepClick?.(i + 1)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              animate={isActive ? {
                scale: [1, 1.05, 1],
              } : {}}
              transition={isActive ? {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              } : {}}
              style={{
                opacity: 1,
                filter: `drop-shadow(0 0 ${isActive ? '30' : '24'}px rgba(140, 82, 255, 0.6))`
              }}
            />
            
            {/* Icon - consistent opacity */}
            <g 
              transform={`translate(${pos.x - 12}, ${pos.y - 12}) scale(${isActive ? 1 : 0.95})`}
              className="pointer-events-none transition-transform duration-300"
              opacity={1}
            >
              <path
                d={icon}
                fill="white"
                className="transition-opacity duration-300"
              />
            </g>
          </motion.g>
        );
      })}
    </svg>
  );
}
