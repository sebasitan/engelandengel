'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface RequestPublicationModalProps {
    isOpen: boolean;
    onClose: () => void;
    publicationTitle?: string;
}

export default function RequestPublicationModal({ isOpen, onClose, publicationTitle }: RequestPublicationModalProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        firmName: '',
        practiceArea: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const submissionData = {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                phone: formData.phone,
                firmName: formData.firmName,
                practiceArea: formData.practiceArea,
                requestedPublications: [publicationTitle || 'General Series Interest'],
                message: `Address: ${formData.address}, ${formData.city}, ${formData.state} ${formData.zip}`,
                timestamp: new Date().toISOString(),
                category: publicationTitle
            };

            const response = await fetch('/api/send-publication-request', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(submissionData),
            });

            if (response.ok) {
                setIsSuccess(true);
                setTimeout(() => {
                    onClose();
                    setIsSuccess(false);
                }, 3000);
            } else {
                alert('There was an error submitting your request. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('There was an error connecting to the server.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
                    {/* OVERLAY */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-primary-950/80 backdrop-blur-sm shadow-2xl"
                    />

                    {/* MODAL CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh]"
                    >
                        {/* CLOSE BUTTON */}
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 z-20 text-slate-400 hover:text-primary-950 transition-colors bg-white/50 backdrop-blur-sm p-2 rounded-full"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* LEFT SIDE: IMAGE/BRANDING */}
                        <div className="lg:w-2/5 relative min-h-[200px] lg:min-h-full bg-primary-950">
                            <Image
                                src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800"
                                alt="Research Background"
                                fill
                                className="object-cover opacity-40"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-950/20 to-transparent" />
                            <div className="absolute inset-x-8 bottom-12 z-10">
                                <div className="w-12 h-12 bg-[#D4AF37] rounded-xl flex items-center justify-center text-primary-950 font-serif italic text-2xl mb-6">E&E</div>
                                <h3 className="text-3xl font-bold text-white mb-4 leading-tight">Request <br />This Publication</h3>
                                <p className="text-primary-200/60 font-light text-sm leading-relaxed max-w-xs uppercase tracking-widest">
                                    Our research papers are provided to legal professionals as a resource for complex litigation support.
                                </p>
                                {publicationTitle && (
                                    <div className="mt-8 pt-8 border-t border-white/10">
                                        <p className="text-[10px] text-[#D4AF37] font-bold tracking-[0.3em] uppercase mb-2">Selected Series</p>
                                        <p className="text-white font-bold">{publicationTitle}</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* RIGHT SIDE: FORM */}
                        <div className="lg:w-3/5 p-8 lg:p-12 overflow-y-auto">
                            {isSuccess ? (
                                <div className="h-full flex flex-col items-center justify-center text-center py-20">
                                    <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6">
                                        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h4 className="text-3xl font-bold text-primary-950 mb-2">Request Sent</h4>
                                    <p className="text-slate-500">We will process your request and email the document within 24 hours.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <header className="mb-8">
                                        <h4 className="text-sm font-bold tracking-[0.2em] uppercase text-slate-400 mb-2">Publication Inquiry</h4>
                                        <p className="text-slate-500 text-sm">Please provide your details to receive the requested publication via email.</p>
                                    </header>

                                    {/* Name Fields */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="space-y-2 group">
                                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1 group-focus-within:text-[#D4AF37] transition-colors">First Name *</label>
                                            <input
                                                required
                                                type="text"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleInputChange}
                                                className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 text-slate-900 focus:ring-2 focus:ring-[#D4AF37] transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2 group">
                                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1 group-focus-within:text-[#D4AF37] transition-colors">Last Name *</label>
                                            <input
                                                required
                                                type="text"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleInputChange}
                                                className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 text-slate-900 focus:ring-2 focus:ring-[#D4AF37] transition-all"
                                            />
                                        </div>
                                    </div>

                                    {/* Firm & Practice Area */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="space-y-2 group">
                                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1 group-focus-within:text-[#D4AF37] transition-colors">Firm Name *</label>
                                            <input
                                                required
                                                type="text"
                                                name="firmName"
                                                value={formData.firmName}
                                                onChange={handleInputChange}
                                                className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 text-slate-900 focus:ring-2 focus:ring-[#D4AF37] transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2 group">
                                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1 group-focus-within:text-[#D4AF37] transition-colors">Practice Area *</label>
                                            <input
                                                required
                                                type="text"
                                                name="practiceArea"
                                                value={formData.practiceArea}
                                                onChange={handleInputChange}
                                                className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 text-slate-900 focus:ring-2 focus:ring-[#D4AF37] transition-all"
                                            />
                                        </div>
                                    </div>

                                    {/* Contact Info */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="space-y-2 group">
                                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1 group-focus-within:text-[#D4AF37] transition-colors">Email *</label>
                                            <input
                                                required
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 text-slate-900 focus:ring-2 focus:ring-[#D4AF37] transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2 group">
                                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1 group-focus-within:text-[#D4AF37] transition-colors">Phone *</label>
                                            <input
                                                required
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 text-slate-900 focus:ring-2 focus:ring-[#D4AF37] transition-all"
                                            />
                                        </div>
                                    </div>

                                    {/* Address Block */}
                                    <div className="space-y-4 pt-4">
                                        <div className="space-y-2 group">
                                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1 group-focus-within:text-[#D4AF37] transition-colors">Street Address *</label>
                                            <input
                                                required
                                                type="text"
                                                name="address"
                                                value={formData.address}
                                                onChange={handleInputChange}
                                                className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 text-slate-900 focus:ring-2 focus:ring-[#D4AF37] transition-all"
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                            <div className="space-y-2 group">
                                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1 group-focus-within:text-[#D4AF37] transition-colors">City *</label>
                                                <input
                                                    required
                                                    type="text"
                                                    name="city"
                                                    value={formData.city}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 text-slate-900 focus:ring-2 focus:ring-[#D4AF37] transition-all"
                                                />
                                            </div>
                                            <div className="space-y-2 group">
                                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1 group-focus-within:text-[#D4AF37] transition-colors">State *</label>
                                                <input
                                                    required
                                                    type="text"
                                                    name="state"
                                                    value={formData.state}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 text-slate-900 focus:ring-2 focus:ring-[#D4AF37] transition-all"
                                                />
                                            </div>
                                            <div className="space-y-2 group">
                                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1 group-focus-within:text-[#D4AF37] transition-colors">Zip Code *</label>
                                                <input
                                                    required
                                                    type="text"
                                                    name="zip"
                                                    value={formData.zip}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 text-slate-900 focus:ring-2 focus:ring-[#D4AF37] transition-all"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-6">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-primary-950 text-white font-bold py-4 rounded-xl hover:bg-black transition-all shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 group"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                                    Processing...
                                                </>
                                            ) : (
                                                <>
                                                    Submit Request
                                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </>
                                            )}
                                        </button>
                                        <p className="text-center text-[9px] uppercase tracking-widest text-slate-400 mt-6 font-bold">
                                            Confidential and handled with attorney-client measures.
                                        </p>
                                    </div>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
