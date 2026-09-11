import { useEffect } from 'react';

/**
 * Hook to trigger reveal animations for elements with `.rv` class
 * when they intersect into the viewport.
 */
export function useScrollReveal(dependencies = []) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const items = document.querySelectorAll('.rv');

    if (
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      items.forEach((el) => el.classList.add('in'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('in');
            io.unobserve(en.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );

    items.forEach((el) => {
      if (
        el.parentElement &&
        (el.classList.contains('card') || el.classList.contains('team__i'))
      ) {
        const i = Array.prototype.indexOf.call(el.parentElement.children, el);
        el.style.transitionDelay = `${Math.min(i, 5) * 70}ms`;
      }
      io.observe(el);
    });

    return () => {
      io.disconnect();
    };
  }, dependencies);
}
