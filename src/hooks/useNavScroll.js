import { useState, useEffect } from 'react';

/**
 * Hook to monitor window scroll for sticking the homepage navbar
 * and managing mobile drawer open/close state.
 */
export function useNavScroll(isHome = false) {
  const [isStuck, setIsStuck] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    if (!isHome || typeof window === 'undefined') return;

    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsStuck(true);
      } else {
        setIsStuck(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHome]);

  const toggleMobile = () => {
    setIsMobileOpen((prev) => !prev);
  };

  const closeMobile = () => {
    setIsMobileOpen(false);
  };

  return {
    isStuck,
    isMobileOpen,
    toggleMobile,
    closeMobile,
  };
}
