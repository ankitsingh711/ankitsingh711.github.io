'use client';

import { useEffect, useRef } from 'react';

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
            });
          } else {
            entry.target.querySelectorAll('.reveal').forEach((el) => {
              el.classList.remove('visible');
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding bg-surface-container-low"
    >
      <div className="section-container">
        {/* Section Label */}
        <div className="reveal">
          <p className="text-secondary text-sm tracking-[0.2em] uppercase font-inter mb-4">
            About
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-manrope font-bold text-on-background mb-8 text-balance">
            The Story So Far
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Bio Text */}
          <div className="lg:col-span-3 space-y-6 reveal">
            <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed font-inter">
              With over <span className="text-primary font-medium">3 years</span> of
              hands-on experience in the MERN stack and Cloud/DevOps, I bridge
              the gap between complex backend architectures and intuitive
              frontend experiences. My approach is rooted in clean code,
              scalability, and user-centric design.
            </p>
            <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed font-inter">
              Currently based in{' '}
              <span className="text-on-background">Lucknow, India</span>, I
              spend my time optimizing deployment pipelines and crafting robust
              API structures for global enterprise systems.
            </p>

            {/* Code Glass Terminal */}
            <div className="code-glass p-5 mt-8">
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
                  <span className="text-primary">
                    &quot;Full Stack Engineer&quot;
                  </span>
                  ,{'\n'}
                  {'  '}
                  <span className="text-secondary">location</span>
                  <span className="text-on-surface-variant">:</span>{' '}
                  <span className="text-primary">
                    &quot;Lucknow, India&quot;
                  </span>
                  ,{'\n'}
                  {'  '}
                  <span className="text-secondary">stack</span>
                  <span className="text-on-surface-variant">:</span>{' '}
                  <span className="text-on-surface-variant">[</span>
                  <span className="text-primary">&quot;React&quot;</span>
                  <span className="text-on-surface-variant">,</span>{' '}
                  <span className="text-primary">&quot;Node&quot;</span>
                  <span className="text-on-surface-variant">,</span>{' '}
                  <span className="text-primary">&quot;Cloud&quot;</span>
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
            </div>
          </div>

          {/* Stats Cards */}
          <div className="lg:col-span-2 space-y-4 reveal">
            {[
              {
                value: '3+',
                label: 'Years of Experience',
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
                value: '16+',
                label: 'Technologies',
                desc: 'Frontend, backend, cloud & DevOps',
                color: 'tertiary',
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-surface-container rounded-2xl p-6 hover:bg-surface-container-high transition-all duration-500 group"
              >
                <div
                  className={`text-3xl font-manrope font-bold mb-1 ${
                    stat.color === 'primary'
                      ? 'text-primary'
                      : stat.color === 'secondary'
                      ? 'text-secondary'
                      : 'text-tertiary'
                  }`}
                >
                  {stat.value}
                </div>
                <div className="text-on-background text-base font-manrope font-semibold mb-1">
                  {stat.label}
                </div>
                <div className="text-on-surface-variant text-sm font-inter">
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
