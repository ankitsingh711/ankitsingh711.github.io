'use client';

import { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';

const techStack = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker', 'LangChain', 'RAG', 'FastAPI', 'PostgreSQL', 'Redis', 'GraphQL', 'Kubernetes', 'Tailwind CSS', 'LangGraph'];
const marqueeItems = [...techStack, ...techStack];

export default function Hero() {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const smoothX = useSpring(mouseX, { stiffness: 28, damping: 22 });
  const smoothY = useSpring(mouseY, { stiffness: 28, damping: 22 });
  const imgX = useTransform(smoothX, [0, 1], [-18, 18]);
  const imgY = useTransform(smoothY, [0, 1], [-12, 12]);

  useEffect(() => {
    const handler = (e) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">

      {/* ── Background ── */}
      <div className="absolute inset-0 dot-grid opacity-35 pointer-events-none" />
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-[30%] w-[400px] h-[400px] bg-tertiary/6 rounded-full blur-[130px] pointer-events-none" />

      {/* ── Two-column layout ── */}
      <div className="relative z-10 flex flex-col lg:flex-row flex-1 min-h-screen">

        {/* ── LEFT: Text ── */}
        <div className="flex flex-col justify-center lg:w-[54%] px-4 sm:px-10 lg:px-16 xl:px-24 pt-28 pb-10 lg:pt-28 lg:pb-12 order-2 lg:order-1">

          {/* Section marker */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 mb-10"
          >
            <span className="font-mono text-primary/50 text-xs font-bold tracking-[0.22em] select-none">01 / PORTFOLIO</span>
            <div className="h-px flex-1 max-w-[72px]" style={{ background: 'linear-gradient(to right, rgba(159,167,255,0.4), transparent)' }} />
          </motion.div>

          {/* Role chips */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {[
              { label: 'Full Stack', dot: false },
              { label: 'AI Engineer', dot: true },
              { label: 'Cloud Architect', dot: false },
            ].map(({ label, dot }) => (
              <span key={label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-inter font-semibold uppercase tracking-widest border border-white/[0.07] text-on-surface-variant" style={{ background: 'rgba(255,255,255,0.025)' }}>
                {dot && <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />}
                {label}
              </span>
            ))}
          </motion.div>

          {/* Headline — word-by-word clip reveal */}
          {[
            { text: 'From Idea', style: 'text-on-background' },
            { text: 'to Production,', stroke: true },
            { text: 'AI-First.', style: 'text-on-background' },
          ].map(({ text, style, stroke }, i) => (
            <div key={text} className="overflow-hidden" style={{ marginBottom: i < 2 ? '0.15em' : '1.4rem' }}>
              <motion.div
                initial={{ y: '105%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1], delay: 0.14 + i * 0.1 }}
              >
                <h1
                  className={`font-manrope font-black leading-[0.92] select-none ${stroke ? 'text-stroke-primary' : style}`}
                  style={{ fontSize: 'clamp(38px, 6.8vw, 104px)', letterSpacing: '-0.035em' }}
                >
                  {text}
                </h1>
              </motion.div>
            </div>
          ))}

          {/* Positioning sub-statement */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.48, duration: 0.6 }}
            className="text-on-surface-variant/70 font-inter text-sm tracking-wide mb-6"
          >
            Helping B2B SaaS teams ship <span className="text-primary font-semibold">AI-powered features</span> — fast, clean, and built to scale.
          </motion.p>

          {/* Gradient divider line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="origin-left gradient-line mb-9"
          />

          {/* Name pill + location */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="flex items-center gap-4 mb-7"
          >
            <div className="relative shrink-0">
              <div className="absolute -inset-1 rounded-full blur-sm" style={{ background: 'linear-gradient(135deg, rgba(159,167,255,0.5), rgba(200,144,255,0.3))' }} />
              <div className="relative w-11 h-11 rounded-full overflow-hidden ring-1 ring-white/10">
                <Image src="/images/ankit-profile.webp" alt="Ankit Singh" fill className="object-cover object-top" />
              </div>
            </div>
            <div>
              <div className="text-on-background font-manrope font-bold text-sm">Ankit Singh</div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                <span className="text-on-surface-variant/60 font-inter text-xs">Lucknow, India</span>
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.7 }}
            className="text-on-surface-variant font-inter text-base md:text-lg leading-relaxed max-w-[440px] mb-10"
          >
            3+ years crafting production web platforms and AI-powered agents. I turn complex engineering problems into elegant, scalable solutions.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="flex flex-wrap gap-3 mb-14"
          >
            <a
              href="#projects"
              className="btn-shimmer group gradient-primary text-[color:var(--gradient-btn-text)] px-7 py-3.5 rounded-xl font-bold font-inter text-sm transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] flex items-center gap-2.5"
            >
              View Projects
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="btn-shimmer px-7 py-3.5 rounded-xl font-medium font-inter text-sm text-on-surface border border-white/10 hover:border-primary/35 hover:bg-primary/5 transition-all duration-300"
            >
              Let's Talk
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-stretch gap-7"
          >
            {[
              { v: '3+',  l: 'Years Exp' },
              { v: '10+', l: 'Projects' },
              { v: '8+',  l: 'AI Apps' },
            ].map(({ v, l }, i) => (
              <div key={l} className="flex items-stretch gap-7">
                {i > 0 && <div className="w-px self-stretch bg-white/[0.07]" />}
                <div>
                  <div
                    className="text-2xl lg:text-3xl font-manrope font-black"
                    style={{ background: 'linear-gradient(135deg, #9fa7ff 0%, #62fae3 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '-0.03em' }}
                  >
                    {v}
                  </div>
                  <div className="text-on-surface-variant/55 text-xs font-inter mt-0.5 uppercase tracking-wider">{l}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT: Full-bleed cinematic image ── */}
        <div className="relative lg:w-[46%] h-[45vh] sm:h-[55vh] lg:h-screen order-1 lg:order-2 overflow-hidden">

          {/* Gradient masks — seamless blend into background */}
          <div className="absolute inset-y-0 left-0 w-28 lg:w-52 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, var(--color-background, #020c1b) 0%, transparent 100%)' }} />
          <div className="absolute inset-x-0 top-0 h-28 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, var(--color-background, #020c1b) 0%, transparent 100%)' }} />
          <div className="absolute inset-x-0 bottom-0 h-48 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to top, var(--color-background, #020c1b) 0%, transparent 100%)' }} />

          {/* Subtle color overlay */}
          <div className="absolute inset-0 z-[1] pointer-events-none"
            style={{ background: 'linear-gradient(135deg, rgba(159,167,255,0.07) 0%, transparent 55%, rgba(200,144,255,0.04) 100%)' }} />

          {/* Image with mouse parallax */}
          <motion.div style={{ x: imgX, y: imgY }} className="absolute inset-0 scale-[1.08]">
            <Image
              src="/images/ankit-profile.webp"
              alt="Ankit Singh — Full Stack & AI Engineer"
              fill
              priority
              fetchPriority="high"
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 46vw"
            />
          </motion.div>

          {/* ── Floating glassmorphism cards ── */}

          {/* Card 1: Available */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: -10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 1.05, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="hidden sm:block absolute top-[15%] right-5 z-20"
          >
            <div className="glass border border-white/10 rounded-2xl px-5 py-3.5 flex items-center gap-3 backdrop-blur-md">
              <div className="relative">
                <div className="w-2.5 h-2.5 bg-secondary rounded-full" />
                <div className="absolute inset-0 bg-secondary rounded-full animate-ping opacity-50" />
              </div>
              <div>
                <div className="text-on-background text-sm font-manrope font-bold">Available</div>
                <div className="text-on-surface-variant/60 text-xs font-inter">Open to new projects</div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Latest project */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: -10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="hidden sm:block absolute top-[38%] right-5 z-20"
          >
            <div className="glass border border-white/10 rounded-2xl px-5 py-3.5 backdrop-blur-md">
              <div className="text-on-surface-variant/50 text-[10px] font-inter uppercase tracking-widest mb-1.5">Latest Project</div>
              <div className="text-on-background text-sm font-manrope font-bold flex items-center gap-1.5 mb-0.5">
                Chumley.ai
                <svg className="w-3 h-3 text-primary/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <div className="text-on-surface-variant/50 text-xs font-inter">Workforce Intelligence SaaS</div>
            </div>
          </motion.div>

          {/* Card 3: YouTube */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: -10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 1.35, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="hidden sm:block absolute bottom-[14%] right-5 z-20"
          >
            <a
              href="https://www.youtube.com/@ankkoder"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="glass border border-white/10 group-hover:border-red-400/35 rounded-2xl px-5 py-3.5 flex items-center gap-3 backdrop-blur-md transition-all duration-300 group-hover:scale-[1.02]">
                <div className="w-9 h-9 bg-red-500/10 rounded-xl flex items-center justify-center group-hover:bg-red-500/20 transition-colors shrink-0">
                  <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </div>
                <div>
                  <div className="text-on-background text-sm font-manrope font-bold tracking-[0.1em]">ANKODER</div>
                  <div className="text-on-surface-variant/50 text-[10px] font-inter">Subscribe on YouTube</div>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>

      {/* ── Tech marquee ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="relative z-20 w-full overflow-hidden shrink-0"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(8,16,36,0.65)', backdropFilter: 'blur(10px)' }}
      >
        <div className="flex animate-marquee py-3.5" style={{ width: 'max-content' }}>
          {marqueeItems.map((tech, i) => (
            <div key={i} className="flex items-center gap-3 px-7 shrink-0">
              <span className="w-1 h-1 rounded-full bg-primary/40" />
              <span className="text-on-surface-variant/45 text-xs font-inter tracking-wide whitespace-nowrap">{tech}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="hidden sm:flex absolute bottom-16 left-8 lg:left-16 xl:left-24 z-20 items-center gap-3 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.9, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-white/15 flex justify-center pt-1.5"
        >
          <div className="w-0.5 h-2 bg-primary/55 rounded-full" />
        </motion.div>
        <span className="text-on-surface-variant/35 text-[10px] font-inter uppercase tracking-[0.22em]">Scroll</span>
      </motion.div>
    </section>
  );
}
