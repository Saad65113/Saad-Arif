import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 border-t border-black/[0.06] dark:border-white/[0.08] bg-[#FAFAFA] dark:bg-[#0A0A0A] text-neutral-500 dark:text-neutral-400 text-xs transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="font-semibold text-neutral-900 dark:text-white">Saad Arif</span>
          <span className="hidden sm:inline" aria-hidden="true">·</span>
          <span>Videos, simply told.</span>
          <span className="hidden sm:inline" aria-hidden="true">·</span>
          <span>Karachi, Pakistan</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="mailto:saadarifak@gmail.com"
            className="hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            saadarifak@gmail.com
          </a>
          <span aria-hidden="true">·</span>
          <span>© {new Date().getFullYear()} Saad Arif. All rights reserved.</span>
          
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-neutral-700 dark:text-neutral-300 transition-colors cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
