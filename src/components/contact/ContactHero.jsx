import React from 'react';
import { speakWithUsData } from '../../data/speakWithUsData';

export function ContactHero() {
  const { hero } = speakWithUsData;

  return (
    <section className="hero">
      <div className="hero__art" aria-hidden="true">
        <i></i>
        <i></i>
      </div>
      <div className="shell hero__in">
        <span className="eyebrow eyebrow--light">{hero.eyebrow}</span>
        <h1>{hero.title}</h1>
        <p className="lede">{hero.lede}</p>
      </div>
    </section>
  );
}
