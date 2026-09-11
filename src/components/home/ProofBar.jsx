import React from 'react';
import { siteContent } from '../../data/siteContent';

export function ProofBar() {
  const { proofBar } = siteContent;

  return (
    <div className="shell">
      <div className="proof">
        {proofBar.map((item, idx) => (
          <div className="proof__i" key={idx}>
            <span className="proof__n">{item.number}</span>
            <span className="proof__l">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
