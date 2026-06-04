export type Category = 'flower' | 'vapes' | 'edibles' | 'prerolls' | 'concentrates'
export type Strain = 'sativa' | 'indica' | 'hybrid'
export type Tier = 'yellow' | 'green' | 'blue' | 'pink' | 'white'

export const categories = [
    { name: 'flower' as Category, label: 'Flower' },
    { name: 'vapes' as Category, label: 'Vapes' },
    { name: 'edibles' as Category, label: 'Edibles' },
    { name: 'prerolls' as Category, label: 'Pre-Rolls' },
    { name: 'concentrates' as Category, label: 'Concentrates' },
]

export const strainOptions: { name: Strain; label: string }[] = [
    { name: 'sativa', label: 'Sativa' },
    { name: 'indica', label: 'Indica' },
    { name: 'hybrid', label: 'Hybrid' },
]

export const tierOptions: { name: Tier; color: string; label: string }[] = [
    { name: 'yellow', color: '#ecc94b', label: 'Yellow' },
    { name: 'green', color: '#48bb78', label: 'Green' },
    { name: 'blue', color: '#4299e1', label: 'Blue' },
    { name: 'pink', color: '#ed64a6', label: 'Pink' },
    { name: 'white', color: '#ffffff', label: 'White' },
]


export interface Product {
    slug: string
    name: string
    description: string
    details: string
    category: Category
    strain?: Strain
    tier?: Tier
    brand?: string
    price: number
    image?: string
}

