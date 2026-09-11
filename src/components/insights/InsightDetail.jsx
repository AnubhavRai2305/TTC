import React from 'react';
import { Link } from 'react-router-dom';

export function InsightDetail({ insight }) {
  if (!insight) {
    return (
      <div className="shell band">
        <p>Insight piece not found.</p>
        <Link to="/#insights" className="txtlink">
          &larr; Back to Insights
        </Link>
      </div>
    );
  }

  return (
    <article>
      <section className="hero">
        <div className="hero__art" aria-hidden="true">
          <i></i>
          <i></i>
        </div>
        <div className="shell hero__in">
          <span className="eyebrow eyebrow--light">{insight.category}</span>
          <h1>{insight.title}</h1>
          <p className="lede">{insight.excerpt}</p>
          <span className="hero__status">
            {insight.publishedAt} &middot; {insight.readTime} &middot; By{' '}
            {insight.author}
          </span>
        </div>
      </section>

      <section className="band">
        <div className="shell">
          <div className="prose">
            {insight.content.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}

            <hr className="rule" style={{ margin: '48px 0 24px' }} />

            <div className="btn-row">
              <Link to="/#insights" className="txtlink">
                &larr; Back to all insights
              </Link>
              <Link to="/contact" className="txtlink" style={{ marginLeft: '24px' }}>
                Speak with us &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
