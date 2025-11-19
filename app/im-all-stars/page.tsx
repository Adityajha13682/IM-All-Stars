'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from '../components/Preloader';
import CourseHero from '../components/CourseHero';
import ProgramPillars from '../components/ProgramPillars';
import RoadmapSection from '../components/RoadmapSection';
import VerticalDialNav from '../components/VerticalDialNav';
import PlanComparisonTable from '../components/PlanComparisonTable';
import MeetTheTeamSection from '../components/MeetTheTeamSection';

export default function IMAllStarsPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen bg-[#050816] text-white overflow-hidden">
      <AnimatePresence>
        {isLoading && <Preloader isVisible={isLoading} />}
      </AnimatePresence>

      {/* Vertical dial nav (fixed on the right) */}
      <VerticalDialNav />

      {/* Page content */}
      <div 
        className={
          isLoading 
            ? "pointer-events-none opacity-0" 
            : "opacity-100 transition-opacity duration-500"
        }
      >
        <CourseHero />
        <ProgramPillars />
        <RoadmapSection />
        <MeetTheTeamSection />
        <PlanComparisonTable />
      </div>
    </main>
  );
}

