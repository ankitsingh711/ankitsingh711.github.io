'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '@/utils/motion';

const skillCategories = [
  {
    title: 'Frontend',
    desc: 'UI / Interfaces',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    skills: ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'HTML5 / CSS3', 'Material UI', 'Framer Motion'],
    color: 'primary',
  },
  {
    title: 'Backend',
    desc: 'APIs / Databases',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
    skills: ['Node.js / Express', 'Python / FastAPI', 'MongoDB / SQL', 'GraphQL / REST', 'PostgreSQL', 'Redis', 'Microservices', 'WebSockets', 'Async Python'],
    color: 'secondary',
  },
  {
    title: 'Cloud & DevOps',
    desc: 'Infra / Deployment',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
    skills: ['AWS (EC2, S3, Lambda)', 'Azure AI', 'Google Cloud', 'Vercel / Netlify', 'Docker / Kubernetes', 'CI/CD (GitHub Actions)', 'Terraform', 'Nginx', 'Linux', 'Serverless'],
    color: 'tertiary',
  },
];

const aiSkillGroups = [
  {
    label: 'LLM & AI Frameworks',
    color: 'secondary',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    skills: [
      'Agentic AI', 'Generative AI', 'LLMs (GPT / Llama / Gemini / Claude)',
      'LangChain', 'LangGraph', 'LlamaIndex', 'OpenAI SDK',
      'Vercel AI SDK', 'Ollama', 'AI Agents', 'Multi-Agent Systems',
      'Hugging Face', 'vLLM',
    ],
  },
  {
    label: 'RAG & Vector Databases',
    color: 'tertiary',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 2.25v2.625m0 2.625v2.625" />
      </svg>
    ),
    skills: [
      'RAG', 'Embeddings', 'Semantic Search', 'Hybrid Search',
      'ChromaDB', 'Pinecone', 'Weaviate', 'Qdrant', 'FAISS',
      'Vector Databases', 'OpenAI API', 'Anthropic API', 'Cohere',
    ],
  },
  {
    label: 'AI Engineering',
    color: 'primary',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    skills: [
      'Prompt Engineering', 'Context Engineering', 'Function Calling',
      'Tool Calling', 'Structured Outputs', 'Model Context Protocol (MCP)',
      'AI Workflows', 'Reasoning Models', 'Fine-tuning', 'LLM Evaluation',
      'Guardrails', 'Memory Systems', 'LangSmith', 'Weights & Biases',
      'Python', 'PyTorch', 'scikit-learn',
    ],
  },
];

const colorMap = {
  primary: {
    icon: 'bg-primary/10 text-primary',
    border: 'border-l-2 border-primary/40',
    text: 'text-primary',
  },
  secondary: {
    icon: 'bg-secondary/10 text-secondary',
    border: 'border-l-2 border-secondary/40',
    text: 'text-secondary',
  },
  tertiary: {
    icon: 'bg-tertiary/10 text-tertiary',
    border: 'border-l-2 border-tertiary/40',
    text: 'text-tertiary',
  },
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden section-divider">
      {/* Backgrounds */}
      <div className="absolute inset-0 dot-grid pointer-events-none" />
      <div className="absolute inset-0 section-glow pointer-events-none" />

      {/* Faded section label */}
      <div className="absolute top-10 right-6 lg:right-12 select-none pointer-events-none">
        <span className="section-bg-label">SKILLS</span>
      </div>

      <motion.div
        variants={staggerContainer(0.1, 0.1)}
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
            03 / SKILLS
          </span>
          <div
            className="h-px flex-1 max-w-[72px]"
            style={{ background: 'linear-gradient(to right, rgba(159,167,255,0.4), transparent)' }}
          />
        </motion.div>

        {/* Heading clip reveal */}
        {[
          { text: 'Technical', stroke: false },
          { text: 'Arsenal', stroke: true },
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
                style={{ fontSize: 'clamp(36px, 5.8vw, 90px)', letterSpacing: '-0.035em' }}
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

        {/* Horizontal category strips */}
        <div className="space-y-4 mb-6">
          {skillCategories.map((category, index) => {
            const colors = colorMap[category.color];
            return (
              <motion.div
                key={category.title}
                variants={fadeIn('up', 'tween', 0.1 + index * 0.1, 0.55)}
                className={`sui-card flex flex-col md:flex-row gap-0 overflow-hidden`}
              >
                {/* Left label */}
                <div className={`flex items-start gap-4 p-6 md:w-48 shrink-0 ${colors.border} md:border-l-2 md:border-t-0 border-t-2 border-l-0`}>
                  <div className={`p-2.5 rounded-xl shrink-0 ${colors.icon}`}>
                    {category.icon}
                  </div>
                  <div>
                    <div className="text-on-background font-bold font-manrope text-sm">{category.title}</div>
                    <div className="text-on-surface-variant text-xs font-inter mt-0.5">{category.desc}</div>
                  </div>
                </div>

                {/* Divider */}
                <div className="hidden md:block w-px bg-white/[0.06] shrink-0" />
                <div className="block md:hidden h-px bg-white/[0.06]" />

                {/* Skills */}
                <div className="flex flex-wrap gap-2 p-6 flex-1">
                  {category.skills.map((skill) => (
                    <span key={skill} className="chip">{skill}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* AI Engineering featured block */}
        <motion.div
          variants={fadeIn('up', 'tween', 0.4, 0.6)}
          className="relative rounded-2xl p-4 sm:p-8 overflow-hidden"
          style={{
            background: 'rgba(159,167,255,0.02)',
            border: '1px solid rgba(98, 250, 227, 0.15)',
          }}
        >
          {/* Inner glows */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'radial-gradient(ellipse 60% 80% at 80% 50%, rgba(200, 144, 255, 0.06) 0%, transparent 70%)',
          }} />
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'radial-gradient(ellipse 50% 80% at 20% 50%, rgba(98, 250, 227, 0.05) 0%, transparent 70%)',
          }} />

          {/* AI header row */}
          <div className="relative flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-secondary/10 text-secondary">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-manrope font-semibold text-on-background">
                  Artificial Intelligence
                </h3>
                <p className="text-on-surface-variant text-xs font-inter mt-0.5">
                  LLMs · RAG · Agents · AI Engineering
                </p>
              </div>
            </div>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-inter font-medium bg-secondary/10 text-secondary border border-secondary/20">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
              AI Engineer
            </span>
          </div>

          {/* 3-col AI sub-groups */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {aiSkillGroups.map((group) => (
              <div key={group.label}>
                <div className={`flex items-center gap-2 mb-3 text-xs font-inter font-semibold uppercase tracking-widest ${
                  group.color === 'secondary' ? 'text-secondary'
                  : group.color === 'tertiary' ? 'text-tertiary'
                  : 'text-primary'
                }`}>
                  {group.icon}
                  {group.label}
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="chip">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
