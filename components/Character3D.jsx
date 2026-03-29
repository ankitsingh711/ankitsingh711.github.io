'use client';

export default function Character3D() {
  return (
    <div className="w-full h-full min-h-[400px] md:min-h-[500px] flex items-center justify-center relative">
      {/* Ambient glow behind the character */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-gradient-to-tr from-secondary/10 via-primary/10 to-tertiary/10 blur-[60px]" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/40 animate-pulse"
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Orbital glow ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] md:w-[420px] md:h-[420px] pointer-events-none">
        <div className="w-full h-full rounded-full border border-secondary/15 animate-spin" style={{ animationDuration: '20s' }} />
      </div>
    </div>
  );
}
