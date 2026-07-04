import React from 'react';

export default function Manifesto() {
  return (
    <section 
      id="manifesto" 
      className="relative w-full bg-[#050404] text-[#FAF6F0] border-t border-white/5 py-24 lg:py-0 px-6 md:px-12 lg:px-24 overflow-hidden select-none font-sans flex items-center min-h-[500px] lg:min-h-[600px] xl:min-h-[700px] lg:aspect-[1774/887]"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dkev7ein3/image/upload/v1783170388/Manifesto_nxd5tc.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Mobile Dark Overlay to ensure text readability on cropped background */}
      <div className="absolute inset-0 bg-[#050404]/80 lg:hidden z-[1] pointer-events-none" />

      {/* Main Grid Wrapper */}
      <div className="relative w-full max-w-[1440px] mx-auto z-10 grid grid-cols-12 gap-4 items-center">
        
        {/* TEXT CONTENT COLUMN: Offset to fit perfectly in the blank space of the merged background image */}
        <div className="col-span-12 lg:col-start-6 lg:col-span-4 xl:col-start-6 xl:col-span-4 flex flex-col gap-6 max-w-[280px] lg:max-w-[320px] lg:pl-4 z-20">
          
          {/* Number Counter & Heading */}
          <div className="flex items-start gap-4">
            <span className="font-mono text-xs md:text-sm text-[#b28b81] tracking-widest pt-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              01.
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6.5xl tracking-wider text-[#FAF6F0] leading-none uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)] font-bold">
              Manifesto
            </h2>
          </div>

          {/* Accent Slogan */}
          <div className="font-mono text-[10px] md:text-[11px] leading-relaxed text-white tracking-widest drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            <p className="border-l-2 border-[#b28b81] pl-3 uppercase font-bold">
              We don't follow trends.<br />
              We create movements.
            </p>
          </div>

          {/* Body Copy */}
          <p className="font-mono text-[10px] md:text-[11px] text-white/85 leading-relaxed max-w-sm drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            In a world of templates, we craft timeless ideas.
            Where others automate, we augment.
            Younicore is where human creativity
            meets artificial intelligence to build
            what's next, not what's now.
          </p>

          {/* Interactive Link */}
          <div className="pt-2">
            <a 
              href="#read-more" 
              className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.25em] text-[#b28b81] hover:text-white transition-colors duration-300 group drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
            >
              Read Our Manifesto
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
