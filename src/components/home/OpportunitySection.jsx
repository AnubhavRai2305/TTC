import React from 'react';
import { siteContent } from '../../data/siteContent';
import biharInfraImage from '../../assets/images/bihar-infrastructure.jpg';

export function OpportunitySection() {
  const { opportunity } = siteContent;

  return (
    <section className="band" id="approach" style={{ scrollMarginTop: '68px' }}>
      <div className="shell">
        <div
          className="split"
          style={{ alignItems: 'center', marginBottom: 'clamp(40px, 4.6vw, 64px)' }}
        >
          <div className="rv">
            <span className="eyebrow">{opportunity.eyebrow}</span>
            <h2>{opportunity.title}</h2>
            <hr className="rule" />
            <p className="lede">{opportunity.lede}</p>
          </div>
          <div className="rv">
            <figure className="photo">
              <div className="photo__frame photo__frame--wide">
                <img src={biharInfraImage} alt={opportunity.photoAlt} />
              </div>
            </figure>
          </div>
        </div>

        <div className="grid grid--3 rv">
          {opportunity.stats.map((st, idx) => (
            <div className="stat" key={idx}>
              <span className="stat__n">{st.number}</span>
              <span className="stat__l">{st.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
