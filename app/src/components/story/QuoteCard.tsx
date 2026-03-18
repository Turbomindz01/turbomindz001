'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

export interface QuoteData {
  text: string;
  author: string;
  theme: string;
  color: string;
}

interface QuoteCardProps {
  quote: QuoteData;
  delay?: number;
}

export default function QuoteCard({ quote, delay = 0 }: QuoteCardProps) {
  const [ref, isInView] = useInView({ threshold: 0.3, once: true });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: 'easeOut',
      },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: delay + 0.1,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="card-glass p-8 relative"
    >
      {/* Top accent line */}
      <motion.div
        variants={lineVariants}
        className="absolute top-0 left-0 h-1 rounded-tr"
        style={{ width: '100%', backgroundColor: quote.color, originX: 0 }}
      />

      {/* Quote mark */}
      <div className="text-4xl opacity-10 mb-2" style={{ color: quote.color }}>
        &ldquo;
      </div>

      {/* Quote text */}
      <blockquote className="text-lg sm:text-xl font-heading italic text-warm-white mb-6 leading-relaxed">
        {quote.text}
      </blockquote>

      {/* Attribution */}
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold text-warm-white" style={{ color: quote.color }}>
            {quote.author}
          </p>
          <p className="text-xs text-warm-white/50 font-mono">{quote.theme}</p>
        </div>
        {/* Theme dot */}
        <div
          className="w-3 h-3 rounded-full opacity-60"
          style={{ backgroundColor: quote.color }}
        />
      </div>
    </motion.div>
  );
}
