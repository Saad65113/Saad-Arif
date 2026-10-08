import React, { useRef, useState, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize, Share2, Check, Layers, Bot, TrendingUp, Sliders } from 'lucide-react';
import { VideoItem } from '../data/videos';

interface VideoModalProps {
  video: VideoItem | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ video, onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.85);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [copiedShare, setCopiedShare] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === ' ' && videoRef.current) {
        e.preventDefault();
        togglePlay();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, isPlaying]);

  useEffect(() => {
    if (video && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.volume = volume;
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }
  }, [video]);

  if (!video) return null;

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

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (videoRef.current) {
      videoRef.current.volume = newVol;
      videoRef.current.muted = newVol === 0;
      setIsMuted(newVol === 0);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      setDuration(videoRef.current.duration || 0);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const seekTime = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = seekTime;
      setCurrentTime(seekTime);
    }
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (!document.fullscreenElement) {
      videoRef.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return '0:00';
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleShare = () => {
    navigator.clipboard.writeText(`${window.location.origin}#${video.id}`);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2000);
  };

  const isYouTube = video.videoUrl?.includes('youtube.com') || video.videoUrl?.includes('youtu.be');
  const isVimeo = video.videoUrl?.includes('vimeo.com');

  const getEmbedUrl = (url: string) => {
    if (url.includes('youtube.com/watch?v=')) {
      const id = url.split('v=')[1]?.split('&')[0];
      return `https://www.youtube.com/embed/${id}?autoplay=1`;
    }
    if (url.includes('youtu.be/')) {
      const id = url.split('youtu.be/')[1]?.split('?')[0];
      return `https://www.youtube.com/embed/${id}?autoplay=1`;
    }
    if (url.includes('vimeo.com/')) {
      const id = url.split('vimeo.com/')[1]?.split('?')[0];
      return `https://player.vimeo.com/video/${id}?autoplay=1`;
    }
    return url;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-5xl bg-[#0F0F0F] text-white rounded-xl overflow-hidden border border-white/10 shadow-2xl z-10 max-h-[95vh] flex flex-col">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0F0F0F]">
          <div className="flex items-center gap-3 text-xs text-neutral-400">
            <span className="font-semibold text-white">{video.title}</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#4d69ff] font-medium">{video.category}</span>
            <span aria-hidden="true">·</span>
            <span>{video.duration}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1 text-xs rounded-md bg-white/10 hover:bg-white/20 text-neutral-200 transition-colors cursor-pointer"
            >
              {copiedShare ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Link Copied</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 rounded-md text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Player Container */}
        <div className="relative bg-black aspect-video w-full flex items-center justify-center overflow-hidden">
          {isYouTube || isVimeo ? (
            <iframe
              src={getEmbedUrl(video.videoUrl || '')}
              title={video.title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <>
              <video
                ref={videoRef}
                src={video.videoUrl}
                poster={video.thumbnail}
                playsInline
                onTimeUpdate={handleTimeUpdate}
                onEnded={() => setIsPlaying(false)}
                onClick={togglePlay}
                className="w-full h-full object-contain cursor-pointer"
              />

              {/* Player Overlay Controls */}
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col gap-2">
                <input
                  type="range"
                  min={0}
                  max={duration || 100}
                  value={currentTime}
                  onChange={handleSeek}
                  className="w-full h-1 bg-white/30 rounded-lg appearance-none cursor-pointer accent-[#2B4BFF]"
                />

                <div className="flex items-center justify-between text-xs text-white/90 pt-1">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={togglePlay}
                      className="p-1.5 rounded-full hover:bg-white/20 transition-colors cursor-pointer"
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={toggleMute}
                        className="p-1.5 rounded-full hover:bg-white/20 transition-colors cursor-pointer"
                      >
                        {isMuted || volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                      </button>
                      <input
                        type="range"
                        min={0}
                        max={1}
                        step={0.05}
                        value={isMuted ? 0 : volume}
                        onChange={handleVolumeChange}
                        className="w-16 h-1 bg-white/30 rounded appearance-none cursor-pointer accent-white"
                      />
                    </div>

                    <span className="font-mono text-[11px] text-neutral-300 tabular-nums">
                      {formatTime(currentTime)} / {formatTime(duration || 0)}
                    </span>
                  </div>

                  <button
                    onClick={toggleFullscreen}
                    className="p-1.5 rounded-full hover:bg-white/20 transition-colors cursor-pointer"
                  >
                    <Maximize className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Ad Strategy & Metrics Breakdown */}
        <div className="p-6 overflow-y-auto no-scrollbar space-y-6 bg-[#0F0F0F]">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                {video.title}
              </h2>
              <p className="text-sm text-neutral-300 font-medium">
                {video.logline}
              </p>
            </div>

            {/* Performance Metrics if available */}
            {video.metrics && (
              <div className="flex items-center gap-3 bg-white/5 px-3 py-2 rounded-lg border border-white/10 text-xs">
                {video.metrics.roas && (
                  <div>
                    <span className="text-[10px] text-neutral-400 block">Performance</span>
                    <span className="text-emerald-400 font-bold">{video.metrics.roas}</span>
                  </div>
                )}
                {video.metrics.hookRate && (
                  <div className="border-l border-white/10 pl-3">
                    <span className="text-[10px] text-neutral-400 block">Hook Retention</span>
                    <span className="text-white font-medium">{video.metrics.hookRate}</span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Synopsis */}
          <div className="space-y-2 text-sm text-neutral-300 leading-relaxed max-w-3xl">
            <p className="text-neutral-400 text-xs sm:text-sm">
              {video.synopsis}
            </p>
          </div>

          {/* Video Editing Specifications */}
          <div className="pt-4 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div>
              <span className="text-[11px] text-neutral-500 uppercase tracking-wider block mb-0.5 flex items-center gap-1">
                <Layers className="w-3 h-3 text-[#2B4BFF]" /> NLE Software
              </span>
              <span className="text-neutral-200 font-medium">{video.gear.software}</span>
            </div>

            <div>
              <span className="text-[11px] text-neutral-500 uppercase tracking-wider block mb-0.5 flex items-center gap-1">
                <Bot className="w-3 h-3 text-[#2B4BFF]" /> AI Tools
              </span>
              <span className="text-neutral-200 font-medium">{video.gear.aiTools}</span>
            </div>

            <div>
              <span className="text-[11px] text-neutral-500 uppercase tracking-wider block mb-0.5 flex items-center gap-1">
                <Sliders className="w-3 h-3 text-[#2B4BFF]" /> Framework
              </span>
              <span className="text-neutral-200 font-medium">{video.gear.workflow}</span>
            </div>

            <div>
              <span className="text-[11px] text-neutral-500 uppercase tracking-wider block mb-0.5 flex items-center gap-1">
                <TrendingUp className="w-3 h-3 text-[#2B4BFF]" /> Sound & SFX
              </span>
              <span className="text-neutral-200 font-medium">{video.gear.audio}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
