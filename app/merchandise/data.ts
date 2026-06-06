// app/merchandise/data.ts

export type Category = 'essentials' | 'glass' | 'lifestyle'
export type SortOption = 'newest' | 'price-low' | 'price-high'

export const categories = [
    { name: 'essentials' as Category, label: 'Essentials' },
    { name: 'glass' as Category, label: 'Glassware' },
    { name: 'lifestyle' as Category, label: 'Lifestyle' },
]

export const sortOptions = [
    { name: 'newest' as SortOption, label: 'Newest' },
    { name: 'price-low' as SortOption, label: 'Price: Low → High' },
    { name: 'price-high' as SortOption, label: 'Price: High → Low' },
]

export interface MerchProduct {
    name: string
    slug: string
    description: string
    category: Category
    price: number
    dateAdded: number
    image?: string
}

export const allProducts: MerchProduct[] = [
    // ── Essentials ──
    { name: 'Premium Grinder', slug: 'premium-grinder', description: 'Heavy-duty, 4-piece aluminum', category: 'essentials', price: 24.99, dateAdded: 6 },
    { name: 'Rolling Tray', slug: 'rolling-tray', description: 'Custom WFB branded tray', category: 'essentials', price: 18.99, dateAdded: 5 },
    { name: 'Raw Papers', slug: 'raw-papers', description: 'Classic unrefined rolling papers', category: 'essentials', price: 3.99, dateAdded: 4 },
    { name: 'Hemp Wraps', slug: 'hemp-wraps', description: 'Tobacco-free, slow burn', category: 'essentials', price: 5.99, dateAdded: 3 },
    { name: 'Lighter Collection', slug: 'lighter-collection', description: 'Torch and classic styles', category: 'essentials', price: 8.99, dateAdded: 2 },
    { name: 'Ashtray', slug: 'ashtray', description: 'Heavy ceramic, won\'t tip', category: 'essentials', price: 14.99, dateAdded: 1 },

    // ── Glassware ──
    { name: 'Straight Tube Bong', slug: 'straight-tube-bong', description: 'Clean hits, easy to clean', category: 'glass', price: 89.99, dateAdded: 6 },
    { name: 'Beaker Bong', slug: 'beaker-bong', description: 'Classic shape, heavy base', category: 'glass', price: 74.99, dateAdded: 5 },
    { name: 'Dab Rig', slug: 'dab-rig', description: 'Compact, purpose-built for concentrates', category: 'glass', price: 64.99, dateAdded: 4 },
    { name: 'Bubbler', slug: 'bubbler', description: 'Portable water filtration', category: 'glass', price: 44.99, dateAdded: 3 },
    { name: 'Hand Pipe', slug: 'hand-pipe', description: 'Thick glass, travel-friendly', category: 'glass', price: 19.99, dateAdded: 2 },
    { name: 'Quartz Banger', slug: 'quartz-banger', description: 'Heat-retaining, easy to clean', category: 'glass', price: 29.99, dateAdded: 1 },

    // ── Lifestyle ──
    { name: 'WFB Coffee Mug', slug: 'wfb-coffee-mug', description: 'Branded ceramic, oversized', category: 'lifestyle', price: 16.99, dateAdded: 6 },
    { name: 'Live Plant', slug: 'live-plant', description: 'Rotating selection of shop plants', category: 'lifestyle', price: 12.99, dateAdded: 5 },
    { name: 'Stash Box', slug: 'stash-box', description: 'Airtight, smell-proof storage', category: 'lifestyle', price: 34.99, dateAdded: 4 },
    { name: 'Smell-Proof Bag', slug: 'smell-proof-bag', description: 'Discreet, lockable, portable', category: 'lifestyle', price: 22.99, dateAdded: 3 },
    { name: 'Candle', slug: 'candle', description: 'Hand-poured, room-filling scent', category: 'lifestyle', price: 18.99, dateAdded: 2 },
    { name: 'WFB Sticker Pack', slug: 'wfb-sticker-pack', description: 'Die-cut branded stickers', category: 'lifestyle', price: 4.99, dateAdded: 1 },
]