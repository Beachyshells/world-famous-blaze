'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Lottie from 'lottie-react'
import { getTodaysDeal } from '../specials/data'

export default function DailyDealBanner() {
    const deal = getTodaysDeal()
    const [animationData, setAnimationData] = useState(null)

    useEffect(() => {
        // Since the file is in public/images/pulse.json
        fetch('/images/pulse.json')
            .then((res) => res.json())
            .then((data) => setAnimationData(data))
    }, [])

    return (
        <Link
            href="/specials"
            className="block bg-dark border-b border-white/10 group rounded-[5px] mx-4 sm:mx-6 lg:mx-8 mb-8 overflow-hidden hover:bg-dark/90 transition-colors"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        {/* Only render Lottie when data is fetched */}
                        {animationData && (
                            <div className="w-10 h-10 flex items-center justify-center mix-blend-screen">
                                <Lottie
                                    animationData={animationData}
                                    loop={true}
                                    autoplay={true}
                                />
                            </div>
                        )}

                        <div>
                            <div className="flex items-center gap-3">
                                <p className="text-sm font-heading text-white">
                                    {deal.title}
                                </p>
                                <span className="bg-accent/20 text-accent text-xs font-medium px-3 py-0.5 rounded-full">
                                    Today&apos;s Deal
                                </span>
                            </div>
                            <p className="text-lg font-heading text-accent">
                                {deal.discount}
                            </p>
                        </div>
                    </div>
                    <span className="text-white/40 text-sm group-hover:text-primary transition-colors hidden sm:block">
                        View all specials →
                    </span>
                </div>
            </div>
        </Link>
    )
}