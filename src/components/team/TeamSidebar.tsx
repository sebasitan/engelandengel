'use client';

import { useEffect, useState } from 'react';

interface SidebarSection {
  id: string;
  title: string;
}

interface TeamSidebarProps {
  sections: SidebarSection[];
  phone: string;
}

export default function TeamSidebar({ sections, phone }: TeamSidebarProps) {
  const [activeId, setActiveId] = useState(sections[0]?.id || '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [sections]);

  return (
    <aside className="hidden lg:block w-72 flex-shrink-0">
      <div className="sticky top-32 p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] font-bold mb-8 flex items-center gap-2">
          <span className="w-4 h-px bg-[#D4AF37]/50" />
          Navigate Profile
        </p>
        <nav className="space-y-4">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`group flex items-center gap-3 text-sm transition-all duration-300 ${activeId === section.id
                  ? 'text-white font-bold'
                  : 'text-primary-100/40 hover:text-white'
                }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${activeId === section.id ? 'bg-[#D4AF37] scale-125' : 'bg-transparent border border-white/20'
                }`} />
              <span className="flex-1">{section.title}</span>
            </a>
          ))}
        </nav>

        {/* Floating Accent */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-4">Urgent Consultation</div>
          <a href={`tel:${phone.replace(/[^\d+]/g, '')}`} className="text-lg font-bold text-white hover:text-[#D4AF37] transition-colors">
            (310) 277-2220
          </a>
        </div>
      </div>
    </aside>
  );
}
