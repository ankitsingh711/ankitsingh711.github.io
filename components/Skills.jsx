'use client';

import { motion } from 'framer-motion';
import { staggerContainer, textVariant, fadeIn } from '@/utils/motion';

const skillCategories = [
  {
    title: 'Frontend',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    skills: ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'HTML5 / CSS3', 'Material UI'],
    color: 'primary',
  },
  {
    title: 'Backend',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
    skills: ['Node.js / Express', 'MongoDB / SQL', 'GraphQL / REST', 'PostgreSQL', 'Redis', 'Microservices'],
    color: 'secondary',
  },
  {
    title: 'Cloud',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
    skills: ['AWS (EC2, S3, Lambda)', 'Azure / GCP', 'Vercel / Netlify', 'Serverless', 'CloudFront', 'S3'],
    color: 'tertiary',
  },
  {
    title: 'DevOps',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    skills: ['Docker / Kubernetes', 'CI/CD (GitHub Actions)', 'Nginx / Monitoring', 'Linux', 'Terraform', 'Jenkins'],
    color: 'primary',
  },
  {
    title: 'Artificial Intelligence',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    skills: ['Agentic AI', 'Generative AI', 'LLMs (GPT/Llama)', 'LangChain', 'Prompt Engineering', 'Vector Databases'],
    color: 'secondary',
    span: true,
  },
];

export default function Skills() {

  return (
    <section id="skills" className="section-padding">
      <motion.div 
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
        className="section-container"
      >
        {/* Section Header */}
        <motion.div variants={textVariant()} className="mb-16">
          <p className="text-secondary text-sm tracking-[0.2em] uppercase font-inter mb-4">
            Capabilities
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-manrope font-bold text-on-background mb-4">
            Technical Arsenal
          </h2>
          <p className="text-on-surface-variant text-lg font-inter max-w-2xl mb-16">
            Categorized tools and technologies I leverage to build modern software.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              variants={fadeIn('up', 'tween', index * 0.1, 0.5)}
              key={category.title}
              className={`bg-surface-container rounded-2xl p-8 hover:bg-surface-container-high transition-all duration-500 ${
                category.span ? 'md:col-span-2 lg:mx-32' : ''
              }`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`p-2.5 rounded-xl ${
                    category.color === 'primary'
                      ? 'bg-primary/10 text-primary'
                      : category.color === 'secondary'
                      ? 'bg-secondary/10 text-secondary'
                      : 'bg-tertiary/10 text-tertiary'
                  }`}
                >
                  {category.icon}
                </div>
                <h3 className="text-xl font-manrope font-semibold text-on-background">
                  {category.title}
                </h3>
              </div>

              {/* Skills Chips */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
