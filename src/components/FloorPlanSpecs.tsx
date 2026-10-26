import React, { useState } from 'react';
import { Layers, FileText, CheckCircle2, Info } from 'lucide-react';
import { PROPERTY_UNITS, RoomZone } from '../data/propertyData';

interface FloorPlanSpecsProps {
  activeUnitId: 'type-36-69' | 'type-45-72';
  onChangeUnit: (unitId: 'type-36-69' | 'type-45-72') => void;
  onOpenBrochure: (unitId: 'type-36-69' | 'type-45-72') => void;
  onGoToSimulator: () => void;
}

export const FloorPlanSpecs: React.FC<FloorPlanSpecsProps> = ({
  activeUnitId,
  onChangeUnit,
  onOpenBrochure,
  onGoToSimulator,
}) => {
  const unit = PROPERTY_UNITS.find((u) => u.id === activeUnitId) || PROPERTY_UNITS[1];
  const [hoveredRoom, setHoveredRoom] = useState<RoomZone | null>(null);

  const scale = 44;
  const svgW = unit.lotWidthM * scale;
  const svgH = unit.lotLengthM * scale;

  const getRoomFill = (tone: RoomZone['tone'], isActive: boolean) => {
    if (isActive) return '#1d1d1f';
    switch (tone) {
      case 'indoor':
        return '#ffffff';
      case 'wet':
        return '#f0f2f5';
      case 'outdoor':
        return '#eef5ee';
      case 'carport':
        return '#f5f5f7';
    }
  };

  return (
    <section id="spesifikasi" className="pt-6 pb-12 sm:pt-10 sm:pb-20 bg-[#f5f5f7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Unit Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-white border border-neutral-200 text-[11px] font-semibold tracking-wider uppercase text-[#1d1d1f]">
              DENAH ARSITEKTUR &amp; SPESIFIKASI TEKNIS
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-5xl font-semibold text-[#1d1d1f] leading-[1.1]">
              Presisi di setiap meter persegi.
            </h2>
          </div>

          {/* Mobile-Safe Segmented Unit Selector */}
          <div className="w-full md:w-auto overflow-x-auto no-scrollbar">
            <div className="inline-flex items-center p-1 rounded-full bg-white border border-neutral-200/90 min-w-max">
              {PROPERTY_UNITS.map((item) => {
                const active = item.id === activeUnitId;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onChangeUnit(item.id);
                      setHoveredRoom(null);
                    }}
                    className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                      active
                        ? 'bg-[#1d1d1f] text-white'
                        : 'text-[#6e6e73] hover:text-[#1d1d1f]'
                    }`}
                  >
                    {item.code} ({item.landDimension})
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Content Grid: Left Interactive 2D Blueprint, Right Technical Specs */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Left: Interactive 2D CAD Blueprint */}
          <div className="lg:col-span-6 bg-white rounded-3xl border border-neutral-200/90 p-5 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 sm:pb-5 border-b border-neutral-100">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1d1d1f]">
                  <Layers className="w-4 h-4" />
                  Denah Tata Ruang {unit.code}
                </div>
                <p className="text-[11px] sm:text-xs text-[#6e6e73] mt-0.5">
                  Kavling {unit.landDimension} · Sentuh ruangan untuk ukuran detail
                </p>
              </div>
              <button
                onClick={() => onOpenBrochure(unit.id)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f5f5f7] hover:bg-neutral-200/70 text-xs font-medium text-[#1d1d1f] transition-colors cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                Denah Brosur Asli
              </button>
            </div>

            {/* Interactive SVG Floor Plan */}
            <div className="mt-5 sm:mt-6 flex flex-col items-center">
              <div className="w-full max-w-[330px] mx-auto bg-[#fafafa] rounded-2xl border border-neutral-200/80 p-4 sm:p-5">
                <div className="flex items-center justify-between text-[10px] font-mono text-[#6e6e73] mb-2 px-1">
                  <span>├─── 3.00 m ───┼─── 3.00 m ───┤</span>
                  <span className="font-semibold text-[#1d1d1f]">L: 6.00 m</span>
                </div>

                <svg
                  viewBox={`-4 -4 ${svgW + 8} ${svgH + 8}`}
                  className="w-full h-auto select-none"
                  role="img"
                  aria-label={`Denah 2D ${unit.code}`}
                >
                  {unit.rooms.map((room) => {
                    const isHovered = hoveredRoom?.id === room.id;
                    const rx = room.x * scale;
                    const ry = room.y * scale;
                    const rw = room.w * scale;
                    const rh = room.h * scale;

                    return (
                      <g
                        key={room.id}
                        onMouseEnter={() => setHoveredRoom(room)}
                        onMouseLeave={() => setHoveredRoom(null)}
                        onClick={() => setHoveredRoom(room)}
                        className="cursor-pointer"
                      >
                        <rect
                          x={rx}
                          y={ry}
                          width={rw}
                          height={rh}
                          rx={3}
                          fill={getRoomFill(room.tone, isHovered)}
                          stroke={isHovered ? '#1d1d1f' : '#2c2c2e'}
                          strokeWidth={isHovered ? 2.2 : 1.4}
                        />
                        <text
                          x={rx + rw / 2}
                          y={ry + rh / 2 - 4}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          fill={isHovered ? '#ffffff' : '#1d1d1f'}
                          fontSize="9.5"
                          fontWeight="600"
                        >
                          {room.name}
                        </text>
                        <text
                          x={rx + rw / 2}
                          y={ry + rh / 2 + 9}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          fill={isHovered ? '#d1d1d6' : '#6e6e73'}
                          fontSize="7.8"
                          fontFamily="monospace"
                        >
                          {room.elevation}
                        </text>
                      </g>
                    );
                  })}
                </svg>

                <div className="mt-3 pt-2 border-t border-dashed border-neutral-300 flex items-center justify-between text-[10px] font-mono text-[#6e6e73]">
                  <span>▲ ARAH DEPAN FASAD</span>
                  <span>P: {unit.lotLengthM.toFixed(2)} m</span>
                </div>
              </div>

              {/* Active Room Detail Pill */}
              <div className="mt-4 w-full rounded-2xl bg-[#f5f5f7] border border-neutral-200/80 px-4 py-3 flex items-center justify-between gap-2 text-xs">
                {hoveredRoom ? (
                  <>
                    <div>
                      <span className="font-semibold text-[#1d1d1f]">{hoveredRoom.name}</span>
                      <span className="text-[#6e6e73] ml-2">({hoveredRoom.elevation})</span>
                    </div>
                    <span className="font-mono font-semibold text-[#1d1d1f] shrink-0">
                      {hoveredRoom.dimension}
                    </span>
                  </>
                ) : (
                  <div className="flex items-center gap-2 text-[#6e6e73]">
                    <Info className="w-3.5 h-3.5 text-[#1d1d1f] shrink-0" />
                    <span>Sentuh / klik area ruangan pada denah untuk melihat ukuran detail.</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right: Full Technical Specification Table */}
          <div className="lg:col-span-6 bg-white rounded-3xl border border-neutral-200/90 p-5 sm:p-8">
            <div className="pb-4 sm:pb-5 border-b border-neutral-100 flex items-center justify-between gap-2">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[#6e6e73]">
                  {unit.schemeLabel}
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#1d1d1f] mt-0.5">
                  Spesifikasi Material {unit.code}
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-[#f5f5f7] border border-neutral-200 text-xs font-semibold text-[#1d1d1f] shrink-0">
                LB {unit.buildingArea} / LT {unit.landArea}
              </span>
            </div>

            <div className="mt-3 sm:mt-4 divide-y divide-neutral-100">
              {unit.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="py-3 sm:py-3.5 flex items-center justify-between gap-4 text-xs sm:text-sm"
                >
                  <span className="text-[#6e6e73]">{spec.label}</span>
                  <span
                    className={`font-medium text-right inline-flex items-center gap-1.5 ${
                      spec.highlight ? 'text-[#1d1d1f] font-semibold' : 'text-[#1d1d1f]'
                    }`}
                  >
                    {spec.highlight && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />}
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-[#f5f5f7] border border-neutral-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold text-[#1d1d1f]">
                  {unit.allInFee} — Sampai Serah Terima Kunci
                </p>
                <p className="text-xs text-[#6e6e73] mt-0.5">
                  {unit.priceStart} · Angsuran {unit.monthlyInstallment}
                </p>
              </div>
              <button
                type="button"
                onClick={onGoToSimulator}
                className="px-4 py-2.5 sm:py-2 rounded-full bg-[#1d1d1f] text-white text-xs font-medium text-center hover:bg-neutral-800 transition-colors shrink-0 cursor-pointer"
              >
                Hitung Cicilan →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
