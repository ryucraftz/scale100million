export default function FilmGrain() {
    // Disable on mobile for performance
    if (typeof window !== 'undefined' && window.innerWidth < 768) return null;

    return (
        <div className="fixed inset-0 z-[5] pointer-events-none opacity-[0.03] mix-blend-overlay overflow-hidden">
            <svg className="w-full h-full text-white/5">
                <filter id="noiseFilter">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.8"
                        numOctaves="3"
                        stitchTiles="stitch"
                    />
                </filter>
                <rect width="100%" height="100%" filter="url(#noiseFilter)" />
            </svg>
        </div>
    );
}
