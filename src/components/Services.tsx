import React from 'react';

export default function Services() {
  const serviceItems = [
    'Brand Strategy',
    'Visual Identity',
    'Web & Digital Experience',
    'AI Integration',
    'Content & Motion',
    'Creative Direction',
  ];

  return (
    <section 
      id="services" 
      className="relative w-full bg-[#050404] text-[#FAF6F0] border-t border-white/5 py-24 px-6 md:px-12 lg:px-24 overflow-hidden select-none font-sans flex items-center min-h-[600px] lg:min-h-[650px] xl:min-h-[750px]"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dkev7ein3/image/upload/v1783170777/Services_px4qwr.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Mobile Dark Overlay to guarantee legibility on small screens */}
      <div className="absolute inset-0 bg-[#050404]/80 lg:hidden z-[1] pointer-events-none" />

      {/* Main Grid Wrapper */}
      <div className="relative w-full max-w-[1440px] mx-auto z-10 grid grid-cols-12 gap-4 items-center">
        
        {/* LEFT COLUMN: Content and Services List */}
        <div className="col-span-12 lg:col-span-5 xl:col-span-4 flex flex-col gap-8 z-10">
          
          {/* Header indicator & title */}
          <div className="flex items-start gap-4">
            <span className="font-mono text-xs md:text-sm text-[#b28b81] tracking-widest pt-1.5 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
              02.
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-5xl xl:text-[3.25rem] tracking-tight text-[#FAF6F0] leading-none uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)]">
              Services
            </h2>
          </div>

          {/* Interactive Services List */}
          <div className="flex flex-col w-full border-t border-white/10">
            {serviceItems.map((service, index) => (
              <div 
                key={index}
                className="w-full py-4 border-b border-white/10 flex items-center justify-between group cursor-pointer"
              >
                {/* Service Name */}
                <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/70 group-hover:text-white group-hover:translate-x-2 transition-all duration-300 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                  {service}
                </span>

                {/* Interactive Plus Sign */}
                <span className="font-mono text-xs text-white/40 group-hover:text-[#b28b81] group-hover:rotate-45 transition-all duration-500 pr-2">
                  +
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
