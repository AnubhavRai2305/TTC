import React from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../../data/siteContent';
import circleLogo from '../../assets/images/circle-logo.png';

export function OriginationSection() {
  const { origination } = siteContent;

  return (
    <section className="band band--tint band--line">
      <div className="shell">
        <div className="band__head rv">
          <span className="eyebrow">{origination.eyebrow}</span>
          <h2>{origination.title}</h2>
          <hr className="rule" />

          {/* 1 Cr. Circle Programme Lockup */}
          <div className="proglogo">
            <img src={circleLogo} alt="The 1 Cr. Circle" />
            <span className="proglogo__by">
              A proprietary programme
              <br />
              of Tier Two Capital
            </span>
          </div>

          {origination.paragraphs.map((p, idx) => (
            <p key={idx}>
              {idx === 1 ? (
                <strong>
                  Selection into the Circle is not an investment commitment, and no company in it is owed one.
                </strong>
              ) : null}
              {idx === 1
                ? ' The work is to make a company investable. Whether the capital that follows is ours, another fund’s, or a bank’s is a separate decision, taken later and on its own merits.'
                : p}
            </p>
          ))}
        </div>

        <div className="grid grid--4 rv">
          {origination.stats.map((st, idx) => (
            <div className="stat" key={idx}>
              <span className="stat__n">{st.number}</span>
              <span className="stat__l">{st.label}</span>
            </div>
          ))}
        </div>

        <div className="btn-row rv">
          <Link to="/circle" className="btn btn--ghost">
            See the cohort
          </Link>
        </div>
      </div>
    </section>
  );
}
