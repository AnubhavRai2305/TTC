import React from 'react';

export function ProgrammePhases() {
  return (
    <section className="band band--tint band--line">
      <div className="shell">
        <div className="band__head">
          <span className="eyebrow">The programme</span>
          <h2>Not mentorship. We work inside the company.</h2>
        </div>
        <div className="split">
          {/* Phase 1 */}
          <div className="phase">
            <span className="phase__tag">
              Phase 1 &middot; Base Camp &middot; Day 1 to Day 60
            </span>
            <h3>Find out what they are carrying</h3>
            <p className="phase__note">Nobody climbs straight from the road.</p>
            <ul className="checklist">
              <li>
                <strong>MIS.</strong> Numbers the founder acts on weekly, not a
                file assembled when someone asks. Defined metrics, named owners,
                a fixed review day.
              </li>
              <li>
                <strong>Two-year plan.</strong> Not the optimistic version. The
                one you would defend to an investor.
              </li>
              <li>
                <strong>OKRs.</strong> Three to five outcomes per quarter, each
                with an owner and a measure.
              </li>
              <li>
                <strong>Ceiling map.</strong> The constraints actually holding
                growth back, ranked, with the first one named.
              </li>
            </ul>
            <p className="phase__exit">
              Exit criteria &mdash; both sides can state precisely what the next
              ten months are for.
            </p>
          </div>

          {/* Phase 2 */}
          <div className="phase">
            <span className="phase__tag">
              Phase 2 &middot; The Climb &middot; Month 3 to Month 12
            </span>
            <h3>Push toward the numbers</h3>
            <p className="phase__note">
              Direction is clear. Now the work starts.
            </p>
            <ul className="checklist">
              <li>
                <strong>Shared ownership.</strong> Where a function is the
                binding constraint, our team takes real responsibility for it
                alongside the founder’s, until it can stand on its own.
              </li>
              <li>
                <strong>Connections that change what is possible.</strong> A
                customer, a channel, an investor, or the hire they have been
                chasing for a year.
              </li>
              <li>
                <strong>Capital readiness.</strong> Where it fits, we prepare
                the business for outside capital and introduce it to the right
                partner. An outcome we work toward, not a guarantee.
              </li>
              <li>
                <strong>Cadence.</strong> Two working sessions a month in Base
                Camp, monthly thereafter, quarterly review against OKRs and
                projections. Direct access in between.
              </li>
            </ul>
            <p className="phase__exit">
              By month twelve &mdash; a company an investor could open the books
              on and find answers waiting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
