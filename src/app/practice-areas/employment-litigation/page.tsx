'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// ─────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────

const sections = [
  {
    id: 'overview',
    title: 'Overview',
    paragraphs: [
      'Engel & Engel has extensive expertise and experience in analyzing and calculating economic damages in employment litigation matters for both plaintiffs and defendants. Our expertise is highlighted with our research publication, "Framework for the Calculation of Employment Damages". Overall, Engel & Engel has the qualifications and experience to prepare damage and mitigation analyses that are consistent with established legal principles and are able to withstand the scrutiny of the court.',
    ],
    subheading: '',
    items: [],
  },
  {
    id: 'services',
    title: 'Services',
    paragraphs: [
      'How Engel & Engel Helps Employment Litigation Attorneys',
      'When the stakes are high, Engel & Engel can serve as your expert in connection with the following:',
    ],
    subheading: '',
    items: [
      'Historical Lost Earnings',
      'Projected Lost Earnings',
      'Lost Benefits',
      'Mitigation Analysis',
      'Expert Witness Testimony',
    ],
  },
  {
    id: 'publications',
    title: 'Publications',
    paragraphs: [
      'Engel & Engel has published the following employment damages publication:',
    ],
    subheading: '',
    items: [
      'Framework for the Calculation of Employment Damages',
    ],
  },
];

const stats = [
  { value: '30+', label: 'Years of Experience' },
  { value: '6', label: 'Professional Certifications' },
  { value: '20', label: 'Research Publications' },
];

// ─────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────

export default function EmploymentLitigationPage() {
  const [activeTabId, setActiveTabId] = useState('overview');
  const activeSection = sections.find((s) => s.id === activeTabId)!;

  return (
    <>
      <Header />
      <main className="bg-slate-50 min-h-screen text-slate-900">

        {/* ══════════ CINEMATIC HERO ══════════ */}
        <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-16 overflow-hidden bg-[#0f3574] text-white text-center">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30 scale-105 animate-ken-burns"
              style={{ backgroundImage: 'url("https://images.pexels.com/photos/159213/hall-congress-architecture-building-159213.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080")' }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0f3574] via-[#0f3574]/95 to-[#0f3574]" />
            <div className="absolute top-0 right-0 w-[1200px] h-[800px] bg-[#D4AF37]/10 blur-[200px] rounded-full -translate-y-1/2 translate-x-1/4" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.05)_0%,transparent_70%)]" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
          </div>

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-[2.5rem] font-bold leading-[1.1] tracking-tighter text-white">
                Employment <br />
                <span className="font-serif italic text-[#D4AF37] font-medium text-[2.5rem]">Litigation</span>
              </h1>
            </motion.div>
          </div>
        </section>

        {/* ══════════ CONTENT BODY ══════════ */}
        <section className="pb-32 relative bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24">

              {/* ▬▬ LEFT COLUMN: STICKY SIDEBAR ▬▬ */}
              <motion.aside
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-4 lg:block"
              >
                <div className="sticky top-32 overflow-hidden bg-white border border-slate-200 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] group/sidebar">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full translate-x-16 -translate-y-16 group-hover/sidebar:scale-150 transition-transform duration-1000" />
                  <div className="absolute -bottom-8 -left-8 w-24 h-24 border border-[#D4AF37]/10 rounded-full" />
                  <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#D4AF37]/30 rounded-tl-2xl" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#D4AF37]/30 rounded-br-2xl" />

                  <div className="relative z-10 p-6 sm:p-8">
                    <div className="flex flex-col mb-6">
                      <h3 className="text-xl font-bold text-[#0f3574] tracking-tight flex items-center gap-3">
                        Employment Litigation
                        <div className="h-px w-6 bg-[#D4AF37]" />
                      </h3>
                    </div>

                    <nav className="space-y-0 relative max-h-[60vh] overflow-y-auto pr-1">
                      {sections.map((section) => (
                        <button
                          key={section.id}
                          onClick={() => setActiveTabId(section.id)}
                          className={`group/item w-full text-left flex items-center py-2.5 border-b border-slate-100 last:border-0 relative overflow-hidden transition-all duration-300 ${activeTabId === section.id ? 'bg-slate-50' : ''}`}
                        >
                          <div className="absolute inset-0 bg-slate-50 -translate-x-full group-hover/item:translate-x-0 transition-transform duration-500" />
                          <div className="relative z-10 flex items-center justify-between w-full">
                            <div className="flex items-center gap-3">
                              <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-300 ${activeTabId === section.id ? 'bg-[#D4AF37] scale-150' : 'bg-slate-200 group-hover/item:bg-[#D4AF37]'}`} />
                              <span className={`text-sm font-medium transition-colors duration-300 ${activeTabId === section.id ? 'text-[#0f3574]' : 'text-slate-500 group-hover/item:text-[#0f3574]'}`}>
                                {section.title}
                              </span>
                            </div>
                            <span className={`text-[#D4AF37] transition-all duration-300 font-light text-lg ${activeTabId === section.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 group-hover/item:opacity-100 group-hover/item:translate-x-0'}`}>→</span>
                          </div>
                        </button>
                      ))}
                    </nav>

                    <div className="mt-6 flex items-center gap-3 pt-6 border-t border-slate-100">
                      <div className="w-8 h-8 rounded-lg bg-[#0f3574] flex items-center justify-center text-[10px] font-bold text-[#D4AF37]">
                        E&E
                      </div>
                      <span className="text-[10px] tracking-widest text-slate-400 font-bold uppercase">
                        Legal Excellence
                      </span>
                    </div>
                  </div>
                </div>
              </motion.aside>

              {/* ▬▬ MAIN CONTENT ▬▬ */}
              <div className="lg:col-span-8 min-w-0 flex flex-col items-start pt-8">
                <div className="w-full max-w-4xl lg:pr-12 min-h-[400px]">
                  <motion.section
                    key={activeTabId}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="flex items-center gap-4 mb-10">
                      <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#0f3574] uppercase leading-tight">
                        {activeSection.title}
                      </h2>
                      <div className="h-px flex-1 bg-gradient-to-r from-[#D4AF37]/30 to-transparent" />
                    </div>

                    <div className="space-y-8">
                      {activeSection.paragraphs.map((p, i) => (
                        <p key={i} className="text-xl text-slate-600 font-light leading-relaxed">{p}</p>
                      ))}

                      {activeSection.subheading && (
                        <p className="text-xl font-semibold text-[#0f3574] pt-2">{activeSection.subheading}</p>
                      )}

                      {activeSection.items && activeSection.items.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                          {activeSection.items.map((item, i) => (
                            <div key={i} className="flex items-start gap-3 group/item">
                              <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#D4AF37] flex-shrink-0" />
                              <span className="text-lg text-slate-700 font-medium leading-tight">{item}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.section>
                </div>

                {/* Contact Footer */}
                <div className="w-full mt-16 pt-12 border-t border-slate-100">
                  <p className="text-slate-500 text-base">
                    For additional information about Engel &amp; Engel&apos;s Forensic Accounting Services or a consultation, please contact:{' '}
                    <strong className="text-[#0f3574]">Brandon J. Engel, CPA, CFE</strong>{' '}
                    <a href="mailto:brandon@engelandengel.com" className="text-primary-600 hover:underline">
                      brandon@engelandengel.com
                    </a>
                    {', '}
                    <a href="tel:+13102772220" className="text-primary-600 hover:underline">
                      310-277-2220
                    </a>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

