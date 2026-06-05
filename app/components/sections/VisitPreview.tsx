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
                        <div className="w-32 h-32 mx-auto overflow-hidden opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800!2d-74.7346!3d44.9419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc5a6a3b3b3b3b%3A0x0!2s2797+NY-95%2C+Bombay%2C+NY+12914!5e0!3m2!1sen!2sus!4v1700000000000" className="w-full h-full border-0 pointer-events-none" />
                        </div>
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