'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export interface PillarCard {
  id: string;
  title: string;
  description: string;
  iconType: 'target' | 'lightbulb' | 'graduation' | 'chart';
}

interface TiltCardGridProps {
  cards: PillarCard[];
}

// Professional SVG Icons - as a function
const getIcon = (iconType: 'target' | 'lightbulb' | 'graduation' | 'chart') => {
  switch (iconType) {
    case 'target':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="12" cy="12" r="2" fill="currentColor"/>
          <path d="M12 2V6M12 18V22M22 12H18M6 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );
    case 'lightbulb':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 21H15M12 3C8.68629 3 6 5.68629 6 9C6 11.0947 7.09489 12.9237 8.73859 13.9291C9.19704 14.1881 9.5 14.6734 9.5 15.2V17C9.5 17.5523 9.94772 18 10.5 18H13.5C14.0523 18 14.5 17.5523 14.5 17V15.2C14.5 14.6734 14.803 14.1881 15.2614 13.9291C16.9051 12.9237 18 11.0947 18 9C18 5.68629 15.3137 3 12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'graduation':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 14L21 9L12 4L3 9L12 14ZM12 14L18.16 10.6C18.71 11.9 19 13.41 19 15C19 15 17 17 12 17C7 17 5 15 5 15C5 13.41 5.29 11.9 5.84 10.6L12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 14V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );
    case 'chart':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3V21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 16L11 12L15 15L21 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 12V8H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
  }
};

// Custom hook for title tilt effect
function useTitleTilt() {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const titleRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!titleRef.current) return;

    const rect = titleRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 12; // Max 12deg tilt
    const rotateX = ((centerY - y) / centerY) * 12; // Max 12deg tilt

    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return { tilt, titleRef, handleMouseMove, handleMouseLeave };
}

// Single card component
function TiltCard({ card }: { card: PillarCard }) {
  const { tilt, titleRef, handleMouseMove, handleMouseLeave } = useTitleTilt();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group h-full rounded-3xl bg-gradient-to-b from-[#111827] via-[#020617] to-[#020617] border border-white/5 backdrop-blur-sm overflow-hidden hover:border-violet-500/30 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01]"
      style={{
        boxShadow: isHovered 
          ? '0 0 50px rgba(140, 82, 255, 0.2), 0 0 40px rgba(15, 23, 42, 0.7)' 
          : '0 0 40px rgba(15, 23, 42, 0.7)',
      }}
    >
      {/* Content */}
      <div className="relative p-6 lg:p-7 flex flex-col h-full">
        {/* Icon - Professional SVG */}
        <div className="inline-flex items-center justify-center h-11 w-11 rounded-xl bg-gradient-to-b from-[#8C52FF] to-[#6366F1] ring-1 ring-white/20 mb-5 shadow-inner text-white">
          {getIcon(card.iconType)}
        </div>

        {/* Title with tilt effect */}
        <div
          ref={titleRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="mb-4"
          style={{ perspective: '1000px' }}
        >
          <motion.h3
            animate={{
              rotateX: tilt.rotateX,
              rotateY: tilt.rotateY,
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30,
            }}
            className="text-xl font-semibold text-white leading-tight cursor-pointer"
            style={{
              transformStyle: 'preserve-3d',
              transformOrigin: 'center center',
            }}
          >
            {card.title}
          </motion.h3>
        </div>

        {/* Description */}
        <p className="text-[0.95rem] text-slate-300/80 leading-relaxed flex-grow">
          {card.description}
        </p>

        {/* Divider */}
        <div className="mt-6 pt-5 border-t border-white/5">
          {/* CTA */}
          <button className="flex items-center gap-2 text-sm text-slate-300 font-medium hover:text-slate-100 transition-colors duration-200 group/cta">
            <span>See how this works</span>
            <svg 
              className="w-4 h-4 transform group-hover/cta:translate-x-1 transition-transform duration-200" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// Main grid component
export default function TiltCardGrid({ cards }: TiltCardGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
      {cards.map((card) => (
        <TiltCard key={card.id} card={card} />
      ))}
    </div>
  );
}
