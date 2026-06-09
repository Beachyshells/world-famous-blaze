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
            <div className="relative max-w-7xl leading-tight mx-auto px-6 md:px-8 py-15 md:py-18 z-10 w-full">

                {/* Desktop layout */}
                <div className="hidden md:block">
                    <div className="max-w-3xl">
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xs tracking-[0.4em] uppercase text-accent mb-6"
                        >
                            Premium Cannabis · Akwesasne
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-8xl lg:text-9xl uppercase font-heading tracking-wide text-white leading-none mb-8"
                        >
                            World<br />Famous<br /><FireBlaze />
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="text-white/50 text-lg max-w-md mb-10"
                        >
                            Carefully curated cannabis from trusted growers. Open 24/7.
                        </motion.p>
                    </div>

                    {/* Badge + Buttons — absolute right */}
                    <div className="absolute top-1/2 -translate-y-1/2 right-12 lg:right-24 flex flex-col items-center gap-6">
                        <motion.div
                            initial={{ opacity: 0, x: 300, rotate: 360 }}
                            animate={{ opacity: 1, x: 0, rotate: 0 }}
                            transition={{ duration: 1.2, delay: 1.3, ease: [0.25, 0.1, 0.25, 1] }}
                        >
                            <Link href="/specials" className="group block">
                                <div className="w-64 h-64 rounded-full border-2 border-accent/40 bg-dark/80 backdrop-blur-sm flex flex-col items-center justify-center text-center hover:border-accent hover:scale-105 transition-all duration-300 shadow-2xl">
                                    <p className="text-xs tracking-[0.3em] uppercase text-accent font-heading mb-2">
                                        Today&apos;s Deal
                                    </p>
                                    <p className="text-2xl font-heading text-white leading-tight px-6">
                                        {deal.discount}
                                    </p>
                                    <p className="text-sm text-white/30 mt-3 group-hover:text-accent transition-colors">
                                        View deals →
                                    </p>
                                </div>
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 2.0, ease: [0.25, 0.1, 0.25, 1] }}
                            className="flex flex-col gap-3 items-center"
                        >
                            <Link href="/menu" className="bg-primary text-bg px-10 py-4 text-sm tracking-[0.2em] uppercase hover:opacity-90 transition-opacity rounded-[5px] font-heading text-center w-48">
                                See Menu
                            </Link>
                            <Link href="/visit" className="border border-white/20 text-white px-10 py-4 text-sm tracking-[0.2em] uppercase hover:border-accent hover:text-accent transition-colors rounded-[5px] font-heading text-center w-48">
                                Get Directions
                            </Link>
                        </motion.div>
                    </div>
                </div>

                {/* Mobile layout — stacks naturally */}
                <div className="md:hidden flex flex-col items-center text-center gap-8">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xs tracking-[0.4em] uppercase text-accent"
                    >
                        Premium Cannabis · Akwesasne
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-5xl uppercase font-heading tracking-wide text-white"
                    >
                        World<br />Famous<br /><FireBlaze />
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="text-white/50 text-base max-w-xs"
                    >
                        Carefully curated cannabis from trusted growers. Open 24/7.
                    </motion.p>

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 1.3, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                        <Link href="/specials" className="group block">
                            <div className="w-40 h-40 rounded-full border-2 border-accent/40 bg-dark/80 backdrop-blur-sm flex flex-col items-center justify-center text-center hover:border-accent hover:scale-105 transition-all duration-300 shadow-2xl">
                                <p className="text-[10px] tracking-[0.3em] uppercase text-accent font-heading mb-1">
                                    Today&apos;s Deal
                                </p>
                                <p className="text-sm font-heading text-white leading-tight px-4">
                                    {deal.discount}
                                </p>
                                <p className="text-[9px] text-white/30 mt-1 group-hover:text-accent transition-colors">
                                    View deals →
                                </p>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.8, ease: [0.25, 0.1, 0.25, 1] }}
                        className="flex flex-col gap-3 w-full max-w-xs"
                    >
                        <Link href="/menu" className="bg-primary text-bg px-8 py-4 text-sm tracking-[0.2em] uppercase hover:opacity-90 transition-opacity rounded-[5px] font-heading text-center">
                            See Menu
                        </Link>
                        <Link href="/visit" className="border border-white/20 text-white px-8 py-4 text-sm tracking-[0.2em] uppercase hover:border-accent hover:text-accent transition-colors rounded-[5px] font-heading text-center">
                            Get Directions
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}