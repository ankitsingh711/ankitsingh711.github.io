'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { staggerContainer, fadeIn } from '@/utils/motion';

const projects = [
  {
    id: 0,
    title: 'Chumley.ai — Workforce Intelligence',
    tag: 'SaaS / AI',
    tagColor: 'primary',
    description:
      'Production-ready workforce allocation & bonus management platform. Features division → SGM → sector hierarchy, cross-sector utilization tracking, timesheet approval workflows (draft → submitted → approved), configurable bonus rule engine, and Admin/HR/Manager/Employee dashboards with CSV, Excel & PDF export.',
    technologies: ['Next.js 15', 'TypeScript', 'PostgreSQL', 'Prisma', 'Auth.js', 'TanStack Table', 'Recharts', 'Zustand', 'Docker'],
    image: null,
    gradient: 'from-primary/25 via-secondary/10 to-transparent',
    glowColor: 'rgba(159, 167, 255, 0.2)',
    liveUrl: 'https://chumley.ai',
    githubUrl: 'https://github.com/ankitsingh711/chumley-workflow-allocation',
    number: '01',
  },
  {
    id: 1,
    title: 'DocuMind — RAG Document Q&A',
    tag: 'AI / LLM',
    tagColor: 'secondary',
    description:
      'AI-powered Document Q&A assistant built with RAG + Anthropic Claude. Upload PDFs, ask questions in natural language, and Claude retrieves the most relevant context to answer accurately. Covers embeddings, vector search, tool calling, and streaming.',
    technologies: ['Python', 'FastAPI', 'Anthropic Claude', 'RAG', 'ChromaDB', 'Embeddings', 'LangChain'],
    image: null,
    gradient: 'from-secondary/20 via-primary/10 to-transparent',
    glowColor: 'rgba(98, 250, 227, 0.15)',
    liveUrl: 'https://genai-rag-9r3b.onrender.com',
    githubUrl: 'https://github.com/ankitsingh711/GenAI-RAG',
    number: '02',
  },
  {
    id: 2,
    title: 'bepay — Merchant Dashboard',
    tag: 'Fintech',
    tagColor: 'primary',
    description:
      'Merchant payment dashboard for a non-custodial crypto payments super app. Features transaction management, payment link creation, QR code generation, merchant analytics, and full onboarding flow. All data powered by MSW mock API.',
    technologies: ['Next.js 16', 'React 19', 'TypeScript', 'TanStack Query', 'Zod', 'MSW', 'Tailwind v4'],
    image: null,
    gradient: 'from-primary/20 via-tertiary/10 to-transparent',
    glowColor: 'rgba(159, 167, 255, 0.15)',
    liveUrl: 'https://bepay-money.vercel.app',
    githubUrl: 'https://github.com/ankitsingh711/bepay-money',
  },
  {
    id: 3,
    title: 'LearnHub — AI Course Platform',
    tag: 'EdTech / AI',
    tagColor: 'tertiary',
    description:
      'Full-stack AI-powered course management platform with smart course recommendations via Google Gemini, full CRUD for courses/modules/lessons, JWT auth, role-based access for Students/Instructors/Admins, and real-time progress tracking.',
    technologies: ['Next.js 16', 'TypeScript', 'PostgreSQL', 'Prisma', 'NextAuth', 'Google Gemini', 'Tailwind'],
    image: null,
    gradient: 'from-tertiary/20 via-secondary/10 to-transparent',
    glowColor: 'rgba(200, 144, 255, 0.15)',
    liveUrl: 'https://house-of-edtech-eta.vercel.app',
    githubUrl: 'https://github.com/ankitsingh711/House-of-Edtech',
  },
  {
    id: 4,
    title: 'SGTraDex',
    tag: 'Enterprise',
    tagColor: 'primary',
    description:
      'Enterprise-grade supply chain digitalization platform enabling seamless trade data exchange across global logistics networks. Built with microservice architecture serving 100K+ users.',
    technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'Docker'],
    image: '/images/sgtradex.png',
    gradient: 'from-primary/20 via-tertiary/10 to-surface-container',
    glowColor: 'rgba(159, 167, 255, 0.12)',
    liveUrl: 'https://www.sgtradex.com',
    githubUrl: '#',
  },
  {
    id: 5,
    title: 'Six Flags Web App',
    tag: 'Scale',
    tagColor: 'secondary',
    description:
      'High-performance entertainment booking engine serving millions of visitors. Optimized for speed with server-side rendering and edge caching across Azure infrastructure.',
    technologies: ['Next.js', 'TypeScript', 'Sanity', 'Azure', 'Redis'],
    image: '/images/sixflags.png',
    gradient: 'from-secondary/20 via-primary/10 to-surface-container',
    glowColor: 'rgba(98, 250, 227, 0.12)',
    liveUrl: 'https://sixflags.com',
    githubUrl: '#',
  },
  {
    id: 6,
    title: 'StylerApp',
    tag: 'Full Stack',
    tagColor: 'tertiary',
    description:
      'Full-stack fashion discovery platform with AI-driven style recommendations and seamless checkout. Built mobile-first with performance-optimized rendering.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind'],
    image: '/images/styler.png',
    gradient: 'from-tertiary/20 via-secondary/10 to-surface-container',
    glowColor: 'rgba(200, 144, 255, 0.12)',
    liveUrl: 'https://styller.netlify.app/index.html',
    githubUrl: 'https://github.com/shanukajain/Styler',
  },
  {
    id: 7,
    title: 'SmileSlot',
    tag: 'Full Stack',
    tagColor: 'primary',
    description:
      'Full-stack online dental booking platform with real-time appointment management, automated reminders, and integrated payment processing.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: '/images/smileslot.png',
    gradient: 'from-primary/15 via-secondary/10 to-surface-container',
    glowColor: 'rgba(159, 167, 255, 0.12)',
    liveUrl: 'https://smileslot.netlify.app/',
    githubUrl: 'https://github.com/anonymous10062002/SmileSlot',
  },
];

