'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const overviewParagraphs = [
  'Business litigation often requires the retention of forensic accounting experts by both litigants in a dispute. Engel & Engel provides a specialized Joint Retention Program as an alternative to the typical litigation process as a way to resolve disputed financial issues and achieve settlement. Engel & Engel\'s Joint Retention Program is particularly beneficial in arbitration, mediation and litigation cases where the parties prefer a process that can help settle their differences in a cost-effective manner. Our Joint Retention Program is designed to equally address the financial concerns of both parties in a dispute, whereby the parties jointly retain Engel & Engel to conduct an objective and independent forensic accounting investigation.',
  'In addition, Engel & Engel can serve as a referee in accordance with California Code of Civil Procedure § 638 and § 639 and as a special master in accordance with California Code of Civil Procedure § 845. Engel & Engel can also serve as a special master in accordance with Federal Rules of Civil Procedure § 53.',
];

const benefits = [
  'Save on forensic accounting costs.',
  'Save on litigation costs.',
  'Efficiently obtain accounting and business records.',
  'Expedite resolution of financial issues.',
  'Eliminate discovery disputes and related discovery costs.',
  'Receive an independent and objective analysis on which both parties can rely.',
  'Eliminate unnecessary and duplicative forensic accounting analysis.',
  'Minimize or eliminate financial disputes between the parties.',
];

const processItems = [
  'Assurance that Engel & Engel is independent, objective, and neutral throughout the process, including a formal conflicts check and disclosure statement.',
  'A jointly agreed upon scope of the assignment.',
  'Discovery of the relevant accounting and business records.',
  'An objective financial analysis that includes the concerns of both parties.',
  'An objective and impartial report of findings.',
  'A process for both parties to challenge Engel & Engel\'s findings.',
];

const practiceAreas = [
  'Economic Damages',
  'Fraud Investigation',
  'Business Valuation',
  'Bankruptcy & Insolvency',
  'Intellectual Property (IP) Litigation',
  'Real Estate Litigation',
  'Construction Litigation',
  'Alter Ego',
  'Fraudulent Transfers',
  'Employment Litigation',
  'Business Interruption',
  'Personal Injury',
  'Accounting Malpractice',
  'Partnership/Shareholder Disputes',
  'Trust/Probate Litigation',
  'Defamation',
];

// ─────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────

export default function JointRetentionProgramPage() {
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
                Joint Retention Program
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
                <h2 className="text-xl font-bold text-[#0f3574] uppercase tracking-wide pb-4 border-b border-slate-200">
                  Engel &amp; Engel&apos;s Joint Retention Program: Resolving Disputed Financial Issues and Achieving Settlement
                </h2>
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
                    src="/images/retention-program.jpg"
                    alt="Joint Retention Program"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══════════ BENEFITS ══════════ */}
        <section className="py-16 lg:py-20 bg-slate-50">
          <div className="container-custom max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-base font-semibold text-[#0f3574] mb-6">
                By employing Engel &amp; Engel&apos;s Joint Retention Program, both parties can:
              </p>
              <ul className="space-y-3">
                {benefits.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 px-4 py-3 bg-white rounded-lg border border-slate-100">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                    <span className="text-sm text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* ══════════ OUR PROCESS ══════════ */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container-custom max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-bold text-[#0f3574] uppercase tracking-wide mb-8 pb-4 border-b border-slate-200">
                Our Process
              </h2>
              <p className="text-base text-slate-600 leading-[1.9] mb-6">
                Engel &amp; Engel&apos;s Joint Retention Program is founded on the high standards of independence and impartiality coupled with over forty years of forensic experience. Engel &amp; Engel&apos;s Joint Retention Program is a formal service offering with a uniquely designed process providing the parties with the following:
              </p>
              <ul className="space-y-3">
                {processItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 px-4 py-3 bg-slate-50 rounded-lg border border-slate-100">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                    <span className="text-sm text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* ══════════ PRACTICE AREAS ══════════ */}
        <section className="py-16 lg:py-20 bg-slate-50">
          <div className="container-custom max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-base text-slate-600 leading-[1.9] mb-6">
                In connection with our Joint Retention Program, Engel &amp; Engel has the expertise and experience in addressing complex business litigation issues including the following:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {practiceAreas.map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 px-4 py-2.5 bg-white rounded-lg border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors duration-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                    <span className="text-sm text-slate-600">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════ CONTACT FOOTER ══════════ */}
        <section className="py-12 bg-slate-50 border-t border-slate-200">
          <div className="container-custom">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-slate-500">
              <p>
                For more information about Engel &amp; Engel&apos;s specialized Joint Retention Program, or a consultation, please contact:{' '}
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
