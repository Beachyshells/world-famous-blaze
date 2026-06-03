import Link from 'next/link'

// Placeholder product data — will pull from Sanity or POS in Phase 7
const placeholderProducts: Record<string, {
    name: string
    category: string
    strain?: string
    tier?: { name: string; color: string }
    brand?: string
    description: string
    details: string
}> = {
    'sunny-haze': {
        name: 'Sunny Haze',
        category: 'Flower',
        strain: 'Sativa',
        tier: { name: 'Yellow', color: '#ecc94b' },
        description: 'Energizing citrus notes',
        details: 'A bright, uplifting sativa that hits with citrus on the inhale and a smooth, clean finish. Popular with daytime smokers who want to stay active and focused. Hand-trimmed, small-batch flower from our current rotation.',
    },
    'night-owl': {
        name: 'Night Owl',
        category: 'Flower',
        strain: 'Indica',
        tier: { name: 'Yellow', color: '#ecc94b' },
        description: 'Relaxing, calming effects',
        details: 'A mellow indica built for the end of the day. Earthy flavor with a slow onset that settles into full-body relaxation. Great for unwinding without getting knocked out immediately.',
    },
    'citrus-burst-cart': {
        name: 'Citrus Burst Cart',
        category: 'Vapes',
        strain: 'Sativa',
        brand: 'Brand A',
        description: 'Bright, energizing pull',
        details: 'A clean-hitting sativa cartridge with a strong citrus profile. Full spectrum extraction for a well-rounded effect. Compatible with standard 510-thread batteries.',
    },
    'house-joint': {
        name: 'House Joint',
        category: 'Pre-Rolls',
        strain: 'Sativa',
        description: 'Solid everyday smoke',
        details: 'Our house sativa pre-roll. Rolled fresh weekly by the team using flower from our current menu. A reliable, no-fuss joint for when you just want something good without overthinking it.',
    },
    'gummy-bears-10pk': {
        name: 'Gummy Bears 10pk',
        category: 'Edibles',
        description: 'Classic fruity flavors',
        details: 'Ten gummies per pack, each precisely dosed for a consistent experience. Mixed fruit flavors. Great for new users who want to start slow or experienced users who want a familiar, reliable edible.',
    },
    'basic-shatter': {
        name: 'Basic Shatter',
        category: 'Concentrates',
        description: 'Clean, affordable concentrate',
        details: 'A no-frills shatter that delivers. Clean extraction, solid potency, and a smooth dab every time. Our most affordable concentrate option for daily users.',
    },
}

export default async function ProductDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const product = placeholderProducts[slug]

    if (!product) {
        return (
            <div className="min-h-screen">
                <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24 text-center">
                    <h1 className="text-4xl font-heading text-text mb-4">Product Not Found</h1>
                    <p className="text-text-muted mb-8">
                        We couldn&#39;t find that product. It may have been removed or the link is incorrect.
                    </p>
                    <Link
                        href="/menu"
                        className="text-primary hover:text-accent transition-colors text-sm tracking-wide"
                    >
                        ← Back to Menu
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen">
            {/* Header */}
            <div className="bg-surface border-b border-border">
                <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
                    <Link
                        href="/menu"
                        className="text-xs tracking-[0.3em] uppercase text-primary hover:text-accent transition-colors mb-4 inline-block"
                    >
                        ← Back to Menu
                    </Link>
                    <div className="flex items-center gap-3 mb-2">
                        <p className="text-xs tracking-[0.3em] uppercase text-accent">
                            {product.category}
                        </p>
                        {product.strain && (
                            <>
                                <span className="text-text-muted">·</span>
                                <p className="text-xs tracking-[0.3em] uppercase text-primary">
                                    {product.strain}
                                </p>
                            </>
                        )}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-heading text-text mb-4">{product.name}</h1>
                    <p className="text-text-muted text-lg max-w-2xl">
                        {product.description}
                    </p>
                </div>
            </div>

            {/* Product Content */}
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                    {/* Left — Image */}
                    <div className="aspect-square bg-surface border border-border shadow-md flex items-center justify-center overflow-hidden">
                        <span className="text-xs tracking-[0.3em] uppercase text-text-muted">
                            Product Image
                        </span>
                    </div>

                    {/* Right — Details */}
                    <div>
                        {/* Tier */}
                        {product.tier && (
                            <div className="flex items-center gap-3 mb-6">
                                <span
                                    className="w-4 h-4 rounded-full border border-border"
                                    style={{ backgroundColor: product.tier.color }}
                                />
                                <span className="text-sm text-text-muted">
                                    {product.tier.name} Tier
                                </span>
                            </div>
                        )}

                        {/* Brand */}
                        {product.brand && (
                            <p className="text-xs tracking-[0.2em] uppercase text-text-muted mb-6">
                                Brand: {product.brand}
                            </p>
                        )}

                        {/* Price */}
                        <div className="mb-8">
                            <p className="text-3xl font-heading text-text">$0.00</p>
                        </div>

                        {/* Weight Options — Placeholder for owner input */}
                        {product.category === 'Flower' && (
                            <div className="mb-8">
                                <p className="text-xs tracking-[0.2em] uppercase text-text-muted mb-3">
                                    Select Weight
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {['1g', '3.5g', '7g', '14g', '28g'].map((weight) => (
                                        <div
                                            key={weight}
                                            className="px-5 py-2 border border-border bg-surface text-sm text-text-muted hover:border-primary hover:text-text transition-colors cursor-pointer"
                                        >
                                            {weight}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Full Description */}
                        <div className="mb-8">
                            <p className="text-xs tracking-[0.2em] uppercase text-text-muted mb-3">
                                About This Product
                            </p>
                            <p className="text-text-muted leading-relaxed text-lg">
                                {product.details}
                            </p>
                        </div>

                        {/* Action Button — Placeholder */}
                        <div className="border-t border-border pt-8">
                            <a
                                href="/visit"

                                rel="noopener noreferrer"
                                className="block bg-primary text-bg px-8 py-4 text-center text-sm tracking-[0.2em] uppercase hover:opacity-90 transition-opacity cursor-pointer"
                            >
                                Get Directions to Store
                            </a>
                            <p className="text-xs text-text-muted mt-3 text-center">
                                Online ordering coming soon. Stop in or call{' '}
                                <a href="tel:+15183581023" className="text-primary hover:text-accent transition-colors">
                                    (518) 358-1023
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Disclaimer */}
            <div className="max-w-7xl mx-auto px-6 md:px-8 pb-16">
                <div className="border-t border-border pt-8">
                    <p className="text-xs text-text-muted leading-relaxed">
                        The information on this page is for educational purposes only. It is not medical advice. Cannabis affects everyone differently. Consult a healthcare professional with any medical questions. World Famous Blaze makes no claims about the medical benefits of any product.
                    </p>
                </div>
            </div>
        </div>
    )
}