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
                        Show your support with World Famous Blaze gear. Apparel, accessories, and more from the shop.
                    </p>
                </div>

                {/* Merchandise Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {placeholderMerchandise.map((item) => (
                        <Link
                            key={item.name}
                            href="/merchandise"
                            className="bg-bg border border-border p-6 hover:border-primary transition-colors group cursor-pointer block"
                        >
                            {/* Placeholder image area */}
                            <div className="aspect-square bg-border/30 mb-4 flex items-center justify-center">
                                <span className="text-xs tracking-[0.3em] uppercase text-text-muted">
                                    Merch Image
                                </span>
                            </div>

                            <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-2">
                                {item.category}
                            </p>
                            <h3 className="text-lg text-text mb-1 group-hover:text-primary transition-colors">
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