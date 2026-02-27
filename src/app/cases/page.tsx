'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

// ─────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────

const cases = [
  {
    title: 'Misappropriation of Trade Secrets',
    result: 'Jury Award of $2.3 Billion',
    description: 'Testified for plaintiff in a jury trial regarding damages suffered by a Fortune 500 medical device corporation that alleged misappropriation of trade secrets. Expert testimony included analysis and opinions relating to lost profits, lost goodwill, unjust enrichment, and valuation of the corporation including valuation of goodwill and trade secrets. Damage analysis included plaintiff’s U.S. and international market share and damages to market share due to the misappropriation of trade secrets. Jury awarded plaintiff $2.3 billion.',
  },
  {
    title: 'Breach of Distributorship Agreement',
    result: 'Jury Award of $12 Million',
    description: 'Testified as to economic damages in a jury trial on behalf of plaintiff. Plaintiff, a distributor of hi-tech boring and metal cutting machinery alleged that defendant (manufacturer) wrongfully breached its distributorship agreement. Testified as to economic damages including lost profits and unjust enrichment. Jury awarded plaintiff approximately $6 million in economic damages and $6 million in punitive damages.',
  },
  {
    title: 'Fraud / Money Laundering',
    result: 'Settled',
    description: 'Conducted a fraud investigation in connection with a highly publicized international money laundering scheme involving over 150 bank accounts and over 50 entities. The fraud was investigated by the FBI and federal agencies of Switzerland and Korea. Engel & Engel prepared detailed tracing schedules of the flow of fraudulent funds approximating $25 million that ultimately were transferred to Swiss bank accounts, real estate, and other assets. Case settled.',
  },
  {
    title: 'Real Estate Investments',
    result: 'Court Award in Excess of $10 Million',
    description: 'Testified in court on behalf of plaintiff, a minority shareholder of various real estate investment entities. Plaintiff alleged that defendants misappropriated corporate funds. Expert testimony included analyses of wrongful distributions and payments to defendants including improper accounting and self-dealing. Defendant’s counsel cross-examined Engel for approximately 12 days in connection with Engel’s damage analysis. Court awarded plaintiff damages in excess of $10 million.',
  },
  {
    title: 'Economic Damages',
    result: 'Arbitration Award in Excess of $100 Million',
    description: 'Testified in an arbitration on behalf of plaintiff as to economic damages in excess of $100 million. Plaintiff, a buyer of an $80 million shopping center, alleged that seller provided buyer with misleading financial information. Arbitrator awarded plaintiff rescission damages in excess of $100 million.',
  },
  {
    title: 'Breach Of Contract',
    result: 'Jury Award of $1.3 Million',
    description: 'Testified as to damages in a jury trial on behalf of plaintiff, a U.S. window manufacturer and distributor. Plaintiff alleged breach of contract in connection with the construction of a mansion in Moscow, Russia. Jury awarded plaintiff $1.3 million in damages.',
  },
  {
    title: 'Corporate Embezzlement',
    result: 'Defensed',
    description: 'Testified in arbitration on behalf of defendant, a CEO alleged to have embezzled $250,000 of corporate funds disguised as bonuses. Expert testimony included analysis of bonuses paid to CEO, analysis of CEO’s adherence to internal controls and accounting policies, and analysis that the CEO did not attempt to conceal alleged embezzled payments. Arbitrator found that defendant did not defraud his employer.',
  },
  {
    title: 'Personal Injury',
    result: 'Jury Award of $13 Million',
    description: 'Testified in a jury trial as to personal injury damages in connection with an alleged wrongful brain injury of an infant. Damage analysis included loss of future lifetime earnings and projected medical care. Jury awarded plaintiff approximately $13 million.',
  },
  {
    title: 'Tracing of Fraudulent Funds',
    result: 'Settled',
    description: 'Prepared a federal expert report in connection with a highly publicized racketeering and fraud of a Las Vegas condominium homeowners association. The fraud was investigated by the FBI and other federal agencies and resulted in two guilty pleas and four deaths among witnesses and participants. Plaintiff (Association) alleged that insurance premiums paid in connection with $10 million of proceeds from various life insurance policies were paid from fraudulent funds. Engel & Engel investigated and prepared a detailed tracing of approximately $19 million of fraudulent funds that were used to pay life insurance premiums, purchase real estate, and pay for lifestyle expenses. Case settled.',
  },
  {
    title: 'Breach of Contract',
    result: 'Defensed',
    description: 'Testified in court on behalf of defendant that owned and managed commercial real estate. Plaintiff alleged that property manager (defendant) wrongfully and prematurely breached the lease agreement and claimed economic damages including lost profits. Expert testimony included analysis of plaintiff’s misleading and overstated financial statements including analysis that plaintiff did not suffer economic damages. The court agreed with Mr. Engel’s testimony and rejected plaintiff’s claim for damages.',
  },
  {
    title: 'Accounting Malpractice',
    result: 'Settled',
    description: 'Prepared an expert report of alleged accounting malpractice in connection with a public accounting firm’s audit of financial statements. Bookkeeper embezzled approximately $1 million from plaintiff over a five-year period. Based on Engel & Engel’s investigation and review of the auditors working papers, Engel found that the auditors did not conduct their audit in accordance with Generally Accepted Auditing Standards. Engel also found that the accounting firm’s audit deficiencies enabled and allowed the bookkeeper’s embezzlement to continue for years without detection. Case settled.',
  },
  {
    title: 'Trademark Infringement',
    result: 'Jury Award of $2.7 Million',
    description: 'Testified as to infringement damages in a jury trial in connection with the alleged trademark infringement of an acting school. Analysis included projected lost revenues due to infringement. Jury awarded plaintiff damages approximating $2.7 million.',
  },
  {
    title: 'Real Estate Investment',
    result: 'Settled',
    description: 'Prepared an economic damage analysis and testified in court in connection with the minority investor of a real estate development. Engel’s expert testimony included a damage analysis approximating $12 million in connection with the internal rate of return, preferred returns and hurdle rate. The court accepted Engel’s expert testimony and the parties settled during trial.',
  },
  {
    title: 'Real Estate Fraud',
    result: 'Award of $753,000',
    description: 'Testified in trial on behalf of plaintiff, a real estate investor that alleged fraud by a property manager. Expert testimony included analysis and evidence of the fraudulent scheme including analysis of unaccounted rental income. The court ruled that defendant did defraud plaintiff and awarded plaintiff damages of $753,000.',
  }
];



