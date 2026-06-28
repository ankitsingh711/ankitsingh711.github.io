'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '@/utils/motion';

const stats = [
  {
    value: '3+',
    label: 'Years Experience',
    desc: 'Building production-grade applications',
    color: 'primary',
  },
  {
    value: '10+',
    label: 'Projects Delivered',
    desc: 'Enterprise & creative applications',
    color: 'secondary',
  },
  {
    value: '8+',
    label: 'AI Apps Built',
    desc: 'Agentic AI, RAG, LLM systems',
    color: 'tertiary',
  },
  {
    value: '20+',
    label: 'Technologies',
    desc: 'Frontend, Backend, Cloud & AI',
    color: 'primary',
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="section-padding relative overflow-hidden section-divider"
    >
      {/* Backgrounds */}
      <div className="absolute inset-0 dot-grid pointer-events-none" />
      <div className="absolute inset-0 section-glow-secondary pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-tertiary/4 rounded-full blur-[160px] pointer-events-none" />

      {/* Faded section label */}
      <div className="absolute top-10 right-6 lg:right-12 select-none pointer-events-none">
        <span className="section-bg-label">ABOUT</span>
      </div>

      <motion.div
        variants={staggerContainer(0.1, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="section-container relative z-10"
      >
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-start">

          {/* ── LEFT ── */}
          <div>
            {/* Section marker */}
            <motion.div
              variants={fadeIn('right', 'tween', 0, 0.5)}
              className="flex items-center gap-4 mb-10"
            >
              <span className="font-mono text-primary/50 text-xs font-bold tracking-[0.22em] select-none">
                02 / ABOUT
              </span>
              <div
                className="h-px flex-1 max-w-[72px]"
                style={{ background: 'linear-gradient(to right, rgba(159,167,255,0.4), transparent)' }}
              />
            </motion.div>

            {/* Heading — clip reveal */}
            {[
              { text: 'Who', stroke: false },
              { text: 'I Am', stroke: true },
            ].map(({ text, stroke }, i) => (
              <div key={text} className="overflow-hidden" style={{ marginBottom: i === 0 ? '0.12em' : '1.6rem' }}>
                <motion.div
                  variants={{
                    hidden: { y: '105%' },
                    show: {
                      y: 0,
                      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.08 + i * 0.1 },
                    },
                  }}
                >
                  <h2
                    className={`font-manrope font-black leading-[0.92] select-none ${stroke ? 'text-stroke-primary' : 'text-on-background'}`}
                    style={{ fontSize: 'clamp(36px, 5.8vw, 90px)', letterSpacing: '-0.035em' }}
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
                show: { scaleX: 1, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 } },
              }}
              className="origin-left gradient-line mb-8"
            />

            {/* Bio paragraphs */}
            <motion.div variants={fadeIn('right', 'tween', 0.35, 0.6)} className="space-y-5">
              <p className="text-on-surface-variant font-inter text-base leading-relaxed mb-5">
                I&apos;m a Full Stack &amp; AI Engineer who genuinely enjoys the hard parts — the architecture decisions at 2am, the RAG pipeline that wouldn&apos;t retrieve, the microservice that needed one more retry strategy. I&apos;ve spent 3+ years turning ambiguous product ideas into systems that actually scale.
              </p>
              <p className="text-on-surface-variant font-inter text-base leading-relaxed">
                My edge is the intersection of deep backend engineering and applied AI. Most teams have one or the other. I speak both languages — which means I can own an LLM feature end-to-end, from prompt design and vector store tuning to the Node.js API and React UI that ships it to users.
              </p>
              <div className="mt-5 inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-red-500/20 bg-red-500/5">
                <svg className="w-4 h-4 text-red-500 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a2.96 2.96 0 00-2.083-2.091C19.58 3.6 12 3.6 12 3.6s-7.58 0-9.415.495A2.96 2.96 0 00.502 6.186C0 8.03 0 12 0 12s0 3.97.502 5.814a2.96 2.96 0 002.083 2.091c1.835.495 9.415.495 9.415.495s7.58 0 9.415-.495a2.96 2.96 0 002.083-2.091c.502-1.844.502-5.814.502-5.814s0-3.97-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                <span className="text-on-surface-variant text-xs font-inter">I also teach Full Stack &amp; AI engineering on <a href="https://youtube.com/@ankkoder" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 font-semibold transition-colors">@ankkoder</a> — making complex concepts accessible for everyone learning to build.</span>
              </div>
            </motion.div>

            {/* Code terminal */}
            <motion.div variants={fadeIn('up', 'tween', 0.45, 0.6)} className="code-glass p-5 mt-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                <div className="w-3 h-3 rounded-full bg-green-400/60" />
                <span className="ml-3 text-on-surface-variant/60 text-xs font-mono">
                  ankit.config.js
                </span>
              </div>
              <pre className="text-sm font-mono leading-relaxed overflow-x-auto">
                <code>
                  <span className="text-tertiary">const</span>{' '}
                  <span className="text-on-background">developer</span>{' '}
                  <span className="text-on-surface-variant">=</span>{' '}
                  <span className="text-tertiary">{'{'}</span>
                  {'\n'}
                  {'  '}
                  <span className="text-secondary">name</span>
                  <span className="text-on-surface-variant">:</span>{' '}
                  <span className="text-primary">&quot;Ankit Singh&quot;</span>,{'\n'}
                  {'  '}
                  <span className="text-secondary">role</span>
                  <span className="text-on-surface-variant">:</span>{' '}
                  <span className="text-primary">&quot;Full Stack Engineer&quot;</span>,{'\n'}
                  {'  '}
                  <span className="text-secondary">location</span>
                  <span className="text-on-surface-variant">:</span>{' '}
                  <span className="text-primary">&quot;Lucknow, India&quot;</span>,{'\n'}
                  {'  '}
                  <span className="text-secondary">stack</span>
                  <span className="text-on-surface-variant">:</span>{' '}
                  <span className="text-on-surface-variant">[</span>
                  <span className="text-primary">&quot;React&quot;</span>
                  <span className="text-on-surface-variant">,</span>{' '}
                  <span className="text-primary">&quot;Node&quot;</span>
                  <span className="text-on-surface-variant">,</span>{' '}
                  <span className="text-primary">&quot;Cloud&quot;</span>
                  <span className="text-on-surface-variant">,</span>{' '}
                  <span className="text-primary">&quot;Agentic AI&quot;</span>
                  <span className="text-on-surface-variant">,</span>{' '}
                  <span className="text-primary">&quot;LLM&quot;</span>
                  <span className="text-on-surface-variant">,</span>{' '}
                  <span className="text-primary">&quot;RAG&quot;</span>
                  <span className="text-on-surface-variant">,</span>{' '}
                  <span className="text-primary">&quot;Python&quot;</span>
                  <span className="text-on-surface-variant">],</span>
                  {'\n'}
                  {'  '}
                  <span className="text-secondary">available</span>
                  <span className="text-on-surface-variant">:</span>{' '}
                  <span className="text-secondary">true</span>
                  {'\n'}
                  <span className="text-tertiary">{'}'}</span>;
                </code>
              </pre>
            </motion.div>

            {/* Education card */}
            <motion.div variants={fadeIn('up', 'tween', 0.55, 0.6)} className="sui-card p-5 mt-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                <span className="font-mono text-[10px] tracking-[0.18em] text-on-surface-variant/50 uppercase">Education</span>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="text-on-background font-manrope font-bold text-sm">B.Tech — Computer Science</div>
                  <div className="text-on-surface-variant text-xs font-inter mt-0.5">Dr. A.P.J. Abdul Kalam Technical University</div>
                  <div className="text-on-surface-variant/50 text-[11px] font-inter mt-0.5">2019 — 2023</div>
                </div>
                <div className="h-px bg-white/[0.06]" />
                <div>
                  <div className="text-on-background font-manrope font-bold text-sm">Higher Secondary — Science (PCM)</div>
                  <div className="text-on-surface-variant text-xs font-inter mt-0.5">Kendriya Vidyalaya</div>
                  <div className="text-on-surface-variant/50 text-[11px] font-inter mt-0.5">2017 — 2019</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT ── */}
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeIn('left', 'tween', 0.1 + i * 0.1, 0.55)}
                className="sui-card p-4 sm:p-6"
              >
                <div
                  className="font-manrope font-black mb-1"
                  style={{
                    fontSize: 'clamp(32px, 4vw, 56px)',
                    lineHeight: 1,
                    background:
                      stat.color === 'primary'
                        ? 'linear-gradient(135deg, #9fa7ff, #62fae3)'
                        : stat.color === 'secondary'
                        ? 'linear-gradient(135deg, #62fae3, #9fa7ff)'
                        : 'linear-gradient(135deg, #c890ff, #62fae3)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: '-0.03em',
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-on-background font-manrope font-bold text-sm sm:text-base mb-0.5">
                  {stat.label}
                </div>
                <div className="text-on-surface-variant text-xs font-inter">
                  {stat.desc}
                </div>
              </motion.div>
            ))}

            {/* Currently badge */}
            <motion.div
              variants={fadeIn('left', 'tween', 0.5, 0.55)}
              className="sui-card p-4 flex items-center gap-3"
            >
              <span className="text-base leading-none">🟢</span>
              <div>
                <span className="text-on-surface-variant text-xs font-inter uppercase tracking-widest">
                  Currently in
                </span>
                <p className="text-on-background font-manrope font-bold text-sm mt-0.5">
                  Lucknow, India
                </p>
              </div>
            </motion.div>

            {/* LinkedIn profile card */}
            <motion.a
              href="https://www.linkedin.com/in/ankit-singh2127"
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeIn('left', 'tween', 0.6, 0.55)}
              className="col-span-2 lg:col-span-1 block group"
            >
              <div
                className="relative rounded-2xl overflow-hidden border border-white/[0.07] hover:border-[#0A66C2]/40 transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.02)' }}
              >
                {/* Top banner */}
                <div
                  className="h-14 w-full"
                  style={{ background: 'linear-gradient(135deg, #0A66C2 0%, #0077B5 60%, #00A0DC 100%)' }}
                />

                {/* Avatar overlapping banner */}
                <div className="px-4 pb-4">
                  <div className="relative -mt-7 mb-3 flex items-end justify-between">
                    <div className="w-14 h-14 rounded-full border-2 border-[#0A1929] overflow-hidden shrink-0">
                      <img
                        src="/images/ankit-profile.webp"
                        alt="Ankit Singh"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* LinkedIn logo */}
                    <div className="flex items-center gap-1.5 mt-2">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#0A66C2">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      <span className="text-[10px] font-inter font-semibold text-[#0A66C2]">LinkedIn</span>
                    </div>
                  </div>

                  {/* Name & title */}
                  <div className="mb-3">
                    <div className="flex items-center gap-1.5">
                      <span className="text-on-background font-manrope font-bold text-sm">Ankit Singh</span>
                    </div>
                    <p className="text-on-surface-variant text-[11px] font-inter leading-snug mt-0.5">
                      Full Stack AI Developer @ ChumleyAI · Gen AI + Agentic AI
                    </p>
                  </div>

                  {/* Stats row */}
                  <div className="flex items-center gap-3 mb-3 pb-3 border-b border-white/[0.06]">
                    <div className="text-center">
                      <div className="text-on-background font-manrope font-black text-base leading-none" style={{ background: 'linear-gradient(135deg, #0A66C2, #00A0DC)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>11K+</div>
                      <div className="text-on-surface-variant text-[10px] font-inter mt-0.5">Followers</div>
                    </div>
                    <div className="w-px h-6 bg-white/[0.08]" />
                    <div className="text-center">
                      <div className="text-on-background font-manrope font-black text-base leading-none" style={{ background: 'linear-gradient(135deg, #0A66C2, #00A0DC)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>500+</div>
                      <div className="text-on-surface-variant text-[10px] font-inter mt-0.5">Connections</div>
                    </div>
                  </div>

                  {/* Connect CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-on-surface-variant font-inter">Let&apos;s connect →</span>
                    <span
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-inter font-semibold text-white group-hover:scale-105 transition-transform duration-200"
                      style={{ background: '#0A66C2' }}
                    >
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42-.39-.39-1.02-.39-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z" transform="rotate(180 12 12)" />
                      </svg>
                      Connect
                    </span>
                  </div>
                </div>
              </div>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
