import React from 'react';
import { Link } from 'react-router-dom';

export function InsightCard({ insight }) {
  return (
    <Link to={`/insights/${insight.slug}`} className="post">
      <span className="post__k">{insight.category}</span>
      <h3>{insight.title}</h3>
      <p>{insight.excerpt}</p>
    </Link>
  );
}
