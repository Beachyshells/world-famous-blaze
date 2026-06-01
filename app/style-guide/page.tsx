import { ThemeToggle } from '../components/ThemeToggle'

export default function StyleGuide() {
    return (
        <main className="min-h-screen bg-bg text-text p-8 md:p-16">
            <ThemeToggle />
            <div className="max-w-5xl mx-auto space-y-16">

                {/* HEADER */}
                <header>
                    <h1 className="text-4xl mb-2">World-Famous-Blaze</h1>
                    <p className="text-text-muted">Design Token Style Guide</p>
                </header>

                {/* COLORS */}
                <section>
                    <h2 className="text-2xl mb-6">Theme-Aware Colors</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <ColorSwatch name="bg" />
                        <ColorSwatch name="surface" />
                        <ColorSwatch name="text" />
                        <ColorSwatch name="text-muted" />
                        <ColorSwatch name="border" />
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl mb-6">Brand Colors</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <ColorSwatch name="primary" />
                        <ColorSwatch name="accent" />
                        <ColorSwatch name="danger" />
                        <ColorSwatch name="success" />
                    </div>
                </section>

                {/* TYPOGRAPHY */}
                <section>
                    <h2 className="text-2xl mb-6">Typography</h2>
                    <div className="space-y-6">
                        <div>
                            <p className="text-text-muted text-sm mb-2">Heading Font</p>
                            <h1 className="text-5xl">Premium Cannabis</h1>
                            <h2 className="text-3xl">Section Heading</h2>
                            <h3 className="text-xl">Subsection</h3>
                        </div>
                        <div>
                            <p className="text-text-muted text-sm mb-2">Body Font</p>
                            <p className="text-lg">The quick brown fox jumps over the lazy dog at the dispensary.</p>
                            <p>Standard body paragraph text for reading content.</p>
                            <p className="text-sm text-text-muted">Smaller muted text for captions and meta info.</p>
                        </div>
                    </div>
                </section>

                {/* SURFACES */}
                <section>
                    <h2 className="text-2xl mb-6">Surfaces & Borders</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-surface border border-border p-6 rounded">
                            <h3 className="text-xl mb-2">Surface Card</h3>
                            <p className="text-text-muted">This sits on top of the background using --color-surface.</p>
                        </div>
                        <div className="bg-bg border-2 border-primary p-6 rounded">
                            <h3 className="text-xl mb-2">Primary Border</h3>
                            <p className="text-text-muted">Used for emphasis without filling color.</p>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
}

/* Helper component to render each color */
function ColorSwatch({ name }: { name: string }) {
    return (
        <div className="space-y-2">
            <div
                className={`h-24 w-full rounded border border-border bg-${name}`}
            />
            <p className="text-sm font-mono">{name}</p>
        </div>
    );
}