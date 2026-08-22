import React, { useEffect, useRef, useState } from 'react';
import { NAV_LINKS } from '../constants';
import { logo } from '../constants/images';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const mobileMenuRef = useRef(null);
  const tickingRef = useRef(false);

  /*
   * Scroll state + active section
   */
  useEffect(() => {
    const sections = NAV_LINKS
      .map((link) => ({
        href: link.href,
        element: document.querySelector(link.href),
      }))
      .filter((item) => item.element);

    const handleScroll = () => {
      if (tickingRef.current) return;

      tickingRef.current = true;

      requestAnimationFrame(() => {
        const scrollY = window.scrollY;

        setIsScrolled(scrollY > 40);

        let current = '';

        for (const section of sections) {
          const top =
            section.element.getBoundingClientRect().top +
            scrollY -
            140;

          const bottom =
            top + section.element.offsetHeight;

          if (scrollY >= top && scrollY < bottom) {
            current = section.href;
            break;
          }
        }

        setActiveSection(current);

        tickingRef.current = false;
      });
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /*
   * Close mobile menu when clicking outside
   * or pressing Escape
   */
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener(
        'mousedown',
        handleClickOutside
      );

      document.removeEventListener(
        'keydown',
        handleEscape
      );
    };
  }, [isMobileMenuOpen]);

  /*
   * Close mobile menu after navigation
   */
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`
        fixed
        inset-x-0
        top-0
        z-50
        transition-all
        duration-300
        ${isScrolled
          ? `
              border-b
              border-white/[0.06]
              bg-black/70
              py-4
              backdrop-blur-xl
            `
          : `
              bg-transparent
              py-6
            `
        }
      `}
    >
      <div
        className="
          container
          mx-auto
          flex
          items-center
          justify-between
          px-4
        "
      >
        {/* ========================================
            LOGO
        ========================================= */}
        <a
          href="#home"
          aria-label="Srijan Raj Shakya — Home"
          className="
            relative
            z-20
            flex
            items-center
            rounded
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-accent-muted
            focus-visible:ring-offset-2
            focus-visible:ring-offset-black
          "
        >
          <img
            src={logo}
            alt="Srijan Raj Shakya"
            className="
              h-12
              w-auto
              object-contain
              md:h-12
            "
          />
        </a>

        {/* ========================================
            DESKTOP NAVIGATION
        ========================================= */}
        <div
          className="
            hidden
            items-center
            gap-8
            md:flex
          "
        >
          <ul
            className="
              flex
              items-center
              gap-7
            "
          >
            {NAV_LINKS.map((link) => {
              const isActive =
                activeSection === link.href;

              return (
                <li
                  key={link.name}
                  className="relative"
                >
                  <a
                    href={link.href}
                    className={`
                      relative
                      inline-flex
                      py-2
                      text-sm
                      font-medium
                      transition-colors
                      duration-200
                      focus-visible:outline-none
                      focus-visible:text-text-primary
                      ${isActive
                        ? 'text-text-primary'
                        : 'text-text-secondary hover:text-text-primary'
                      }
                    `}
                  >
                    {link.name}

                    {/* Active indicator */}
                    <span
                      aria-hidden="true"
                      className={`
                        absolute
                        -bottom-0.5
                        left-0
                        h-px
                        bg-accent-muted
                        transition-all
                        duration-300
                        ${isActive
                          ? 'w-full opacity-100'
                          : 'w-0 opacity-0'
                        }
                      `}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* ========================================
            MOBILE CONTROLS
            Button + menu share the same ref
        ========================================= */}
        <div
          ref={mobileMenuRef}
          className="
            relative
            md:hidden
          "
        >
          {/* Hamburger */}
          <button
            type="button"
            onClick={() =>
              setIsMobileMenuOpen((prev) => !prev)
            }
            aria-label={
              isMobileMenuOpen
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            className="
              relative
              z-20
              flex
              h-10
              w-10
              flex-col
              items-center
              justify-center
              gap-[5px]
              rounded-lg
              transition-colors
              hover:bg-white/[0.05]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-accent-muted
            "
          >
            {/* Top line */}
            <span
              className={`
                block
                h-[1.5px]
                w-5
                bg-white
                transition-all
                duration-300
                ${isMobileMenuOpen
                  ? 'translate-y-[6.5px] rotate-45'
                  : ''
                }
              `}
            />

            {/* Middle line */}
            <span
              className={`
                block
                h-[1.5px]
                w-5
                bg-white
                transition-all
                duration-300
                ${isMobileMenuOpen
                  ? 'opacity-0'
                  : 'opacity-100'
                }
              `}
            />

            {/* Bottom line */}
            <span
              className={`
                block
                h-[1.5px]
                w-5
                bg-white
                transition-all
                duration-300
                ${isMobileMenuOpen
                  ? '-translate-y-[6.5px] -rotate-45'
                  : ''
                }
              `}
            />
          </button>

          {/* ========================================
              MOBILE MENU
          ========================================= */}
          <div
            id="mobile-navigation"
            className={`
              absolute
              right-0
              top-full
              mt-3
              w-[calc(100vw-24px)]
              max-w-sm
              overflow-hidden
              rounded-2xl
              border
              border-white/[0.08]
              bg-black/90
              backdrop-blur-xl
              transition-all
              duration-300
              ${isMobileMenuOpen
                ? 'visible translate-y-0 opacity-100'
                : 'invisible -translate-y-2 opacity-0'
              }
            `}
          >
            <div
              className="
                flex
                flex-col
                gap-1
                p-3
              "
            >
              {NAV_LINKS.map((link) => {
                const isActive =
                  activeSection === link.href;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={handleLinkClick}
                    className={`
                      rounded-xl
                      px-4
                      py-3
                      text-sm
                      font-medium
                      transition-colors
                      ${isActive
                        ? `
                            bg-white/[0.06]
                            text-accent-muted
                          `
                        : `
                            text-text-secondary
                            hover:bg-white/[0.04]
                            hover:text-text-primary
                          `
                      }
                    `}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;