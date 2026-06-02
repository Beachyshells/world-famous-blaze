'use client'

interface CardProduct {
    name: string
    description: string
    price?: number
    category?: string
    strain?: string
    brand?: string
    tierColor?: string
    tierLabel?: string
}

interface ProductCardProps {
    product: CardProduct
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="bg-surface border border-border p-6 hover:border-primary hover:shadow-lg transition-all duration-300 group cursor-pointer flex flex-col justify-between shadow-[0_4px_20px_-4px_rgba(26,46,31,0.03)] h-full">
            <div>
                {/* Image Frame */}
                <div className="aspect-square bg-bg border border-border mb-4 flex items-center justify-center relative overflow-hidden">
                    <span className="text-xs tracking-[0.3em] uppercase text-text-muted">
                        Product Image
                    </span>

                    {/* Tier Tag Overlay (Flower only) */}
                    {product.tierColor && product.tierLabel && (
                        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-1 bg-surface border border-border text-xs font-medium tracking-wide text-text-muted shadow-sm">
                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: product.tierColor }} />
                            {product.tierLabel}
                        </div>
                    )}
                </div>

                {/* Category & Strain/Brand */}
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs tracking-[0.2em] uppercase text-text-muted">
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
                <h3 className="text-lg text-text font-heading mb-1 group-hover:text-primary transition-colors line-clamp-1">
                    {product.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-text-muted line-clamp-2 leading-relaxed mb-4">
                    {product.description}
                </p>
            </div>

            {/* Price */}
            <div className="pt-4 border-t border-border flex items-center justify-end mt-auto">
                <p className="text-lg text-text font-heading">
                    ${product.price ? product.price.toFixed(2) : '0.00'}
                </p>
            </div>
        </div>
    )
}