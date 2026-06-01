import Link from 'next/link'

// Placeholder articles — will pull from Sanity in Phase 7
const placeholderArticles = [
    {
        category: 'THC Products',
        title: 'Sativa, Indica, Hybrid — Explained Honestly',
        excerpt: 'What these terms actually mean for the experience — and what they don\'t.',
        href: '/learn'
    },
    {
        category: 'Shop Learn',
        title: 'Your First Visit: What to Expect',
        excerpt: 'How to read the menu, what to ask, and how the whole thing works.',
        href: '/learn'
    },
    {
        category: 'Community Learn',
        title: 'What\'s Happening This Month',
        excerpt: 'Events, partnerships, and stories from around the territory.',
        href: '/learn'
    },
]

export function LearnPreview() {
    return (
        <section className="bg-bg">
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28">

                {/* Header */}
                <div className="mb-12 md:mb-16 max-w-2xl">
                    <p className="text-xs tracking-[0.4em] uppercase text-primary mb-3">
                        Knowledge
                    </p>
                    <h2 className="text-4xl md:text-5xl text-text mb-4">
                        Learn With Us
                    </h2>
                    <p className="text-text-muted">
                        Three ways to learn. About the plant, about the shop, and about the community
                        that makes this place what it is.
                    </p>
                </div>

                {/* Article Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {placeholderArticles.map((article) => (
                        <article
                            key={article.title}
                            className="border border-border p-8 hover:border-primary transition-colors group cursor-pointer"
                        >
                            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">
                                {article.category}
                            </p>
                            <h3 className="text-xl text-text mb-3 leading-snug group-hover:text-primary transition-colors">
                                {article.title}
                            </h3>
                            <p className="text-sm text-text-muted leading-relaxed">
                                {article.excerpt}
                            </p>
                        </article>
                    ))}
                </div>

                {/* CTA */}
                <Link
                    href="/learn"
                    className="group inline-flex items-center gap-3 text-text hover:text-primary transition-colors"
                >
                    <span className="tracking-wide">Browse All Articles</span>
                    <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
                </Link>
            </div>
        </section>
    )
}