export function NFTSkeleton() {
  return (
    <div className="card-glass-hover animate-pulse overflow-hidden flex flex-col">
      {/* Image skeleton */}
      <div className="w-full aspect-[3/4] bg-warm-white/5 rounded-lg mb-4" />

      {/* Content skeleton */}
      <div className="p-4 flex flex-col flex-1">
        {/* Title skeleton */}
        <div className="h-4 bg-warm-white/10 rounded mb-2 w-3/4" />
        
        {/* Badge skeleton */}
        <div className="h-6 bg-warm-white/10 rounded mb-3 w-1/2" />
        
        {/* Quote skeleton */}
        <div className="h-3 bg-warm-white/10 rounded mb-2 w-5/6" />
        <div className="h-3 bg-warm-white/10 rounded mb-4 w-4/5" />
        
        {/* Footer skeleton */}
        <div className="flex justify-between pt-3 border-t border-warm-white/10">
          <div className="h-3 bg-warm-white/10 rounded w-1/3" />
          <div className="h-3 bg-warm-white/10 rounded w-1/4" />
        </div>
      </div>
    </div>
  );
}

export function GalleryGridSkeleton() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
      {Array.from({ length: 8 }).map((_, i) => (
        <NFTSkeleton key={i} />
      ))}
    </div>
  );
}
