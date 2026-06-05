import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contact | World Famous Blaze',
    description: 'Get in touch with World Famous Blaze. Call, visit, or send us a message.',
}

export default function ContactPage() {

    export default function ContactPage() {
        return (
            <div className="min-h-screen">
                {/* Page Header */}
                <div className="bg-surface border-b border-border">
                    <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
                        <p className="text-xs tracking-[0.3em] uppercase text-primary mb-2">
                            Get In Touch
                        </p>
                        <h1 className="text-4xl md:text-5xl font-heading text-text mb-4">Contact</h1>
                        <p className="text-text-muted text-lg max-w-2xl">
                            Questions, feedback, or just want to say what&#39;s up. We&#39;re here.
                        </p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                        {/* Left Column — Contact Info */}
                        <div>
                            {/* Phone */}
                            <div className="mb-10">
                                <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">
                                    Phone
                                </p>
                                <a
                                    href="tel:+15183581023"
                                    className="text-2xl font-heading text-text hover:text-primary transition-colors"
                                >
                                    (518) 358-1023
                                </a>
                                <p className="text-sm text-text-muted mt-2">
                                    Call or text anytime — we&#39;re open 24/7.
                                </p>
                            </div>

                            {/* Address */}
                            <div className="mb-10">
                                <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">
                                    Address
                                </p>
                                <p className="text-lg text-text leading-relaxed">
                                    2797 NY-95<br />
                                    Bombay, NY 12914
                                </p>
                                <a
                                    href="https://www.google.com/maps/dir//2797+NY-95+Bombay+NY+12914"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors mt-3 text-sm tracking-wide"
                                >
                                    Get Directions →
                                </a>
                            </div>

                            {/* Hours */}
                            <div className="mb-10">
                                <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">
                                    Hours
                                </p>
                                <p className="text-lg text-text">
                                    24/7 — We never close
                                </p>
                            </div>

                            {/* Social */}
                            <div>
                                <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">
                                    Follow Us
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    {[
                                        { name: 'Instagram', url: '' },
                                        { name: 'Facebook', url: '' },
                                        { name: 'Snapchat', url: '' },
                                    ].map((social) => (
                                        social.url ? (
                                            <a
                                                key={social.name}
                                                href={social.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-text hover:text-primary transition-colors text-sm tracking-wide"
                                            >
                                                {social.name}
                                            </a>
                                        ) : (
                                            <span
                                                key={social.name}
                                                className="text-text-muted text-sm tracking-wide"
                                            >
                                                {social.name} — coming soon
                                            </span>
                                        )
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column — Message Form Placeholder */}
                        <div className="bg-surface border border-border shadow-md p-8 md:p-10">
                            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">
                                Send a Message
                            </p>
                            <h2 className="text-2xl font-heading text-text mb-6">
                                We&#39;d love to hear from you
                            </h2>

                            <div className="space-y-5">
                                <div>
                                    <label className="text-xs tracking-[0.2em] uppercase text-text-muted block mb-2">
                                        Name
                                    </label>
                                    <div className="w-full h-12 bg-bg border border-border" />
                                </div>
                                <div>
                                    <label className="text-xs tracking-[0.2em] uppercase text-text-muted block mb-2">
                                        Email
                                    </label>
                                    <div className="w-full h-12 bg-bg border border-border" />
                                </div>
                                <div>
                                    <label className="text-xs tracking-[0.2em] uppercase text-text-muted block mb-2">
                                        Subject
                                    </label>
                                    <div className="w-full h-12 bg-bg border border-border" />
                                </div>
                                <div>
                                    <label className="text-xs tracking-[0.2em] uppercase text-text-muted block mb-2">
                                        Message
                                    </label>
                                    <div className="w-full h-32 bg-bg border border-border" />
                                </div>
                                <div className="pt-2">
                                    <div className="inline-flex items-center gap-2 bg-bg border border-border px-6 py-3">
                                        <span className="text-xs tracking-[0.2em] uppercase text-text-muted">
                                            Send Message — Form will be connected in a future phase
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </div >
            </div >
        )
    }