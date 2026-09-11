import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/common/Navbar';
import { Footer } from '../components/common/Footer';
import { SkipLink } from '../components/common/SkipLink';

export function NotFoundPage() {
  return (
    <div className="page--inner">
      <SkipLink />
      <Navbar isHome={false} />
      <main id="main">
        <section className="hero">
          <div className="hero__art" aria-hidden="true">
            <i></i>
            <i></i>
          </div>
          <div className="shell hero__in">
            <span className="eyebrow eyebrow--light">404</span>
            <h1>Page not found.</h1>
            <p className="lede">
              The page you are looking for does not exist or has been moved.
            </p>
            <div className="btn-row">
              <Link to="/" className="btn btn--onnavy">
                Return to home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
