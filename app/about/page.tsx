import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'About | World Famous Blaze',
    description: 'Our story, our mission, and the team behind World Famous Blaze dispensary.',
}

export default function AboutPage() {
    return (
        <div className="min-h-screen">
            {/* Page Header */}
            <div className="bg-surface border-b border-border">
                <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
                    <p className="text-xs tracking-[0.3em] uppercase text-primary mb-2">
                        Our Story
                    </p>
                    <h1 className="text-4xl md:text-5xl font-heading text-text mb-4">About World Famous Blaze</h1>
                    <p className="text-text-muted text-lg max-w-2xl">
                        Who we are, where we come from, and why we do this.
                    </p>
                </div>
            </div>

            {/* Our Story */}
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    <div>
                        <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">
                            The Beginning
                        </p>
                        <h2 className="text-3xl md:text-4xl font-heading text-text mb-6">
                            How It Started
                        </h2>
                        <div className="space-y-4 text-text-muted leading-relaxed text-lg">
                            <p>
                                Placeholder for the owner&#39;s story — how World Famous Blaze came to be, what inspired it, and the journey from idea to open doors.
                            </p>
                            <p>
                                This section will be updated with the real story once the owner provides it through Sanity.
                            </p>
                        </div>
                    </div>
                    <div className="bg-surface border border-border shadow-md flex items-center justify-center min-h-75">
                        <span className="text-xs tracking-[0.3em] uppercase text-text-muted">
                            Store Photo
                        </span>
                    </div>
                </div>
            </div>

            {/* Mission / Values */}
            <div className="bg-surface border-y border-border">
                <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
                    <div className="max-w-3xl">
                        <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">
                            What We Stand For
                        </p>
                        <h2 className="text-3xl md:text-4xl font-heading text-text mb-6">
                            Our Mission
                        </h2>
                        <div className="space-y-4 text-text-muted leading-relaxed text-lg">
                            <p>
                                Placeholder for the shop&#39;s mission statement — what World Famous Blaze believes in, how they approach cannabis retail, and what sets them apart.
                            </p>
                            <p>
                                This could cover quality standards, customer care philosophy, community involvement, or whatever matters most to the owner.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Community & Territory */}
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    <div className="bg-surface border border-border shadow-md flex items-center justify-center min-h-75 lg:order-1">
                        <span className="text-xs tracking-[0.3em] uppercase text-text-muted">
                            Community Photo
                        </span>
                    </div>
                    <div className="lg:order-2">
                        <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">
                            Rooted Here
                        </p>
                        <h2 className="text-3xl md:text-4xl font-heading text-text mb-6">
                            Community & Territory
                        </h2>
                        <div className="space-y-4 text-text-muted leading-relaxed text-lg">
                            <p>
                                Placeholder for the shop&#39;s connection to the local community and SRMT territory — what it means to operate here, the relationship with the community, and how the shop gives back.
                            </p>
                            <p>
                                This section will be updated with the owner&#39;s perspective once provided through Sanity.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* The Team */}
            <div className="bg-surface border-y border-border">
                <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
                    <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">
                        The People
                    </p>
                    <h2 className="text-3xl md:text-4xl font-heading text-text mb-4">
                        The Team Behind the Counter
                    </h2>
                    <p className="text-text-muted text-lg max-w-2xl mb-8">
                        The crew that keeps World Famous Blaze running. Updated by the team through Sanity.
                    </p>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { name: 'Owner', role: 'Founder', bio: 'The one who started it all. Building something for the community, one customer at a time.', photo: '', slug: 'owner' },
                            { name: '', role: '', bio: '', photo: '', slug: '' },
                            { name: '', role: '', bio: '', photo: '', slug: '' },
                            { name: '', role: '', bio: '', photo: '', slug: '' },
                        ].map((member, i) => (
                            <div
                                key={i}
                                className="bg-bg border border-border shadow-md overflow-hidden"
                            >
                                {/* Photo */}
                                <div className="aspect-4/5 bg-border/30 flex items-center justify-center overflow-hidden">
                                    {member.photo ? (
                                        <img
                                            src={member.photo}
                                            alt={member.name || 'Team member'}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <span className="text-xs tracking-[0.3em] uppercase text-text-muted">
                                            Photo
                                        </span>
                                    )}
                                </div>

                                {/* Info — only renders if filled */}
                                {(member.name || member.role || member.bio) && (
                                    <div className="p-4">
                                        {member.name && member.slug ? (
                                            <Link href={`/team/${member.slug}`} className="text-lg font-heading text-text hover:text-primary transition-colors">
                                                {member.name}
                                            </Link>
                                        ) : member.name ? (
                                            <h3 className="text-lg font-heading text-text">
                                                {member.name}
                                            </h3>
                                        ) : null}
                                        {member.role && (
                                            <p className="text-xs tracking-[0.2em] uppercase text-primary mb-2">
                                                {member.role}
                                            </p>
                                        )}
                                        {member.bio && (
                                            <p className="text-sm text-text-muted leading-relaxed">
                                                {member.bio}
                                            </p>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Why World Famous Blaze */}
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">
                        Why Us
                    </p>
                    <h2 className="text-3xl md:text-4xl font-heading text-text mb-6">
                        Why World Famous Blaze
                    </h2>
                    <div className="space-y-4 text-text-muted leading-relaxed text-lg">
                        <p>
                            Placeholder for the owner&#39;s pitch — what makes this shop different, why customers keep coming back, and what the World Famous Blaze experience is all about.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}