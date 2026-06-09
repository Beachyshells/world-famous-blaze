'use client'

import Lottie from 'lottie-react'
import flameAnimation from '../../public/images/flame.json'

export default function FireBlaze() {
    return (
        <span className="relative isolate inline-flex items-center justify-center">
            {/* Flame behind */}
            <span className="absolute -top-12 md:-top-20 left-0 right-0 h-24 md:h-40 pointer-events-none overflow-hidden z-[-1]"
                style={{
                    maskImage: 'linear-gradient(to bottom, white 40%, transparent 100%), linear-gradient(to right, transparent 0%, white 15%, white 85%, transparent 100%)',
                    maskComposite: 'intersect',
                    WebkitMaskImage: 'linear-gradient(to bottom, white 40%, transparent 100%), linear-gradient(to right, transparent 0%, white 15%, white 85%, transparent 100%)',
                    WebkitMaskComposite: 'source-in',
                }}
            >
                <Lottie
                    animationData={flameAnimation}
                    loop
                    autoplay
                    style={{ width: '100%', height: '100%' }}
                />
            </span>

            {/* Gradient text with animated glow */}
            <span
                style={{ fontFamily: 'var(--font-playfair)' }}
                className="relative text-transparent bg-clip-text bg-linear-to-t from-red-500 via-orange-400 to-yellow-200 animate-fire-glow"
            >
                Blaze
            </span>
        </span>
    )
}