import React from 'react';
import { useParams } from 'react-router-dom';
import { Navbar } from '../components/common/Navbar';
import { Footer } from '../components/common/Footer';
import { SkipLink } from '../components/common/SkipLink';
import { InsightDetail } from '../components/insights/InsightDetail';
import { useInsights } from '../hooks/useInsights';

export function InsightDetailPage() {
  const { slug } = useParams();
  const { currentInsight, loading } = useInsights(slug);

  return (
    <div className="page--inner">
      <SkipLink />
      <Navbar isHome={false} />
      <main id="main">
        {loading ? (
          <div className="shell band">
            <p>Loading insight...</p>
          </div>
        ) : (
          <InsightDetail insight={currentInsight} />
        )}
      </main>
      <Footer />
    </div>
  );
}
