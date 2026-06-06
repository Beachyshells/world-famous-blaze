'use client'

import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import { PromoFeature } from '../../specials/data'

export default function PromoCard({
    title,
    discount,
    features = [],
    isLive,
    pulseData
}: {
    title: string,
    discount: string,
    features: PromoFeature[],
    isLive: boolean,
    pulseData: any
}) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            // Using standard background syntax to avoid deprecation warnings
            className="relative border border-white/10 bg-linear-to-b from-white/5 to-transparent p-10 md:p-16 text-center"
        >
            <div className="absolute inset-0 bg-[url('/images/weed-bg.jpg')] bg-cover bg-center opacity-10" />

            <div className="relative z-10">
                {isLive && pulseData && (
                    <div className="w-10 h-10 mx-auto mb-8 mix-blend-screen">
                        <Lottie animationData={pulseData} loop={true} autoplay={true} />
                    </div>
                )}

                <h2 className="text-5xl md:text-6xl font-heading uppercase tracking-tighter mb-8 leading-none">
                    {title}
                </h2>

                <div className="inline-block border-2 border-accent px-8 py-4 mb-10">
                    <span className="text-accent text-3xl font-heading tracking-widest uppercase">
                        {discount}
                    </span>
                </div>

                <ul className="space-y-4 text-white/70 text-sm uppercase tracking-[0.2em] mb-12">
                    {features.map((feature, idx) => (
                        <li key={idx} className="border-b border-white/5 pb-3">
                            {feature.slug ? (
                                <a
                                    href={`/menu/vapes/${feature.slug}`}
                                    className="block hover:text-accent transition-colors cursor-pointer relative z-20"
                                >
                                    {feature.text}
                                </a>
                            ) : (
                                <span className="block">{feature.text}</span>
                            )}
                        </li>
                    ))}
                </ul>

                <button className="w-full bg-white text-black py-4 font-bold uppercase tracking-[0.3em] text-xs hover:bg-accent transition-colors">
                    Shop Today
                </button>
            </div>
        </motion.div>
    )
}