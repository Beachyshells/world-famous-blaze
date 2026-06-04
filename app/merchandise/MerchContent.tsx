'use client'

import { useState } from 'react'
import Link from 'next/link'

type Category = 'essentials' | 'glass' | 'lifestyle'
type SortOption = 'newest' | 'price-low' | 'price-high'

const categories = [
    { name: 'essentials' as Category, label: 'Essentials' },
    { name: 'glass' as Category, label: 'Glassware' },
    { name: 'lifestyle' as Category, label: 'Lifestyle' },
]

const sortOptions = [
    { name: 'newest' as SortOption, label: 'Newest' },
    { name: 'price-low' as SortOption, label: 'Price: Low → High' },
    { name: 'price-high' as SortOption, label: 'Price: High → Low' },
]

interface MerchProduct {
    name: string
    description: string
    category: Category
    price: number
    dateAdded: number
    image?: string
}

const allProducts: MerchProduct[] = [
    // ── Essentials ──
    { name: 'Premium Grinder', description: 'Heavy-duty, 4-piece aluminum', category: 'essentials', price: 24.99, dateAdded: 6 },
    { name: 'Rolling Tray', description: 'Custom WFB branded tray', category: 'essentials', price: 18.99, dateAdded: 5 },
    { name: 'Raw Papers', description: 'Classic unrefined rolling papers', category: 'essentials', price: 3.99, dateAdded: 4 },
    { name: 'Hemp Wraps', description: 'Tobacco-free, slow burn', category: 'essentials', price: 5.99, dateAdded: 3 },
    { name: 'Lighter Collection', description: 'Torch and classic styles', category: 'essentials', price: 8.99, dateAdded: 2 },
    { name: 'Ashtray', description: 'Heavy ceramic, won\'t tip', category: 'essentials', price: 14.99, dateAdded: 1 },

    // ── Glassware ──
    { name: 'Straight Tube Bong', description: 'Clean hits, easy to clean', category: 'glass', price: 89.99, dateAdded: 6 },
    { name: 'Beaker Bong', description: 'Classic shape, heavy base', category: 'glass', price: 74.99, dateAdded: 5 },
    { name: 'Dab Rig', description: 'Compact, purpose-built for concentrates', category: 'glass', price: 64.99, dateAdded: 4 },
    { name: 'Bubbler', description: 'Portable water filtration', category: 'glass', price: 44.99, dateAdded: 3 },
    { name: 'Hand Pipe', description: 'Thick glass, travel-friendly', category: 'glass', price: 19.99, dateAdded: 2 },
    { name: 'Quartz Banger', description: 'Heat-retaining, easy to clean', category: 'glass', price: 29.99, dateAdded: 1 },

    // ── Lifestyle ──
    { name: 'WFB Coffee Mug', description: 'Branded ceramic, oversized', category: 'lifestyle', price: 16.99, dateAdded: 6 },
    { name: 'Live Plant', description: 'Rotating selection of shop plants', category: 'lifestyle', price: 12.99, dateAdded: 5 },
    { name: 'Stash Box', description: 'Airtight, smell-proof storage', category: 'lifestyle', price: 34.99, dateAdded: 4 },
    { name: 'Smell-Proof Bag', description: 'Discreet, lockable, portable', category: 'lifestyle', price: 22.99, dateAdded: 3 },
    { name: 'Candle', description: 'Hand-poured, room-filling scent', category: 'lifestyle', price: 18.99, dateAdded: 2 },
    { name: 'WFB Sticker Pack', description: 'Die-cut branded stickers', category: 'lifestyle', price: 4.99, dateAdded: 1 },
]

