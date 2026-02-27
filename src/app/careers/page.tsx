'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <main className="bg-slate-50 min-h-screen text-slate-900">
      <Header />

      {/* Hero Section */}
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
                Join Our <br />
                <span className="font-serif italic text-[#D4AF37] font-medium text-[2.5rem]">Team</span>
              </h1>
            </motion.div>
          </div>
        </section>

      {/* Content Sections */}
      <section className="py-24 relative bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-20">

            {/* Intro */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="prose prose-xl prose-slate max-w-none"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-[#D4AF37]" />
                <span className="text-sm font-bold tracking-[0.3em] uppercase text-[#D4AF37]">The Firm</span>
              </div>
              <p className="text-2xl text-slate-700 font-light leading-relaxed">
                Engel & Engel is a premier Los Angeles forensic accounting firm offering a specialized
                opportunity for professionals devoted to the practice of forensic accounting. For 30
                years, we’ve provided law firms and in-house counsel in California and beyond,
                sophisticated guidance in securing successful outcomes in complex litigation matters.
              </p>
            </motion.div>

            {/* Life at E&E */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-[#0f3574] mb-6 uppercase tracking-tight">Life at Engel & Engel</h2>
                <div className="h-1 w-20 bg-[#D4AF37] mb-8" />
                <p className="text-lg text-slate-600 font-light leading-relaxed">
                  We provide a collaborative and collegial environment for motivated professionals
                  seeking growth and the opportunity to hone specific skills in forensic accounting and
                  expert witness services. If you are looking for an alternative to the traditional career path
                  within a large accounting firm, Engel & Engel may be the right firm for your career
                  journey. We believe the best training comes from hands-on experience and we make
                  every effort to use case assignments as mentoring opportunities for your growth and
                  success.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-[#0f3574] mb-6 uppercase tracking-tight">Commitment to Diversity</h2>
                <div className="h-1 w-20 bg-[#D4AF37] mb-8" />
                <p className="text-lg text-slate-600 font-light leading-relaxed">
                  Engel & Engel recognizes the importance of promoting diversity and inclusion in the
                  accounting and legal professions. The success of our business depends on effective
                  communication in and out of the courtroom, to a vast and varied audience of lawyers,
                  judges, juries, and clients. We embrace the opportunity to gather the best accountants
                  from all walks of life, including underrepresented groups.
                </p>
              </motion.div>
            </div>

            {/* Opportunities */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-slate-50 border border-slate-200 rounded-3xl p-10 md:p-16 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full translate-x-32 -translate-y-32" />
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-[#0f3574] mb-8 uppercase tracking-tight">Current Opportunities</h2>
                <p className="text-xl text-slate-700 font-light leading-relaxed mb-8">
                  Our success record is well above average and our services are in great demand. We
                  are always on the lookout for motivated professionals with skills, talent, and vision. We
                  are seeking individuals at all levels, including office support personnel. We hope you
                  have a genuine interest in the area of forensic accounting and litigation support services
                  and we are eager to talk to you about your background and future plans.
                </p>
                <p className="text-lg text-[#D4AF37] font-bold tracking-widest uppercase">
                  Those interested in learning more about our firm are strongly encouraged to contact us
                  and send a resume using the form below.
                </p>
              </div>
            </motion.div>

            {/* Application Form */}
            <motion.div
              id="application-form"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl mx-auto pt-16"
            >
              <div className="text-center mb-12">
                <h3 className="text-4xl font-bold text-[#0f3574] tracking-tighter mb-4">Submit Application</h3>
                <p className="text-slate-500 uppercase tracking-widest text-sm font-bold">Start Your Journey With Us</p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-100 rounded-2xl p-12 text-center"
                >
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-green-900 mb-2">Thank you!</h4>
                  <p className="text-green-700">Your application has been received. We will review it and get back to you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none transition-all"
                      placeholder="(310) 000-0000"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Brief Introduction</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us a bit about your background and interest in forensic accounting..."
                    />
                  </div>

                  <div className="space-y-4">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Attach Resume (PDF)</label>
                    <div className="relative group">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                      />
                      <div className="border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/5 transition-all">
                        <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#D4AF37] transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-slate-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                          </svg>
                        </div>
                        <p className="text-slate-600 font-medium">
                          {file ? file.name : 'Click to upload or drag and drop'}
                        </p>
                        <p className="text-xs text-slate-400 mt-1">PDF, DOC up to 10MB</p>
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    fullWidth
                    size="xl"
                    loading={isSubmitting}
                    className="h-16 bg-[#0f3574] text-white hover:bg-[#D4AF37] font-bold tracking-[0.2em] uppercase text-xs transition-all duration-500 rounded-xl shadow-2xl"
                  >
                    Submit Application
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

