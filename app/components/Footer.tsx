import Link from 'next/link'

// Hardcoded — these are legally required disclaimers that every cannabis site needs
const requiredWarnings = [
    'This product has not been analyzed or approved by the FDA.',
    'For use only by adults 21 and older.',
    'Do not drive or operate machinery while under the influence of cannabis.',
    'Keep cannabis products away from children and pets.',
    'Cannabis may impair concentration, coordination, and judgment.',
    'Effects of edible cannabis may be delayed by two hours or more.',
    'Pregnant or breastfeeding people should not use cannabis.',
]

// Placeholder data — will pull from Sanity later via siteSettings || fallback
const placeholderSettings = {
    storeName: 'World-Famous-Blaze',
    tagline: 'Premium cannabis. Authentic service.',
    licenseNumber: 'License #PLACEHOLDER-0000', //#2023-012-CCB
    jurisdictionStatement: 'Operating under jurisdiction authority. Replace with your operating jurisdiction.',
    phone: '(518) 358-1023',
    email: 'hello@worldfamousblaze.com',
    addressLine1: '2797 NY-95',
    addressLine2: 'Bombay, NY 12914',
    hours: 'Mon–Sun: open 24 hours',
    socialLinks: [
        { platform: 'Instagram', url: '#' },
        { platform: 'Facebook', url: '#' },
    ],
}

export function Footer() {
    const s = placeholderSettings // will swap to: const s = settings || placeholderSettings

    return (
        <footer className="bg-surface border-t border-border mt-auto">

            {/* MAIN FOOTER CONTENT */}
            <div className="max-w-9xl mx-auto px-6 md:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* COLUMN 1 — Visit */}
                <div>
                    <h3 className="text-xs tracking-[0.3em] uppercase text-text-muted mb-4">Visit</h3>
                    <address className="not-italic text-text space-y-2 text-sm">
                        <p>{s.addressLine1}</p>
                        <p>{s.addressLine2}</p>
                        <p>
                            <a href={`tel:${s.phone}`} className="hover:text-primary transition-colors">
                                {s.phone}
                            </a>
                        </p>
                        <p className="text-text-muted pt-2">{s.hours}</p>
                    </address>
                </div>

                {/* COLUMN 2 — Quick Links */}
                <div>
                    <h3 className="text-xs tracking-[0.3em] uppercase text-text-muted mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link href="/menu" className="text-text hover:text-primary transition-colors">
                                Menu
                            </Link>
                        </li>
                        <li>
                            <Link href="/merchandise" className="text-text hover:text-primary transition-colors">
                                Merchandise
                            </Link>
                        </li>
                        <li>
                            <Link href="/team" className="text-text hover:text-primary transition-colors">
                                Our Team
                            </Link>
                        </li>
                        <li>
                            <Link href="/learn" className="text-text hover:text-primary transition-colors">
                                Learn
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* COLUMN 3 — Company */}
                <div>
                    <h3 className="text-xs tracking-[0.3em] uppercase text-text-muted mb-4">Company</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link href="/about" className="text-text hover:text-primary transition-colors">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="text-text hover:text-primary transition-colors">
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link href="/privacy" className="text-text hover:text-primary transition-colors">
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link href="/terms" className="text-text hover:text-primary transition-colors">
                                Terms of Use
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* COMPLIANCE BAND */}
            <div className="border-t border-border bg-bg">
                <div className="max-w-7xl mx-auto px-6 md:px-8 py-8">

                    {/* License + Jurisdiction */}
                    <div className="mb-6 text-center">
                        <p className="text-xs tracking-[0.3em] uppercase text-primary mb-2">
                            {s.licenseNumber}
                        </p>
                        <p className="text-xs text-text-muted max-w-3xl mx-auto leading-relaxed">
                            {s.jurisdictionStatement}
                        </p>
                    </div>

                    {/* Required Warnings */}
                    <div className="flex flex-col gap-4 border-t border-border pt-6">
                        <p className="text-xs tracking-[0.3em] uppercase text-text-muted text-center">
                            Required Disclosures
                        </p>
                        <div className="flex items-baseline justify-center gap-4">
                            {/* Icon clamped to the text */}
                            <div className="text-primary text-2xl shrink-0">
                                ⚠️
                            </div>

                            {/* Max-width container that hugs the text */}
                            <div className="max-w-2xl">
                                <p className="text-xs text-text-muted">
                                    Cannabis products may only be used legally by adults 21 and older. Please review the following warnings before use:
                                </p>
                            </div>
                        </div>
                        <ul className="text-xs text-text-muted space-y-1.5 leading-relaxed lg:grid lg:grid-cols-2 lg:gap-x-8 lg:space-y-0 lg:gap-y-1.5">
                            {requiredWarnings.map((warning, i) => (
                                <li key={i} className="flex gap-2">
                                    <span className="text-primary shrink-0">•</span>
                                    <span>{warning}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* BOTTOM BAR */}
            <div className="border-t border-border">
                <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-text-muted">
                    <p>© {new Date().getFullYear()} {s.storeName}. All rights reserved.</p>
                    <p>
                        Site built by{' '}
                        <a
                            href="mailto:michelle.durham.dev@gmail.com"
                            className="hover:text-primary transition-colors"
                        >
                            Michelle Durham
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    )
}