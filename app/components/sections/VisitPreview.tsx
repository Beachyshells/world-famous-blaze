'use client'
import Link from 'next/link'
//import { s } from '../../sanity.config'//

export function VisitPreview() {
    return (
        <section className="bg-bg border-b border-border/50">
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-24">

                {/* Header */}
                <div className="text-center mb-20">
                    <p className="text-sm tracking-[0.4em] uppercase text-accent mb-4">Find Us</p>
                    <h2 className="text-5xl md:text-6xl font-heading text-text mb-6">Visit the Shop</h2>
                    <p className="text-text-muted tracking-wide">Open 24 hours, 7 days a week. Walk-ins welcome.</p>
                </div>

                {/* Info Grid*/}
                <div className="grid md:grid-cols-3 gap-12 border-t border-border/30 pt-16">

                    {/* Hours */}
                    <div className="text-center">
                        <p className="text-[10px] tracking-[0.4em] uppercase text-accent mb-4">Hours</p>
                        <p className="text-2xl font-heading mb-2">24 / 7</p>
                        <p className="text-text-muted text-sm italic">We never close</p>
                    </div>

                    {/* Address */}
                    <div className="text-center">
                        <p className="text-xs tracking-[0.4em] uppercase text-accent mb-4">Address</p>
                        <p className="text-2xl font-heading mb-4">2797 NY-95</p>

                    </div>

                    {/* Phone */}
                    <div className="text-center">
                        <p className="text-xs tracking-[0.4em] uppercase text-accent mb-4">Phone</p>
                        <a href="tel:+15183581023" className="text-2xl font-heading block mb-2 hover:text-accent transition-colors">
                            (518) 358-1023
                        </a>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-20 text-center">
                    <Link href="/visit" className="inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase hover:text-accent transition-colors">
                        Get Directions & More Info <span className="text-xl">→</span>
                    </Link>
                </div>
            </div>
        </section>
    )
}