const categoryHeroes: Record<Category, { bgImage: string; description: string }> = {
    essentials: {
        bgImage: '/images/merch-smoking-essentials.jpg',
        description: 'The everyday stuff done right. Precision grinders, custom rolling trays, papers, wraps, and all the daily tools a smoker actually needs.',
    },
    glass: {
        bgImage: '/images/merch-premium-glass.jpg',
        description: 'From daily drivers to display pieces. High-end bongs, dab rigs, bubblers, and hand pipes — plus the bangers, carb caps, and accessories to go with them.',
    },
    lifestyle: {
        bgImage: '/images/merch-lifestyle-products.jpg',
        description: 'Signature coffee mugs, live plants for your space, stash storage, and one-of-a-kind pieces you\'ll only find here. New items rotate in regularly.',
    },
}

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

    const activeHero = selectedCategory ? categoryHeroes[selectedCategory] : null
    const activeLabel = selectedCategory
        ? categories.find((c) => c.name === selectedCategory)?.label
        : null

    return (
        <div className="w-full">
            {/* Hero Header with Image */}
            <section className="relative overflow-hidden border-b border-border">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-102"
                    style={{ backgroundImage: 'url(/images/merch-hero-background.jpg)' }}
                />
                <div className="absolute inset-0 bg-linear-to-r from-dark/90 via-dark/50 to-transparent" />
                <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28 z-10">
                    <p className="text-xs tracking-[0.3em] uppercase text-accent mb-2">
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

            {/* Filter Bar */}
            <div className="sticky top-0 z-20 bg-surface/95 backdrop-blur-md border-b border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex flex-wrap items-center gap-2.5">
                            {categories.map((cat) => (
                                <button
                                    key={cat.name}
                                    onClick={() => setSelectedCategory(
                                        selectedCategory === cat.name ? null : cat.name
                                    )}
                                    className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-200 border cursor-pointer ${selectedCategory === cat.name
                                        ? 'bg-text text-bg border-text font-semibold shadow-inner'
                                        : 'bg-surface border-border text-text-muted hover:text-text hover:border-primary shadow-sm hover:shadow-md'
                                        }`}
                                >
                                    {cat.label}
                                </button>
                            ))}

                            <span className="w-px h-5 bg-border mx-1 hidden sm:inline-block" />

                            {sortOptions.map((option) => (
                                <button
                                    key={option.name}
                                    onClick={() => setSortBy(option.name)}
                                    className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide border transition-all duration-200 cursor-pointer ${sortBy === option.name
                                        ? 'bg-primary text-white border-primary font-semibold shadow-inner'
                                        : 'bg-surface border-border text-text-muted hover:text-text hover:border-primary shadow-sm hover:shadow-md'
                                        }`}
                                >
                                    {option.label}
                                </button>
                            ))}
                        </div>

                        {hasFilters && (
                            <button
                                onClick={clearAll}
                                className="text-xs font-medium tracking-wide text-accent hover:text-danger transition-colors py-2 px-1 cursor-pointer"
                            >
                                Clear all
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Category Hero — shows when a category is selected */}
            {activeHero && (
                <div className="bg-bg border-b border-border">
                    <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                            <div className="aspect-4/3 relative overflow-hidden border border-border shadow-lg rounded-[5px]">
                                <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{ backgroundImage: `url(${activeHero.bgImage})` }}
                                />
                            </div>
                            <div className="flex flex-col justify-center">
                                <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">
                                    {activeLabel}
                                </p>
                                <h2 className="text-3xl md:text-4xl font-heading text-text mb-6">
                                    {activeLabel}
                                </h2>
                                <p className="text-text-muted leading-relaxed text-lg">
                                    {activeHero.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Product Grid */}
            <div className="bg-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="border-b border-border pb-6 mb-10 flex items-center justify-between">
                        <p className="text-xs text-text-muted">
                            {sorted.length} item{sorted.length !== 1 ? 's' : ''}
                        </p>
                    </div>

                    {sorted.length > 0 ? (
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                            {sorted.map((product) => {
                                const categoryLabel = categories.find((c) => c.name === product.category)?.label

                                return (
                                    <div
                                        key={`${product.category}-${product.name}`}
                                        className="bg-surface border border-border p-4 hover:border-primary hover:shadow-lg transition-all duration-300 group cursor-pointer flex flex-col justify-between shadow-[0_4px_20px_-4px_rgba(26,46,31,0.03)] h-full"
                                    >
                                        <div>
                                            <div className="aspect-square bg-dark mb-4 flex items-center justify-center relative overflow-hidden">
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
                                                        No Image
                                                    </span>
                                                </div>
                                                <div className="absolute inset-0 bg-linear-to-t from-dark/80 via-dark/30 to-transparent pointer-events-none" />
                                            </div>

                                            <span className="text-xs tracking-[0.2em] uppercase text-accent mb-2 block">
                                                {categoryLabel}
                                            </span>

                                            <h3 className="text-base text-text font-heading mb-1 group-hover:text-primary transition-colors line-clamp-1">
                                                {product.name}
                                            </h3>

                                            <p className="text-sm text-text-muted line-clamp-2 leading-relaxed mb-4">
                                                {product.description}
                                            </p>
                                        </div>

                                        <div className="pt-4 border-t border-border flex items-center justify-end mt-auto">
                                            <p className="text-base text-text font-heading">
                                                ${product.price.toFixed(2)}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    ) : (
                        <div className="text-center py-24 border border-dashed border-border bg-surface">
                            <p className="text-text-muted text-sm mb-1">No products match your filters.</p>
                            <p className="text-xs text-text-muted">Try removing some filters above.</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Bottom CTA */}
            <div className="bg-surface border-t border-border">
                <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24 text-center">
                    <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">
                        Can&apos;t Find What You Need?
                    </p>
                    <h2 className="text-3xl md:text-4xl font-heading text-text mb-4">
                        Just Ask
                    </h2>
                    <p className="text-text-muted max-w-xl mx-auto mb-8 text-lg">
                        If we don&apos;t have it, we can usually get it. Call us or stop by and let us know what you&apos;re looking for.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="tel:+15183581023"
                            className="bg-primary text-bg px-8 py-3 text-sm tracking-[0.2em] uppercase hover:opacity-90 transition-opacity"
                        >
                            Call (518) 358-1023
                        </a>
                        <Link
                            href="/visit"
                            className="border border-border px-8 py-3 text-sm tracking-[0.2em] uppercase text-text hover:border-primary hover:text-primary transition-colors"
                        >
                            Get Directions
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    )
}