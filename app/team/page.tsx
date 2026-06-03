import Link from 'next/link'

// Placeholder — will pull from Sanity in Phase 7
const teamMembers = [
    {
        slug: 'owner',
        name: 'Owner',
        role: 'Founder',
        bio: 'The one who started it all.',
        photo: '',
    },
]

export default function TeamPage() {
    return (
        <div className="min-h-screen">
            <div className="bg-surface border-b border-border">
                <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
                    <p className="text-xs tracking-[0.3em] uppercase text-primary mb-2">
                        The People
                    </p>
                    <h1 className="text-4xl md:text-5xl font-heading text-text mb-4">Our Team</h1>
                    <p className="text-text-muted text-lg max-w-2xl">
                        The crew behind the counter. Get to know the people who make World Famous Blaze what it is.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {teamMembers.map((member) => (
                        <Link
                            key={member.slug}
                            href={`/team/${member.slug}`}
                            className="bg-surface border border-border shadow-md hover:border-primary hover:shadow-xl transition-all duration-300 group block overflow-hidden"
                        >
                            <div className="aspect-4/5 bg-border/30 flex items-center justify-center overflow-hidden">
                                {member.photo ? (
                                    <img
                                        src={member.photo}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <span className="text-xs tracking-[0.3em] uppercase text-text-muted">
                                        Photo
                                    </span>
                                )}
                            </div>
                            {(member.name || member.role) && (
                                <div className="p-4">
                                    {member.name && (
                                        <h3 className="text-lg font-heading text-text group-hover:text-primary transition-colors">
                                            {member.name}
                                        </h3>
                                    )}
                                    {member.role && (
                                        <p className="text-xs tracking-[0.2em] uppercase text-primary">
                                            {member.role}
                                        </p>
                                    )}
                                </div>
                            )}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}