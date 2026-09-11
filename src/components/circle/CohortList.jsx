import React from 'react';
import { cohortData } from '../../data/cohortData';

export function CohortList() {
  const { header, companies } = cohortData;

  return (
    <section className="band band--navy">
      <div className="shell">
        <div className="band__head">
          <span className="eyebrow eyebrow--light">{header.eyebrow}</span>
          <h2>{header.title}</h2>
          <hr className="rule" />
          <p className="lede lede--light">{header.lede}</p>
        </div>

        <div className="cohort" style={{ borderColor: 'rgba(255, 255, 255, 0.16)' }}>
          {companies.map((co) => (
            <div
              className="cohort__row"
              style={{ borderColor: 'rgba(255, 255, 255, 0.16)' }}
              key={co.id}
            >
              <span className="cohort__i">{co.id}</span>
              <span className="cohort__n" style={{ color: '#fff' }}>
                {co.name}
              </span>
              <span className="cohort__d" style={{ color: '#DDE2EA' }}>
                {co.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
