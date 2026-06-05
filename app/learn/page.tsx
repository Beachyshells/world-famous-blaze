import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Learn | World Famous Blaze',
    description: 'Cannabis education — strains, shopping tips, and community resources from World Famous Blaze.',
}

export default function LearnPage() {
    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative overflow-hidden border-b border-border">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url(/images/cannabis-flower.jpg)' }}
                />
                <div className="absolute inset-0 bg-linear-to-r from-dark/90 via-dark/50 to-transparent" />
                <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28 z-10">
                    <p className="text-xs tracking-[0.3em] uppercase text-accent mb-2">
                        Education
                    </p>
                    <h1 className="text-5xl md:text-6xl font-heading tracking-wide text-white mb-4">
                        Learn
                    </h1>
                    <p className="text-white/70 text-lg max-w-2xl">
                        New to cannabis or just want to know more? Start here. No jargon, no lectures — just the stuff that actually helps.
                    </p>
                </div>
            </section>

            {/* Strain Guides */}
            <section className="bg-bg border-b border-border">
                <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
                    <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">
                        Know Your Strains
                    </p>
                    <h2 className="text-2xl md:text-3xl font-heading text-text mb-8">
                        The three types of cannabis
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Link
                            href="/learn/sativa"
                            className="bg-surface border border-border p-8 hover:border-primary shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer block rounded-[5px]"
                        >
                            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">Sativa</p>
                            <h3 className="text-2xl font-heading text-text mb-3 group-hover:text-primary transition-colors">
                                The Energizer
                            </h3>
                            <p className="text-sm text-text-muted leading-relaxed mb-6">
                                The daytime pick. Uplifting, energizing, and perfect for getting things done while still enjoying the ride.
                            </p>
                            <span className="text-sm text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 inline-block">
                                Read More →
                            </span>
                        </Link>

                        <Link
                            href="/learn/indica"
                            className="bg-surface border border-border p-8 hover:border-primary shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer block rounded-[5px]"
                        >
                            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">Indica</p>
                            <h3 className="text-2xl font-heading text-text mb-3 group-hover:text-primary transition-colors">
                                The Relaxer
                            </h3>
                            <p className="text-sm text-text-muted leading-relaxed mb-6">
                                The wind-down strain. Heavy, warm, and built for melting into the couch at the end of the day.
                            </p>
                            <span className="text-sm text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 inline-block">
                                Read More →
                            </span>
                        </Link>

                        <Link
                            href="/learn/hybrid"
                            className="bg-surface border border-border p-8 hover:border-primary shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer block rounded-[5px]"
                        >
                            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">Hybrid</p>
                            <h3 className="text-2xl font-heading text-text mb-3 group-hover:text-primary transition-colors">
                                The All-Rounder
                            </h3>
                            <p className="text-sm text-text-muted leading-relaxed mb-6">
                                The best of both worlds. Balanced effects that sit right between energizing and relaxing.
                            </p>
                            <span className="text-sm text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 inline-block">
                                Read More →
                            </span>
                        </Link>
                    </div>
                </div>
            </section>


        </div>
    )
}