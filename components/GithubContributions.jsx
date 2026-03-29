'use client';

import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

const GitHubCalendar = dynamic(
  () => import('react-github-calendar').then((mod) => mod.GitHubCalendar),
  { ssr: false }
);

export default function GithubContributions() {
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
    <section id="github" ref={sectionRef} className="section-padding">
      <div className="section-container">
        {/* Section Header */}
        <div className="reveal mb-12 text-center md:text-left">
          <p className="text-primary text-sm tracking-[0.2em] uppercase font-inter mb-4">
            Open Source
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-manrope font-bold text-on-background mb-4">
            GitHub Contributions
          </h2>
          <p className="text-on-surface-variant text-lg font-inter max-w-2xl mx-auto md:mx-0">
            My daily code activity and open-source contributions tracking exactly as logged on GitHub.
          </p>
        </div>

        {/* Content Container */}
        <div className="reveal flex flex-col items-center gap-10">

          {/* GitHub Activity Graph (Line Chart) */}
          <div className="w-full bg-surface-container rounded-2xl p-4 sm:p-6 md:p-8 hover:bg-surface-container-high transition-all duration-500 overflow-hidden flex justify-center border border-outline-variant/10 shadow-lg">
            <img 
              src="https://github-readme-activity-graph.vercel.app/graph?username=ankitsingh711&bg_color=transparent&color=58A6FF&line=58A6FF&point=FFFFFF&area=true&hide_border=true&title_color=ffffff&axes_color=8b949e" 
              alt="Ankit Singh's GitHub Contribution Graph"
              className="w-full max-w-4xl h-auto drop-shadow-md" 
              loading="lazy"
            />
          </div>

          {/* GitHub Calendar Grid */}
          <div className="w-full bg-surface-container rounded-2xl p-6 md:p-8 hover:bg-surface-container-high transition-all duration-500 border border-outline-variant/10 shadow-lg flex flex-col items-center overflow-x-auto">
            <div className="min-w-[800px] sm:min-w-0 w-full flex justify-center py-4">
              <GitHubCalendar 
                username="ankitsingh711"
                colorScheme="dark"
                fontSize={14}
                blockSize={13}
                blockMargin={5}
                theme={{
                  dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
