import React from 'react';
import { Sun, Moon, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean | ((prev: boolean) => boolean)) => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode, onOpenContact }) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-opacity-80 transition-colors duration-300 border-b border-black/[0.06] dark:border-white/[0.08] bg-[#FAFAFA]/90 dark:bg-[#0A0A0A]/90">
      <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#" 
          className="text-lg font-bold tracking-tight text-neutral-900 dark:text-neutral-100 hover:opacity-80 transition-opacity"
        >
          Saad Arif
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600 dark:text-neutral-400">
          <a href="#hero" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
            Featured
          </a>
          <a href="#work" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
            Latest Work
          </a>
          <a href="#about" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
            About
          </a>
          <a href="#philosophy" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
            Philosophy
          </a>
          <a href="#contact" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
            Contact
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setDarkMode(prev => !prev)}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 rounded-lg text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={onOpenContact}
            className="group inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wide text-white bg-[#2B4BFF] hover:bg-[#203ecc] rounded-md transition-colors whitespace-nowrap shadow-sm cursor-pointer"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </header>
  );
};
