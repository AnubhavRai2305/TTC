import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useNavScroll } from '../../hooks/useNavScroll';
import ttcLogoWhite from '../../assets/images/circle-logo.png';
import ttcLogoDark from '../../assets/images/ttc-logo.png';

export function Navbar({ isHome = false }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { isStuck, isMobileOpen, toggleMobile, closeMobile } = useNavScroll(isHome);

  const handleHashLink = (e, hash) => {
    e.preventDefault();
    closeMobile();

    if (location.pathname === '/') {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/' + hash);
    }
  };

  const navClass = isHome
    ? `nav ${isStuck ? 'is-stuck' : ''}`
    : 'nav nav--inner';

  return (
    <header className={navClass} id="nav">
      <div className={isHome ? 'nav__in' : 'shell nav__in'}>
        <Link
          to="/"
          className="mark"
          aria-label="Tier Two Capital, home"
          onClick={closeMobile}
        >
          <img
            className="logo--light"
            src={ttcLogoWhite}
            alt="Tier Two Capital"
          />
          <img
            className="logo--dark"
            src={ttcLogoDark}
            alt="Tier Two Capital"
          />
        </Link>

        <button
          className="nav__toggle"
          aria-expanded={isMobileOpen}
          aria-controls="nav-links"
          onClick={toggleMobile}
        >
          {isMobileOpen ? 'Close' : 'Menu'}
        </button>

        <nav
          className={`nav__links ${isMobileOpen ? 'open' : ''}`}
          id="nav-links"
        >
          <a
            href="/#approach"
            onClick={(e) => handleHashLink(e, '#approach')}
          >
            Approach
          </a>
          <Link
            to="/circle"
            aria-current={location.pathname === '/circle' ? 'page' : undefined}
            onClick={closeMobile}
          >
            1 Cr. Circle
          </Link>
          <a
            href="/#insights"
            onClick={(e) => handleHashLink(e, '#insights')}
          >
            Insights
          </a>
          <Link
            to="/contact"
            className="btn"
            aria-current={location.pathname === '/contact' ? 'page' : undefined}
            onClick={closeMobile}
          >
            Speak with us
          </Link>
        </nav>
      </div>
    </header>
  );
}
