'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ThemeToggle } from './ThemeToggle'

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Menu' },
    { href: '/visit', label: 'Visit' },
    { href: '/about', label: 'About' },
    { href: '/learn', label: 'Learn' },
    { href: '/contact', label: 'Contact' },
]

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-40 bg-surface/95 backdrop-blur-sm border-b border-border">
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex items-center justify-between">

                {/* Logo / Site name */}
                <Link
                    href="/"
                    className="text-xl md:text-2xl font-semibold tracking-tight text-text hover:text-primary transition-colors"
                >
                    World-Famous-Blaze
                </Link>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm tracking-wide text-text-muted hover:text-primary transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <ThemeToggle />
                </nav>

                {/* Mobile hamburger */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-text transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-text transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-text transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <nav className="md:hidden bg-surface border-t border-border">
                    <div className="flex flex-col px-6 py-4 gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className="text-text-muted hover:text-primary transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="pt-2">
                            <ThemeToggle />
                        </div>
                    </div>
                </nav>
            )}
        </header>
    )
}