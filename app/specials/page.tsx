'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Lottie from 'lottie-react'
import { weeklyDeals } from './data'

export default function SpecialsPage() {
    const dayIndex = new Date().getDay()
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const [activeDay, setActiveDay] = useState(days[dayIndex])
    const [pulseData, setPulseData] = useState(null)

    useEffect(() => {
        fetch('/images/pulse.json')
            .then((res) => res.json())
            .then((data) => setPulseData(data))
    }, [])

    const activeDeal = weeklyDeals.find((d) => d.day === activeDay)

    return (
        <main className="min-h-screen bg-black text-white py-12 px-6">
            <div className="max-w-2xl mx-auto">
                {/* Logo Space */}
                <div className="mb-16 text-center">
                    <div className="text-[10px] tracking-[0.4em] uppercase text-white/40 mb-4">World Famous Blaze</div>
                    <h1 className="text-4xl font-heading tracking-tight uppercase border-y border-white/10 py-6">Daily Specials</h1>
                </div>

                {/* Tab Navigation */}
                <div className="flex justify-center gap-1 mb-12">
                    {days.map((day) => (
                        <button
                            key={day}
                            onClick={() => setActiveDay(day)}
                            className={`px-3 py-1 text-[9px] uppercase tracking-[0.2em] transition-all ${activeDay === day ? 'text-accent border-b border-accent' : 'text-white/30 hover:text-white'
                                }`}
                        >
                            {day.slice(0, 3)}
                        </button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeDay}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        className="relative border border-white/10 rounded-[5px] bg-linear-to-b from-white/5 to-transparent p-10 md:p-16 text-center"
                    >
                        <div className="absolute inset-0 bg-[url('/images/weed-bg.jpg')] bg-cover bg-center opacity-50" />

                        <div className="relative z-30">
                            {activeDay === days[dayIndex] && pulseData && (
                                <div className="w-10 h-10 mx-auto mb-8 mix-blend-screen">
                                    <Lottie animationData={pulseData} loop={true} autoplay={true} />
                                </div>
                            )}

                            <h2 className="text-5xl md:text-6xl font-heading uppercase tracking-tighter mb-8 leading-none">
                                {activeDeal?.title}
                            </h2>

                            <div className="inline-block border-2 border-accent rounded-med px-8 py-4 mb-10">
                                <span className="text-accent text-3xl font-heading tracking-widest uppercase">
                                    {activeDeal?.discount}
                                </span>
                            </div>

                            {/* THIS IS WHERE THE 6 LINES APPEAR */}
                            <ul className="space-y-4 text-white/70 text-sm uppercase tracking-[0.2em] mb-12">
                                {activeDeal?.promoFeatures?.map((feature, idx) => (
                                    <li key={idx} className="border-b border-white/5 pb-3">
                                        {/* Now feature.slug and feature.text are recognized! */}
                                        {idx === 1 ? (
                                            <a href={`/menu/vapes/${feature.slug}`} className="hover:text-accent transition-colors">
                                                {feature.text}
                                            </a>
                                        ) : (
                                            <span>{feature.text}</span>
                                        )}
                                    </li>
                                ))}
                            </ul>

                            <button className="w-full bg-white text-black py-4 font-bold uppercase tracking-[0.3em] text-xs hover:bg-accent transition-colors">
                                Shop Today
                            </button>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </main>
    )
}