import Link from 'next/link'
import { weeklyDeals } from '../../specials/data'

export function Hero() {
    const dayIndex = new Date().getDay()
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const today = days[dayIndex]
    const todaysDeal = weeklyDeals.find((d) => d.day === today) || weeklyDeals[0]

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

                    {/* Left — Your original hero content */}
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
                    <Link
                        href="/specials"
                        className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-[5px] p-8 hover:bg-white/10 hover:border-accent/30 transition-all duration-300 group block"
                    >
                        <div className="flex items-center justify-between mb-6">
                            <span className="text-xs tracking-[0.3em] uppercase text-accent font-heading">
                                Today&apos;s Deal
                            </span>
                            <span className="text-xs text-white/30 group-hover:text-accent transition-colors">
                                View all specials →
                            </span>
                        </div>


                        <p className="text-xs tracking-[0.2em] uppercase text-white/30 mb-1">
                            {todaysDeal.day}
                        </p>
                        <h2 className="text-2xl md:text-3xl font-heading text-white mb-3 group-hover:text-accent transition-colors">
                            {todaysDeal.title}
                        </h2>
                        <p className="text-xl md:text-2xl font-heading text-accent mb-4">
                            {todaysDeal.discount}
                        </p>
                        <p className="text-sm text-white/40 leading-relaxed">
                            {todaysDeal.description}
                        </p>
                    </Link>
                </div>
            </div>
        </section>
    )
}