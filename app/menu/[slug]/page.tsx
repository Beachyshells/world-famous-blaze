import type { Metadata } from 'next'
import Link from 'next/link'
import { allProducts, categories, tierOptions } from '../data'
import AddToBagButton from '../../components/AddToBagButton'

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>
}): Promise<Metadata> {
    const { slug } = await params
    const product = allProducts.find((p) => p.slug === slug)
    if (!product) {
        return { title: 'Product Not Found | World Famous Blaze' }
    }
    return {
        title: `${product.name} | World Famous Blaze`,
        description: product.description,
    }
}

export default async function ProductDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const product = allProducts.find((p) => p.slug === slug)

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

    const categoryLabel = categories.find((c) => c.name === product.category)?.label
    const currentTier = product.tier
        ? tierOptions.find((t) => t.name === product.tier)
        : undefined

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
                            {categoryLabel}
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
                        {currentTier && (
                            <div className="flex items-center gap-3 mb-6">
                                <span
                                    className="w-4 h-4 rounded-full border border-border"
                                    style={{ backgroundColor: currentTier.color }}
                                />
                                <span className="text-sm text-text-muted">
                                    {currentTier.label} Tier
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
                            <p className="text-3xl font-heading text-text">
                                ${product.price ? product.price.toFixed(2) : '0.00'}
                            </p>
                        </div>

                        {/* Weight Options — Flower only */}
                        {product.category === 'flower' && (
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


                        {/* Action Button */}
                        <div className="border-t border-border pt-8">
                            <AddToBagButton
                                id={`menu-${product.slug}`}
                                name={product.name}
                                price={product.price}
                                category={categoryLabel}
                            />
                            <p className="text-xs text-text-muted mt-3 text-center">
                                This is a reservation, not a purchase. Pay cash in store.
                            </p>
                            <p className="text-xs text-text-muted mt-2 text-center">
                                Stop in or call{' '}
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
        </div >
    )
}