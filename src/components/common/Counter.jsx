import React, { useEffect, useRef, useState } from 'react';

/**
 * Parses numeric strings with optional prefixes, decimals, and suffixes.
 * Examples: '8' -> target: 8
 *           '22%' -> target: 22, suffix: '%'
 *           '<30%' -> prefix: '<', target: 30, suffix: '%'
 *           '2×' -> target: 2, suffix: '×'
 */
function parseNumberString(str) {
  const s = String(str).trim();
  const match = s.match(/^([^0-9.]*)([0-9]+(?:\.[0-9]+)?)(.*)$/);
  if (!match) return { prefix: '', target: 0, suffix: '', decimals: 0, raw: s };
  const prefix = match[1];
  const target = parseFloat(match[2]);
  const suffix = match[3];
  const decimalPart = match[2].split('.')[1];
  const decimals = decimalPart ? decimalPart.length : 0;
  return { prefix, target, suffix, decimals, raw: s };
}

export function Counter({ value, duration = 1400, className = '' }) {
  const ref = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [displayValue, setDisplayValue] = useState(() => {
    if (
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return value;
    }
    const { prefix, suffix, decimals } = parseNumberString(value);
    return `${prefix}${decimals > 0 ? (0).toFixed(decimals) : 0}${suffix}`;
  });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setDisplayValue(value);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  useEffect(() => {
    if (!hasStarted) return;

    const { prefix, target, suffix, decimals } = parseNumberString(value);
    if (isNaN(target) || target === 0) {
      setDisplayValue(value);
      return;
    }

    let startTime = null;
    let animFrameId = null;

    // Cubic ease-out: decelerates smoothly to the final value
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);

      const current = easedProgress * target;
      const formattedNumber =
        decimals > 0 ? current.toFixed(decimals) : Math.round(current);

      if (progress < 1) {
        setDisplayValue(`${prefix}${formattedNumber}${suffix}`);
        animFrameId = requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
      }
    };

    animFrameId = requestAnimationFrame(step);
    return () => {
      if (animFrameId) cancelAnimationFrame(animFrameId);
    };
  }, [hasStarted, value, duration]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}
