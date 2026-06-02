export const VisitPreview = () => {
    return (
        <div className="min-h-screen">
            {/* Page Header */}
            <div className="bg-surface border-b border-border">
                <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
                    <p className="text-xs tracking-[0.3em] uppercase text-primary mb-2">
                        Find Us
                    </p>
                    <h1 className="text-4xl md:text-5xl mb-4">Visit</h1>
                    <p className="text-text-muted text-lg max-w-2xl">
                        Stop in anytime — we never close.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
                {/* Two Column: Info + Map */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                    {/* Left Column — Store Info */}
                    <div>
                        {/* Hours */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-heading mb-4 text-text">Hours</h2>
                            <p className="text-text-muted text-lg">
                                Open 24 hours, 7 days a week.
                            </p>
                        </div>

                        {/* Address */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-heading mb-4 text-text">Address</h2>
                            <p className="text-text-muted text-lg leading-relaxed">
                                2797 NY-95<br />
                                Bombay, NY 12914
                            </p>
                            <a
                                href="https://www.google.com/maps/dir//2797+NY-95+Bombay+NY+12914"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors mt-4"
                            >
                                <span className="text-sm tracking-wide">Get Directions</span>
                                <span>→</span>
                            </a>
                        </div>

                        {/* What to Expect */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-heading mb-4 text-text">What to Expect</h2>
                            <p className="text-text-muted leading-relaxed mb-3">
                                Bring a valid government-issued ID — you must be 21 or older to enter. Our staff is happy to help you find the right product for your needs.
                            </p>

                        </div>

                        {/* Contact */}
                        <div>
                            <h2 className="text-2xl font-heading mb-6 text-text">Contact</h2>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <span className="text-primary text-sm tracking-[0.2em] uppercase w-16 pt-1">Phone</span>
                                    <a href="tel:+15183581023" className="text-text hover:text-primary transition-colors text-lg">
                                        (518) 358-1023
                                    </a>
                                </div>

                                <div className="flex items-start gap-4">
                                    <span className="text-primary text-sm tracking-[0.2em] uppercase w-16 pt-1">Visit</span>
                                    <span className="text-text-muted text-lg leading-relaxed">
                                        Walk-ins welcome, no appointment needed. Must be 21+ with valid ID.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Right Column — Map */}
                    <div>
                        <div className="aspect-square lg:aspect-auto lg:h-full min-h-100 border border-border shadow-md overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800!2d-74.7346!3d44.9419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc5a6a3b3b3b3b%3A0x0!2s2797+NY-95%2C+Bombay%2C+NY+12914!5e0!3m2!1sen!2sus!4v1700000000000"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="World Famous Blaze Location"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}