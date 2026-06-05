'use client'

import Lottie from 'lottie-react'
import flameAnimation from '../../public/images/flame.json'

export default function FireBlaze() {
    return (
        <span className="relative isolate inline-flex items-center justify-center">
            {/* Flame behind */}
            <span className="absolute inset-0 -top-28 bottom-2.5 pointer-events-none opacity-80 overflow-hidden"
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
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </span>

            {/* Gradient text with animated glow */}
            <span
                className="relative text-transparent bg-clip-text bg-linear-to-t from-red-500 via-orange-400 to-yellow-200 animate-fire-glow"
            >
                Blaze
            </span>
        </span>
    )
}