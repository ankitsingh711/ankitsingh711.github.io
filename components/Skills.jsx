'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '@/utils/motion';
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiRedux,
  SiHtml5, SiMui, SiFramer,
  SiNodedotjs, SiExpress, SiPython, SiFastapi, SiMongodb,
  SiGraphql, SiPostgresql, SiRedis,
  SiGooglecloud, SiVercel, SiNetlify, SiDocker, SiKubernetes,
  SiGithubactions, SiTerraform, SiNginx, SiLinux,
  SiOpenai, SiHuggingface, SiPytorch, SiScikitlearn,
  SiLangchain, SiLanggraph, SiOllama, SiWeightsandbiases,
} from 'react-icons/si';

// Skill: { label, icon?, color? }
const frontendSkills = [
  { label: 'React',         icon: SiReact,        color: '#61DAFB' },
  { label: 'Next.js',       icon: SiNextdotjs,    color: '#ffffff' },
  { label: 'TypeScript',    icon: SiTypescript,   color: '#3178C6' },
  { label: 'Tailwind CSS',  icon: SiTailwindcss,  color: '#38BDF8' },
  { label: 'Redux',         icon: SiRedux,        color: '#764ABC' },
  { label: 'HTML5 / CSS3',  icon: SiHtml5,        color: '#E34F26' },
  { label: 'Material UI',   icon: SiMui,          color: '#007FFF' },
  { label: 'Framer Motion', icon: SiFramer,       color: '#ffffff' },
];

const backendSkills = [
  { label: 'Node.js',      icon: SiNodedotjs,  color: '#339933' },
  { label: 'Express',      icon: SiExpress,    color: '#ffffff' },
  { label: 'Python',       icon: SiPython,     color: '#3776AB' },
  { label: 'FastAPI',      icon: SiFastapi,    color: '#009688' },
  { label: 'MongoDB',      icon: SiMongodb,    color: '#47A248' },
  { label: 'GraphQL',      icon: SiGraphql,    color: '#E10098' },
  { label: 'PostgreSQL',   icon: SiPostgresql, color: '#4169E1' },
  { label: 'Redis',        icon: SiRedis,      color: '#DC382D' },
  { label: 'Microservices', color: '#9fa7ff' },
  { label: 'WebSockets',   color: '#62fae3' },
  { label: 'REST APIs',    color: '#c890ff' },
];

