import Link from 'next/link'

const articles = [
    {
        title: 'Sativa',
        category: 'Strains',
        description: 'The daytime pick. Uplifting, energizing, and perfect for getting things done while still enjoying the ride.',
        href: '/learn/sativa',
    },
    {
        title: 'Indica',
        category: 'Strains',
        description: 'The wind-down strain. Heavy, warm, and built for melting into the couch at the end of the day.',
        href: '/learn/indica',
    },
    {
        title: 'Hybrid',
        category: 'Strains',
        description: 'The best of both worlds. Balanced effects that sit right between energizing and relaxing.',
        href: '/learn/hybrid',
    },
    {
        title: 'Your First Visit',
        category: 'Shop Learn',
        description: 'What to expect when you walk in, how the whole thing works, and all the ways to win.',
        href: '/learn/first-visit',
    },
]

export default function LearnPage() {
    return (
        <div className="min-h-screen">
            {/* Page Header */}
            <div className="bg-surface border-b border-border">
                <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
                    <p className="text-xs tracking-[0.3em] uppercase text-primary mb-2">
                        Education
                    </p>
                    <h1 className="text-4xl md:text-5xl font-heading text-text mb-4">Learn</h1>
                    <p className="text-text-muted text-lg max-w-2xl">
                        New to cannabis or just want to know more? Start here. No jargon, no lectures — just the stuff that actually helps.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
                {/* Strain Guides Section */}
                <div className="mb-16">
                    <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">
                        Know Your Strains
                    </p>
                    <h2 className="text-2xl md:text-3xl font-heading text-text mb-8">
                        The three types of cannabis
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {articles.map((article) => (
                            <Link
                                key={article.title}
                                href={article.href}
                                className="bg-surface border border-border p-8 hover:border-primary shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer block"
                            >
                                <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">
                                    {article.category}
                                </p>
                                <h3 className="text-2xl font-heading text-text mb-3 group-hover:text-primary transition-colors">
                                    {article.title}
                                </h3>
                                <p className="text-sm text-text-muted leading-relaxed mb-6">
                                    {article.description}
                                </p>
                                <span className="text-sm text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 inline-block">
                                    Read More →
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* More Coming Soon */}
                <div className="border-t border-border pt-12">
                    <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">
                        More Coming Soon
                    </p>
                    <h2 className="text-2xl font-heading text-text mb-4">
                        Shop guides, community resources, and more
                    </h2>
                    <p className="text-text-muted max-w-2xl">
                        We&#39;re building out guides on how to shop smart, what to look for in quality products, and resources for the community. Check back soon.
                    </p>
                </div>
            </div>
        </div>
    )
}