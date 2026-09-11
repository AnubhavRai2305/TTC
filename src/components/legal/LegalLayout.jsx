import React from 'react';

export function LegalLayout({ eyebrow = 'Legal', title, children, lastUpdated = 'September 2026' }) {
  return (
    <>
      <section className="hero">
        <div className="hero__art" aria-hidden="true">
          <i></i>
          <i></i>
        </div>
        <div className="shell hero__in">
          <span className="eyebrow eyebrow--light">{eyebrow}</span>
          <h1>{title}</h1>
        </div>
      </section>

      <section className="band">
        <div className="shell">
          <div className="prose">
            {children}
            <p className="small" style={{ marginTop: '36px' }}>
              Last updated: {lastUpdated}. This document is a standard draft for
              review by counsel before launch.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
