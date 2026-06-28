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
              <p className="text-on-surface-variant text-lg leading-relaxed font-inter">
                With over{' '}
                <span className="text-primary font-semibold">3+ years</span> of
                hands-on experience in the MERN stack and Cloud/DevOps, I bridge
                the gap between complex backend architectures and intuitive
                frontend experiences. My approach is rooted in clean code,
                scalability, and user-centric design.
              </p>
              <p className="text-on-surface-variant text-lg leading-relaxed font-inter">
                Currently based in{' '}
                <span className="text-on-background font-medium">Lucknow, India</span>,
                I spend my time optimizing deployment pipelines and crafting
                robust API structures for global enterprise systems.
              </p>
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
          </div>
        </div>
      </motion.div>
    </section>
  );
}
