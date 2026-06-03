import Link from 'next/link'

export function Hero() {
    return (
        <section className="relative overflow-hidden border-b border-border">
            {/* Background Image Layer */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-102"
                style={{ backgroundImage: 'url(/images/hero-background.jpg)' }}
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-linear-to-r from-[#1a1a1a]/90 via-[#1a1a1a]/50 to-transparent" />
            <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28 z-10">
                <p className="text-xs tracking-[0.3em] uppercase text-[#d4ab7a] mb-2">
                    Premium Cannabis  ·  Authentic Service
                </p>
                <h1 className="text-5xl md:text-6xl font-heading tracking-wide text-white mb-4">                    World Famous Blaze
                </h1>
                <p className="text-white/70 text-lg max-w-2xl">
                    Carefully curated cannabis from trusted growers. Locally owned,
                    deeply rooted, and built for the community.                    </p>
            </div>
        </section>
    )
}