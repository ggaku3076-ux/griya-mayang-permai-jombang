import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Briefcase,
  Wallet,
  Home,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  ArrowUpRight,
  FileCheck2,
  Sparkles,
} from 'lucide-react';
import { MARKETING_CONTACTS } from '../data/propertyData';

interface QuizAnswers {
  occupation: string;
  workTenure: string;
  incomeRange: string;
  existingInstallment: string;
  maritalStatus: string;
  firstHome: string;
  budgetScheme: string;
  fullName: string;
  Domisili: string;
  consultantWa: string;
}

const OCCUPATION_OPTIONS = [
  { value: 'Karyawan Tetap (Swasta / BUMN)', desc: 'Slip gaji rutin & SK pengangkatan/kartu karyawan' },
  { value: 'PNS / ASN / TNI / Polri', desc: 'Penghasilan tetap instansi pemerintah' },
  { value: 'Karyawan Kontrak', desc: 'Kontrak kerja aktif minimal 1 tahun berjalan' },
  { value: 'Wiraswasta / UMKM / Pedagang', desc: 'Memiliki usaha aktif (NIB / SKU Desa)' },
  { value: 'Profesional / Freelancer', desc: 'Rekening koran / bukti penghasilan mandiri' },
];

const TENURE_OPTIONS = ['< 1 Tahun', '1 – 2 Tahun', '> 2 Tahun'];

const INCOME_OPTIONS = [
  { value: 'Rp 3 Juta – Rp 5 Juta / bulan', tag: 'Cocok Skema Subsidi' },
  { value: 'Rp 5 Juta – Rp 8 Juta / bulan', tag: 'Ideal Subsidi & Type 36/69' },
  { value: 'Rp 8 Juta – Rp 12 Juta / bulan', tag: 'Ideal Komersil Type 45/72' },
  { value: 'Di atas Rp 12 Juta / bulan', tag: 'Prioritas Komersil / Cash' },
];

const INSTALLMENT_OPTIONS = [
  { value: 'Tidak ada cicilan berjalan (SLIK Aman)', status: 'optimal' },
  { value: 'Ada cicilan ringan (< Rp 1 Juta/bulan)', status: 'good' },
  { value: 'Ada cicilan sedang (> Rp 1 Juta/bulan)', status: 'review' },
];

