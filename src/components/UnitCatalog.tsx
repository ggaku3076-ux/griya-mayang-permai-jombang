import React, { useState } from 'react';
import {
  BedDouble,
  Bath,
  Car,
  Maximize2,
  Zap,
  Droplets,
  Check,
  ArrowUpRight,
  FileText,
  Sparkles,
} from 'lucide-react';
import { PROPERTY_UNITS, PropertyCategory, PropertyUnit } from '../data/propertyData';

interface UnitCatalogProps {
  onSelectUnitForModal: (unitLabel: string) => void;
  onInspectSpecs: (unitId: 'type-36-69' | 'type-45-72') => void;
  onOpenBrochure: (unitId: 'type-36-69' | 'type-45-72') => void;
}

export const UnitCatalog: React.FC<UnitCatalogProps> = ({
  onSelectUnitForModal,
  onInspectSpecs,
  onOpenBrochure,
}) => {
  const [filter, setFilter] = useState<PropertyCategory>('all');

  const filteredUnits = PROPERTY_UNITS.filter((u) =>
    filter === 'all' ? true : u.categories.includes(filter)
  );

  return (
    <section id="katalog" className="pt-6 pb-12 sm:pt-10 sm:pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row: Heading + Segmented Category Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-[#f5f5f7] border border-neutral-200 text-[11px] font-semibold tracking-wider uppercase text-[#1d1d1f]">
              KATALOG UNIT · KOMERSIL &amp; SUBSIDI
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-5xl font-semibold text-[#1d1d1f] leading-[1.1]">
              Pilih hunian sesuai rencana masa depan Anda.
            </h2>
          </div>

          {/* Mobile-Safe Scrollable Segmented Control */}
          <div className="w-full md:w-auto overflow-x-auto no-scrollbar">
            <div className="inline-flex items-center p-1 rounded-full bg-[#f5f5f7] border border-neutral-200/90 min-w-max">
              {[
                { id: 'all', label: 'Semua Tipe' },
                { id: 'subsidi', label: 'Subsidi / 1 Jt All In' },
                { id: 'komersil', label: 'Komersil Scandinavian' },
              ].map((item) => {
                const active = filter === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setFilter(item.id as PropertyCategory)}
                    className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                      active
                        ? 'bg-[#1d1d1f] text-white'
                        : 'text-[#6e6e73] hover:text-[#1d1d1f]'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Unit Cards Grid */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {filteredUnits.map((unit: PropertyUnit) => (
            <article
              key={unit.id}
              className="rounded-3xl bg-[#f5f5f7] border border-neutral-200/90 p-3 sm:p-4 flex flex-col justify-between"
            >
              <div>
                {/* Exterior Architectural Render with Responsive WebP srcSet */}
                <div className="relative rounded-2xl overflow-hidden bg-white border border-neutral-200/80 aspect-[4/3]">
                  <img
                    src={unit.heroImage}
                    srcSet={`${unit.heroImageSm} 640w, ${unit.heroImage} 1080w`}
                    sizes="(max-width: 1024px) 100vw, 540px"
                    alt={`${unit.code} ${unit.name} - Griya Mayang Permai Jombang`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover md:transition-transform md:duration-500 md:hover:scale-[1.02]"
                  />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 flex-wrap">
                    <span className="px-2.5 sm:px-3 py-1 rounded-full bg-white/95 border border-neutral-200 text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-[#1d1d1f]">
                      {unit.code}
                    </span>
                    <span className="px-2.5 sm:px-3 py-1 rounded-full bg-[#1d1d1f] text-white text-[10px] sm:text-[11px] font-medium">
                      {unit.allInFee} · Terima Kunci
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="px-1.5 sm:px-3 pt-5 sm:pt-6 pb-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-medium text-[#6e6e73]">{unit.tagline}</span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                      <Sparkles className="w-3 h-3" />
                      Bonus: {unit.promoItems.join(' / ')}*
                    </span>
                  </div>

                  <h3 className="mt-2 font-display text-2xl sm:text-3xl font-semibold text-[#1d1d1f]">
                    {unit.name}
                  </h3>

                  {/* Price & Installment Highlight Box — Crisp Mobile Sizing */}
                  <div className="mt-4 sm:mt-5 p-3.5 sm:p-4 rounded-2xl bg-white border border-neutral-200/90 grid grid-cols-3 gap-2 sm:gap-3">
                    <div>
                      <p className="text-[10px] sm:text-[11px] text-[#6e6e73]">Harga Mulai</p>
                      <p className="font-display text-xs sm:text-base font-semibold text-[#1d1d1f] mt-0.5">
                        {unit.priceStart.replace('Mulai ', '')}
                      </p>
                    </div>
                    <div className="border-x border-neutral-100 px-2 sm:px-3">
                      <p className="text-[10px] sm:text-[11px] text-[#6e6e73]">Biaya Awal</p>
                      <p className="font-display text-xs sm:text-base font-semibold text-[#1d1d1f] mt-0.5">
                        {unit.allInFee}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-[11px] text-[#6e6e73]">Angsuran KPR</p>
                      <p className="font-display text-xs sm:text-base font-semibold text-[#1d1d1f] mt-0.5">
                        {unit.monthlyInstallment}
                      </p>
                    </div>
                  </div>

                  {/* Quick Hardware-Style Spec Pills */}
                  <div className="mt-4 grid grid-cols-3 sm:grid-cols-6 gap-2 text-center">
                    <div className="bg-white rounded-xl py-2.5 px-2 border border-neutral-200/70">
                      <Maximize2 className="w-3.5 h-3.5 mx-auto text-[#1d1d1f]" />
                      <p className="text-[11px] font-semibold text-[#1d1d1f] mt-1">
                        {unit.buildingArea}/{unit.landArea} m²
                      </p>
                    </div>
                    <div className="bg-white rounded-xl py-2.5 px-2 border border-neutral-200/70">
                      <BedDouble className="w-3.5 h-3.5 mx-auto text-[#1d1d1f]" />
                      <p className="text-[11px] font-semibold text-[#1d1d1f] mt-1">
                        {unit.bedrooms} KT
                      </p>
                    </div>
                    <div className="bg-white rounded-xl py-2.5 px-2 border border-neutral-200/70">
                      <Bath className="w-3.5 h-3.5 mx-auto text-[#1d1d1f]" />
                      <p className="text-[11px] font-semibold text-[#1d1d1f] mt-1">
                        {unit.bathrooms} KM
                      </p>
                    </div>
                    <div className="bg-white rounded-xl py-2.5 px-2 border border-neutral-200/70">
                      <Car className="w-3.5 h-3.5 mx-auto text-[#1d1d1f]" />
                      <p className="text-[11px] font-semibold text-[#1d1d1f] mt-1">Carport</p>
                    </div>
                    <div className="bg-white rounded-xl py-2.5 px-2 border border-neutral-200/70">
                      <Zap className="w-3.5 h-3.5 mx-auto text-[#1d1d1f]" />
                      <p className="text-[11px] font-semibold text-[#1d1d1f] mt-1">
                        {unit.powerWatt}W
                      </p>
                    </div>
                    <div className="bg-white rounded-xl py-2.5 px-2 border border-neutral-200/70">
                      <Droplets className="w-3.5 h-3.5 mx-auto text-[#1d1d1f]" />
                      <p className="text-[11px] font-semibold text-[#1d1d1f] mt-1">
                        {unit.waterSource}
                      </p>
                    </div>
                  </div>

                  {/* Bullet Highlights */}
                  <ul className="mt-5 space-y-2">
                    {unit.keyFeatures.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1d1d1f]">
                        <span className="mt-0.5 w-4 h-4 rounded-full bg-white border border-neutral-300 flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 text-[#1d1d1f]" />
                        </span>
                        <span className="text-[#424245]">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer CTAs */}
              <div className="mt-6 px-1.5 sm:px-3 pb-2 pt-4 border-t border-neutral-200/80 grid grid-cols-2 sm:flex sm:items-center gap-2">
                <button
                  onClick={() => onSelectUnitForModal(`${unit.code} — ${unit.name} (${unit.allInFee})`)}
                  className="col-span-2 sm:flex-1 py-3 px-5 rounded-full bg-[#1d1d1f] text-white text-xs font-medium hover:bg-neutral-800 active:scale-[0.99] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  Pesan / Cek Kuota Unit
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onInspectSpecs(unit.id)}
                  className="py-3 px-4 rounded-full bg-white text-[#1d1d1f] border border-neutral-300 hover:bg-neutral-50 text-xs font-medium transition-colors cursor-pointer"
                >
                  Denah &amp; Spek
                </button>
                <button
                  onClick={() => onOpenBrochure(unit.id)}
                  className="py-3 px-3.5 rounded-full bg-white text-[#6e6e73] hover:text-[#1d1d1f] border border-neutral-200 text-xs font-medium transition-colors inline-flex items-center justify-center gap-1 cursor-pointer"
                  title="Lihat Foto Brosur Resmi"
                >
                  <FileText className="w-3.5 h-3.5" />
                  Brosur
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Dedicated Subsidi vs Komersil Clarity Note */}
        <div className="mt-8 rounded-2xl bg-[#f5f5f7] border border-neutral-200/90 p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#1d1d1f]">
              Informasi Kuota Rumah Subsidi &amp; Rumah Komersil
            </p>
            <p className="text-xs sm:text-sm text-[#6e6e73] mt-1">
              Tersedia pendampingan berkas lengkap baik untuk pengajuan{' '}
              <strong className="text-[#1d1d1f] font-medium">KPR Subsidi (cicilan ringan 1 Jt-an flat)</strong>{' '}
              maupun <strong className="text-[#1d1d1f] font-medium">KPR Komersil / Pembelian Cash Bertahap</strong>{' '}
              di kawasan Griya Mayang Permai Jombang.
            </p>
          </div>
          <button
            onClick={() => onSelectUnitForModal('Konsultasi Perbandingan KPR Subsidi & Komersil')}
            className="w-full md:w-auto shrink-0 px-5 py-3 md:py-2.5 rounded-full bg-white border border-neutral-300 text-xs font-semibold text-[#1d1d1f] hover:bg-neutral-50 transition-colors cursor-pointer"
          >
            Tanya Syarat KPR Subsidi →
          </button>
        </div>
      </div>
    </section>
  );
};
