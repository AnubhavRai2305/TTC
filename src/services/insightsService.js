import { insightsData } from '../data/insightsData';

/**
 * Service abstraction for CMS-driven Insights.
 * Currently backed by local structured content; can be switched to a Headless CMS API without altering UI components.
 */
export const insightsService = {
  /**
   * Fetches all insight articles
   * @returns {Promise<Array>}
   */
  async getInsights() {
    // Simulated async API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([...insightsData]);
      }, 50);
    });
  },

  /**
   * Fetches a single insight article by slug
   * @param {string} slug
   * @returns {Promise<Object|null>}
   */
  async getInsightBySlug(slug) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const item = insightsData.find((i) => i.slug === slug) || null;
        resolve(item);
      }, 50);
    });
  },

  /**
   * Fetches featured insight articles for homepage
   * @returns {Promise<Array>}
   */
  async getFeaturedInsights() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(insightsData.slice(0, 3));
      }, 50);
    });
  },
};
