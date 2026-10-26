import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calculator, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/propertyData';

type PresetKey = 'subsidi' | 'type36' | 'type45';

export const KprSimulator: React.FC = () => {
  const [preset, setPreset] = useState<PresetKey>('subsidi');
  const [price, setPrice] = useState<number>(166000000);
  const [allInFee, setAllInFee] = useState<number>(1000000);
  const [interestRate, setInterestRate] = useState<number>(5.0);
  const [tenorYears, setTenorYears] = useState<number>(15);

  const applyPreset = (key: PresetKey) => {
    setPreset(key);
    if (key === 'subsidi') {
      setPrice(166000000);
      setAllInFee(1000000);
      setInterestRate(5.0);
      setTenorYears(15);
    } else if (key === 'type36') {
      setPrice(200000000);
      setAllInFee(1000000);
      setInterestRate(5.5);
      setTenorYears(15);
    } else {
      setPrice(300000000);
      setAllInFee(5000000);
      setInterestRate(6.5);
      setTenorYears(15);
    }
  };

  const monthlyPayment = useMemo(() => {
    const principal = Math.max(price - allInFee, 0);
    const months = tenorYears * 12;
    const monthlyRate = interestRate / 100 / 12;
    if (monthlyRate === 0) return principal / months;
    const factor = Math.pow(1 + monthlyRate, months);
    return (principal * (monthlyRate * factor)) / (factor - 1);
  }, [price, allInFee, interestRate, tenorYears]);

  const formatRupiah = (val: number) =>
    new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(val);

  const waMessage = `Halo MJ Property, saya ingin konsultasi simulasi KPR Griya Mayang Permai Jombang:%0A- Skema: ${
    preset === 'subsidi'
      ? 'Program KPR Subsidi / Ringan (1 Jt All In)'
      : preset === 'type36'
      ? 'Type 36/69 Scandinavian (1 Jt All In)'
      : 'Type 45/72 Komersil (5 Jt All In)'
  }%0A- Estimasi Harga: ${formatRupiah(price)}%0A- Biaya All In: ${formatRupiah(
    allInFee
  )}%0A- Tenor: ${tenorYears} Tahun (${interestRate}%/thn)%0A- Estimasi Angsuran: ${formatRupiah(
    monthlyPayment
  )}/bulan`;

  return (
    <section id="simulasi" className="pt-6 pb-12 sm:pt-10 sm:pb-20 bg-[#f5f5f7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-block px-3 py-1 rounded-full bg-white border border-neutral-200 text-[11px] font-semibold tracking-wider uppercase text-[#1d1d1f]">
            KALKULATOR KPR · SUBSIDI &amp; KOMERSIL
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-5xl font-semibold text-[#1d1d1f] leading-[1.1]">
            Transparan sejak hitungan pertama.
          </h2>
          <p className="mt-3 text-base text-[#6e6e73]">
            Simulasikan estimasi cicilan bulanan Anda untuk skema Rumah Subsidi maupun Rumah
            Komersil di Griya Mayang Permai.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch">
          {/* Controls Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-neutral-200/90 p-6 sm:p-8 space-y-6">
            {/* Preset Selector */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#6e6e73] mb-3">
                Pilih Skema Cepat
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'subsidi', title: 'Skema Subsidi', sub: '1 Jt All In · 5% Flat' },
                  { id: 'type36', title: 'Type 36/69', sub: 'Mulai 200 Jt · 1 Jt All In' },
                  { id: 'type45', title: 'Type 45/72', sub: 'Mulai 300 Jt · 5 Jt All In' },
                ].map((item) => {
                  const active = preset === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => applyPreset(item.id as PresetKey)}
                      className={`text-left p-3.5 rounded-2xl border transition-all cursor-pointer ${
                        active
                          ? 'bg-[#1d1d1f] text-white border-[#1d1d1f]'
                          : 'bg-[#f5f5f7] text-[#1d1d1f] border-neutral-200 hover:bg-neutral-200/60'
                      }`}
                    >
                      <p className="text-xs font-semibold">{item.title}</p>
                      <p
                        className={`text-[11px] mt-0.5 ${
                          active ? 'text-neutral-300' : 'text-[#6e6e73]'
                        }`}
                      >
                        {item.sub}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Price Slider */}
            <div>
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-[#6e6e73]">Estimasi Harga Unit</span>
                <span className="font-display font-semibold text-[#1d1d1f]">
                  {formatRupiah(price)}
                </span>
              </div>
              <input
                type="range"
                min={160000000}
                max={450000000}
                step={2000000}
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-[11px] text-[#6e6e73] mt-1">
                <span>Rp 160 Jt (Subsidi)</span>
                <span>Rp 300 Jt (Type 45/72)</span>
                <span>Rp 450 Jt</span>
              </div>
            </div>

            {/* Tenor Selector */}
            <div>
              <div className="flex items-center justify-between text-sm mb-2.5">
                <span className="text-[#6e6e73]">Jangka Waktu KPR (Tenor)</span>
                <span className="font-display font-semibold text-[#1d1d1f]">
                  {tenorYears} Tahun
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[10, 15, 20, 25].map((yr) => (
                  <button
                    key={yr}
                    onClick={() => setTenorYears(yr)}
                    className={`py-2.5 rounded-xl text-xs font-semibold border transition-colors cursor-pointer ${
                      tenorYears === yr
                        ? 'bg-[#1d1d1f] text-white border-[#1d1d1f]'
                        : 'bg-[#f5f5f7] text-[#1d1d1f] border-neutral-200 hover:bg-neutral-200/70'
                    }`}
                  >
                    {yr} Thn
                  </button>
                ))}
              </div>
            </div>

            {/* Interest Rate Slider */}
            <div>
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-[#6e6e73]">Suku Bunga KPR per Tahun</span>
                <span className="font-display font-semibold text-[#1d1d1f]">
                  {interestRate.toFixed(1)}%
                </span>
              </div>
              <input
                type="range"
                min={5.0}
                max={10.0}
                step={0.25}
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-[11px] text-[#6e6e73] mt-1">
                <span>5.0% (FLPP Subsidi)</span>
                <span>6.5% (Promo Bank)</span>
                <span>10.0%</span>
              </div>
            </div>
          </div>

          {/* Result Summary Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-5 bg-white rounded-3xl border border-neutral-200/90 p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#6e6e73]">
                <Calculator className="w-4 h-4 text-[#1d1d1f]" />
                ESTIMASI ANGSURAN BULANAN
              </div>

              <p className="mt-4 font-display text-4xl sm:text-5xl font-semibold text-[#1d1d1f] tracking-tight">
                {formatRupiah(monthlyPayment)}
              </p>
              <p className="text-xs text-[#6e6e73] mt-1.5">
                Per bulan selama {tenorYears} tahun ({tenorYears * 12}x angsuran)
              </p>

              <div className="mt-7 pt-6 border-t border-neutral-100 space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-[#6e6e73]">Biaya All In Terima Kunci</span>
                  <span className="font-semibold text-[#1d1d1f]">{formatRupiah(allInFee)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#6e6e73]">Plafon Pinjaman KPR</span>
                  <span className="font-semibold text-[#1d1d1f]">
                    {formatRupiah(Math.max(price - allInFee, 0))}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#6e6e73]">Bonus Promo Unit*</span>
                  <span className="font-semibold text-emerald-700">TV / AC / Kulkas</span>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-2.5">
              <a
                href={`https://wa.me/${COMPANY_INFO.socials.whatsappRaw}?text=${waMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 rounded-full bg-[#1d1d1f] text-white text-xs font-medium hover:bg-neutral-800 transition-colors flex items-center justify-center gap-1.5"
              >
                Kirim Hasil Simulasi ke WhatsApp
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <p className="text-[11px] text-center text-[#6e6e73]">
                *Perhitungan bersifat estimasi. Persetujuan &amp; plafon akhir mengikuti analisa bank
                mitra KPR.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
