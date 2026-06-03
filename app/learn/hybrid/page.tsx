import Link from 'next/link'

export default function HybridPage() {
    return (
        <div className="min-h-screen">
            {/* Article Header */}
            <div className="bg-surface border-b border-border">
                <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
                    <Link
                        href="/learn"
                        className="text-xs tracking-[0.3em] uppercase text-primary hover:text-accent transition-colors mb-4 inline-block"
                    >
                        ← Back to Learn
                    </Link>
                    <p className="text-xs tracking-[0.3em] uppercase text-accent mb-2">
                        Strains
                    </p>
                    <h1 className="text-4xl md:text-5xl font-heading text-text mb-4">Hybrid</h1>
                    <p className="text-text-muted text-lg max-w-2xl">
                        The best of both worlds. Balanced, versatile, and perfect if you can&#39;t decide.
                    </p>
                </div>
            </div>

            {/* Article Content */}
            <div className="max-w-3xl mx-auto px-6 md:px-8 py-16 md:py-24">
                <div className="space-y-6 text-text-muted leading-relaxed text-lg">
                    <p>
                        Can&#39;t decide? Don&#39;t want to? Hybrids are what happens when sativa and indica get together and make something in between.
                    </p>
                    <p>
                        Some hybrids lean more sativa — you&#39;ll feel uplifted but with a little body relaxation mixed in. Some lean more indica — you&#39;re chilling but your brain is still turned on. And some are right down the middle, giving you a balanced mix of both worlds.
                    </p>
                    <p>
                        This is usually what people grab when they want to be functional but also relaxed. Not wired, not couch-locked, just... good. It&#39;s the &quot;I could do something or I could do nothing and either way I&#39;m having a great time&quot; zone.
                    </p>
                    <p>
                        Hybrids are also a solid starting point if you&#39;re newer to cannabis and don&#39;t know what you prefer yet. They give you a taste of both sides so you can figure out which direction you lean for next time.
                    </p>
                    <p>
                        The thing about hybrids is that no two are exactly alike. The ratio of sativa to indica changes strain to strain, so what you feel from one hybrid might be totally different from another. Check the labels, ask us questions, and experiment a little. That&#39;s half the fun.
                    </p>

                    <div className="border-t border-border pt-8 mt-8">
                        <p className="text-sm font-heading text-text mb-2">Common vibes people describe</p>
                        <p className="text-text-muted">
                            Balanced, easygoing, versatile, chill but aware, adaptable.
                        </p>
                    </div>
                </div>

                {/* Navigation */}
                <div className="flex justify-between items-center border-t border-border mt-16 pt-8">
                    <Link
                        href="/learn/indica"
                        className="text-sm text-text-muted hover:text-primary transition-colors"
                    >
                        ← Previous: Indica
                    </Link>
                    <Link
                        href="/learn"
                        className="text-sm text-text hover:text-primary transition-colors"
                    >
                        All Articles →
                    </Link>
                </div>

                {/* Disclaimer */}
                <div className="border-t border-border mt-12 pt-8">
                    <p className="text-xs text-text-muted leading-relaxed">
                        The information on this page is for educational purposes only. It is not medical advice. Cannabis affects everyone differently. Consult a healthcare professional with any medical questions. World Famous Blaze makes no claims about the medical benefits of any product.
                    </p>
                </div>
            </div>
        </div>
    )
}