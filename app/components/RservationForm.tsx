'use client'

import { useState } from 'react'

export default function ReservationForm({
    onSubmit,
    onBack,
}: {
    onSubmit: (name: string, phone: string) => void
    onBack: () => void
}) {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

    const handleSubmit = () => {
        if (!name.trim() || !phone.trim()) return
        onSubmit(name.trim(), phone.trim())
    }

    return (
        <div className="flex flex-col h-full">
            <div className="flex-1 px-6 py-8">
                <button
                    onClick={onBack}
                    className="text-xs tracking-[0.3em] uppercase text-primary hover:text-accent transition-colors mb-8 cursor-pointer"
                >
                    ← Back to Bag
                </button>

                <h2 className="text-2xl font-heading text-text mb-2">
                    Almost There
                </h2>
                <p className="text-sm text-text-muted mb-8">
                    Tell us who to hold this for. We&apos;ll have it ready when you walk in.
                </p>

                <div className="space-y-6">
                    <div>
                        <label className="text-xs tracking-[0.2em] uppercase text-text-muted block mb-2">
                            Your Name
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="First and last name"
                            className="w-full bg-bg border border-border rounded-[5px] px-4 py-3 text-text text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-text-muted/50"
                        />
                    </div>

                    <div>
                        <label className="text-xs tracking-[0.2em] uppercase text-text-muted block mb-2">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="(555) 555-5555"
                            className="w-full bg-bg border border-border rounded-[5px] px-4 py-3 text-text text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-text-muted/50"
                        />
                    </div>
                </div>
            </div>

            <div className="border-t border-border px-6 py-4 space-y-3">
                <button
                    onClick={handleSubmit}
                    disabled={!name.trim() || !phone.trim()}
                    className="w-full bg-primary text-bg py-4 text-sm tracking-[0.2em] uppercase hover:opacity-90 transition-opacity rounded-[5px] cursor-pointer font-heading disabled:opacity-40 disabled:cursor-not-allowed"
                >
                    Confirm Reservation
                </button>
                <p className="text-[10px] text-text-muted text-center leading-relaxed">
                    We&apos;ll text you when your bag is ready for pickup. Cash only at the register.
                </p>
            </div>
        </div>
    )
}