'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '@/utils/motion';

const GitHubCalendar = dynamic(
  () => import('react-github-calendar').then((mod) => mod.GitHubCalendar),
  { ssr: false }
);

export default function GithubContributions() {
  return (
    <section
      id="github"
      className="section-padding relative overflow-hidden section-divider"
    >
      {/* Backgrounds */}
      <div className="absolute inset-0 dot-grid pointer-events-none" />
      <div className="absolute inset-0 section-glow pointer-events-none" />

      {/* Faded section label */}
      <div className="absolute top-10 right-6 lg:right-12 select-none pointer-events-none">
        <span className="section-bg-label">GITHUB</span>
      </div>

      <motion.div
        variants={staggerContainer(0.1, 0)}
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
            07 / OPEN SOURCE
          </span>
          <div
            className="h-px flex-1 max-w-[72px]"
            style={{ background: 'linear-gradient(to right, rgba(159,167,255,0.4), transparent)' }}
          />
        </motion.div>

        {/* Heading — clip reveal */}
        {[
          { text: 'GitHub', stroke: false },
          { text: 'Contributions', stroke: true },
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
                style={{ fontSize: 'clamp(30px, 5.5vw, 82px)', letterSpacing: '-0.035em' }}
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
          className="origin-left gradient-line mb-14"
        />

        {/* Content */}
        <motion.div
          variants={fadeIn('up', 'tween', 0.2, 0.75)}
          className="flex flex-col items-center gap-10"
        >
          {/* GitHub Activity Graph */}
          <div className="sui-card w-full p-4 sm:p-6 md:p-8 overflow-hidden flex justify-center">
            <img
              src="https://github-readme-activity-graph.vercel.app/graph?username=ankitsingh711&bg_color=transparent&color=58A6FF&line=58A6FF&point=FFFFFF&area=true&hide_border=true&title_color=ffffff&axes_color=8b949e"
              alt="Ankit Singh's GitHub Contribution Graph"
              className="w-full max-w-4xl h-auto drop-shadow-md"
              loading="lazy"
            />
          </div>

          {/* GitHub Calendar Grid */}
          <div className="sui-card w-full p-4 sm:p-6 md:p-8 flex flex-col items-center overflow-x-auto">
            <div className="w-full flex justify-center py-4">
              <GitHubCalendar
                username="ankitsingh711"
                colorScheme="dark"
                fontSize={12}
                blockSize={10}
                blockMargin={4}
                theme={{
                  dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
