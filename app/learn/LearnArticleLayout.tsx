'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const allArticles = [
    { title: 'Your First Visit', href: '/learn/first-visit', category: 'Shop Learn' },
    { title: 'Sativa', href: '/learn/sativa', category: 'Strains' },
    { title: 'Indica', href: '/learn/indica', category: 'Strains' },
    { title: 'Hybrid', href: '/learn/hybrid', category: 'Strains' },
]

export default function LearnArticleLayout({
    children,
    category,
    title,
    subtitle,
}: {
    children: React.ReactNode
    category: string
    title: string
    subtitle: string
}) {
    const pathname = usePathname()

    return (
        <div className="min-h-screen relative">
            {/* Blurred Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center blur-2xl scale-110 opacity-15 dark:opacity-10 pointer-events-none"
                style={{ backgroundImage: 'url(/images/cannabis-flower.jpg)' }}
            />
            <div className="absolute inset-0 bg-bg/80 pointer-events-none" />

            {/* Article Header */}
            <div className="relative bg-surface/70 backdrop-blur-md border-b border-border">
                <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
                    <Link
                        href="/learn"
                        className="text-xs tracking-[0.3em] uppercase text-primary hover:text-accent transition-colors mb-4 inline-block"
                    >
                        ← Back to Learn
                    </Link>
                    <p className="text-xs tracking-[0.3em] uppercase text-accent mb-2">
                        {category}
                    </p>
                    <h1 className="text-4xl md:text-5xl font-heading text-text mb-4">{title}</h1>
                    <p className="text-text-muted text-lg max-w-2xl">
                        {subtitle}
                    </p>
                </div>
            </div>

            {/* Content Area: Article + Sidebar */}
            <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 lg:gap-16">

                    {/* Main Content — Frosted Glass Card */}
                    <div className="bg-surface/70 backdrop-blur-xl border border-border shadow-lg p-8 md:p-12">
                        <div className="max-w-3xl space-y-6 text-text-muted leading-relaxed text-lg">
                            {children}
                        </div>

                        {/* Disclaimer */}
                        <div className="border-t border-border mt-12 pt-8">
                            <p className="text-xs text-text-muted leading-relaxed">
                                The information on this page is for educational purposes only. It is not medical advice. Cannabis affects everyone differently. Consult a healthcare professional with any medical questions. World Famous Blaze makes no claims about the medical benefits of any product.
                            </p>
                        </div>
                    </div>

                    {/* Sidebar — Article Navigation */}
                    <div className="lg:sticky lg:top-24 lg:self-start">
                        <div className="bg-surface/70 backdrop-blur-xl border border-border shadow-lg p-6">
                            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">
                                Articles
                            </p>
                            <nav className="space-y-1">
                                {allArticles.map((article) => {
                                    const isActive = pathname === article.href
                                    return (
                                        <Link
                                            key={article.href}
                                            href={article.href}
                                            className={`block px-4 py-3 transition-all ${isActive
                                                ? 'bg-primary/10 border-l-2 border-primary text-text'
                                                : 'text-text-muted hover:text-text hover:bg-surface/50'
                                                }`}
                                        >
                                            <span className="text-[10px] tracking-[0.2em] uppercase text-text-muted block mb-0.5">
                                                {article.category}
                                            </span>
                                            <span className="text-sm">
                                                {article.title}
                                            </span>
                                        </Link>
                                    )
                                })}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}