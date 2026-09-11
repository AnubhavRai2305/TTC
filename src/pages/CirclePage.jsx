import React from 'react';
import { Navbar } from '../components/common/Navbar';
import { Footer } from '../components/common/Footer';
import { SkipLink } from '../components/common/SkipLink';
import { CircleHero } from '../components/circle/CircleHero';
import { WhyItExistsSection } from '../components/circle/WhyItExistsSection';
import { ProgrammePhases } from '../components/circle/ProgrammePhases';
import { WhatWeAskSection } from '../components/circle/WhatWeAskSection';
import { CohortList } from '../components/circle/CohortList';
import { TeamGrid } from '../components/circle/TeamGrid';
import { ApplicationsCTA } from '../components/circle/ApplicationsCTA';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function CirclePage() {
  useScrollReveal();

  return (
    <div className="page--inner">
      <SkipLink />
      <Navbar isHome={false} />
      <main id="main">
        <CircleHero />
        <WhyItExistsSection />
        <ProgrammePhases />
        <WhatWeAskSection />
        <CohortList />
        <TeamGrid />
        <ApplicationsCTA />
      </main>
      <Footer />
    </div>
  );
}
