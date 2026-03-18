"use client";

import { useState, useMemo } from "react";
import { Search, X } from "lucide-react";
import { featuredNFTs, themes, characters } from "@/lib/data";
import NFTDetailModal from "@/components/gallery/NFTDetailModal";
import { ErrorBoundary } from "@/components/gallery/ErrorBoundary";

interface NFTCardProps {
  id: number;
  title: string;
  theme: string;
  characters: string[];
  price: number;
  imageUrl: string;
  quote: string;
  quoteAuthor: string;
}

function NFTCard({ id, title, theme, characters, price, imageUrl, quote, quoteAuthor, onView }: NFTCardProps & { onView?: () => void }) {
  const themeData = themes.find(t => t.name === theme);
  return (
    <div className="card-glass-hover group cursor-pointer overflow-hidden flex flex-col">
      {/* Image container */}
      <div className="relative w-full aspect-[3/4] bg-gradient-to-br from-gold/10 to-deep-teal/10 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="text-4xl mb-2">🎨</p>
            <p className="text-warm-white/30 text-xs font-mono">TM-{String(id).padStart(3, "0")}</p>
          </div>
        </div>
        {/* Theme color bar on top */}
        {/* eslint-disable-next-line */}
        <div 
          className="absolute top-0 left-0 right-0 h-1 theme-bar"
          style={{ backgroundColor: themeData?.color || "#C9A227" }}
        />
      </div>
      {/* Card content */}
      <div className="p-4 flex flex-col flex-1">
        {/* Title */}
        <h3 className="font-heading font-bold text-warm-white text-sm mb-2 group-hover:text-gold transition-colors line-clamp-2">
          {title}
        </h3>
        {/* Theme & Characters badges */}
        <div className="flex flex-wrap gap-1 mb-3">
          {/* eslint-disable-next-line */}
          <span 
            className="theme-badge"
            style={{ backgroundColor: themeData?.color ? `${themeData.color}20` : undefined, color: themeData?.color, borderColor: themeData?.color ? `${themeData.color}40` : undefined }}
          >
            {theme.split(" ")[0]}
          </span>
          {characters.map((char) => (
            <span key={char} className="theme-badge text-xs bg-warm-white/10 text-warm-white/70 border-warm-white/20">
              {char}
            </span>
          ))}
        </div>
        {/* Quote */}
        <p className="text-warm-white/50 text-xs italic mb-2 line-clamp-2 flex-1">
          &ldquo;{quote}&rdquo;
        </p>
        {/* Author & Price */}
        <div className="flex justify-between items-center pt-3 border-t border-warm-white/10">
          <p className="text-warm-white/40 text-xs font-mono">{quoteAuthor}</p>
          <p className="text-gold text-sm font-semibold">{price} MATIC</p>
        </div>
        {/* View button */}
        {onView && (
          <button
            className="mt-4 px-4 py-2 rounded-lg bg-gold text-rich-black font-semibold text-sm hover:bg-gold/80 transition-colors"
            onClick={onView}
          >
            View
          </button>
        )}
      </div>
    </div>
  );
}

