import React, { useEffect, useRef, useState } from 'react';

interface Project {
  title: string;
  category: string;
  image: string;
}

export default function Work() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);

  const projects: Project[] = [
    {
      title: 'Luxura',
      category: 'Branding',
      image: 'https://res.cloudinary.com/dkev7ein3/image/upload/v1783171530/Work-1_tn5syz.png',
    },
    {
      title: 'Nexus',
      category: 'Web Experience',
      image: 'https://res.cloudinary.com/dkev7ein3/image/upload/v1783171524/Work-2_hk11jb.png',
    },
    {
      title: 'Alterego',
      category: 'Identity',
      image: 'https://res.cloudinary.com/dkev7ein3/image/upload/v1783171525/Work-3_gtb68c.png',
    },
    {
      title: 'Void',
      category: 'Digital Campaign',
      image: 'https://res.cloudinary.com/dkev7ein3/image/upload/v1783171528/Work-4_eh4xsh.png',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !scrollRef.current) return;

      const container = containerRef.current;
      const scrollEl = scrollRef.current;

      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;

      // Distance from top of container to top of viewport
      const scrolled = -rect.top;
      const maxScroll = containerHeight - windowHeight;

      if (scrolled >= 0 && scrolled <= maxScroll) {
        const scrollPercent = scrolled / maxScroll;
        const scrollWidth = scrollEl.scrollWidth;
        const viewportWidth = window.innerWidth;
        // Padding offset matching layout margins (px-6 md:px-12 lg:px-24)
        const outerPadding = window.innerWidth >= 1024 ? 192 : window.innerWidth >= 768 ? 96 : 48;
        const maxTranslate = scrollWidth - viewportWidth + outerPadding;
        
        setTranslateX(scrollPercent * maxTranslate);
      } else if (scrolled > maxScroll) {
        const scrollWidth = scrollEl.scrollWidth;
        const viewportWidth = window.innerWidth;
        const outerPadding = window.innerWidth >= 1024 ? 192 : window.innerWidth >= 768 ? 96 : 48;
        setTranslateX(scrollWidth - viewportWidth + outerPadding);
      } else {
        setTranslateX(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-[220vh] bg-[#050404] select-none"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden py-8 md:py-16">
        
        {/* Header Row */}
        <div className="w-full px-6 md:px-12 lg:px-24 flex items-end justify-between border-b border-white/5 pb-6">
          <div className="flex items-start gap-4">
            <span className="font-mono text-xs md:text-sm text-[#b28b81] tracking-widest pt-1.5">
              03.
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6.5xl uppercase tracking-wider text-[#FAF6F0] leading-none font-bold">
              Selected Work
            </h2>
          </div>
          <a 
            href="#all-work" 
            className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#b28b81] hover:text-white transition-colors duration-300 group flex items-center gap-2 pb-1.5"
          >
            View All Work
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>

        {/* Sliding Cards container */}
        <div className="w-full relative overflow-hidden mt-6 md:mt-10 border-t border-b border-white/10 bg-black/20">
          <div 
            ref={scrollRef}
            className="flex flex-row pl-6 md:pl-12 lg:pl-24"
            style={{
              transform: `translateX(-${translateX}px)`,
              transition: 'transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)',
            }}
          >
            {projects.map((project, idx) => (
              <div 
                key={idx} 
                className="relative w-[280px] sm:w-[380px] md:w-[420px] lg:w-[450px] h-[280px] sm:h-[380px] md:h-[420px] lg:h-[450px] shrink-0 border-r border-white/10 overflow-hidden group cursor-pointer"
              >
                {/* Subtle bottom text vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent group-hover:from-black/90 group-hover:via-black/5 transition-all duration-500 z-10" />
                
                {/* Scaled cover image */}
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-100 group-hover:scale-[1.03] transition-all duration-700"
                />

                {/* Project Info Bottom Left */}
                <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 z-20 flex flex-col items-start drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  <h3 className="font-serif text-lg sm:text-2xl tracking-wider text-[#FAF6F0] leading-none uppercase mb-1.5">
                    {project.title}
                  </h3>
                  <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-widest text-[#b28b81]">
                    {project.category}
                  </span>
                </div>
              </div>
            ))}

            {/* Final Peach Link Card */}
            <div 
              className="relative w-[280px] sm:w-[380px] md:w-[420px] lg:w-[450px] h-[280px] sm:h-[380px] md:h-[420px] lg:h-[450px] shrink-0 text-[#1A1515] flex flex-col justify-between p-6 sm:p-10 group cursor-pointer overflow-hidden"
              style={{
                backgroundImage: `url('https://res.cloudinary.com/dkev7ein3/image/upload/v1783171769/Card-BG_knwnmo.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              {/* Micro-hover dark overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 pointer-events-none" />
              
              <h3 className="font-sans text-[1.4rem] sm:text-[2rem] lg:text-[2.25rem] font-light tracking-[0.02em] leading-[1.15] uppercase pt-2 select-none z-10 w-[80%] sm:w-[70%] text-black/80">
                More<br />Projects<br />That<br />Matter
              </h3>
              
              <div className="flex items-center justify-start z-10 pb-2">
                <span className="text-2xl sm:text-4xl font-light transition-transform duration-500 group-hover:translate-x-4 text-black/80">
                  →
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
