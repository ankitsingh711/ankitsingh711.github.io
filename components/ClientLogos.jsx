const companies = [
  'Tuna Software',
  'ZINEIQ',
  'Edureka',
  'Chumley.ai',
  'SGTraDex',
  'Six Flags',
  'bepay',
  'DocuMind',
];

const marqueeItems = [...companies, ...companies];

export default function ClientLogos() {
  return (
    <div className="border-y border-white/[0.06] bg-surface/40 backdrop-blur-sm overflow-hidden">
      <div className="flex items-center gap-8 px-6 sm:px-10 lg:px-16 py-4">
        {/* Left label */}
        <span className="font-mono text-[10px] tracking-[0.22em] text-on-surface-variant/35 uppercase shrink-0">
          TRUSTED BY
        </span>

        {/* Marquee track */}
        <div className="flex-1 overflow-hidden relative">
          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-12 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, var(--color-surface, #0b0e1a), transparent)' }}
          />
          <div className="absolute inset-y-0 right-0 w-12 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, var(--color-surface, #0b0e1a), transparent)' }}
          />

          <div className="animate-marquee flex gap-4 w-max">
            {marqueeItems.map((company, i) => (
              <span
                key={i}
                className="px-4 py-1.5 rounded-full border border-white/[0.07] text-on-surface-variant/50 text-xs font-inter whitespace-nowrap"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
