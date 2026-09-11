import React from 'react';
import { Navbar } from '../components/common/Navbar';
import { Footer } from '../components/common/Footer';
import { SkipLink } from '../components/common/SkipLink';
import { LegalLayout } from '../components/legal/LegalLayout';

export function PrivacyPage() {
  return (
    <div className="page--inner">
      <SkipLink />
      <Navbar isHome={false} />
      <main id="main">
        <LegalLayout eyebrow="Legal" title="Privacy policy">
          <h2>What we collect</h2>
          <p>
            When you write to us through the form on this website we collect the
            information you provide: your name, email address, organisation, the
            nature of your enquiry and your message. We do not collect anything
            you have not typed in yourself.
          </p>

          <h2>How we use it</h2>
          <p>
            We use this information to respond to your enquiry, to route it to
            the right person within the firm, and to maintain a record of our
            correspondence. If you have written to us as an investor, we may
            retain your details to share information you have requested about
            our investment vehicles, in accordance with applicable regulations.
          </p>

          <h2>What we do not do</h2>
          <p>
            We do not sell, rent or trade your personal information. We do not
            use it for advertising. We share it only with service providers who
            process it on our behalf (such as email and CRM systems), and only
            to the extent needed to respond to you.
          </p>

          <h2>Cookies and analytics</h2>
          <p>
            This website may use basic analytics to understand aggregate
            visitor behaviour. It does not use advertising or cross-site
            tracking cookies.
          </p>

          <h2>Retention and your rights</h2>
          <p>
            We keep correspondence for as long as needed for the purpose it was
            provided. You may ask us at any time to access, correct or delete
            the personal information we hold about you by writing to{' '}
            <a href="mailto:as@tiertwocapital.com">as@tiertwocapital.com</a>.
          </p>
        </LegalLayout>
      </main>
      <Footer />
    </div>
  );
}
