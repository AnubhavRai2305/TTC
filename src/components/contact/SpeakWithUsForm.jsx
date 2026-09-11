import React from 'react';
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
    organisation,
    setOrganisation,
    message,
    setMessage,
    submitting,
    submitted,
    feedback,
    error,
    handleSubmit,
  } = useSpeakWithUs();

  if (loadingConfig || !config) {
    return <div className="form">Loading form...</div>;
  }

  const { formConfig } = config;

  return (
    <div className="form">
      {submitted ? (
        <div className="form__alert form__alert--success" role="alert">
          <h3 style={{ color: 'inherit', marginBottom: '8px' }}>
            Message Sent
          </h3>
          <p style={{ margin: 0 }}>{feedback}</p>
        </div>
      ) : null}

      {error ? (
        <div className="form__alert" role="alert">
          <p style={{ margin: 0, color: '#c62828' }}>{error}</p>
        </div>
      ) : null}

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
          <label htmlFor="name">Name</label>
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
          <label htmlFor="email">Email</label>
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

        {/* Organisation */}
        <div className="field">
          <label htmlFor="org">Organisation</label>
          <input
            type="text"
            id="org"
            name="organisation"
            autoComplete="organization"
            value={organisation}
            onChange={(e) => setOrganisation(e.target.value)}
          />
        </div>

        {/* Message */}
        <div className="field">
          <label htmlFor="msg">Message</label>
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
