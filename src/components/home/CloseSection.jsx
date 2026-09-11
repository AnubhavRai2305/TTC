import React from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../../data/siteContent';

export function CloseSection() {
  const { close } = siteContent;

  return (
    <section className="band band--navy">
      <div className="shell">
        <div className="close rv">
          <span className="eyebrow eyebrow--light">{close.eyebrow}</span>
          <h2>{close.title}</h2>
          <p className="lede lede--light">{close.lede}</p>
          <div className="btn-row">
            <Link to={close.ctaLink} className="btn btn--onnavy">
              {close.ctaText}
            </Link>
          </div>
          <p className="close__note">{close.note}</p>
        </div>
      </div>
    </section>
  );
}
