'use client';

export interface TimelineAct {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  sceneRange: string;
  emoji: string;
  theme: string;
  keyEvents: string[];
}

interface StoryTimelineProps {
  acts: TimelineAct[];
}

export default function StoryTimeline({ acts }: StoryTimelineProps) {
  return (
    <div className="my-16">
      <div className="space-y-8">
        {acts.map((act, index) => (
          <div key={act.id} className="relative">
            {/* Timeline line connector */}
            {index < acts.length - 1 && (
              <div className="absolute left-6 top-20 w-1 h-12 bg-gradient-to-b from-gold/40 to-transparent" />
            )}

            {/* Timeline dot + content */}
            <div className="flex gap-6">
              {/* Dot */}
              <div className="flex flex-col items-center pt-2">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-warm-white/20 flex items-center justify-center border border-gold/50 shadow-lg">
                  <span className="text-xl">{act.emoji}</span>
                </div>
              </div>

              {/* Content card */}
              <div className="flex-1 pb-4">
                <div className="card-glass p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-heading text-xl font-bold text-warm-white">{act.title}</h3>
                      <p className="text-sm font-mono text-gold mb-1">{act.subtitle}</p>
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold font-mono">
                      {act.sceneRange}
                    </span>
                  </div>

                  <p className="text-warm-white/70 text-sm leading-relaxed mb-4">{act.description}</p>

                  {/* Key events */}
                  <div className="space-y-2">
                    <p className="text-xs uppercase font-mono text-warm-white/50 tracking-wider">Key Moments</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {act.keyEvents.map((event, idx) => (
                        <li
                          key={idx}
                          className="text-xs text-warm-white/60 flex items-start gap-2 p-2 rounded bg-warm-white/5"
                        >
                          <span className="text-gold">→</span>
                          <span>{event}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
