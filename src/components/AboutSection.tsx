import React, { useState, useEffect } from 'react';
import { Film, Zap, Bot, Layers } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [karachiTime, setKarachiTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Karachi',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        });
        setKarachiTime(formatter.format(now));
      } catch {
        setKarachiTime('PKT (UTC+5)');
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto w-full border-t border-black/[0.08] dark:border-white/[0.08]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Portrait Photo */}
        <div className="lg:col-span-5">
          <div className="relative group max-w-md mx-auto lg:max-w-none">
            <div className="aspect-[3/4] rounded-xl overflow-hidden bg-neutral-900 border border-black/[0.08] dark:border-white/[0.1] shadow-xl">
              <img
                src="/src/assets/images/portrait_saad_filmmaker_1791473640868.jpg"
                alt="Saad Arif — Video Editor (UGC, Meta Ads, AI)"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
              />
            </div>
            
            {/* Photo caption unboxed */}
            <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 mt-3 px-1">
              <span>Saad Arif</span>
              <span aria-hidden="true">·</span>
              <span>Video Editor</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono tabular-nums">{karachiTime} PKT</span>
            </div>
          </div>
        </div>

        {/* Right Column: Introduction as Video Editor */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] text-[#2B4BFF] dark:text-[#4d69ff] font-bold">
              About the Editor
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
              Saad Arif
            </h2>

            {/* Dedicated Introduction Statement as Video Editor */}
            <div className="text-xl sm:text-2xl text-neutral-800 dark:text-neutral-200 font-medium leading-relaxed border-l-2 border-[#2B4BFF] pl-5 py-1">
              “I am Saad Arif, a Video Editor specializing in high-performing UGC, high-ROAS Meta Ads, and AI-accelerated video workflows. I craft edits that stop the scroll in the first 3 seconds and convert viewers into customers.”
            </div>

            <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed pt-2">
              In direct-response marketing and social feeds, attention is the scarcest currency. I combine performance psychology with sharp creative editing—delivering thumb-stopping hooks, kinetic captions, sound-off clarity, and pattern interrupts. By integrating generative AI tools into my editing pipeline, I produce high-volume creative iterations rapidly so your ad campaigns scale without creative fatigue.
            </p>
          </div>

          {/* 3 Core Editing Specializations */}
          <div id="philosophy" className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-black/[0.06] dark:border-white/[0.06]">
            <div className="space-y-1.5">
              <span className="text-xs font-semibold text-neutral-900 dark:text-white flex items-center gap-1.5">
                <Film className="w-3.5 h-3.5 text-[#2B4BFF]" />
                UGC Video Editing
              </span>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                Authentic creator pacing, native TikTok/Reels captions, split-screen comparisons, and problem-solution hooks that build immediate trust.
              </p>
            </div>

            <div className="space-y-1.5">
              <span className="text-xs font-semibold text-neutral-900 dark:text-white flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-[#2B4BFF]" />
                Meta Ads (FB & IG)
              </span>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                Direct-response structures, sound-off readability, fast beat-synced cuts, and clear offer calls-to-action built to lower CPA and lift ROAS.
              </p>
            </div>

            <div className="space-y-1.5">
              <span className="text-xs font-semibold text-neutral-900 dark:text-white flex items-center gap-1.5">
                <Bot className="w-3.5 h-3.5 text-[#2B4BFF]" />
                AI Video & VFX
              </span>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                Generative AI b-roll, neural voice cloning, rapid creative testing variations, and automated workflow enhancements that 5x output speed.
              </p>
            </div>
          </div>

          {/* Editor Toolkit & Software Suite */}
          <div className="p-4 rounded-lg bg-neutral-100/70 dark:bg-neutral-900/60 border border-black/[0.04] dark:border-white/[0.05] text-xs text-neutral-600 dark:text-neutral-400 flex flex-wrap items-center gap-y-2 gap-x-4">
            <span className="font-semibold text-neutral-900 dark:text-white flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#2B4BFF]" /> Software Suite:
            </span>
            <span>Adobe Premiere Pro</span>
            <span aria-hidden="true">·</span>
            <span>After Effects</span>
            <span aria-hidden="true">·</span>
            <span>CapCut Pro</span>
            <span aria-hidden="true">·</span>
            <span>DaVinci Resolve</span>
            <span aria-hidden="true">·</span>
            <span>Runway Gen-3 / Midjourney</span>
            <span aria-hidden="true">·</span>
            <span>ElevenLabs</span>
          </div>
        </div>
      </div>
    </section>
  );
};
