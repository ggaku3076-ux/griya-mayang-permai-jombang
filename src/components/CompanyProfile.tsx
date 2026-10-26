import React from 'react';
import { motion } from 'framer-motion';
import { Building2, CheckCircle2, Compass, KeyRound } from 'lucide-react';
import { COMPANY_INFO } from '../data/propertyData';

export const CompanyProfile: React.FC = () => {
  return (
    <section id="profil" className="pt-6 pb-12 sm:pt-10 sm:pb-20 bg-[#f5f5f7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 rounded-full bg-white border border-neutral-200 text-[11px] font-semibold tracking-wider uppercase text-[#1d1d1f]">
            COMPANY PROFILE · DEVELOPER &amp; ARSITEKTUR
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-5xl font-semibold text-[#1d1d1f] leading-[1.1]">
            Dirancang oleh spesialis interior &amp; eksterior.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#6e6e73] leading-relaxed">
            <strong className="text-[#1d1d1f] font-medium">{COMPANY_INFO.developerName}</strong>{' '}
            menghadirkan standar baru perumahan di Jombang melalui{' '}
            <strong className="text-[#1d1d1f] font-medium">{COMPANY_INFO.clusterName}</strong>. Setiap
            kavling — baik program <strong className="text-[#1d1d1f] font-medium">Rumah Subsidi</strong>{' '}
            maupun <strong className="text-[#1d1d1f] font-medium">Rumah Komersil</strong> — dikerjakan
            dengan presisi tata ruang Scandinavian, material bata merah kokoh, dan estetika fasad modern.
          </p>
        </div>

        {/* Apple Bento Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Brand Crest Card */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 bg-white rounded-3xl border border-neutral-200/90 p-8 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#6e6e73]">
                Official Developer Identity
              </span>
              <span className="px-2.5 py-1 rounded-full bg-[#f5f5f7] text-[11px] font-medium text-[#1d1d1f]">
                Jombang, Jawa Timur
              </span>
            </div>

            <div className="my-7 sm:my-8 flex flex-col items-center text-center">
              <div className="w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center p-2">
                <img
                  src="/assets/mj-logo-transparent.webp"
                  alt="Logo Resmi MJ Property Interior Exterior"
                  width={176}
                  height={176}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="mt-4 font-display text-2xl font-semibold text-[#1d1d1f]">
                MJ Property
              </h3>
              <p className="text-xs uppercase tracking-widest text-[#6e6e73] mt-1">
                Interior &amp; Exterior · Property Development
              </p>
            </div>

            {/* Cluster Architectural Emblem */}
            <div className="pt-5 border-t border-neutral-100 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {/* Clean Vector Recreation of Griya Mayang Permai Roof Icon */}
                <div className="w-11 h-11 rounded-xl bg-[#f5f5f7] border border-neutral-200/80 flex items-center justify-center shrink-0">
                  <svg
                    viewBox="0 0 48 36"
                    className="w-7 h-5 text-[#1d1d1f]"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4 22L22 7L44 21L40 24L22 12L4 22Z" fill="currentColor" />
                    <path
                      d="M10 23L22 15L34 23"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <rect x="19" y="20" width="2.8" height="2.8" fill="currentColor" />
                    <rect x="23.2" y="20" width="2.8" height="2.8" fill="currentColor" />
                    <rect x="19" y="24.2" width="2.8" height="2.8" fill="currentColor" />
                    <rect x="23.2" y="24.2" width="2.8" height="2.8" fill="currentColor" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#1d1d1f] tracking-wide uppercase">
                    Griya Mayang Permai
                  </p>
                  <p className="text-xs text-[#6e6e73]">Signature Residential Cluster</p>
                </div>
              </div>
              <span className="text-[11px] font-mono text-[#6e6e73]">GMP-JBG</span>
            </div>
          </motion.div>

          {/* Right Column: Dual Ownership Pillars (Subsidi & Komersil) + Core Values */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Pillar 1: Rumah Subsidi & KPR Ringan */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.06 }}
              className="bg-white rounded-3xl border border-neutral-200/90 p-7 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-2xl bg-[#f5f5f7] border border-neutral-200/80 flex items-center justify-center mb-5">
                  <KeyRound className="w-5 h-5 text-[#1d1d1f]" />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                  Rumah Subsidi &amp; KPR Ringan
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold text-[#1d1d1f]">
                  Biaya 1 Juta All In
                </h3>
                <p className="mt-2 text-sm text-[#6e6e73] leading-relaxed">
                  Solusi kepemilikan hunian pertama tanpa beban DP berat. Cukup{' '}
                  <strong className="text-[#1d1d1f] font-medium">1 Juta All In</strong> sampai terima
                  kunci dengan cicilan ringan{' '}
                  <strong className="text-[#1d1d1f] font-medium">1 Jt-an/bulan</strong>.
                </p>
              </div>
              <ul className="mt-5 pt-4 border-t border-neutral-100 space-y-2 text-xs text-[#1d1d1f]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1d1d1f] shrink-0" />
                  Bebas biaya proses hingga akad &amp; serah terima
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1d1d1f] shrink-0" />
                  Kualitas tetap Bata Merah &amp; Lantai Granit 60×60
                </li>
              </ul>
            </motion.div>

            {/* Pillar 2: Rumah Komersil Eksklusif */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="bg-white rounded-3xl border border-neutral-200/90 p-7 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-2xl bg-[#f5f5f7] border border-neutral-200/80 flex items-center justify-center mb-5">
                  <Building2 className="w-5 h-5 text-[#1d1d1f]" />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#1d1d1f] bg-[#f5f5f7] border border-neutral-200 px-2.5 py-0.5 rounded-full">
                  Rumah Komersil Scandinavian
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold text-[#1d1d1f]">
                  Type 36/69 &amp; Type 45/72
                </h3>
                <p className="mt-2 text-sm text-[#6e6e73] leading-relaxed">
                  Hunian komersil modern dengan plafon tinggi, pencahayaan alami maksimal, serta fitur{' '}
                  <strong className="text-[#1d1d1f] font-medium">Smart Door Lock</strong> pada Type
                  45/72 (5 Juta All In · Angsuran 2 Jt-an/bln).
                </p>
              </div>
              <ul className="mt-5 pt-4 border-t border-neutral-100 space-y-2 text-xs text-[#1d1d1f]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1d1d1f] shrink-0" />
                  Desain fasad Scandinavian ikonik &amp; elegan
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1d1d1f] shrink-0" />
                  Potensi capital gain tinggi di Nol Jalan Raya
                </li>
              </ul>
            </motion.div>

            {/* Bottom Wide Architectural Quality Card */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="sm:col-span-2 bg-white rounded-3xl border border-neutral-200/90 p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
            >
              <div className="space-y-1.5 max-w-lg">
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1d1d1f]">
                  <Compass className="w-4 h-4" />
                  Standar Konstruksi MJ Property Interior &amp; Exterior
                </div>
                <p className="text-sm text-[#6e6e73] leading-relaxed">
                  Tidak berkompromi pada struktur inti: seluruh unit menggunakan{' '}
                  <strong className="text-[#1d1d1f] font-medium">Pondasi Batu Kumbung</strong>,{' '}
                  <strong className="text-[#1d1d1f] font-medium">Beton Bertulang</strong>,{' '}
                  <strong className="text-[#1d1d1f] font-medium">Dinding Bata Merah</strong>,{' '}
                  <strong className="text-[#1d1d1f] font-medium">Kusen Aluminium</strong>,{' '}
                  <strong className="text-[#1d1d1f] font-medium">Air PDAM</strong>, dan listrik{' '}
                  <strong className="text-[#1d1d1f] font-medium">1300 Watt</strong>.
                </p>
              </div>
              <div className="flex sm:flex-col gap-2 shrink-0">
                <div className="px-4 py-2.5 rounded-2xl bg-[#f5f5f7] border border-neutral-200/80 text-center">
                  <p className="font-display text-lg font-semibold text-[#1d1d1f]">100%</p>
                  <p className="text-[11px] text-[#6e6e73]">Bata Merah</p>
                </div>
                <div className="px-4 py-2.5 rounded-2xl bg-[#f5f5f7] border border-neutral-200/80 text-center">
                  <p className="font-display text-lg font-semibold text-[#1d1d1f]">60×60</p>
                  <p className="text-[11px] text-[#6e6e73]">Lantai Granit</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
