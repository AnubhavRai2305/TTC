import React from 'react';
import { Navbar } from '../components/common/Navbar';
import { Footer } from '../components/common/Footer';
import { SkipLink } from '../components/common/SkipLink';
import { LegalLayout } from '../components/legal/LegalLayout';

export function DisclosuresPage() {
  return (
    <div className="page--inner">
      <SkipLink />
      <Navbar isHome={false} />
      <main id="main">
        <LegalLayout eyebrow="Legal" title="Disclosures">
          <h2>No offer or solicitation</h2>
          <p>
            Nothing on this website constitutes an offer to sell or a
            solicitation of an offer to buy any security or interest in any fund
            or investment vehicle managed or advised by Tier Two Capital. Any
            such offer will be made only through definitive offering documents,
            to eligible investors, in accordance with applicable law.
          </p>

          <h2>Qualified investors</h2>
          <p>
            Detailed information regarding our investment vehicles, including
            fund materials, is made available privately and only to investors
            who meet applicable eligibility requirements, on request.
          </p>

          <h2>No performance representation</h2>
          <p>
            References on this website to portfolio companies, programmes or
            engagements describe operating work and are not representations of
            investment performance. Past activity is not indicative of future
            results.
          </p>

          <h2>Related parties</h2>
          <p>
            Companies described on this website, including participants in the 1
            Cr. Circle, may be current or prospective counterparties, portfolio
            companies or related parties of Tier Two Capital or its principals.
            Specific relationships will be disclosed in offering documents where
            required.
          </p>

          <h2>Forward-looking statements</h2>
          <p>
            Statements about plans, targets and expectations are
            forward-looking, are subject to change without notice, and involve
            risks and uncertainties that could cause actual outcomes to differ
            materially.
          </p>
        </LegalLayout>
      </main>
      <Footer />
    </div>
  );
}
