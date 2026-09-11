import React from 'react';
import { speakWithUsData } from '../../data/speakWithUsData';

export function DirectContactInfo() {
  const { direct } = speakWithUsData;

  return (
    <div>
      <span className="eyebrow">{direct.eyebrow}</span>
      <h3 style={{ marginBottom: '18px' }}>{direct.title}</h3>
      <p>
        <a href={`mailto:${direct.email}`}>{direct.email}</a>
        <br />
        <a href={`tel:${direct.phone.replace(/\s+/g, '')}`}>{direct.phone}</a>
      </p>
      <hr className="rule" />
      <span className="eyebrow">{direct.locationEyebrow}</span>
      <p>
        {direct.locationLines.map((line, idx) => (
          <React.Fragment key={idx}>
            {line}
            {idx < direct.locationLines.length - 1 ? <br /> : null}
          </React.Fragment>
        ))}
      </p>
      <hr className="rule" />
      <p className="small">{direct.regulatoryNote}</p>
    </div>
  );
}
