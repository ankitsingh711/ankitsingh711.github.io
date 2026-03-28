'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ─── Animated Background Orbs ─── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-[10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-[20%] right-[10%] w-[450px] h-[450px] bg-tertiary/15 rounded-full blur-[120px] animate-float-reverse" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-secondary/10 rounded-full blur-[100px] animate-pulse-glow" />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(159,167,255,0.5) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(159,167,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* ─── Content ─── */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-on-surface-variant text-sm tracking-[0.25em] uppercase font-inter mb-8"
          >
            Full Stack Developer & Cloud Engineer
          </motion.p>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-manrope font-bold leading-[1.05] mb-8 text-balance">
            <span className="text-on-background">Hi, I&apos;m </span>
            <span className="gradient-text-hero">Ankit Singh</span>
          </h1>

          {/* Typing Subtitle */}
          <div className="text-xl md:text-2xl text-on-surface-variant font-inter mb-6 h-10">
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
            className="text-on-surface-variant/80 text-base md:text-lg max-w-2xl mx-auto font-inter leading-relaxed mb-12"
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
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <a
              href="#projects"
              className="group gradient-primary text-[#000a7b] px-8 py-4 rounded-xl font-semibold font-inter text-base hover:shadow-glow transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
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
              className="border border-outline-variant/30 text-on-surface-variant px-8 py-4 rounded-xl font-medium font-inter text-base hover:bg-surface-container-high/50 hover:text-on-surface transition-all duration-300"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex items-center justify-center gap-12 md:gap-20"
          >
            {[
              { value: '3+', label: 'Years Exp' },
              { value: '10+', label: 'Projects' },
              { value: '16+', label: 'Tech Skills' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-manrope font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-on-surface-variant text-xs md:text-sm font-inter tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
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
