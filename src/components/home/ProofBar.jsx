import React from 'react';
import { siteContent } from '../../data/siteContent';
import { Counter } from '../common/Counter';

export function ProofBar() {
  const { proofBar } = siteContent;

  return (
    <div className="shell">
      <div className="proof">
        {proofBar.map((item, idx) => (
          <div className="proof__i" key={idx}>
            <Counter className="proof__n" value={item.number} />
            <span className="proof__l">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
