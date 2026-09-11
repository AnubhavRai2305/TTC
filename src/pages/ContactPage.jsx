import React from 'react';
import { Navbar } from '../components/common/Navbar';
import { Footer } from '../components/common/Footer';
import { SkipLink } from '../components/common/SkipLink';
import { ContactHero } from '../components/contact/ContactHero';
import { SpeakWithUsForm } from '../components/contact/SpeakWithUsForm';
import { DirectContactInfo } from '../components/contact/DirectContactInfo';

export function ContactPage() {
  return (
    <div className="page--inner">
      <SkipLink />
      <Navbar isHome={false} />
      <main id="main">
        <ContactHero />
        <section className="band">
          <div className="shell split">
            <SpeakWithUsForm />
            <DirectContactInfo />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
