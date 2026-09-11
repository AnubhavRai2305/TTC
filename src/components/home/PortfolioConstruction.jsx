import React from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../../data/siteContent';

export function PortfolioConstruction() {
  const { portfolioConstruction } = siteContent;

  return (
    <section className="band">
      <div className="shell">
        <div className="band__head rv">
          <span className="eyebrow">{portfolioConstruction.eyebrow}</span>
          <h2>{portfolioConstruction.title}</h2>
        </div>

        <div className="grid grid--4">
          {portfolioConstruction.principles.map((pr, idx) => (
            <article className="card rv" key={idx}>
              <h3>{pr.title}</h3>
              <p>{pr.description}</p>
            </article>
          ))}
        </div>

        <div
          className="split rv"
          style={{ marginTop: 'clamp(46px, 5vw, 72px)', alignItems: 'center' }}
        >
          <div>
            <span className="eyebrow">
              {portfolioConstruction.allocatorQuestion.eyebrow}
            </span>
            <h2 className="h2--sm">
              {portfolioConstruction.allocatorQuestion.title}
            </h2>
          </div>
          <div>
            <p>{portfolioConstruction.allocatorQuestion.paragraph}</p>
            <div className="btn-row" style={{ marginTop: '20px' }}>
              <Link
                to={`/insights/${portfolioConstruction.allocatorQuestion.linkSlug}`}
                className="txtlink"
              >
                Read: <em>Where will Bihar’s first exits come from?</em> &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
