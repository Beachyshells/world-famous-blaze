'use client'

import { useState } from 'react'

// Placeholder merch data — will pull from Sanity in Phase 7
const merchProducts = [
    { name: 'WFB Sticker Pack', type: 'Accessories', brand: 'World Famous Blaze', price: 5, description: '5-piece die-cut sticker set' },
    { name: 'Logo Lighter', type: 'Accessories', brand: 'World Famous Blaze', price: 8, description: 'Refillable, branded lighter' },
    { name: 'WFB Lanyard', type: 'Accessories', brand: 'World Famous Blaze', price: 12, description: 'Clip-on, woven design' },
    { name: 'World Famous Blaze Tee', type: 'Apparel', brand: 'World Famous Blaze', price: 30, description: 'Heavyweight cotton, screen-printed' },
    { name: 'WFB Snapback', type: 'Apparel', brand: 'World Famous Blaze', price: 28, description: 'Embroidered logo, adjustable' },
    { name: 'Branded Rolling Tray', type: 'Accessories', brand: 'World Famous Blaze', price: 25, description: 'Custom design, eco-friendly materials' },
    { name: 'WFB Enamel Pin Set', type: 'Accessories', brand: 'World Famous Blaze', price: 18, description: 'Collectible 4-piece set' },
    { name: 'Wooden Stash Box', type: 'Storage', brand: 'Local Craft Co', price: 45, description: 'Hand-crafted, locally made' },
    { name: 'World Famous Blaze Hoodie', type: 'Apparel', brand: 'World Famous Blaze', price: 65, description: 'Premium embroidered hoodie' },
    { name: 'Glass Jar Set', type: 'Storage', brand: 'Local Craft Co', price: 35, description: 'Airtight, UV-resistant, 3-pack' },
    { name: 'WFB Joggers', type: 'Apparel', brand: 'World Famous Blaze', price: 55, description: 'Fleece-lined, embroidered logo' },
    { name: 'Limited Edition Jacket', type: 'Apparel', brand: 'World Famous Blaze', price: 120, description: 'Seasonal drop, numbered edition' },
    { name: 'Collector\'s Bundle', type: 'Bundles', brand: 'World Famous Blaze', price: 95, description: 'Hoodie + tray + pin set' },
    { name: 'Starter Bundle', type: 'Bundles', brand: 'World Famous Blaze', price: 40, description: 'Tee + sticker pack + lighter' },
    { name: 'Ceramic Ashtray', type: 'Accessories', brand: 'Local Craft Co', price: 22, description: 'Handmade, heat-resistant' },
    { name: 'Smell-Proof Bag', type: 'Storage', brand: 'Local Craft Co', price: 15, description: 'Discreet, carbon-lined' },
]

const types = ['Apparel', 'Accessories', 'Storage', 'Bundles']
const brands = ['World Famous Blaze', 'Local Craft Co']
const priceRanges = [
    { label: 'Under $20', min: 0, max: 19.99 },
    { label: '$20–$50', min: 20, max: 50 },
    { label: '$50+', min: 50.01, max: Infinity },
]

