'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import FireBlaze from '../FireBlaze'
import { getTodaysDeal } from '../../specials/data'

export function Hero() {
    const deal = getTodaysDeal()

    return (
        <section className="relative overflow-hidden border-b border-white/10 bg-dark min-h-[85vh] flex items-center">
            {/* Background Image */}

            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url(/images/weed-bg.jpg)' }}
            />
            <div className="absolute inset-0 bg-linear-to-r from-dark/85 via-dark/60 via-70% to-transparent" />

            {/* Content */}
            <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-8 md:py-18 z-10 w-full">
                <div className="max-w-3xl">
                    {/* Eyebrow */}
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xs tracking-[0.4em] uppercase text-accent mb-6"
                    >
                        Premium Cannabis · Akwesasne
                    </motion.p>

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-6xl md:text-8xl lg:text-9xl uppercase font-heading tracking-wide text-white leading-none mb-8"                    >
                        <span style={{ fontFamily: 'var(--font-playfair)' }}>World<br />Famous</span><br /><FireBlaze />
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="text-white/50 text-lg max-w-md mb-10"
                    >
                        Carefully curated cannabis from trusted growers. Open 24/7.
                    </motion.p>

                    {/* CTAs */}
                </div>

                {/* Right side — Badge + CTAs */}
                <div className="absolute bottom-12 right-8 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:right-12 lg:right-24 flex flex-col items-center gap-6">

                    {/* Badge rolls in */}
                    <motion.div
                        initial={{ opacity: 0, x: 300, rotate: 360 }}
                        animate={{ opacity: 1, x: 0, rotate: 0 }}
                        transition={{
                            duration: 1.2,
                            delay: 1.3,
                            ease: [0.25, 0.1, 0.25, 1],
                        }}
                    >
                        <Link
                            href="/specials"
                            className="group block"
                        >
                            <div className="w-32 h-32 md:w-64 md:h-64 rounded-full border-4 border-accent/60 bg-dark/80 backdrop-blur-sm flex flex-col items-center justify-center text-center hover:border-accent hover:scale-105 transition-all duration-300 shadow-2xl">
                                <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-accent font-heading mb-3 md:mb-6">
                                    Today's Deal
                                </p>
                                <p className="text-sm md:text-2xl font-heading text-white leading-tight px-4 md:px-6">
                                    {deal.discount}
                                </p>
                                <p className="text-xs md:text-sm text-white/30 mt-3 md:mt-6 group-hover:text-accent transition-colors">
                                    View deals →
                                </p>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Buttons slide up after badge lands */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 2.0, ease: [0.25, 0.1, 0.25, 1] }}
                        className="flex flex-col gap-3 w-full items-center"
                    >
                        <Link
                            href="/menu"
                            className="bg-primary text-bg px-10 py-4 text-sm tracking-[0.2em] uppercase hover:opacity-90 transition-opacity rounded-[5px] font-heading text-center w-48"
                        >
                            See Menu
                        </Link>
                        <Link
                            href="/visit"
                            className="border border-white/20 text-white px-10 py-4 text-sm tracking-[0.2em] uppercase hover:border-accent hover:text-accent transition-colors rounded-[5px] font-heading text-center w-48"
                        >
                            Get Directions
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}