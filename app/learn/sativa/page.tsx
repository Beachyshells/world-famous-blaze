import Link from 'next/link'

export default function SativaPage() {
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
                    <h1 className="text-4xl md:text-5xl font-heading text-text mb-4">Sativa</h1>
                    <p className="text-text-muted text-lg max-w-2xl">
                        The daytime strain. Uplifting, energizing, and built for people who still have things to do.
                    </p>
                </div>
            </div>

            {/* Article Content */}
            <div className="max-w-3xl mx-auto px-6 md:px-8 py-16 md:py-24">
                <div className="space-y-6 text-text-muted leading-relaxed text-lg">
                    <p>
                        So you&#39;ve got stuff to do but you still want to smoke? Sativa&#39;s your pick. These strains are known for that heady, uplifting buzz — the kind where you clean your whole house, go for a walk, or suddenly become a genius at whatever hobby you forgot you had.
                    </p>
                    <p>
                        Sativas tend to hit more in the head than the body. A lot of people reach for them during the day because they keep you moving instead of melting into the couch. Think creative energy, good conversations, and that &quot;everything is interesting right now&quot; feeling.
                    </p>
                    <p>
                        They&#39;re also a popular choice if you&#39;re hanging out with people. Social settings, outdoor adventures, music, art — sativas tend to pair well with doing things rather than just sitting there.
                    </p>
                    <p>
                        A few things to keep in mind though. If you&#39;re someone who gets anxious or overthinks, strong sativas can sometimes crank that up. Start low, see how you feel, and work your way up. Everyone&#39;s different and the same strain can hit different people in totally different ways.
                    </p>

                    <div className="border-t border-border pt-8 mt-8">
                        <p className="text-sm font-heading text-text mb-2">Common vibes people describe</p>
                        <p className="text-text-muted">
                            Energized, focused, creative, talkative, uplifted.
                        </p>
                    </div>
                </div>

                {/* Navigation */}
                <div className="flex justify-between items-center border-t border-border mt-16 pt-8">
                    <Link
                        href="/learn"
                        className="text-sm text-text-muted hover:text-primary transition-colors"
                    >
                        ← All Articles
                    </Link>
                    <Link
                        href="/learn/indica"
                        className="text-sm text-text hover:text-primary transition-colors"
                    >
                        Next: Indica →
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