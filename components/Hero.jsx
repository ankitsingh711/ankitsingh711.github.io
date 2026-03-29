'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

// Dynamically import 3D character (no SSR - Three.js needs browser APIs)
const Character3D = dynamic(() => import('./Character3D'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[400px] md:min-h-[500px] flex items-center justify-center">
      <div className="w-16 h-16 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
    </div>
  ),
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* ─── Animated Background Orbs ─── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-[10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-[20%] right-[10%] w-[450px] h-[450px] bg-tertiary/15 rounded-full blur-[120px] animate-float-reverse" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-secondary/10 rounded-full blur-[100px] animate-pulse-glow" />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-100 dark:opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(var(--grid-line-color) 1px, transparent 1px),
                              linear-gradient(90deg, var(--grid-line-color) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* ─── Content: Split Layout ─── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-4 items-center min-h-screen py-24">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-on-surface-variant text-sm tracking-[0.25em] uppercase font-inter mb-6"
            >
              Full Stack Developer & Cloud Engineer
            </motion.p>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-manrope font-bold leading-[1.05] mb-6 text-balance">
              <span className="text-on-background">Hi, I&apos;m </span>
              <span className="gradient-text-hero">Ankit Singh</span>
            </h1>

            {/* Typing Subtitle */}
            <div className="text-lg md:text-xl text-on-surface-variant font-inter mb-5 h-8">
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
              className="text-on-surface-variant/80 text-base md:text-lg max-w-xl mx-auto lg:mx-0 font-inter leading-relaxed mb-10"
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
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-12"
            >
              <a
                href="#projects"
                className="group gradient-primary text-[color:var(--gradient-btn-text)] px-8 py-4 rounded-xl font-semibold font-inter text-base hover:shadow-glow transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
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
              className="flex items-center justify-center lg:justify-start gap-10 md:gap-14"
            >
              {[
                { value: '3+', label: 'Years Exp' },
                { value: '10+', label: 'Projects' },
                { value: '16+', label: 'Tech Skills' },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-manrope font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-on-surface-variant text-xs md:text-sm font-inter tracking-wide uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: 3D Character */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2 flex items-center justify-center"
          >
            <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl aspect-square relative">
              {/* Ambient glow behind character */}
              <div className="absolute inset-0 bg-primary/5 rounded-full blur-[60px] animate-pulse-glow" />
              <Suspense
                fallback={
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-16 h-16 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                  </div>
                }
              >
                <Character3D />
              </Suspense>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
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
