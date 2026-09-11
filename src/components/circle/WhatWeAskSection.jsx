import React from 'react';

export function WhatWeAskSection() {
  return (
    <section className="band">
      <div className="shell">
        <div className="split">
          <div>
            <span className="eyebrow">What we ask</span>
            <h3 style={{ marginBottom: '18px' }}>Twelve months of real weight</h3>
            <p>
              Real access, real time, and real weight on the decisions. Honest
              numbers, including the ones that embarrass you. The founding team
              in the room, not a representative.
            </p>
          </div>
          <div>
            <span className="eyebrow">What this is not</span>
            <h3 style={{ marginBottom: '18px' }}>Not a programme in the usual sense</h3>
            <p>
              Not workshops. Not sessions. Not a certificate. We are not here to
              teach anyone their business. We are here to build the layer
              underneath it.
            </p>
          </div>
        </div>
        <hr className="rule" style={{ margin: '44px auto 0' }} />
        <p className="lede" style={{ maxWidth: 'none', textAlign: 'center', marginTop: '24px' }}>
          The founders get the same from us.
        </p>
      </div>
    </section>
  );
}
