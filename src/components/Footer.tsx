import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#050404] text-[#FAF6F0] overflow-hidden select-none border-t border-white/5">
      {/* Background Image Container - shifted down slightly (backgroundPosition: 'center 40px') */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat opacity-40 z-0"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dkev7ein3/image/upload/v1783168791/Footer_wtadwl.png')`,
          backgroundPosition: 'center 40px',
        }}
      />
      
      {/* Subtle overlay gradients for premium blending */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-[#050404] via-transparent to-[#050404] pointer-events-none z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050404]/80 via-transparent to-[#050404]/80 pointer-events-none z-[1]" /> */}

      {/* Main Footer Container */}
      <div className="relative w-full px-6 pt-24 pb-12 md:px-12 lg:px-24 z-10 flex flex-col justify-between min-h-[500px]">
        
        {/* Top Content Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Number & CTA heading */}
          <div className="lg:col-span-12 flex gap-4 md:gap-5 items-start">
            {/* Section number "06." */}
            <span className="font-mono text-xs md:text-sm text-[#b28b81] tracking-widest pt-2">
              06.
            </span>
            
            {/* Headline and details */}
            <div className="flex flex-col gap-6">
              <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none uppercase tracking-[-0.01em] text-[#FAF6F0]">
                Let's build<br />
                something iconic.
              </h2>
              
              <p className="font-mono text-[10px] md:text-xs text-white/50 leading-relaxed max-w-md">
                Ready to shape the future? Let's make<br />
                something unforgettable together.
              </p>

              {/* Call to action button */}
              <div className="pt-2">
                <a 
                  href="mailto:hello@younicore.com"
                  className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#b28b81] hover:bg-[#c29c92] text-[#050404] font-mono text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 group shadow-lg shadow-black/20"
                >
                  Get In Touch
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom footer bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Copyright details */}
          <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/30 leading-loose">
            <p>© YOUNICORE 2026</p>
            <p>ALL RIGHTS RESERVED.</p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {[
              { name: 'Instagram', url: '#' },
              { name: 'Linkedin', url: '#' },
              { name: 'X (Twitter)', url: '#' },
            ].map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="relative font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 hover:text-white/80 transition-colors duration-300 py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/40 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
