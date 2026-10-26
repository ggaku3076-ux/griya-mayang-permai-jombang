import React, { useState, useEffect } from 'react';
import { useLenis, scrollToTopInstant } from './hooks/useLenis';
import { Navbar, NavPage } from './components/Navbar';
import { Hero } from './components/Hero';
import { CompanyProfile } from './components/CompanyProfile';
import { UnitCatalog } from './components/UnitCatalog';
import { FloorPlanSpecs } from './components/FloorPlanSpecs';
import { PromoLocation } from './components/PromoLocation';
import { KprQuestionnaire } from './components/KprQuestionnaire';
import { KprSimulator } from './components/KprSimulator';
import { ContactSection, MiniFooter } from './components/ContactFooter';
import { SurveyModal, BrochureModal } from './components/Modals';

const VALID_PAGES: NavPage[] = ['beranda', 'unit', 'kpr', 'profil', 'kontak'];

const getInitialPage = (): NavPage => {
  const raw = window.location.hash.replace('#', '') as NavPage;
  return VALID_PAGES.includes(raw) ? raw : 'beranda';
};

export const App: React.FC = () => {
  useLenis();

  const [activePage, setActivePage] = useState<NavPage>(getInitialPage);
  const [unitSubTab, setUnitSubTab] = useState<'katalog' | 'denah'>('katalog');
  const [kprSubTab, setKprSubTab] = useState<'kuisioner' | 'simulasi'>('kuisioner');
  const [profilSubTab, setProfilSubTab] = useState<'lokasi' | 'developer'>('lokasi');

  const [surveyOpen, setSurveyOpen] = useState(false);
  const [selectedModalUnit, setSelectedModalUnit] = useState<string | undefined>(undefined);

  const [activeSpecUnit, setActiveSpecUnit] = useState<'type-36-69' | 'type-45-72'>('type-45-72');
  const [brochureOpen, setBrochureOpen] = useState(false);
  const [brochureUnit, setBrochureUnit] = useState<'type-36-69' | 'type-45-72'>('type-45-72');

  useEffect(() => {
    const onHashChange = () => {
      const next = getInitialPage();
      setActivePage(next);
      scrollToTopInstant();
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigateTo = (page: NavPage) => {
    setActivePage(page);
    if (window.location.hash !== `#${page}`) {
      window.history.pushState(null, '', `#${page}`);
    }
    scrollToTopInstant();
  };

  const handleOpenSurvey = (defaultUnit?: string) => {
    setSelectedModalUnit(defaultUnit);
    setSurveyOpen(true);
  };

  const handleOpenBrochure = (unitId: 'type-36-69' | 'type-45-72' = 'type-45-72') => {
    setBrochureUnit(unitId);
    setBrochureOpen(true);
  };

  const handleInspectSpecs = (unitId: 'type-36-69' | 'type-45-72') => {
    setActiveSpecUnit(unitId);
    setUnitSubTab('denah');
    navigateTo('unit');
  };

  const handleQuickInspectFromHome = (unitId: 'type-36-69' | 'type-45-72') => {
    setActiveSpecUnit(unitId);
    setUnitSubTab('katalog');
    navigateTo('unit');
  };

  const handleGoToSimulator = () => {
    setKprSubTab('simulasi');
    navigateTo('kpr');
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-[#1d1d1f]">
      {/* Top Blurred Multi-Navbar + Mobile Bottom Apple Tab Bar */}
      <Navbar
        activePage={activePage}
        onNavigate={navigateTo}
        onOpenModal={handleOpenSurvey}
      />

      <main className="flex-1">
        {/* 1. BERANDA (Concise Minimalist Homepage) */}
        {activePage === 'beranda' && (
          <Hero
            onNavigate={navigateTo}
            onQuickInspectUnit={handleQuickInspectFromHome}
            onOpenBrochure={handleOpenBrochure}
          />
        )}

        {/* 2. UNIT & DENAH (With Clean Sub-Navbar Switcher) */}
        {activePage === 'unit' && (
          <div className="pt-18 sm:pt-22">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-1 flex items-center justify-center">
              <div className="inline-flex items-center p-1 rounded-full bg-[#f5f5f7] border border-neutral-200/90 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => {
                    setUnitSubTab('katalog');
                    scrollToTopInstant();
                  }}
                  className={`flex-1 sm:flex-initial px-5 py-2 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                    unitSubTab === 'katalog'
                      ? 'bg-[#1d1d1f] text-white'
                      : 'text-[#6e6e73] hover:text-[#1d1d1f]'
                  }`}
                >
                  Katalog Unit
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setUnitSubTab('denah');
                    scrollToTopInstant();
                  }}
                  className={`flex-1 sm:flex-initial px-5 py-2 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                    unitSubTab === 'denah'
                      ? 'bg-[#1d1d1f] text-white'
                      : 'text-[#6e6e73] hover:text-[#1d1d1f]'
                  }`}
                >
                  Denah 2D &amp; Spek
                </button>
              </div>
            </div>

            {unitSubTab === 'katalog' ? (
              <UnitCatalog
                onSelectUnitForModal={handleOpenSurvey}
                onInspectSpecs={handleInspectSpecs}
                onOpenBrochure={handleOpenBrochure}
              />
            ) : (
              <FloorPlanSpecs
                activeUnitId={activeSpecUnit}
                onChangeUnit={setActiveSpecUnit}
                onOpenBrochure={handleOpenBrochure}
                onGoToSimulator={handleGoToSimulator}
              />
            )}
          </div>
        )}

        {/* 3. KUISIONER & KPR (With Clean Sub-Navbar Switcher) */}
        {activePage === 'kpr' && (
          <div className="pt-18 sm:pt-22">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-1 flex items-center justify-center">
              <div className="inline-flex items-center p-1 rounded-full bg-[#f5f5f7] border border-neutral-200/90 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => {
                    setKprSubTab('kuisioner');
                    scrollToTopInstant();
                  }}
                  className={`flex-1 sm:flex-initial px-5 py-2 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                    kprSubTab === 'kuisioner'
                      ? 'bg-[#1d1d1f] text-white'
                      : 'text-[#6e6e73] hover:text-[#1d1d1f]'
                  }`}
                >
                  Kuisioner Kelayakan
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setKprSubTab('simulasi');
                    scrollToTopInstant();
                  }}
                  className={`flex-1 sm:flex-initial px-5 py-2 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                    kprSubTab === 'simulasi'
                      ? 'bg-[#1d1d1f] text-white'
                      : 'text-[#6e6e73] hover:text-[#1d1d1f]'
                  }`}
                >
                  Kalkulator Cicilan
                </button>
              </div>
            </div>

            {kprSubTab === 'kuisioner' ? <KprQuestionnaire /> : <KprSimulator />}
          </div>
        )}

        {/* 4. PROFIL & LOKASI (With Clean Sub-Navbar Switcher) */}
        {activePage === 'profil' && (
          <div className="pt-18 sm:pt-22">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-1 flex items-center justify-center">
              <div className="inline-flex items-center p-1 rounded-full bg-[#f5f5f7] border border-neutral-200/90 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => {
                    setProfilSubTab('lokasi');
                    scrollToTopInstant();
                  }}
                  className={`flex-1 sm:flex-initial px-5 py-2 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                    profilSubTab === 'lokasi'
                      ? 'bg-[#1d1d1f] text-white'
                      : 'text-[#6e6e73] hover:text-[#1d1d1f]'
                  }`}
                >
                  Lokasi &amp; Promo
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setProfilSubTab('developer');
                    scrollToTopInstant();
                  }}
                  className={`flex-1 sm:flex-initial px-5 py-2 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                    profilSubTab === 'developer'
                      ? 'bg-[#1d1d1f] text-white'
                      : 'text-[#6e6e73] hover:text-[#1d1d1f]'
                  }`}
                >
                  Profil MJ Property
                </button>
              </div>
            </div>

            {profilSubTab === 'lokasi' ? (
              <PromoLocation onOpenModal={handleOpenSurvey} />
            ) : (
              <CompanyProfile />
            )}
          </div>
        )}

        {/* 5. KONTAK (Official Marketing Team & Social Channels) */}
        {activePage === 'kontak' && <ContactSection onOpenModal={handleOpenSurvey} />}
      </main>

      {/* Ultra-Compact Minimal Footer (Safe clearance for Mobile Bottom Tab Bar) */}
      <MiniFooter />

      {/* Interactive Modals */}
      <SurveyModal
        isOpen={surveyOpen}
        onClose={() => setSurveyOpen(false)}
        defaultUnit={selectedModalUnit}
      />
      <BrochureModal
        isOpen={brochureOpen}
        unitId={brochureUnit}
        onChangeUnit={setBrochureUnit}
        onClose={() => setBrochureOpen(false)}
      />
    </div>
  );
};

export default App;
