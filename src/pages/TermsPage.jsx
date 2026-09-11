import React from 'react';
import { Navbar } from '../components/common/Navbar';
import { Footer } from '../components/common/Footer';
import { SkipLink } from '../components/common/SkipLink';
import { LegalLayout } from '../components/legal/LegalLayout';

export function TermsPage() {
  return (
    <div className="page--inner">
      <SkipLink />
      <Navbar isHome={false} />
      <main id="main">
        <LegalLayout eyebrow="Legal" title="Terms of use">
          <h2>Acceptance</h2>
          <p>
            By accessing this website you agree to these terms of use. If you do
            not agree, please do not use the site.
          </p>

          <h2>Informational purpose only</h2>
          <p>
            The content of this website is provided for general information
            about Tier Two Capital and its activities. It does not constitute
            investment, legal, tax or other professional advice, and it does not
            constitute an offer to sell or a solicitation of an offer to buy any
            security or interest in any fund.
          </p>

          <h2>Intellectual property</h2>
          <p>
            All content on this website &mdash; text, graphics, logos and
            design &mdash; is the property of Tier Two Capital or its licensors
            and may not be reproduced without prior written permission, except
            for personal, non-commercial reference.
          </p>

          <h2>No warranties; limitation of liability</h2>
          <p>
            The website is provided on an &ldquo;as is&rdquo; basis. While we
            take care to keep information accurate and current, we make no
            warranties as to its completeness or accuracy, and we accept no
            liability for loss arising from reliance on it.
          </p>

          <h2>Third-party links</h2>
          <p>
            Links to third-party websites are provided for convenience. We are
            not responsible for their content or practices.
          </p>

          <h2>Governing law</h2>
          <p>
            These terms are governed by the laws of India. Courts at Patna,
            Bihar shall have exclusive jurisdiction.
          </p>
        </LegalLayout>
      </main>
      <Footer />
    </div>
  );
}
