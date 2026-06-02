import Link from 'next/link'

// Placeholder products with distinct background images and text alignments
const placeholderProducts = [
    {
        name: 'Premium Flower',
        category: 'Flower',
        description: 'Hand-trimmed, hand-cured small batches.',
        bgImage: '/images/cannabis-flower.jpg',
        align: 'left'
    },
    {
        name: 'House Pre-Rolls',
        category: 'Pre-Rolls',
        description: 'Cones rolled fresh weekly by our team.',
        bgImage: '/images/cannabis-pre-rolls.jpg',
        align: 'right'
    },
    {
        name: 'Artisan Edibles',
        category: 'Edibles',
        description: 'Locally made, precisely dosed provisions.',
        bgImage: '/images/cannabis-edibles.jpg',
        align: 'left'
    },
    {
        name: 'Vape Cartridges',
        category: 'Concentrates',
        description: 'Pure, lab-tested full-spectrum distillates.',
        bgImage: '/images/cannabis-vape-cartridges.jpg',
        align: 'right'
    },
]

export function FeaturedPreview() {
    return (
        <section className="bg-surface border-b border-border">
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28">

                {/* Header */}
                <div className="mb-16 md:mb-20">
                    <p className="text-xs tracking-[0.4em] uppercase text-primary mb-3 font-body font-medium">
                        This Week's Selection
                    </p>
                    <h2 className="text-4xl md:text-5xl font-heading font-medium text-text mb-4">
                        Featured
                    </h2>
                    <p className="text-text-muted max-w-2xl font-body font-light">
                        A small selection of what's on shelves right now. Stop in for the full menu.
                    </p>
                </div>

                {/* Vertical Stack Layout */}
                <div className="flex flex-col gap-8 mb-16">
                    {placeholderProducts.map((product) => (
                        <div
                            key={product.name}
                            className="relative w-full h-70 rounded-3xl overflow-hidden group cursor-pointer border border-border shadow-xs hover:shadow-xl transition-all duration-500"
                        >
                            {/* Colorful Background Image Layer */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: `url(${product.bgImage})` }}
                            />

                            {/* Deep, Rich Overlay Gradient for text readability */}
                            <div className="absolute inset-0 bg-linear-to-r from-bg/95 via-bg/70 to-transparent dark:from-bg/95 dark:via-bg/80 dark:to-transparent/30" />

                            {/* Content Layer */}
                            <div className={`absolute inset-0 p-8 md:p-12 flex flex-col justify-center max-w-xl text-left`}>
                                <span className="text-[10px] font-bold font-body tracking-widest text-accent uppercase mb-2">
                                    {product.category}
                                </span>
                                <h3 className="text-2xl md:text-3xl text-text font-heading font-medium tracking-wide mb-2 group-hover:text-primary transition-colors">
                                    {product.name}
                                </h3>
                                <p className="text-sm md:text-base text-text-muted/90 font-body font-light max-w-md leading-relaxed">
                                    {product.description}
                                </p>

                                {/* Elegant inline price flag */}
                                <p className="text-sm font-heading font-semibold text-text mt-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                    Explore Lineup →
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <Link
                    href="/menu"
                    className="group inline-flex items-center gap-3 text-text hover:text-primary transition-colors"
                >
                    <span className="font-body text-sm tracking-wide font-medium">Browse Full Menu</span>
                    <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
                </Link>
            </div>
        </section>
    )
}