import Link from 'next/link'

const merchCategories = [
    {
        name: 'Smoking Essentials',
        category: 'Essentials',
        description: 'Precision grinders, custom rolling trays, papers, wraps, and daily tools.',
        bgImage: 'https://images.pexels.com/photos/3850588/pexels-photo-3850588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        href: '#essentials', // Or point wherever you want these to go later
    },
    {
        name: 'Premium Glass & Rigs',
        category: 'Glassware',
        description: 'High-end bongs, rigs, bubblers, and specialized glassware for every setup.',
        bgImage: 'https://images.pexels.com/photos/4051016/pexels-photo-4051016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        href: '#glass',
    },
    {
        name: 'Lifestyle Products',
        category: 'Curated Gear',
        description: 'Signature coffee mugs, live plants, and custom lifestyle pieces around the shop.',
        bgImage: 'https://images.pexels.com/photos/3094208/pexels-photo-3094208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        href: '#lifestyle',
    },
]

export default function MerchandisePage() {
    return (
        <section className="bg-surface border-b border-border min-h-screen pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">

                {/* Header Block matching home style */}
                <div className="mb-16 md:mb-20">
                    <p className="text-xs tracking-[0.4em] uppercase text-primary mb-3">
                        Fully Stocked Accessory Hub
                    </p>
                    <h1 className="text-4xl md:text-5xl font-heading text-text mb-4">
                        Gear & Accessories
                    </h1>
                    <p className="text-text-muted max-w-2xl">
                        From high-end glassware and everyday smoking essentials to signature mugs and live shop plants—we have absolutely everything you need.
                    </p>
                </div>

                {/* Vertical Stack Layout Mirroring Homepage */}
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

                            {/* Overlay Gradient (Deep Left-to-Right Fade) */}
                            <div className="absolute inset-0 bg-linear-to-r from-neutral-950 via-neutral-950/70 to-transparent dark:from-neutral-950 dark:via-neutral-950/80 dark:to-transparent/30" />
                            {/* Content Layer */}
                            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center max-w-xl text-left">
                                <span className="text-xs tracking-[0.3em] uppercase text-primary mb-2">
                                    {product.category}
                                </span>
                                <h3 className="text-2xl md:text-3xl text-primary font-heading tracking-wide mb-2 group-hover:text-primary transition-colors">
                                    {product.name}
                                </h3>
                                <p className="text-sm md:text-base text-text-muted max-w-md leading-relaxed">
                                    {product.description}
                                </p>
                                <p className="text-sm tracking-widest font-heading text-success mt-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                    Explore Selections →
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    )
}