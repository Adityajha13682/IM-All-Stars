'use client';

import React from 'react';
import TiltCardGrid, { PillarCard } from './TiltCardGrid';

const PROGRAM_PILLARS: PillarCard[] = [
  {
    id: 'problem-solving',
    title: 'Problem-solving labs',
    description: 'JEE Mains questions broken into exam-day shortcuts.',
    iconType: 'target',
  },
  {
    id: 'doubt-solving',
    title: 'Doubt-solving support',
    description: 'Daily doubt clearing so you never stay stuck overnight.',
    iconType: 'lightbulb',
  },
  {
    id: 'guidance',
    title: 'Guidance & mentorship',
    description: 'Structured gameplans, study reviews, and ranker-style feedback.',
    iconType: 'graduation',
  },
  {
    id: 'mocks',
    title: 'Mocks & discussions',
    description: 'Timed mocks, detailed solutions, and performance breakdowns.',
    iconType: 'chart',
  },
];

export default function ProgramPillars() {
  return (
    <section
      id="pillars"
      aria-labelledby="pillars-heading"
      className="relative w-full bg-transparent overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-1/4 h-96 w-96 bg-violet-600/8 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 bg-indigo-600/8 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2
            id="pillars-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3"
          >
            Four pillars of the program
          </h2>
          <p className="text-base sm:text-lg text-slate-300/80 leading-relaxed max-w-2xl mx-auto">
            Everything designed to push your Physics score as close as possible to 100/100
          </p>
        </div>

        {/* 4-Card Tilt Grid */}
        <TiltCardGrid cards={PROGRAM_PILLARS} />
      </div>
    </section>
  );
}
