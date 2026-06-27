'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '@/utils/motion';

const experiences = [
  {
    company: 'Tuna Software Solution Pvt. Ltd.',
    role: 'Full Stack Engineer',
    period: '2023 — Present',
    description:
      'Leading development of enterprise cloud solutions, optimizing backend processing times by 40% and mentoring junior dev teams. Built and deployed scalable microservice architectures serving 100K+ users.',
    technologies: ['React', 'Node.js', 'AWS', 'MongoDB', 'Docker', 'GraphQL'],
    achievement: '40% faster backend processing',
    current: true,
  },
  {
    company: 'ZINEIQ',
    role: 'Associate Developer',
    period: '2022 — 2023',
    description:
      'Focused on MERN stack application performance and interactive UI implementation for high-traffic client portals. Improved page load times by 60% through code splitting and lazy loading strategies.',
    technologies: ['React', 'Express', 'PostgreSQL', 'Redis', 'Tailwind CSS'],
    achievement: '60% faster page load times',
    current: false,
  },
  {
    company: 'Edureka',
    role: 'Software Engineer Internship',
    period: '2021 — 2022',
    description:
      'Assisted in building scalable user interfaces for educational dashboards and developed responsive web components. Worked closely with senior engineers to implement RESTful API integrations and optimize frontend performance.',
    technologies: ['JavaScript', 'React', 'HTML/CSS', 'Git', 'REST APIs'],
    achievement: 'RESTful API integrations',
    current: false,
  },
];

const entryNumbers = ['01', '02', '03'];

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-padding relative overflow-hidden section-divider"
    >
      {/* Backgrounds */}
      <div className="absolute inset-0 dot-grid pointer-events-none" />
      <div className="absolute inset-0 section-glow-secondary pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/4 rounded-full blur-[160px] pointer-events-none" />

      {/* Faded section label */}
      <div className="absolute top-10 right-6 lg:right-12 select-none pointer-events-none">
        <span className="section-bg-label">EXP</span>
      </div>

      <motion.div
        variants={staggerContainer(0.15, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
        className="section-container relative z-10"
      >
        {/* Section marker */}
        <motion.div
          variants={fadeIn('right', 'tween', 0, 0.5)}
          className="flex items-center gap-4 mb-10"
        >
          <span className="font-mono text-primary/50 text-xs font-bold tracking-[0.22em] select-none">
            04 / EXPERIENCE
          </span>
          <div
            className="h-px flex-1 max-w-[72px]"
            style={{ background: 'linear-gradient(to right, rgba(159,167,255,0.4), transparent)' }}
          />
        </motion.div>

        {/* Heading clip reveal */}
        {[
          { text: 'Professional', stroke: false },
          { text: 'Journey', stroke: true },
        ].map(({ text, stroke }, i) => (
          <div key={text} className="overflow-hidden" style={{ marginBottom: i === 0 ? '0.12em' : '1.6rem' }}>
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
                style={{ fontSize: 'clamp(44px, 5.8vw, 90px)', letterSpacing: '-0.035em' }}
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
            show: { scaleX: 1, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.28 } },
          }}
          className="origin-left gradient-line mb-14"
        />

        {/* Experience cards */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              variants={fadeIn('up', 'tween', 0.1 + index * 0.15, 0.6)}
            >
              {/* Current role gets animated border */}
              <div className={`relative ${exp.current ? 'animated-border' : ''}`}>
                <div className="sui-card p-8 relative overflow-hidden">
                  {/* Large entry number — decorative */}
                  <div
                    className="absolute top-4 right-6 font-manrope font-black select-none pointer-events-none"
                    style={{ fontSize: '80px', lineHeight: 1, color: 'rgba(255,255,255,0.04)' }}
                  >
                    {entryNumbers[index]}
                  </div>

                  {/* Top bar */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5 relative z-10">
                    <div>
                      <h3 className="font-manrope font-black text-on-background" style={{ fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
                        {exp.company}
                      </h3>
                      <p className="text-primary text-sm font-inter font-medium mt-0.5">
                        {exp.role}
                      </p>
                    </div>
                    <div className="shrink-0">
                      {exp.current ? (
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-inter font-semibold border border-primary/20 bg-primary/10 text-primary">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                          {exp.period}
                          <span className="border-l border-primary/20 pl-2 text-primary/70">Now</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-inter font-medium border border-white/[0.07] text-on-surface-variant">
                          {exp.period}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-on-surface-variant text-base leading-relaxed font-inter mb-6 relative z-10 max-w-3xl">
                    {exp.description}
                  </p>

                  {/* Bottom: tech chips + achievement */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 relative z-10">
                    <div className="flex flex-wrap gap-2 flex-1">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="chip">{tech}</span>
                      ))}
                    </div>
                    <div
                      className="shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-inter font-medium"
                      style={{ background: 'rgba(98,250,227,0.06)', border: '1px solid rgba(98,250,227,0.15)', color: 'rgba(98,250,227,0.8)' }}
                    >
                      <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      {exp.achievement}
                    </div>
                  </div>
                </div>
              </div>

              {/* Gradient separator between cards */}
              {index < experiences.length - 1 && (
                <div className="gradient-line mt-6" />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
