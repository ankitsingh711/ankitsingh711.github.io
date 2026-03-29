'use client';

import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
            });
          } else {
            entry.target.querySelectorAll('.reveal').forEach((el) => {
              el.classList.remove('visible');
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        'service_3yp5i6k',
        'template_pzer59e',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'developerankit2127@gmail.com',
        },
        'vR1wlLeWZe3ka1eb_'
      );

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding bg-surface-container-low relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="reveal text-center mb-16">
          <p className="text-secondary text-sm tracking-[0.2em] uppercase font-inter mb-4">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-manrope font-bold text-on-background mb-4 text-balance">
            Let&apos;s build
            <br />
            <span className="gradient-text">something great</span> together.
          </h2>
          <p className="text-on-surface-variant text-lg font-inter max-w-xl mx-auto">
            Have a project in mind or just want to say hi? My inbox is always
            open for interesting collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3 reveal">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-surface-container rounded-2xl p-8 md:p-10 space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-on-surface-variant text-sm font-inter mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={status === 'sending'}
                    placeholder="Your name"
                    className="w-full bg-[color:var(--input-bg)] text-on-background placeholder:text-on-surface-variant/40 px-4 py-3.5 rounded-xl font-inter text-sm border border-transparent focus:border-primary/30 focus:outline-none focus:ring-0 transition-colors disabled:opacity-50"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-on-surface-variant text-sm font-inter mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={status === 'sending'}
                    placeholder="you@example.com"
                    className="w-full bg-[color:var(--input-bg)] text-on-background placeholder:text-on-surface-variant/40 px-4 py-3.5 rounded-xl font-inter text-sm border border-transparent focus:border-primary/30 focus:outline-none focus:ring-0 transition-colors disabled:opacity-50"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-on-surface-variant text-sm font-inter mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={status === 'sending'}
                  placeholder="What's this about?"
                  className="w-full bg-[color:var(--input-bg)] text-on-background placeholder:text-on-surface-variant/40 px-4 py-3.5 rounded-xl font-inter text-sm border border-transparent focus:border-primary/30 focus:outline-none focus:ring-0 transition-colors disabled:opacity-50"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-on-surface-variant text-sm font-inter mb-2"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={status === 'sending'}
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-[color:var(--input-bg)] text-on-background placeholder:text-on-surface-variant/40 px-4 py-3.5 rounded-xl font-inter text-sm border border-transparent focus:border-primary/30 focus:outline-none focus:ring-0 transition-colors resize-none disabled:opacity-50"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full gradient-primary text-[color:var(--gradient-btn-text)] py-4 rounded-xl font-semibold font-inter text-base hover:shadow-glow transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.98]"
              >
                {status === 'sending'
                  ? 'Sending...'
                  : status === 'success'
                  ? '✓ Message Sent!'
                  : status === 'error'
                  ? 'Failed — Try Again'
                  : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className="text-secondary text-sm text-center font-inter">
                  Thanks for reaching out! I&apos;ll get back to you within 24 hours.
                </p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6 reveal">
            {/* Email */}
            <div className="bg-surface-container rounded-2xl p-6 hover:bg-surface-container-high transition-all duration-500">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-on-surface-variant text-sm font-inter mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:developerankit2127@gmail.com"
                    className="text-on-background font-inter font-medium hover:text-primary transition-colors"
                  >
                    developerankit2127@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-surface-container rounded-2xl p-6 hover:bg-surface-container-high transition-all duration-500">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-secondary/10 text-secondary shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-on-surface-variant text-sm font-inter mb-1">
                    Location
                  </p>
                  <p className="text-on-background font-inter font-medium">
                    Lucknow, India
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-surface-container rounded-2xl p-6 hover:bg-surface-container-high transition-all duration-500">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-tertiary/10 text-tertiary shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-on-surface-variant text-sm font-inter mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:+919839531208"
                    className="text-on-background font-inter font-medium hover:text-primary transition-colors"
                  >
                    +91 9839531208
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-surface-container rounded-2xl p-6">
              <p className="text-on-surface-variant text-sm font-inter mb-4">
                Connect with me
              </p>
              <div className="flex gap-3">
                {[
                  {
                    name: 'GitHub',
                    url: 'https://github.com/ankitsingh711',
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    ),
                  },
                  {
                    name: 'LinkedIn',
                    url: 'https://linkedin.com/in/ankit-singh2127',
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    ),
                  },
                  {
                    name: 'Twitter',
                    url: 'https://twitter.com/AnkitSingh711_',
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    ),
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-11 h-11 rounded-xl bg-surface-variant flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-primary/10 transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
