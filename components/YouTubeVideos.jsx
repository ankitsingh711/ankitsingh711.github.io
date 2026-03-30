'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { staggerContainer, textVariant, fadeIn } from '@/utils/motion';

const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const CHANNEL_HANDLE = '@ankkoder';

function parseDuration(iso) {
  if (!iso) return '';
  const m = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!m) return '';
  const h = m[1] ? `${m[1]}:` : '';
  const min = m[2] ? m[2].padStart(h ? 2 : 1, '0') : '0';
  const sec = m[3] ? m[3].padStart(2, '0') : '00';
  return `${h}${min}:${sec}`;
}

function formatViews(count) {
  const n = parseInt(count, 10);
  if (isNaN(n)) return '0';
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return n.toString();
}

function timeAgo(dateString) {
  const now = new Date();
  const past = new Date(dateString);
  const diffMs = now - past;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (diffDays < 1) return 'Today';
  if (diffDays === 1) return '1 day ago';
  if (diffDays < 30) return `${diffDays} days ago`;
  const diffMonths = Math.floor(diffDays / 30);
  if (diffMonths === 1) return '1 month ago';
  if (diffMonths < 12) return `${diffMonths} months ago`;
  const diffYears = Math.floor(diffDays / 365);
  if (diffYears === 1) return '1 year ago';
  return `${diffYears} years ago`;
}

