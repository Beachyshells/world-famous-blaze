import type { Metadata } from 'next'
import { Suspense } from 'react'
import MerchContent from '../merchandise/MerchContent'

export const metadata: Metadata = {
    title: 'Merchandise | World Famous Blaze',
    description: 'Gear, glassware, smoking essentials, and lifestyle products at World Famous Blaze.',
}

export default function MerchandisePage() {
    return (
        <Suspense fallback={
            <div className="w-full min-h-screen flex items-center justify-center bg-bg">
                <p className="text-xs tracking-[0.3em] uppercase text-text-muted animate-pulse">
                    Loading Merchandise...
                </p>
            </div>
        }>
            <MerchContent />
        </Suspense>
    )
}