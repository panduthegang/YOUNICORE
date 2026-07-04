import React, { useState, useEffect } from 'react';
import { Menu, X, Plus } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  const menuItems = [
    { name: 'Home', href: '#hero', num: '01' },
    { name: 'Manifesto', href: '#manifesto', num: '02' },
    { name: 'Services', href: '#services', num: '03' },
    { name: 'Selected Work', href: '#services', num: '04' },
    { name: 'The Collective', href: '#team', num: '05' },
    { name: 'Contact', href: '#footer', num: '06' },
  ];

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    // Smooth scroll to element
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* FIXED HEADER NAVBAR */}
      <header className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-6 md:px-12 md:py-8 z-40 bg-gradient-to-b from-black/80 via-black/20 to-transparent backdrop-blur-[1px]">
        {/* Logo */}
        <div 
          onClick={() => handleLinkClick('#hero')} 
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center transition-all duration-500 group-hover:border-white group-hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]">
            <span className="font-mono text-sm font-semibold tracking-tighter text-[#FAF6F0]">Y</span>
          </div>
          <span className="font-mono text-xs uppercase tracking-[0.3em] font-semibold text-white/95 group-hover:text-white transition-colors duration-300">
            Younicore
          </span>
        </div>


        {/* Action Button & Hamburger */}
        <div className="flex items-center gap-4">
          <button className="group flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-black hover:border-white transition-all duration-500">
            <span>Let's Build</span>
            <Plus className="w-3.5 h-3.5 transition-transform duration-500 group-hover:rotate-90" />
          </button>
          
          <button 
            onClick={() => setIsOpen(true)}
            className="p-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/15 transition-colors duration-300" 
            aria-label="Menu"
          >
            <Menu className="w-4 h-4 text-white/80" />
          </button>
        </div>
      </header>

      <div 
        className={`fixed inset-0 w-screen h-screen z-50 flex flex-row overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen 
            ? 'opacity-100 pointer-events-auto scale-100' 
            : 'opacity-0 pointer-events-none scale-95'
        }`}
        style={{ backgroundColor: '#050404' }}
      >
        {/* Left Side: Split-screen Background Image (Desktop only) */}
        <div 
          className="hidden lg:block lg:w-[42%] xl:w-[45%] h-full relative overflow-hidden group border-r border-white/5"
          style={{
            transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 1.2s ease',
            transform: isOpen ? 'translateX(0)' : 'translateX(-40px)',
            opacity: isOpen ? 1 : 0,
            pointerEvents: isOpen ? 'auto' : 'none',
          }}
        >
          {/* Vignette overlay */}
          <div className="absolute inset-0 bg-black/35 group-hover:bg-black/10 transition-colors duration-500 z-10" />
          
          <img 
            src="https://res.cloudinary.com/dkev7ein3/image/upload/v1783169806/Manifesto-2_ysnano.png" 
            alt="Menu Art Backdrop" 
            className="absolute inset-0 w-full h-full object-cover scale-[1.02] group-hover:scale-105 transition-transform duration-1000"
          />

          {/* Cursive / Monospaced tagline overlay */}
          <div className="absolute bottom-10 left-10 z-20 bg-black/30 backdrop-blur-md px-5 py-2.5 border border-white/10 rounded-sm">
            <p className="font-mono text-[9px] uppercase tracking-[0.45em] text-[#FAF6F0]/80">
              HUMAN MADE • AI AUGMENTED
            </p>
          </div>
        </div>

        {/* Right Side: Navigation Menu & Header */}
        <div className="w-full lg:w-[58%] xl:w-[55%] h-full flex flex-col justify-between p-6 md:p-12 lg:p-16 relative menu-right-panel">
          
          {/* Fullscreen Overlay Header */}
          <div className="w-full flex items-center justify-between z-10">
            {/* Logo in overlay */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center">
                <span className="font-mono text-sm font-semibold tracking-tighter text-[#FAF6F0]">Y</span>
              </div>
              <span className="font-mono text-xs uppercase tracking-[0.3em] font-semibold text-white/90">
                Younicore
              </span>
            </div>

            {/* Close trigger */}
            <button 
              onClick={() => setIsOpen(false)}
              className="p-3 rounded-full border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 transition-all duration-300"
              aria-label="Close Menu"
            >
              <X className="w-4 h-4 text-white/80" />
            </button>
          </div>

          {/* Navigation Links (Centered vertically) */}
          <div className="flex flex-col justify-center flex-1 my-auto pl-0 md:pl-12 lg:pl-16 z-10">
            <div className="flex flex-col gap-6 sm:gap-8 max-w-lg menu-links-container">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.href);
                  }}
                  className="flex items-center gap-6 group"
                  style={{
                    transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease',
                    transitionDelay: isOpen ? `${(menuItems.length - 1 - index) * 75}ms` : '0ms',
                    transform: isOpen ? 'translateX(0)' : 'translateX(50px)',
                    opacity: isOpen ? 1 : 0,
                    pointerEvents: isOpen ? 'auto' : 'none',
                  }}
                >
                  {/* Number indicator */}
                  <span className="font-mono text-xs sm:text-sm text-[#b28b81] tracking-widest group-hover:translate-x-2 transition-transform duration-300">
                    {item.num}
                  </span>
                  
                  {/* Title */}
                  <span className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] uppercase tracking-wider text-[#FAF6F0] group-hover:text-[#b28b81] transition-colors duration-300 leading-none menu-link-text">
                    {item.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Fullscreen Overlay Footer */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5 pt-6 z-10">
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30">
              © YOUNICORE 2026
            </span>
            
            <div className="flex items-center gap-8 font-mono text-[9px] uppercase tracking-[0.25em]">
              {['Instagram', 'Linkedin', 'X (Twitter)'].map((social) => (
                <a 
                  key={social} 
                  href={`#${social.toLowerCase()}`}
                  className="relative text-white/40 hover:text-[#b28b81] transition-colors duration-300 py-1 group"
                >
                  {social}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#b28b81] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
