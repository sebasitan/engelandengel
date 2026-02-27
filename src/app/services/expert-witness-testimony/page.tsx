'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const overviewParagraphs = [
  'High stakes litigation demands persuasive, effective, and well-credentialed forensic expert testimony. Engel & Engel has provided expert testimony in over 100 cases for both plaintiffs and defendants in state, federal, and bankruptcy courts. Engel & Engel\'s expert qualifications includes 1,000+ forensic accounting cases, six professional certifications, 20 authored research publications, and Big Four forensic accounting experience.',
  'Engel & Engel\'s courtroom experience is highlighted in numerous judge and jury awards including a $2.3 billion jury award in connection with misappropriation of trade secrets.',
];

const courtroomParagraphs = [
  'Before we enter the courtroom, we are armed with evidence obtained in the course of a rigorous forensic investigation. To uncover all the relevant information, we utilize specialized investigatory techniques to probe and analyze data buried in a proliferation of records. Thus, we find the financial evidence needed to build a convincing case. We work alongside trial counsel to ensure important issues are properly addressed before they become obstacles.',
  'On the witness stand, we present our findings and opinions clearly and concisely. We utilize charts and graphs to break down complex concepts and ensure that the points we emphasize are understood. Our trial exhibits provide a visual summary of the facts and enable us to explain even the most complex concepts with clarity. By combining a visual summary with our concise and articulate testimony, we are able to reinforce our findings and opinions and ensure that the court comprehends the points we emphasize.',
  'Our professional demeanor, exemplary credentials, and integrity, provide us with the conviction needed to withstand the most grueling cross-examinations.',
];

const publications = [
  'Admissibility of Expert Witness Testimony',
  'The Business Records Exception to the Hearsay Rule: The Admissibility of Financial Records as Evidence in Federal and State Court',
];

// ─────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────

export default function ExpertWitnessTestimonyPage() {
  return (
    <>
      <Header />
      <main className="bg-slate-50 min-h-screen text-slate-900">

        {/* ══════════ HERO ══════════ */}
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
                Expert Witness Testimony
              </h1>
            </motion.div>
          </div>
        </section>

        {/* ══════════ OVERVIEW ══════════ */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-7 space-y-5"
              >
                {overviewParagraphs.map((p, i) => (
                  <p key={i} className="text-base text-slate-600 leading-[1.9]">{p}</p>
                ))}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="lg:col-span-5"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/court-1.jpg"
                    alt="Expert Witness Testimony"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══════════ COURTROOM ══════════ */}
        <section className="py-16 lg:py-20 bg-slate-50">
          <div className="container-custom max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-bold text-[#0f3574] uppercase tracking-wide mb-8 pb-4 border-b border-slate-200">
                Credibility in the Courtroom: Before, During and After Trial
              </h2>
              <div className="space-y-5">
                {courtroomParagraphs.map((p, i) => (
                  <p key={i} className="text-base text-slate-600 leading-[1.9]">{p}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════ PUBLICATIONS ══════════ */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container-custom max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-bold text-[#0f3574] uppercase tracking-wide mb-4 pb-4 border-b border-slate-200">
                Research Publications
              </h2>
              <p className="text-base text-slate-600 leading-[1.9] mb-6">
                Engel &amp; Engel has published the following research publications in connection with expert witness testimony:
              </p>
              <ul className="space-y-3">
                {publications.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 px-4 py-3 bg-slate-50 rounded-lg border border-slate-100">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                    <span className="text-sm text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* ══════════ CONTACT FOOTER ══════════ */}
        <section className="py-12 bg-slate-50 border-t border-slate-200">
          <div className="container-custom">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-slate-500">
              <p>
                For additional information about Engel &amp; Engel&apos;s Forensic Accounting Services or a consultation, please contact:{' '}
                <strong className="text-[#0f3574]">Brandon J. Engel, CPA, CFE</strong>
              </p>
              <div className="flex items-center gap-4">
                <a href="mailto:brandon@engelandengel.com" className="text-primary-600 hover:text-primary-800 hover:underline transition-colors">
                  brandon@engelandengel.com
                </a>
                <span className="text-slate-300">|</span>
                <a href="tel:+13102772220" className="text-primary-600 hover:text-primary-800 hover:underline transition-colors">
                  310-277-2220
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
