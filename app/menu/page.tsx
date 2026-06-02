'use client'

import { useState } from 'react'

type Category = 'flower' | 'vapes' | 'edibles' | 'prerolls' | 'concentrates'
type Strain = 'sativa' | 'indica' | 'hybrid'
type Tier = 'yellow' | 'blue' | 'pink' | 'white'

const categories = [
    { name: 'flower' as Category, label: 'Flower' },
    { name: 'vapes' as Category, label: 'Vapes' },
    { name: 'edibles' as Category, label: 'Edibles' },
    { name: 'prerolls' as Category, label: 'Pre-Rolls' },
    { name: 'concentrates' as Category, label: 'Concentrates' },
]

const strainOptions: { name: Strain; label: string }[] = [
    { name: 'sativa', label: 'Sativa' },
    { name: 'indica', label: 'Indica' },
    { name: 'hybrid', label: 'Hybrid' },
]

const tierOptions: { name: Tier; color: string }[] = [
    { name: 'yellow', color: '#ecc94b' },
    { name: 'blue', color: '#4299e1' },
    { name: 'pink', color: '#ed64a6' },
    { name: 'white', color: '#ffffff' },
]

const vapeBrands = ['Brand A', 'Brand B', 'Brand C']

// ── Placeholder data — will pull from Sanity in Phase 7 ──

interface Product {
    name: string
    description: string
    category: Category
    strain?: Strain
    tier?: Tier
    brand?: string
}