function GalleryPageContent() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedNFT, setSelectedNFT] = useState<NFTCardProps | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null);

  // Expand mock data to have more items for testing
  const allNFTs: NFTCardProps[] = useMemo(() => {
    return [
      ...featuredNFTs.map(nft => ({
        id: nft.id,
        title: nft.title,
        theme: nft.theme.name,
        characters: nft.characters,
        price: nft.priceMaticRaw,
        imageUrl: nft.imageUrl || "/placeholder-nft-1.jpg",
        quote: nft.quote,
        quoteAuthor: nft.quoteAuthor,
      })),
      // Add generated mock items to fill out gallery
      ...Array.from({ length: 20 }, (_, i) => ({
        id: 100 + i,
        title: `Philosophical Scene ${100 + i}`,
        theme: themes[Math.floor(Math.random() * themes.length)].name,
        characters: [characters[Math.floor(Math.random() * characters.length)].name],
        price: Math.floor(Math.random() * 100) + 10,
        imageUrl: `/placeholder-nft-${(i % 3) + 1}.jpg`,
        quote: "The unexamined life is not worth living.",
        quoteAuthor: "Various",
      })),
    ];
  }, []);

  // Filter logic
  const filteredNFTs = useMemo(() => {
    return allNFTs.filter(nft => {
      const matchesSearch = 
        nft.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        nft.quoteAuthor.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesTheme = !selectedTheme || nft.theme === selectedTheme;
      const matchesCharacter = !selectedCharacter || nft.characters.includes(selectedCharacter);

      return matchesSearch && matchesTheme && matchesCharacter;
    });
  }, [searchQuery, selectedTheme, selectedCharacter, allNFTs]);

  return (
    <div className="min-h-screen pt-24 section-padding">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-warm-white mb-4">
            The Gallery
          </h1>
          <p className="text-warm-white/60 max-w-lg mx-auto">
            888 scenes. 39 universes. 9 themes. Every piece hides 5 easter eggs and carries the wisdom of
            history&apos;s greatest thinkers.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-warm-white/40" />
            <input
              type="text"
              placeholder="Search by title, author, or theme..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-warm-white/5 border border-warm-white/20 text-warm-white placeholder:text-warm-white/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all"
              aria-label="Search scenes"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-warm-white/40 hover:text-warm-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Filter Bar */}
        <div className="card-glass p-4 mb-8">
          <div className="flex flex-wrap gap-3 items-center justify-between">
            <div className="text-sm text-warm-white/60 font-semibold">
              Filters ({Object.values([selectedTheme, selectedCharacter]).filter(Boolean).length})
            </div>

            <div className="flex flex-wrap gap-2">
              {/* Theme Filter */}
              <div className="relative group">
                <button className="px-4 py-2 rounded-lg bg-warm-white/5 border border-warm-white/20 text-warm-white/70 hover:border-gold/50 hover:text-gold transition-all text-sm font-medium">
                  {selectedTheme ? `Theme: ${selectedTheme.split(" ")[0]}` : "All Themes"}
                </button>
                
                <div className="absolute top-full mt-1 left-0 bg-rich-black/95 border border-gold/30 rounded-lg shadow-xl p-2 w-48 max-h-64 overflow-y-auto hidden group-hover:block z-40">
                  <button
                    onClick={() => setSelectedTheme(null)}
                    className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                      !selectedTheme
                        ? "bg-gold/20 text-gold"
                        : "text-warm-white/70 hover:bg-warm-white/5 hover:text-warm-white"
                    }`}
                  >
                    All Themes
                  </button>
                  {themes.map((theme) => (
                    <button
                      key={theme.name}
                      onClick={() => setSelectedTheme(theme.name)}
                      className={`w-full text-left px-3 py-2 rounded text-sm transition-colors flex items-center gap-2 ${
                        selectedTheme === theme.name
                          ? "bg-gold/20"
                          : "text-warm-white/70 hover:bg-warm-white/5"
                      }`}
                    >
                      {/* eslint-disable-next-line */}
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: theme.color }}
                      />
                      {theme.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Character Filter */}
              <div className="relative group">
                <button className="px-4 py-2 rounded-lg bg-warm-white/5 border border-warm-white/20 text-warm-white/70 hover:border-gold/50 hover:text-gold transition-all text-sm font-medium">
                  {selectedCharacter ? `Character: ${selectedCharacter}` : "All Characters"}
                </button>
                
                <div className="absolute top-full mt-1 left-0 bg-rich-black/95 border border-gold/30 rounded-lg shadow-xl p-2 w-40 hidden group-hover:block z-40">
                  <button
                    onClick={() => setSelectedCharacter(null)}
                    className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                      !selectedCharacter
                        ? "bg-gold/20 text-gold"
                        : "text-warm-white/70 hover:bg-warm-white/5 hover:text-warm-white"
                    }`}
                  >
                    All Characters
                  </button>
                  {characters.map((char) => (
                    <button
                      key={char.name}
                      onClick={() => setSelectedCharacter(char.name)}
                      className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                        selectedCharacter === char.name
                          ? "bg-gold/20 text-gold"
                          : "text-warm-white/70 hover:bg-warm-white/5 hover:text-warm-white"
                      }`}
                    >
                      {char.emoji} {char.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear All Button */}
              {(selectedTheme || selectedCharacter || searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedTheme(null);
                    setSelectedCharacter(null);
                    setSearchQuery("");
                  }}
                  title="Clear all filters"
                  className="px-4 py-2 rounded-lg bg-warm-white/5 border border-warm-white/20 text-warm-white/70 hover:border-gold/50 hover:text-gold transition-all text-sm font-medium"
                >
                  Clear All
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6 text-sm text-warm-white/60">
          Showing <span className="text-gold font-semibold">{filteredNFTs.length}</span> of{" "}
          <span className="text-warm-white/80">{allNFTs.length}</span> scenes
        </div>

        {/* NFT Grid */}
        {filteredNFTs.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {filteredNFTs.map((nft) => (
              <NFTCard
                key={nft.id}
                {...nft}
                onView={() => {
                  setSelectedNFT(nft);
                  setModalOpen(true);
                }}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-warm-white/60 mb-4">No scenes match your filters.</p>
            <button
              onClick={() => {
                setSelectedTheme(null);
                setSelectedCharacter(null);
                setSearchQuery("");
              }}
              className="text-gold hover:text-gold/80 transition-colors font-semibold"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
      {/* NFT Detail Modal */}
      <NFTDetailModal
        nft={selectedNFT}
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setSelectedNFT(null);
        }}
      />
    </div>
  );
}

export default function GalleryPage() {
  return (
    <ErrorBoundary
      fallback={
        <div className="min-h-screen pt-24 section-padding">
          <div className="container-narrow text-center py-12">
            <h2 className="text-3xl font-heading font-bold text-warm-white mb-4">
              Gallery Unavailable
            </h2>
            <p className="text-warm-white/60 mb-6">
              We&apos;re having trouble loading the gallery. Please refresh the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 rounded-lg bg-gold text-rich-black font-semibold hover:bg-gold/80 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      }
    >
      <GalleryPageContent />
    </ErrorBoundary>
  );
}