export const KprQuestionnaire: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const [answers, setAnswers] = useState<QuizAnswers>({
    occupation: 'Karyawan Tetap (Swasta / BUMN)',
    workTenure: '> 2 Tahun',
    incomeRange: 'Rp 5 Juta – Rp 8 Juta / bulan',
    existingInstallment: 'Tidak ada cicilan berjalan (SLIK Aman)',
    maritalStatus: 'Menikah (Keluarga)',
    firstHome: 'Belum pernah punya rumah (Rumah Pertama)',
    budgetScheme: '1 Juta All In (Angsuran 1 Jt-an/bln)',
    fullName: '',
    Domisili: 'Jombang',
    consultantWa: MARKETING_CONTACTS[0].waNumber,
  });

  const totalSteps = 4;

  const recommendation = useMemo(() => {
    const isFirstHome = answers.firstHome.startsWith('Belum');
    const isHighIncome =
      answers.incomeRange.includes('8 Juta – Rp 12 Juta') ||
      answers.incomeRange.includes('Di atas Rp 12 Juta');
    const wants45 =
      answers.budgetScheme.includes('5 Juta All In') ||
      answers.budgetScheme.includes('Cash');

    const eligibleSubsidi = isFirstHome && !isHighIncome && !wants45;

    let requiredDocs = [
      'e-KTP (Pemohon & Pasangan jika menikah)',
      'Kartu Keluarga & NPWP',
      'Rekening Koran 3 Bulan Terakhir',
    ];

    if (answers.occupation.includes('Wiraswasta')) {
      requiredDocs.push('Surat Keterangan Usaha (SKU) / NIB & Foto Tempat Usaha');
      requiredDocs.push('Catatan Pembukuan Usaha 3 Bulan Terakhir');
    } else {
      requiredDocs.push('Slip Gaji 3 Bulan Terakhir & Surat Keterangan Kerja');
    }

    if (eligibleSubsidi) {
      return {
        unitCode: 'TYPE 36/69 — PROGRAM SUBSIDI & KPR RINGAN',
        unitName: 'Rumah Modern Design Scandinavian',
        feeHighlight: 'Biaya 1 Juta All In · Angsuran 1 Jt-an/bulan',
        priceNote: 'Mulai Rp 200 Juta-an (Tersedia Kuota KPR Subsidi & Ringan)',
        reason:
          'Berdasarkan profil rumah pertama dan rentang penghasilan Anda, Anda sangat direkomendasikan mengambil skema 1 Juta All In dengan angsuran ringan 1 Jt-an/bulan.',
        slikNote: answers.existingInstallment.includes('Tidak ada')
          ? 'Peluang ACC Bank sangat tinggi (Rasio cicilan bersih).'
          : 'Tim KPR MJ Property siap membantu analisa rasio cicilan (DBR) Anda agar lolos bank.',
        requiredDocs,
      };
    }

    return {
      unitCode: 'TYPE 45/72 — KOMERSIL SCANDINAVIAN',
      unitName: 'Scandinavian Design Living + Smart Lock',
      feeHighlight: answers.budgetScheme.includes('Cash')
        ? 'Skema Cash Keras / Bertahap · Harga Spesial'
        : 'Biaya 5 Juta All In · Angsuran 2 Jt-an/bulan',
      priceNote: 'Mulai Rp 300 Juta-an (Alternatif: Type 36/69 Komersil Mulai 200 Jt-an)',
      reason:
        'Profil finansial dan preferensi hunian Anda sangat ideal untuk unit Komersil Type 45/72 dengan fasad High-Gable kaca panoramik, Smart Door Lock, serta ruang keluarga lega.',
      slikNote: answers.existingInstallment.includes('Tidak ada')
        ? 'Profil pembiayaan prima untuk persetujuan cepat KPR Komersil.'
        : 'Tersedia opsi joint-income pasangan dan pilihan bank mitra KPR fleksibel.',
      requiredDocs,
    };
  }, [answers]);

  const handleSendWhatsApp = () => {
    const chosen =
      MARKETING_CONTACTS.find((c) => c.waNumber === answers.consultantWa) || MARKETING_CONTACTS[0];

    const lines = [
      `Halo ${chosen.name} (MJ Property), saya telah mengisi *Kuisioner Kelayakan KPR Griya Mayang Permai Jombang*:`,
      ``,
      `*DATA PEMOHON*`,
      `• Nama: ${answers.fullName || 'Calon Pembeli'}`,
      `• Domisili: ${answers.Domisili || 'Jombang'}`,
      `• Status: ${answers.maritalStatus}`,
      `• Pekerjaan: ${answers.occupation} (${answers.workTenure})`,
      `• Penghasilan: ${answers.incomeRange}`,
      `• Cicilan Berjalan: ${answers.existingInstallment}`,
      `• Status Kepemilikan: ${answers.firstHome}`,
      `• Rencana Skema: ${answers.budgetScheme}`,
      ``,
      `*REKOMENDASI SISTEM*`,
      `• Unit: ${recommendation.unitCode}`,
      ``,
      `Mohon dibantu info ketersediaan kavling & pengecekan kelayakan KPR saya.`,
    ];

    window.open(
      `https://wa.me/${chosen.waNumber}?text=${encodeURIComponent(lines.join('\n'))}`,
      '_blank'
    );
  };

  return (
    <section id="kuisioner" className="pt-6 pb-12 sm:pt-10 sm:pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full bg-[#f5f5f7] border border-neutral-200 text-[11px] font-semibold tracking-wider uppercase text-[#1d1d1f]">
            KUISIONER KPR · ANALISA KELAYAKAN 1 MENIT
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-5xl font-semibold text-[#1d1d1f] leading-[1.1]">
            Cek kecocokan unit &amp; KPR sesuai profil Anda.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6e6e73]">
            Jawab beberapa pertanyaan singkat seputar pekerjaan dan penghasilan untuk mengetahui
            rekomendasi skema <strong className="text-[#1d1d1f] font-medium">Rumah Subsidi</strong>{' '}
            atau <strong className="text-[#1d1d1f] font-medium">Rumah Komersil</strong> beserta
            berkas yang dibutuhkan.
          </p>
        </div>

        {/* Main Interactive Apple Card */}
        <div className="mt-10 rounded-3xl bg-[#f5f5f7] border border-neutral-200/90 p-4 sm:p-7">
          {!submitted ? (
            <div className="bg-white rounded-2xl border border-neutral-200/80 p-5 sm:p-8">
              {/* Top Step Progress Header */}
              <div className="mb-7">
                <div className="flex items-center justify-between text-xs font-medium text-[#6e6e73] mb-2.5">
                  <span>
                    Langkah {step} dari {totalSteps}
                  </span>
                  <span className="text-[#1d1d1f] font-semibold">
                    {step === 1 && 'Profil Pekerjaan'}
                    {step === 2 && 'Penghasilan & Cicilan'}
                    {step === 3 && 'Status Hunian & Skema'}
                    {step === 4 && 'Data Singkat & Hasil'}
                  </span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-[#f5f5f7] overflow-hidden">
                  <motion.div
                    className="h-full bg-[#1d1d1f] rounded-full"
                    initial={false}
                    animate={{ width: `${(step / totalSteps) * 100}%` }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  />
                </div>
              </div>

              {/* Step Content */}
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.22 }}
                    className="space-y-6"
                  >
                    <div>
                      <div className="flex items-center gap-2 text-sm font-semibold text-[#1d1d1f] mb-3">
                        <Briefcase className="w-4 h-4" />
                        1. Apa pekerjaan / profesi Anda saat ini?
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {OCCUPATION_OPTIONS.map((opt) => {
                          const active = answers.occupation === opt.value;
                          return (
                            <button
                              key={opt.value}
                              type="button"
                              onClick={() => setAnswers({ ...answers, occupation: opt.value })}
                              className={`text-left p-4 rounded-2xl border transition-all cursor-pointer ${
                                active
                                  ? 'bg-[#1d1d1f] text-white border-[#1d1d1f]'
                                  : 'bg-[#f5f5f7] text-[#1d1d1f] border-neutral-200 hover:bg-neutral-200/60'
                              }`}
                            >
                              <p className="text-xs sm:text-sm font-semibold">{opt.value}</p>
                              <p
                                className={`text-[11px] mt-1 ${
                                  active ? 'text-neutral-300' : 'text-[#6e6e73]'
                                }`}
                              >
                                {opt.desc}
                              </p>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-[#1d1d1f] mb-3">
                        2. Sudah berapa lama bekerja / menjalankan usaha tersebut?
                      </p>
                      <div className="grid grid-cols-3 gap-2.5">
                        {TENURE_OPTIONS.map((ten) => {
                          const active = answers.workTenure === ten;
                          return (
                            <button
                              key={ten}
                              type="button"
                              onClick={() => setAnswers({ ...answers, workTenure: ten })}
                              className={`py-3 px-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                                active
                                  ? 'bg-[#1d1d1f] text-white border-[#1d1d1f]'
                                  : 'bg-[#f5f5f7] text-[#1d1d1f] border-neutral-200 hover:bg-neutral-200/60'
                              }`}
                            >
                              {ten}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.22 }}
                    className="space-y-6"
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-1.5 text-sm font-semibold text-[#1d1d1f] mb-3">
                        <Wallet className="w-4 h-4 shrink-0" />
                        <span>3. Berapa kisaran gaji / penghasilan bersih per bulan?</span>
                        <span className="text-xs font-normal text-[#6e6e73]">
                          (Bisa gabungan suami-istri)
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {INCOME_OPTIONS.map((inc) => {
                          const active = answers.incomeRange === inc.value;
                          return (
                            <button
                              key={inc.value}
                              type="button"
                              onClick={() => setAnswers({ ...answers, incomeRange: inc.value })}
                              className={`text-left p-4 rounded-2xl border transition-all cursor-pointer ${
                                active
                                  ? 'bg-[#1d1d1f] text-white border-[#1d1d1f]'
                                  : 'bg-[#f5f5f7] text-[#1d1d1f] border-neutral-200 hover:bg-neutral-200/60'
                              }`}
                            >
                              <p className="text-xs sm:text-sm font-semibold">{inc.value}</p>
                              <p
                                className={`text-[11px] mt-1 ${
                                  active ? 'text-neutral-300' : 'text-[#6e6e73]'
                                }`}
                              >
                                {inc.tag}
                              </p>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-[#1d1d1f] mb-3">
                        4. Apakah saat ini memiliki cicilan berjalan di bank / leasing / paylater?
                      </p>
                      <div className="grid grid-cols-1 gap-2.5">
                        {INSTALLMENT_OPTIONS.map((inst) => {
                          const active = answers.existingInstallment === inst.value;
                          return (
                            <button
                              key={inst.value}
                              type="button"
                              onClick={() =>
                                setAnswers({ ...answers, existingInstallment: inst.value })
                              }
                              className={`text-left py-3.5 px-4 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${
                                active
                                  ? 'bg-[#1d1d1f] text-white border-[#1d1d1f]'
                                  : 'bg-[#f5f5f7] text-[#1d1d1f] border-neutral-200 hover:bg-neutral-200/60'
                              }`}
                            >
                              <span>{inst.value}</span>
                              {active && <CheckCircle2 className="w-4 h-4 shrink-0" />}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.22 }}
                    className="space-y-6"
                  >
                    <div>
                      <div className="flex items-center gap-2 text-sm font-semibold text-[#1d1d1f] mb-3">
                        <Home className="w-4 h-4" />
                        5. Status kepemilikan rumah saat ini?
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {[
                          'Belum pernah punya rumah (Rumah Pertama)',
                          'Sudah punya rumah (Ingin tambah aset / investasi)',
                        ].map((opt) => {
                          const active = answers.firstHome === opt;
                          return (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => setAnswers({ ...answers, firstHome: opt })}
                              className={`text-left p-4 rounded-2xl border text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                                active
                                  ? 'bg-[#1d1d1f] text-white border-[#1d1d1f]'
                                  : 'bg-[#f5f5f7] text-[#1d1d1f] border-neutral-200 hover:bg-neutral-200/60'
                              }`}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-[#1d1d1f] mb-3">
                        6. Status pernikahan pemohon?
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                        {['Lajang', 'Menikah (Keluarga)', 'Rencana Menikah'].map((st) => {
                          const active = answers.maritalStatus === st;
                          return (
                            <button
                              key={st}
                              type="button"
                              onClick={() => setAnswers({ ...answers, maritalStatus: st })}
                              className={`py-3 px-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                                active
                                  ? 'bg-[#1d1d1f] text-white border-[#1d1d1f]'
                                  : 'bg-[#f5f5f7] text-[#1d1d1f] border-neutral-200 hover:bg-neutral-200/60'
                              }`}
                            >
                              {st}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-[#1d1d1f] mb-3">
                        7. Skema dana awal / pembelian yang paling diinginkan?
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                        {[
                          '1 Juta All In (Angsuran 1 Jt-an/bln)',
                          '5 Juta All In (Type 45/72 + Smart Lock)',
                          'Cash Keras / Cash Bertahap',
                        ].map((sch) => {
                          const active = answers.budgetScheme === sch;
                          return (
                            <button
                              key={sch}
                              type="button"
                              onClick={() => setAnswers({ ...answers, budgetScheme: sch })}
                              className={`p-3.5 rounded-xl border text-left text-xs font-semibold transition-all cursor-pointer ${
                                active
                                  ? 'bg-[#1d1d1f] text-white border-[#1d1d1f]'
                                  : 'bg-[#f5f5f7] text-[#1d1d1f] border-neutral-200 hover:bg-neutral-200/60'
                              }`}
                            >
                              {sch}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.22 }}
                    className="space-y-4"
                  >
                    <p className="text-sm font-semibold text-[#1d1d1f]">
                      8. Lengkapi nama &amp; konsultan pendamping untuk melihat hasil analisa:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-[#6e6e73] mb-1.5">
                          Nama Lengkap Anda
                        </label>
                        <input
                          type="text"
                          placeholder="Contoh: Ahmad Fauzi"
                          value={answers.fullName}
                          onChange={(e) => setAnswers({ ...answers, fullName: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#f5f5f7] border border-neutral-200 text-sm text-[#1d1d1f] focus:outline-none focus:border-[#1d1d1f]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-[#6e6e73] mb-1.5">
                          Domisili Saat Ini
                        </label>
                        <input
                          type="text"
                          placeholder="Contoh: Peterongan, Jombang"
                          value={answers.Domisili}
                          onChange={(e) => setAnswers({ ...answers, Domisili: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#f5f5f7] border border-neutral-200 text-sm text-[#1d1d1f] focus:outline-none focus:border-[#1d1d1f]"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#6e6e73] mb-1.5">
                        Pilih Konsultan Marketing MJ Property
                      </label>
                      <select
                        value={answers.consultantWa}
                        onChange={(e) => setAnswers({ ...answers, consultantWa: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#f5f5f7] border border-neutral-200 text-sm text-[#1d1d1f] focus:outline-none focus:border-[#1d1d1f]"
                      >
                        {MARKETING_CONTACTS.map((c) => (
                          <option key={c.waNumber} value={c.waNumber}>
                            {c.name} — {c.phoneDisplay}
                          </option>
                        ))}
                      </select>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Bottom Navigation Controls */}
              <div className="mt-8 pt-5 border-t border-neutral-100 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setStep((s) => Math.max(1, s - 1))}
                  disabled={step === 1}
                  className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-medium transition-colors ${
                    step === 1
                      ? 'text-neutral-300 cursor-not-allowed'
                      : 'text-[#1d1d1f] bg-[#f5f5f7] hover:bg-neutral-200/70 cursor-pointer'
                  }`}
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  Sebelumnya
                </button>

                {step < totalSteps ? (
                  <button
                    type="button"
                    onClick={() => setStep((s) => Math.min(totalSteps, s + 1))}
                    className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-[#1d1d1f] text-white text-xs font-semibold hover:bg-neutral-800 transition-colors cursor-pointer"
                  >
                    Selanjutnya
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setSubmitted(true)}
                    className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-[#1d1d1f] text-white text-xs font-semibold hover:bg-neutral-800 transition-colors cursor-pointer"
                  >
                    Lihat Hasil Rekomendasi
                    <Sparkles className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* Result Diagnostic Card */
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.28 }}
              className="bg-white rounded-2xl border border-neutral-200/90 p-6 sm:p-8 space-y-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-neutral-100">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-semibold text-emerald-800">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    HASIL ANALISA PROFIL KPR ANDA
                  </span>
                  <h3 className="mt-3 font-display text-2xl sm:text-3xl font-semibold text-[#1d1d1f]">
                    {recommendation.unitCode}
                  </h3>
                  <p className="text-sm text-[#6e6e73] mt-0.5">{recommendation.unitName}</p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setStep(1);
                  }}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#f5f5f7] text-xs font-medium text-[#1d1d1f] hover:bg-neutral-200/70 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Ulangi Kuisioner
                </button>
              </div>

              {/* Recommendation Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-[#f5f5f7] border border-neutral-200/80 space-y-2">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#6e6e73]">
                    Skema &amp; Estimasi Biaya
                  </p>
                  <p className="font-display text-lg font-semibold text-[#1d1d1f]">
                    {recommendation.feeHighlight}
                  </p>
                  <p className="text-xs text-[#6e6e73]">{recommendation.priceNote}</p>
                  <p className="text-xs text-[#1d1d1f] pt-2 border-t border-neutral-200/70 leading-relaxed">
                    {recommendation.reason}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#f5f5f7] border border-neutral-200/80 space-y-2.5">
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#1d1d1f]">
                    <FileCheck2 className="w-3.5 h-3.5" />
                    Persiapan Berkas ({answers.occupation.split(' ')[0]})
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#424245]">
                    {recommendation.requiredDocs.map((doc) => (
                      <li key={doc} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1d1d1f] shrink-0 mt-0.5" />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[11px] text-[#6e6e73] pt-2 border-t border-neutral-200/70">
                    {recommendation.slikNote}
                  </p>
                </div>
              </div>

              {/* Profile Summary Pills */}
              <div className="flex flex-wrap gap-2 text-[11px] text-[#6e6e73]">
                <span className="px-3 py-1 rounded-full bg-[#f5f5f7] border border-neutral-200">
                  Pekerjaan: <strong className="text-[#1d1d1f]">{answers.occupation}</strong>
                </span>
                <span className="px-3 py-1 rounded-full bg-[#f5f5f7] border border-neutral-200">
                  Gaji: <strong className="text-[#1d1d1f]">{answers.incomeRange}</strong>
                </span>
                <span className="px-3 py-1 rounded-full bg-[#f5f5f7] border border-neutral-200">
                  Status: <strong className="text-[#1d1d1f]">{answers.maritalStatus}</strong>
                </span>
              </div>

              {/* Action CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="w-full sm:flex-1 py-3.5 px-6 rounded-full bg-[#1d1d1f] text-white text-xs sm:text-sm font-semibold hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  Kirim Hasil Kuisioner &amp; Konsultasi ke WhatsApp
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
