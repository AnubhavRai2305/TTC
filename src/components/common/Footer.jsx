import React from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../../data/siteContent';
import ttcLogoWhite from '../../assets/images/ttc-logo-white.png';

export function Footer() {
  const { footer } = siteContent;

  return (
    <footer className="foot">
      <div className="shell">
        <div className="foot__top">
          <div>
            <Link
              to="/"
              className="mark mark--light"
              style={{ padding: 0 }}
              aria-label="Tier Two Capital, home"
            >
              <img
                src={ttcLogoWhite}
                alt="Tier Two Capital"
                style={{ height: '44px', width: 'auto', display: 'block' }}
              />
            </Link>
            <p className="foot__addr">
              {footer.locations}
              <br />
              <a href={`mailto:${footer.email}`}>{footer.email}</a>
              <br />
              <a href={`tel:${footer.phone.replace(/\s+/g, '')}`}>{footer.phone}</a>
            </p>
          </div>
          <div>
            <h4>Navigate</h4>
            <ul>
              <li>
                <a href="/#approach">Approach</a>
              </li>
              <li>
                <Link to="/circle">The 1 Cr. Circle</Link>
              </li>
              <li>
                <a href="/#insights">Insights</a>
              </li>
              <li>
                <Link to="/contact">Speak with us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li>
                <Link to="/privacy">Privacy policy</Link>
              </li>
              <li>
                <Link to="/terms">Terms of use</Link>
              </li>
              <li>
                <Link to="/disclosures">Disclosures</Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="foot__legal">{footer.legalDisclaimer}</p>
        <div className="foot__base">
          <span>{footer.copyright}</span>
          <span>{footer.entity}</span>
        </div>
      </div>
    </footer>
  );
}
