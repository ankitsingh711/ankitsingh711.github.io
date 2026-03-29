'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { staggerContainer, textVariant, fadeIn } from '@/utils/motion';

const projects = [
  {
    id: 1,
    title: 'SGTraDex',
    description:
      'Enterprise-grade supply chain digitalization platform enabling seamless trade data exchange across global logistics networks. Built with microservice architecture.',
    technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'Docker'],
    image: '/images/sgtradex.png',
    gradient: 'from-primary/20 via-tertiary/10 to-surface-container',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'Six Flags Web App',
    description:
      'High-performance entertainment booking engine serving millions of visitors. Optimized for speed with server-side rendering and edge caching.',
    technologies: ['Next.js', 'TypeScript', 'Sanity', 'Azure', 'Redis'],
    image: '/images/sixflags.png',
    gradient: 'from-secondary/20 via-primary/10 to-surface-container',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'StylerApp',
    description:
      'A full-stack fashion discovery platform with AI-driven style recommendations and a seamless checkout experience. Built with performance and mobile-first design.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind'],
    image: '/images/styler.png',
    gradient: 'from-tertiary/20 via-secondary/10 to-surface-container',
    liveUrl: 'https://styller.netlify.app/index.html',
    githubUrl: 'https://github.com/shanukajain/Styler',
  },
  {
    id: 4,
    title: 'SmileSlot',
    description:
      'Full-stack online dental booking platform with real-time appointment management, automated reminders, and integrated payment processing.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: '/images/smileslot.png',
    gradient: 'from-primary/15 via-secondary/10 to-surface-container',
    liveUrl: 'https://smileslot.netlify.app/',
    githubUrl: 'https://github.com/anonymous10062002/SmileSlot',
  },
];

export default function Projects() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="projects" className="section-padding">
      <motion.div 
        variants={staggerContainer(0.25)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
        className="section-container"
      >
        {/* Section Header */}
        <motion.div variants={textVariant()} className="mb-16">
          <p className="text-secondary text-sm tracking-[0.2em] uppercase font-inter mb-4">
            Work
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-manrope font-bold text-on-background mb-4">
            Featured Projects
          </h2>
          <p className="text-on-surface-variant text-lg font-inter max-w-2xl">
            A selection of enterprise and creative applications.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              variants={fadeIn('up', 'spring', index * 0.2, 0.75)}
              key={project.id}
              className="group"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="bg-surface-container rounded-2xl overflow-hidden hover:bg-surface-container-high transition-all duration-500 hover:-translate-y-1">
                {/* Image / Gradient Area */}
                <div className={`relative h-52 md:h-64 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl font-manrope font-bold text-on-background/[0.06] select-none">
                        {project.title.charAt(0)}
                      </div>
                      {/* Decorative elements */}
                      <div className="absolute top-6 right-6 w-20 h-20 border border-outline-variant/10 rounded-xl rotate-12" />
                      <div className="absolute bottom-6 left-6 w-16 h-16 border border-outline-variant/10 rounded-full" />
                    </div>
                  )}

                  {/* Hover overlay with links */}
                  <div
                    className={`absolute inset-0 bg-background/70 backdrop-blur-sm flex items-center justify-center gap-4 transition-opacity duration-300 ${
                      hoveredId === project.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    {project.githubUrl && project.githubUrl !== '#' && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface hover:text-primary hover:bg-surface-bright transition-all"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                      </a>
                    )}
                    {project.liveUrl && project.liveUrl !== '#' && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface hover:text-secondary hover:bg-surface-bright transition-all"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-manrope font-bold text-on-background mb-3">
                    {project.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm md:text-base leading-relaxed font-inter mb-5">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
