import Link from 'next/link'

// Placeholder merchandise — will pull from Sanity in Phase 7
const placeholderMerchandise = [
    { name: 'World Famous Blaze Hoodie', category: 'Apparel', description: 'Premium embroidered hoodie' },
    { name: 'Branded Rolling Tray', category: 'Accessories', description: 'Custom design, eco-friendly materials' },
    { name: 'WFB Enamel Pin Set', category: 'Accessories', description: 'Collectible 4-piece set' },
    { name: 'Wooden Stash Box', category: 'Storage', description: 'Hand-crafted, locally made' },
]

export function MerchandisePreview() {
    return (
        <section className="bg-surface border-b border-border">
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28">

                {/* Header */}
                <div className="mb-12 md:mb-16">
                    <p className="text-xs tracking-[0.4em] uppercase text-primary mb-3">
                        Branded Gear
                    </p>
                    <h2 className="text-4xl md:text-5xl font-heading text-text mb-4">
                        Merchandise
                    </h2>
                    <p className="text-text-muted max-w-2xl">
                        Gear up with apparel, custom accessories, premium glass, and lifestyle essentials.
                    </p>
                </div>

                {/* Merchandise Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {placeholderMerchandise.map((item) => (
                        <Link
                            key={item.name}
                            href="/merchandise"
                            className="bg-bg border border-border p-4 hover:border-primary hover:shadow-lg transition-all duration-300 group cursor-pointer block shadow-[0_4px_20px_-4px_rgba(26,46,31,0.03)]"
                        >
                            {/* Image area with dark treatment */}
                            <div className="aspect-square bg-[#1a1a1a] mb-4 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-linear-to-t from-[#1a1a1a]/80 via-[#1a1a1a]/30 to-transparent pointer-events-none" />
                                <div className="flex flex-col items-center gap-2">
                                    <svg
                                        className="w-8 h-8 text-white/15"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={1}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                                    </svg>
                                    <span className="text-[10px] tracking-[0.3em] uppercase text-white/20">
                                        No Image Available
                                    </span>
                                </div>
                            </div>

                            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-2">
                                {item.category}
                            </p>
                            <h3 className="text-base font-heading text-text mb-1 group-hover:text-primary transition-colors">
                                {item.name}
                            </h3>
                            <p className="text-sm text-text-muted">
                                {item.description}
                            </p>
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <Link
                    href="/merchandise"
                    className="group inline-flex items-center gap-3 text-text hover:text-primary transition-colors"
                >
                    <span className="text-sm tracking-wide">Browse All Merchandise</span>
                    <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
                </Link>
            </div>
        </section>
    )
}