import Link from 'next/link'

export function VisitPreview() {
    return (
        <section className="bg-bg border-b border-border">
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left: Content */}
                    <div>
                        <p className="text-xs tracking-[0.4em] uppercase text-primary mb-3">
                            Find Us
                        </p>
                        <h2 className="text-4xl md:text-5xl text-text mb-6">
                            Stop By
                        </h2>
                        <p className="text-text-muted leading-relaxed mb-8">
                            We're open seven days a week. Walk in, take your time, ask questions.
                            We're here to help you find exactly what you're looking for.
                        </p>

                        {/* Quick info */}
                        <div className="space-y-4 mb-8">
                            <div className="border-l-2 border-primary pl-4">
                                <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-1">Hours</p>
                                <p className="text-text">Mon–Sun: open 24 hours</p>

                            </div>

                            <div className="border-l-2 border-primary pl-4">
                                <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-1">Location</p>
                                <p className="text-text">2797 NY-95</p>
                                <p className="text-text">Bombay, NY 12914</p>
                            </div>
                        </div>

                        <Link
                            href="/visit"
                            className="group inline-flex items-center gap-3 text-text hover:text-primary transition-colors"
                        >
                            <span className="tracking-wide">Plan Your Visit</span>
                            <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
                        </Link>
                    </div>

                    {/* Right: Map placeholder */}
                    <div className="aspect-4/3 bg-surface border border-border flex items-center justify-center">
                        <div className="text-center">
                            <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-2">
                                Map Goes Here
                            </p>
                            <p className="text-sm text-text-muted">
                                Embed Google Maps or custom illustration
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}