import Link from 'next/link'

// Placeholder products — will pull from Sanity in Phase 7
const placeholderProducts = [
    { name: 'Premium Flower', category: 'Flower', description: 'Hand-trimmed, hand-cured' },
    { name: 'House Pre-Rolls', category: 'Pre-Rolls', description: 'Made fresh weekly' },
    { name: 'Artisan Edibles', category: 'Edibles', description: 'Made by local makers' },
    { name: 'Vape Cartridges', category: 'Concentrates', description: 'Lab-tested, pure' },
]

export function FeaturedPreview() {
    return (
        <section className="bg-surface border-b border-border">
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28">

                {/* Header */}
                <div className="mb-12 md:mb-16">
                    <p className="text-xs tracking-[0.4em] uppercase text-primary mb-3">
                        This Week's Selection
                    </p>
                    <h2 className="text-4xl md:text-5xl text-text mb-4">
                        Featured
                    </h2>
                    <p className="text-text-muted max-w-2xl">
                        A small selection of what's on shelves right now. Stop in for the full menu.
                    </p>
                </div>

                {/* Product Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {placeholderProducts.map((product) => (
                        <div
                            key={product.name}
                            className="bg-bg border border-border p-6 hover:border-primary transition-colors group cursor-pointer"
                        >
                            {/* Placeholder image area */}
                            <div className="aspect-square bg-border/30 mb-4 flex items-center justify-center">
                                <span className="text-xs tracking-[0.3em] uppercase text-text-muted">
                                    Product Image
                                </span>
                            </div>

                            <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-2">
                                {product.category}
                            </p>
                            <h3 className="text-lg text-text mb-1 group-hover:text-primary transition-colors">
                                {product.name}
                            </h3>
                            <p className="text-sm text-text-muted">
                                {product.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <Link
                    href="/menu"
                    className="group inline-flex items-center gap-3 text-text hover:text-primary transition-colors"
                >
                    <span className="tracking-wide">Browse Full Menu</span>
                    <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
                </Link>
            </div>
        </section>
    )
}