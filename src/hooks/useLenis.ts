import { useEffect } from 'react';
import Lenis from 'lenis';

let globalLenis: Lenis | null = null;

export const scrollToTopInstant = () => {
  if (globalLenis) {
    globalLenis.scrollTo(0, { immediate: true });
  }
  window.scrollTo({ top: 0, behavior: 'auto' });
};

export const scrollToSection = (href: string) => {
  const el = document.querySelector(href);
  if (!el) return;

  if (globalLenis) {
    globalLenis.scrollTo(el as HTMLElement, { offset: -72, duration: 0.9 });
  } else {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export const useLenis = () => {
  useEffect(() => {
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isTouchDevice || prefersReducedMotion) {
      globalLenis = null;
      return;
    }

    const lenis = new Lenis({
      lerp: 0.11,
      orientation: 'vertical',
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 0.95,
    });

    globalLenis = lenis;
    let rafId = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    const handleVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(rafId);
      } else {
        rafId = requestAnimationFrame(raf);
      }
    };

    rafId = requestAnimationFrame(raf);
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibility);
      cancelAnimationFrame(rafId);
      lenis.destroy();
      globalLenis = null;
    };
  }, []);
};
