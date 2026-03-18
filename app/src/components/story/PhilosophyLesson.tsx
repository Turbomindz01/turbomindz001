'use client';

export interface PhilosophyLessonData {
  id: string;
  theme: string;
  color: string;
  question: string;
  keyPhilosopher: string;
  keyPhilosopherBio: string;
  coreIdea: string;
  practicalApplication: string;
  relatedScenes: string;
}

interface PhilosophyLessonProps {
  lesson: PhilosophyLessonData;
  compact?: boolean;
}

export default function PhilosophyLesson({ lesson, compact = false }: PhilosophyLessonProps) {
  return (
    <div className="card-glass p-6 transition-all duration-300 hover:shadow-lg hover:border-gold/50 border border-transparent">
      {/* Theme header with color bar */}
      <div className="mb-4 flex items-start gap-3">
        <div className="w-1 h-8 rounded" style={{ backgroundColor: lesson.color }} />
        <div>
          <h3 className="font-heading text-lg font-bold text-warm-white">{lesson.theme}</h3>
          <p className="text-sm font-mono" style={{ color: lesson.color }}>
            Philosophical Exploration
          </p>
        </div>
      </div>

      {/* Central question */}
      <div className="mb-4 p-3 rounded bg-warm-white/5 border border-warm-white/10">
        <p className="text-xs uppercase font-mono text-warm-white/50 tracking-wider mb-2">Central Question</p>
        <p className="text-warm-white text-sm italic">{lesson.question}</p>
      </div>

      {!compact && (
        <>
          {/* Key philosopher */}
          <div className="mb-4">
            <p className="text-xs uppercase font-mono text-warm-white/50 tracking-wider mb-2">Key Philosopher</p>
            <div className="space-y-1">
              <p className="font-heading font-semibold text-warm-white">{lesson.keyPhilosopher}</p>
              <p className="text-xs text-warm-white/60">{lesson.keyPhilosopherBio}</p>
            </div>
          </div>

          {/* Core idea */}
          <div className="mb-4">
            <p className="text-xs uppercase font-mono text-warm-white/50 tracking-wider mb-2">Core Idea</p>
            <p className="text-warm-white/70 text-sm">{lesson.coreIdea}</p>
          </div>

          {/* Practical application */}
          <div className="mb-4">
            <p className="text-xs uppercase font-mono text-warm-white/50 tracking-wider mb-2">In Turbomindz</p>
            <p className="text-warm-white/70 text-sm">{lesson.practicalApplication}</p>
          </div>
        </>
      )}

      {/* Related scenes tag */}
      <div className="pt-3 border-t border-warm-white/10">
        <p className="text-xs text-warm-white/50">
          <span className="font-mono">Scenes:</span> {lesson.relatedScenes}
        </p>
      </div>
    </div>
  );
}
