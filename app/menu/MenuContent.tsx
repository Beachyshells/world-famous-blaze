'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import ProductCard from '../components/ProductCard'

type Category = 'flower' | 'vapes' | 'edibles' | 'prerolls' | 'concentrates'
type Strain = 'sativa' | 'indica' | 'hybrid'
type Tier = 'yellow' | 'green' | 'blue' | 'pink' | 'white'


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

const tierOptions: { name: Tier; color: string; label: string }[] = [
    { name: 'yellow', color: '#ecc94b', label: 'Yellow' },
    { name: 'green', color: '#48bb78', label: 'Green' },
    { name: 'blue', color: '#4299e1', label: 'Blue' },
    { name: 'pink', color: '#ed64a6', label: 'Pink' },
    { name: 'white', color: '#ffffff', label: 'White' },
]

const vapeBrands = ['Brand A', 'Brand B', 'Brand C']

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
    { name: 'Green Light', description: 'Easy-going, everyday sativa', category: 'flower', strain: 'sativa', tier: 'green' },
    { name: 'Budget Buzz', description: 'Solid quality, great price', category: 'flower', strain: 'sativa', tier: 'green' },
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
    { name: 'Mellow Night', description: 'Gentle wind-down, easy price', category: 'flower', strain: 'indica', tier: 'green' },
    { name: 'Couch Potato', description: 'Heavy relax, light wallet', category: 'flower', strain: 'indica', tier: 'green' },
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
    { name: 'Everyday Hybrid', description: 'Balanced and budget-friendly', category: 'flower', strain: 'hybrid', tier: 'green' },
    { name: 'Chill Mix', description: 'Smooth blend, easy on the pocket', category: 'flower', strain: 'hybrid', tier: 'green' },
    { name: 'Premium Hybrid Blend', description: 'Hand-selected, lab-tested', category: 'flower', strain: 'hybrid', tier: 'blue' },
    { name: 'True Balance', description: 'Perfectly proportioned', category: 'flower', strain: 'hybrid', tier: 'blue' },
    { name: 'All-Day Hybrid', description: 'Versatile, adaptable', category: 'flower', strain: 'hybrid', tier: 'blue' },
    { name: 'Craft Hybrid', description: 'Small-batch, premium quality', category: 'flower', strain: 'hybrid', tier: 'pink' },
    { name: 'Signature Blend', description: 'High potency hybrid', category: 'flower', strain: 'hybrid', tier: 'pink' },
    { name: 'Premium Hybrid Reserve', description: 'Our finest hybrid selection', category: 'flower', strain: 'hybrid', tier: 'white' },

    // ── Vapes ──
    { name: 'Citrus Burst Cart', description: 'Bright, energizing pull', category: 'vapes', strain: 'sativa', brand: 'Brand A' },
    { name: 'Daytime Vape', description: 'Smooth and light', category: 'vapes', strain: 'sativa', brand: 'Brand B' },
    { name: 'Uplift Cart', description: 'Clean extraction, potent', category: 'vapes', strain: 'sativa', brand: 'Brand A' },
    { name: 'Solar Flare', description: 'Full spectrum sativa', category: 'vapes', strain: 'sativa', brand: 'Brand C' },
    { name: 'Nighttime Cart', description: 'Relaxing, smooth draw', category: 'vapes', strain: 'indica', brand: 'Brand B' },
    { name: 'Chill Vape', description: 'Mellow indica pull', category: 'vapes', strain: 'indica', brand: 'Brand A' },
    { name: 'Deep Relax Cart', description: 'Full body effects', category: 'vapes', strain: 'indica', brand: 'Brand C' },
    { name: 'Moonlight Vape', description: 'Rich flavor, heavy hit', category: 'vapes', strain: 'indica', brand: 'Brand B' },
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

