'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import Logo from './Logo';

const navLinks = [
  { label: 'About', href: '#about', num: '01' },
  { label: 'Skills', href: '#skills', num: '02' },
  { label: 'Experience', href: '#experience', num: '03' },
  { label: 'Projects', href: '#projects', num: '04' },
  { label: 'YouTube', href: '#youtube', num: '05' },
  { label: 'Contact', href: '#contact', num: '06' },
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
    const fileId = '1NzgR8nOyQylmmDTaOd1i_MU7OS_OC6uD';
    window.open(
      `https://drive.google.com/uc?export=download&id=${fileId}`,
      '_blank'
    );
  };

  return (
    <div className="fixed top-4 md:top-6 inset-x-0 z-[100] flex flex-col items-center px-4 md:px-6 pointer-events-none">
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className={`pointer-events-auto relative flex flex-col w-full max-w-5xl transition-all duration-500 overflow-hidden rounded-[2rem] ${
          scrolled || isOpen
            ? 'glass shadow-2xl shadow-primary/5 dark:shadow-black/40'
            : 'bg-transparent shadow-none'
        }`}
      >
        <div className={`relative flex items-center justify-between w-full min-h-[60px] transition-all duration-500 ${scrolled || isOpen ? 'px-6 py-3.5' : 'px-4 py-5'}`}>
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

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-11 h-11 flex items-center justify-center rounded-full hover:bg-surface-container-high/40 transition-colors z-10"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <div className="w-5 flex flex-col gap-[5px]">
              <motion.span animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 7 : 0 }} transition={{ duration: 0.3 }}
                className="block h-[2px] w-full bg-on-surface rounded-full origin-center" />
              <motion.span animate={{ opacity: isOpen ? 0 : 1, scaleX: isOpen ? 0 : 1 }} transition={{ duration: 0.2 }}
                className="block h-[2px] w-3/4 bg-on-surface rounded-full" />
              <motion.span animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -7 : 0 }} transition={{ duration: 0.3 }}
                className="block h-[2px] w-full bg-on-surface rounded-full origin-center" />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Full-screen mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed inset-0 z-[99] pointer-events-auto"
            style={{ backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', background: 'rgba(10,10,20,0.92)' }}
          >
            {/* Subtle gradient orbs */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/8 rounded-full blur-[100px] pointer-events-none" />

            {/* Top bar */}
            <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-white/[0.06]">
              <a href="#" onClick={() => setIsOpen(false)}>
                <Logo className="scale-[0.85] origin-left" />
              </a>
              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-on-surface-variant hover:text-on-surface hover:border-white/20 transition-all"
                aria-label="Close menu"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Nav links */}
            <nav className="px-6 pt-6 pb-4 flex flex-col gap-1">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 + i * 0.07, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className={`group flex items-center gap-4 px-4 py-4 rounded-2xl transition-all duration-200 ${
                      isActive ? 'bg-primary/10' : 'hover:bg-white/[0.04]'
                    }`}
                  >
                    {/* Number */}
                    <span className={`font-mono text-xs font-bold tracking-widest w-6 shrink-0 transition-colors ${
                      isActive ? 'text-primary' : 'text-white/20 group-hover:text-white/40'
                    }`}>
                      {link.num}
                    </span>

                    {/* Label */}
                    <span className={`font-manrope font-black leading-none transition-colors flex-1 ${
                      isActive ? 'text-primary' : 'text-white/80 group-hover:text-white'
                    }`} style={{ fontSize: '28px', letterSpacing: '-0.02em' }}>
                      {link.label}
                    </span>

                    {/* Arrow */}
                    <motion.svg
                      className={`w-5 h-5 shrink-0 transition-colors ${isActive ? 'text-primary' : 'text-white/20 group-hover:text-white/50'}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      animate={{ x: isActive ? 2 : 0 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </motion.svg>
                  </motion.a>
                );
              })}
            </nav>

            {/* Divider */}
            <div className="mx-6 h-px bg-white/[0.06]" />

            {/* Bottom actions */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="px-6 pt-5 pb-8 flex flex-col gap-3"
            >
              {/* Resume CTA */}
              <button
                onClick={() => { handleResumeDownload(); setIsOpen(false); }}
                className="w-full gradient-primary text-[color:var(--gradient-btn-text)] py-4 rounded-2xl font-manrope font-bold text-base flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </button>

              {/* Social + Theme row */}
              <div className="flex items-center gap-3">
                {/* Social icons */}
                {[
                  { href: 'https://github.com/ankitsingh711', label: 'GitHub', path: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z' },
                  { href: 'https://linkedin.com/in/ankit-singh2127', label: 'LinkedIn', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
                  { href: 'https://twitter.com/AnkitSingh711_', label: 'Twitter/X', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
                ].map(({ href, label, path }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center py-3.5 rounded-2xl border border-white/[0.08] text-white/50 hover:text-white/80 hover:border-white/20 hover:bg-white/[0.04] transition-all"
                    aria-label={label}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d={path} />
                    </svg>
                  </a>
                ))}

                {/* Theme toggle */}
                <button
                  onClick={() => { toggleTheme(); setIsOpen(false); }}
                  className="flex-1 flex items-center justify-center py-3.5 rounded-2xl border border-white/[0.08] text-white/50 hover:text-white/80 hover:border-white/20 hover:bg-white/[0.04] transition-all"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  )}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
