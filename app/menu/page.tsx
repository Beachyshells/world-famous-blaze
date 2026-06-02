'use client'

import { useState } from 'react'

// Placeholder flower data — will pull from Sanity in Phase 7
const flowerData = {
    sativa: {
        yellow: [
            { name: 'Sunny Haze', description: 'Energizing citrus notes' },
            { name: 'Lemon Dream', description: 'Uplifting, bright effects' },
            { name: 'Golden Hour', description: 'Smooth, daytime friendly' },
        ],
        blue: [
            { name: 'Premium Sativa Blend', description: 'Hand-selected, lab-tested' },
            { name: 'Tropical Sunrise', description: 'Exotic flavor profile' },
            { name: 'Cloud Nine', description: 'Smooth smoke, potent effects' },
        ],
        pink: [
            { name: 'Craft Sativa', description: 'Small-batch, premium quality' },
            { name: 'Sunrise Reserve', description: 'High potency sativa' },
        ],
        white: [
            { name: 'Signature Sativa', description: 'Our finest sativa selection' },
        ],
    },
    indica: {
        yellow: [
            { name: 'Night Owl', description: 'Relaxing, calming effects' },
            { name: 'Purple Haze', description: 'Mellow vibes, smooth finish' },
            { name: 'Deep Sleep', description: 'Evening relaxation' },
        ],
        blue: [
            { name: 'Premium Indica Blend', description: 'Hand-selected, lab-tested' },
            { name: 'Midnight Moon', description: 'Rich, earthy flavors' },
            { name: 'Rest & Restore', description: 'Potent relaxation' },
        ],
        pink: [
            { name: 'Craft Indica', description: 'Small-batch, premium quality' },
            { name: 'Twilight Reserve', description: 'High potency indica' },
        ],
        white: [
            { name: 'Signature Indica', description: 'Our finest indica selection' },
        ],
    },
    hybrid: {
        yellow: [
            { name: 'Balanced Blend', description: 'Even sativa/indica mix' },
            { name: 'Perfect Harmony', description: 'Best of both worlds' },
            { name: 'Steady Vibe', description: 'Reliable, consistent effects' },
        ],
        blue: [
            { name: 'Premium Hybrid Blend', description: 'Hand-selected, lab-tested' },
            { name: 'True Balance', description: 'Perfectly proportioned' },
            { name: 'All-Day Hybrid', description: 'Versatile, adaptable' },
        ],
        pink: [
            { name: 'Craft Hybrid', description: 'Small-batch, premium quality' },
            { name: 'Signature Blend', description: 'High potency hybrid' },
        ],
        white: [
            { name: 'Premium Hybrid Reserve', description: 'Our finest hybrid selection' },
        ],
    },
}

const strains = ['sativa', 'indica', 'hybrid'] as const
const tiers = [
    { name: 'yellow', label: 'Yellow', price: '$0.00', color: '#ecc94b' },
    { name: 'blue', label: 'Blue', price: '$0.00', color: '#4299e1' },
    { name: 'pink', label: 'Pink', price: '$0.00', color: '#ed64a6' },
    { name: 'white', label: 'White', price: '$0.00', color: '#ffffff' },
]

export default function MenuPage() {
    const [selectedStrain, setSelectedStrain] = useState<'sativa' | 'indica' | 'hybrid'>('sativa')
    const [selectedTier, setSelectedTier] = useState<'yellow' | 'blue' | 'pink' | 'white'>('yellow')

    const products = flowerData[selectedStrain][selectedTier]
    const activeTier = tiers.find((t) => t.name === selectedTier)

    return (
        <div className="min-h-screen">
            {/* Page Header */}
            <div className="bg-surface border-b border-border">
                <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
                    <p className="text-xs tracking-[0.3em] uppercase text-primary mb-2">
                        Our Selection
                    </p>
                    <h1 className="text-4xl md:text-5xl mb-4">Flower</h1>
                    <p className="text-text-muted text-lg max-w-2xl">
                        Browse our current selection. Pick your vibe, pick your tier.
                    </p>
                </div>
            </div>

            {/* Sticky Filter Bar */}
            <div className="sticky top-0 z-30 bg-bg/90 backdrop-blur-md border-b border-border">
                <div className="max-w-7xl mx-auto px-6 md:px-8 py-4">
                    {/* Strain Pills */}
                    <div className="flex flex-wrap gap-2 mb-3">
                        {strains.map((strain) => (
                            <button
                                key={strain}
                                onClick={() => setSelectedStrain(strain)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${selectedStrain === strain
                                    ? 'bg-primary text-white'
                                    : 'bg-surface border border-border text-text-muted hover:text-text hover:border-primary'
                                    }`}
                            >
                                {strain.charAt(0).toUpperCase() + strain.slice(1)}
                            </button>
                        ))}
                    </div>

                    {/* Tier Pills */}
                    <div className="flex flex-wrap gap-2">
                        {tiers.map((tier) => (
                            <button
                                key={tier.name}
                                onClick={() => setSelectedTier(tier.name as 'yellow' | 'blue' | 'pink' | 'white')}
                                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all inline-flex items-center gap-2 ${selectedTier === tier.name
                                    ? 'bg-surface border-2 border-text text-text'
                                    : 'bg-surface border border-border text-text-muted hover:text-text hover:border-primary'
                                    }`}
                            >
                                <span
                                    className="w-3 h-3 rounded-full border border-border/50"
                                    style={{ backgroundColor: tier.color }}
                                />
                                {tier.label} · {tier.price}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Products Grid */}
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
                <p className="text-sm text-text-muted mb-8">
                    Showing {products.length} {selectedStrain} flower{products.length !== 1 ? 's' : ''} · {activeTier?.label} Tier
                </p>

                {products.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.map((product) => (
                            <div
                                key={product.name}
                                className="bg-surface border border-border p-6 hover:border-primary transition-colors group cursor-pointer"
                            >
                                {/* Placeholder image */}
                                <div className="aspect-square bg-bg border border-border/30 mb-4 flex items-center justify-center rounded">
                                    <span className="text-xs tracking-[0.3em] uppercase text-text-muted">
                                        Product Image
                                    </span>
                                </div>

                                {/* Product Info */}
                                <div className="flex items-center gap-2 mb-2">
                                    <span
                                        className="w-3 h-3 rounded-full border border-border/50"
                                        style={{ backgroundColor: activeTier?.color }}
                                    />
                                    <span className="text-xs tracking-[0.2em] uppercase text-text-muted">
                                        {activeTier?.label} Tier · Flower
                                    </span>
                                </div>
                                <h3 className="text-lg text-text mb-1 group-hover:text-primary transition-colors">
                                    {product.name}
                                </h3>
                                <p className="text-sm text-text-muted mb-3">
                                    {product.description}
                                </p>
                                <p className="text-lg text-text font-heading">
                                    $0.00
                                </p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-text-muted">No products available in this category.</p>
                )}
            </div>
        </div>
    )
}