import Link from 'next/link'

// Placeholder products with distinct background images and text alignments
const placeholderProducts = [
    {
        name: 'Premium Flower',
        category: 'Flower',
        description: 'Carefully selected, fresh premium flower.',
        bgImage: '/images/cannabis-flower.jpg',
        href: '/menu?category=flower',
    },
    {
        name: 'House Pre-Rolls',
        category: 'Pre-Rolls',
        description: 'Cones rolled fresh by our team.',
        bgImage: '/images/cannabis-pre-rolls.jpg',
        href: '/menu?category=prerolls',
    },
    {
        name: 'Artisan Edibles',
        category: 'Edibles',
        description: 'Curated treats and precisely dosed infusions.',
        bgImage: '/images/cannabis-edibles.jpg',
        href: '/menu?category=edibles',
    },
    {
        name: 'Vape Cartridges',
        category: 'Concentrates',
        description: 'Premium cartridges, disposables, and full-spectrum extracts.',
        bgImage: '/images/cannabis-vape-cartridges.jpg',
        href: '/menu?category=vapes',
    },
]

export function FeaturedPreview() {
    return (
        <section className="bg-surface border-b border-border">
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28">

                {/* Header */}
                <div className="mb-16 md:mb-20">
                    <p className="text-xs tracking-[0.4em] uppercase text-primary mb-3">
                        This Week&#39;s Selection
                    </p>
                    <h2 className="text-4xl md:text-5xl font-heading text-text mb-4">
                        Featured
                    </h2>
                    <p className="text-text-muted max-w-2xl">
                        A small selection of what&#39;s on shelves right now. Stop in for the full menu.
                    </p>
                </div>

                {/* Vertical Stack Layout */}
                <div className="flex flex-col gap-8 mb-16">
                    {placeholderProducts.map((product) => (
                        <Link
                            key={product.name}
                            href={product.href}
                            className="relative w-full h-70 overflow-hidden group cursor-pointer border border-border shadow-md hover:shadow-xl transition-all duration-500 block"
                        >
                            {/* Background Image Layer */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: `url(${product.bgImage})` }}
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-linear-to-r from-[#1a1a1a]/90 via-[#1a1a1a]/50 to-transparent" />
                            {/* Content Layer */}
                            {/* Content Layer */}
                            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center max-w-xl text-left">
                                <span className="text-xs tracking-[0.3em] uppercase text-[#d4ab7a] mb-2">
                                    {product.category}
                                </span>
                                <h3 className="text-2xl md:text-3xl text-white font-heading tracking-wide mb-2 group-hover:text-[#9aab8c] transition-colors">
                                    {product.name}
                                </h3>
                                <p className="text-sm md:text-base text-white/70 max-w-md leading-relaxed">
                                    {product.description}
                                </p>
                                <p className="text-sm font-heading text-white mt-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                    Explore Lineup →
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <Link
                    href="/menu"
                    className="group inline-flex items-center gap-3 text-text hover:text-primary transition-colors"
                >
                    <span className="text-sm tracking-wide">Browse Full Menu</span>
                    <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
                </Link>
            </div>
        </section>
    )
}