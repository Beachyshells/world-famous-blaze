import type { Metadata } from 'next'
import TeamMemberLayout from '../TeamMemberLayout'

export const metadata: Metadata = {
    title: 'Owner | World Famous Blaze',
    description: 'Meet the founder of World Famous Blaze.',
}

export default function OwnerPage() {
    return (
        <TeamMemberLayout
            name="Owner"
            role="Founder"
            subtitle="The one who started it all. Building something for the community, one customer at a time."
            story="Placeholder for the owner's story — how they got into cannabis, what made them open World Famous Blaze, and the vision behind it all. Updated through Sanity."
            mission="Placeholder for the owner's mission — what they believe in, what sets World Famous Blaze apart, and what they're building for the community. Updated through Sanity."
            quote="Placeholder for a quote — something that captures the spirit of World Famous Blaze in their own words."
        />
    )
}