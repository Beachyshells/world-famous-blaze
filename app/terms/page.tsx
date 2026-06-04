import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Terms of Use | World Famous Blaze',
    description: 'Terms of use for World Famous Blaze dispensary.',
}

export default function TermsPage() {
    return (
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-2">
                Legal
            </p>
            <h1 className="text-4xl md:text-5xl mb-4">Terms of Use</h1>
            <p className="text-text-muted text-lg max-w-2xl">
                Terms of use content will be added here. Consult a cannabis attorney for jurisdiction-specific requirements.
            </p>
        </div>
    )
}