'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

export interface CharacterData {
  name: string;
  emoji: string;
  title: string;
  description: string;
  fullBio: string;
  color: string;
  thresholdScene: number;
  voicePercentage: number;
  themes: string[];
  quote: string;
}

interface CharacterProfileProps {
  character: CharacterData;
  featured?: boolean;
  delay?: number;
}

export default function CharacterProfile({ character, featured = false, delay = 0 }: CharacterProfileProps) {
  const [ref, isInView] = useInView({ threshold: 0.3, once: true });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay,
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
      className={`card-glass p-6 transition-all duration-300 hover:shadow-lg ${featured ? 'border border-gold/30' : ''}`}
      whileHover={{ y: -4 }}
    >
      {/* Header with emoji and title */}
      <div className="flex items-start gap-4 mb-4">
        <div className="text-5xl">{character.emoji}</div>
        <div className="flex-1">
          <h3 className="font-heading text-2xl font-bold text-warm-white">{character.name}</h3>
          <p className="text-sm font-mono" style={{ color: character.color }}>
            {character.title}
          </p>
        </div>
      </div>

      {/* Bio */}
      <p className="text-warm-white/70 text-sm leading-relaxed mb-4">{character.fullBio}</p>

      {/* Quote */}
      {character.quote && (
        <div className="border-l-2 border-gold/40 pl-4 py-2 mb-4">
          <p className="text-warm-white/60 text-sm italic">&ldquo;{character.quote}&rdquo;</p>
        </div>
      )}

      {/* Metadata grid */}
      <div className="grid grid-cols-2 gap-3 mb-4 pt-4 border-t border-warm-white/10">
        <div>
          <p className="text-xs uppercase font-mono text-warm-white/50 tracking-wider mb-1">First Appears</p>
          <p className="font-mono text-warm-white text-sm">Scene TM-{String(character.thresholdScene).padStart(3, '0')}</p>
        </div>
        <div>
          <p className="text-xs uppercase font-mono text-warm-white/50 tracking-wider mb-1">Voice Presence</p>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-2 bg-warm-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-gold to-warm-white/40 rounded-full"
                style={{ width: `${character.voicePercentage}%` }}
              />
            </div>
            <span className="text-sm font-mono text-gold">{character.voicePercentage}%</span>
          </div>
        </div>
      </div>

      {/* Themes associated */}
      {character.themes && character.themes.length > 0 && (
        <div>
          <p className="text-xs uppercase font-mono text-warm-white/50 tracking-wider mb-2">Philosophical Themes</p>
          <div className="flex flex-wrap gap-2">
            {character.themes.map((theme) => (
              <span
                key={theme}
                className="text-xs px-2 py-1 rounded border border-gold/20 bg-gold/5 text-warm-white/70"
              >
                {theme}
              </span>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}
