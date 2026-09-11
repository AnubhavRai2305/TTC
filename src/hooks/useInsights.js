import { useState, useEffect } from 'react';
import { insightsService } from '../services/insightsService';

/**
 * Hook to retrieve insights list or single insight by slug.
 */
export function useInsights(slug = null) {
  const [insights, setInsights] = useState([]);
  const [currentInsight, setCurrentInsight] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    if (slug) {
      insightsService.getInsightBySlug(slug).then((data) => {
        if (isMounted) {
          setCurrentInsight(data);
          setLoading(false);
        }
      });
    } else {
      insightsService.getInsights().then((data) => {
        if (isMounted) {
          setInsights(data);
          setLoading(false);
        }
      });
    }

    return () => {
      isMounted = false;
    };
  }, [slug]);

  return {
    insights,
    currentInsight,
    loading,
  };
}
