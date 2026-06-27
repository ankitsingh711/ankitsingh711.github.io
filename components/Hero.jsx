'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';

const techStack = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'AWS',
  'Docker',
  'MongoDB',
  'PostgreSQL',
  'Redis',
  'GraphQL',
  'Kubernetes',
  'Tailwind CSS',
  'LangChain',
  'Python',
  'CI/CD',
  'Terraform',
];

// Double for seamless loop
const marqueeItems = [...techStack, ...techStack];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* ─── Background: Dot Grid ─── */}
      <div className="absolute inset-0 dot-grid opacity-100 pointer-events-none" />

      {/* ─── Section Glow ─── */}
      <div className="absolute inset-0 section-glow pointer-events-none" />

      {/* ─── Animated Orbs (subtle) ─── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] animate-float" />
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-tertiary/08 rounded-full blur-[140px] animate-float-reverse" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-secondary/06 rounded-full blur-[100px] animate-pulse-glow" />
      </div>

      {/* ─── Content: Two Column Layout ─── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full flex-1 flex flex-col">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center flex-1 py-24 pt-32 lg:pt-28 text-center lg:text-left">

          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex flex-col items-center lg:items-start"
          >
            {/* Announcement Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mb-8"
            >
              <a
                href="https://drive.google.com/uc?export=download&id=1jmjW5--EHX_rSb8SHJzmHEZZDbriOHv_"
                target="_blank"
                rel="noopener noreferrer"
                className="announcement-badge"
              >
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse flex-shrink-0" />
                Open to New Projects
                <span className="text-secondary/60 mx-1">·</span>
                View Resume
                <svg className="w-3.5 h-3.5 ml-0.5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>

            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-on-surface-variant text-xs tracking-[0.25em] uppercase font-inter mb-6"
            >
              Full Stack Developer & Cloud Engineer
            </motion.p>

            {/* Main Headline */}
            <h1 className="text-6xl sm:text-7xl md:text-[5.5rem] lg:text-[6.5rem] font-manrope font-bold leading-[1.05] mb-6 text-balance max-w-4xl">
              <span className="text-on-background">Hi, I&apos;m </span>
              <span className="gradient-text-hero">Ankit Singh</span>
            </h1>

            {/* Typing Subtitle */}
            <div className="text-lg md:text-xl lg:text-2xl text-on-surface-variant font-inter mb-6 h-10 flex justify-center lg:justify-start">
              <TypeAnimation
                sequence={[
                  'Building scalable web applications',
                  2000,
                  'Crafting cloud-ready architectures',
                  2000,
                  'Engineering high-performance APIs',
                  2000,
                  'Designing intuitive user experiences',
                  2000,
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
                className="font-light"
              />
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-on-surface-variant/80 text-base md:text-lg lg:text-xl max-w-2xl font-inter leading-relaxed mb-12"
            >
              Specializing in high-performance digital ecosystems with modern
              engineering practices. From complex backend architectures to
              intuitive frontend experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-16"
            >
              <a
                href="#projects"
                className="group gradient-primary text-[color:var(--gradient-btn-text)] px-8 py-4 rounded-xl font-semibold font-inter text-base hover:shadow-glow transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                View Projects
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="#contact"
                className="border border-outline/60 text-on-surface px-8 py-4 rounded-xl font-medium font-inter text-base hover:bg-outline-variant/20 transition-all duration-300 flex items-center justify-center w-full sm:w-auto"
              >
                Get in Touch
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-8 md:gap-12 w-full max-w-3xl"
            >
              {[
                { value: '3+', label: 'Years Exp' },
                { value: '10+', label: 'Projects' },
                { value: '16+', label: 'Tech Skills' },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-3xl md:text-4xl font-manrope font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-on-surface-variant text-xs md:text-sm font-inter tracking-wide uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Portrait Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: 'easeOut' }}
            className="relative w-full max-w-md mx-auto lg:max-w-none lg:w-full aspect-[4/5] lg:aspect-square xl:aspect-[4/5] rounded-[2rem] overflow-hidden glass glass-border p-2 group"
          >
            {/* Glowing Backdrop behind the image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 blur-2xl group-hover:scale-110 transition-transform duration-700" />

            <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden">
              {/* Fallback gradient if image fails to load initially */}
              <div className="absolute inset-0 bg-surface-container-high animate-pulse" />

              <Image
                src="/images/ankit-profile.jpg"
                alt="Ankit Singh"
                fill
                priority
                className="object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Floating Detail Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute -bottom-0 left-1 -translate-x-[55%] z-20 whitespace-nowrap"
            >
              <a
                href="https://www.youtube.com/@ankkoder"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group cursor-pointer block"
              >
                {/* Animated glowing border effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 via-rose-500 to-red-400 rounded-full opacity-40 group-hover:opacity-100 blur transition duration-500" />

                <div className="relative flex items-center gap-3 px-6 py-3 bg-surface-container rounded-full shadow-2xl overflow-hidden shadow-red-500/10 dark:shadow-red-500/20 glass">
                  {/* YouTube Icon */}
                  <svg className="w-6 h-6 text-red-500 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>

                  {/* Label */}
                  <div className="flex flex-col text-left">
                    <span className="text-on-background font-manrope font-bold text-sm leading-tight tracking-[0.2em]">ANKODER</span>
                    <span className="text-on-surface-variant font-inter text-[10px] tracking-widest uppercase mt-0.5">Subscribe on YouTube</span>
                  </div>
                </div>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ─── Tech Marquee Strip ─── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="relative z-10 w-full overflow-hidden"
        style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          background: 'rgba(15, 25, 48, 0.35)',
          backdropFilter: 'blur(8px)',
        }}
      >
        <div className="flex animate-marquee py-4" style={{ width: 'max-content' }}>
          {marqueeItems.map((tech, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-6 shrink-0"
            >
              <span className="w-1 h-1 rounded-full bg-primary/50" />
              <span className="text-on-surface-variant/70 text-sm font-inter font-medium tracking-wide whitespace-nowrap">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-outline-variant/40 flex justify-center pt-2"
        >
          <motion.div className="w-1 h-2 bg-primary/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
