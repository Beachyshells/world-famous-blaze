import Link from 'next/link'

export function Hero() {
    return (
        <section className="relative bg-bg border-b border-border">
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-24 md:py-32 lg:py-40">

                <p className="text-xs tracking-[0.4em] uppercase text-primary mb-6">
                    Premium Cannabis  ·  Authentic Service
                </p>

                <h1 className="text-5xl md:text-7xl lg:text-8xl text-text leading-[0.95] mb-8 max-w-4xl">
                    World-Famous-Blaze
                </h1>

                <p className="text-lg md:text-xl text-text-muted max-w-2xl leading-relaxed mb-12">
                    Carefully curated cannabis from trusted growers. Locally owned,
                    deeply rooted, and built for the community.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                        href="/menu"
                        className="inline-flex items-center justify-center px-8 py-4 bg-primary text-bg font-medium tracking-wide hover:opacity-90 transition-opacity"
                    >
                        View The Menu
                    </Link>
                    <Link
                        href="/visit"
                        className="inline-flex items-center justify-center px-8 py-4 border border-border text-text font-medium tracking-wide hover:border-primary hover:text-primary transition-colors"
                    >
                        Plan Your Visit
                    </Link>
                </div>
            </div>
        </section>
    )
}