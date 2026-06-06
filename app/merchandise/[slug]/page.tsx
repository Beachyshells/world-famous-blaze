import { allProducts } from '@/app/merchandise/data' // Adjust path to where your data lives
import { notFound } from 'next/navigation'

export default function ProductPage({ params }: { params: { category: string, slug: string } }) {
    // 1. Find the product in your array that matches the slug
    const product = allProducts.find((p) => p.slug === params.slug)

    // 2. If it's not found, show a 404 page
    if (!product) {
        notFound()
    }

    return (
        <main className="max-w-5xl mx-auto px-6 py-20">
            <div className="grid md:grid-cols-2 gap-12">
                {/* Placeholder for your image */}
                <div className="aspect-square bg-surface border border-border flex items-center justify-center">
                    <span className="text-text-muted">{product.name} Image</span>
                </div>

                {/* Product Info */}
                <div>
                    <p className="text-accent uppercase tracking-[0.2em] text-sm mb-2">{product.category}</p>
                    <h1 className="text-4xl font-heading text-text mb-4">{product.name}</h1>
                    <p className="text-lg text-text-muted mb-6">{product.description}</p>
                    <p className="text-2xl font-heading">${product.price.toFixed(2)}</p>

                    <button className="mt-8 bg-primary text-bg px-8 py-3 uppercase tracking-[0.2em] text-sm">
                        Add to Cart
                    </button>
                </div>
            </div>
        </main>
    )
}