import Link from 'next/link'

const merchCategories = [
    {
        name: 'Smoking Essentials',
        category: 'Essentials',
        description: 'Precision grinders, custom rolling trays, papers, wraps, and daily tools.',
        bgImage: '/images/merch-smoking-essentials.jpg',
        href: '#essentials',
    },
    {
        name: 'Premium Glass & Rigs',
        category: 'Glassware',
        description: 'High-end bongs, rigs, bubblers, and specialized glassware for every setup.',
        bgImage: '/images/merch-premium-glass.jpg',
        href: '#glass',
    },
    {
        name: 'Lifestyle Products',
        category: 'Curated Gear',
        description: 'Signature coffee mugs, live plants, and custom lifestyle pieces around the shop.',
        bgImage: '/images/merch-lifestyle-products.jpg',
        href: '#lifestyle',
    },
]

export default function MerchandisePage() {
    return (
        <div className="min-h-screen">
            {/* Hero Header with Image */}
            <section className="relative overflow-hidden border-b border-border">
                {/* Background Image Layer */}
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-102"
                    style={{ backgroundImage: 'url(/images/merch-hero-background.jpg)' }}
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-linear-to-r from-[#1a1a1a]/90 via-[#1a1a1a]/50 to-transparent" />
                <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28 z-10">
                    <p className="text-xs tracking-[0.3em] uppercase text-[#d4ab7a] mb-2">
                        Fully Stocked
                    </p>
                    <h1 className="text-5xl md:text-6xl font-heading tracking-wide text-white mb-4">
                        Gear & Accessories
                    </h1>
                    <p className="text-white/70 text-lg max-w-2xl">
                        From high-end glassware and everyday smoking essentials to signature mugs and live shop plants — we have everything you need.
                    </p>
                </div>
            </section>




            {/* Category Banners */}
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
                <div className="flex flex-col gap-8">
                    {merchCategories.map((product) => (
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
                                    Explore Selections →
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}