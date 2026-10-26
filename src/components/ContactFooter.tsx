import React from 'react';
import { PhoneCall, MapPin, ArrowUpRight, MessageCircle } from 'lucide-react';
import { COMPANY_INFO, MARKETING_CONTACTS } from '../data/propertyData';

interface ContactSectionProps {
  onOpenModal: (defaultUnit?: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenModal }) => {
  return (
    <section id="kontak" className="pt-20 pb-12 sm:pt-28 sm:pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-[#f5f5f7] border border-neutral-200 text-[11px] font-semibold tracking-wider uppercase text-[#1d1d1f]">
              HUBUNGI KAMI · OFFICIAL MARKETING TEAM
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-5xl font-semibold text-[#1d1d1f] leading-[1.1]">
              Siap survei lokasi hari ini?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#6e6e73]">
              Konsultasikan pilihan Rumah Subsidi atau Rumah Komersil langsung bersama kantor resmi
              maupun tim konsultan MJ Property Jombang.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenModal()}
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#1d1d1f] text-white text-xs font-medium hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            Atur Jadwal Kunjungan Lokasi
          </button>
        </div>

        {/* 4 Official Contacts from Brochure (Office, Cheril, Rafita, Chandra) */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {MARKETING_CONTACTS.map((contact) => (
            <a
              key={contact.waNumber}
              href={`https://wa.me/${contact.waNumber}?text=${encodeURIComponent(
                `Halo ${contact.name} (MJ Property), saya tertarik dengan unit Griya Mayang Permai Jombang (Nol Jl. Raya Jogoroto-Peterongan). Mohon info detailnya.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`group rounded-3xl p-5 sm:p-6 border transition-all flex flex-col justify-between ${
                contact.isOffice
                  ? 'bg-[#1d1d1f] text-white border-[#1d1d1f]'
                  : 'bg-[#f5f5f7] text-[#1d1d1f] border-neutral-200/90 hover:bg-white hover:border-neutral-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                      contact.isOffice
                        ? 'bg-white/15 text-white'
                        : 'bg-white border border-neutral-200 text-[#6e6e73]'
                    }`}
                  >
                    {contact.isOffice ? 'Office' : 'Marketing'}
                  </span>
                  <ArrowUpRight
                    className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                      contact.isOffice ? 'text-neutral-300' : 'text-[#6e6e73]'
                    }`}
                  />
                </div>

                <h3 className="mt-4 font-display text-lg sm:text-xl font-semibold">
                  {contact.name}
                </h3>
                <p
                  className={`text-xs mt-0.5 ${
                    contact.isOffice ? 'text-neutral-400' : 'text-[#6e6e73]'
                  }`}
                >
                  {contact.role}
                </p>
              </div>

              <div
                className={`mt-5 pt-4 border-t flex items-center justify-between text-xs font-mono font-medium ${
                  contact.isOffice
                    ? 'border-white/15 text-white'
                    : 'border-neutral-200/80 text-[#1d1d1f]'
                }`}
              >
                <span className="inline-flex items-center gap-1.5">
                  <MessageCircle className="w-3.5 h-3.5" />
                  {contact.phoneDisplay}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Official Social Channels & Address Card */}
        <div className="mt-8 rounded-3xl bg-[#f5f5f7] border border-neutral-200/90 p-5 sm:p-7 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-5 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#1d1d1f]">
              Kantor &amp; Lokasi Proyek
            </p>
            <div className="flex items-start gap-2 text-xs sm:text-sm text-[#1d1d1f]">
              <MapPin className="w-4 h-4 text-[#6e6e73] shrink-0 mt-0.5" />
              <span>{COMPANY_INFO.address}</span>
            </div>
            <p className="text-xs text-[#6e6e73]">
              Buka setiap hari untuk survei lokasi &amp; konsultasi berkas KPR.
            </p>
          </div>

          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
            <a
              href={`https://www.instagram.com/${COMPANY_INFO.socials.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-2.5 px-3.5 rounded-xl bg-white border border-neutral-200/80 text-[#1d1d1f] hover:border-neutral-300"
            >
              <span>Instagram</span>
              <span className="font-mono text-[#6e6e73]">@{COMPANY_INFO.socials.instagram}</span>
            </a>
            <a
              href={`https://www.tiktok.com/@${COMPANY_INFO.socials.tiktok}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-2.5 px-3.5 rounded-xl bg-white border border-neutral-200/80 text-[#1d1d1f] hover:border-neutral-300"
            >
              <span>TikTok</span>
              <span className="font-mono text-[#6e6e73]">@{COMPANY_INFO.socials.tiktok}</span>
            </a>
            <div className="flex items-center justify-between py-2.5 px-3.5 rounded-xl bg-white border border-neutral-200/80 text-[#1d1d1f]">
              <span>Facebook</span>
              <span className="font-mono text-[#6e6e73]">{COMPANY_INFO.socials.facebook}</span>
            </div>
            <a
              href={`https://wa.me/${COMPANY_INFO.socials.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-2.5 px-3.5 rounded-xl bg-white border border-neutral-200/80 text-[#1d1d1f] hover:border-neutral-300"
            >
              <span className="inline-flex items-center gap-1.5">
                <PhoneCall className="w-3.5 h-3.5" /> Office
              </span>
              <span className="font-mono text-[#1d1d1f] font-semibold">
                {COMPANY_INFO.socials.whatsappDisplay}
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export const MiniFooter: React.FC = () => {
  return (
    <footer className="bg-[#f5f5f7] border-t border-neutral-200/80 pt-5 pb-22 md:pb-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-[#6e6e73] text-center sm:text-left">
        <div className="flex items-center gap-2">
          <img
            src="/assets/mj-logo-mark.webp"
            alt="MJ Property"
            width={20}
            height={20}
            loading="lazy"
            decoding="async"
            className="w-5 h-5 object-contain"
          />
          <span>
            <strong className="text-[#1d1d1f] font-medium">{COMPANY_INFO.developerName}</strong> ·{' '}
            {COMPANY_INFO.clusterName} Jombang
          </span>
        </div>
        <p>{COMPANY_INFO.address}</p>
      </div>
    </footer>
  );
};
