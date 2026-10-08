export interface VideoItem {
  id: string;
  title: string;
  category: 'UGC Ads' | 'Meta Ads' | 'AI Video' | 'Short-Form';
  duration: string;
  year: string;
  thumbnail: string;
  videoUrl?: string; // direct MP4 or YouTube / Vimeo embed URL
  aspectRatio?: string;
  logline: string;
  synopsis: string;
  metrics?: {
    hookRate?: string;
    roas?: string;
    ctr?: string;
  };
  gear: {
    software: string;
    aiTools: string;
    workflow: string;
    audio: string;
  };
  featured?: boolean;
}

export const INITIAL_VIDEOS: VideoItem[] = [
  {
    id: 'ugc-skincare-hook',
    title: 'Aura Glow — High-Converting UGC Ad',
    category: 'UGC Ads',
    duration: '0:38',
    year: '2026',
    thumbnail: '/src/assets/images/thumb_ugc_meta_ad_1791474962103.jpg',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    aspectRatio: '16:9',
    logline: 'Problem-solution UGC ad with 3 scroll-stopping hook variations and on-screen dynamic captions.',
    synopsis: 'Engineered for direct-response e-commerce on Meta (Instagram & TikTok). Features a 3-second hook split test, fast pattern interrupts, authentic creator reactions, kinetic subtitle callouts, and an end-screen promotional discount CTA.',
    metrics: {
      hookRate: '68% (3s view rate)',
      roas: '3.8x Blended ROAS',
      ctr: '4.2% Link Click-Through'
    },
    gear: {
      software: 'Premiere Pro & After Effects',
      aiTools: 'Auto-Captions & AI B-Roll Enhancer',
      workflow: 'Direct Response Framework (Hook > Problem > Solution > Social Proof > CTA)',
      audio: 'Native Voiceover & Sound Effects'
    },
    featured: true
  },
  {
    id: 'ai-cyber-creative',
    title: 'Synthetix — Generative AI Brand Film',
    category: 'AI Video',
    duration: '0:45',
    year: '2026',
    thumbnail: '/src/assets/images/thumb_ai_video_creative_1791474972459.jpg',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    aspectRatio: '16:9',
    logline: 'Futuristic conceptual brand commercial created using generative AI video workflows & 3D compositing.',
    synopsis: 'Showcasing the frontier of AI video editing: seamless prompt-to-video generation, frame interpolation, cinematic color grading in DaVinci Resolve, and spatial sound design. Built to stand out on feed with hypnotic visuals.',
    metrics: {
      hookRate: '74% Retention at 5s',
      roas: 'Brand Awareness Campaign',
      ctr: '5.1% Engagement Rate'
    },
    gear: {
      software: 'DaVinci Resolve & After Effects',
      aiTools: 'Runway Gen-3, Midjourney v6, ElevenLabs Voice',
      workflow: 'AI Image-to-Video Interpolation & Neural Upscaling',
      audio: 'Synthesized Hybrid Sci-Fi Soundscape'
    }
  },
  {
    id: 'meta-retargeting-hook',
    title: 'Apex Wear — Meta Dynamic Retargeting Ad',
    category: 'Meta Ads',
    duration: '0:28',
    year: '2026',
    thumbnail: '/src/assets/images/hero_featured_film_1791473628542.jpg',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    aspectRatio: '16:9',
    logline: 'High-ROAS Meta ad built with rapid cuts, social proof overlays, and FOMO triggers.',
    synopsis: 'Designed specifically for mid-funnel and bottom-funnel Meta Ads campaigns. Fast 0.5s beat-synced cuts, customer review pop-ups, sound-off animated captions, and high-visibility offer badges.',
    metrics: {
      hookRate: '61% Thumbstop Rate',
      roas: '4.5x Retargeting ROAS',
      ctr: '3.9% CTR'
    },
    gear: {
      software: 'Premiere Pro',
      aiTools: 'Whisper AI Transcription',
      workflow: 'E-Commerce Direct Response Iteration',
      audio: 'Trending Beat sync + SFX whooshes'
    }
  },
  {
    id: 'ugc-tech-gadget',
    title: 'KettleCraft — Organic UGC Unboxing & Review',
    category: 'UGC Ads',
    duration: '0:50',
    year: '2025',
    thumbnail: '/src/assets/images/thumb_burns_road_1791473668904.jpg',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    aspectRatio: '16:9',
    logline: 'Authentic creator testimonial video edit highlighting micro-details and sensory satisfaction.',
    synopsis: 'Emphasizes sensory ASMR sounds, close-up macro shots, honest creator dialogue, and split-screen comparison against generic competitors. Perfect for Meta Story & Reels placements.',
    metrics: {
      hookRate: '59% Hook Rate',
      roas: '3.2x Cold Audience ROAS',
      ctr: '3.4% CTR'
    },
    gear: {
      software: 'CapCut Pro & Premiere Pro',
      aiTools: 'AI Background Cleanup & Noise Removal',
      workflow: 'UGC Unboxing & Comparison Angle',
      audio: 'ASMR Crisp Foley & Balanced Dialog'
    }
  },
  {
    id: 'ai-cinematic-commercial',
    title: 'Horizon Odyssey — AI Hybrid Commercial',
    category: 'AI Video',
    duration: '1:10',
    year: '2025',
    thumbnail: '/src/assets/images/thumb_indus_water_1791473680197.jpg',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
    aspectRatio: '16:9',
    logline: 'Hybrid film combining real documentary footage with generative AI scene extensions.',
    synopsis: 'Demonstrating how AI tools can amplify commercial video production budgets by 10x: generating impossible camera fly-throughs, custom atmospheric weather, and photorealistic virtual environments.',
    metrics: {
      hookRate: '82% Video Completion',
      roas: 'Lead Generation Campaign',
      ctr: '4.8% CTR'
    },
    gear: {
      software: 'After Effects & DaVinci Resolve',
      aiTools: 'Luma Dream Machine, Topaz Video AI, Flux.1',
      workflow: 'Hybrid VFX & Generative Expansion',
      audio: 'Cinematic Orchestral Composition'
    }
  },
  {
    id: 'meta-shortform-growth',
    title: 'Midnight Transit — Viral Reel & Meta Ad',
    category: 'Short-Form',
    duration: '0:32',
    year: '2025',
    thumbnail: '/src/assets/images/thumb_karachi_night_1791473655341.jpg',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    aspectRatio: '16:9',
    logline: 'Moody aesthetic short-form edit that drove over 1.2M organic impressions and paid conversions.',
    synopsis: 'Kinetic typography, seamless infinite loop ending, color-graded night aesthetics, and high-retention pacing built for Instagram Reels and Meta Boosted Posts.',
    metrics: {
      hookRate: '71% 3s Hook Rate',
      roas: '1.2M+ Viral Reach',
      ctr: '6.3% Profile Visit Rate'
    },
    gear: {
      software: 'Premiere Pro',
      aiTools: 'AI Smart Masking & Relighting',
      workflow: 'Infinite Loop Viral Retention Structure',
      audio: 'Bass-boosted ambient lo-fi soundscape'
    }
  }
];
