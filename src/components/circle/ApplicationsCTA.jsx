import React from 'react';
import { Link } from 'react-router-dom';

export function ApplicationsCTA() {
  return (
    <section className="band band--tint band--line">
      <div className="shell">
        <div className="prose">
          <span className="eyebrow">Applications</span>
          <h2>Cohort One is closed.</h2>
          <hr className="rule" />
          <p>
            We are not taking applications. If one of these eight businesses is
            useful to you &mdash; as a customer, a distributor, a hiring
            partner, or a mentor &mdash; tell us which one and we will make the
            introduction.
          </p>
          <div className="btn-row">
            <Link to="/contact?enquiry=partner" className="btn">
              Request an introduction
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
