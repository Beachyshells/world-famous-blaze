'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import ProductCard from '../components/ProductCard'
import Link from 'next/link'

import {
    allProducts,
    categories,
    strainOptions,
    tierOptions,
    vapeBrands,
    type Category,
    type Strain,
    type Tier,
} from './data'
import DailyDealBanner from '../components/DailyDealBanner'

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
                <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-14 md:py-18 z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-2">
                                Curated Selection
                            </p>
                            <h1 className="text-5xl md:text-6xl font-heading text-white mb-4">Menu</h1>
                            <p className="text-white/60 text-lg max-w-2xl">
                                Browse our current selection. Tap to filter, tap again to remove.
                            </p>
                        </div>
                        <DailyDealBanner />
                    </div>
                </div>
            </div>

            {/* Filter Bar */}
            <div className="sticky top-0 z-20 bg-surface/95 backdrop-blur-md border-b border-border">
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
                                                    className="w-3 h-3 rounded-full border border-text/30"
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
                                    price: product.price,
                                }

                                return (
                                    <ProductCard
                                        key={`${product.category}-${product.name}`}
                                        product={cardData}
                                        href={`/menu/${product.slug}`}
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