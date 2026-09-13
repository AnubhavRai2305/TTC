import React from 'react';

export function InsightCard({ insight }) {
  return (
    <a
      href={insight.link}
      target="_blank"
      rel="noopener noreferrer"
      className="post"
      aria-label={`${insight.title} (opens in LinkedIn)`}
    >
      {insight.image && (
        <div className="post__frame">
          <img src={insight.image} alt={insight.title} loading="lazy" />
        </div>
      )}
      <span className="post__k">{insight.category}</span>
      <h3>{insight.title}</h3>
      <p>{insight.excerpt}</p>
      <span className="post__more">
        Read on LinkedIn &rarr;
      </span>
    </a>
  );
}
