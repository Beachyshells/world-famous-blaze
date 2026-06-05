export default function StyleGuide() {
    return (
        <main className="min-h-screen bg-bg text-text p-8 md:p-16">
            <div className="max-w-5xl mx-auto space-y-20">

                {/* HEADER */}
                <header>
                    <p className="text-xs tracking-[0.3em] uppercase text-primary mb-2">Developer Reference</p>
                    <h1 className="text-4xl md:text-5xl font-heading mb-2">Style Guide</h1>
                    <p className="text-text-muted text-lg">
                        Visual reference for all design tokens, patterns, and components used across World Famous Blaze. Remove this page before launch.
                    </p>
                </header>

                {/* THEME COLORS */}
                <section>
                    <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">Tokens</p>
                    <h2 className="text-2xl font-heading mb-6">Theme-Aware Colors</h2>
                    <p className="text-text-muted text-sm mb-6">These swap between light and dark mode automatically.</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                            <div className="h-24 w-full border border-border bg-bg" />
                            <p className="text-sm font-mono">bg</p>
                        </div>
                        <div className="space-y-2">
                            <div className="h-24 w-full border border-border bg-surface" />
                            <p className="text-sm font-mono">surface</p>
                        </div>
                        <div className="space-y-2">
                            <div className="h-24 w-full border border-border bg-dark" />
                            <p className="text-sm font-mono">dark</p>
                        </div>
                        <div className="space-y-2">
                            <div className="h-24 w-full border border-border bg-text" />
                            <p className="text-sm font-mono">text</p>
                        </div>
                        <div className="space-y-2">
                            <div className="h-24 w-full border border-border bg-text-muted" />
                            <p className="text-sm font-mono">text-muted</p>
                        </div>
                        <div className="space-y-2">
                            <div className="h-24 w-full border border-border bg-border" />
                            <p className="text-sm font-mono">border</p>
                        </div>
                    </div>
                </section>

                {/* BRAND COLORS */}
                <section>
                    <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">Tokens</p>
                    <h2 className="text-2xl font-heading mb-6">Brand Colors</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="space-y-2">
                            <div className="h-24 w-full border border-border bg-primary" />
                            <p className="text-sm font-mono">primary</p>
                            <p className="text-xs text-text-muted">Sage green — links, labels, active states</p>
                        </div>
                        <div className="space-y-2">
                            <div className="h-24 w-full border border-border bg-accent" />
                            <p className="text-sm font-mono">accent</p>
                            <p className="text-xs text-text-muted">Dusty gold — eyebrows, highlights</p>
                        </div>
                        <div className="space-y-2">
                            <div className="h-24 w-full border border-border bg-danger" />
                            <p className="text-sm font-mono">danger</p>
                            <p className="text-xs text-text-muted">Warm red — errors, warnings</p>
                        </div>
                        <div className="space-y-2">
                            <div className="h-24 w-full border border-border bg-success" />
                            <p className="text-sm font-mono">success</p>
                            <p className="text-xs text-text-muted">Leaf green — confirmations</p>
                        </div>
                    </div>
                </section>

                {/* TIER COLORS */}
                <section>
                    <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">Flower Only</p>
                    <h2 className="text-2xl font-heading mb-6">Pricing Tier Colors</h2>
                    <p className="text-text-muted text-sm mb-6">These are intentionally hardcoded — they are brand-specific, not theme tokens. Only used on flower products.</p>
                    <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-3 bg-surface border border-border px-4 py-3 rounded-[5px]">
                            <span className="w-4 h-4 rounded-full bg-[#48bb78] border border-border/50" />
                            <div>
                                <p className="text-sm font-heading">Green</p>
                                <p className="text-xs text-text-muted font-mono">#48bb78</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 bg-surface border border-border px-4 py-3 rounded-[5px]">
                            <span className="w-4 h-4 rounded-full bg-[#ecc94b] border border-border/50" />
                            <div>
                                <p className="text-sm font-heading">Yellow</p>
                                <p className="text-xs text-text-muted font-mono">#ecc94b</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 bg-surface border border-border px-4 py-3 rounded-[5px]">
                            <span className="w-4 h-4 rounded-full bg-[#4299e1] border border-border/50" />
                            <div>
                                <p className="text-sm font-heading">Blue</p>
                                <p className="text-xs text-text-muted font-mono">#4299e1</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 bg-surface border border-border px-4 py-3 rounded-[5px]">
                            <span className="w-4 h-4 rounded-full bg-[#ed64a6] border border-border/50" />
                            <div>
                                <p className="text-sm font-heading">Pink</p>
                                <p className="text-xs text-text-muted font-mono">#ed64a6</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 bg-surface border border-border px-4 py-3 rounded-[5px]">
                            <span className="w-4 h-4 rounded-full bg-white border border-border/50" />
                            <div>
                                <p className="text-sm font-heading">White</p>
                                <p className="text-xs text-text-muted font-mono">#ffffff</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TYPOGRAPHY */}
                <section>
                    <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">Fonts</p>
                    <h2 className="text-2xl font-heading mb-6">Typography</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <p className="text-xs tracking-[0.2em] uppercase text-text-muted mb-4">Heading — Playfair Display</p>
                            <p className="text-xs text-text-muted font-mono mb-4">font-heading / var(--font-playfair)</p>
                            <h1 className="text-5xl font-heading mb-2">Premium Cannabis</h1>
                            <h2 className="text-3xl font-heading mb-2">Section Heading</h2>
                            <h3 className="text-xl font-heading">Subsection</h3>
                        </div>
                        <div>
                            <p className="text-xs tracking-[0.2em] uppercase text-text-muted mb-4">Body — Geist</p>
                            <p className="text-xs text-text-muted font-mono mb-4">font-body / var(--font-geist-sans)</p>
                            <p className="text-lg mb-2">The quick brown fox jumps over the lazy dog at the dispensary.</p>
                            <p className="mb-2">Standard body paragraph text for reading content.</p>
                            <p className="text-sm text-text-muted">Smaller muted text for captions and meta info.</p>
                        </div>
                    </div>
                </section>

                {/* TEXT PATTERNS */}
                <section>
                    <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">Patterns</p>
                    <h2 className="text-2xl font-heading mb-6">Common Text Patterns</h2>
                    <div className="space-y-8">
                        <div className="bg-surface border border-border p-8 rounded-[5px]">
                            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-2">Eyebrow Label</p>
                            <h2 className="text-3xl md:text-4xl font-heading text-text mb-4">Section Heading</h2>
                            <p className="text-text-muted text-lg max-w-2xl">
                                Description paragraph with muted text. This is the standard section header pattern used across the entire site.
                            </p>
                            <p className="text-xs text-text-muted font-mono mt-4">text-xs tracking-[0.3em] uppercase text-accent → font-heading text-text → text-text-muted</p>
                        </div>
                        <div className="bg-surface border border-border p-8 rounded-[5px]">
                            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-2">Primary Eyebrow</p>
                            <p className="text-xs text-text-muted font-mono mt-2">text-primary for secondary eyebrows (used on some pages)</p>
                        </div>
                    </div>
                </section>

                {/* CARDS */}
                <section>
                    <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">Components</p>
                    <h2 className="text-2xl font-heading mb-6">Card Styles</h2>
                    <p className="text-text-muted text-sm mb-6">Cards use rounded-[5px] and shadows. No fully rounded corners anywhere on the site.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-surface border border-border p-6 rounded-[5px] shadow-md hover:border-primary hover:shadow-xl transition-all duration-300 group cursor-pointer">
                            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">Category</p>
                            <h3 className="text-lg font-heading text-text mb-2 group-hover:text-primary transition-colors">Standard Card</h3>
                            <p className="text-sm text-text-muted">Hover me to see the border and shadow transition.</p>
                        </div>
                        <div className="border border-border bg-bg p-6 rounded-[5px]">
                            <span className="text-4xl font-heading text-accent/30 mb-4 block">01</span>
                            <h3 className="text-lg font-heading text-text mb-2">Numbered Card</h3>
                            <p className="text-sm text-text-muted">Used on the first-visit steps page.</p>
                        </div>
                        <div className="bg-surface border border-border p-6 rounded-[5px]">
                            <p className="text-xs font-heading tracking-[0.2em] uppercase text-accent mb-3">Info Card</p>
                            <p className="text-2xl font-heading text-text mb-2">24/7</p>
                            <p className="text-text-muted text-sm">Used on visit page contact cards.</p>
                        </div>
                    </div>
                </section>

                {/* BUTTONS & LINKS */}
                <section>
                    <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">Components</p>
                    <h2 className="text-2xl font-heading mb-6">Buttons & Links</h2>
                    <div className="flex flex-wrap gap-4 mb-8">
                        <span className="bg-primary text-bg px-8 py-3 text-sm tracking-[0.2em] uppercase hover:opacity-90 transition-opacity cursor-pointer">
                            Primary Button
                        </span>
                        <span className="border border-border px-8 py-3 text-sm tracking-[0.2em] uppercase text-text hover:border-primary hover:text-primary transition-colors cursor-pointer">
                            Secondary Button
                        </span>
                    </div>
                    <div className="flex flex-wrap gap-8">
                        <span className="group inline-flex items-center gap-3 text-text hover:text-primary transition-colors cursor-pointer">
                            <span className="text-sm tracking-wide">Arrow CTA Link</span>
                            <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
                        </span>
                        <span className="text-sm text-primary opacity-100 cursor-pointer">
                            Read More →
                        </span>
                    </div>
                </section>

                {/* FILTER PILLS */}
                <section>
                    <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">Components</p>
                    <h2 className="text-2xl font-heading mb-6">Filter Pills</h2>
                    <p className="text-text-muted text-sm mb-6">Used on the menu and merchandise filter bars.</p>
                    <div className="flex flex-wrap gap-2.5">
                        <span className="px-4 py-2 rounded-full text-xs font-semibold tracking-wide bg-text text-bg border border-text shadow-inner">
                            Active Category
                        </span>
                        <span className="px-4 py-2 rounded-full text-xs font-medium tracking-wide bg-surface border border-border text-text-muted">
                            Inactive Category
                        </span>
                        <span className="w-px h-5 bg-border mx-1 self-center" />
                        <span className="px-4 py-2 rounded-full text-xs font-semibold tracking-wide bg-primary text-white border border-primary shadow-inner">
                            Active Sort/Strain
                        </span>
                        <span className="px-4 py-2 rounded-full text-xs font-medium tracking-wide bg-surface border border-border text-text-muted">
                            Inactive Sort/Strain
                        </span>
                    </div>
                </section>

                {/* TIER BADGES */}
                <section>
                    <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">Components</p>
                    <h2 className="text-2xl font-heading mb-6">Tier Badge (Product Card Overlay)</h2>
                    <div className="flex flex-wrap gap-3">
                        {[
                            { color: '#48bb78', label: 'Green' },
                            { color: '#ecc94b', label: 'Yellow' },
                            { color: '#4299e1', label: 'Blue' },
                            { color: '#ed64a6', label: 'Pink' },
                            { color: '#ffffff', label: 'White' },
                        ].map((tier) => (
                            <div key={tier.label} className="flex items-center gap-1.5 px-2 py-1 bg-dark/80 border border-white/10 text-xs font-medium tracking-wide text-white/70 shadow-sm">
                                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: tier.color }} />
                                {tier.label}
                            </div>
                        ))}
                    </div>
                </section>

                {/* HERO PATTERN */}
                <section>
                    <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">Layout</p>
                    <h2 className="text-2xl font-heading mb-6">Image Hero Pattern</h2>
                    <p className="text-text-muted text-sm mb-6">Used on Menu, Merchandise, Visit, Learn, and First Visit pages. Consistent structure across the site.</p>
                    <div className="relative overflow-hidden border border-border rounded-[5px]">
                        <div className="absolute inset-0 bg-dark" />
                        <div className="absolute inset-0 bg-linear-to-r from-dark/90 via-dark/50 to-transparent" />
                        <div className="relative px-6 md:px-8 py-16 z-10">
                            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-2">Eyebrow</p>
                            <h2 className="text-4xl md:text-5xl font-heading tracking-wide text-white mb-4">Page Title</h2>
                            <p className="text-white/70 text-lg max-w-2xl">Description paragraph here. Background would be an image with bg-cover bg-center.</p>
                        </div>
                    </div>
                    <p className="text-xs text-text-muted font-mono mt-4">relative overflow-hidden → absolute bg-cover bg-center → absolute bg-linear-to-r from-dark/90 → relative z-10 content → py-20 md:py-28</p>
                </section>

                {/* DARK SECTION PATTERN */}
                <section>
                    <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">Layout</p>
                    <h2 className="text-2xl font-heading mb-6">Dark Section Pattern</h2>
                    <p className="text-text-muted text-sm mb-6">Used on visit page brand statement and first-visit Dollar Dabs section.</p>
                    <div className="bg-dark border border-white/10 rounded-[5px] p-8 text-center">
                        <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">Eyebrow</p>
                        <h2 className="text-3xl font-heading text-white mb-4">Dark Section Heading</h2>
                        <p className="text-white/50 max-w-md mx-auto">Description text in white/50 or white/60. Cards inside use border-white/10 and bg-white/5.</p>
                        <div className="flex justify-center gap-4 mt-6">
                            <div className="border border-white/10 bg-white/5 px-6 py-3 rounded-[5px]">
                                <p className="text-lg font-heading text-white">$60+</p>
                                <p className="text-white/40 text-xs">Label</p>
                            </div>
                            <div className="border border-white/10 bg-white/5 px-6 py-3 rounded-[5px]">
                                <p className="text-lg font-heading text-white">$1</p>
                                <p className="text-white/40 text-xs">Label</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SPACING CONVENTIONS */}
                <section>
                    <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">Layout</p>
                    <h2 className="text-2xl font-heading mb-6">Spacing & Width Conventions</h2>
                    <div className="space-y-4 text-text-muted">
                        <div className="flex gap-4 items-baseline">
                            <span className="text-sm font-mono text-text w-40 shrink-0">max-w-9xl</span>
                            <span className="text-sm">Header and Footer only</span>
                        </div>
                        <div className="flex gap-4 items-baseline">
                            <span className="text-sm font-mono text-text w-40 shrink-0">max-w-7xl</span>
                            <span className="text-sm">All page content</span>
                        </div>
                        <div className="flex gap-4 items-baseline">
                            <span className="text-sm font-mono text-text w-40 shrink-0">px-6 md:px-8</span>
                            <span className="text-sm">Standard horizontal padding</span>
                        </div>
                        <div className="flex gap-4 items-baseline">
                            <span className="text-sm font-mono text-text w-40 shrink-0">py-20 md:py-28</span>
                            <span className="text-sm">Hero sections</span>
                        </div>
                        <div className="flex gap-4 items-baseline">
                            <span className="text-sm font-mono text-text w-40 shrink-0">py-16 md:py-24</span>
                            <span className="text-sm">Content sections</span>
                        </div>
                        <div className="flex gap-4 items-baseline">
                            <span className="text-sm font-mono text-text w-40 shrink-0">rounded-[5px]</span>
                            <span className="text-sm">Cards, badges, containers — no other border radius used</span>
                        </div>
                    </div>
                </section>

                {/* FOOTER NOTE */}
                <div className="border-t border-border pt-8 text-center">
                    <p className="text-xs text-text-muted">
                        This page is a developer reference. Remove before production launch.
                    </p>
                </div>
            </div>
        </main>
    )
}