const allProducts: Product[] = [
    // ── Flower — Sativa ──
    { name: 'Sunny Haze', description: 'Energizing citrus notes', category: 'flower', strain: 'sativa', tier: 'yellow' },
    { name: 'Lemon Dream', description: 'Uplifting, bright effects', category: 'flower', strain: 'sativa', tier: 'yellow' },
    { name: 'Golden Hour', description: 'Smooth, daytime friendly', category: 'flower', strain: 'sativa', tier: 'yellow' },
    { name: 'Premium Sativa Blend', description: 'Hand-selected, lab-tested', category: 'flower', strain: 'sativa', tier: 'blue' },
    { name: 'Tropical Sunrise', description: 'Exotic flavor profile', category: 'flower', strain: 'sativa', tier: 'blue' },
    { name: 'Cloud Nine', description: 'Smooth smoke, potent effects', category: 'flower', strain: 'sativa', tier: 'blue' },
    { name: 'Craft Sativa', description: 'Small-batch, premium quality', category: 'flower', strain: 'sativa', tier: 'pink' },
    { name: 'Sunrise Reserve', description: 'High potency sativa', category: 'flower', strain: 'sativa', tier: 'pink' },
    { name: 'Signature Sativa', description: 'Our finest sativa selection', category: 'flower', strain: 'sativa', tier: 'white' },

    // ── Flower — Indica ──
    { name: 'Night Owl', description: 'Relaxing, calming effects', category: 'flower', strain: 'indica', tier: 'yellow' },
    { name: 'Purple Haze', description: 'Mellow vibes, smooth finish', category: 'flower', strain: 'indica', tier: 'yellow' },
    { name: 'Deep Sleep', description: 'Evening relaxation', category: 'flower', strain: 'indica', tier: 'yellow' },
    { name: 'Premium Indica Blend', description: 'Hand-selected, lab-tested', category: 'flower', strain: 'indica', tier: 'blue' },
    { name: 'Midnight Moon', description: 'Rich, earthy flavors', category: 'flower', strain: 'indica', tier: 'blue' },
    { name: 'Rest & Restore', description: 'Potent relaxation', category: 'flower', strain: 'indica', tier: 'blue' },
    { name: 'Craft Indica', description: 'Small-batch, premium quality', category: 'flower', strain: 'indica', tier: 'pink' },
    { name: 'Twilight Reserve', description: 'High potency indica', category: 'flower', strain: 'indica', tier: 'pink' },
    { name: 'Signature Indica', description: 'Our finest indica selection', category: 'flower', strain: 'indica', tier: 'white' },

    // ── Flower — Hybrid ──
    { name: 'Balanced Blend', description: 'Even sativa/indica mix', category: 'flower', strain: 'hybrid', tier: 'yellow' },
    { name: 'Perfect Harmony', description: 'Best of both worlds', category: 'flower', strain: 'hybrid', tier: 'yellow' },
    { name: 'Steady Vibe', description: 'Reliable, consistent effects', category: 'flower', strain: 'hybrid', tier: 'yellow' },
    { name: 'Premium Hybrid Blend', description: 'Hand-selected, lab-tested', category: 'flower', strain: 'hybrid', tier: 'blue' },
    { name: 'True Balance', description: 'Perfectly proportioned', category: 'flower', strain: 'hybrid', tier: 'blue' },
    { name: 'All-Day Hybrid', description: 'Versatile, adaptable', category: 'flower', strain: 'hybrid', tier: 'blue' },
    { name: 'Craft Hybrid', description: 'Small-batch, premium quality', category: 'flower', strain: 'hybrid', tier: 'pink' },
    { name: 'Signature Blend', description: 'High potency hybrid', category: 'flower', strain: 'hybrid', tier: 'pink' },
    { name: 'Premium Hybrid Reserve', description: 'Our finest hybrid selection', category: 'flower', strain: 'hybrid', tier: 'white' },

    // ── Vapes — Sativa ──
    { name: 'Citrus Burst Cart', description: 'Bright, energizing pull', category: 'vapes', strain: 'sativa', brand: 'Brand A' },
    { name: 'Daytime Vape', description: 'Smooth and light', category: 'vapes', strain: 'sativa', brand: 'Brand B' },
    { name: 'Uplift Cart', description: 'Clean extraction, potent', category: 'vapes', strain: 'sativa', brand: 'Brand A' },
    { name: 'Solar Flare', description: 'Full spectrum sativa', category: 'vapes', strain: 'sativa', brand: 'Brand C' },

    // ── Vapes — Indica ──
    { name: 'Nighttime Cart', description: 'Relaxing, smooth draw', category: 'vapes', strain: 'indica', brand: 'Brand B' },
    { name: 'Chill Vape', description: 'Mellow indica pull', category: 'vapes', strain: 'indica', brand: 'Brand A' },
    { name: 'Deep Relax Cart', description: 'Full body effects', category: 'vapes', strain: 'indica', brand: 'Brand C' },
    { name: 'Moonlight Vape', description: 'Rich flavor, heavy hit', category: 'vapes', strain: 'indica', brand: 'Brand B' },

    // ── Vapes — Hybrid ──
    { name: 'Balanced Cart', description: 'Best of both worlds', category: 'vapes', strain: 'hybrid', brand: 'Brand B' },
    { name: 'Anytime Vape', description: 'Versatile, smooth', category: 'vapes', strain: 'hybrid', brand: 'Brand A' },
    { name: 'Premium Hybrid Cart', description: 'Full spectrum blend', category: 'vapes', strain: 'hybrid', brand: 'Brand A' },
    { name: 'Harmony Vape', description: 'Perfectly balanced', category: 'vapes', strain: 'hybrid', brand: 'Brand C' },

    // ── Pre-Rolls ──
    { name: 'House Joint', description: 'Solid everyday smoke', category: 'prerolls', strain: 'sativa' },
    { name: 'Sativa 3-Pack', description: 'Three sativa joints', category: 'prerolls', strain: 'sativa' },
    { name: 'Indica House Joint', description: 'Relaxing evening roll', category: 'prerolls', strain: 'indica' },
    { name: 'Indica 3-Pack', description: 'Three indica joints', category: 'prerolls', strain: 'indica' },
    { name: 'Hybrid Pre-Roll', description: 'Balanced, smooth burn', category: 'prerolls', strain: 'hybrid' },
    { name: 'Infused Hybrid Joint', description: 'Kief-dusted for extra punch', category: 'prerolls', strain: 'hybrid' },

    // ── Edibles ──
    { name: 'Gummy Bears 10pk', description: 'Classic fruity flavors', category: 'edibles' },
    { name: 'Chocolate Bar', description: 'Milk chocolate, smooth dose', category: 'edibles' },
    { name: 'Premium Gummies', description: 'Craft flavors, precise dosing', category: 'edibles' },
    { name: 'Infused Honey Sticks', description: 'Natural, versatile', category: 'edibles' },
    { name: 'Artisan Chocolates', description: 'Small-batch, rich flavor', category: 'edibles' },
    { name: 'Signature Edible Collection', description: 'Our finest selection', category: 'edibles' },

    // ── Concentrates ──
    { name: 'Basic Shatter', description: 'Clean, affordable concentrate', category: 'concentrates' },
    { name: 'House Wax', description: 'Smooth, easy to work with', category: 'concentrates' },
    { name: 'Premium Badder', description: 'Terp-rich, potent', category: 'concentrates' },
    { name: 'Live Resin', description: 'Fresh frozen extraction', category: 'concentrates' },
    { name: 'Craft Rosin', description: 'Solventless, small-batch', category: 'concentrates' },
    { name: 'Signature Live Rosin', description: 'Our finest concentrate', category: 'concentrates' },
]

