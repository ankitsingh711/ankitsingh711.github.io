'use client';

import { motion } from 'framer-motion';

export default function FloatingPhone() {
  return (
    <div className="fixed bottom-6 left-6 lg:bottom-10 lg:left-10 z-[1000] flex flex-col gap-4">
      {/* Email Button */}
      <motion.a
        href="mailto:developerankit2127@gmail.com"
        title="Email developerankit2127@gmail.com"
        className="relative flex items-center justify-center w-14 h-14 bg-[#5B63D6] text-white rounded-full shadow-lg group hover:scale-110 active:scale-95 transition-all duration-300"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4, type: 'spring', bounce: 0.5 }}
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/919839531208"
        target="_blank"
        rel="noopener noreferrer"
        title="WhatsApp +91 98395 31208"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg group hover:scale-110 active:scale-95 transition-all duration-300"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5, type: 'spring', bounce: 0.5 }}
      >
        <svg 
          className="w-7 h-7 animate-[bounce_2s_infinite_1s]" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M12.031 0C5.394 0 0 5.394 0 12.031c0 2.128.552 4.137 1.543 5.918L.234 23.945l6.155-1.614A11.966 11.966 0 0012.031 24c6.637 0 12.031-5.394 12.031-12.031S18.665 0 12.031 0zM17.43 16.035c-.218.618-1.284 1.189-1.801 1.258-.456.061-1.028.118-3.15-.762-2.541-1.055-4.162-3.666-4.29-3.834-.127-.168-1.024-1.365-1.024-2.607 0-1.241.642-1.854.876-2.091.233-.236.51-.295.68-.295.17 0 .34.004.489.01.156.009.324-.055.508.388.188.455.637 1.554.693 1.666.056.113.094.244.008.414-.084.17-.128.275-.255.424-.127.148-.266.319-.38.441-.122.128-.255.27-.11.517.146.247.647 1.066 1.396 1.734.966.86 1.761 1.127 2.016 1.253.255.127.404.106.554-.06.149-.168.647-.751.819-1.009.172-.258.344-.216.578-.128.234.088 1.487.701 1.742.828.255.128.425.191.488.297.064.106.064.618-.154 1.237z" />
        </svg>
      </motion.a>

      {/* Direct Call Button */}
      <motion.a
        href="tel:+919839531208"
        title="Call +91 98395 31208"
        className="relative flex items-center justify-center w-14 h-14 bg-violet-600 text-white rounded-full shadow-lg group hover:scale-110 active:scale-95 transition-all duration-300"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6, type: 'spring', bounce: 0.5 }}
      >
        {/* Animated pulse rings */}
        <span className="absolute inset-0 rounded-full animate-ping opacity-75 bg-violet-600 duration-1000 -z-10 group-hover:block" />
        <span className="absolute -inset-2 rounded-full border border-violet-600/30 scale-100 opacity-0 group-hover:scale-150 group-hover:opacity-100 transition-all duration-700 ease-out -z-10" />

        <svg 
          className="w-6 h-6 animate-[bounce_2s_infinite]" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
          />
        </svg>
      </motion.a>
    </div>
  );
}
