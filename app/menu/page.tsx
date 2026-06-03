'use client'


import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import ProductCard from '../components/ProductCard'

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

const strainOptions: { name: Strain; label: string; activeClass: string }[] = [
    { name: 'sativa', label: 'Sativa', activeClass: 'bg-success/10 border-success text-success' },
    { name: 'indica', label: 'Indica', activeClass: 'bg-primary/10 border-primary text-primary' },
    { name: 'hybrid', label: 'Hybrid', activeClass: 'bg-accent/10 border-accent text-accent' },
]

const tierOptions: { name: Tier; color: string; label: string }[] = [
    { name: 'yellow', color: '#ecc94b', label: 'Select Growth' },
    { name: 'blue', color: '#4299e1', label: 'Boutique Batch' },
    { name: 'pink', color: '#ed64a6', label: 'Reserve Tier' },
    { name: 'white', color: '#ffffff', label: 'Private Estate' },
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

function MenuContent() {
    const [selectedCategories, setSelectedCategories] = useState<Category[]>([])
    const [selectedStrains, setSelectedStrains] = useState<Strain[]>([])
    const [selectedTiers, setSelectedTiers] = useState<Tier[]>([])
    const [selectedBrands, setSelectedBrands] = useState<string[]>([])


    const searchParams = useSearchParams()

    // Pre-select category if coming from homepage preview
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

    const showBrandFilter =
        selectedCategories.includes('vapes')

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
            <div className="bg-surface border-b border-border">
                <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
                    <p className="text-xs tracking-[0.3em] uppercase text-primary mb-2">
                        Curated Selection
                    </p>
                    <h1 className="text-4xl md:text-5xl mb-4">Menu</h1>
                    <p className="text-text-muted text-lg max-w-2xl">
                        Welcome to our daily daily counter. Explore our small-batch flower, slow-cured pre-rolls, and locally crafted provisions, all mindfully harvested for your ritual.
                    </p>
                </div>
            </div>

            {/* Filter Strip Container */}
            <div className="sticky top-(--header-height,0px) z-20 bg-bg/95 backdrop-blur-md border-b border-border/80 shadow-xs">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-wrap items-center justify-between gap-4">

                        {/* Smooth Organic Control Pills */}
                        <div className="flex flex-wrap items-center gap-2.5">
                            {/* Categories */}
                            {categories.map((cat) => (
                                <button
                                    key={cat.name}
                                    onClick={() => toggleFilter(cat.name, selectedCategories, setSelectedCategories)}
                                    className={`px-4 py-2 rounded-xl text-xs font-medium font-body tracking-wide transition-all duration-200 border cursor-pointer ${selectedCategories.includes(cat.name)
                                        ? 'bg-text text-surface border-text font-semibold'
                                        : 'bg-surface border-border text-text-muted hover:text-text hover:border-primary/60'
                                        }`}
                                >
                                    {cat.label}
                                </button>
                            ))}

                            {showStrainFilter && <span className="w-px h-5 bg-border/80 mx-1 hidden sm:inline-block" />}

                            {/* Strains */}
                            {showStrainFilter && strainOptions.map((strain) => {
                                const isActive = selectedStrains.includes(strain.name)
                                return (
                                    <button
                                        key={strain.name}
                                        onClick={() => toggleFilter(strain.name, selectedStrains, setSelectedStrains)}
                                        className={`px-4 py-2 rounded-xl text-xs font-medium font-body tracking-wide border transition-all duration-200 cursor-pointer ${isActive
                                            ? strain.activeClass + ' font-semibold'
                                            : 'bg-surface border-border text-text-muted hover:text-text hover:border-primary/60'
                                            }`}
                                    >
                                        {strain.label}
                                    </button>
                                )
                            })}

                            {showBrandFilter && <span className="w-px h-5 bg-border/80 mx-1 hidden sm:inline-block" />}

                            {/* Brands */}
                            {showBrandFilter && vapeBrands.map((brand) => (
                                <button
                                    key={brand}
                                    onClick={() => toggleFilter(brand, selectedBrands, setSelectedBrands)}
                                    className={`px-4 py-2 rounded-xl text-xs font-medium font-body tracking-wide border transition-all duration-200 cursor-pointer ${selectedBrands.includes(brand)
                                        ? 'bg-accent/10 border-accent text-accent font-semibold'
                                        : 'bg-surface border-border text-text-muted hover:text-text hover:border-primary/60'
                                        }`}
                                >
                                    {brand}
                                </button>
                            ))}
                        </div>

                        {/* Text Filter Reset Trigger */}
                        {hasFilters && (
                            <button
                                onClick={clearAll}
                                className="text-xs font-medium font-body tracking-wide text-accent hover:text-danger transition-colors py-2 px-1 cursor-pointer"
                            >
                                Clear Shelves
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Catalog Grid Area */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* Meta Sorting Details Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/60 pb-6 mb-10">
                    {showTierFilter ? (
                        <div className="flex flex-wrap items-center gap-3">
                            <span className="text-xs font-medium font-heading italic text-text-muted mr-1">
                                Filter by Curation Grade:
                            </span>
                            <div className="flex flex-wrap items-center gap-2">
                                {tierOptions.map((tier) => {
                                    const isActive = selectedTiers.includes(tier.name)
                                    return (
                                        <button
                                            key={tier.name}
                                            onClick={() => toggleFilter(tier.name, selectedTiers, setSelectedTiers)}
                                            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs transition-all cursor-pointer ${isActive
                                                ? 'border-text bg-surface text-text font-medium'
                                                : 'border-border bg-surface/50 text-text-muted hover:border-primary/60'
                                                }`}
                                            aria-label={`${tier.name} tier`}
                                        >
                                            <span
                                                className="w-2.5 h-2.5 rounded-full ring-2 ring-border/20"
                                                style={{ backgroundColor: tier.color }}
                                            />
                                            <span className="font-body text-[11px] tracking-wide">{tier.label}</span>
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                    ) : (
                        <div />
                    )}

                    <p className="text-xs font-body italic text-text-muted/80">
                        {filtered.length} small-batch items cataloged
                    </p>
                </div>

                {/* Main Product Shelf Container */}
                {filtered.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filtered.map((product) => {
                            const currentTier = product.tier
                                ? tierOptions.find((t) => t.name === product.tier)
                                : undefined
                            const categoryLabel = categories.find((c) => c.name === product.category)?.label

                            // Adapt data structure to feed into global ProductCard layout requirements
                            const cardData = {
                                name: product.name,
                                description: product.description,
                                category: categoryLabel,
                                strain: product.strain,
                                brand: product.brand,
                                tierColor: currentTier?.color,
                                price: 0.00 // Placeholder price until hooked into Sanity
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
                    <div className="text-center py-24 border border-dashed border-border/80 rounded-2xl bg-surface/30">
                        <p className="text-text-muted text-sm font-heading italic mb-1">Our shelves are empty here.</p>
                        <p className="text-xs text-text-muted/60 font-body">Try refining your selection options above.</p>
                    </div>
                )}
            </div>
        </div>
    )

}
export default function MenuPage() {
    return (
        <Suspense>
            <MenuContent />
        </Suspense>
    )
}