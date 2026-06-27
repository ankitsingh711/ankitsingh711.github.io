'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '@/utils/motion';

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/developerankit2127';

const socials = [
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
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@ankkoder',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden section-divider"
    >
      {/* Backgrounds */}
      <div className="absolute inset-0 dot-grid pointer-events-none" />
      <div className="absolute inset-0 section-glow pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Faded section label */}
      <div className="absolute top-10 right-6 lg:right-12 select-none pointer-events-none">
        <span className="section-bg-label">CONTACT</span>
      </div>

      <motion.div
        variants={staggerContainer(0.15, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.08 }}
        className="section-container relative z-10"
      >
        {/* Section marker */}
        <motion.div
          variants={fadeIn('right', 'tween', 0, 0.5)}
          className="flex items-center gap-4 mb-10"
        >
          <span className="font-mono text-primary/50 text-xs font-bold tracking-[0.22em] select-none">
            06 / CONTACT
          </span>
          <div
            className="h-px flex-1 max-w-[72px]"
            style={{ background: 'linear-gradient(to right, rgba(159,167,255,0.4), transparent)' }}
          />
        </motion.div>

        {/* Large heading — clip reveals */}
        {[
          { text: "Let's Build", stroke: false },
          { text: 'Something', stroke: true },
          { text: 'Together.', stroke: false },
        ].map(({ text, stroke }, i) => (
          <div key={text} className="overflow-hidden" style={{ marginBottom: i < 2 ? '0.1em' : '1.6rem' }}>
            <motion.div
              variants={{
                hidden: { y: '105%' },
                show: {
                  y: 0,
                  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.06 + i * 0.1 },
                },
              }}
            >
              <h2
                className={`font-manrope font-black leading-[0.92] select-none ${stroke ? 'text-stroke-primary' : 'text-on-background'}`}
                style={{ fontSize: 'clamp(30px, 5.5vw, 80px)', letterSpacing: '-0.035em' }}
              >
                {text}
              </h2>
            </motion.div>
          </div>
        ))}

        {/* Gradient line */}
        <motion.div
          variants={{
            hidden: { scaleX: 0 },
            show: { scaleX: 1, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.38 } },
          }}
          className="origin-left gradient-line mb-6"
        />

        {/* Subheading */}
        <motion.p
          variants={fadeIn('up', 'tween', 0.42, 0.55)}
          className="text-on-surface-variant font-inter text-base md:text-lg max-w-xl mb-12 leading-relaxed"
        >
          Pick a time that works for you — invites sent to both parties automatically.
        </motion.p>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* LEFT — Calendly */}
          <motion.div
            variants={fadeIn('right', 'tween', 0.1, 0.55)}
            className="lg:col-span-3"
          >
            <div className="sui-card overflow-hidden">
              {/* Card header */}
              <div className="px-6 pt-6 pb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-on-background font-manrope font-semibold text-base">Book a Meeting</h3>
                    <p className="text-on-surface-variant text-xs font-inter">Invites sent to both parties automatically</p>
                  </div>
                </div>
              </div>

              {/* Calendly iframe */}
              <div style={{ overflow: 'hidden', height: 'clamp(500px, 80vh, 700px)' }}>
                <iframe
                  src={`${CALENDLY_URL}?embed_type=Inline&hide_event_type_details=0&hide_gdpr_banner=1`}
                  width="100%"
                  height="100%"
                  style={{ border: 'none', display: 'block', overflow: 'hidden' }}
                  title="Book a meeting with Ankit"
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Contact info */}
          <motion.div
            variants={fadeIn('left', 'tween', 0.2, 0.55)}
            className="lg:col-span-2 space-y-4"
          >
            {/* Email */}
            <div className="sui-card p-5" style={{ borderLeft: '2px solid rgba(159,167,255,0.35)' }}>
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-on-surface-variant text-xs font-inter mb-1 uppercase tracking-wider">Email</p>
                  <a href="mailto:developerankit2127@gmail.com" className="text-on-background font-inter font-medium hover:text-primary transition-colors text-sm break-all">
                    developerankit2127@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="sui-card p-5" style={{ borderLeft: '2px solid rgba(98,250,227,0.35)' }}>
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-secondary/10 text-secondary shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-on-surface-variant text-xs font-inter mb-1 uppercase tracking-wider">Location</p>
                  <p className="text-on-background font-inter font-medium text-sm">Lucknow, India</p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="sui-card p-5" style={{ borderLeft: '2px solid rgba(200,144,255,0.35)' }}>
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-tertiary/10 text-tertiary shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="text-on-surface-variant text-xs font-inter mb-1 uppercase tracking-wider">Phone</p>
                  <a href="tel:+919839531208" className="text-on-background font-inter font-medium hover:text-primary transition-colors text-sm">
                    +91 9839531208
                  </a>
                </div>
              </div>
            </div>

            {/* Social row */}
            <div className="sui-card p-5">
              <p className="text-on-surface-variant text-xs font-inter mb-4 uppercase tracking-wider">Connect with me</p>
              <div className="flex gap-3 flex-wrap">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-11 h-11 rounded-xl bg-white/5 border border-white/[0.07] flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Open in full screen */}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-xs text-on-surface-variant font-inter hover:text-primary transition-colors py-2"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Open Calendly in full screen
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
