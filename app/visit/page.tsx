'use client'

import Link from 'next/link'
import Lottie from 'lottie-react'
import flameAnimation from '../../public/images/flame.json'


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
                <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-heading text-white mb-6 uppercase">
                                World Famous <span className="text-transparent bg-clip-text bg-linear-to-t from-[#ef4444] via-[#f97316] to-[#ffffff]">Blaze</span>
                            </h1>
                            <p className="text-xs tracking-[0.3em] uppercase text-[#d4ab7a] mb-4">
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
                                className="border border-white/10 bg-white/5 p-8 hover:bg-white/10 transition-all duration-300 group block"
                            >
                                <p className="text-xs tracking-[0.3em] uppercase text-[#d4ab7a] mb-3">Call Us</p>
                                <p className="text-3xl font-heading text-white group-hover:text-[#9aab8c] transition-colors">
                                    (518) 358-1023
                                </p>
                                <p className="text-white/40 text-sm mt-2">Tap to call — we always pick up</p>
                            </a>
                            <div className="border border-white/10 bg-white/5 p-8">
                                <p className="text-xs tracking-[0.3em] uppercase text-[#d4ab7a] mb-3">Location</p>
                                <p className="text-xl font-heading text-white mb-1">2797 NY-95</p>
                                <p className="text-white/40">Bombay, NY 12914</p>
                                <p className="text-white/40 text-sm mt-2">Free parking on-site</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* What to Expect */}
            <div className="bg-surface">
                <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28">
                    <div className="max-w-3xl">
                        <p className="text-xs tracking-[0.3em] uppercase text-accent mb-8">
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
                                    <h3 className="text-lg text-text mb-2">Browse & Choose</h3>
                                    <p className="text-text-muted leading-relaxed">
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