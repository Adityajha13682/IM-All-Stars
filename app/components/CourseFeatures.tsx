'use client';

import React from 'react';

type Feature = {
  icon: string;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: "🔥",
    title: "20 power problem-solving sessions",
    description:
      "Timed attempts plus full discussions on approach, shortcuts and examiner mindset for each question."
  },
  {
    icon: "📊",
    title: "Full-length mock tests & analysis",
    description:
      "JEE Mains-style Physics mocks with deep post-test breakdown of accuracy, speed and silly mistakes."
  },
  {
    icon: "🎯",
    title: "Guidance from top rankers",
    description:
      "Strategy insights and mentorship from AIR 336 (IIT Madras), AIR 1945 (IIT Bombay) and me."
  },
  {
    icon: "📚",
    title: "Formula & standard results workbook",
    description:
      "A concise, exam-only workbook with formulas, derivations and high-frequency standard results."
  },
  {
    icon: "🙋‍♂️",
    title: "Personal doubt support",
    description:
      "Ask doubts with context (test screenshots, where you got stuck) and get focused, actionable answers."
  },
  {
    icon: "🧠",
    title: "100/100 Physics systems",
    description:
      "Error logs, micro-mocks and checklists designed to systematically plug every leak in your final score."
  }
];

export default function CourseFeatures() {
  return (
    <section 
      id="features" 
      aria-labelledby="features-heading"
      className="relative w-full bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Heading and Subheading */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 
            id="features-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white"
          >
            What you&apos;ll get inside IM-All Stars
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400">
            Everything in this program is built around one goal: pushing your JEE Mains Physics score as close as possible to 100/100.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-10 grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="h-full rounded-2xl bg-white/5 border border-white/10 p-5 sm:p-6 flex flex-col hover:bg-white/7 hover:border-violet-500/40 transition-colors duration-200"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-violet-500/15 text-lg">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="mt-4 text-base sm:text-lg font-semibold text-white">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm sm:text-sm text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

