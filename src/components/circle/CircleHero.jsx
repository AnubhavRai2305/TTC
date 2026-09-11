import React from 'react';

export function CircleHero() {
  return (
    <section className="hero">
      <div className="hero__art" aria-hidden="true">
        <i></i>
        <i></i>
      </div>
      <div className="shell hero__in">
        <span className="eyebrow eyebrow--light">
          The operating layer, in the field
        </span>
        <h1>The 1 Cr. Circle</h1>
        <p className="lede">
          Eight companies, each past ₹1 crore in annual revenue, each twelve
          months into an engagement with us. This is the layer being built one
          company at a time &mdash; before the fund, and so that the fund is
          possible.
        </p>
        <span className="hero__status">
          Cohort One &middot; 2026 &middot; engagements running
        </span>
      </div>
    </section>
  );
}
