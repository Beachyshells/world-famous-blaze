'use client'

import Link from 'next/link'

interface CardProduct {
    name: string
    description: string
    price?: number
    category?: string
    strain?: string
    brand?: string
    tierColor?: string
    tierLabel?: string
    image?: string
}

interface ProductCardProps {
    product: CardProduct
    href?: string
}

export default function ProductCard({ product, href }: ProductCardProps) {
    const content = (
        <div className="bg-surface border border-border p-4 hover:border-primary hover:shadow-lg transition-all duration-300 group cursor-pointer flex flex-col justify-between shadow-[0_4px_20px_-4px_rgba(26,46,31,0.03)] h-full">
            <div>
                {/* Image Frame */}
                <div className="aspect-4/3 bg-dark mb-4 flex items-center justify-center relative overflow-hidden">
                    {product.image ? (
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="flex flex-col items-center gap-2">
                            <svg
                                className="w-8 h-8 text-white/15"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={1}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                            </svg>
                            <span className="text-[10px] tracking-[0.3em] uppercase text-white/20">
                                No Image Available
                            </span>
                        </div>
                    )}

                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-dark/80 via-dark/30 to-transparent pointer-events-none" />
                    {/* Tier Tag Overlay (Flower only) */}
                    {product.tierColor && (
                        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-1 bg-dark/80 border border-white/10 text-xs font-medium tracking-wide text-white/70 shadow-sm z-10">
                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: product.tierColor }} />
                            {product.tierLabel}
                        </div>
                    )}
                </div>

                {/* Category & Strain/Brand */}
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs tracking-[0.2em] uppercase text-accent">
                        {product.category || 'Gear'}
                    </span>
                    {(product.brand || product.strain) && (
                        <>
                            <span className="text-text-muted">·</span>
                            <span className="text-xs tracking-[0.2em] uppercase text-primary">
                                {product.brand || product.strain}
                            </span>
                        </>
                    )}
                </div>

                {/* Product Name */}
                <h3 className="text-base text-text font-heading tracking-wide mb-1 group-hover:text-primary transition-colors line-clamp-1">
                    {product.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-text-muted line-clamp-2 tracking-wide mb-4">
                    {product.description}
                </p>
            </div>

            {/* Price */}
            <div className="pt-4 border-t border-border flex items-center justify-end mt-auto">
                <p className="text-base text-text tracking-widest font-heading">
                    ${product.price ? product.price.toFixed(2) : '0.00'}
                </p>
            </div>
        </div>
    )

    if (href) {
        return <Link href={href}>{content}</Link>
    }

    return content
}