export default function MerchandisePage() {
    const [selectedTypes, setSelectedTypes] = useState<string[]>([])
    const [selectedBrands, setSelectedBrands] = useState<string[]>([])
    const [selectedPrices, setSelectedPrices] = useState<string[]>([])

    const toggleFilter = (
        value: string,
        selected: string[],
        setSelected: (val: string[]) => void
    ) => {
        if (selected.includes(value)) {
            setSelected(selected.filter((v) => v !== value))
        } else {
            setSelected([...selected, value])
        }
    }

    const hasFilters = selectedTypes.length > 0 || selectedBrands.length > 0 || selectedPrices.length > 0

    const clearAll = () => {
        setSelectedTypes([])
        setSelectedBrands([])
        setSelectedPrices([])
    }

    // Filter products based on all active selections
    const filtered = merchProducts.filter((product) => {
        const matchesType = selectedTypes.length === 0 || selectedTypes.includes(product.type)
        const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand)
        const matchesPrice =
            selectedPrices.length === 0 ||
            selectedPrices.some((label) => {
                const range = priceRanges.find((r) => r.label === label)
                return range && product.price >= range.min && product.price <= range.max
            })
        return matchesType && matchesBrand && matchesPrice
    })

    return (
        <div className="min-h-screen">
            {/* Page Header */}
            <div className="bg-surface border-b border-border">
                <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
                    <p className="text-xs tracking-[0.3em] uppercase text-primary mb-2">
                        Branded Gear
                    </p>
                    <h1 className="text-4xl md:text-5xl mb-4">Merchandise</h1>
                    <p className="text-text-muted text-lg max-w-2xl">
                        Show your support with World Famous Blaze gear. Apparel, accessories, and more from the shop.
                    </p>
                </div>
            </div>

            {/* Sticky Filter Bar */}
            <div className="sticky top-0 z-30 bg-bg/90 backdrop-blur-md border-b border-border">
                <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 space-y-3">
                    {/* Type Pills */}
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs tracking-[0.2em] uppercase text-text-muted mr-1">Type</span>
                        {types.map((type) => (
                            <button
                                key={type}
                                onClick={() => toggleFilter(type, selectedTypes, setSelectedTypes)}
                                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${selectedTypes.includes(type)
                                    ? 'bg-primary text-white'
                                    : 'bg-surface border border-border text-text-muted hover:text-text hover:border-primary'
                                    }`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>

                    {/* Brand Pills */}
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs tracking-[0.2em] uppercase text-text-muted mr-1">Brand</span>
                        {brands.map((brand) => (
                            <button
                                key={brand}
                                onClick={() => toggleFilter(brand, selectedBrands, setSelectedBrands)}
                                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${selectedBrands.includes(brand)
                                    ? 'bg-primary text-white'
                                    : 'bg-surface border border-border text-text-muted hover:text-text hover:border-primary'
                                    }`}
                            >
                                {brand}
                            </button>
                        ))}
                    </div>

                    {/* Price Pills */}
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs tracking-[0.2em] uppercase text-text-muted mr-1">Price</span>
                        {priceRanges.map((range) => (
                            <button
                                key={range.label}
                                onClick={() => toggleFilter(range.label, selectedPrices, setSelectedPrices)}
                                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${selectedPrices.includes(range.label)
                                    ? 'bg-primary text-white'
                                    : 'bg-surface border border-border text-text-muted hover:text-text hover:border-primary'
                                    }`}
                            >
                                {range.label}
                            </button>
                        ))}
                    </div>

                    {/* Clear All */}
                    {hasFilters && (
                        <button
                            onClick={clearAll}
                            className="text-xs text-accent hover:text-text transition-colors underline"
                        >
                            Clear all filters
                        </button>
                    )}
                </div>
            </div>

            {/* Products Grid */}
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
                <p className="text-sm text-text-muted mb-8">
                    Showing {filtered.length} item{filtered.length !== 1 ? 's' : ''}
                </p>

                {filtered.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filtered.map((item) => (
                            <div
                                key={item.name}
                                className="bg-surface border border-border p-6 hover:border-primary transition-colors group cursor-pointer"
                            >
                                {/* Placeholder image */}
                                <div className="aspect-square bg-bg border border-border/30 mb-4 flex items-center justify-center rounded">
                                    <span className="text-xs tracking-[0.3em] uppercase text-text-muted">
                                        Merch Image
                                    </span>
                                </div>

                                {/* Product Info */}
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-xs tracking-[0.2em] uppercase text-text-muted">
                                        {item.type} · {item.brand}
                                    </span>
                                </div>
                                <h3 className="text-lg text-text mb-1 group-hover:text-primary transition-colors">
                                    {item.name}
                                </h3>
                                <p className="text-sm text-text-muted mb-3">
                                    {item.description}
                                </p>
                                <p className="text-lg text-text font-heading">
                                    ${item.price.toFixed(2)}
                                </p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-text-muted">No items match your filters.</p>
                )}
            </div>
        </div>
    )
}