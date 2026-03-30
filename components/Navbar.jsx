'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import Logo from './Logo';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section
      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleResumeDownload = () => {
    const fileId = '1jmjW5--EHX_rSb8SHJzmHEZZDbriOHv_';
    window.open(
      `https://drive.google.com/uc?export=download&id=${fileId}`,
      '_blank'
    );
  };

  return (
    <div className="fixed top-4 md:top-6 inset-x-0 z-[100] flex flex-col items-center px-4 md:px-6 pointer-events-none">
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto relative flex flex-col w-full max-w-5xl transition-all duration-500 overflow-hidden rounded-[2rem] ${
          scrolled || isOpen
            ? 'glass shadow-2xl shadow-primary/5 dark:shadow-black/40'
            : 'bg-transparent shadow-none'
        }`}
      >
        <div className={`relative flex items-center justify-between w-full transition-all duration-500 ${scrolled || isOpen ? 'px-6 py-3.5' : 'px-4 py-5'}`}>
          {/* Logo */}
          <a href="#" className="hover:opacity-80 transition-opacity group flex-shrink-0 z-10">
            <Logo className="scale-[0.85] origin-left" />
          </a>

          {/* Desktop Navigation - Centered Absolutely */}
          <div className="hidden md:flex items-center justify-center gap-2 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-5 py-2 rounded-full text-sm font-inter font-medium transition-colors duration-300 ${
                  activeSection === link.href.slice(1)
                    ? 'text-primary'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/50'
                }`}
              >
                {link.label}
                {activeSection === link.href.slice(1) && (
                  <motion.span
                    layoutId="navIndicator"
                    className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex flex-shrink-0 items-center gap-3 z-10">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5 theme-toggle-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 theme-toggle-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            <button
              onClick={handleResumeDownload}
              className="gradient-primary text-[color:var(--gradient-btn-text)] px-6 py-2.5 rounded-full text-sm font-bold tracking-wide font-inter hover:shadow-glow transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Resume
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-12 h-12 flex items-center justify-center rounded-full hover:bg-surface-container-high/50 transition-colors z-10"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <div className="w-5 flex flex-col gap-1.5">
              <motion.span
                animate={{
                  rotate: isOpen ? 45 : 0,
                  y: isOpen ? 8 : 0,
                }}
                className="block h-[2px] w-full bg-on-surface rounded-full origin-center"
              />
              <motion.span
                animate={{ opacity: isOpen ? 0 : 1 }}
                className="block h-[2px] w-full bg-on-surface rounded-full"
              />
              <motion.span
                animate={{
                  rotate: isOpen ? -45 : 0,
                  y: isOpen ? -8 : 0,
                }}
                className="block h-[2px] w-full bg-on-surface rounded-full origin-center"
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden w-full border-t border-outline-variant/20 bg-surface/50"
            >
              <div className="px-6 py-6 pb-8 space-y-2 flex flex-col">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`block px-5 py-4 rounded-2xl text-lg font-inter font-medium transition-colors ${
                      activeSection === link.href.slice(1)
                        ? 'text-primary bg-primary/10'
                        : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/50'
                    }`}
                  >
                    {link.label}
                  </motion.a>
                ))}

                <div className="pt-4 mt-2 flex flex-col gap-3 border-t border-outline-variant/20">
                  <button
                    onClick={() => {
                      handleResumeDownload();
                      setIsOpen(false);
                    }}
                    className="w-full gradient-primary text-[color:var(--gradient-btn-text)] px-6 py-4 rounded-2xl text-base font-bold font-inter"
                  >
                    Download Resume
                  </button>
                  <button
                    onClick={() => {
                      toggleTheme();
                      setIsOpen(false);
                    }}
                    className="w-full flex items-center justify-center gap-3 text-on-surface-variant hover:text-on-surface py-4 rounded-2xl hover:bg-surface-container-high/50 transition-colors border border-outline-variant/30"
                  >
                    {theme === 'dark' ? (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        Switch to Light Mode
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                        Switch to Dark Mode
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
