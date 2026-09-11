import React from 'react';
import { Navbar } from '../components/common/Navbar';
import { Footer } from '../components/common/Footer';
import { SkipLink } from '../components/common/SkipLink';
import { InsightCard } from '../components/insights/InsightCard';
import { useInsights } from '../hooks/useInsights';

export function InsightsPage() {
  const { insights, loading } = useInsights();

  return (
    <div className="page--inner">
      <SkipLink />
      <Navbar isHome={false} />
      <main id="main">
        <section className="hero">
          <div className="hero__art" aria-hidden="true">
            <i></i>
            <i></i>
          </div>
          <div className="shell hero__in">
            <span className="eyebrow eyebrow--light">Insights</span>
            <h1>What we’re working through.</h1>
            <p className="lede">
              Field observations, structural research, and notes from building
              the operating layer in Bihar.
            </p>
          </div>
        </section>

        <section className="band">
          <div className="shell">
            {loading ? (
              <p>Loading insights...</p>
            ) : (
              <div className="posts">
                {insights.map((item) => (
                  <InsightCard key={item.id} insight={item} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
