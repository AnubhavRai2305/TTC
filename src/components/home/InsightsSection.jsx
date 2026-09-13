import React from 'react';
import { InsightCard } from '../insights/InsightCard';
import { useInsights } from '../../hooks/useInsights';

export function InsightsSection() {
  const { insights } = useInsights();

  return (
    <section
      className="band band--tight"
      id="insights"
      style={{ scrollMarginTop: '68px' }}
    >
      <div className="shell">
        <div
          className="rv"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'end',
            gap: '24px',
            marginBottom: '34px',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <span className="eyebrow">Insights</span>
            <h2 className="h2--sm">What we’re working through</h2>
          </div>
        </div>

        <div className="posts rv">
          {insights.map((item) => (
            <InsightCard key={item.id} insight={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
