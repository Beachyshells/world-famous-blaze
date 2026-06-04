import type { Metadata } from 'next'
import { Suspense } from 'react'
import MenuContent from './MenuContent'

export const metadata: Metadata = {
    title: 'Menu | World Famous Blaze',
    description: 'Browse our full cannabis menu — flower, vapes, edibles, pre-rolls, and concentrates.',
}

export default function MenuPage() {
    return (
        <Suspense fallback={
            <div className="w-full min-h-screen flex items-center justify-center bg-bg">
                <p className="text-xs tracking-[0.3em] uppercase text-text-muted animate-pulse">
                    Loading Menu...
                </p>
            </div>
        }>
            <MenuContent />
        </Suspense>
    )
}