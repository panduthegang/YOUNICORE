import React from 'react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export default function Team() {
  const members: TeamMember[] = [
    {
      name: 'Kai',
      role: 'Creative Director',
      image: 'https://res.cloudinary.com/dkev7ein3/image/upload/v1783173891/Member-1_xpvwsv.png',
    },
    {
      name: 'Nova',
      role: 'Strategist',
      image: 'https://res.cloudinary.com/dkev7ein3/image/upload/v1783173892/Member-2_nipuul.png',
    },
    {
      name: 'Leo',
      role: 'AI Engineer',
      image: 'https://res.cloudinary.com/dkev7ein3/image/upload/v1783173894/Member-3_k5gqep.png',
    },
    {
      name: 'Zara',
      role: 'Visual Designer',
      image: 'https://res.cloudinary.com/dkev7ein3/image/upload/v1783173997/Member-4_bxp7uf.png',
    },
  ];

  return (
    <section id="team" className="relative w-full bg-[#050404] text-[#FAF6F0] py-20 md:py-28 select-none border-t border-white/5">
      <div className="w-full px-6 md:px-12 lg:px-24">
        {/* Section Header on top left */}
        <div className="flex gap-4 md:gap-5 items-start mb-12">
          {/* Section number "05." */}
          <span className="font-mono text-xs md:text-sm text-[#b28b81] tracking-widest pt-1.5">
            05.
          </span>
          
          {/* Texts */}
          <div className="flex flex-col items-start gap-4">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6.5xl uppercase tracking-wider text-[#FAF6F0] leading-none font-bold">
              The Collective
            </h2>
            
            <p className="font-mono text-[10px] md:text-[11px] text-white/50 leading-relaxed uppercase tracking-wider max-w-xs border-l border-white/10 pl-3">
              A global team of designers,<br />
              thinkers and builders.
            </p>
          </div>
        </div>

        {/* Grid of Team Members spanning full width */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full">
          {members.map((member, idx) => (
            <div 
              key={idx} 
              className="relative aspect-[3/4] w-full border border-white/10 overflow-hidden group cursor-pointer"
            >
              {/* Image or solid placeholder */}
              {member.image ? (
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700"
                />
              ) : (
                <div className="w-full h-full bg-black/35 flex items-center justify-center">
                  <span className="font-mono text-[9px] text-white/10 uppercase tracking-widest">
                    [ {member.name} ]
                  </span>
                </div>
              )}
              
              {/* Vignette gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent group-hover:from-black/95 group-hover:via-transparent transition-all duration-500 z-10" />

              {/* Overlay Text Inside the Card (Bottom Left) */}
              <div className="absolute bottom-6 left-6 z-20 flex flex-col items-start">
                <h3 className="font-display text-2xl tracking-wider text-[#FAF6F0] leading-none uppercase mb-1">
                  {member.name}
                </h3>
                <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-widest text-[#FAF6F0]/50">
                  {member.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
