import React, { useState, useEffect } from 'react';
import {
  Home,
  Building2,
  ClipboardCheck,
  MapPin,
  PhoneCall,
  ArrowUpRight,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/propertyData';

export type NavPage = 'beranda' | 'unit' | 'kpr' | 'profil' | 'kontak';

interface NavbarProps {
  activePage: NavPage;
  onNavigate: (page: NavPage) => void;
  onOpenModal: (defaultUnit?: string) => void;
}

const NAV_ITEMS: { id: NavPage; label: string; mobileLabel: string; icon: React.FC<{ className?: string }> }[] = [
  { id: 'beranda', label: 'Beranda', mobileLabel: 'Beranda', icon: Home },
  { id: 'unit', label: 'Unit & Denah', mobileLabel: 'Unit', icon: Building2 },
  { id: 'kpr', label: 'Kuisioner & KPR', mobileLabel: 'Cek KPR', icon: ClipboardCheck },
  { id: 'profil', label: 'Profil & Lokasi', mobileLabel: 'Lokasi', icon: MapPin },
  { id: 'kontak', label: 'Kontak', mobileLabel: 'Kontak', icon: PhoneCall },
];

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate, onOpenModal }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 12;
          setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Top Sticky Blurred Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transform-gpu transition-colors duration-200 ${
          scrolled
            ? 'bg-white/92 backdrop-blur-md lg:backdrop-blur-xl border-b border-neutral-200/80'
            : 'bg-white/85 backdrop-blur-xs lg:backdrop-blur-md border-b border-neutral-100'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-2">
          {/* Brand Identity */}
          <button
            type="button"
            onClick={() => onNavigate('beranda')}
            className="flex items-center gap-2.5 text-left group min-w-0 cursor-pointer"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#f5f5f7] border border-neutral-200/80 flex items-center justify-center p-1 overflow-hidden shrink-0">
              <img
                src="/assets/mj-logo-mark.webp"
                alt="Logo MJ Property Jombang"
                width={36}
                height={36}
                decoding="async"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col truncate">
              <span className="font-display font-semibold text-sm text-[#1d1d1f] leading-tight truncate">
                {COMPANY_INFO.developerName}
              </span>
              <span className="text-[10px] sm:text-[11px] text-[#6e6e73] leading-tight truncate">
                {COMPANY_INFO.clusterName}
              </span>
            </div>
          </button>

          {/* Desktop Multi-Page Segmented Navbar */}
          <nav
            className="hidden md:flex items-center p-1 rounded-full bg-[#f5f5f7] border border-neutral-200/80"
            aria-label="Navigasi Utama"
          >
            {NAV_ITEMS.map((item) => {
              const active = activePage === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onNavigate(item.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                    active
                      ? 'bg-[#1d1d1f] text-white'
                      : 'text-[#6e6e73] hover:text-[#1d1d1f]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right CTA Action */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => onOpenModal()}
              className="text-[11px] sm:text-xs font-medium px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#1d1d1f] text-white hover:bg-neutral-800 active:scale-95 transition-all flex items-center gap-1 cursor-pointer"
            >
              <span>Survei Lokasi</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Multi-Navbar (Apple iOS Tab Bar Style — Clean & Ergonomic on HP) */}
      <nav
        aria-label="Navigasi Bawah Mobile"
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-neutral-200/90 transform-gpu pb-[env(safe-area-inset-bottom)]"
      >
        <div className="grid grid-cols-5 h-15 px-1">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const active = activePage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className={`flex flex-col items-center justify-center gap-1 transition-colors cursor-pointer ${
                  active ? 'text-[#1d1d1f]' : 'text-[#86868b]'
                }`}
              >
                <div
                  className={`px-3 py-0.5 rounded-full transition-colors ${
                    active ? 'bg-[#f5f5f7]' : ''
                  }`}
                >
                  <Icon className={`w-4 h-4 ${active ? 'stroke-[2.3]' : 'stroke-[1.8]'}`} />
                </div>
                <span className={`text-[10px] leading-none ${active ? 'font-semibold' : 'font-medium'}`}>
                  {item.mobileLabel}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};
