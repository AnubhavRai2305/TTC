import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { speakWithUsService } from '../services/speakWithUsService';

/**
 * Hook to manage Speak With Us form state and CRM submission,
 * including auto-selecting enquiry radio based on URL query parameter ?enquiry=...
 */
export function useSpeakWithUs() {
  const location = useLocation();
  const [config, setConfig] = useState(null);
  const [loadingConfig, setLoadingConfig] = useState(true);

  // Form inputs
  const [enquiry, setEnquiry] = useState('founder');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [organisation, setOrganisation] = useState('');
  const [message, setMessage] = useState('');

  // Submission status
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [error, setError] = useState('');

  // Load config
  useEffect(() => {
    let isMounted = true;
    speakWithUsService.getSpeakWithUsContent().then((data) => {
      if (isMounted) {
        setConfig(data);
        setLoadingConfig(false);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  // Sync enquiry from URL query parameter (e.g. ?enquiry=investor)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const enquiryParam = params.get('enquiry');
    if (enquiryParam) {
      const valid = ['founder', 'investor', 'partner', 'press', 'other'];
      if (valid.includes(enquiryParam.toLowerCase())) {
        setEnquiry(enquiryParam.toLowerCase());
      }
    }
  }, [location.search]);

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    setError('');

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please fill in all required fields.');
      return;
    }

    setSubmitting(true);
    try {
      const res = await speakWithUsService.submitEnquiry({
        enquiry,
        name,
        email,
        organisation,
        message,
      });

      if (res.success) {
        setSubmitted(true);
        setFeedback(res.message);
        // Reset message but keep name/email
        setMessage('');
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('An error occurred during submission. Please write directly to our email.');
    } finally {
      setSubmitting(false);
    }
  };

  return {
    config,
    loadingConfig,
    enquiry,
    setEnquiry,
    name,
    setName,
    email,
    setEmail,
    organisation,
    setOrganisation,
    message,
    setMessage,
    submitting,
    submitted,
    feedback,
    error,
    handleSubmit,
  };
}
