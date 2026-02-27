'use client';

import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const sections = [
  {
    id: 'overview',
    title: 'Overview',
    paragraphs: [
      'Engel & Engel possesses extensive experience and qualifications to provide business valuation services and serve as your valuation expert. Our qualifications include two business valuation credentials, Certified Valuation Analyst (CVA) and Accreditation in Business Valuation (ABV). Our experience includes over 100 business valuations in a wide variety of industries. Overall, Engel & Engel has the credentials and experience to prepare business valuations that are consistent with established valuation principles and are able to withstand the scrutiny of the court.',
    ],
    items: [],
  },
  {
    id: 'services',
    title: 'Services',
    paragraphs: [
      'Business Valuation Forensic Accounting Services',
      'When the stakes are high, Engel & Engel can serve as your expert in connection with the following:',
    ],
    items: [
      'Minority Shareholder Valuation',
      'Corporate Mergers & Acquisitions',
      'Corporate and Partnership Dissolutions',
      'Corporation Code 2000 Valuation',
      'Net Worth Valuation',
      'Shareholder & Partnership Disputes',
      'Economic Damage Analysis',
      'Fair Value Solvency Analysis',
      'Estate Valuation',
      'Buy and Sell Agreements',
      'Buyout Agreements',
      'Expert Witness Testimony',
    ],
  },
  {
    id: 'publications',
    title: 'Publications',
    paragraphs: [
      'Engel & Engel has published the following research publication in connection with business valuation:',
    ],
    items: [
      'Business Valuation Under California Corporate Code Section 2000',
    ],
  },
];

export default function BusinessValuationPage() {
  return (
    <>
      <Header />
      <main className="bg-slate-50 min-h-screen text-slate-900">

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
                Business Valuation
              </h1>
            </motion.div>
          </div>
        </section>

        {sections.map((section, index) => (
          <section key={section.id} className={`py-16 lg:py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
            <div className="container-custom">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <h2 className="text-xl font-bold text-[#0f3574] uppercase tracking-wide mb-8 pb-4 border-b border-slate-200">
                  {section.title}
                </h2>
                <div className="space-y-5">
                  {section.paragraphs.map((p, i) => (
                    <p key={i} className="text-base text-slate-600 leading-[1.9]">{p}</p>
                  ))}
                </div>
                {section.items && section.items.length > 0 && (
                  <ul className="mt-6 columns-1 sm:columns-2 gap-x-8">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 py-1.5 break-inside-avoid">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-400 flex-shrink-0" />
                        <span className="text-sm text-slate-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            </div>
          </section>
        ))}

        <section className="py-12 bg-slate-50 border-t border-slate-200">
          <div className="container-custom">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-slate-500">
              <p>
                For additional information or a consultation, please contact:{' '}
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
