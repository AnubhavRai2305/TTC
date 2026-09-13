import { speakWithUsData } from '../data/speakWithUsData';

/**
 * Resolves the Formspree URL strictly from environment variables.
 * Reads VITE_FORMSPREE_ENDPOINT from .env (locally) or Vercel Environment Variables (in production).
 * Accepts either:
 * - A full endpoint: "https://formspree.io/f/xyz123"
 * - Or just the Form ID: "xyz123"
 */
function resolveFormspreeUrl() {
  const envVal =
    import.meta.env.VITE_FORMSPREE_ENDPOINT ||
    import.meta.env.VITE_FORMSPREE_FORM_ID;

  if (!envVal || !envVal.trim()) {
    return null;
  }

  const trimmed = envVal.trim();
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
    return trimmed;
  }

  return `https://formspree.io/f/${trimmed}`;
}

/**
 * Service abstraction for "Speak With Us" enquiries.
 * Sends submissions directly to Formspree when an endpoint is configured,
 * or simulates a successful demo when no endpoint is set.
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
   * Submits enquiry data to Formspree
   * @param {Object} formData
   * @returns {Promise<{ success: boolean, message: string }>}
   */
  async submitEnquiry(formData) {
    const endpoint = resolveFormspreeUrl();

    // If no endpoint is configured in .env, run in demo simulation mode
    if (!endpoint) {
      console.info(
        '[Formspree Demo Mode] No endpoint configured in .env (VITE_FORMSPREE_ENDPOINT). Simulating successful delivery for:',
        formData
      );
      await new Promise((resolve) => setTimeout(resolve, 600));
      return {
        success: true,
        message: speakWithUsData.formConfig.successMessage,
      };
    }

    // Submit live payload to Formspree
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        _subject: `TTC Enquiry: ${formData.name} (${formData.organisation || 'N/A'}) - ${formData.enquiry}`,
      }),
    });

    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      const errorMsg =
        data.errors?.map((err) => err.message).join(', ') ||
        data.error ||
        'Form submission failed. Please verify your Formspree endpoint and try again.';
      throw new Error(errorMsg);
    }

    return {
      success: true,
      message: speakWithUsData.formConfig.successMessage,
    };
  },
};

