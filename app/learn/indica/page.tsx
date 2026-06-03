import Link from 'next/link'

export default function IndicaPage() {
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
                    <h1 className="text-4xl md:text-5xl font-heading text-text mb-4">Indica</h1>
                    <p className="text-text-muted text-lg max-w-2xl">
                        The evening strain. Relaxing, calming, and made for winding down.
                    </p>
                </div>
            </div>

            {/* Article Content */}
            <div className="max-w-3xl mx-auto px-6 md:px-8 py-16 md:py-24">
                <div className="space-y-6 text-text-muted leading-relaxed text-lg">
                    <p>
                        Indica is the &quot;I&#39;m done for the day&quot; strain. If you&#39;re looking to wind down, relax, and let your body just melt into whatever you&#39;re sitting on — this is the one.
                    </p>
                    <p>
                        These strains tend to hit more in the body. That heavy, warm, everything-is-fine feeling. A lot of people smoke indica at night because it pairs perfectly with doing absolutely nothing. Couch, snacks, a movie you&#39;ve seen twelve times — that&#39;s indica territory.
                    </p>
                    <p>
                        A lot of people choose indica for their evening wind-down. It&#39;s the strain you grab when you&#39;re done with everything and just want to be comfortable for the rest of the night.
                    </p>
                    <p>
                        The munchies tend to hit harder with indica too, so keep snacks nearby. You&#39;ve been warned.
                    </p>
                    <p>
                        If you&#39;re new to cannabis or trying indica for the first time, start with a smaller amount. These strains can be heavy and it&#39;s easy to overdo it when you&#39;re feeling relaxed and comfortable. You can always smoke more but you can&#39;t un-smoke what you already smoked.
                    </p>

                    <div className="border-t border-border pt-8 mt-8">
                        <p className="text-sm font-heading text-text mb-2">Common vibes people describe</p>
                        <p className="text-text-muted">
                            Relaxed, sleepy, hungry, calm, cozy.
                        </p>
                    </div>
                </div>

                {/* Navigation */}
                <div className="flex justify-between items-center border-t border-border mt-16 pt-8">
                    <Link
                        href="/learn/sativa"
                        className="text-sm text-text-muted hover:text-primary transition-colors"
                    >
                        ← Previous: Sativa
                    </Link>
                    <Link
                        href="/learn/hybrid"
                        className="text-sm text-text hover:text-primary transition-colors"
                    >
                        Next: Hybrid →
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