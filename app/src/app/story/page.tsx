import type { Metadata } from "next";
import { characters, themes } from "@/lib/data";
import StoryTimeline, { type TimelineAct } from "@/components/story/StoryTimeline";
import CharacterProfile, { type CharacterData } from "@/components/story/CharacterProfile";
import PhilosophyLesson, { type PhilosophyLessonData } from "@/components/story/PhilosophyLesson";
import QuoteCard, { type QuoteData } from "@/components/story/QuoteCard";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "The Story — Turbomindz",
  description: "Follow Cosmo, Nova, Stella, and Luna through 39 universes and 888 scenes of philosophical discovery.",
};

// Timeline acts for the visual timeline
const timelineActs: TimelineAct[] = [
  {
    id: "act-1",
    title: "Act I: Departure",
    subtitle: "The First Question",
    description:
      "It begins in the Alchemical Renaissance — a universe where Renaissance oil painting meets ancient alchemy. Cosmo arrives with a question he can't articulate. Something is missing. Something has always been missing. By TM-006, Nova appears — an alien guide who sees connections everywhere. At TM-016, Stella joins the journey with her drive to build community.",
    sceneRange: "TM-001 → TM-222",
    emoji: "🚀",
    theme: "Classical Foundations",
    keyEvents: [
      "TM-001: Cosmo's arrival in Alchemical Renaissance",
      "TM-006: Nova appears with three orbiting spheres",
      "TM-016: Stella discovers the pattern too",
      "TM-050: First philosophy debate",
      "TM-111: The characters first sync understanding",
    ],
  },
  {
    id: "act-2",
    title: "Act II: The Ordeal",
    subtitle: "Confronting The Fade",
    description:
      "The Fade arrives — a force that doesn't destroy art, but makes people forget why it matters. Colors dim. Questions stop being asked. The universes begin to blur at the edges. At TM-050, Luna finally appears with her leather notebook and mismatched socks. She says almost nothing. But at TM-444, she speaks—and what she says changes everything.",
    sceneRange: "TM-223 → TM-666",
    emoji: "🌙",
    theme: "Existentialism & Modern",
    keyEvents: [
      "TM-223: The Fade begins to manifest",
      "TM-050: Luna appears silently observing",
      "TM-333: Colors fade from the universes",
      "TM-444: Luna speaks her first words",
      "TM-555: The group reaches their lowest point",
    ],
  },
  {
    id: "act-3",
    title: "Act III: The Return",
    subtitle: "Breakfast at the End",
    description:
      "They come back. Not as heroes — as breakfast companions. The final act is about rebuilding: not the grand gesture, but the quiet daily practice of keeping wonder alive. Scene 888 is a breakfast. Just four clay figures at a table, sharing food and silence and the kind of understanding that only comes from having traveled 39 universes together.",
    sceneRange: "TM-667 → TM-888",
    emoji: "🌟",
    theme: "Civic & Social",
    keyEvents: [
      "TM-667: The group regroups after The Fade",
      "TM-700: First morning practice routine",
      "TM-777: The theory becomes practice",
      "TM-850: All universes reconnect",
      "TM-888: The final breakfast scene",
    ],
  },
];

// Enhanced character data with full bios and themes
const characterProfiles: CharacterData[] = [
  {
    ...characters[0],
    fullBio:
      "Cosmo, the curious astronaut, always had a question on his or her (nobody really knows) lips. Orange boots, a fishbowl helmet full of breath, and a heart built to wonder. When others see facts, Cosmo sees invitations. Every answer only spawns three new questions.",
    themes: ["Classical Foundations", "Existentialism & Modern", "Science & Modernity"],
    quote: "But wait—what if we looked at it differently?",
  },
  {
    ...characters[1],
    fullBio:
      "Nova speaks in patterns because the universe itself is pattern. Three floating orbs orbit where her head isn't and her left hand holds an infinity pendant that switches direction every time you glance away. She sees connections across time and space that others are still struggling to perceive.",
    themes: ["Science & Modernity", "Mysticism & Esoterica", "Eastern Wisdom"],
    quote: "The pattern is everywhere—you just have to believe it.",
  },
  {
    ...characters[2],
    fullBio:
      "Stella's blue-to-purple gradient hair changes colors depending on who is looking. She carries constellation freckles like a map of her own internal universe. Her real superpower isn't seeing philosophy—it's helping others use it to build better communities together.",
    themes: ["Civic & Social", "Poetry & Aesthetics", "Psychology & Mind"],
    quote: "Philosophy only matters when we live it together.",
  },
  {
    ...characters[3],
    fullBio:
      "Luna barely speaks because Luna understands that the universe is still speaking. She just sketches in her leather notebook, mismatched socks crossed beneath her, a violet hair streak the only color in the greyscale room. Her silence is louder than any speech.",
    themes: ["Existentialism & Modern", "Poetry & Aesthetics", "Psychology & Mind"],
    quote: "...",
  },
];

