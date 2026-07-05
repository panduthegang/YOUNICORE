import React, { useState, useEffect } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // List of critical image assets to preload
    const criticalImages = [
      'https://res.cloudinary.com/dkev7ein3/image/upload/v1783167539/Hero_c4lz4z.png',
      'https://res.cloudinary.com/dkev7ein3/image/upload/v1783170388/Manifesto_nxd5tc.png',
      'https://res.cloudinary.com/dkev7ein3/image/upload/v1783170777/Services_px4qwr.png',
      'https://res.cloudinary.com/dkev7ein3/image/upload/v1783171530/Work-1_tn5syz.png',
      'https://res.cloudinary.com/dkev7ein3/image/upload/v1783168791/Footer_wtadwl.png',
    ];

    let loadedCount = 0;
    const totalImages = criticalImages.length;
    
    // Minimum load duration to ensure smooth counter animation (1.8 seconds)
    const startTime = Date.now();
    const minDuration = 1800;

    const updateProgress = () => {
      loadedCount++;
      const assetProgress = (loadedCount / totalImages) * 100;
      
      // Calculate elapsed time percentage
      const elapsed = Date.now() - startTime;
      const timeProgress = Math.min((elapsed / minDuration) * 100, 100);
      
      // Sync progress to the lesser of actual asset load or time-based progress
      const targetProgress = Math.floor(Math.min(assetProgress, timeProgress));
      setProgress((prev) => Math.max(prev, targetProgress));
    };

    // Load images
    criticalImages.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = updateProgress;
      img.onerror = updateProgress; // Proceed even on error to prevent blocking
    });

    // Backup interval counter to drive visual count in case assets load extremely fast
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const timeProgress = Math.min((elapsed / minDuration) * 100, 100);
      
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Increment visual progress smoothly
        const next = Math.min(Math.floor(timeProgress), 100);
        return Math.max(prev + 1, next);
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      // Hold 100% for visual completion
      const exitTimer = setTimeout(() => {
        setIsExiting(true);
      }, 500);

      // Trigger parents callback when exit animation ends
      const completeTimer = setTimeout(() => {
        onComplete();
      }, 1300); // 500ms hold + 800ms slide-up transition

      return () => {
        clearTimeout(exitTimer);
        clearTimeout(completeTimer);
      };
    }
  }, [progress, onComplete]);

  // Format progress to always show three characters, e.g. "000", "045", "100"
  const formattedProgress = String(progress).padStart(3, '0');

  return (
    <div 
      className={`fixed inset-0 w-full h-full bg-[#050404] z-[9999] flex flex-col justify-between p-8 md:p-16 select-none overflow-hidden transition-transform duration-[800ms] ease-[cubic-bezier(0.85,0,0.15,1)] ${
        isExiting ? 'translate-y-[-100%]' : 'translate-y-0'
      }`}
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(5, 4, 4, 0.88) 0%, rgba(5, 4, 4, 0.94) 100%), url('https://res.cloudinary.com/dkev7ein3/image/upload/v1783167539/Hero_c4lz4z.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Top Header Indicators */}
      <div className="w-full flex items-center justify-between z-10">
        <div className="flex items-center gap-4">
          <div className="relative w-12 h-12 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-white/25 animate-spin-slow bg-white/5" />
            <span className="relative font-mono text-base font-semibold tracking-tighter text-[#FAF6F0]">Y</span>
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-xs uppercase tracking-[0.35em] font-bold text-[#FAF6F0]">
              Younicore
            </span>
            <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#b28b81] mt-0.5">
              Creative Studio
            </span>
          </div>
        </div>
        
        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#b28b81] animate-pulse">
          Loading Elements...
        </span>
      </div>

      {/* Centered Massive Percentage Counter */}
      <div className="flex flex-col items-center justify-center flex-1 z-10">
        <div className="relative overflow-hidden flex items-baseline">
          <span className="font-display text-[22vw] leading-none uppercase tracking-wider text-[#FAF6F0] select-none font-bold">
            {formattedProgress}
          </span>
          <span className="font-mono text-sm sm:text-base text-[#b28b81] tracking-widest pl-2 select-none absolute bottom-4 right-[-2.5rem] sm:right-[-3rem]">
            %
          </span>
        </div>
        
        {/* Horizontal Progress Bar */}
        <div className="w-full max-w-lg h-[1px] bg-white/10 relative overflow-hidden mt-6">
          <div 
            className="absolute left-0 top-0 h-full bg-[#b28b81] transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Bottom Footer Info */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5 pt-6 z-10">
        <div className="flex items-center gap-12 font-mono text-[9px] uppercase tracking-[0.3em] text-white/40">
          <span>Status: Shaping the Culture</span>
          <span className="hidden sm:inline">Established: 2026</span>
        </div>
        
        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/30">
          Human Made • AI Augmented
        </span>
      </div>
    </div>
  );
}
