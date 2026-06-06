import HeroDealCard from '../HeroDealCard'

export function Hero() {
    return (
        <section className="relative overflow-hidden border-b border-border">
            {/* Background Image Layer */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-102"
                style={{ backgroundImage: 'url(/images/hero-background.jpg)' }}
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-linear-to-r from-dark/90 via-dark/50 to-transparent" />

            <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-18 z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left — Hero content */}
                    <div>
                        <p className="text-xs tracking-[0.3em] uppercase text-accent mb-2">
                            Premium Cannabis  ·  Authentic Service
                        </p>
                        <h1 className="text-5xl md:text-6xl uppercase font-heading tracking-wide text-white mb-4">
                            World Famous Blaze
                        </h1>
                        <p className="text-white/70 text-lg max-w-2xl">
                            Carefully curated cannabis from trusted growers. Locally owned,
                            deeply rooted, and built for the community.
                        </p>
                    </div>

                    {/* Right — Today's Deal */}
                    <HeroDealCard />
                </div>
            </div>
        </section>
    )
}