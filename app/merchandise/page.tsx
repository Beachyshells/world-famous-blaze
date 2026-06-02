'use client'

import { useState, useRef, useEffect } from 'react'
import ProductCard from '../components/ProductCard'

// Placeholder merch data
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
const brands = ['World Famous Blaze', 'Local Craft Co', 'High End Goods Co', 'Artisan Glassworks']
const priceRanges = [
    { label: 'Under $20', min: 0, max: 19.99 },
    { label: '$20–$50', min: 20, max: 50 },
    { label: '$50+', min: 50.01, max: Infinity },
]

export default function MerchandisePage() {
    const [selectedTypes, setSelectedTypes] = useState<string[]>([])
    const [selectedBrands, setSelectedBrands] = useState<string[]>([])
    const [selectedPrices, setSelectedPrices] = useState<string[]>([])
    const [isBrandDropdownOpen, setIsBrandDropdownOpen] = useState(false)

    const dropdownRef = useRef<HTMLDivElement>(null)

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsBrandDropdownOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

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
        <div className="w-full">
            {/* Page Header */}
            <div className="bg-surface border-b border-border">
                <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
                    <p className="text-xs tracking-[0.3em] uppercase text-primary font-body font-medium mb-3">
                        Branded Gear
                    </p>
                    <h1 className="text-4xl md:text-5xl font-heading font-medium tracking-wide text-text mb-4">
                        Merchandise
                    </h1>
                    <p className="text-text-muted text-lg max-w-2xl font-body font-light leading-relaxed">
                        Show your support with World Famous Blaze gear. Apparel, accessories, and more from the shop.
                    </p>
                </div>
            </div>

            {/* Apothecary-style Sticky Filter Strip */}
            <div className="sticky top-(--header-height,0px) z-20 bg-bg/95 backdrop-blur-md border-b border-border/80 shadow-xs">
                <div className="max-w-7xl mx-auto px-6 md:px-8 py-4">
                    <div className="flex flex-wrap items-center justify-between gap-4">

                        {/* Interactive Selection Groups */}
                        <div className="flex flex-wrap items-center gap-2.5">
                            {/* Product Types */}
                            {types.map((type) => (
                                <button
                                    key={type}
                                    onClick={() => toggleFilter(type, selectedTypes, setSelectedTypes)}
                                    className={`px-4 py-2 rounded-xl text-xs font-medium font-body tracking-wide transition-all duration-200 border cursor-pointer ${selectedTypes.includes(type)
                                        ? 'bg-text text-surface border-text font-semibold'
                                        : 'bg-surface border-border text-text-muted hover:text-text hover:border-primary/60'
                                        }`}
                                >
                                    {type}
                                </button>
                            ))}

                            <span className="w-px h-5 bg-border/80 mx-1 hidden sm:inline-block" />

                            {/* Scalable Brand Dropdown Selection Field */}
                            <div className="relative" ref={dropdownRef}>
                                <button
                                    onClick={() => setIsBrandDropdownOpen(!isBrandDropdownOpen)}
                                    className={`px-4 py-2 rounded-xl text-xs font-medium font-body tracking-wide transition-all duration-200 border cursor-pointer flex items-center gap-2 ${selectedBrands.length > 0
                                        ? 'bg-accent/10 border-accent text-accent font-semibold'
                                        : 'bg-surface border-border text-text-muted hover:text-text hover:border-primary/60'
                                        }`}
                                >
                                    <span>Brand {selectedBrands.length > 0 && `(${selectedBrands.length})`}</span>

                                    {/* Dropdown Arrow Icon */}
                                    <svg
                                        className={`w-3 h-3 text-text-muted/80 transition-transform duration-200 ${isBrandDropdownOpen ? 'rotate-180' : ''}`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {/* Floating Dropdown Menu Panel */}
                                {isBrandDropdownOpen && (
                                    <div className="absolute left-0 mt-2 w-64 bg-surface border border-border rounded-xl shadow-xl z-50 p-2 max-h-64 overflow-y-auto animate-in fade-in slide-in-from-top-1 duration-200">
                                        {brands.map((brand) => {
                                            const isChecked = selectedBrands.includes(brand)
                                            return (
                                                <button
                                                    key={brand}
                                                    onClick={() => toggleFilter(brand, selectedBrands, setSelectedBrands)}
                                                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-body transition-colors cursor-pointer flex items-center justify-between ${isChecked
                                                        ? 'bg-bg text-primary font-medium'
                                                        : 'text-text-muted hover:bg-bg/50 hover:text-text'
                                                        }`}
                                                >
                                                    <span>{brand}</span>
                                                    {isChecked && (
                                                        <svg className="w-3.5 h-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    )}
                                                </button>
                                            )
                                        })}
                                    </div>
                                )}
                            </div>

                            <span className="w-px h-5 bg-border/80 mx-1 hidden sm:inline-block" />

                            {/* Price Threshold Ranges */}
                            {priceRanges.map((range) => (
                                <button
                                    key={range.label}
                                    onClick={() => toggleFilter(range.label, selectedPrices, setSelectedPrices)}
                                    className={`px-4 py-2 rounded-xl text-xs font-medium font-body tracking-wide border transition-all duration-200 cursor-pointer ${selectedPrices.includes(range.label)
                                        ? 'bg-text text-surface border-text font-semibold'
                                        : 'bg-surface border-border text-text-muted hover:text-text hover:border-primary/60'
                                        }`}
                                >
                                    {range.label}
                                </button>
                            ))}
                        </div>

                        {/* Reset Toggle Option */}
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

            {/* Merchandise Catalog Display Shelf */}
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
                <div className="border-b border-border/60 pb-6 mb-10">
                    <p className="text-xs font-body italic text-text-muted/80">
                        {filtered.length} small-batch items cataloged
                    </p>
                </div>

                {filtered.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filtered.map((item) => {
                            // Structuring object schema variables safely for global ProductCard delivery
                            const formattedProduct = {
                                name: item.name,
                                description: item.description,
                                category: item.type,
                                brand: item.brand,
                                price: item.price
                            }

                            return (
                                <ProductCard
                                    key={item.name}
                                    product={formattedProduct}
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