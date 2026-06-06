'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Lottie from 'lottie-react'
import { getTodaysDeal } from '../specials/data'

export default function HeroDealCard() {
    const deal = getTodaysDeal()
    const [pulseData, setPulseData] = useState(null)

    useEffect(() => {
        fetch('/images/pulse.json')
            .then((res) => res.json())
            .then((data) => setPulseData(data))
    }, [])

    return (
        <Link
            href="/specials"
            className="relative overflow-hidden border border-white/10 rounded-[5px] p-8 hover:border-accent/30 transition-all duration-300 group block"
        >
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/weed-bg.jpg')" }}
            />
            <div className="absolute inset-0 bg-dark/70" />

            <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                        {pulseData && (
                            <div className="w-6 h-6 mix-blend-screen">
                                <Lottie animationData={pulseData} loop={true} autoplay={true} />
                            </div>
                        )}
                        <span className="text-xs tracking-[0.3em] uppercase text-accent font-heading">
                            Today&apos;s Deal
                        </span>
                    </div>
                    <span className="text-xs text-white/30 group-hover:text-accent transition-colors">
                        View all specials →
                    </span>
                </div>

                <p className="text-xs tracking-[0.2em] uppercase text-white/30 mb-1">
                    {deal.day}
                </p>
                <h2 className="text-2xl md:text-3xl font-heading text-white mb-3 group-hover:text-accent transition-colors">
                    {deal.title}
                </h2>
                <p className="text-xl md:text-2xl font-heading text-accent mb-4">
                    {deal.discount}
                </p>
                <p className="text-sm text-white/40 leading-relaxed">
                    {deal.description}
                </p>
            </div>
        </Link>
    )
}