export default function MenuPage() {
    const [selectedCategories, setSelectedCategories] = useState<Category[]>([])
    const [selectedStrains, setSelectedStrains] = useState<Strain[]>([])
    const [selectedTiers, setSelectedTiers] = useState<Tier[]>([])
    const [selectedBrands, setSelectedBrands] = useState<string[]>([])

    const toggleFilter = <T extends string>(
        value: T,
        selected: T[],
        setSelected: (val: T[]) => void
    ) => {
        if (selected.includes(value)) {
            setSelected(selected.filter((v) => v !== value))
        } else {
            setSelected([...selected, value])
        }
    }

    const hasFilters =
        selectedCategories.length > 0 ||
        selectedStrains.length > 0 ||
        selectedTiers.length > 0 ||
        selectedBrands.length > 0

    const clearAll = () => {
        setSelectedCategories([])
        setSelectedStrains([])
        setSelectedTiers([])
        setSelectedBrands([])
    }

    // Show strain pills for Flower, Vapes, Pre-Rolls (or if nothing selected)
    const showStrainFilter =
        selectedCategories.length === 0 ||
        selectedCategories.some((c) => ['flower', 'vapes', 'prerolls'].includes(c))

    // Show color tier dots ONLY for Flower
    const showTierFilter =
        selectedCategories.length === 0 ||
        selectedCategories.includes('flower')

    // Show brand pills ONLY for Vapes
    const showBrandFilter =
        selectedCategories.includes('vapes')

    // Filter products
    const filtered = allProducts.filter((product) => {
        const matchesCategory =
            selectedCategories.length === 0 || selectedCategories.includes(product.category)
        const matchesStrain =
            selectedStrains.length === 0 ||
            !product.strain ||
            selectedStrains.includes(product.strain)
        const matchesTier =
            selectedTiers.length === 0 ||
            !product.tier ||
            selectedTiers.includes(product.tier)
        const matchesBrand =
            selectedBrands.length === 0 ||
            !product.brand ||
            selectedBrands.includes(product.brand)
        return matchesCategory && matchesStrain && matchesTier && matchesBrand
    })

    return (
        <div className="min-h-screen">
            {/* Page Header */}
            <div className="bg-surface border-b border-border">
                <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
                    <p className="text-xs tracking-[0.3em] uppercase text-primary mb-2">
                        Our Selection
                    </p>
                    <h1 className="text-4xl md:text-5xl mb-4">Menu</h1>
                    <p className="text-text-muted text-lg max-w-2xl">
                        Browse our current selection. Tap to filter, tap again to remove.
                    </p>
                </div>
            </div>

            {/* Top Sticky Bar — Category + Strain + Brand */}
            <div className="sticky top-0 z-30 bg-bg/90 backdrop-blur-md border-b border-border">
                <div className="max-w-7xl mx-auto px-6 md:px-8 py-4">
                    <div className="flex flex-wrap items-center gap-2">
                        {/* Category Pills */}
                        {categories.map((cat) => (
                            <button
                                key={cat.name}
                                onClick={() => toggleFilter(cat.name, selectedCategories, setSelectedCategories)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${selectedCategories.includes(cat.name)
                                    ? 'bg-text text-bg'
                                    : 'bg-surface border border-border text-text-muted hover:text-text hover:border-primary'
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}

                        {/* Divider before Strain */}
                        {showStrainFilter && (
                            <span className="w-px h-6 bg-border mx-1" />
                        )}

                        {/* Strain Pills */}
                        {showStrainFilter && strainOptions.map((strain) => (
                            <button
                                key={strain.name}
                                onClick={() => toggleFilter(strain.name, selectedStrains, setSelectedStrains)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${selectedStrains.includes(strain.name)
                                    ? 'bg-primary text-white'
                                    : 'bg-surface border border-border text-text-muted hover:text-text hover:border-primary'
                                    }`}
                            >
                                {strain.label}
                            </button>
                        ))}

                        {/* Divider before Brand */}
                        {showBrandFilter && (
                            <span className="w-px h-6 bg-border mx-1" />
                        )}

                        {/* Brand Pills — Vapes only */}
                        {showBrandFilter && vapeBrands.map((brand) => (
                            <button
                                key={brand}
                                onClick={() => toggleFilter(brand, selectedBrands, setSelectedBrands)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${selectedBrands.includes(brand)
                                    ? 'bg-accent text-white'
                                    : 'bg-surface border border-border text-text-muted hover:text-text hover:border-primary'
                                    }`}
                            >
                                {brand}
                            </button>
                        ))}

                        {/* Clear All */}
                        {hasFilters && (
                            <>
                                <span className="w-px h-6 bg-border mx-1" />
                                <button
                                    onClick={clearAll}
                                    className="px-4 py-2 rounded-full text-sm text-accent hover:text-text transition-colors"
                                >
                                    Clear all
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* Products Section */}
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">

                {/* Tier Color Dots — ONLY for Flower */}
                {showTierFilter && (
                    <div className="flex items-center gap-4 mb-8">
                        {tierOptions.map((tier) => (
                            <button
                                key={tier.name}
                                onClick={() => toggleFilter(tier.name, selectedTiers, setSelectedTiers)}
                                className={`w-10 h-10 rounded-full border-2 transition-all ${selectedTiers.includes(tier.name)
                                    ? 'border-text scale-110 shadow-lg'
                                    : 'border-border hover:border-primary hover:scale-105'
                                    }`}
                                style={{ backgroundColor: tier.color }}
                                aria-label={`${tier.name} tier`}
                            />
                        ))}
                        <span className="text-sm text-text-muted ml-auto">
                            {filtered.length} product{filtered.length !== 1 ? 's' : ''}
                        </span>
                    </div>
                )}

                {/* Product count when tier dots aren't showing */}
                {!showTierFilter && (
                    <p className="text-sm text-text-muted mb-8">
                        {filtered.length} product{filtered.length !== 1 ? 's' : ''}
                    </p>
                )}

                {/* Product Grid */}
                {filtered.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filtered.map((product) => {
                            const tierColor = product.tier
                                ? tierOptions.find((t) => t.name === product.tier)?.color
                                : undefined
                            const categoryLabel = categories.find((c) => c.name === product.category)?.label

                            return (
                                <div
                                    key={`${product.category}-${product.name}`}
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
                                        {tierColor && (
                                            <span
                                                className="w-3 h-3 rounded-full border border-border/50"
                                                style={{ backgroundColor: tierColor }}
                                            />
                                        )}
                                        <span className="text-xs tracking-[0.2em] uppercase text-text-muted">
                                            {categoryLabel}
                                            {product.strain ? ` · ${product.strain}` : ''}
                                        </span>
                                    </div>
                                    <h3 className="text-lg text-text mb-1 group-hover:text-primary transition-colors">
                                        {product.name}
                                    </h3>
                                    <p className="text-sm text-text-muted mb-1">
                                        {product.description}
                                    </p>
                                    {product.brand && (
                                        <p className="text-xs text-text-muted mb-2">{product.brand}</p>
                                    )}
                                    <p className="text-lg text-text font-heading">$0.00</p>
                                </div>
                            )
                        })}
                    </div>
                ) : (
                    <p className="text-text-muted">No products match your filters.</p>
                )}
            </div>
        </div>
    )
}