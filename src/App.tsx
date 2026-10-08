import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { VideoGrid } from './components/VideoGrid';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { VideoModal } from './components/VideoModal';
import { AddVideoModal } from './components/AddVideoModal';
import { Footer } from './components/Footer';
import { INITIAL_VIDEOS, VideoItem } from './data/videos';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('saad_portfolio_theme');
    if (saved) return saved === 'dark';
    return true; // default to cinematic dark mode as requested in prompt (#0A0A0A)
  });

  const [videos, setVideos] = useState<VideoItem[]>(() => {
    const saved = localStorage.getItem('saad_editor_videos_v2');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0 && parsed[0].category) {
          return parsed;
        }
      } catch {
        return INITIAL_VIDEOS;
      }
    }
    return INITIAL_VIDEOS;
  });

  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('saad_portfolio_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('saad_portfolio_theme', 'light');
    }
  }, [darkMode]);

  // Handle URL hash on load (e.g. #burns-road-artisan)
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const matched = videos.find(v => v.id === hash);
      if (matched) {
        setSelectedVideo(matched);
      }
    }
  }, [videos]);

  const handleAddVideo = (newVideo: VideoItem) => {
    const updated = [newVideo, ...videos];
    setVideos(updated);
    localStorage.setItem('saad_editor_videos_v2', JSON.stringify(updated));
  };

  const handleOpenContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const featuredVideo = videos.find(v => v.featured) || videos[0];

  return (
    <div className="min-h-screen transition-colors duration-300 bg-[#FAFAFA] text-[#111111] dark:bg-[#0A0A0A] dark:text-[#EDEDED]">
      {/* 3-Zone Clean Top Bar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenContact={handleOpenContact}
      />

      <main>
        {/* Full Viewport Cinematic Hero */}
        <HeroSection
          featuredVideo={featuredVideo}
          onOpenVideo={video => setSelectedVideo(video)}
        />

        {/* 2-3 Column Video Grid */}
        <VideoGrid
          videos={videos}
          onSelectVideo={video => setSelectedVideo(video)}
          onOpenAddModal={() => setIsAddModalOpen(true)}
        />

        {/* About & Filmmaker Vision */}
        <AboutSection />

        {/* Contact & Social Inquiry */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Fullscreen Video Lightbox Player Modal */}
      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />

      {/* Add Custom Video Modal */}
      <AddVideoModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddVideo={handleAddVideo}
      />
    </div>
  );
}
