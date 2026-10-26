import React from 'react';
import { motion } from 'framer-motion';
import { Tv, Wind, Refrigerator, MapPin, Navigation, Clock } from 'lucide-react';
import { COMPANY_INFO, LOCATION_ADVANTAGES } from '../data/propertyData';

interface PromoLocationProps {
  onOpenModal: (defaultUnit?: string) => void;
}

export const PromoLocation: React.FC<PromoLocationProps> = ({ onOpenModal }) => {
  return (
    <section id="lokasi" className="pt-6 pb-12 sm:pt-10 sm:pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Part 1: Promo Menarik* (Strictly Solid Dark Charcoal & Crisp White Cards — Zero Gradients) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-[#1d1d1f] text-white p-7 sm:p-11"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] font-semibold tracking-wider uppercase text-white">
                PROMO MENARIK* · GRIYA MAYANG PERMAI
              </span>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl font-semibold leading-tight">
                Biaya mulai 1 Juta All In.
                <br />
                <span className="text-neutral-400 font-normal">
                  Bawa pulang hadiah elektronik langsung.
                </span>
              </h2>
              <p className="mt-4 text-sm sm:text-base text-neutral-300 leading-relaxed max-w-xl">
                Khusus pemesanan unit Rumah Subsidi maupun Rumah Komersil di Griya Mayang Permai,
                dapatkan bonus elektronik pilihan <strong className="text-white">TV, AC, atau Kulkas</strong>{' '}
                sesuai stok yang tersedia serta hadiah menarik lainnya.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenModal('Klaim Promo TV / AC / Kulkas')}
                  className="px-6 py-3 rounded-full bg-white text-[#1d1d1f] text-xs font-semibold hover:bg-neutral-100 transition-colors cursor-pointer"
                >
                  Klaim Promo &amp; Cek Stok Hadiah
                </button>
                <span className="text-xs text-neutral-400">
                  *Syarat &amp; ketersediaan stok promo berlaku.
                </span>
              </div>
            </div>

            {/* 3 Electronic Gift Cards */}
            <div className="lg:col-span-5 grid grid-cols-3 gap-3">
              <div className="rounded-2xl bg-neutral-800/90 border border-neutral-700 p-4 sm:p-5 text-center">
                <Tv className="w-6 h-6 mx-auto text-white mb-2.5" />
                <p className="font-display text-sm sm:text-base font-semibold text-white">TV</p>
                <p className="text-[11px] text-neutral-400 mt-0.5">Smart Living</p>
              </div>
              <div className="rounded-2xl bg-neutral-800/90 border border-neutral-700 p-4 sm:p-5 text-center">
                <Wind className="w-6 h-6 mx-auto text-white mb-2.5" />
                <p className="font-display text-sm sm:text-base font-semibold text-white">AC</p>
                <p className="text-[11px] text-neutral-400 mt-0.5">Ruang Sejuk</p>
              </div>
              <div className="rounded-2xl bg-neutral-800/90 border border-neutral-700 p-4 sm:p-5 text-center">
                <Refrigerator className="w-6 h-6 mx-auto text-white mb-2.5" />
                <p className="font-display text-sm sm:text-base font-semibold text-white">Kulkas</p>
                <p className="text-[11px] text-neutral-400 mt-0.5">Dapur Modern</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Part 2: Mengapa Memilih Kami? (Lokasi Strategis Jombang) */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 rounded-full bg-[#f5f5f7] border border-neutral-200 text-[11px] font-semibold tracking-wider uppercase text-[#1d1d1f]">
                MENGAPA MEMILIH KAMI? · LOKASI STRATEGIS
              </span>
              <h2 className="mt-4 font-display text-3xl sm:text-5xl font-semibold text-[#1d1d1f] leading-[1.1]">
                Nol Jalan Raya Jogoroto – Peterongan.
              </h2>
              <p className="mt-3 text-base text-[#6e6e73]">
                Kemudahan mobilitas keluarga menuju fasilitas kesehatan, pendidikan, pesantren, dan
                pusat Kota Jombang tanpa masuk gang sempit.
              </p>
            </div>

            <a
              href={COMPANY_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#f5f5f7] hover:bg-neutral-200/70 border border-neutral-200 text-xs font-semibold text-[#1d1d1f] transition-colors self-start"
            >
              <Navigation className="w-3.5 h-3.5" />
              Buka Google Maps Lokasi
            </a>
          </div>

          {/* 4 Time-Distance Bento Cards */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {LOCATION_ADVANTAGES.map((loc, index) => (
              <motion.div
                key={loc.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="rounded-3xl bg-[#f5f5f7] border border-neutral-200/90 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-neutral-200 text-xs font-semibold text-[#1d1d1f]">
                    <Clock className="w-3.5 h-3.5" />
                    {loc.time}
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-[#1d1d1f]">
                    {loc.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-[#6e6e73] leading-relaxed">{loc.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-200/70 flex items-center gap-1.5 text-xs font-medium text-[#1d1d1f]">
                  <MapPin className="w-3.5 h-3.5 text-[#6e6e73]" />
                  <span>Jombang, Jawa Timur</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
