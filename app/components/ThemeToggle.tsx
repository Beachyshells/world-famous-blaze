'use client'

import { useEffect, useState } from 'react'

export function ThemeToggle() {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        const saved = localStorage.getItem('theme')
        const prefersDark = saved === 'dark'
        setIsDark(prefersDark)
        document.documentElement.classList.toggle('dark', prefersDark)
    }, [])

    const handleToggle = () => {
        const next = !isDark
        setIsDark(next)
        document.documentElement.classList.toggle('dark', next)
        localStorage.setItem('theme', next ? 'dark' : 'light')
    }

    return (
        <button
            onClick={handleToggle}
            className="fixed top-4 right-4 z-50 px-4 py-2 bg-surface border border-border rounded text-text hover:bg-primary hover:text-bg transition-colors"
            aria-label="Toggle dark mode"
        >
            {isDark ? '☀️ Light' : '🌙 Dark'}
        </button>
    )
}