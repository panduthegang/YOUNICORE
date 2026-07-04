import React, { useState } from 'react';
import { Menu, ArrowDown, Plus } from 'lucide-react';

export default function Hero() {
  const [isHoveredBadge, setIsHoveredBadge] = useState(false);

  return (
    <section className="relative w-full min-h-screen bg-[#050404] text-[#FAF6F0] flex flex-col justify-between overflow-hidden font-sans select-none">
      {/* Background Image with Dark Vignette/Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-85 z-0"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dkev7ein3/image/upload/v1783167539/Hero_c4lz4z.png')`,
        }}
      />
      {/* HEADER NAVBAR */}
      <header className="relative w-full flex items-center justify-between px-6 py-6 md:px-12 md:py-8 z-10">
        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center transition-all duration-500 group-hover:border-white group-hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]">
            <span className="font-mono text-sm font-semibold tracking-tighter">Y</span>
          </div>
          <span className="font-mono text-xs uppercase tracking-[0.3em] font-semibold text-white/95 group-hover:text-white transition-colors duration-300">
            Younicore
          </span>
        </div>

        {/* Navigation Menu (Hidden on mobile) */}
        <nav className="hidden lg:flex items-center gap-10">
          {['Work', 'Services', 'About', 'Manifesto', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative font-mono text-[10px] uppercase tracking-[0.25em] text-white/60 hover:text-white transition-colors duration-300 py-1 group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Action Button & Hamburger */}
        <div className="flex items-center gap-4">
          <button className="group flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-black hover:border-white transition-all duration-500">
            <span>Let's Build</span>
            <Plus className="w-3.5 h-3.5 transition-transform duration-500 group-hover:rotate-90" />
          </button>
          
          <button className="p-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/15 transition-colors duration-300" aria-label="Menu">
            <Menu className="w-4 h-4 text-white/80" />
          </button>
        </div>
      </header>

      {/* LEFT SIDEBAR (VERTICAL COPYRIGHT) - Hidden on small screens */}
      <div className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-4 z-10 origin-left -rotate-90 pointer-events-none">
        <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/30 whitespace-nowrap">
          © YOUNICORE 2026
        </span>
      </div>

      {/* HERO MAIN BODY */}
      <div className="relative flex-1 flex flex-col justify-between px-6 py-8 md:px-12 lg:px-24 z-10">
        
        {/* UPPER CONTENT (Agency slogan / info) */}
        <div className="w-full flex justify-start mt-4 md:mt-8">
          <div className="max-w-xs font-mono text-[10px] md:text-[11px] leading-relaxed text-white/50 tracking-wider">
            <p className="border-l border-white/20 pl-3">
              A DESIGN AGENCY<br />
              FOR THE NEW CULTURE.<br />
              HUMAN MADE. AI AUGMENTED.
            </p>
          </div>
        </div>

        {/* CENTER TITLE */}
        <div className="relative w-full my-auto py-12 flex items-center justify-center">
          <div className="relative select-none pointer-events-none">
            {/* Background glowing aura behind text */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-pink-500/5 to-purple-500/10 blur-[80px] pointer-events-none" />

            <h1 className="font-display text-[15vw] md:text-[14vw] leading-none uppercase tracking-[-0.02em] text-[#FAF6F0] drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
              YOUNICORE
            </h1>
          </div>
        </div>

        {/* BOTTOM METRICS / FOOTER ROW */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 items-end gap-8 pt-4">
          
          {/* Bottom Left: Brand vision */}
          <div className="order-2 md:order-1 font-mono text-[10px] md:text-[11px] leading-relaxed text-white/50 tracking-wider">
            <p className="border-l border-white/20 pl-3">
              WE COMBINE STRATEGY, DESIGN<br />
              AND TECHNOLOGY TO BUILD BRANDS<br />
              THAT DEFY THE ORDINARY.
            </p>
          </div>

          {/* Bottom Center: Rotating Text Badge */}
          <div className="order-1 md:order-2 flex justify-center py-4">
            <div 
              className="relative w-24 h-24 flex items-center justify-center cursor-pointer group"
              onMouseEnter={() => setIsHoveredBadge(true)}
              onMouseLeave={() => setIsHoveredBadge(false)}
            >
              {/* Rotating Circular SVG text */}
              <svg 
                className={`w-full h-full text-white/30 group-hover:text-white/60 transition-colors duration-500 transition-transform ${isHoveredBadge ? 'animate-spin' : 'animate-spin-slow'}`}
                viewBox="0 0 100 100"
                style={{ animationDuration: isHoveredBadge ? '6s' : '22s' }}
              >
                <path
                  id="circlePath"
                  d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                  fill="none"
                />
                <text className="font-mono text-[7px] uppercase fill-current tracking-[0.2em] font-semibold">
                  <textPath href="#circlePath">
                    YOUNICORE • CREATIVE STUDIO • DESIGN AGENCY •
                  </textPath>
                </text>
              </svg>

              {/* Centered Logo Y */}
              <div className="absolute w-10 h-10 rounded-full border border-white/20 bg-[#050404]/80 backdrop-blur-sm flex items-center justify-center transition-all duration-500 group-hover:border-white/50 group-hover:shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                <span className="font-mono text-xs font-semibold text-white/80 group-hover:text-white">Y</span>
              </div>
            </div>
          </div>

          {/* Bottom Right: Scroll to explore */}
          <div className="order-3 flex justify-start md:justify-end">
            <div className="flex items-center gap-3 cursor-pointer group">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40 group-hover:text-white/80 transition-colors duration-300 text-left md:text-right">
                SCROLL TO EXPLORE<br />
                <span className="text-white/25 group-hover:text-white/50">THE UNSEEN</span>
              </span>
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 group-hover:bg-white/5 transition-all duration-300">
                <ArrowDown className="w-3.5 h-3.5 text-white/50 group-hover:text-white group-hover:translate-y-0.5 transition-all duration-300" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
