import Link from 'next/link'

export function StoryPreview() {
    return (
        <section className="bg-surface border-b border-border">
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28">

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">

                    {/* Left: Eyebrow + Title */}
                    <div className="md:col-span-5">
                        <p className="text-xs tracking-[0.4em] uppercase text-primary mb-3">
                            About
                        </p>
                        <h2 className="text-4xl md:text-5xl text-text leading-[1.1]">
                            Built in the Community
                        </h2>
                    </div>

                    {/* Right: Story + CTA */}
                    <div className="md:col-span-7 md:pt-2">
                        <p className="text-lg text-text leading-relaxed mb-6">
                            Cannabis isn't new to this land — but the way it's being served now is.
                            We're proud to be part of a generation building something authentic,
                            regulated, and rooted in the people who've always called this place home.
                        </p>
                        <p className="text-text-muted leading-relaxed mb-10">
                            Every product on our shelves is chosen with care. Every conversation
                            we have with a customer is grounded in respect. This isn't a chain.
                            This is a neighborhood shop run by neighbors.
                        </p>

                        <Link
                            href="/about"
                            className="group inline-flex items-center gap-3 text-text hover:text-primary transition-colors"
                        >
                            <span className="tracking-wide">Read More</span>
                            <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    )
}