// ─────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────

export default function CasesPage() {

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
                Representative <br />
                <span className="font-serif italic text-[#D4AF37] font-medium text-[2.5rem]">Cases</span>
              </h1>
            </motion.div>
          </div>
        </section>

        {/* ══════════ CASE GRID ══════════ */}
        <section className="py-32 relative bg-slate-50">
          <div className="container-custom">
            <div className="flex flex-col gap-10 max-w-4xl mx-auto">
              <AnimatePresence mode="popLayout">
                {cases.map((case_, idx) => (
                  <motion.div
                    key={case_.title}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    className="group relative bg-white pb-12 transition-all duration-700 overflow-hidden"
                  >
                    <div className="relative z-10 w-full mb-8">
                      <h3 className="text-3xl font-medium text-slate-800 tracking-tight leading-tight inline">
                        {case_.title}
                      </h3>
                      <span className="text-xl italic text-slate-500 font-light ml-2">
                        &ndash; {case_.result}
                      </span>
                    </div>

                    <div className="w-full h-[1px] bg-[#0f3574] mb-8" />

                    <div className="relative z-10">
                      <p className="text-base text-slate-600 font-light leading-relaxed">
                        {case_.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        <Footer />
      </main>

      <style jsx global>{`
        @keyframes ken-burns {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-ken-burns {
          animation: ken-burns 20s infinite alternate linear;
        }
      `}</style>
    </>
  );
}