async function getChannelId() {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/channels?part=id&forHandle=${CHANNEL_HANDLE}&key=${YOUTUBE_API_KEY}`
  );
  const data = await res.json();
  if (data.items && data.items.length > 0) {
    return data.items[0].id;
  }
  throw new Error('Channel not found');
}

async function fetchVideos(channelId, order = 'date', maxResults = 6) {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&order=${order}&type=video&maxResults=${maxResults}&key=${YOUTUBE_API_KEY}`
  );
  const data = await res.json();
  if (!data.items || data.items.length === 0) return [];

  const videoIds = data.items.map((item) => item.id.videoId).join(',');
  const statsRes = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=statistics,contentDetails&id=${videoIds}&key=${YOUTUBE_API_KEY}`
  );
  const statsData = await statsRes.json();

  return data.items.map((item) => {
    const stats = statsData.items?.find((s) => s.id === item.id.videoId);
    return {
      id: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.medium?.url,
      publishedAt: item.snippet.publishedAt,
      viewCount: stats?.statistics?.viewCount || '0',
      likeCount: stats?.statistics?.likeCount || '0',
      duration: stats?.contentDetails?.duration || '',
    };
  });
}

function VideoCard({ video, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.1, 0.75)}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href={`https://www.youtube.com/watch?v=${video.id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-surface-container rounded-2xl overflow-hidden hover:bg-surface-container-high transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
      >
        {/* Thumbnail */}
        <div className="relative aspect-video overflow-hidden bg-surface-container-high">
          {/* Skeleton shimmer shown until image loads */}
          {!imgLoaded && (
            <div className="absolute inset-0 z-10">
              <div className="w-full h-full bg-surface-container-high relative overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, var(--color-surface-container-highest) 50%, transparent 100%)',
                    animation: 'shimmer 1.5s ease-in-out infinite',
                  }}
                />
              </div>
              {/* Skeleton play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-surface-container-highest/60 animate-pulse" />
              </div>
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
          {/* Duration badge */}
          {video.duration && imgLoaded && (
            <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs font-mono px-2 py-0.5 rounded-md backdrop-blur-sm">
              {parseDuration(video.duration)}
            </span>
          )}
          {/* Play overlay */}
          {imgLoaded && (
            <div
              className={`absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-2xl shadow-red-600/40 scale-90 group-hover:scale-100 transition-transform duration-300">
                <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 md:p-5">
          {!imgLoaded ? (
            <div className="space-y-3 animate-pulse">
              <div className="h-4 bg-surface-container-high rounded-full w-full" />
              <div className="h-4 bg-surface-container-high rounded-full w-2/3" />
              <div className="h-3 bg-surface-container-high rounded-full w-1/2" />
            </div>
          ) : (
            <>
              <h3 className="text-sm md:text-base font-manrope font-semibold text-on-background mb-2 line-clamp-2 leading-snug group-hover:text-primary transition-colors duration-300">
                {video.title}
              </h3>
              <div className="flex items-center gap-3 text-xs text-on-surface-variant font-inter">
                <span className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  {formatViews(video.viewCount)} views
                </span>
                <span className="w-1 h-1 rounded-full bg-on-surface-variant/40" />
                <span>{timeAgo(video.publishedAt)}</span>
              </div>
            </>
          )}
        </div>
      </a>
    </motion.div>
  );
}

function SkeletonCard() {
  return (
    <div className="bg-surface-container rounded-2xl overflow-hidden animate-pulse">
      <div className="aspect-video bg-surface-container-high" />
      <div className="p-4 md:p-5 space-y-3">
        <div className="h-4 bg-surface-container-high rounded-full w-full" />
        <div className="h-4 bg-surface-container-high rounded-full w-3/4" />
        <div className="h-3 bg-surface-container-high rounded-full w-1/2" />
      </div>
    </div>
  );
}

export default function YouTubeVideos() {
  const [activeTab, setActiveTab] = useState('latest');
  const [latest, setLatest] = useState([]);
  const [popular, setPopular] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadVideos() {
      try {
        setLoading(true);
        if (!YOUTUBE_API_KEY) {
          throw new Error('YouTube API key not configured');
        }
        const channelId = await getChannelId();
        const [latestVids, popularVids] = await Promise.all([
          fetchVideos(channelId, 'date', 6),
          fetchVideos(channelId, 'viewCount', 6),
        ]);
        setLatest(latestVids);
        setPopular(popularVids);
      } catch (err) {
        console.error('Failed to fetch YouTube videos:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadVideos();
  }, []);

  const videos = activeTab === 'latest' ? latest : popular;
  const tabs = [
    { id: 'latest', label: 'Latest Uploads', icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )},
    { id: 'popular', label: 'Most Viewed', icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )},
  ];

  return (
    <section id="youtube" className="section-padding">
      <motion.div
        variants={staggerContainer(0.25)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
        className="section-container"
      >
        {/* Section Header */}
        <motion.div variants={textVariant()} className="mb-12 text-center md:text-left">
          <p className="text-sm tracking-[0.2em] uppercase font-inter mb-4" style={{ color: 'var(--color-error)' }}>
            YouTube
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-manrope font-bold text-on-background mb-4">
            My Videos
          </h2>
          <p className="text-on-surface-variant text-lg font-inter max-w-2xl mx-auto md:mx-0">
            Coding tutorials, tech insights, and development content from my YouTube channel.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div variants={fadeIn('up', 'spring', 0.1, 0.75)} className="flex flex-wrap gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-inter font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'text-on-primary'
                  : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
              }`}
            >
              {activeTab === tab.id && (
                <motion.span
                  layoutId="youtubeTabIndicator"
                  className="absolute inset-0 gradient-primary rounded-full -z-10"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Error State */}
        {error && !loading && (
          <motion.div
            variants={fadeIn('up', 'spring', 0.2, 0.75)}
            className="text-center py-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-surface-container mb-6">
              <svg className="w-10 h-10 text-on-surface-variant" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-on-surface-variant text-lg font-inter mb-4">
              Unable to load videos right now.
            </p>
            <a
              href="https://www.youtube.com/@ankkoder"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 gradient-primary text-[color:var(--gradient-btn-text)] px-6 py-3 rounded-full text-sm font-bold font-inter hover:shadow-glow transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a2.96 2.96 0 00-2.083-2.091C19.58 3.6 12 3.6 12 3.6s-7.58 0-9.415.495A2.96 2.96 0 00.502 6.186C0 8.03 0 12 0 12s0 3.97.502 5.814a2.96 2.96 0 002.083 2.091c1.835.495 9.415.495 9.415.495s7.58 0 9.415-.495a2.96 2.96 0 002.083-2.091c.502-1.844.502-5.814.502-5.814s0-3.97-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              Visit Channel
            </a>
          </motion.div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        )}

        {/* Videos Grid */}
        {!loading && !error && (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {videos.map((video, index) => (
                <VideoCard key={video.id} video={video} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>
        )}

        {/* Channel CTA */}
        <motion.div
          variants={fadeIn('up', 'spring', 0.3, 0.75)}
          className="mt-12 flex justify-center"
        >
          <a
            href="https://www.youtube.com/@ankkoder"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high border border-outline-variant/10 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-lg"
          >
            <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center shadow-md shadow-red-600/20 group-hover:shadow-red-600/40 transition-shadow">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a2.96 2.96 0 00-2.083-2.091C19.58 3.6 12 3.6 12 3.6s-7.58 0-9.415.495A2.96 2.96 0 00.502 6.186C0 8.03 0 12 0 12s0 3.97.502 5.814a2.96 2.96 0 002.083 2.091c1.835.495 9.415.495 9.415.495s7.58 0 9.415-.495a2.96 2.96 0 002.083-2.091c.502-1.844.502-5.814.502-5.814s0-3.97-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-on-background font-manrope font-bold text-sm">
                Subscribe to @ankkoder
              </p>
              <p className="text-on-surface-variant text-[11px] font-inter">
                More tutorials & dev content →
              </p>
            </div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
