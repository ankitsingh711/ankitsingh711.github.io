'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { staggerContainer, fadeIn } from '@/utils/motion';
import Image from 'next/image';

const testimonials = [
  {
    quote:
      "Ankit delivered our workforce management platform ahead of schedule with zero critical bugs. His ability to translate complex business rules into clean, maintainable code is exceptional. The bonus-rule engine he architected handles edge cases we didn't even think of.",
    name: 'Priya Sharma',
    role: 'Head of Product',
    company: 'Chumley.ai',
    avatar: null,
    initials: 'PS',
    color: 'primary',
  },
  {
    quote:
      "We brought Ankit in to optimise our backend processing pipeline. He cut response times by 40% in the first two weeks — without touching the database schema. His understanding of Node.js internals and AWS Lambda cold starts is genuinely impressive.",
    name: 'Rahul Mehta',
    role: 'Engineering Manager',
    company: 'Tuna Software',
    avatar: null,
    initials: 'RM',
    color: 'secondary',
  },
  {
    quote:
      "The RAG system Ankit built for our document processing pipeline was production-ready on day one. He clearly understands not just the LangChain APIs but the actual reasoning behind chunking strategies, embedding models, and retrieval quality. Rare to find that depth.",
    name: 'Daniel Chen',
    role: 'CTO',
    company: 'DocuMind',
    avatar: null,
    initials: 'DC',
    color: 'tertiary',
  },
  {
    quote:
      "Ankit built our merchant dashboard in 3 weeks flat — TypeScript, TanStack Query, Zod validation, MSW mocking, the works. The codebase is so clean I was able to onboard two new engineers with zero hand-holding. That's real craftsmanship.",
    name: 'Aisha Patel',
    role: 'Founder',
    company: 'bepay',
    avatar: null,
    initials: 'AP',
    color: 'primary',
  },
];

function StarRating() {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden section-divider">
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
      <div className="absolute inset-0 section-glow-tertiary pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/4 rounded-full blur-[150px] pointer-events-none" />

      {/* Faded bg label */}
      <div className="absolute top-10 right-6 lg:right-12 select-none pointer-events-none">
        <span className="section-bg-label">TRUST</span>
      </div>

      <motion.div
        variants={staggerContainer(0.1, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.08 }}
        className="section-container relative z-10"
      >
        {/* Section marker */}
        <motion.div variants={fadeIn('right', 'tween', 0, 0.5)} className="flex items-center gap-4 mb-10">
          <span className="font-mono text-primary/50 text-xs font-bold tracking-[0.22em] select-none">
            06 / TESTIMONIALS
          </span>
          <div className="h-px flex-1 max-w-[72px]" style={{ background: 'linear-gradient(to right, rgba(159,167,255,0.4), transparent)' }} />
        </motion.div>

        {/* Heading */}
        {[
          { text: 'What Clients', stroke: false },
          { text: 'Say About Me', stroke: true },
        ].map(({ text, stroke }, i) => (
          <div key={text} className="overflow-hidden" style={{ marginBottom: i === 0 ? '0.12em' : '1.6rem' }}>
            <motion.div
              variants={{
                hidden: { y: '105%' },
                show: { y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.08 + i * 0.1 } },
              }}
            >
              <h2
                className={`font-manrope font-black leading-[0.92] select-none ${stroke ? 'text-stroke-primary' : 'text-on-background'}`}
                style={{ fontSize: 'clamp(30px, 5.5vw, 82px)', letterSpacing: '-0.035em' }}
              >
                {text}
              </h2>
            </motion.div>
          </div>
        ))}

        {/* Gradient line */}
        <motion.div
          variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 } } }}
          className="origin-left gradient-line mb-14"
        />

        {/* Testimonials grid */}
        <div ref={ref} className="grid md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="sui-card p-5 sm:p-7 h-full flex flex-col gap-5 relative overflow-hidden group">
                {/* Subtle glow on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                  t.color === 'secondary' ? 'bg-secondary/[0.03]' : t.color === 'tertiary' ? 'bg-tertiary/[0.03]' : 'bg-primary/[0.03]'
                }`} />

                {/* Quote mark */}
                <div
                  className={`text-6xl font-serif leading-none select-none absolute top-5 right-6 opacity-10 ${
                    t.color === 'secondary' ? 'text-secondary' : t.color === 'tertiary' ? 'text-tertiary' : 'text-primary'
                  }`}
                >
                  &ldquo;
                </div>

                {/* Stars */}
                <StarRating />

                {/* Quote */}
                <p className="text-on-surface-variant font-inter text-base leading-relaxed flex-1 relative z-10">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/[0.06] relative z-10">
                  {/* Avatar */}
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center text-sm font-manrope font-bold shrink-0 ${
                      t.color === 'secondary'
                        ? 'bg-secondary/15 text-secondary'
                        : t.color === 'tertiary'
                        ? 'bg-tertiary/15 text-tertiary'
                        : 'bg-primary/15 text-primary'
                    }`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-on-background font-manrope font-semibold text-sm">{t.name}</div>
                    <div className="text-on-surface-variant/60 font-inter text-xs mt-0.5">
                      {t.role} · {t.company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeIn('up', 'tween', 0.5, 0.5)}
          className="mt-12 text-center"
        >
          <p className="text-on-surface-variant/60 font-inter text-sm mb-4">
            Want to work together?
          </p>
          <a
            href="#contact"
            className="btn-shimmer inline-flex items-center gap-2 gradient-primary text-[color:var(--gradient-btn-text)] px-7 py-3.5 rounded-xl font-bold font-inter text-sm transition-all duration-300 hover:scale-[1.03]"
          >
            Let's Build Something
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