// Philosophy lesson introductions for key themes
const philosophyLessonsIntro: PhilosophyLessonData[] = [
  {
    id: "classical",
    theme: "Classical Foundations",
    color: themes[0]?.color || "#1A237E",
    question: "What is virtue?",
    keyPhilosopher: "Socrates",
    keyPhilosopherBio: "The gadfly of Athens, 470–399 BCE",
    coreIdea:
      "Virtue (arete) is not inherited or taught, but achieved through questioning, reason, and the examined life. Wrongdoing comes from ignorance; if we truly knew what was right, we would do it.",
    practicalApplication:
      "Cosmo's journey begins with the same drive Socrates embodied: endless questioning. By TM-016, the group realizes that asking better questions creates better communities.",
    relatedScenes: "TM-001 through TM-111",
  },
  {
    id: "existential",
    theme: "Existentialism & Modern",
    color: themes[2]?.color || "#4A148C",
    question: "What is freedom?",
    keyPhilosopher: "Albert Camus",
    keyPhilosopherBio: "French-Algerian philosopher, 1913–1960",
    coreIdea:
      "We are 'condemned to be free.' Existence precedes essence. We create meaning through our choices and commitments, not through inherited systems. Life is absurd—and that absurdity is where freedom lives.",
    practicalApplication:
      "Luna's arrival at TM-050 introduces this tension. The Fade represents the absurd—meaninglessness encroaching. The group's response is radical freedom: creating new meaning together.",
    relatedScenes: "TM-223 through TM-666",
  },
];

// Philosophical quotes for the story
const storyQuotes: QuoteData[] = [
  {
    text: "The unexamined life is not worth living.",
    author: "Socrates",
    theme: "Classical Foundations",
    color: themes[0]?.color || "#1A237E",
  },
  {
    text: "The only way to deal with an unfree world is to become so absolutely free that very existence of that world is a form of victory.",
    author: "Albert Camus",
    theme: "Existentialism & Modern",
    color: themes[2]?.color || "#4A148C",
  },
  {
    text: "The universe is not only queerer than we suppose, but queerer than we can suppose.",
    author: "J.B.S. Haldane",
    theme: "Science & Modernity",
    color: themes[5]?.color || "#607D8B",
  },
  {
    text: "What we call 'reality' is in fact just a collective hunch.",
    author: "Lily Tomlin",
    theme: "Psychology & Mind",
    color: themes[8]?.color || "#00838F",
  },
];

export default function StoryPage() {
  return (
    <div className="min-h-screen pt-24 section-padding">
      <div className="container-narrow max-w-4xl">
        {/* Breadcrumbs */}
        <div className="mb-12">
          <Breadcrumbs items={[{ label: 'Story', href: '/story' }]} />
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-warm-white mb-4">The Story</h1>
          <p className="text-warm-white/60 italic text-lg">
            &ldquo;Every great journey begins with a question you can&apos;t answer alone.&rdquo;
          </p>
        </div>

        {/* Visual Timeline */}
        <div className="mb-20">
          <h2 className="font-heading text-gold text-2xl mb-8 text-center">39 Universes, 888 Scenes</h2>
          <StoryTimeline acts={timelineActs} />
        </div>

        {/* Character Profiles Section */}
        <div className="mb-20">
          <h2 className="font-heading text-gold text-2xl mb-8 text-center">The Characters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {characterProfiles.map((char, idx) => (
              <CharacterProfile key={char.name} character={char} featured={char.voicePercentage > 35} delay={idx * 0.15} />
            ))}
          </div>
        </div>

        {/* Philosophy Lessons Section */}
        <div className="mb-20">
          <h2 className="font-heading text-gold text-2xl mb-8 text-center">Philosophical Foundations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {philosophyLessonsIntro.map((lesson) => (
              <PhilosophyLesson key={lesson.id} lesson={lesson} compact={false} />
            ))}
          </div>
        </div>

        {/* Philosophical Quotes Section */}
        <div className="mb-20">
          <h2 className="font-heading text-gold text-2xl mb-8 text-center">Guiding Wisdom</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {storyQuotes.map((quote, idx) => (
              <QuoteCard key={`${quote.author}-${idx}`} quote={quote} delay={idx * 0.1} />
            ))}
          </div>
        </div>

        {/* About the Universes */}
        <div className="card-glass p-8 mt-20">
          <h3 className="font-heading text-xl font-bold text-warm-white mb-4">About the Universes</h3>
          <p className="text-warm-white/70 leading-relaxed mb-4">
            Each universe in Turbomindz represents a different art tradition, philosophical school, or way of seeing the
            world. From Renaissance alchemy to sacred geometry, from cyberpunk dreamscapes to crystalline meditation
            spaces—all 39 universes are part of the same story.
          </p>
          <p className="text-warm-white/70 leading-relaxed">
            The 888 scenes are not arranged chronologically. They move between universes freely, just as the four
            characters move between them. Some scenes happen at the beginning of Act I, others at the end of Act III.
            Time becomes a spiral, not a line.
          </p>
        </div>
      </div>
    </div>
  );
}
