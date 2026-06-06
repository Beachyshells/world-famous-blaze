import Link from 'next/link'

export function Quote({ text, attribution }: { text: string; attribution: string }) {
    return (
        <div className="bg-dark rounded-[5px] p-8 md:p-10 text-center">
            <p className="text-xl md:text-2xl font-heading text-white leading-snug">
                &quot;{text}&quot;
            </p>
            <p className="text-white/40 text-sm mt-4">— {attribution}</p>
        </div>
    )
}

export function VibeTags({ label, vibes }: { label: string; vibes: string[] }) {
    return (
        <div>
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">{label}</p>
            <div className="flex flex-wrap gap-2">
                {vibes.map((vibe) => (
                    <span
                        key={vibe}
                        className="bg-primary/10 text-primary border border-primary/20 px-4 py-2 text-sm rounded-full"
                    >
                        {vibe}
                    </span>
                ))}
            </div>
        </div>
    )
}

export function SplitCard({
    leftTitle,
    leftItems,
    rightTitle,
    rightItems,
}: {
    leftTitle: string
    leftItems: string[]
    rightTitle: string
    rightItems: string[]
}) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-surface/70 backdrop-blur border border-border p-6 rounded-[5px]">
                <p className="text-sm font-heading text-primary mb-4">{leftTitle}</p>
                <div className="space-y-3 text-sm text-text-muted">
                    {leftItems.map((item, i) => (
                        <p key={i}>{item}</p>
                    ))}
                </div>
            </div>
            <div className="bg-surface/70 backdrop-blur border border-border p-6 rounded-[5px]">
                <p className="text-sm font-heading text-accent mb-4">{rightTitle}</p>
                <div className="space-y-3 text-sm text-text-muted">
                    {rightItems.map((item, i) => (
                        <p key={i}>{item}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export function ShelfGrid({
    strains,
}: {
    strains: { name: string; desc: string; tier: string; color: string }[]
}) {
    return (
        <div>
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">On Our Shelf</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {strains.map((strain) => (
                    <div
                        key={strain.name}
                        className="bg-surface/70 backdrop-blur border border-border p-4 rounded-[5px] flex items-center gap-4 group hover:border-primary transition-colors"
                    >
                        <span
                            className="w-3 h-3 rounded-full shrink-0 border border-border/50"
                            style={{ backgroundColor: strain.color }}
                        />
                        <div>
                            <p className="text-sm font-heading text-text group-hover:text-primary transition-colors">
                                {strain.name}
                            </p>
                            <p className="text-xs text-text-muted">{strain.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
            <p className="text-xs text-text-muted mt-3">
                Stock changes daily. These are examples — ask the team what&apos;s fresh.
            </p>
        </div>
    )
}

export function Callout({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="border-l-2 border-accent pl-6">
            <p className="text-sm font-heading text-text mb-2">{title}</p>
            <div className="text-text-muted">{children}</div>
        </div>
    )
}

export function Section({ label, title, children }: { label?: string; title?: string; children: React.ReactNode }) {
    return (
        <div>
            {label && (
                <p className="text-xs tracking-[0.3em] uppercase text-accent mb-2">{label}</p>
            )}
            {title && (
                <p className="text-lg font-heading text-text mb-3">{title}</p>
            )}
            <div className="text-text-muted space-y-4">{children}</div>
        </div>
    )
}

export function BottomCTA({ label, href, text }: { label: string; href: string; text: string }) {
    return (
        <div className="bg-dark rounded-[5px] p-8 text-center">
            <p className="text-white/50 text-sm mb-4">{label}</p>
            <Link
                href={href}
                className="bg-primary text-bg px-8 py-3 text-sm tracking-[0.2em] uppercase hover:opacity-90 transition-opacity inline-block rounded-[5px]"
            >
                {text}
            </Link>
        </div>
    )
}