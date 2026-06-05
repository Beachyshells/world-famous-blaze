import type { Metadata } from 'next'
import FireBlaze from '../components/FireBlaze'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Visit | World Famous Blaze',
    description: 'Open 24/7. Find directions, hours, and what to expect at World Famous Blaze dispensary in Bombay, NY.',
}

export default function VisitPage() {
    return (
        <div className="min-h-screen">

            {/* 1. Hero — swap placeholder bg for a real photo later */}
            <section className="relative overflow-hidden border-b border-border">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url(/images/hero-background.jpg)' }}
                />
                <div className="absolute inset-0 bg-linear-to-r from-dark/90 via-dark/50 to-transparent" />
                <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28 z-10">
                    <p className="text-xs tracking-[0.3em] uppercase text-accent mb-2">
                        Come See Us
                    </p>
                    <h1 className="text-5xl md:text-6xl font-heading tracking-wide text-white mb-4">
                        Visit
                    </h1>
                    <p className="text-white/70 text-lg max-w-2xl">
                        Open every day, every hour. Walk in whenever you're ready.
                    </p>
                </div>
            </section>

            {/* 2. Brand Statement — the personality section */}
            <section className="bg-dark border-b border-white/10">
                <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28 text-center">
                    <h2 className="text-5xl md:text-7xl font-heading leading-tight text-white uppercase mb-8">
                        World Famous <FireBlaze />
                    </h2>
                    <p className="text-md tracking-[0.3em] uppercase text-accent mb-6">
                        Always Open
                    </p>
                    <p className="text-7xl md:text-9xl font-heading text-white leading-none mb-6">
                        24/7
                    </p>
                    <p className="text-white/50 text-lg max-w-lg mx-auto">
                        No closing time. No last call. Walk in at 3 in the afternoon or 3 in the morning — we're here.
                    </p>
                </div>
            </section>

            {/* 3. Contact Cards */}
            <section className="bg-bg border-b border-border">
                <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {/* Call */}
                        <a
                            href="tel:+15183581023"
                            className="border border-border rounded-[5px] bg-surface p-8 hover:border-primary transition-all duration-300 group block"
                        >
                            <p className="text-xs font-heading tracking-[0.2em] uppercase text-accent mb-4">
                                Call Us
                            </p>
                            <p className="text-2xl font-heading text-text group-hover:text-primary transition-colors">
                                (518) 358-1023
                            </p>
                            <p className="text-text-muted text-sm mt-2">
                                Tap to call — we always pick up
                            </p>
                        </a>

                        {/* Address */}
                        <div className="border border-border rounded-[5px] bg-surface p-8 group">
                            <p className="text-xs font-heading tracking-[0.2em] uppercase text-accent mb-4">
                                Find Us
                            </p>
                            <p className="text-2xl font-heading text-text">
                                2797 NY-95
                            </p>
                            <p className="text-text-muted mt-1">
                                Bombay, NY 12914
                            </p>
                        </div>

                        {/* Parking */}
                        <div className="border border-border rounded-[5px] bg-surface p-8">
                            <p className="text-xs font-heading tracking-[0.2em] uppercase text-accent mb-4">
                                When You Arrive
                            </p>
                            <p className="text-text leading-relaxed">
                                Free parking right out front. Walk in, check in, and we'll take it from there.
                            </p>
                            <span className="inline-flex items-center text-xs font-medium text-accent bg-accent/10 px-2.5 py-0.5 rounded-full mt-4">
                                Free Parking Available
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. What to Expect */}
            < section className="bg-surface border-b border-border" >
                <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28">
                    <div className="max-w-3xl">
                        <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">
                            First Time?
                        </p>
                        <h2 className="text-3xl md:text-4xl font-heading text-text mb-12">
                            Here's how it works
                        </h2>

                        <div className="space-y-10">
                            <div className="flex gap-6 items-start">
                                <div className="w-10 h-10 flex items-center justify-center shrink-0 ">
                                    <div className="w-12 h-12 flex items-center justify-center shrink-0">
                                        <img src="/images/marijuana.png" alt="" className="w-5 h-5" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-heading text-text mb-2">Bring Your ID</h3>
                                    <p className="text-text-muted leading-relaxed">
                                        Valid government-issued ID required. You must be 21 or older to enter. No exceptions.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start">
                                <div className="w-10 h-10 flex items-center justify-center shrink-0">
                                    <div className="w-12 h-12 flex items-center justify-center shrink-0">
                                        <img src="/images/marijuana.png" alt="" className="w-5 h-5" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-heading text-text mb-2">Talk to the Team</h3>
                                    <p className="text-text-muted leading-relaxed">
                                        Not sure what you want? No problem. Our staff knows the menu inside and out and will walk you through everything at your pace.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 flex items-center justify-center shrink-0">
                                    <img src="/images/marijuana.png" alt="" className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-heading text-text mb-2">Browse & Choose</h3>
                                    <p className="text-text-muted leading-relaxed">
                                        Take your time. Check out the flower, ask about the tiers, see what&apos;s new. No pressure, no rushing.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 flex items-center justify-center shrink-0">
                                    <img src="/images/marijuana.png" alt="" className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-heading text-text mb-2">Come Back Anytime</h3>
                                    <p className="text-text-muted leading-relaxed">
                                        We&apos;re open 24/7 and we remember our regulars. First visit or fiftieth — you&apos;re always welcome.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 mt-4 border-t border-border">
                            <Link
                                href="/visit/first-visit"
                                className="group inline-flex items-center gap-3 text-text hover:text-primary transition-colors"
                            >
                                <span className="text-sm tracking-wide">Read the full first visit guide — Dollar Dabs, loyalty rewards, and more</span>
                                <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Map — utility, not the hero */}
            <section className="border-b border-border">
                <div className="relative h-[40vh] md:h-[50vh]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800!2d-74.7346!3d44.9419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc5a6a3b3b3b3b%3A0x0!2s2797+NY-95%2C+Bombay%2C+NY+12914!5e0!3m2!1sen!2sus!4v1700000000000"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="World Famous Blaze Location"
                        className="absolute inset-0"
                    />
                </div>
            </section>
        </div>
    )
}