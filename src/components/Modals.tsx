import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Calendar, UserCheck } from 'lucide-react';
import { MARKETING_CONTACTS, PROPERTY_UNITS } from '../data/propertyData';

interface SurveyModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultUnit?: string;
}

export const SurveyModal: React.FC<SurveyModalProps> = ({ isOpen, onClose, defaultUnit }) => {
  const [name, setName] = useState('');
  const [selectedUnit, setSelectedUnit] = useState(
    defaultUnit || 'Type 36/69 — Program Subsidi / 1 Juta All In'
  );
  const [visitDate, setVisitDate] = useState('');
  const [consultantWa, setConsultantWa] = useState(MARKETING_CONTACTS[0].waNumber);

  useEffect(() => {
    if (defaultUnit) {
      setSelectedUnit(defaultUnit);
    }
  }, [defaultUnit]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const chosenConsultant =
      MARKETING_CONTACTS.find((c) => c.waNumber === consultantWa) || MARKETING_CONTACTS[0];
    const text = `Halo ${chosenConsultant.name} (MJ Property),%0ASaya *${
      name || 'Calon Pembeli'
    }* ingin konsultasi / jadwalkan survei ke *Griya Mayang Permai Jombang*:%0A- Minat Unit: *${selectedUnit}*%0A- Rencana Survei: *${
      visitDate || 'Segera / Minggu Ini'
    }*%0AMohon informasi ketersediaan kavling & syaratnya.`;
    window.open(`https://wa.me/${chosenConsultant.waNumber}?text=${text}`, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/45"
          data-lenis-prevent
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="w-full max-w-md max-h-[92dvh] overflow-y-auto rounded-t-3xl sm:rounded-3xl bg-white border border-neutral-200 p-5 sm:p-7 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6e6e73]">
                  GRIYA MAYANG PERMAI · JOMBANG
                </span>
                <h3 className="font-display text-xl font-semibold text-[#1d1d1f] mt-0.5">
                  Jadwalkan Survei &amp; Konsultasi
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full bg-[#f5f5f7] text-[#6e6e73] hover:text-[#1d1d1f] cursor-pointer"
                aria-label="Tutup"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <div>
                <label className="block text-xs font-medium text-[#1d1d1f] mb-1.5">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Budi Santoso"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#f5f5f7] border border-neutral-200 text-sm text-[#1d1d1f] focus:outline-none focus:border-[#1d1d1f]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#1d1d1f] mb-1.5">
                  Pilihan Hunian / Program KPR
                </label>
                <select
                  value={selectedUnit}
                  onChange={(e) => setSelectedUnit(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#f5f5f7] border border-neutral-200 text-sm text-[#1d1d1f] focus:outline-none focus:border-[#1d1d1f]"
                >
                  <option value="Program Rumah Subsidi (1 Juta All In · Angsuran 1 Jt-an)">
                    Program Rumah Subsidi (1 Juta All In · Angsuran 1 Jt-an)
                  </option>
                  <option value="Type 36/69 — Modern Scandinavian (Mulai 200 Jt-an · 1 Jt All In)">
                    Type 36/69 — Modern Scandinavian (Mulai 200 Jt-an · 1 Jt All In)
                  </option>
                  <option value="Type 45/72 — Komersil Scandinavian (Mulai 300 Jt-an · 5 Jt All In)">
                    Type 45/72 — Komersil Scandinavian (Mulai 300 Jt-an · 5 Jt All In)
                  </option>
                  <option value="Konsultasi Perbandingan KPR Subsidi & Komersil">
                    Konsultasi Perbandingan KPR Subsidi &amp; Komersil
                  </option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-[#1d1d1f] mb-1.5">
                    <Calendar className="w-3.5 h-3.5 inline mr-1" />
                    Rencana Tanggal Survei
                  </label>
                  <input
                    type="date"
                    value={visitDate}
                    onChange={(e) => setVisitDate(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#f5f5f7] border border-neutral-200 text-xs text-[#1d1d1f] focus:outline-none focus:border-[#1d1d1f]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#1d1d1f] mb-1.5">
                    <UserCheck className="w-3.5 h-3.5 inline mr-1" />
                    Pilih Konsultan Resmi
                  </label>
                  <select
                    value={consultantWa}
                    onChange={(e) => setConsultantWa(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#f5f5f7] border border-neutral-200 text-xs text-[#1d1d1f] focus:outline-none focus:border-[#1d1d1f]"
                  >
                    {MARKETING_CONTACTS.map((c) => (
                      <option key={c.waNumber} value={c.waNumber}>
                        {c.name} ({c.phoneDisplay})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3.5 px-5 rounded-full bg-[#1d1d1f] text-white text-xs font-semibold hover:bg-neutral-800 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                Lanjutkan ke WhatsApp Resmi
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

interface BrochureModalProps {
  isOpen: boolean;
  unitId: 'type-36-69' | 'type-45-72';
  onChangeUnit: (id: 'type-36-69' | 'type-45-72') => void;
  onClose: () => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({
  isOpen,
  unitId,
  onChangeUnit,
  onClose,
}) => {
  const unit = PROPERTY_UNITS.find((u) => u.id === unitId) || PROPERTY_UNITS[0];

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60"
          data-lenis-prevent
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="w-full max-w-2xl max-h-[90dvh] flex flex-col rounded-3xl bg-white border border-neutral-200 overflow-hidden shadow-2xl"
          >
            <div className="px-5 py-4 border-b border-neutral-200 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                {PROPERTY_UNITS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => onChangeUnit(item.id)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                      item.id === unitId
                        ? 'bg-[#1d1d1f] text-white'
                        : 'bg-[#f5f5f7] text-[#6e6e73] hover:text-[#1d1d1f]'
                    }`}
                  >
                    Brosur {item.code}
                  </button>
                ))}
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full bg-[#f5f5f7] text-[#6e6e73] hover:text-[#1d1d1f] cursor-pointer"
                aria-label="Tutup Brosur"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4 overflow-y-auto bg-[#f5f5f7] flex-1 flex justify-center">
              <img
                src={unit.brochureImage}
                alt={`Brosur Resmi ${unit.code} Griya Mayang Permai`}
                className="max-h-[72vh] w-auto rounded-xl border border-neutral-200 object-contain bg-white"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
