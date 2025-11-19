'use client';

import React, { useState, useRef, useEffect } from 'react';

interface AmbiLightVideoProps {
  sourceType?: 'url' | 'youtube' | 'upload';
  videoUrl?: string;
  youtubeId?: string;
  startTime?: number;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
  showControls?: boolean;
  objectFit?: 'cover' | 'contain' | 'fill';
  blur?: number;
  glowScale?: number;
  intensity?: number;
  saturation?: number;
  brightness?: number;
  borderRadius?: string;
  shadowPreset?: 'none' | 'soft' | 'xl';
}

export default function AmbiLightVideo({
  sourceType = 'url',
  videoUrl = '/videos/sample.mp4',
  youtubeId,
  startTime = 0,
  autoplay = false,
  muted = false,
  loop = false,
  showControls = true,
  objectFit = 'cover',
  blur = 50,
  glowScale = 1.2,
  intensity = 0.7,
  saturation = 1.2,
  brightness = 1.1,
  borderRadius = 'rounded-[32px]',
  shadowPreset = 'xl',
}: AmbiLightVideoProps) {
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, []);

  const glowOpacity = isPlaying ? intensity : intensity * 0.8;
  
  const shadowClass = 
    shadowPreset === 'none' ? '' :
    shadowPreset === 'soft' ? 'shadow-lg' :
    'shadow-2xl';

  const objectFitClass = `object-${objectFit}`;

  const renderVideoPlayer = () => {
    if (sourceType === 'youtube' && youtubeId) {
      return (
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?start=${startTime}&autoplay=${autoplay ? 1 : 0}&mute=${muted ? 1 : 0}&loop=${loop ? 1 : 0}&controls=${showControls ? 1 : 0}`}
          title="IM-All Stars 2026 preview"
          className={`relative z-10 w-full h-full ${borderRadius}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
    }

    return (
      <video
        ref={videoRef}
        src={videoUrl}
        autoPlay={autoplay}
        muted={muted}
        loop={loop}
        controls={showControls}
        playsInline
        className={`relative z-10 w-full h-full ${borderRadius} ${objectFitClass}`}
        aria-label="IM-All Stars 2026 preview"
      />
    );
  };

  return (
    <div className="relative w-full max-w-[560px] mx-auto">
      {/* Aspect ratio container (16:9) */}
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        {/* Ambilight glow layer */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            opacity: glowOpacity,
            filter: `blur(${blur}px) saturate(${saturation}) brightness(${brightness})`,
            transform: `scale(${glowScale})`,
            zIndex: 0,
          }}
        >
          <div 
            className={`w-full h-full ${borderRadius}`}
            style={{
              background: 'radial-gradient(ellipse at center, rgba(140, 82, 255, 0.85) 0%, rgba(139, 92, 246, 0.7) 25%, rgba(99, 102, 241, 0.55) 50%, rgba(99, 102, 241, 0.35) 70%, rgba(79, 70, 229, 0.15) 85%, transparent 100%)',
            }}
          />
        </div>

        {/* Video container with border and shadow */}
        <div 
          className={`absolute inset-0 ${borderRadius} ${shadowClass} overflow-hidden bg-black/20 backdrop-blur-sm border border-white/10`}
          style={{ zIndex: 5 }}
        >
          {renderVideoPlayer()}
        </div>
      </div>
    </div>
  );
}