/* ── TiltCard ── */
function TiltCard({ children, className = '' }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 800 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Tag badge ── */
function TagBadge({ tag, tagColor }) {
  if (!tag) return null;
  const cls = tagColor === 'secondary'
    ? 'bg-secondary/15 text-secondary border-secondary/25'
    : tagColor === 'tertiary'
    ? 'bg-tertiary/15 text-tertiary border-tertiary/25'
    : 'bg-primary/15 text-primary border-primary/25';
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-inter font-semibold uppercase tracking-wider backdrop-blur-sm border ${cls}`}>
      <span className="w-1 h-1 rounded-full bg-current" />
      {tag}
    </span>
  );
}

/* ── Link buttons ── */
function LinkButtons({ githubUrl, liveUrl }) {
  return (
    <div className="flex gap-2 flex-wrap">
      {githubUrl && githubUrl !== '#' && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-on-surface-variant hover:text-primary hover:border-primary/30 transition-all text-xs font-inter font-medium"
        >
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          GitHub
        </a>
      )}
      {liveUrl && liveUrl !== '#' && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-primary/10 border border-primary/25 text-primary hover:bg-primary/20 transition-all text-xs font-inter font-medium"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Live Demo
        </a>
      )}
    </div>
  );
}

/* ── Decorative placeholder when no image ── */
function PlaceholderArea({ project, tall = false }) {
  return (
    <div className={`relative ${tall ? 'h-[55%]' : 'h-44'} bg-gradient-to-br ${project.gradient} overflow-hidden shrink-0 group-hover:brightness-110 transition-all duration-500`}>
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }} />
      <div className="absolute top-4 right-4 w-24 h-24 border border-white/10 rounded-2xl rotate-12 group-hover:rotate-6 transition-transform duration-700" />
      <div className="absolute bottom-4 left-4 w-16 h-16 border border-white/10 rounded-full group-hover:scale-110 transition-transform duration-700" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/5 rounded-full" />
      <div className="relative h-full flex items-center justify-center">
        <div className="text-6xl font-manrope font-bold text-white/8 select-none">
          {project.title.charAt(0)}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [hoveredId, setHoveredId] = useState(null);

  const featuredProjects = projects.slice(0, 2);
  const gridProjects = projects.slice(2);

  return (
    <section id="projects" className="section-padding relative overflow-hidden section-divider">
      {/* Backgrounds */}
      <div className="absolute inset-0 dot-grid pointer-events-none" />
      <div className="absolute inset-0 section-glow-tertiary pointer-events-none" />

      {/* Faded section label */}
      <div className="absolute top-10 right-6 lg:right-12 select-none pointer-events-none">
        <span className="section-bg-label">WORK</span>
      </div>

      <motion.div
        variants={staggerContainer(0.12, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.05 }}
        className="section-container relative z-10"
      >
        {/* Section marker */}
        <motion.div
          variants={fadeIn('right', 'tween', 0, 0.5)}
          className="flex items-center gap-4 mb-10"
        >
          <span className="font-mono text-primary/50 text-xs font-bold tracking-[0.22em] select-none">
            05 / WORK
          </span>
          <div
            className="h-px flex-1 max-w-[72px]"
            style={{ background: 'linear-gradient(to right, rgba(159,167,255,0.4), transparent)' }}
          />
        </motion.div>

        {/* Heading clip reveal */}
        {[
          { text: 'Featured', stroke: false },
          { text: 'Projects', stroke: true },
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
          className="origin-left gradient-line mb-12"
        />

        {/* ── FEATURED ROW (projects 0 & 1) ── */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeIn('up', 'tween', 0.1 + index * 0.12, 0.65)}
              className="group"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                className="sui-card overflow-hidden flex flex-col"
                style={{
                  minHeight: '420px',
                  ...(hoveredId === project.id && project.glowColor
                    ? { borderColor: project.glowColor, boxShadow: `0 0 40px ${project.glowColor}` }
                    : {}),
                }}
              >
                {/* Image / gradient — 55% of card */}
                <div className="relative flex-[0_0_55%] overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                  ) : (
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}>
                      <div className="absolute inset-0 opacity-20" style={{
                        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
                        backgroundSize: '28px 28px',
                      }} />
                      <div className="absolute top-6 right-6 w-28 h-28 border border-white/10 rounded-3xl rotate-12 group-hover:rotate-6 transition-transform duration-700" />
                      <div className="absolute bottom-6 left-6 w-20 h-20 border border-white/10 rounded-full group-hover:scale-110 transition-transform duration-700" />
                    </div>
                  )}

                  {/* Tag + number */}
                  <div className="absolute top-4 left-4 z-10">
                    <TagBadge tag={project.tag} tagColor={project.tagColor} />
                  </div>
                  <div
                    className="absolute bottom-4 right-4 z-10 font-manrope font-black select-none"
                    style={{ fontSize: '56px', lineHeight: 1, color: 'rgba(255,255,255,0.06)' }}
                  >
                    {project.number}
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="text-xl font-manrope font-bold text-on-background mb-2">
                    {project.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed font-inter mb-5 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="chip">{tech}</span>
                    ))}
                  </div>
                  {/* Always-visible links on featured */}
                  <LinkButtons githubUrl={project.githubUrl} liveUrl={project.liveUrl} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── GRID (projects 2-7) ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {gridProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeIn('up', 'tween', 0.1 + index * 0.08, 0.6)}
              className="group"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <TiltCard className="h-full">
                <div
                  className="sui-card overflow-hidden h-full flex flex-col"
                  style={{
                    ...(hoveredId === project.id && project.glowColor
                      ? { borderColor: project.glowColor, boxShadow: `0 0 24px ${project.glowColor}` }
                      : {}),
                  }}
                >
                  {/* Image area h-44 */}
                  <div className="relative h-44 overflow-hidden shrink-0">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                      />
                    ) : (
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}>
                        <div className="absolute inset-0 opacity-20" style={{
                          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
                          backgroundSize: '24px 24px',
                        }} />
                        <div className="absolute top-4 right-4 w-20 h-20 border border-white/10 rounded-2xl rotate-12 group-hover:rotate-6 transition-transform duration-700" />
                        <div className="absolute bottom-3 left-3 w-12 h-12 border border-white/10 rounded-full group-hover:scale-110 transition-transform duration-700" />
                        <div className="relative h-full flex items-center justify-center">
                          <div className="text-5xl font-manrope font-bold text-white/8 select-none">
                            {project.title.charAt(0)}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Tag */}
                    <div className="absolute top-3 left-3 z-10">
                      <TagBadge tag={project.tag} tagColor={project.tagColor} />
                    </div>

                    {/* Hover overlay */}
                    <div className={`absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center gap-3 transition-opacity duration-300 z-20 ${
                      hoveredId === project.id ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <LinkButtons githubUrl={project.githubUrl} liveUrl={project.liveUrl} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-base font-manrope font-bold text-on-background mb-1.5">
                      {project.title}
                    </h3>
                    <p className="text-on-surface-variant text-xs leading-relaxed font-inter mb-4 flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="chip">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
