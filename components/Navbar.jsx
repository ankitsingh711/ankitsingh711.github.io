'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'glass glass-border shadow-ambient' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#"
            className="text-xl font-manrope font-bold gradient-text tracking-tight"
          >
            ANKIT.DEV
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-lg text-sm font-inter font-medium transition-all duration-300 ${
                  activeSection === link.href.slice(1)
                    ? 'text-primary'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {link.label}
                {activeSection === link.href.slice(1) && (
                  <motion.span
                    layoutId="navIndicator"
                    className="absolute inset-0 bg-primary/[0.08] rounded-lg -z-10"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </a>
            ))}
            <button
              onClick={handleResumeDownload}
              className="ml-4 gradient-primary text-[#000a7b] px-5 py-2.5 rounded-lg text-sm font-semibold font-inter hover:shadow-glow transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Resume
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-surface-container-high/50 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <div className="w-5 flex flex-col gap-1.5">
              <motion.span
                animate={{
                  rotate: isOpen ? 45 : 0,
                  y: isOpen ? 7 : 0,
                }}
                className="block h-[2px] w-full bg-on-surface-variant rounded-full origin-center"
              />
              <motion.span
                animate={{ opacity: isOpen ? 0 : 1 }}
                className="block h-[2px] w-full bg-on-surface-variant rounded-full"
              />
              <motion.span
                animate={{
                  rotate: isOpen ? -45 : 0,
                  y: isOpen ? -7 : 0,
                }}
                className="block h-[2px] w-full bg-on-surface-variant rounded-full origin-center"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden glass glass-border"
          >
            <div className="px-6 py-6 space-y-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`block px-4 py-3 rounded-xl text-base font-inter font-medium transition-colors ${
                    activeSection === link.href.slice(1)
                      ? 'text-primary bg-primary/[0.08]'
                      : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/30'
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
              <button
                onClick={() => {
                  handleResumeDownload();
                  setIsOpen(false);
                }}
                className="w-full mt-4 gradient-primary text-[#000a7b] px-5 py-3 rounded-xl text-base font-semibold font-inter"
              >
                Download Resume
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
