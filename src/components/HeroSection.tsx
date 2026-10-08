import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';
import { VideoItem } from '../data/videos';

interface HeroSectionProps {
  featuredVideo: VideoItem;
  onOpenVideo: (video: VideoItem) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ featuredVideo, onOpenVideo }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section id="hero" className="relative min-h-[calc(100vh-4.5rem)] flex flex-col justify-between items-center px-6 pt-12 pb-8 max-w-6xl mx-auto w-full">
      {/* Editorial Headline Lockup for Video Editor */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-block">
          <span className="text-xs uppercase tracking-[0.25em] text-[#2B4BFF] dark:text-[#4d69ff] font-bold">
            Saad Arif · Video Editor
          </span>
        </div>
        
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-neutral-950 dark:text-white leading-[1.05]">
          UGC, Meta Ads & AI Video.
        </h1>
        
        <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 font-normal max-w-2xl mx-auto leading-relaxed">
          High-retention edits engineered to stop the scroll, beat ad fatigue, and scale direct-response revenue.
        </p>

        {/* Quiet unboxed metadata separator */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-neutral-500 dark:text-neutral-400 pt-1">
          <span className="font-semibold text-neutral-700 dark:text-neutral-200">UGC Video Editing</span>
          <span aria-hidden="true">·</span>
          <span className="font-semibold text-neutral-700 dark:text-neutral-200">Meta Ads (FB & IG)</span>
          <span aria-hidden="true">·</span>
          <span className="font-semibold text-neutral-700 dark:text-neutral-200">Generative AI Workflows</span>
          <span aria-hidden="true">·</span>
          <span>Fast Turnaround</span>
        </div>
      </div>

      {/* Hero Featured Showreel / Video Frame */}
      <div className="w-full my-8 max-w-4xl">
        <div className="relative group rounded-xl overflow-hidden bg-neutral-900 border border-black/[0.08] dark:border-white/[0.1] shadow-2xl aspect-video transition-all">
          {/* Native HTML5 background video loop */}
          <video
            ref={videoRef}
            src={featuredVideo.videoUrl}
            poster={featuredVideo.thumbnail}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover cursor-pointer"
            onClick={togglePlay}
          />

          {/* Ambient Scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none transition-opacity duration-300 group-hover:from-black/90" />

          {/* Lower Third Info */}
          <div className="absolute bottom-0 inset-x-0 p-5 sm:p-7 flex items-end justify-between gap-4 text-white">
            <div className="space-y-1.5 max-w-lg">
              <div className="flex items-center gap-2 text-xs text-neutral-300 font-medium">
                <span className="text-[#4d69ff] font-semibold">Featured Edit</span>
                <span aria-hidden="true">·</span>
                <span>{featuredVideo.category}</span>
                <span aria-hidden="true">·</span>
                <span>{featuredVideo.duration}</span>
                {featuredVideo.metrics?.roas && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span className="text-emerald-400 font-mono">{featuredVideo.metrics.roas}</span>
                  </>
                )}
              </div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                {featuredVideo.title}
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 line-clamp-1">
                {featuredVideo.logline}
              </p>
            </div>

            {/* Video Action Controls */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <button
                onClick={togglePlay}
                aria-label={isPlaying ? 'Pause preview' : 'Play preview'}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md text-white transition-colors cursor-pointer"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>

              <button
                onClick={toggleMute}
                aria-label={isMuted ? 'Unmute sound' : 'Mute sound'}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md text-white transition-colors cursor-pointer"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>

              <button
                onClick={() => onOpenVideo(featuredVideo)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#2B4BFF] hover:bg-[#203ecc] text-white text-xs font-semibold tracking-wide transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Watch Full Edit</span>
                <span className="sm:hidden">Watch</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Minimalist Scroll Indicator */}
      <a
        href="#work"
        aria-label="Scroll to latest work"
        className="flex flex-col items-center gap-2 text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors group pt-2 pb-1"
      >
        <span className="text-[11px] tracking-widest uppercase font-medium">Explore Portfolio</span>
        <div className="w-4 h-7 rounded-full border border-neutral-400/60 dark:border-neutral-600 flex items-start justify-center p-1">
          <div className="w-1 h-1.5 rounded-full bg-[#2B4BFF] animate-bounce" />
        </div>
      </a>
    </section>
  );
};
