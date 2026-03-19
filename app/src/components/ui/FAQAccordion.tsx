'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  defaultOpen?: boolean;
}

export default function FAQAccordion({ items, defaultOpen = false }: FAQAccordionProps) {
  const [expandedId, setExpandedId] = useState<string | null>(defaultOpen && items.length > 0 ? items[0].id : null);

  const toggleItem = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-3">
      {items.map((item) => (
        <motion.div key={item.id} variants={itemVariants} className="border border-warm-white/10 rounded-lg overflow-hidden bg-warm-white/5 hover:bg-warm-white/10 transition-colors">
          {/* Question Header */}
          <button
            onClick={() => toggleItem(item.id)}
            className="w-full flex items-center justify-between p-4 sm:p-6 text-left hover:bg-warm-white/5 transition-colors"
          >
            <div className="flex-1">
              <h3 className="font-heading font-semibold text-warm-white text-sm sm:text-base">{item.question}</h3>
              {item.category && (
                <p className="text-xs text-gold/60 font-mono mt-1">{item.category}</p>
              )}
            </div>

            {/* Expand/Collapse Icon */}
            <motion.div
              className="ml-4 flex-shrink-0"
              animate={{ rotate: expandedId === item.id ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <svg
                className="w-5 h-5 text-gold"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>
          </button>

          {/* Answer Content */}
          <AnimatePresence>
            {expandedId === item.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2 border-t border-warm-white/10">
                  <p className="text-warm-white/70 text-sm leading-relaxed">{item.answer}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </motion.div>
  );
}
