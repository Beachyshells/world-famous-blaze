import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Weekly Specials | World Famous Blaze',
    description: 'Daily deals all week long at World Famous Blaze dispensary.',
}

export default function SpecialsLayout({ children }: { children: React.ReactNode }) {
    return children
}