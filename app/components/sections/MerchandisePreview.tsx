import Link from 'next/link'

const merchHighlights = [
    {
        name: 'Smoking Essentials',
        category: 'Essentials',
        description: 'Precision grinders, custom rolling trays, papers, wraps, and daily tools.',
        bgImage: '/images/merch-smoking-essentials.jpg',
        href: '/merchandise',
    },
    {
        name: 'Premium Glass & Rigs',
        category: 'Glassware',
        description: 'High-end bongs, rigs, bubblers, and specialized glassware for every setup.',
        bgImage: '/images/merch-premium-glass.jpg',
        href: '/merchandise',
    },
    {
        name: 'Lifestyle Products',
        category: 'Curated Gear',
        description: 'Signature coffee mugs, live plants, and custom lifestyle pieces around the shop.',
        bgImage: '/images/merch-lifestyle-products.jpg',
        href: '/merchandise',
    },
]

export function MerchandisePreview() {
    return (
        <section className="bg-surface border-b border-border">
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28">

                {/* Header */}
                <div className="mb-16 md:mb-20">
                    <p className="text-xs tracking-[0.4em] uppercase text-accent mb-3">
                        Branded Gear
                    </p>
                    <h2 className="text-4xl md:text-5xl font-heading text-text mb-4">
                        Merchandise
                    </h2>
                    <p className="text-text-muted max-w-2xl">
                        More than just a smoke shop. Gear up with apparel, accessories, and lifestyle essentials.
                    </p>
                </div>

                {/* Vertical Stack — matches FeaturedPreview */}
                <div className="flex flex-col gap-8 mb-16">
                    {merchHighlights.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="relative w-full h-70 overflow-hidden group cursor-pointer border border-border shadow-md hover:shadow-xl transition-all duration-500 block rounded-[5px]"
                        >
                            {/* Background Image Layer */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: `url(${item.bgImage})` }}
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-linear-to-r from-dark/90 via-dark/50 to-transparent" />

                            {/* Content Layer */}
                            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center max-w-xl text-left">
                                <span className="text-xs tracking-[0.3em] uppercase text-accent mb-2">
                                    {item.category}
                                </span>
                                <h3 className="text-2xl md:text-3xl text-white font-heading tracking-wide mb-2 group-hover:text-primary transition-colors">
                                    {item.name}
                                </h3>
                                <p className="text-sm md:text-base text-white/70 max-w-md leading-relaxed">
                                    {item.description}
                                </p>
                                <p className="text-sm font-heading text-white mt-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                    Browse Collection →
                                </p>
                            </div>
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