import React, { useState } from 'react';
import { X, Film, Check } from 'lucide-react';
import { VideoItem } from '../data/videos';

interface AddVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddVideo: (video: VideoItem) => void;
}

export const AddVideoModal: React.FC<AddVideoModalProps> = ({ isOpen, onClose, onAddVideo }) => {
  const [title, setTitle] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [category, setCategory] = useState<VideoItem['category']>('UGC Ads');
  const [duration, setDuration] = useState('0:35');
  const [logline, setLogline] = useState('');
  const [synopsis, setSynopsis] = useState('');
  const [software, setSoftware] = useState('Premiere Pro');
  const [aiTools, setAiTools] = useState('Auto-Captions & AI B-Roll');
  const [roas, setRoas] = useState('3.5x ROAS');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !videoUrl.trim()) return;

    const newVideo: VideoItem = {
      id: `custom-${Date.now()}`,
      title: title.trim(),
      category,
      duration: duration || '0:30',
      year: new Date().getFullYear().toString(),
      thumbnail: '/src/assets/images/thumb_ugc_meta_ad_1791474962103.jpg',
      videoUrl: videoUrl.trim(),
      logline: logline.trim() || 'High-retention ad creative with scroll-stopping hooks and dynamic captions.',
      synopsis: synopsis.trim() || 'Engineered for direct-response performance on Meta and TikTok feeds.',
      metrics: {
        roas: roas.trim() || 'Performance Ad',
        hookRate: '65% 3s Hook Rate',
        ctr: '3.8% CTR'
      },
      gear: {
        software: software || 'Premiere Pro',
        aiTools: aiTools || 'Generative AI Workflow',
        workflow: 'Hook > Problem > Solution > CTA',
        audio: 'Trending Audio & Sound Design'
      }
    };

    onAddVideo(newVideo);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-lg bg-[#111111] text-white rounded-xl border border-white/10 shadow-2xl p-6 z-10 space-y-5">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <Film className="w-4 h-4 text-[#2B4BFF]" />
            <h3 className="text-base font-semibold text-white">Add Video Ad / Edit</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-neutral-400 hover:text-white rounded transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block text-neutral-400 font-medium mb-1">
              Ad / Project Title *
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="e.g. Lumina Serum — 3-Hook UGC Meta Ad"
              className="w-full px-3 py-2 rounded-md bg-neutral-900 border border-white/10 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-[#2B4BFF]"
            />
          </div>

          <div>
            <label className="block text-neutral-400 font-medium mb-1">
              Video URL (YouTube, Vimeo, or direct MP4) *
            </label>
            <input
              type="url"
              required
              value={videoUrl}
              onChange={e => setVideoUrl(e.target.value)}
              placeholder="https://www.youtube.com/watch?v=... or MP4 URL"
              className="w-full px-3 py-2 rounded-md bg-neutral-900 border border-white/10 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-[#2B4BFF]"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-neutral-400 font-medium mb-1">
                Category
              </label>
              <select
                value={category}
                onChange={e => setCategory(e.target.value as VideoItem['category'])}
                className="w-full px-3 py-2 rounded-md bg-neutral-900 border border-white/10 text-white focus:outline-none focus:ring-1 focus:ring-[#2B4BFF]"
              >
                <option value="UGC Ads">UGC Ads</option>
                <option value="Meta Ads">Meta Ads</option>
                <option value="AI Video">AI Video</option>
                <option value="Short-Form">Short-Form</option>
              </select>
            </div>

            <div>
              <label className="block text-neutral-400 font-medium mb-1">
                Duration (min:sec)
              </label>
              <input
                type="text"
                value={duration}
                onChange={e => setDuration(e.target.value)}
                placeholder="0:35"
                className="w-full px-3 py-2 rounded-md bg-neutral-900 border border-white/10 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-[#2B4BFF]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-neutral-400 font-medium mb-1">
                Performance Metric (Optional)
              </label>
              <input
                type="text"
                value={roas}
                onChange={e => setRoas(e.target.value)}
                placeholder="e.g. 4.2x ROAS or 70% Hook Rate"
                className="w-full px-3 py-2 rounded-md bg-neutral-900 border border-white/10 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-[#2B4BFF]"
              />
            </div>

            <div>
              <label className="block text-neutral-400 font-medium mb-1">
                NLE Software
              </label>
              <input
                type="text"
                value={software}
                onChange={e => setSoftware(e.target.value)}
                placeholder="Premiere Pro / After Effects"
                className="w-full px-3 py-2 rounded-md bg-neutral-900 border border-white/10 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-[#2B4BFF]"
              />
            </div>
          </div>

          <div>
            <label className="block text-neutral-400 font-medium mb-1">
              AI Tools Used
            </label>
            <input
              type="text"
              value={aiTools}
              onChange={e => setAiTools(e.target.value)}
              placeholder="e.g. Runway Gen-3, ElevenLabs, Auto-Captions"
              className="w-full px-3 py-2 rounded-md bg-neutral-900 border border-white/10 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-[#2B4BFF]"
            />
          </div>

          <div>
            <label className="block text-neutral-400 font-medium mb-1">
              Creative Strategy / Hook Logline
            </label>
            <input
              type="text"
              value={logline}
              onChange={e => setLogline(e.target.value)}
              placeholder="Scroll-stopping hook angle and problem-solution breakdown..."
              className="w-full px-3 py-2 rounded-md bg-neutral-900 border border-white/10 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-[#2B4BFF]"
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-3 border-t border-white/10">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#2B4BFF] hover:bg-[#203ecc] text-white font-semibold rounded-md transition-colors cursor-pointer"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Add to Portfolio</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