export default function MenuContent() {
    const [selectedCategories, setSelectedCategories] = useState<Category[]>([])
    const [selectedStrains, setSelectedStrains] = useState<Strain[]>([])
    const [selectedTiers, setSelectedTiers] = useState<Tier[]>([])
    const [selectedBrands, setSelectedBrands] = useState<string[]>([])
    const [brandDropdownOpen, setBrandDropdownOpen] = useState(false)

    const searchParams = useSearchParams()

    useEffect(() => {
        const categoryParam = searchParams.get('category')
        if (categoryParam && categories.some((c) => c.name === categoryParam)) {
            setSelectedCategories([categoryParam as Category])
        }
    }, [searchParams])

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

    const showStrainFilter =
        selectedCategories.length === 0 ||
        selectedCategories.some((c) => ['flower', 'vapes', 'prerolls'].includes(c))

    const showTierFilter =
        selectedCategories.length === 0 ||
        selectedCategories.includes('flower')

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
        <div className="w-full">
            {/* Hero Header with Image */}
            <div className="relative overflow-hidden border-b border-border">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url(/images/cannabis-menu-hero-background.jpg)' }}
                />
                <div className="absolute inset-0 bg-linear-to-r from-dark/90 via-dark/50 to-transparent" />
                <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28 z-10">
                    <p className="text-xs tracking-[0.3em] uppercase text-accent mb-2">
                        Curated Selection
                    </p>
                    <h1 className="text-5xl md:text-6xl font-heading text-white mb-4">Menu</h1>
                    <p className="text-white/60 text-lg max-w-2xl">
                        Browse our current selection. Tap to filter, tap again to remove.
                    </p>
                </div>
            </div>

            {/* Filter Bar */}
            <div className="sticky top-18.5z-20 bg-surface/95 backdrop-blur-md border-b border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex flex-wrap items-center gap-2.5">
                            {/* Category Pills */}
                            {categories.map((cat) => (
                                <div key={cat.name} className="relative">
                                    <button
                                        onClick={() => {
                                            if (cat.name === 'vapes') {
                                                if (selectedCategories.includes('vapes')) {
                                                    toggleFilter(cat.name, selectedCategories, setSelectedCategories)
                                                    setSelectedBrands([])
                                                    setBrandDropdownOpen(false)
                                                } else {
                                                    toggleFilter(cat.name, selectedCategories, setSelectedCategories)
                                                    setBrandDropdownOpen(true)
                                                }
                                            } else {
                                                toggleFilter(cat.name, selectedCategories, setSelectedCategories)
                                            }
                                        }}
                                        className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-200 border cursor-pointer ${selectedCategories.includes(cat.name)
                                            ? 'bg-text text-bg border-text font-semibold shadow-inner'
                                            : 'bg-surface border-border text-text-muted hover:text-text hover:border-primary shadow-sm hover:shadow-md'
                                            }`}
                                    >
                                        {cat.label}
                                        {cat.name === 'vapes' && selectedCategories.includes('vapes') && (
                                            <span
                                                className="ml-1.5 inline-block cursor-pointer"
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    setBrandDropdownOpen(!brandDropdownOpen)
                                                }}
                                            >
                                                ▾
                                            </span>
                                        )}
                                    </button>

                                    {/* Brand dropdown */}
                                    {cat.name === 'vapes' && selectedCategories.includes('vapes') && brandDropdownOpen && (
                                        <div className="absolute top-full left-0 mt-2 bg-surface border border-border shadow-lg z-30 min-w-40 rounded-[5px]">
                                            <button
                                                onClick={() => {
                                                    setSelectedBrands([])
                                                    setBrandDropdownOpen(false)
                                                }}
                                                className={`block w-full text-left px-4 py-2.5 text-xs tracking-wide transition-colors ${selectedBrands.length === 0
                                                    ? 'text-accent font-semibold bg-accent/5'
                                                    : 'text-text-muted hover:text-text hover:bg-bg'
                                                    }`}
                                            >
                                                All Brands
                                            </button>
                                            {vapeBrands.map((brand) => (
                                                <button
                                                    key={brand}
                                                    onClick={() => {
                                                        setSelectedBrands([brand])
                                                        setBrandDropdownOpen(false)
                                                    }}
                                                    className={`block w-full text-left px-4 py-2.5 text-xs tracking-wide transition-colors ${selectedBrands.includes(brand)
                                                        ? 'text-accent font-semibold bg-accent/5'
                                                        : 'text-text-muted hover:text-text hover:bg-bg'
                                                        }`}
                                                >
                                                    {brand}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}

                            {showStrainFilter && <span className="w-px h-5 bg-border mx-1 hidden sm:inline-block" />}

                            {/* Strain Pills */}
                            {showStrainFilter && strainOptions.map((strain) => {
                                const isActive = selectedStrains.includes(strain.name)
                                return (
                                    <button
                                        key={strain.name}
                                        onClick={() => toggleFilter(strain.name, selectedStrains, setSelectedStrains)}
                                        className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide border transition-all duration-200 cursor-pointer ${isActive
                                            ? 'bg-primary text-white border-primary font-semibold shadow-inner'
                                            : 'bg-surface border-border text-text-muted hover:text-text hover:border-primary shadow-sm hover:shadow-md'
                                            }`}
                                    >
                                        {strain.label}
                                    </button>
                                )
                            })}
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

            {/* Tier + Product Grid */}
            <div className="bg-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Tier Row */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-6 mb-10">
                        {showTierFilter ? (
                            <div className="flex flex-wrap items-center gap-3">
                                <span className="text-xs tracking-[0.2em] uppercase text-text-muted mr-1">
                                    Tier:
                                </span>
                                <div className="flex flex-wrap items-center gap-2">
                                    {tierOptions.map((tier) => {
                                        const isActive = selectedTiers.includes(tier.name)
                                        return (
                                            <button
                                                key={tier.name}
                                                onClick={() => toggleFilter(tier.name, selectedTiers, setSelectedTiers)}
                                                className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs transition-all cursor-pointer ${isActive
                                                    ? 'border-text bg-surface text-text font-medium shadow-inner'
                                                    : 'border-border bg-surface text-text-muted hover:border-primary shadow-sm hover:shadow-md'
                                                    }`}
                                                aria-label={`${tier.name} tier`}
                                            >
                                                <span
                                                    className="w-3 h-3 rounded-full border border-border/50"
                                                    style={{ backgroundColor: tier.color }}
                                                />
                                                <span className="text-xs tracking-wide">{tier.label}</span>
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>
                        ) : (
                            <div />
                        )}

                        <p className="text-xs text-text-muted">
                            {filtered.length} product{filtered.length !== 1 ? 's' : ''}
                        </p>
                    </div>

                    {/* Product Grid */}
                    {filtered.length > 0 ? (
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                            {filtered.map((product) => {
                                const currentTier = product.tier
                                    ? tierOptions.find((t) => t.name === product.tier)
                                    : undefined
                                const categoryLabel = categories.find((c) => c.name === product.category)?.label

                                const cardData = {
                                    name: product.name,
                                    description: product.description,
                                    category: categoryLabel,
                                    strain: product.strain,
                                    brand: product.brand,
                                    tierColor: currentTier?.color,
                                    tierLabel: currentTier?.label,
                                    price: 0.00
                                }

                                return (
                                    <ProductCard
                                        key={`${product.category}-${product.name}`}
                                        product={cardData}
                                    />
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
        </div>
    )
}