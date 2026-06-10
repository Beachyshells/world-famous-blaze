'use client'

import { useRef, useEffect } from 'react'

export default function FireBlaze() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const videoRef = useRef<HTMLVideoElement>(null)
    const textRef = useRef<HTMLSpanElement>(null)
    const containerRef = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const video = videoRef.current
        const textEl = textRef.current
        const container = containerRef.current
        if (!canvas || !video || !textEl || !container) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        video.play().catch(() => { })

        let animationId: number

        const draw = () => {
            const rect = container.getBoundingClientRect()
            const dpr = window.devicePixelRatio || 1

            canvas.width = rect.width * dpr
            canvas.height = rect.height * dpr
            canvas.style.width = `${rect.width}px`
            canvas.style.height = `${rect.height}px`

            ctx.save()
            ctx.scale(dpr, dpr)

            // Read the actual rendered font from the invisible text span
            const textStyle = getComputedStyle(textEl)
            const font = `${textStyle.fontWeight} ${textStyle.fontSize} ${textStyle.fontFamily}`

            if (video.readyState >= 2) {
                // Draw text as mask
                ctx.font = font
                ctx.textAlign = 'center'
                ctx.textBaseline = 'middle'
                ctx.fillStyle = 'white'
                ctx.fillText('Blaze', rect.width / 2, rect.height / 2)

                // Clip video to text shape
                ctx.globalCompositeOperation = 'source-in'
                ctx.drawImage(video, 0, 0, rect.width, rect.height)
            }

            ctx.restore()
            animationId = requestAnimationFrame(draw)
        }

        if (video.readyState >= 2) {
            draw()
        } else {
            video.addEventListener('canplay', draw, { once: true })
        }

        return () => cancelAnimationFrame(animationId)
    }, [])

    return (
        <span ref={containerRef} className="relative inline-block" style={{ lineHeight: 1 }}>
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                src="/fire-3.mp4"
                className="absolute w-0 h-0 opacity-0"
            />

            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-20 pointer-events-none mt-3"
            />

            {/* This controls the size — style it however you want */}
            <span ref={textRef} className="invisible font-heading font-bold text-7xl">
                Blaze
            </span>
        </span>
    )
}