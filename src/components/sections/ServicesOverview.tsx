'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const services = [
  {
    title: 'Forensic Accounting',
    href: '/services/forensic-accounting'
  },
  {
    title: 'Expert Witness Testimony',
    href: '/services/expert-witness-testimony'
  },
  {
    title: 'Joint Retention Program',
    href: '/services/joint-retention-program'
  },
  {
    title: 'Internal Investigations',
    href: '/services/internal-investigations'
  }
]

export default function ServicesOverview() {
  return (
    <section className="relative py-16 md:py-20 bg-primary-950 overflow-hidden">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1)_0%,transparent_70%)] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-12">
          <div className="lg:col-span-12 text-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight tracking-tighter">
                Our Services
              </h2>
              <div className="h-1 w-20 bg-[#D4AF37] mb-6 mx-auto" />
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:[grid-template-columns:repeat(2,minmax(0,280px))] lg:[grid-template-columns:repeat(4,minmax(0,280px))] gap-2 justify-center">
          {services.map((service, index) => (
            <Link key={index} href={service.href} className="group relative w-full max-w-[280px] overflow-hidden rounded-2xl bg-gradient-to-br from-blue-950 via-blue-800 to-blue-600 border border-blue-300/20">
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-blue-900/30 to-transparent group-hover:from-[#D4AF37]/20 transition-all duration-700" />

              {/* Content Box */}
              <div className="relative p-5 md:p-6 z-10 text-center">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors duration-500">
                    {service.title.split(' ').map((word, i) => (
                      <span key={i} className="block leading-none mb-1 last:mb-0">{word}</span>
                    ))}
                  </h3>

                  {/* Architectural Accent Underline */}
                  <div className="mt-4 h-px w-0 bg-[#D4AF37] group-hover:w-full transition-all duration-700 delay-100" />
                </div>
              </div>

              {/* Glassmorphism Border Overlay on hover */}
              <div className="absolute inset-0 rounded-2xl border border-white/0 group-hover:border-white/20 group-hover:bg-white/5 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