const cloudSkills = [
  { label: 'AWS',            color: '#FF9900' },
  { label: 'Azure AI',       color: '#0078D4' },
  { label: 'Google Cloud',   icon: SiGooglecloud,       color: '#4285F4' },
  { label: 'Vercel',         icon: SiVercel,            color: '#ffffff' },
  { label: 'Netlify',        icon: SiNetlify,           color: '#00C7B7' },
  { label: 'Docker',         icon: SiDocker,            color: '#2496ED' },
  { label: 'Kubernetes',     icon: SiKubernetes,        color: '#326CE5' },
  { label: 'GitHub Actions', icon: SiGithubactions,     color: '#2088FF' },
  { label: 'Terraform',      icon: SiTerraform,         color: '#7B42BC' },
  { label: 'Nginx',          icon: SiNginx,             color: '#009639' },
  { label: 'Linux',          icon: SiLinux,             color: '#FCC624' },
  { label: 'Serverless',     color: '#FF9900' },
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
      { label: 'OpenAI / GPT',   icon: SiOpenai,       color: '#ffffff' },
      { label: 'LangChain',      icon: SiLangchain,    color: '#62fae3' },
      { label: 'LangGraph',      icon: SiLanggraph,    color: '#9fa7ff' },
      { label: 'Hugging Face',   icon: SiHuggingface,  color: '#FFD21E' },
      { label: 'LlamaIndex',     color: '#c890ff' },
      { label: 'Vercel AI SDK',  icon: SiVercel,       color: '#ffffff' },
      { label: 'Ollama',         icon: SiOllama,       color: '#c890ff' },
      { label: 'AI Agents',      color: '#62fae3' },
      { label: 'Multi-Agent',    color: '#9fa7ff' },
      { label: 'Agentic AI',     color: '#c890ff' },
      { label: 'Generative AI',  color: '#62fae3' },
      { label: 'vLLM',           color: '#9fa7ff' },
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
      { label: 'RAG',             color: '#c890ff' },
      { label: 'Embeddings',      color: '#62fae3' },
      { label: 'Pinecone',        color: '#00C7B7' },
      { label: 'ChromaDB',        color: '#E85D2E' },
      { label: 'Semantic Search', color: '#9fa7ff' },
      { label: 'Hybrid Search',   color: '#62fae3' },
      { label: 'Weaviate',        color: '#c890ff' },
      { label: 'Qdrant',          color: '#FF3364' },
      { label: 'FAISS',           color: '#9fa7ff' },
      { label: 'OpenAI API',      icon: SiOpenai,     color: '#ffffff' },
      { label: 'Anthropic API',   color: '#c890ff' },
      { label: 'Cohere',          color: '#62fae3' },
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
      { label: 'PyTorch',              icon: SiPytorch,     color: '#EE4C2C' },
      { label: 'scikit-learn',         icon: SiScikitlearn, color: '#F7931E' },
      { label: 'Prompt Engineering',   color: '#9fa7ff' },
      { label: 'Context Engineering',  color: '#62fae3' },
      { label: 'Function Calling',     color: '#c890ff' },
      { label: 'Tool Calling',         color: '#9fa7ff' },
      { label: 'Structured Outputs',   color: '#62fae3' },
      { label: 'MCP',                  color: '#c890ff' },
      { label: 'AI Workflows',         color: '#9fa7ff' },
      { label: 'Reasoning Models',     color: '#62fae3' },
      { label: 'Fine-tuning',          color: '#c890ff' },
      { label: 'LLM Evaluation',       color: '#9fa7ff' },
      { label: 'Guardrails',           color: '#62fae3' },
      { label: 'Weights & Biases',     icon: SiWeightsandbiases, color: '#FFBE00' },
      { label: 'LangSmith',            color: '#62fae3' },
      { label: 'Memory Systems',       color: '#c890ff' },
    ],
  },
];

const colorMap = {
  primary:   { icon: 'bg-primary/10 text-primary',   border: 'border-primary/40',   text: 'text-primary' },
  secondary: { icon: 'bg-secondary/10 text-secondary', border: 'border-secondary/40', text: 'text-secondary' },
  tertiary:  { icon: 'bg-tertiary/10 text-tertiary',  border: 'border-tertiary/40',  text: 'text-tertiary' },
};

function SkillChip({ skill }) {
  const Icon = skill.icon;
  return (
    <span
      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-white/[0.07] text-on-surface-variant text-xs font-inter font-medium hover:border-white/15 hover:text-on-surface transition-all duration-200"
      style={{ background: 'rgba(255,255,255,0.025)' }}
    >
      {Icon ? (
        <Icon style={{ color: skill.color, flexShrink: 0 }} size={13} />
      ) : (
        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: skill.color || '#9fa7ff' }} />
      )}
      {skill.label}
    </span>
  );
}

