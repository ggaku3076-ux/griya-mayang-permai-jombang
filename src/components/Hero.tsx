import React from 'react';
import { ArrowRight, MapPin, Gift, FileText, ChevronRight } from 'lucide-react';
import { COMPANY_INFO, PROPERTY_UNITS } from '../data/propertyData';
import { NavPage } from './Navbar';

interface HeroProps {
  onNavigate: (page: NavPage) => void;
  onQuickInspectUnit: (unitId: 'type-36-69' | 'type-45-72') => void;
  onOpenBrochure: (unitId?: 'type-36-69' | 'type-45-72') => void;
}

export const Hero: React.FC<HeroProps> = ({
  onNavigate,
  onQuickInspectUnit,
  onOpenBrochure,
}) => {
  return (
    <section className="pt-20 pb-10 sm:pt-28 sm:pb-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Minimal Apple Hero Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-display text-[30px] sm:text-5xl lg:text-6xl font-semibold text-[#1d1d1f] leading-[1.1] tracking-[-0.035em]">
            Hunian Scandinavian.
            <br />
            <span className="text-[#6e6e73] font-normal">Komersil &amp; Subsidi Pilihan.</span>
          </h1>

          <p className="mt-3.5 sm:mt-5 text-xs sm:text-base text-[#6e6e73] max-w-xl mx-auto leading-relaxed">
            Persembahan <strong className="text-[#1d1d1f] font-medium">MJ Property</strong> di{' '}
            <strong className="text-[#1d1d1f] font-medium">Nol Jl. Raya Jogoroto–Peterongan, Jombang</strong>.
            Biaya mulai <strong className="text-[#1d1d1f] font-medium">1 Juta All In</strong> sampai terima kunci.
          </p>

          {/* Dual Concise Primary CTAs */}
          <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:inline-flex items-center justify-center gap-2.5">
            <button
              type="button"
              onClick={() => onNavigate('unit')}
              className="px-4 sm:px-6 py-3 rounded-full bg-[#1d1d1f] text-white text-xs sm:text-sm font-medium hover:bg-neutral-800 active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Lihat Unit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate('kpr')}
              className="px-4 sm:px-6 py-3 rounded-full bg-[#f5f5f7] text-[#1d1d1f] text-xs sm:text-sm font-medium border border-neutral-200 hover:bg-neutral-200/70 active:scale-[0.98] transition-all cursor-pointer"
            >
              Cek Kelayakan KPR
            </button>
          </div>
        </div>

        {/* Clean Single Cluster Showcase Card */}
        <div className="mt-7 sm:mt-10 rounded-3xl overflow-hidden bg-[#f5f5f7] border border-neutral-200/90 p-2 sm:p-3">
          <div className="relative rounded-2xl overflow-hidden bg-neutral-100 aspect-[16/10] sm:aspect-[16/8]">
            <img
              src="/assets/gmp-cluster-hero.webp"
              srcSet="/assets/gmp-cluster-hero-sm.webp 768w, /assets/gmp-cluster-hero.webp 1360w"
              sizes="(max-width: 768px) 100vw, 1024px"
              alt="Kawasan Griya Mayang Permai Jombang"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="px-2 sm:px-3 pt-3 pb-1 flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[#6e6e73]">
              <span className="inline-flex items-center gap-1 text-[#1d1d1f] font-medium">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                Nol Jl. Raya Jogoroto–Peterongan
              </span>
              <span className="inline-flex items-center gap-1">
                <Gift className="w-3.5 h-3.5 text-[#1d1d1f] shrink-0" />
                Bonus {COMPANY_INFO.promoBonus.join(' / ')}*
              </span>
            </div>
            <button
              type="button"
              onClick={() => onOpenBrochure('type-45-72')}
              className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#1d1d1f] bg-white px-3 py-1.5 rounded-full border border-neutral-200/90 hover:bg-neutral-50 cursor-pointer"
            >
              <FileText className="w-3 h-3" />
              Brosur Resmi
            </button>
          </div>
        </div>

        {/* 2 Compact Quick-Jump Unit Cards (Directly Opens Unit Page) */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {PROPERTY_UNITS.map((u) => (
            <button
              key={u.id}
              type="button"
              onClick={() => onQuickInspectUnit(u.id)}
              className="group text-left rounded-2xl bg-[#f5f5f7] hover:bg-neutral-200/60 border border-neutral-200/90 p-3.5 sm:p-4 flex items-center gap-3.5 transition-colors cursor-pointer"
            >
              <img
                src={u.heroImageSm}
                alt={u.name}
                width={80}
                height={64}
                loading="lazy"
                decoding="async"
                className="w-20 h-16 rounded-xl object-cover shrink-0 border border-neutral-200 bg-white"
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#6e6e73]">
                    {u.code}
                  </span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white border border-neutral-200 text-[#1d1d1f]">
                    {u.allInFee}
                  </span>
                </div>
                <p className="font-display text-sm sm:text-base font-semibold text-[#1d1d1f] truncate mt-0.5">
                  {u.name}
                </p>
                <p className="text-[11px] text-[#6e6e73] truncate">
                  {u.priceStart} · Cicilan {u.monthlyInstallment}
                </p>
              </div>
              <ChevronRight className="w-4 h-4 text-[#6e6e73] group-hover:translate-x-0.5 transition-transform shrink-0" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
