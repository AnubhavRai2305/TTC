import React, { useEffect } from 'react';
import { useSpeakWithUs } from '../../hooks/useSpeakWithUs';

export function SpeakWithUsForm() {
  const {
    config,
    loadingConfig,
    enquiry,
    setEnquiry,
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
    organisation,
    setOrganisation,
    message,
    setMessage,
    submitting,
    submitted,
    feedback,
    error,
    clearStatus,
    handleSubmit,
  } = useSpeakWithUs();

  // Close popout on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        clearStatus();
      }
    };
    if (submitted || error) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [submitted, error, clearStatus]);

  if (loadingConfig || !config) {
    return <div className="form">Loading form...</div>;
  }

  const { formConfig } = config;

  return (
    <div className="form">
      {/* Popout Feedback Modal */}
      {(submitted || error) && (
        <div
          className="form-popout-overlay"
          onClick={clearStatus}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="form-popout"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="form-popout__close"
              onClick={clearStatus}
              aria-label="Close"
            >
              &times;
            </button>

            {submitted ? (
              <>
                <div className="form-popout__icon-wrap form-popout__icon-wrap--success">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3 className="form-popout__title">Message Sent</h3>
                <p className="form-popout__message">
                  {feedback || 'Thank you for reaching out. We will get back to you within 2 business days.'}
                </p>
                <button
                  type="button"
                  className="form-popout__action"
                  onClick={clearStatus}
                >
                  Got It
                </button>
              </>
            ) : (
              <>
                <div className="form-popout__icon-wrap form-popout__icon-wrap--error">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                </div>
                <h3 className="form-popout__title">Check Your Form</h3>
                <p className="form-popout__message">{error}</p>
                <button
                  type="button"
                  className="form-popout__action"
                  onClick={clearStatus}
                >
                  Okay, Fix Details
                </button>
              </>
            )}
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        {/* Enquiry Selector */}
        <fieldset
          className="field"
          style={{ border: 0, padding: 0, margin: '0 0 32px' }}
        >
          <legend className="field" style={{ marginBottom: '14px', padding: 0 }}>
            <span
              style={{
                fontFamily: 'var(--label)',
                fontSize: '13px',
                letterSpacing: '.02em',
                color: 'var(--ink-500)',
                fontWeight: 600,
              }}
            >
              {formConfig.legend}
            </span>
          </legend>
          <div className="radios">
            {formConfig.enquiryOptions.map((opt) => (
              <label
                key={opt.value}
                className={enquiry === opt.value ? 'is-selected' : ''}
              >
                <input
                  type="radio"
                  name="enquiry"
                  value={opt.value}
                  checked={enquiry === opt.value}
                  onChange={(e) => setEnquiry(e.target.value)}
                />
                {opt.label}
              </label>
            ))}
          </div>
        </fieldset>

        {/* Name */}
        <div className="field">
          <label htmlFor="name">
            Name<span className="req">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        {/* Email */}
        <div className="field">
          <label htmlFor="email">
            Email<span className="req">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Phone */}
        <div className="field">
          <label htmlFor="phone">Phone number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            autoComplete="tel"
            inputMode="numeric"
            pattern="[0-9]*"
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
          />
        </div>

        {/* Organisation */}
        <div className="field">
          <label htmlFor="org">
            Organisation<span className="req">*</span>
          </label>
          <input
            type="text"
            id="org"
            name="organisation"
            autoComplete="organization"
            value={organisation}
            onChange={(e) => setOrganisation(e.target.value)}
            required
          />
        </div>

        {/* Message */}
        <div className="field">
          <label htmlFor="msg">
            Message<span className="req">*</span>
          </label>
          <textarea
            id="msg"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn"
          disabled={submitting}
          style={{ opacity: submitting ? 0.7 : 1 }}
        >
          {submitting ? 'Sending...' : formConfig.submitText}
        </button>

        <p className="small" style={{ marginTop: '26px' }}>
          {formConfig.footerNote}
        </p>
      </form>
    </div>
  );
}