const skillCategories = [
  {
    title: 'Frontend',
    desc: 'UI / Interfaces',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    skills: frontendSkills,
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
    skills: backendSkills,
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
    skills: cloudSkills,
    color: 'tertiary',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden section-divider">
      <div className="absolute inset-0 dot-grid pointer-events-none" />
      <div className="absolute inset-0 section-glow pointer-events-none" />

      <div className="absolute top-10 right-6 lg:right-12 select-none pointer-events-none">
        <span className="section-bg-label">SKILLS</span>
      </div>

      <motion.div
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="section-container relative z-10"
      >
        {/* Section marker */}
        <motion.div variants={fadeIn('right', 'tween', 0, 0.5)} className="flex items-center gap-4 mb-10">
          <span className="font-mono text-primary/50 text-xs font-bold tracking-[0.22em] select-none">03 / SKILLS</span>
          <div className="h-px flex-1 max-w-[72px]" style={{ background: 'linear-gradient(to right, rgba(159,167,255,0.4), transparent)' }} />
        </motion.div>

        {/* Heading */}
        {[
          { text: 'Technical', stroke: false },
          { text: 'Arsenal', stroke: true },
        ].map(({ text, stroke }, i) => (
          <div key={text} className="overflow-hidden" style={{ marginBottom: i === 0 ? '0.12em' : '1.6rem' }}>
            <motion.div
              variants={{
                hidden: { y: '105%' },
                show: { y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.06 + i * 0.1 } },
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
          variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.28 } } }}
          className="origin-left gradient-line mb-12"
        />

        {/* Category strips with logo chips */}
        <div className="space-y-4 mb-6">
          {skillCategories.map((category, index) => {
            const colors = colorMap[category.color];
            return (
              <motion.div
                key={category.title}
                variants={fadeIn('up', 'tween', 0.1 + index * 0.1, 0.55)}
                className="sui-card flex flex-col md:flex-row gap-0 overflow-hidden"
              >
                {/* Left label */}
                <div className={`flex items-start gap-4 p-6 md:w-48 shrink-0 border-${category.color === 'primary' ? 'primary' : category.color === 'secondary' ? 'secondary' : 'tertiary'}/40 md:border-l-2 md:border-t-0 border-t-2 border-l-0`}
                  style={{ borderColor: category.color === 'primary' ? 'rgba(159,167,255,0.4)' : category.color === 'secondary' ? 'rgba(98,250,227,0.4)' : 'rgba(200,144,255,0.4)' }}
                >
                  <div className={`p-2.5 rounded-xl shrink-0 ${colors.icon}`}>
                    {category.icon}
                  </div>
                  <div>
                    <div className="text-on-background font-bold font-manrope text-sm">{category.title}</div>
                    <div className="text-on-surface-variant text-xs font-inter mt-0.5">{category.desc}</div>
                  </div>
                </div>

                {/* Dividers */}
                <div className="hidden md:block w-px bg-white/[0.06] shrink-0" />
                <div className="block md:hidden h-px bg-white/[0.06]" />

                {/* Logo chips */}
                <div className="flex flex-wrap gap-2 p-6 flex-1">
                  {category.skills.map((skill) => (
                    <SkillChip key={skill.label} skill={skill} />
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
          style={{ background: 'rgba(159,167,255,0.02)', border: '1px solid rgba(98,250,227,0.15)' }}
        >
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 80% at 80% 50%, rgba(200,144,255,0.06) 0%, transparent 70%)' }} />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 50% 80% at 20% 50%, rgba(98,250,227,0.05) 0%, transparent 70%)' }} />

          {/* AI header */}
          <div className="relative flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-secondary/10 text-secondary">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-manrope font-semibold text-on-background">Artificial Intelligence</h3>
                <p className="text-on-surface-variant text-xs font-inter mt-0.5">LLMs · RAG · Agents · AI Engineering</p>
              </div>
            </div>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-inter font-medium bg-secondary/10 text-secondary border border-secondary/20">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
              AI Engineer
            </span>
          </div>

          {/* 3-col AI groups with logo chips */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {aiSkillGroups.map((group) => (
              <div key={group.label}>
                <div className={`flex items-center gap-2 mb-3 text-xs font-inter font-semibold uppercase tracking-widest ${
                  group.color === 'secondary' ? 'text-secondary' : group.color === 'tertiary' ? 'text-tertiary' : 'text-primary'
                }`}>
                  {group.icon}
                  {group.label}
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <SkillChip key={skill.label} skill={skill} />
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
