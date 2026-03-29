'use client';

import { useEffect, useRef } from 'react';

const experiences = [
  {
    company: 'Tuna Software Solution Pvt. Ltd.',
    role: 'Full Stack Engineer',
    period: '2023 — Present',
    description:
      'Leading development of enterprise cloud solutions, optimizing backend processing times by 40% and mentoring junior dev teams. Built and deployed scalable microservice architectures serving 100K+ users.',
    technologies: ['React', 'Node.js', 'AWS', 'MongoDB', 'Docker', 'GraphQL'],
    current: true,
  },
  {
    company: 'ZINEIQ',
    role: 'Associate Developer',
    period: '2022 — 2023',
    description:
      'Focused on MERN stack application performance and interactive UI implementation for high-traffic client portals. Improved page load times by 60% through code splitting and lazy loading strategies.',
    technologies: ['React', 'Express', 'PostgreSQL', 'Redis', 'Tailwind CSS'],
    current: false,
  },
  {
    company: 'Edureka',
    role: 'Software Engineer Internship',
    period: '2021 — 2022',
    description:
      'Assisted in building scalable user interfaces for educational dashboards and developed responsive web components. Worked closely with senior engineers to implement RESTful API integrations and optimize frontend performance.',
    technologies: ['JavaScript', 'React', 'HTML/CSS', 'Git', 'REST APIs'],
    current: false,
  },
];

export default function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 150);
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
      id="experience"
      ref={sectionRef}
      className="section-padding bg-surface-container-low"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="reveal">
          <p className="text-secondary text-sm tracking-[0.2em] uppercase font-inter mb-4">
            Career
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-manrope font-bold text-on-background mb-16">
            Professional Journey
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-tertiary/20 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.company} className="reveal relative pl-8 md:pl-20">
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 md:left-8 top-2 -translate-x-1/2 w-4 h-4 rounded-full border-2 ${
                    exp.current
                      ? 'border-primary bg-primary/30 shadow-[0_0_12px_rgba(159,167,255,0.4)]'
                      : 'border-outline-variant bg-surface-container'
                  }`}
                />

                {/* Content */}
                <div className="bg-surface-container rounded-2xl p-8 hover:bg-surface-container-high transition-all duration-500">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-manrope font-bold text-on-background">
                        {exp.company}
                      </h3>
                      <p className="text-primary font-inter font-medium">
                        {exp.role}
                      </p>
                    </div>
                    <span
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-inter font-medium tracking-wide ${
                        exp.current
                          ? 'bg-primary/10 text-primary'
                          : 'bg-surface-variant text-on-surface-variant'
                      }`}
                    >
                      {exp.current && (
                        <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                      )}
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-on-surface-variant text-base leading-relaxed font-inter mb-6">
                    {exp.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
