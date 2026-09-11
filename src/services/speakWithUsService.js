import { speakWithUsData } from '../data/speakWithUsData';

/**
 * Service abstraction for CMS-driven "Speak With Us".
 * Separates submission logic, CRM routing, and CMS content from UI components.
 */
export const speakWithUsService = {
  /**
   * Fetches page configuration and form fields
   * @returns {Promise<Object>}
   */
  async getSpeakWithUsContent() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ ...speakWithUsData });
      }, 50);
    });
  },

  /**
   * Submits enquiry data to the CRM or API
   * @param {Object} formData
   * @returns {Promise<{ success: boolean, message: string }>}
   */
  async submitEnquiry(formData) {
    return new Promise((resolve) => {
      // Simulate backend latency
      setTimeout(() => {
        console.log('[CRM Submission]', formData);
        resolve({
          success: true,
          message: speakWithUsData.formConfig.successMessage,
        });
      }, 400);
    });
  },
};
