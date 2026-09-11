import React from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../../data/siteContent';
import { ProofBar } from './ProofBar';

export function HomeHero() {
  const { brand } = siteContent;

  return (
    <section className="hero hero--home">
      <div className="hero__art" aria-hidden="true">
        <svg className="hero__motif" viewBox="0 0 320 320" fill="none">
          <path d="M320 0 L320 218 L102 218 Z" fill="#26406E" opacity="0.62" />
          <path d="M320 218 L320 292 L246 292 Z" fill="#B7975A" opacity="0.82" />
        </svg>
      </div>
      <div className="shell hero__in">
        <span className="eyebrow eyebrow--light">{brand.fundEyebrow}</span>
        <h1>{brand.heroHeadline}</h1>
        <p className="lede">{brand.heroLede}</p>
        <div className="btn-row">
          <Link to="/contact" className="btn btn--onnavy">
            Request the fund overview
          </Link>
        </div>
      </div>
      <ProofBar />
    </section>
  );
}
