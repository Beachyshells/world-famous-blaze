

export default function VisitPage() {
    return (
        <div className="min-h-screen">
            {/* Full-width Map Hero */}
            <div className="relative h-[50vh] md:h-[60vh] border-b border-border">
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

            {/* Big Statement Section */}
            <div className="bg-dark">
                <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 md:py-18">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                        <div className="text-center md:text-left flex gap-6 flex-col">
                            <h1 className="text-5xl md:text-6xl font-heading leading-tighter text-white mb-26 uppercase">
                                World Famous <span className="flex text-transparent bg-clip-text bg-linear-to-t from-[#ef4444] via-[#f97316] to-[#ffffff]">Blaze</span>
                            </h1>
                            <p className="text-md tracking-[0.3em] uppercase text-accent mb-4">
                                Always Open
                            </p>
                            <p className="text-7xl md:text-9xl font-heading text-white leading-none mb-4">
                                24/7
                            </p>
                            <p className="text-white/50 text-lg max-w-md">
                                No closing time. No last call. Walk in at 3 in the afternoon or 3 in the morning — we're here.
                            </p>
                        </div>
                        <div className="flex flex-col gap-6">
                            <a
                                href="tel:+15183581023"
                                className="border border-white/10 rounded-[5px] bg-white/10 p-8 hover:bg-white/20 transition-all duration-300 group block"
                            >
                                <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-[#96d47a] mb-4">
                                    Call Us
                                </h3>
                                <p className="text-3xl font-body group-hover:text-white text-primary transition-colors">
                                    (518) 358-1023
                                </p>
                                <p className="text-neutral-400 text-sm mt-2">Tap to call — we always pick up</p>
                            </a>
                            <div className="bg-white/10 border border-neutral-800 rounded-[5px] group block p-8 transition-all hover:bg-white/20">
                                <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-[#96d47a] mb-4">
                                    Visit Us
                                </h3>
                                <div className="space-y-1  cursor-pointer">
                                    <p className="text-3xl font-body text-primary group-hover:text-white transition-colors">
                                        2797 NY-95
                                    </p>
                                    <p className="text-neutral-400">
                                        Bombay, NY 12914
                                    </p>
                                </div>
                                <div className="mt-6 pt-6 border-t border-neutral-800">
                                    <span className="inline-flex items-center text-xs font-medium text-[#c7f708] bg-emerald-400/10 px-2.5 py-0.5 rounded-full">
                                        Free Parking Available
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* What to Expect */}
            <div className="bg-bg">
                <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28">
                    <div className="max-w-3xl">
                        <p className="text-sm tracking-[0.3em] uppercase text-accent mb-8">
                            First Time?
                        </p>
                        <h2 className="text-3xl md:text-4xl font-heading text-text mb-8">
                            Here's how it works
                        </h2>

                        <div className="space-y-8">
                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 flex items-center justify-center shrink-0">
                                    <span className="icon-image">
                                        <img src="/images/marijuana.png" alt="Marijuana Leaf Icon" className="w-5 h-5 inline-block" />
                                    </span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-heading text-text mb-2">Bring Your ID</h3>
                                    <p className="text-text-muted leading-relaxed">
                                        Valid government-issued ID required. You must be 21 or older to enter. No exceptions.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 flex items-center justify-center shrink-0">
                                    <span className="icon-image">
                                        <img src="/images/marijuana.png" alt="Marijuana Leaf Icon" className="w-5 h-5 inline-block" />
                                    </span>
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
                                    <span className="icon-image">
                                        <img src="/images/marijuana.png" alt="Marijuana Leaf Icon" className="w-5 h-5 inline-block" />
                                    </span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-heading text-text mb-2">Browse & Choose</h3>                                    <p className="text-text-muted leading-relaxed">
                                        Take your time. Check out the flower, ask about the tiers, see what's new. No pressure, no rushing.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 flex items-center justify-center shrink-0">
                                    <span className="icon-image">
                                        <img src="/images/marijuana.png" alt="Marijuana Leaf Icon" className="w-5 h-5 inline-block" />
                                    </span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-heading text-text mb-2">Come Back Anytime</h3>
                                    <p className="text-text-muted leading-relaxed">
                                        We're open 24/7 and we remember our regulars. First visit or fiftieth — you're always welcome.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}