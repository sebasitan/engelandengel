'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import RequestPublicationModal from '@/components/modals/RequestPublicationModal';

const publications = [
    { title: 'Framework for the Calculation of Lost Profits: Part I', image: '/images/future-lost-profits.png' },
    { title: 'Framework for the Calculation of Lost Profits: Part II: "The Element of Certainty"', image: '/images/future-lost-profits.png' },
    { title: 'Framework for the Calculation of Lost Profits: Part III: "Prospective Lost Profits"', image: '/images/future-lost-profits.png' },
    { title: 'Framework for the Calculation of Lost Profits: Part IV: "Unestablished Businesses"', image: '/images/future-lost-profits.png' },
    { title: 'Framework for the Calculation of Lost Profits: Part V: "Mitigation of Damages"', image: '/images/future-lost-profits.png' },
    { title: 'Discounting Future Lost Profits', image: '/images/future-lost-profits.png' },
];

export default function EconomicDamagesPublications() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPub, setSelectedPub] = useState({ title: '', image: '' });

    const handleRequestClick = (title: string, image: string) => {
        setSelectedPub({ title, image });
        setIsModalOpen(true);
    };

    return (
        <main className="bg-slate-50 min-h-screen">
            <Header />

            {/* ══════════ HERO ══════════ */}
            <section className="relative pt-32 pb-32 lg:pt-48 lg:pb-40 overflow-hidden bg-[#0f3574] text-white text-center">
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-40 scale-105 animate-ken-burns"
                        style={{ backgroundImage: 'url("https://images.pexels.com/photos/159213/hall-congress-architecture-building-159213.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080")' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0f3574]/80 via-[#0f3574]/40 to-[#0f3574]" />
                    <div className="absolute top-0 right-0 w-[1200px] h-[800px] bg-[#D4AF37]/10 blur-[200px] rounded-full -translate-y-1/2 translate-x-1/4" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.1)_0%,transparent_70%)]" />
                    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
                </div>

                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tighter text-white">
                            Economic Damages
                        </h1>
                        <div className="mt-8 mx-auto w-24 h-1 bg-[#D4AF37]" />
                    </motion.div>
                </div>
            </section>

            {/* ══════════ PUBLICATIONS GRID ══════════ */}
            <section className="py-24 relative bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
                        {publications.map((pub, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative flex flex-col items-center h-full text-center"
                            >
                                {/* Document Preview */}
                                <div className="relative w-full max-w-[220px] aspect-[3/4] mb-8 overflow-hidden rounded-sm shadow-[0_15px_30px_rgba(0,0,0,0.1)] group-hover:shadow-[0_25px_50px_rgba(0,0,0,0.15)] group-hover:-translate-y-2 transition-all duration-700 ease-out bg-slate-50">
                                    <Image
                                        src={pub.image}
                                        alt={pub.title}
                                        fill
                                        className="object-cover"
                                    />
                                    {/* Glass Overlay on Hover */}
                                    <div className="absolute inset-0 bg-[#0f3574]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                    <div className="absolute inset-0 border border-black/5" />
                                </div>



                                <h3 className="text-lg font-bold text-[#0f3574] mb-6 leading-[1.3] tracking-tight group-hover:text-[#D4AF37] transition-colors duration-500 min-h-[3rem]">
                                    {pub.title}
                                </h3>

                                <button
                                    onClick={() => handleRequestClick(pub.title, pub.image)}
                                    className="mt-auto w-full group/btn relative overflow-hidden bg-[#0f3574] hover:bg-[#D4AF37] text-white py-4 px-6 rounded-sm transition-all duration-500 flex items-center justify-center gap-3 shadow-md hover:shadow-xl hover:shadow-[#D4AF37]/20"
                                >
                                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase relative z-10">
                                        Request this publication
                                    </span>
                                    <svg className="w-3 h-3 relative z-10 transform group-hover/btn:translate-x-1 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />

            <RequestPublicationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                publicationTitle={selectedPub.title}
                publicationImage={selectedPub.image}
            />
        </main>
    );
}
