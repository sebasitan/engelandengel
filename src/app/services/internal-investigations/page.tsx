'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const overviewParagraphs = [
  'Financial concerns often surface long before litigation begins. Unexplained losses, irregular transactions, or suspected misconduct can raise serious questions that demand answers. Whether the issue involves potential embezzlement, misuse of funds, or fraud within a family, business, or organization, early investigation is critical to understanding what has occurred and preventing further harm.',
  'In other situations, fraud or embezzlement has already come to light, but the full extent of the wrongdoing is still unknown. We are often retained to conduct comprehensive investigations that reveal how misconduct occurred, measure the resulting financial impact, and provide clients with a clear report of findings. These reports give decision-makers the evidence they need to pursue recovery, pursue litigation, strengthen internal controls, or refer the matter to law enforcement.',
  'At Engel & Engel, LLP, we conduct internal forensic accounting investigations that uncover irregularities and quantify financial impact. Our clients include individuals, families, HOAs, companies, celebrities, and government agencies. In many cases, we prepare a professional report of our findings that can be used to take corrective action, strengthen internal controls, pursue civil litigation, or provide to law enforcement agencies such as the Department of Justice or local police.',
];

const services = [
  'Embezzlement Investigations – Identifying misappropriation of funds within businesses, HOAs, and nonprofit',
  'Fraud Detection – Uncovering financial misconduct in companies, family partnerships, and government entities',
  'HOA Investigations – Examining potential fraud, misappropriation of funds, and other financial irregularities in homeowners\' associations',
  'Nonprofit Organization Investigations – Investigating embezzlement, misappropriation, and misuse of charitable or organizational funds',
  'Celebrity and High-Net-Worth Reviews – Examining potential theft or overbilling by contractors, managers, or advisors',
  'Family and Partnership Disputes – Tracing funds and clarifying whether assets have been misused by relatives or business partners',
  'Corporate Investigations – Reviewing internal controls, identifying fraudulent schemes, and calculating damages for organizations',
  'Reporting of Findings – Delivering professional reports that outline evidence and quantify financial impact for decision-making or potential legal action',
];

const practiceAreas = [
  'Economic Damages',
  'Fraud Investigation',
  'Business Valuation',
  'Bankruptcy & Insolvency',
  'Intellectual Property (IP) Investigations',
  'Real Estate Fraud',
  'Construction Fraud',
  'Alter Ego',
  'Fraudulent Transfers',
  'Employment Damages',
  'Business Interruption',
  'Personal Injury Damages',
  'Accounting Malpractice',
  'Partnership/Shareholder Disputes',
];

// ─────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────

export default function InternalInvestigationsPage() {
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
                Internal Investigations
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
                    src="/images/identify-financial-patterns.jpg"
                    alt="Internal Investigations"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══════════ INVESTIGATION SERVICES ══════════ */}
        <section className="py-16 lg:py-20 bg-slate-50">
          <div className="container-custom max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-bold text-[#0f3574] uppercase tracking-wide mb-8 pb-4 border-b border-slate-200">
                Engel &amp; Engel&apos;s Internal Investigation Services
              </h2>
              <p className="text-base text-slate-600 leading-[1.9] mb-6">
                Engel &amp; Engel is often retained by corporate entities, nonprofit organizations, homeowners&apos; associations, government agencies, police departments, high profile individuals, and private individuals, as well as their counsel, to investigate a wide range of suspected misconduct.
              </p>
              <ul className="space-y-3">
                {services.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 px-4 py-3 bg-white rounded-lg border border-slate-100">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                    <span className="text-sm text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* ══════════ PRACTICE AREAS ══════════ */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container-custom max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-base text-slate-600 leading-[1.9] mb-6">
                In connection with our Internal Investigations, Engel &amp; Engel has the expertise and experience to address complex financial issues including the following:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {practiceAreas.map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 px-4 py-2.5 bg-slate-50 rounded-lg border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors duration-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                    <span className="text-sm text-slate-600">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════ CLOSING ══════════ */}
        <section className="py-16 lg:py-20 bg-slate-50">
          <div className="container-custom max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-base text-slate-600 leading-[1.9]">
                With decades of experience in financial forensics, Engel &amp; Engel provides the depth of analysis required to uncover misconduct and quantify its financial impact. Our investigations are confidential, fact-driven, and conducted with a clear understanding of what it takes to withstand scrutiny in court. They often serve as the foundation for pre-litigation strategy or future legal proceedings.
              </p>
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
