import type { Metadata } from 'next'
import Link from 'next/link'
import { allProducts, categories } from '../data'
import { div } from 'framer-motion/m'

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

export default async function MerchDetailPage({
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
                        href="/merchandise"
                        className="text-primary hover:text-accent transition-colors text-sm tracking-wide"
                    >
                        ← Back to Merchandise
                    </Link>
                </div>
            </div>
        )
    }

    const categoryLabel = categories.find((c) => c.name === product.category)?.label

    return (
        <div className="min-h-screen">
            {/* Header */}
            <div className="bg-surface border-b border-border">
                <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
                    <Link
                        href="/merchandise"
                        className="text-xs tracking-[0.3em] uppercase text-primary hover:text-accent transition-colors mb-4 inline-block"
                    >
                        ← Back to Merchandise
                    </Link>
                    <p className="text-xs tracking-[0.3em] uppercase text-accent mb-2">
                        {categoryLabel}
                    </p>
                    <h1 className="text-4xl md:text-5xl font-heading text-text mb-4">{product.name}</h1>
                    <p className="text-text-muted text-lg max-w-2xl">
                        {product.description}
                    </p>
                </div>
            </div>

            {/* Product Content */}
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Image */}
                    <div className="aspect-square bg-surface border border-border shadow-md flex items-center justify-center overflow-hidden rounded-[5px]">
                        <span className="text-xs tracking-[0.3em] uppercase text-text-muted">
                            Product Image
                        </span>
                    </div>

                    {/* Details */}
                    <div>
                        <div className="mb-8">
                            <p className="text-3xl font-heading text-text">
                                ${product.price.toFixed(2)}
                            </p>
                        </div>

                        <div className="mb-8">
                            <p className="text-xs tracking-[0.2em] uppercase text-text-muted mb-3">
                                About This Product
                            </p>
                            <p className="text-text-muted leading-relaxed text-lg">
                                {product.description}
                            </p>
                        </div>

                        <div className="border-t border-border pt-8">
                            <a
                                href="/visit"
                                className="block bg-primary text-bg px-8 py-4 text-center text-sm tracking-[0.2em] uppercase hover:opacity-90 transition-opacity rounded-[5px]"
                            >
                                Get Directions to Store
                            </a>
                            <p className="text-xs text-text-muted mt-3 text-center">
                                Stop in or call{' '}
                                <a href="tel:+15183581023" className="text-primary hover:text-accent transition-colors">
                                    (518) 358-1023
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}