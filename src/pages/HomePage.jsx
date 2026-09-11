import React from 'react';
import { Navbar } from '../components/common/Navbar';
import { Footer } from '../components/common/Footer';
import { SkipLink } from '../components/common/SkipLink';
import { HomeHero } from '../components/home/HomeHero';
import { ProofBar } from '../components/home/ProofBar';
import { OpportunitySection } from '../components/home/OpportunitySection';
import { ModelSection } from '../components/home/ModelSection';
import { PortfolioConstruction } from '../components/home/PortfolioConstruction';
import { OriginationSection } from '../components/home/OriginationSection';
import { InsightsSection } from '../components/home/InsightsSection';
import { CloseSection } from '../components/home/CloseSection';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function HomePage() {
  useScrollReveal();

  return (
    <>
      <SkipLink />
      <Navbar isHome={true} />
      <main id="main">
        <HomeHero />
        <ProofBar />
        <OpportunitySection />
        <ModelSection />
        <PortfolioConstruction />
        <OriginationSection />
        <InsightsSection />
        <CloseSection />
      </main>
      <Footer />
    </>
  );
}