// Helper to generate a slug from a product name
function slugify(name: string): string {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export const allProducts: Product[] = [
    // ── Flower — Sativa ──
    { slug: '', name: 'Sunny Haze', description: 'Energizing citrus notes', details: 'A bright, uplifting sativa that hits with citrus on the inhale and a smooth, clean finish. Popular with daytime smokers who want to stay active and focused.', category: 'flower', strain: 'sativa', tier: 'yellow', price: 0 },
    { slug: '', name: 'Lemon Dream', description: 'Uplifting, bright effects', details: 'A crisp sativa with strong lemon terpenes. Great for creative sessions and daytime use.', category: 'flower', strain: 'sativa', tier: 'yellow', price: 0 },
    { slug: '', name: 'Golden Hour', description: 'Smooth, daytime friendly', details: 'Named for the best time to smoke it. A smooth, easy-going sativa that keeps you mellow but moving.', category: 'flower', strain: 'sativa', tier: 'yellow', price: 0 },
    { slug: '', name: 'Green Light', description: 'Easy-going, everyday sativa', details: 'A solid daily driver. Nothing flashy, just reliable sativa effects at a fair price.', category: 'flower', strain: 'sativa', tier: 'green', price: 0 },
    { slug: '', name: 'Budget Buzz', description: 'Solid quality, great price', details: 'Proof that good flower doesn\'t have to cost a lot. Clean, consistent, and easy on the wallet.', category: 'flower', strain: 'sativa', tier: 'green', price: 0 },
    { slug: '', name: 'Premium Sativa Blend', description: 'Hand-selected, lab-tested', details: 'Our blue-tier sativa blend. Hand-selected from the best of the current rotation, lab-tested for potency and purity.', category: 'flower', strain: 'sativa', tier: 'blue', price: 0 },
    { slug: '', name: 'Tropical Sunrise', description: 'Exotic flavor profile', details: 'Tropical fruit terpenes with a smooth, uplifting finish. One of our most popular daytime strains.', category: 'flower', strain: 'sativa', tier: 'blue', price: 0 },
    { slug: '', name: 'Cloud Nine', description: 'Smooth smoke, potent effects', details: 'A heady sativa that hits clean and keeps you floating. Strong but not overwhelming.', category: 'flower', strain: 'sativa', tier: 'blue', price: 0 },
    { slug: '', name: 'Craft Sativa', description: 'Small-batch, premium quality', details: 'Small-batch flower from boutique growers. Limited availability, exceptional quality.', category: 'flower', strain: 'sativa', tier: 'pink', price: 0 },
    { slug: '', name: 'Sunrise Reserve', description: 'High potency sativa', details: 'Top-shelf sativa reserved for those who know what they want. High potency, complex flavor.', category: 'flower', strain: 'sativa', tier: 'pink', price: 0 },
    { slug: '', name: 'Signature Sativa', description: 'Our finest sativa selection', details: 'The best sativa we carry. Period. White tier, limited stock, worth every penny.', category: 'flower', strain: 'sativa', tier: 'white', price: 0 },

    // ── Flower — Indica ──
    { slug: '', name: 'Night Owl', description: 'Relaxing, calming effects', details: 'A mellow indica built for the end of the day. Earthy flavor with a slow onset that settles into full-body relaxation.', category: 'flower', strain: 'indica', tier: 'yellow', price: 0 },
    { slug: '', name: 'Purple Haze', description: 'Mellow vibes, smooth finish', details: 'Don\'t let the name fool you — this one is all indica. Mellow, smooth, and perfect for a chill night.', category: 'flower', strain: 'indica', tier: 'yellow', price: 0 },
    { slug: '', name: 'Deep Sleep', description: 'Evening relaxation', details: 'Does what the name says. Heavy body effects that ease you into the best sleep of your week.', category: 'flower', strain: 'indica', tier: 'yellow', price: 0 },
    { slug: '', name: 'Mellow Night', description: 'Gentle wind-down, easy price', details: 'A gentle indica for people who want to relax without getting knocked out. Budget-friendly too.', category: 'flower', strain: 'indica', tier: 'green', price: 0 },
    { slug: '', name: 'Couch Potato', description: 'Heavy relax, light wallet', details: 'You\'re not going anywhere after this one. Heavy relaxation at the green tier price point.', category: 'flower', strain: 'indica', tier: 'green', price: 0 },
    { slug: '', name: 'Premium Indica Blend', description: 'Hand-selected, lab-tested', details: 'Our blue-tier indica blend. Carefully selected for consistent relaxation and smooth flavor.', category: 'flower', strain: 'indica', tier: 'blue', price: 0 },
    { slug: '', name: 'Midnight Moon', description: 'Rich, earthy flavors', details: 'Deep earthy tones with a slow-building body high. A nighttime favorite among regulars.', category: 'flower', strain: 'indica', tier: 'blue', price: 0 },
    { slug: '', name: 'Rest & Restore', description: 'Potent relaxation', details: 'Named by someone who clearly needed a nap. Full-body relaxation with a calming mental effect.', category: 'flower', strain: 'indica', tier: 'blue', price: 0 },
    { slug: '', name: 'Craft Indica', description: 'Small-batch, premium quality', details: 'Small-batch indica from growers who take their time. You can taste the difference.', category: 'flower', strain: 'indica', tier: 'pink', price: 0 },
    { slug: '', name: 'Twilight Reserve', description: 'High potency indica', details: 'Our pink-tier indica. High potency, rich flavor, and the kind of relaxation you plan your evening around.', category: 'flower', strain: 'indica', tier: 'pink', price: 0 },
    { slug: '', name: 'Signature Indica', description: 'Our finest indica selection', details: 'The best indica on our shelf. White tier, extremely limited, and absolutely worth it.', category: 'flower', strain: 'indica', tier: 'white', price: 0 },

    // ── Flower — Hybrid ──
    { slug: '', name: 'Balanced Blend', description: 'Even sativa/indica mix', details: 'Right down the middle. Equal parts uplift and relaxation — a true 50/50 hybrid.', category: 'flower', strain: 'hybrid', tier: 'yellow', price: 0 },
    { slug: '', name: 'Perfect Harmony', description: 'Best of both worlds', details: 'The name says it all. Balanced effects that work for any time of day.', category: 'flower', strain: 'hybrid', tier: 'yellow', price: 0 },
    { slug: '', name: 'Steady Vibe', description: 'Reliable, consistent effects', details: 'The hybrid you grab when you don\'t want to think too hard about it. Reliable every time.', category: 'flower', strain: 'hybrid', tier: 'yellow', price: 0 },
    { slug: '', name: 'Everyday Hybrid', description: 'Balanced and budget-friendly', details: 'A solid hybrid at the green tier price. Good for any occasion, easy on the wallet.', category: 'flower', strain: 'hybrid', tier: 'green', price: 0 },
    { slug: '', name: 'Chill Mix', description: 'Smooth blend, easy on the pocket', details: 'Leans slightly indica but keeps your head clear. A great budget pick for hybrid lovers.', category: 'flower', strain: 'hybrid', tier: 'green', price: 0 },
    { slug: '', name: 'Premium Hybrid Blend', description: 'Hand-selected, lab-tested', details: 'Our blue-tier hybrid. Hand-picked strains blended for a balanced, versatile experience.', category: 'flower', strain: 'hybrid', tier: 'blue', price: 0 },
    { slug: '', name: 'True Balance', description: 'Perfectly proportioned', details: 'Engineered for balance. Not too heady, not too heavy — just right.', category: 'flower', strain: 'hybrid', tier: 'blue', price: 0 },
    { slug: '', name: 'All-Day Hybrid', description: 'Versatile, adaptable', details: 'Morning, afternoon, or night — this hybrid adapts to whatever you need from it.', category: 'flower', strain: 'hybrid', tier: 'blue', price: 0 },
    { slug: '', name: 'Craft Hybrid', description: 'Small-batch, premium quality', details: 'Small-batch hybrid from boutique growers. Complex flavor and perfectly tuned effects.', category: 'flower', strain: 'hybrid', tier: 'pink', price: 0 },
    { slug: '', name: 'Signature Blend', description: 'High potency hybrid', details: 'Our pink-tier hybrid. For people who\'ve tried everything else and want something special.', category: 'flower', strain: 'hybrid', tier: 'pink', price: 0 },
    { slug: '', name: 'Premium Hybrid Reserve', description: 'Our finest hybrid selection', details: 'White tier. The best hybrid we carry. When it\'s gone, it\'s gone.', category: 'flower', strain: 'hybrid', tier: 'white', price: 0 },

    // ── Vapes ──
    { slug: '', name: 'Citrus Burst Cart', description: 'Bright, energizing pull', details: 'A clean-hitting sativa cartridge with a strong citrus profile. Full spectrum extraction. Compatible with standard 510-thread batteries.', category: 'vapes', strain: 'sativa', brand: 'Brand A', price: 0 },
    { slug: '', name: 'Daytime Vape', description: 'Smooth and light', details: 'A light sativa pull for people who want to stay functional. Smooth draw, mild effects.', category: 'vapes', strain: 'sativa', brand: 'Brand B', price: 0 },
    { slug: '', name: 'Uplift Cart', description: 'Clean extraction, potent', details: 'Strong sativa effects in a convenient cartridge. Clean extraction process for pure flavor.', category: 'vapes', strain: 'sativa', brand: 'Brand A', price: 0 },
    { slug: '', name: 'Solar Flare', description: 'Full spectrum sativa', details: 'Full spectrum sativa cartridge with a complex terpene profile. For experienced vapers.', category: 'vapes', strain: 'sativa', brand: 'Brand C', price: 0 },
    { slug: '', name: 'Nighttime Cart', description: 'Relaxing, smooth draw', details: 'An indica cartridge designed for evening use. Smooth draw with calming effects.', category: 'vapes', strain: 'indica', brand: 'Brand B', price: 0 },
    { slug: '', name: 'Chill Vape', description: 'Mellow indica pull', details: 'A mellow indica vape that won\'t overwhelm. Good for unwinding without going overboard.', category: 'vapes', strain: 'indica', brand: 'Brand A', price: 0 },
    { slug: '', name: 'Deep Relax Cart', description: 'Full body effects', details: 'Heavy indica cartridge for full body relaxation. Strong effects — start with small pulls.', category: 'vapes', strain: 'indica', brand: 'Brand C', price: 0 },
    { slug: '', name: 'Moonlight Vape', description: 'Rich flavor, heavy hit', details: 'Rich, earthy flavor with heavy indica effects. A nighttime staple for regular vapers.', category: 'vapes', strain: 'indica', brand: 'Brand B', price: 0 },
    { slug: '', name: 'Balanced Cart', description: 'Best of both worlds', details: 'A hybrid cartridge that sits right in the middle. Good for any time of day.', category: 'vapes', strain: 'hybrid', brand: 'Brand B', price: 0 },
    { slug: '', name: 'Anytime Vape', description: 'Versatile, smooth', details: 'A versatile hybrid vape that works whenever you need it. Smooth, balanced, reliable.', category: 'vapes', strain: 'hybrid', brand: 'Brand A', price: 0 },
    { slug: '', name: 'Premium Hybrid Cart', description: 'Full spectrum blend', details: 'Full spectrum hybrid blend in a premium cartridge. Complex effects and smooth flavor.', category: 'vapes', strain: 'hybrid', brand: 'Brand A', price: 0 },
    { slug: '', name: 'Harmony Vape', description: 'Perfectly balanced', details: 'Our most balanced hybrid vape. Designed for people who want a little of everything.', category: 'vapes', strain: 'hybrid', brand: 'Brand C', price: 0 },

    // ── Pre-Rolls ──
    { slug: '', name: 'House Joint', description: 'Solid everyday smoke', details: 'Our house sativa pre-roll. Rolled fresh weekly by the team using flower from our current menu.', category: 'prerolls', strain: 'sativa', price: 0 },
    { slug: '', name: 'Sativa 3-Pack', description: 'Three sativa joints', details: 'Three sativa joints packed together. Same quality as our singles, better value in bulk.', category: 'prerolls', strain: 'sativa', price: 0 },
    { slug: '', name: 'Indica House Joint', description: 'Relaxing evening roll', details: 'Our house indica pre-roll. Same care as the sativa version, built for evening relaxation.', category: 'prerolls', strain: 'indica', price: 0 },
    { slug: '', name: 'Indica 3-Pack', description: 'Three indica joints', details: 'Three indica joints for the price of a deal. Great for stocking up on your evening smoke.', category: 'prerolls', strain: 'indica', price: 0 },
    { slug: '', name: 'Hybrid Pre-Roll', description: 'Balanced, smooth burn', details: 'A balanced hybrid pre-roll for when you can\'t decide. Smooth burn, consistent effects.', category: 'prerolls', strain: 'hybrid', price: 0 },
    { slug: '', name: 'Infused Hybrid Joint', description: 'Kief-dusted for extra punch', details: 'Our hybrid joint rolled in kief for extra potency. For experienced smokers who want more.', category: 'prerolls', strain: 'hybrid', price: 0 },

    // ── Edibles ──
    { slug: '', name: 'Gummy Bears 10pk', description: 'Classic fruity flavors', details: 'Ten gummies per pack, each precisely dosed. Mixed fruit flavors. Great for new users or experienced users who want consistency.', category: 'edibles', price: 0 },
    { slug: '', name: 'Chocolate Bar', description: 'Milk chocolate, smooth dose', details: 'A classic cannabis chocolate bar. Smooth milk chocolate with even dosing across each square.', category: 'edibles', price: 0 },
    { slug: '', name: 'Premium Gummies', description: 'Craft flavors, precise dosing', details: 'Craft gummies with unique flavor combinations and precise dosing. A step above the basics.', category: 'edibles', price: 0 },
    { slug: '', name: 'Infused Honey Sticks', description: 'Natural, versatile', details: 'Cannabis-infused honey in convenient sticks. Add to tea, drizzle on food, or eat straight.', category: 'edibles', price: 0 },
    { slug: '', name: 'Artisan Chocolates', description: 'Small-batch, rich flavor', details: 'Small-batch chocolates with rich, complex flavors. Made by craft chocolatiers with quality ingredients.', category: 'edibles', price: 0 },
    { slug: '', name: 'Signature Edible Collection', description: 'Our finest selection', details: 'Our premium edible collection. The best flavors, the best dosing, the best experience.', category: 'edibles', price: 0 },

    // ── Concentrates ──
    { slug: '', name: 'Basic Shatter', description: 'Clean, affordable concentrate', details: 'A no-frills shatter that delivers. Clean extraction, solid potency, smooth dab every time.', category: 'concentrates', price: 0 },
    { slug: '', name: 'House Wax', description: 'Smooth, easy to work with', details: 'Our house wax. Easy to handle, smooth to dab, and consistently good quality.', category: 'concentrates', price: 0 },
    { slug: '', name: 'Premium Badder', description: 'Terp-rich, potent', details: 'Terp-rich badder with a creamy consistency. Strong effects and excellent flavor.', category: 'concentrates', price: 0 },
    { slug: '', name: 'Live Resin', description: 'Fresh frozen extraction', details: 'Made from fresh frozen flower for maximum terpene preservation. Rich flavor, strong effects.', category: 'concentrates', price: 0 },
    { slug: '', name: 'Craft Rosin', description: 'Solventless, small-batch', details: 'Solventless rosin pressed in small batches. Pure, clean, and made without chemicals.', category: 'concentrates', price: 0 },
    { slug: '', name: 'Signature Live Rosin', description: 'Our finest concentrate', details: 'The top of our concentrate line. Solventless live rosin with exceptional flavor and potency.', category: 'concentrates', price: 0 },
]

// Generate slugs from names
allProducts.forEach((p) => {
    p.slug = slugify(p.name)
})

// Brands derived from products (computed after allProducts is defined)
export const vapeBrands = [...new Set(
    allProducts
        .filter((p) => p.category === 'vapes' && p.brand)
        .map((p) => p.brand as string)
)]