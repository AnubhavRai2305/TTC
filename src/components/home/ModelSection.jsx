import React from 'react';
import { siteContent } from '../../data/siteContent';

export function ModelSection() {
  const { model } = siteContent;

  const cardIcons = [
    // 01 · Assess icon
    <svg
      key="icon-1"
      className="card__icon"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      stroke="#001D51"
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="miter"
    >
      <path d="M4 3h9l7 7v11H4z" />
      <path d="M13 3l7 7h-7z" stroke="none" fill="#B7975A" />
      <path d="M8 13h8M8 17h5" />
    </svg>,
    // 02 · Build icon
    <svg
      key="icon-2"
      className="card__icon"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      stroke="#001D51"
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="miter"
    >
      <rect x="3" y="3" width="18" height="18" />
      <path d="M12 3v18M3 12h18" />
      <rect x="13" y="4" width="7" height="7" fill="#B7975A" stroke="none" />
    </svg>,
    // 03 · Operate icon
    <svg
      key="icon-3"
      className="card__icon"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      stroke="#001D51"
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="miter"
    >
      <path d="M4 20 13 11" />
      <path d="M21 3v11l-11-11z" fill="#B7975A" stroke="none" />
    </svg>,
  ];

  return (
    <section className="band band--tint band--line">
      <div className="shell">
        <div className="band__head rv">
          <span className="eyebrow">{model.eyebrow}</span>
          <h2>{model.title}</h2>
          <hr className="rule" />
          <p className="lede">{model.lede}</p>
        </div>

        <div className="grid grid--3">
          {model.cards.map((card, idx) => (
            <article className="card rv" key={idx}>
              {cardIcons[idx]}
              <span className="card__idx">{card.index}</span>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
