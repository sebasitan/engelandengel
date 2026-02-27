'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import RequestPublicationModal from '@/components/modals/RequestPublicationModal';

const publications = [
    'Fraudulent Transfers: "The Element of Insolvency"',
    'Fraudulent Transfers: "The Element of Reasonably Equivalent Value"',
    'Fraudulent Transfers: "The Element of Unreasonably Small Capital"',
    'Fraudulent Transfers: "The Element of Inability to Pay Debts as They Mature"',
];

export default function FraudulentTransfersPublications() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPub, setSelectedPub] = useState('');

    const handleRequestClick = (title: string) => {
        setSelectedPub(title);
        setIsModalOpen(true);
    };

    return (
        <main className="bg-slate-50 min-h-screen">
            <Header />

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
                Fraudulent Transfers
              </h1>
            </motion.div>
          </div>
        </section>

            {/* ══════════ PUBLICATIONS GRID ══════════ */}
            <section className="py-24 relative bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {publications.map((title, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group flex flex-col items-center text-center"
                            >
                                <div className="w-full max-w-[240px] aspect-[2/3] relative rounded-lg shadow-2xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-500 mb-6">
                                    <Image
                                        src="/images/future-lost-profits.png"
                                        alt={title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="text-lg font-bold text-[#0f3574] mb-4 leading-tight group-hover:text-primary-600 transition-colors">
                                    {title}
                                </h3>
                                <div className="mt-auto">
                                    <Button
                                        onClick={() => handleRequestClick(title)}
                                        className="group/btn relative overflow-hidden bg-[#0f3574] text-white px-8 py-6 rounded-full hover:bg-primary-900 transition-all shadow-lg hover:shadow-primary-900/20"
                                    >
                                        <span className="relative z-10 flex items-center gap-2">
                                            Request Publication
                                            <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </span>
                                    </Button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />

            <RequestPublicationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                publicationTitle={selectedPub}
            />
        </main>
    );
}
