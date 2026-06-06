'use client'

import { useState } from 'react'
import Link from 'next/link'
import ProductCard from '../components/ProductCard'
// This assumes your data.ts is in the same folder as this file
import { allProducts, categories, sortOptions, Category, SortOption } from './data'

export default function MerchContent() {
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)
    const [sortBy, setSortBy] = useState<SortOption>('newest')

    const hasFilters = selectedCategory !== null || sortBy !== 'newest'

    const clearAll = () => {
        setSelectedCategory(null)
        setSortBy('newest')
    }

    const filtered = allProducts.filter((product) => {
        if (selectedCategory && product.category !== selectedCategory) return false
        return true
    })

    const sorted = [...filtered].sort((a, b) => {
        switch (sortBy) {
            case 'newest':
                return b.dateAdded - a.dateAdded
            case 'price-low':
                return a.price - b.price
            case 'price-high':
                return b.price - a.price
            default:
                return 0
        }
    })

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative overflow-hidden border-b border-border">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/merch-hero-background.jpg)' }} />
                <div className="absolute inset-0 bg-linear-to-r from-dark/90 via-dark/50 to-transparent" />
                <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28 z-10">
                    <h1 className="text-5xl md:text-6xl font-heading tracking-wide text-white mb-4">Gear & Accessories</h1>
                </div>
            </section>

            {/* Filter Bar */}
            <div className="sticky top-0 z-20 bg-surface/95 backdrop-blur-md border-b border-border">
                <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-2.5">
                        {categories.map((cat) => (
                            <button
                                key={cat.name}
                                onClick={() => setSelectedCategory(selectedCategory === cat.name ? null : cat.name)}
                                className={`px-4 py-2 rounded-full text-xs font-medium border ${selectedCategory === cat.name ? 'bg-text text-bg border-text' : 'bg-surface border-border text-text-muted hover:border-primary'}`}
                            >
                                {cat.label}
                            </button>
                        ))}
                        {sortOptions.map((option) => (
                            <button
                                key={option.name}
                                onClick={() => setSortBy(option.name)}
                                className={`px-4 py-2 rounded-full text-xs font-medium border ${sortBy === option.name ? 'bg-primary text-white border-primary' : 'bg-surface border-border text-text-muted hover:border-primary'}`}
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Grid */}
            <div className="bg-bg py-12">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                    {sorted.map((product) => (
                        <ProductCard
                            key={product.slug}
                            product={{
                                name: product.name,
                                description: product.description,
                                category: categories.find(c => c.name === product.category)?.label || 'Gear',
                                price: product.price
                            }}
                            href={`/merchandise/${product.slug}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}