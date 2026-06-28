'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { staggerContainer, fadeIn } from '@/utils/motion';

function timeAgo(dateString) {
  if (!dateString) return '';
  const now = new Date();
  const past = new Date(dateString);
  const diffDays = Math.floor((now - past) / (1000 * 60 * 60 * 24));
  if (diffDays < 1) return 'Today';
  if (diffDays === 1) return '1 day ago';
  if (diffDays < 30) return `${diffDays} days ago`;
  const diffMonths = Math.floor(diffDays / 30);
  if (diffMonths === 1) return '1 month ago';
  if (diffMonths < 12) return `${diffMonths} months ago`;
  const diffYears = Math.floor(diffDays / 365);
  return diffYears === 1 ? '1 year ago' : `${diffYears} years ago`;
}

function VideoModal({ video, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 16 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute -top-11 right-0 flex items-center gap-2 text-white/60 hover:text-white text-sm font-inter transition-colors duration-200"
          >
            <span>Close</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Title */}
          <p className="text-white/70 font-inter text-xs mb-3 line-clamp-1 pr-24">{video.title}</p>

          {/* 16:9 iframe */}
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl">
            <iframe
              src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between mt-4">
            <p className="text-white/40 font-inter text-xs">{timeAgo(video.publishedAt)}</p>
            <a
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white/40 hover:text-white/80 font-inter text-xs transition-colors duration-200"
            >
              Open on YouTube
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function VideoCard({ video, index, onPlay }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.08, 0.6)}
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onPlay(video)}
    >
      <div className="block sui-card overflow-hidden">
        {/* Thumbnail */}
        <div className="relative aspect-video overflow-hidden bg-surface-container-high">
          {!imgLoaded && (
            <div className="absolute inset-0 animate-pulse bg-surface-container-high flex items-center justify-center">
              <svg className="w-10 h-10 text-on-surface-variant/20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          )}
          <img
            src={video.thumbnail}
            alt={video.title}
            className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ${
              imgLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            loading="lazy"
            onLoad={() => setImgLoaded(true)}
          />
          {/* Play overlay — always visible on hover */}
          <div
            className={`absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center shadow-2xl shadow-red-600/50 scale-90 group-hover:scale-100 transition-transform duration-300">
              <svg className="w-6 h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-sm font-manrope font-semibold text-on-background mb-2 line-clamp-2 leading-snug group-hover:text-primary transition-colors duration-300">
            {video.title}
          </h3>
          <div className="flex items-center gap-2 text-xs text-on-surface-variant/60 font-inter">
            <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {timeAgo(video.publishedAt)}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SkeletonCard() {
  return (
    <div className="sui-card overflow-hidden animate-pulse">
      <div className="aspect-video bg-surface-container-high" />
      <div className="p-4 space-y-2.5">
        <div className="h-3.5 bg-surface-container-high rounded-full w-full" />
        <div className="h-3.5 bg-surface-container-high rounded-full w-3/4" />
        <div className="h-3 bg-surface-container-high rounded-full w-1/3 mt-1" />
      </div>
    </div>
  );
}

export default function YouTubeVideos() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    fetch('/api/youtube')
      .then((r) => r.json())
      .then((data) => {
        if (data.error) throw new Error(data.error);
        setVideos(data.videos || []);
      })
      .catch((err) => {
        console.error('YouTube fetch error:', err);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  const closeModal = useCallback(() => setActiveVideo(null), []);

  return (
    <>
      {/* Video modal — rendered outside section for clean stacking */}
      {activeVideo && <VideoModal video={activeVideo} onClose={closeModal} />}

      <section id="youtube" className="section-padding relative overflow-hidden section-divider">
        <div className="absolute inset-0 dot-grid pointer-events-none" />
        <div className="absolute inset-0 section-glow-secondary pointer-events-none" />

        {/* Faded bg label */}
        <div className="absolute top-10 right-6 lg:right-12 select-none pointer-events-none">
          <span className="section-bg-label">ANKODER</span>
        </div>

        <motion.div
          variants={staggerContainer(0.1, 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.08 }}
          className="section-container relative z-10"
        >
          {/* Section marker */}
          <motion.div variants={fadeIn('right', 'tween', 0, 0.5)} className="flex items-center gap-4 mb-10">
            <span className="font-mono text-primary/50 text-xs font-bold tracking-[0.22em] select-none">
              08 / YOUTUBE
            </span>
            <div className="h-px flex-1 max-w-[72px]" style={{ background: 'linear-gradient(to right, rgba(159,167,255,0.4), transparent)' }} />
          </motion.div>

          {/* Heading clip reveal */}
          {[
            { text: 'Latest', stroke: false },
            { text: 'Videos', stroke: true },
          ].map(({ text, stroke }, i) => (
            <div key={text} className="overflow-hidden" style={{ marginBottom: i === 0 ? '0.12em' : '1.6rem' }}>
              <motion.div
                variants={{
                  hidden: { y: '105%' },
                  show: { y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.08 + i * 0.1 } },
                }}
              >
                <h2
                  className={`font-manrope font-black leading-[0.92] select-none ${stroke ? 'text-stroke-primary' : 'text-on-background'}`}
                  style={{ fontSize: 'clamp(40px, 5.5vw, 82px)', letterSpacing: '-0.035em' }}
                >
                  {text}
                </h2>
              </motion.div>
            </div>
          ))}

          {/* Gradient line */}
          <motion.div
            variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 } } }}
            className="origin-left gradient-line mb-14"
          />

          {/* Loading */}
          {loading && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => <SkeletonCard key={i} />)}
            </div>
          )}

          {/* Error */}
          {!loading && error && (
            <motion.div variants={fadeIn('up', 'tween', 0.2, 0.6)} className="text-center py-16">
              <div className="sui-card inline-flex flex-col items-center gap-4 px-10 py-8 rounded-2xl">
                <svg className="w-12 h-12 text-on-surface-variant/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <p className="text-on-surface-variant font-inter text-sm">Could not load videos. Visit the channel directly.</p>
                <a
                  href="https://www.youtube.com/@ankkoder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-5 py-2.5 rounded-full text-sm font-bold font-inter transition-all duration-300 hover:scale-[1.03]"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a2.96 2.96 0 00-2.083-2.091C19.58 3.6 12 3.6 12 3.6s-7.58 0-9.415.495A2.96 2.96 0 00.502 6.186C0 8.03 0 12 0 12s0 3.97.502 5.814a2.96 2.96 0 002.083 2.091c1.835.495 9.415.495 9.415.495s7.58 0 9.415-.495a2.96 2.96 0 002.083-2.091c.502-1.844.502-5.814.502-5.814s0-3.97-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  @ankkoder
                </a>
              </div>
            </motion.div>
          )}

          {/* Videos grid */}
          {!loading && !error && videos.length > 0 && (
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {videos.map((video, index) => (
                  <VideoCard key={video.id} video={video} index={index} onPlay={setActiveVideo} />
                ))}
              </motion.div>
            </AnimatePresence>
          )}

          {/* Channel CTA */}
          {!loading && (
            <motion.div variants={fadeIn('up', 'tween', 0.4, 0.5)} className="mt-12 flex justify-center">
              <a
                href="https://www.youtube.com/@ankkoder"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-5 py-3 rounded-xl sui-card border border-outline-variant/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="w-9 h-9 rounded-lg bg-red-600 flex items-center justify-center shadow-md shadow-red-600/20 group-hover:shadow-red-600/40 transition-shadow shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a2.96 2.96 0 00-2.083-2.091C19.58 3.6 12 3.6 12 3.6s-7.58 0-9.415.495A2.96 2.96 0 00.502 6.186C0 8.03 0 12 0 12s0 3.97.502 5.814a2.96 2.96 0 002.083 2.091c1.835.495 9.415.495 9.415.495s7.58 0 9.415-.495a2.96 2.96 0 002.083-2.091c.502-1.844.502-5.814.502-5.814s0-3.97-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </div>
                <div>
                  <p className="text-on-background font-manrope font-bold text-sm">Subscribe to @ankkoder</p>
                  <p className="text-on-surface-variant text-[11px] font-inter">More tutorials &amp; dev content →</p>
                </div>
              </a>
            </motion.div>
          )}
        </motion.div>
      </section>
    </>
  );
}
