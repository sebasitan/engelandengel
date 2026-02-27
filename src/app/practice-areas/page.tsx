'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// ─────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────

const practiceAreas = [
  {
    title: 'Economic Damages',
    description: 'Quantification of economic losses in commercial litigation, personal injury, and business disputes.',
    href: '/practice-areas/economic-damages',
    iconKey: 'damages'
  },
  {
    title: 'Fraud Investigation',
    description: 'Comprehensive fraud detection and investigation services for businesses and legal proceedings.',
    href: '/practice-areas/fraud-investigation',
    iconKey: 'fraud'
  },
  {
    title: 'Business Valuation',
    description: 'Professional business valuations for litigation, mergers, acquisitions, and partnership disputes.',
    href: '/practice-areas/business-valuation',
    iconKey: 'valuation'
  },
  {
    title: 'Bankruptcy & Insolvency',
    description: 'Forensic accounting services for bankruptcy proceedings, creditor protection, and insolvency matters.',
    href: '/practice-areas/bankruptcy-insolvency',
    iconKey: 'bankruptcy'
  },
  {
    title: 'IP Litigation',
    description: 'Economic damage analysis for patent, trademark, and copyright infringement cases.',
    href: '/practice-areas/ip-litigation',
    iconKey: 'ip'
  },
  {
    title: 'Real Estate Litigation',
    description: 'Financial analysis and expert testimony for real estate disputes and construction defect cases.',
    href: '/practice-areas/real-estate-litigation',
    iconKey: 'realestate'
  },
  {
    title: 'Construction Litigation',
    description: 'Expert analysis for construction delays, cost overruns, and construction defect disputes.',
    href: '/practice-areas/construction-litigation',
    iconKey: 'construction'
  },
  {
    title: 'Alter Ego',
    description: 'Forensic analysis for piercing the corporate veil and alter ego liability cases.',
    href: '/practice-areas/alter-ego',
    iconKey: 'alterego'
  },
  {
    title: 'Fraudulent Transfers',
    description: 'Asset tracing and recovery analysis for fraudulent transfer and voidable transaction cases.',
    href: '/practice-areas/fraudulent-transfers',
    iconKey: 'transfers'
  },
  {
    title: 'Employment Litigation',
    description: 'Economic damage calculations for wrongful termination, discrimination, and wage disputes.',
    href: '/practice-areas/employment-litigation',
    iconKey: 'employment'
  },
  {
    title: 'Business Interruption',
    description: 'Lost income analysis for business interruption insurance claims and coverage disputes.',
    href: '/practice-areas/business-interruption',
    iconKey: 'interruption'
  },
  {
    title: 'Personal Injury',
    description: 'Economic damage analysis for personal injury and wrongful death cases.',
    href: '/practice-areas/personal-injury',
    iconKey: 'injury'
  },
  {
    title: 'Accounting Malpractice',
    description: 'Professional standard analysis and damage calculations for accounting malpractice cases.',
    href: '/practice-areas/accounting-malpractice',
    iconKey: 'malpractice'
  },
  {
    title: 'Partnership & Shareholder Disputes',
    description: 'Forensic accounting for partnership dissolution, shareholder disputes, and business breakups.',
    href: '/practice-areas/partnership-disputes',
    iconKey: 'partnership'
  },
  {
    title: 'Trust/Probate Litigation',
    description: 'Expert forensic accounting for trust, estate, and probate disputes, tracing assets and verifying accountings.',
    href: '/practice-areas/trust-probate-litigation',
    iconKey: 'trust'
  },
  {
    title: 'Defamation Litigation',
    description: 'Economic damage analysis for defamation cases, evaluating reputational harm and measurable financial losses.',
    href: '/practice-areas/defamation',
    iconKey: 'defamation'
  }
];

const stats = [
  { value: '30+', label: 'Years Experience' },
  { value: '100+', label: 'Court Testimonies' },
  { value: '1,000+', label: 'Cases Resolved' },
  { value: '$2.3B', label: 'Record Jury Award' },
];

// ─────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────

export default function PracticeAreasPage() {
  return (
    <>
      <Header />
      <main className="bg-slate-50 min-h-screen">

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
                Practice <br />
                <span className="font-serif italic text-[#D4AF37] font-medium text-[2.5rem]">Areas</span>
              </h1>
            </motion.div>
          </div>
        </section>

        {/* ══════════ PRACTICE AREAS GRID ══════════ */}
        <section className="py-32 relative bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {practiceAreas.map((area, idx) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                >
                  <Link
                    href={area.href}
                    className="group block h-full bg-white border border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:border-[#D4AF37]/30 transition-all duration-500 relative overflow-hidden"
                  >
                    {/* Background decoration */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-slate-50 rounded-full group-hover:scale-110 transition-transform" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-1 text-[#D4AF37]">
                      <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                      </svg>
                    </div>

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-[#0f3574] group-hover:bg-[#D4AF37] group-hover:text-white transition-colors mb-6">
                        <div className="w-4 h-4 border-2 border-current rounded-sm rotate-45" />
                      </div>
                      <h3 className="text-xl font-bold text-[#0f3574] mb-3 tracking-tight group-hover:text-primary-600 transition-colors">
                        {area.title}
                      </h3>
                      <p className="text-sm text-slate-500 font-light leading-relaxed flex-grow">
                        {area.description}
                      </p>

                      <div className="mt-8 flex items-center gap-2 text-[10px] font-bold tracking-widest text-slate-300 group-hover:text-[#D4AF37] transition-colors uppercase">
                        Explore Area
                        <span className="w-8 h-[1px] bg-slate-100 group-hover:bg-[#D4AF37] transition-all group-hover:w-12" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ CTA SECTION ══════════ */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#0f3574]" />
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#D4AF37]/5 blur-[160px] rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 blur-[140px] rounded-full -translate-x-1/2 translate-y-1/2" />

          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center border border-white/10 p-12 lg:p-20 rounded-[3rem] backdrop-blur-sm bg-white/5 shadow-2xl">
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#D4AF37] mb-8 block">Ready to Begin?</span>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white tracking-tight">
                Secure a Confidential <br />
                <span className="font-serif italic text-[#D4AF37] font-medium text-[2.5rem]">Consultation</span>
              </h2>
              <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-12">
                Discuss your needs with Los Angeles’ leading forensic accounting experts. We provide clear, defensive financial evidence that withstands court scrutiny.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/contact" className="px-10 py-5 bg-[#D4AF37] hover:bg-[#B8962E] text-black font-bold text-lg rounded-2xl shadow-xl transition-all duration-300">
                  Schedule Consultation
                </Link>
                <a href="tel:+13102772220" className="px-10 py-5 bg-white/5 border border-white/20 hover:bg-white/10 text-white font-bold text-lg rounded-2xl transition-all duration-300">
                  Call (310) 277-2220
                </a>
              </div>

              <p className="text-xs text-slate-500 tracking-widest uppercase mt-12 font-bold">
                Serving Law Firms, Corporations & High-Net-Worth Individuals
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

