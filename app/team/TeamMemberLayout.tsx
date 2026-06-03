import Link from 'next/link'

interface TeamMemberProps {
    name: string
    role: string
    subtitle: string
    story: string
    mission: string
    quote: string
}

export default function TeamMemberLayout({
    name,
    role,
    subtitle,
    story,
    mission,
    quote,
}: TeamMemberProps) {
    return (
        <div className="min-h-screen">
            {/* Header */}
            <div className="bg-surface border-b border-border">
                <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
                    <Link
                        href="/team"
                        className="text-xs tracking-[0.3em] uppercase text-primary hover:text-accent transition-colors mb-4 inline-block"
                    >
                        ← Back to Team
                    </Link>
                    <p className="text-xs tracking-[0.3em] uppercase text-accent mb-2">
                        {role}
                    </p>
                    <h1 className="text-4xl md:text-5xl font-heading text-text mb-4">{name}</h1>
                    <p className="text-text-muted text-lg max-w-2xl">
                        {subtitle}
                    </p>
                </div>
            </div>

            {/* Editorial Layout */}
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">

                {/* Section 1: Hero image + overlapping text */}
                <div className="relative mb-24">
                    <div className="w-full md:w-2/3 aspect-[16/10] bg-surface border border-border shadow-lg flex items-center justify-center overflow-hidden">
                        <span className="text-xs tracking-[0.3em] uppercase text-text-muted">
                            Hero Photo
                        </span>
                    </div>
                    <div className="md:absolute md:bottom-[-40px] md:right-0 md:w-1/2 bg-bg/95 backdrop-blur-sm border border-border shadow-lg p-8 md:p-10 mt-6 md:mt-0">
                        <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">
                            The Beginning
                        </p>
                        <h2 className="text-2xl md:text-3xl font-heading text-text mb-4">
                            How It Started
                        </h2>
                        <p className="text-text-muted leading-relaxed">
                            {story}
                        </p>
                    </div>
                </div>

                {/* Section 2: Two staggered images */}
                <div className="relative mb-24 flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/2 md:mt-16 aspect-[3/4] bg-surface border border-border shadow-lg flex items-center justify-center overflow-hidden">
                        <span className="text-xs tracking-[0.3em] uppercase text-text-muted">
                            Photo 2
                        </span>
                    </div>
                    <div className="md:w-1/2 md:-mt-8 aspect-[3/4] bg-surface border border-border shadow-lg flex items-center justify-center overflow-hidden">
                        <span className="text-xs tracking-[0.3em] uppercase text-text-muted">
                            Photo 3
                        </span>
                    </div>
                </div>

                {/* Section 3: Pull quote */}
                <div className="max-w-2xl mx-auto mb-24">
                    <div className="border-l-2 border-primary pl-8">
                        <p className="text-2xl md:text-3xl font-heading text-text leading-snug mb-6">
                            &quot;{quote}&quot;
                        </p>
                        <p className="text-sm text-text-muted tracking-[0.2em] uppercase">
                            — {name}, {role}
                        </p>
                    </div>
                </div>

                {/* Section 4: Wide image + overlapping text from opposite side */}
                <div className="relative mb-24">
                    <div className="w-full md:w-2/3 md:ml-auto aspect-[16/10] bg-surface border border-border shadow-lg flex items-center justify-center overflow-hidden">
                        <span className="text-xs tracking-[0.3em] uppercase text-text-muted">
                            Action Photo
                        </span>
                    </div>
                    <div className="md:absolute md:bottom-[-40px] md:left-0 md:w-1/2 bg-bg/95 backdrop-blur-sm border border-border shadow-lg p-8 md:p-10 mt-6 md:mt-0">
                        <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">
                            The Mission
                        </p>
                        <h2 className="text-2xl md:text-3xl font-heading text-text mb-4">
                            Why I Do This
                        </h2>
                        <p className="text-text-muted leading-relaxed">
                            {mission}
                        </p>
                    </div>
                </div>

                {/* Section 5: Scattered gallery */}
                <div className="mb-24">
                    <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">
                        Gallery
                    </p>
                    <h2 className="text-2xl md:text-3xl font-heading text-text mb-8">
                        Behind the Scenes
                    </h2>
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 md:col-span-7 aspect-[16/10] bg-surface border border-border shadow-lg flex items-center justify-center overflow-hidden">
                            <span className="text-xs tracking-[0.3em] uppercase text-text-muted">Photo 4</span>
                        </div>
                        <div className="col-span-6 md:col-span-5 aspect-square bg-surface border border-border shadow-lg flex items-center justify-center overflow-hidden">
                            <span className="text-xs tracking-[0.3em] uppercase text-text-muted">Photo 5</span>
                        </div>
                        <div className="col-span-6 md:col-span-4 aspect-[4/5] bg-surface border border-border shadow-lg flex items-center justify-center overflow-hidden md:-mt-12">
                            <span className="text-xs tracking-[0.3em] uppercase text-text-muted">Photo 6</span>
                        </div>
                        <div className="col-span-12 md:col-span-8 aspect-[16/9] bg-surface border border-border shadow-lg flex items-center justify-center overflow-hidden md:-mt-8">
                            <span className="text-xs tracking-[0.3em] uppercase text-text-muted">Photo 7</span>
                        </div>
                        <div className="col-span-7 md:col-span-5 aspect-[3/4] bg-surface border border-border shadow-lg flex items-center justify-center overflow-hidden md:-mt-16">
                            <span className="text-xs tracking-[0.3em] uppercase text-text-muted">Photo 8</span>
                        </div>
                        <div className="col-span-5 md:col-span-7 aspect-[16/10] bg-surface border border-border shadow-lg flex items-center justify-center overflow-hidden">
                            <span className="text-xs tracking-[0.3em] uppercase text-text-muted">Photo 9</span>
                        </div>
                    </div>
                    <p className="text-sm text-text-muted mt-6">
                        Upload your photos through the admin panel. Share what your day at World Famous Blaze looks like.
                    </p>
                </div>

                {/* Closing */}
                <div className="max-w-2xl mx-auto text-center">
                    <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">
                        Come See Us
                    </p>
                    <h2 className="text-2xl md:text-3xl font-heading text-text mb-4">
                        The Door&#39;s Always Open
                    </h2>
                    <p className="text-text-muted leading-relaxed text-lg mb-6">
                        World Famous Blaze is open 24/7. Stop in and say what&#39;s up.
                    </p>
                    <Link
                        href="/visit"
                        className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors text-sm tracking-wide"
                    >
                        Plan Your Visit →
                    </Link>
                </div>
            </div>
        </div>
    )
}