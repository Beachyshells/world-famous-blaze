'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const allArticles = [
    { title: 'Sativa', href: '/learn/sativa', emoji: '☀️', vibe: 'Energizing' },
    { title: 'Indica', href: '/learn/indica', emoji: '🌙', vibe: 'Relaxing' },
    { title: 'Hybrid', href: '/learn/hybrid', emoji: '⚖️', vibe: 'Balanced' },
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
        <div className="min-h-screen">
            {/* Header */}
            <section className="bg-surface border-b border-border">
                <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28">
                    <Link
                        href="/learn"
                        className="text-xs tracking-[0.3em] uppercase text-primary hover:text-accent transition-colors mb-6 inline-block"
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
            </section>

            {/* Content + Sidebar */}
            <div className="bg-bg">
                <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 lg:gap-16">

                        {/* Main Content */}
                        <article>
                            <div className="space-y-10">
                                {children}
                            </div>

                            <div className="border-t border-border mt-16 pt-8">
                                <p className="text-xs text-text-muted leading-relaxed">
                                    This page is for educational purposes only. It is not medical advice. Cannabis affects everyone differently. Consult a healthcare professional with any medical questions. World Famous Blaze makes no claims about the medical benefits of any product.
                                </p>
                            </div>
                        </article>

                        {/* Sidebar */}
                        <aside className="lg:sticky lg:top-24 lg:self-start space-y-4">
                            <div className="bg-surface border border-border p-6 rounded-[5px]">
                                <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">
                                    Explore Strains
                                </p>
                                <nav className="space-y-2">
                                    {allArticles.map((article) => {
                                        const isActive = pathname === article.href
                                        return (
                                            <Link
                                                key={article.href}
                                                href={article.href}
                                                className={`flex items-center gap-3 px-4 py-3 transition-all rounded-[5px] ${isActive
                                                    ? 'bg-primary/10 border border-primary/30 text-text'
                                                    : 'text-text-muted hover:text-text hover:bg-bg border border-transparent'
                                                    }`}
                                            >
                                                <span className="text-lg">{article.emoji}</span>
                                                <div>
                                                    <span className="text-sm font-heading block">
                                                        {article.title}
                                                    </span>
                                                    <span className="text-xs text-text-muted">
                                                        {article.vibe}
                                                    </span>
                                                </div>
                                            </Link>
                                        )
                                    })}
                                </nav>
                            </div>

                            <div className="bg-dark border border-white/10 p-6 rounded-[5px]">
                                <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">
                                    Pro Tip
                                </p>
                                <p className="text-white/60 text-sm leading-relaxed">
                                    Not sure which strain is for you? Tell the team what vibe you&apos;re going for and they&apos;ll point you in the right direction. No wrong answers.
                                </p>
                            </div>

                            <Link
                                href="/menu"
                                className="block text-center bg-primary text-bg px-4 py-3 text-xs tracking-[0.2em] uppercase hover:opacity-90 transition-opacity rounded-[5px]"
                            >
                                Browse the Menu
                            </Link>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    )
}