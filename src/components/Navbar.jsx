import React, { useState, useEffect, useRef } from 'react';
import { NAV_LINKS } from '../constants';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // Update scrolled state
      setIsScrolled(window.scrollY > 50);

      // Find active section
      let current = '';

      for (const link of NAV_LINKS) {
        const section = document.querySelector(link.href);
        if (!section) continue;

        const top = section.offsetTop - 150; // Adjust for navbar height + buffer
        const bottom = top + section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          current = link.href;
          break; // Stop at first matching section (top-down)
        }
      }

      setActiveSection(current);
    };

    handleScroll(); // Initial check
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Removed isScrolled from deps — no need!

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Optional: Close mobile menu on route change or link click
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${isScrolled ? 'py-4 bg-black/50 backdrop-blur-md shadow-md' : 'py-6 bg-transparent'}
      `}
    >
      <div className="container mx-auto px-4 flex items-center justify-between relative">
        <a href="#" className="font-heading text-xl font-bold tracking-tight z-20">
          SRS<span className="text-accent-muted">.</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.name} className="relative">
              <a
                href={link.href}
                className={`
                  text-sm font-medium transition-colors duration-200
                  ${activeSection === link.href
                    ? 'text-accent-muted'
                    : 'text-text-secondary hover:text-text-primary'
                  }
                `}
              >
                {link.name}
              </a>
              {activeSection === link.href && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-accent-muted rounded-full transition-all duration-300" />
              )}
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="btn-secondary text-sm py-2 px-6 hidden md:inline-block z-20"
        >
          Contact me
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
          className="md:hidden flex flex-col justify-center items-center gap-1 z-20"
        >
          <span
            className={`block w-6 h-[2px] bg-white transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-white transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-white transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          />
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-md flex flex-col items-center py-8 gap-8 md:hidden animate-in slide-in-from-top-5 duration-300"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="text-white text-lg font-medium hover:text-accent-muted transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="btn-secondary text-sm py-2 px-6"
            >
              Contact me
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;