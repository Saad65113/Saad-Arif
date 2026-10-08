import React, { useState } from 'react';
import { Play, Plus, TrendingUp } from 'lucide-react';
import { VideoItem } from '../data/videos';

interface VideoGridProps {
  videos: VideoItem[];
  onSelectVideo: (video: VideoItem) => void;
  onOpenAddModal: () => void;
}

export const VideoGrid: React.FC<VideoGridProps> = ({ videos, onSelectVideo, onOpenAddModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'UGC Ads', 'Meta Ads', 'AI Video', 'Short-Form'];

  const filteredVideos = activeCategory === 'All'
    ? videos
    : videos.filter(v => v.category === activeCategory);

  return (
    <section id="work" className="py-20 px-6 max-w-6xl mx-auto w-full">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-black/[0.08] dark:border-white/[0.08] pb-6">
        <div className="space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-[#2B4BFF] dark:text-[#4d69ff] font-bold">
            Editor Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Latest Work
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Selected UGC ad creatives, high-ROAS Meta campaigns, and AI video edits.
          </p>
        </div>

        {/* Action: Add Custom Video embed */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenAddModal}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-700 dark:text-neutral-300 bg-neutral-200/70 dark:bg-neutral-800/80 hover:bg-neutral-300 dark:hover:bg-neutral-700 rounded-md transition-colors cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Custom Ad / Edit</span>
          </button>
        </div>
      </div>

      {/* Interactive Category Filter Segmented Control */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-6 mb-8 text-xs">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-3.5 py-1.5 rounded-md font-medium transition-colors whitespace-nowrap cursor-pointer ${
              activeCategory === category
                ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-sm'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800/50'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* 2-3 Column Grid with hover zoom and play overlay */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredVideos.map((video) => (
          <article
            key={video.id}
            onClick={() => onSelectVideo(video)}
            className="group cursor-pointer flex flex-col space-y-3"
          >
            {/* Thumbnail Frame */}
            <div className="relative aspect-video rounded-lg overflow-hidden bg-neutral-900 border border-black/[0.06] dark:border-white/[0.08]">
              <img
                src={video.thumbnail}
                alt={video.title}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/45 transition-colors duration-300 flex items-center justify-center">
                {/* Play Button Icon on Hover */}
                <div className="w-12 h-12 rounded-full bg-white/90 text-neutral-900 flex items-center justify-center opacity-85 group-hover:opacity-100 group-hover:scale-110 group-hover:bg-[#2B4BFF] group-hover:text-white transition-all duration-300 shadow-lg">
                  <Play className="w-5 h-5 ml-0.5 fill-current" />
                </div>
              </div>

              {/* Duration Tag in bottom right */}
              <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded text-[11px] font-mono tracking-wider bg-black/75 text-white backdrop-blur-sm">
                {video.duration}
              </div>

              {/* Metric Callout if available */}
              {video.metrics?.roas && (
                <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded text-[10px] font-semibold bg-black/80 text-emerald-400 backdrop-blur-sm flex items-center gap-1 border border-emerald-500/30">
                  <TrendingUp className="w-3 h-3" />
                  <span>{video.metrics.roas}</span>
                </div>
              )}
            </div>

            {/* Title & Clean Unboxed Metadata */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
                <span className="font-semibold text-neutral-800 dark:text-neutral-200">{video.category}</span>
                <div className="flex items-center gap-1.5">
                  <span aria-hidden="true">·</span>
                  <span>{video.year}</span>
                </div>
              </div>

              <h3 className="text-base font-semibold tracking-tight text-neutral-900 dark:text-white group-hover:text-[#2B4BFF] dark:group-hover:text-[#4d69ff] transition-colors">
                {video.title}
              </h3>

              <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-1">
                {video.logline}
              </p>
            </div>
          </article>
        ))}
      </div>

      {filteredVideos.length === 0 && (
        <div className="py-16 text-center text-sm text-neutral-500">
          No ad edits found in this category.
        </div>
      )}
    </section>
  );
};
