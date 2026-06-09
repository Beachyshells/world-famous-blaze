'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

type AnimationType = 'fade-up' | 'fade-down' | 'slide-left' | 'slide-right' | 'pop' | 'blur-in'

const hidden: Record<AnimationType, Record<string, number | string>> = {
    'fade-up': { opacity: 0, y: 40 },
    'fade-down': { opacity: 0, y: -40 },
    'slide-left': { opacity: 0, x: -60 },
    'slide-right': { opacity: 0, x: 60 },
    'pop': { opacity: 0, scale: 0.85 },
    'blur-in': { opacity: 0, filter: 'blur(10px)' },
}

const visible: Record<AnimationType, Record<string, number | string>> = {
    'fade-up': { opacity: 1, y: 0 },
    'fade-down': { opacity: 1, y: 0 },
    'slide-left': { opacity: 1, x: 0 },
    'slide-right': { opacity: 1, x: 0 },
    'pop': { opacity: 1, scale: 1 },
    'blur-in': { opacity: 1, filter: 'blur(0px)' },
}

export default function Reveal({
    children,
    animation = 'fade-up',
    delay = 0,
    duration = 0.6,
    className = '',
}: {
    children: React.ReactNode
    animation?: AnimationType
    delay?: number
    duration?: number
    className?: string
}) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <motion.div
            ref={ref}
            initial={hidden[animation]}
            animate={isInView ? visible[animation] : hidden[animation]}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.1, 0.25, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}