'use client';

export default function Logo({ className = '' }) {
  return (
    <div className={`flex items-center gap-3 select-none ${className} group`}>
      {/* Icon portion: Premium Animated 'A' */}
      <div className="relative w-9 h-9 flex items-center justify-center">
        {/* Soft glowing halo */}
        <div className="absolute inset-0 bg-primary/30 blur-xl rounded-full group-hover:bg-primary/50 group-hover:scale-125 transition-all duration-700" />
        
        {/* SVG Container */}
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full relative z-10 transition-transform duration-700 group-hover:scale-105"
        >
          {/* Main Triangle / A body (Glassmorphic translucent back) */}
          <path
            d="M50 10L10 90H32L50 54L68 90H90L50 10Z"
            fill="url(#premium-grad-back)"
            opacity="0.8"
          />
          
          {/* Overlay interlocking ribbon (Forward facing) */}
          <path
            d="M50 10L32 46L68 90H90L50 10Z"
            fill="url(#premium-grad-front)"
          />

          {/* Futuristic Crossbar */}
          <path
            d="M25 68H75"
            stroke="url(#premium-grad-accent)"
            strokeWidth="12"
            strokeLinecap="round"
          />

          {/* Sparkle Dot */}
          <circle 
            cx="50" 
            cy="18" 
            r="4" 
            fill="#FFFFFF" 
            className="opacity-70 group-hover:opacity-100 transition-opacity" 
          />

          {/* Beautiful Multi-Stop Gradients mapped to theme variables */}
          <defs>
            <linearGradient
              id="premium-grad-back"
              x1="10"
              y1="10"
              x2="90"
              y2="90"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="var(--color-primary)" />
              <stop offset="1" stopColor="var(--color-tertiary)" stopOpacity="0.5" />
            </linearGradient>

            <linearGradient
              id="premium-grad-front"
              x1="50"
              y1="10"
              x2="90"
              y2="90"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="var(--color-secondary)" />
              <stop offset="1" stopColor="var(--color-primary)" />
            </linearGradient>

            <linearGradient
              id="premium-grad-accent"
              x1="25"
              y1="68"
              x2="75"
              y2="68"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="var(--color-tertiary)" />
              <stop offset="1" stopColor="var(--color-secondary)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Text portion */}
      <span className="text-2xl font-manrope font-extrabold tracking-tight text-on-surface">
        Ank<span className="text-primary group-hover:text-secondary transition-colors duration-500">oder</span>
      </span>
    </div>
  );
}
