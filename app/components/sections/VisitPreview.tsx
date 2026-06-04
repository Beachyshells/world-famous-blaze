import Link from 'next/link'

export function VisitPreview() {
    return (
        <section className="bg-bg border-b border-border">
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28">

                {/* Header */}
                <div className="mb-12 md:mb-16">
                    <p className="text-xs tracking-[0.4em] uppercase text-primary mb-3">
                        Find Us
                    </p>
                    <h2 className="text-4xl md:text-5xl font-heading text-text mb-4">
                        Visit the Shop
                    </h2>
                    <p className="text-text-muted max-w-2xl">
                        Open 24 hours, 7 days a week. Walk-ins welcome.
                    </p>
                </div>

                {/* Quick Info */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
                    <div>
                        <p className="text-xs tracking-[0.3em] uppercase text-primary mb-2">Hours</p>
                        <p className="text-text text-lg">24/7 — We never close</p>
                    </div>
                    <div>
                        <p className="text-xs tracking-[0.3em] uppercase text-primary mb-2">Address</p>
                        <p className="text-text text-lg">
                            2797 NY-95<br />
                            Bombay, NY 12914
                        </p>
                    </div>
                    <div>
                        <p className="text-xs tracking-[0.3em] uppercase text-primary mb-2">Phone</p>
                        <a href="tel:+15183581023" className="text-text hover:text-primary transition-colors text-lg">
                            (518) 358-1023
                        </a>
                    </div>
                </div>

                {/* CTA */}
                <Link
                    href="/visit"
                    className="group inline-flex items-center gap-3 text-text hover:text-primary transition-colors"
                >
                    <span className="text-sm tracking-wide">Get Directions & More Info</span>
                    <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
                </Link>
            </div>
        </section>
    )
}