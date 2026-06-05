import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Your First Visit | World Famous Blaze',
    description: 'What to expect on your first dispensary visit — how it works, Dollar Dabs, loyalty rewards, and more.',
}

export default function FirstVisitPage() {
    return (
        <div className="min-h-screen">

            {/* Hero */}
            <section className="relative overflow-hidden border-b border-border">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url(/images/hero-background.jpg)' }}
                />
                <div className="absolute inset-0 bg-linear-to-r from-dark/90 via-dark/50 to-transparent" />
                <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28 z-10">
                    <Link
                        href="/visit"
                        className="text-xs tracking-[0.3em] uppercase text-primary hover:text-accent transition-colors mb-6 inline-block"
                    >
                        ← Back to Visit
                    </Link>
                    <p className="text-xs tracking-[0.3em] uppercase text-accent mb-2">
                        New Here?
                    </p>
                    <h1 className="text-5xl md:text-6xl font-heading tracking-wide text-white mb-4">
                        Your First Visit
                    </h1>
                    <p className="text-white/70 text-lg max-w-2xl">
                        Everything you need to know before you walk through the door. No surprises, no pressure.
                    </p>
                </div>
            </section>

            {/* Quick Facts — 3 cards */}
            <section className="bg-bg border-b border-border">
                <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-surface border border-border p-8 rounded-[5px]">
                            <p className="text-xs font-heading tracking-[0.2em] uppercase text-accent mb-3">
                                Age Requirement
                            </p>
                            <p className="text-3xl font-heading text-text mb-2">21+</p>
                            <p className="text-text-muted text-sm leading-relaxed">
                                Bring a valid government-issued ID. No exceptions, no workarounds.
                            </p>
                        </div>
                        <div className="bg-surface border border-border p-8 rounded-[5px]">
                            <p className="text-xs font-heading tracking-[0.2em] uppercase text-accent mb-3">
                                Open
                            </p>
                            <p className="text-3xl font-heading text-text mb-2">24/7</p>
                            <p className="text-text-muted text-sm leading-relaxed">
                                Day shift, night shift, no shift — we&apos;re here whenever you need us.
                            </p>
                        </div>
                        <div className="bg-surface border border-border p-8 rounded-[5px]">
                            <p className="text-xs font-heading tracking-[0.2em] uppercase text-accent mb-3">
                                Payment
                            </p>
                            <p className="text-3xl font-heading text-text mb-2">Cash</p>
                            <p className="text-text-muted text-sm leading-relaxed">
                                We&apos;re cash only. There&apos;s an ATM in the shop if you need it.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works — visual steps */}
            <section className="bg-surface border-b border-border">
                <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
                    <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">
                        Step by Step
                    </p>
                    <h2 className="text-3xl md:text-4xl font-heading text-text mb-12">
                        How a visit works
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="border border-border bg-bg p-8 rounded-[5px]">
                            <span className="text-4xl font-heading text-accent/30 mb-4 block">01</span>
                            <h3 className="text-lg font-heading text-text mb-2">Walk In & Check In</h3>
                            <p className="text-text-muted text-sm leading-relaxed">
                                Show your ID at the door. Quick and easy — takes about 10 seconds.
                            </p>
                        </div>
                        <div className="border border-border bg-bg p-8 rounded-[5px]">
                            <span className="text-4xl font-heading text-accent/30 mb-4 block">02</span>
                            <h3 className="text-lg font-heading text-text mb-2">Browse the Menu</h3>
                            <p className="text-text-muted text-sm leading-relaxed">
                                Check the flower tiers, look at the vapes, ask about edibles. Take your time — no rush.
                            </p>
                        </div>
                        <div className="border border-border bg-bg p-8 rounded-[5px]">
                            <span className="text-4xl font-heading text-accent/30 mb-4 block">03</span>
                            <h3 className="text-lg font-heading text-text mb-2">Talk to the Team</h3>
                            <p className="text-text-muted text-sm leading-relaxed">
                                Not sure what you want? Tell us what you&apos;re looking for and we&apos;ll point you in the right direction.
                            </p>
                        </div>
                        <div className="border border-border bg-bg p-8 rounded-[5px]">
                            <span className="text-4xl font-heading text-accent/30 mb-4 block">04</span>
                            <h3 className="text-lg font-heading text-text mb-2">Pay & Go</h3>
                            <p className="text-text-muted text-sm leading-relaxed">
                                Cash at the counter. Grab your bag and you&apos;re out. Simple as that.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tier System */}
            <section className="bg-bg border-b border-border">
                <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        <div>
                            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">
                                Pricing
                            </p>
                            <h2 className="text-3xl md:text-4xl font-heading text-text mb-6">
                                The Tier System
                            </h2>
                            <p className="text-text-muted leading-relaxed text-lg mb-4">
                                Our flower is organized by color-coded tiers — not strains, not brand names. The tier tells you the quality level and price range at a glance.
                            </p>
                            <p className="text-text-muted leading-relaxed">
                                Every tier has sativa, indica, and hybrid options. Start at green to try things out, or go straight to white if you know what you want.
                            </p>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center gap-4 bg-surface border border-border p-5 rounded-[5px]">
                                <span className="w-4 h-4 rounded-full bg-[#48bb78] border border-border/50 shrink-0" />
                                <div>
                                    <p className="text-sm font-heading text-text">Green Tier</p>
                                    <p className="text-xs text-text-muted">Solid quality, best value. Great starting point.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 bg-surface border border-border p-5 rounded-[5px]">
                                <span className="w-4 h-4 rounded-full bg-[#ecc94b] border border-border/50 shrink-0" />
                                <div>
                                    <p className="text-sm font-heading text-text">Yellow Tier</p>
                                    <p className="text-xs text-text-muted">Step up in quality. More flavor, stronger effects.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 bg-surface border border-border p-5 rounded-[5px]">
                                <span className="w-4 h-4 rounded-full bg-[#4299e1] border border-border/50 shrink-0" />
                                <div>
                                    <p className="text-sm font-heading text-text">Blue Tier</p>
                                    <p className="text-xs text-text-muted">Premium selection. Hand-picked, lab-tested.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 bg-surface border border-border p-5 rounded-[5px]">
                                <span className="w-4 h-4 rounded-full bg-[#ed64a6] border border-border/50 shrink-0" />
                                <div>
                                    <p className="text-sm font-heading text-text">Pink Tier</p>
                                    <p className="text-xs text-text-muted">Small-batch craft flower. Limited availability.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 bg-surface border border-border p-5 rounded-[5px]">
                                <span className="w-4 h-4 rounded-full bg-white border border-border/50 shrink-0" />
                                <div>
                                    <p className="text-sm font-heading text-text">White Tier</p>
                                    <p className="text-xs text-text-muted">The best we carry. When it&apos;s gone, it&apos;s gone.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dollar Dabs */}
            <section className="bg-dark border-b border-white/10">
                <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24 text-center">
                    <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">
                        The Fan Favorite
                    </p>
                    <h2 className="text-4xl md:text-5xl font-heading text-white mb-6">
                        Dollar Dabs
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
                        Spend $60 or more and you qualify for a dollar dab. That&apos;s a full dab hit for a single dollar. It&apos;s the best deal in the shop and people come back for it every time.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                        <div className="border border-white/10 bg-white/5 p-6 rounded-[5px]">
                            <p className="text-2xl font-heading text-white mb-1">$60+</p>
                            <p className="text-white/40 text-sm">Minimum purchase</p>
                        </div>
                        <div className="border border-white/10 bg-white/5 p-6 rounded-[5px]">
                            <p className="text-2xl font-heading text-white mb-1">$1</p>
                            <p className="text-white/40 text-sm">Per dab</p>
                        </div>
                        <div className="border border-white/10 bg-white/5 p-6 rounded-[5px]">
                            <p className="text-2xl font-heading text-white mb-1">Every Visit</p>
                            <p className="text-white/40 text-sm">No limit on frequency</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Loyalty / Rewards */}
            <section className="bg-surface border-b border-border">
                <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
                    <div className="max-w-3xl">
                        <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">
                            Keep Coming Back
                        </p>
                        <h2 className="text-3xl md:text-4xl font-heading text-text mb-6">
                            Loyalty Rewards
                        </h2>
                        <p className="text-text-muted text-lg leading-relaxed mb-8">
                            We track your visits and your spending. The more you come in, the more you save. Ask the team about your points balance anytime.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="border border-border bg-bg p-6 rounded-[5px]">
                                <p className="text-sm font-heading text-text mb-2">Points on Every Purchase</p>
                                <p className="text-text-muted text-sm leading-relaxed">
                                    Every dollar you spend earns points toward future discounts.
                                </p>
                            </div>
                            <div className="border border-border bg-bg p-6 rounded-[5px]">
                                <p className="text-sm font-heading text-text mb-2">Birthday Rewards</p>
                                <p className="text-text-muted text-sm leading-relaxed">
                                    Come in on your birthday for a special deal. Just bring your ID.
                                </p>
                            </div>
                            <div className="border border-border bg-bg p-6 rounded-[5px]">
                                <p className="text-sm font-heading text-text mb-2">Referral Bonuses</p>
                                <p className="text-text-muted text-sm leading-relaxed">
                                    Send a friend our way. When they mention your name, you both earn.
                                </p>
                            </div>
                            <div className="border border-border bg-bg p-6 rounded-[5px]">
                                <p className="text-sm font-heading text-text mb-2">Spin the Wheel</p>
                                <p className="text-text-muted text-sm leading-relaxed">
                                    First-time visitors get a spin for a chance at discounts, free merch, and more.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="bg-bg">
                <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24 text-center">
                    <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">
                        Ready?
                    </p>
                    <h2 className="text-3xl md:text-4xl font-heading text-text mb-4">
                        Come see what it&apos;s all about
                    </h2>
                    <p className="text-text-muted max-w-xl mx-auto mb-8 text-lg">
                        Open 24/7. Free parking. Friendly staff. Worst case, you leave with good weed.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/visit"
                            className="bg-primary text-bg px-8 py-3 text-sm tracking-[0.2em] uppercase hover:opacity-90 transition-opacity"
                        >
                            Get Directions
                        </Link>
                        <Link
                            href="/menu"
                            className="border border-border px-8 py-3 text-sm tracking-[0.2em] uppercase text-text hover:border-primary hover:text-primary transition-colors"
                        >
                            Browse the Menu
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}