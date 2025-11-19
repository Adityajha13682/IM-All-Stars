'use client';

import React from 'react';
import AmbiLightVideo from './AmbiLightVideo';

export default function CourseHero() {
  return (
    <section 
      id="overview"
      aria-labelledby="hero-heading" 
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#0B0B10] via-[#020617] to-[#0B0B10]"
    >
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 h-96 w-96 bg-violet-600/20 blur-3xl rounded-full -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 bg-indigo-600/20 blur-3xl rounded-full translate-y-1/2" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-10 lg:items-stretch">
          
          {/* Left Column - Main Content */}
          <div className="space-y-8 lg:flex-1">
            {/* Brand Badge */}
            <div className="inline-flex">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-violet-500/10 text-violet-300 border border-violet-500/20">
                Invisible Mechanics Presents
              </span>
            </div>

            {/* Main Heading + Subtitle */}
            <div className="max-w-3xl space-y-6">
              <div className="space-y-2">
                <h1 
                  id="hero-heading"
                  className="text-3xl sm:text-4xl lg:text-[2.8rem] font-bold tracking-tight text-white leading-tight"
                >
                  IM-All Stars 2026
                </h1>
                <p className="text-sm sm:text-base text-gray-400">
                  Flagship JEE Mains Physics Program by Invisible Mechanics
                </p>
              </div>

              {/* Main Description */}
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                25 intense problem-solving sessions, mock tests, and ranker mentorship designed to push you towards <span className="font-semibold text-white">100/100 in JEE Mains Physics</span>.
              </p>
            </div>

            {/* Positioning Text */}
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl">
              This isn&apos;t about more lectures — it&apos;s about learning how toppers think inside the exam hall.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button 
                className="group px-8 py-4 rounded-full text-base font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/50 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-[#0B0B10]"
              >
                Apply for IM-All Stars 2026
              </button>
              <button 
                className="px-8 py-4 rounded-full text-base font-semibold text-white bg-transparent border-2 border-violet-500/50 hover:border-violet-400 hover:bg-violet-500/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-[#0B0B10]"
              >
                View Course Highlights
              </button>
            </div>

            {/* Social Proof Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 max-w-2xl">
              {/* Badge 1 */}
              <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-4 space-y-1">
                <p className="text-xs text-gray-400 font-medium">JEE Advanced 2025 Results</p>
                <p className="text-xl sm:text-2xl font-bold text-white">85 / 120 in Physics</p>
                <p className="text-sm text-gray-400">Divesh Khatwani · AIR 1945</p>
              </div>

              {/* Badge 2 */}
              <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-4 space-y-1">
                <p className="text-xs text-gray-400 font-medium">JEE Advanced 2025 Results</p>
                <p className="text-xl sm:text-2xl font-bold text-white">88 / 120 in Physics</p>
                <p className="text-sm text-gray-400">Tushar Chinchanikar · AIR 2301</p>
              </div>
            </div>
          </div>

          {/* Right Column - AmbiLight Video */}
          <div className="mt-10 flex justify-center lg:mt-0 lg:flex-1 lg:justify-center lg:items-center">
            <AmbiLightVideo
              sourceType="youtube"
              youtubeId="F6ufSaFjZ5Y"
              autoplay={false}
              muted={false}
              loop={false}
              showControls={true}
              blur={80}
              glowScale={1.5}
              intensity={0.95}
              saturation={1.5}
              brightness={1.3}
              borderRadius="rounded-[32px]"
              shadowPreset="xl"
            />
          </div>

        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

