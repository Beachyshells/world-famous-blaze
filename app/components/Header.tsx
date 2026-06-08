'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ThemeToggle } from './ThemeToggle'
import BagIcon from './BagIcon'

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/specials', label: 'Specials' },
    { href: '/menu', label: 'Menu' },
    { href: '/merchandise', label: 'Merch' },
    { href: '/visit', label: 'Visit' },
    { href: '/about', label: 'About' },
    { href: '/learn', label: 'Learn' },
    { href: '/contact', label: 'Contact' },
]

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className="sticky w-full top-0 z-40 bg-surface/95 backdrop-blur-sm border-b border-border">
            <div className="max-w-9xl mx-auto px-6 md:px-8 py-4 flex items-center justify-between">

                {/* Logo / Site name */}
                <Link
                    href="/"
                    className="text-xl md:text-2xl uppercase font-semibold tracking-tight font-heading hover:text-primary transition-colors shrink-0"
                >
                    WFB
                </Link>

                {/* Desktop nav */}
                <nav className="hidden lg:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm tracking-wide text-text-muted hover:text-primary transition-colors whitespace-nowrap"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="pl-6 ml-2 border-l border-border flex items-center gap-4">
                        <BagIcon />
                        <ThemeToggle />
                    </div>
                </nav>

                {/* Mobile hamburger */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="lg:hidden flex flex-col gap-1.5 p-2"
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-text transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-text transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-text transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <nav className="lg:hidden bg-surface border-t border-border">
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