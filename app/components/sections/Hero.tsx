import Link from 'next/link'

export function Hero() {
    return (
        <section className="relative bg-bg border-b border-border overflow-hidden">
            {/* Background Image Layer */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-102"
                style={{ backgroundImage: 'url(/images/hero-background.jpg)' }}
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-linear-to-r from-[#1a1a1a]/90 via-[#1a1a1a]/50 to-transparent" />            {/* Content Container - Wrapped in 'dark' so your global design tokens render light */}
            <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-24 md:py-22 z-10">

                <p className="text-xs tracking-[0.4em] uppercase text-[#d4ab7a] mb-6">
                    Premium Cannabis  ·  Authentic Service
                </p>

                <h1 className="text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] mb-8 max-w-4xl">
                    World Famous Blaze
                </h1>

                <p className="text-lg text-white/70 max-w-2xl leading-relaxed mb-12">
                    Carefully curated cannabis from trusted growers. Locally owned,
                    deeply rooted, and built for the community.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                        href="/menu"
                        className="inline-flex items-center justify-center px-6 py-3 bg-[#9aab8c] text-white font-medium tracking-wide hover:opacity-90 transition-opacity"
                    >
                        View The Menu
                    </Link>
                    <Link
                        href="/visit"
                        className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white font-medium tracking-wide hover:border-[#9aab8c] hover:text-[#9aab8c] transition-colors"
                    >
                        Plan Your Visit
                    </Link>
                </div>
            </div>
        </section>
    )
}