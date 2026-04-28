"use client";

import { useState } from "react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { MembershipGate } from "@/components/ui/MembershipGate";

// Mock forum channels (mirrors Discord structure)
const CHANNELS = [
  { id: "general", name: "general", icon: "#", description: "Open discussion for Village members." },
  { id: "philosophy", name: "philosophy", icon: "🧠", description: "Deep dives into the 9 philosophical themes." },
  { id: "art-discussion", name: "art-discussion", icon: "🎨", description: "Talk about the scenes, the marriages, the art." },
  { id: "marketplace", name: "marketplace", icon: "🏛", description: "Trade threads, bid negotiations, witnessed deals." },
  { id: "easter-eggs", name: "easter-eggs", icon: "🥚", description: "Find and share the hidden easter eggs in each scene." },
  { id: "governance", name: "governance", icon: "⚖️", description: "Vote on Village decisions and future direction." },
];

// Mock posts for UI demonstration (replaced by Supabase realtime in MP4)
const MOCK_POSTS = [
  { id: 1, channel: "general", author: "Traveler_Cosmo", avatar: "🚀", content: "Just picked up Scene 42 — the Stoics one. Anyone else into Marcus Aurelius?", time: "2m ago", replies: 3 },
  { id: 2, channel: "philosophy", author: "NovaSeeker", avatar: "🔮", content: "The pattern connecting Kant and the Eastern Wisdom theme is unmistakable. Has anyone mapped it?", time: "14m ago", replies: 7 },
  { id: 3, channel: "art-discussion", author: "StellaWeaves", avatar: "🌟", content: "First marriage ceremony went through! NFT 7 + 'Chained Shadows' oil painting. The card flip is everything.", time: "1h ago", replies: 12 },
  { id: 4, channel: "marketplace", author: "LunaObserves", avatar: "🌙", content: "Placed a bid on Scene XIV. 105 MATIC. Seller hasn't responded. Witnessed.", time: "3h ago", replies: 2 },
  { id: 5, channel: "easter-eggs", author: "Traveler_Cosmo", avatar: "🚀", content: "Scene 22 has a tiny copy of the Allegory of the Cave painted inside the cave wall — scene within a scene.", time: "5h ago", replies: 19 },
];

function ForumSyncIndicator() {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
      <span className="text-emerald-400 text-xs font-mono">Synced with Discord</span>
    </div>
  );
}

export default function ForumPage() {
  const [activeChannel, setActiveChannel] = useState("general");
  const [newPost, setNewPost] = useState("");

  const channelPosts = MOCK_POSTS.filter((p) => p.channel === activeChannel);
  const currentChannel = CHANNELS.find((c) => c.id === activeChannel);

  return (
    <div className="min-h-screen pt-8 section-padding">
      <div className="container-narrow">
        <div className="mb-6">
          <Breadcrumbs items={[{ label: "Forum", href: "/forum" }]} />
        </div>

        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-heading font-bold text-warm-white">The Village Forum</h1>
            <p className="text-warm-white/50 text-sm mt-1">Bidirectionally synced with Discord · Members only</p>
          </div>
          <ForumSyncIndicator />
        </div>

        <MembershipGate>
          <div className="flex gap-6">
            {/* Sidebar — channels */}
            <aside className="w-48 shrink-0 hidden sm:block">
              <div className="sticky top-28 space-y-1">
                <p className="text-warm-white/30 text-[10px] font-mono uppercase tracking-wider mb-3 px-2">Channels</p>
                {CHANNELS.map((ch) => (
                  <button
                    key={ch.id}
                    onClick={() => setActiveChannel(ch.id)}
                    className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors text-left ${
                      activeChannel === ch.id
                        ? "bg-gold/15 text-gold border border-gold/30"
                        : "text-warm-white/60 hover:bg-warm-white/5 hover:text-warm-white"
                    }`}
                  >
                    <span className="text-base leading-none">{ch.icon}</span>
                    <span className="font-mono text-xs truncate">{ch.name}</span>
                  </button>
                ))}
              </div>
            </aside>

            {/* Main — posts */}
            <main className="flex-1 min-w-0">
              {/* Channel header */}
              <div className="card-glass p-4 mb-4 flex items-center gap-3">
                <span className="text-xl">{currentChannel?.icon}</span>
                <div>
                  <p className="font-semibold text-warm-white text-sm"># {currentChannel?.name}</p>
                  <p className="text-warm-white/40 text-xs">{currentChannel?.description}</p>
                </div>
              </div>

              {/* Mobile channel selector */}
              <div className="sm:hidden mb-4">
                <select
                  value={activeChannel}
                  onChange={(e) => setActiveChannel(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-warm-white/5 border border-warm-white/20 text-warm-white text-sm focus:outline-none focus:border-gold/50"
                  aria-label="Select channel"
                >
                  {CHANNELS.map((ch) => (
                    <option key={ch.id} value={ch.id}>{ch.icon} #{ch.name}</option>
                  ))}
                </select>
              </div>

              {/* Posts */}
              <div className="space-y-3 mb-6">
                {channelPosts.length > 0 ? (
                  channelPosts.map((post) => (
                    <div key={post.id} className="card-glass p-4 flex items-start gap-3">
                      <div className="w-9 h-9 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-lg shrink-0">
                        {post.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-2 mb-1">
                          <span className="text-gold text-sm font-semibold">{post.author}</span>
                          <span className="text-warm-white/30 text-xs font-mono">{post.time}</span>
                        </div>
                        <p className="text-warm-white/80 text-sm leading-relaxed">{post.content}</p>
                        <button className="mt-2 text-warm-white/30 hover:text-warm-white/60 text-xs transition-colors">
                          {post.replies} {post.replies === 1 ? "reply" : "replies"} ↩
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <p className="text-warm-white/40 text-sm">No posts yet in #{currentChannel?.name}.</p>
                    <p className="text-warm-white/25 text-xs mt-1">Be the first to start the conversation.</p>
                  </div>
                )}
              </div>

              {/* Compose */}
              <div className="card-glass p-4">
                <div className="flex gap-3 items-end">
                  <textarea
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    placeholder={`Post in #${currentChannel?.name}…`}
                    rows={3}
                    className="flex-1 px-4 py-3 rounded-xl bg-warm-white/5 border border-warm-white/20 text-warm-white placeholder:text-warm-white/30 focus:outline-none focus:border-gold/50 text-sm resize-none"
                    aria-label="Write a post"
                  />
                  <button
                    onClick={() => setNewPost("")}
                    disabled={!newPost.trim()}
                    className="px-5 py-3 rounded-xl bg-gold text-rich-black font-semibold text-sm hover:bg-gold/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
                  >
                    Post
                  </button>
                </div>
                <p className="text-warm-white/25 text-xs mt-2">
                  Posts sync to Discord #{currentChannel?.name} in real-time.
                </p>
              </div>
            </main>
          </div>
        </MembershipGate>
      </div>
    </div>
  );
}
