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

                {/* Info Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                    <div className="bg-surface rounded-[5px] border border-border p-6 shadow-md hover:shadow-lg transition-all duration-300">
                        <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">
                            Hours
                        </p>
                        <p className="text-text text-xl font-heading mb-1">
                            24/7
                        </p>
                        <p className="text-text-muted text-sm">
                            We never close
                        </p>
                    </div>
                    <div className="bg-surface rounded-[5px] border border-border p-6 shadow-md hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center gap-4">
                            <div className="flex-1">
                                <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">
                                    Address
                                </p>
                                <p className="text-text text-xl font-heading mb-1">
                                    2797 NY-95
                                </p>
                                <p className="text-text-muted text-sm">
                                    Bombay, NY 12914
                                </p>
                            </div>
                            <a
                                href="https://www.google.com/maps/dir//2797+NY-95+Bombay+NY+12914"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-24 h-24 border border-border overflow-hidden shrink-0 hover:border-primary transition-colors"
                            >
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800!2d-74.7346!3d44.9419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc5a6a3b3b3b3b%3A0x0!2s2797+NY-95%2C+Bombay%2C+NY+12914!5e0!3m2!1sen!2sus!4v1700000000000"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, pointerEvents: 'none' }}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="World Famous Blaze Location"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="bg-surface rounded-[5px] border border-border p-6 shadow-md hover:shadow-lg transition-all duration-300">
                        <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">
                            Phone
                        </p>
                        <a href="tel:+15183581023" className="text-text text-xl font-heading hover:text-primary transition-colors block mb-1">
                            (518) 358-1023
                        </a>
                        <p className="text-text-muted text-sm">
                            Call or text anytime
                        </p>
                    </div>
                </div>

                {/* CTA */}
                <Link
                    href="/visit"
                    className="group inline-flex items-center gap-3 text-text hover:text-primary transition-colors"
                >
                    <span className="text-sm tracking-wide">Get Directions & More Info</span>
                    <span className="text-xl transition-transform group-hover:translate-x-1">
                        →
                    </span>
                </Link>
            </div>
        </section>
    )
}