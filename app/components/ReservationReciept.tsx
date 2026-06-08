'use client'

import { BagItem } from '../context/BagContext'

export default function ReservationReceipt({
    items,
    total,
    customerName,
    onClose,
}: {
    items: BagItem[]
    total: number
    customerName: string
    onClose: () => void
}) {
    const now = new Date()
    const timeString = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
    const dateString = now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })

    return (
        <div className="flex flex-col h-full">
            <div className="flex-1 px-6 py-8 overflow-y-auto">
                {/* Confirmation Header */}
                <div className="text-center mb-8">
                    <span className="text-4xl block mb-4">✓</span>
                    <h2 className="text-2xl font-heading text-text mb-2">
                        You&apos;re All Set
                    </h2>
                    <p className="text-sm text-text-muted">
                        We&apos;re pulling your order now, {customerName.split(' ')[0]}.
                    </p>
                </div>

                {/* Receipt Card */}
                <div className="bg-bg border border-border rounded-[5px] overflow-hidden">
                    {/* Receipt Header */}
                    <div className="border-b border-border px-5 py-4">
                        <p className="text-xs tracking-[0.3em] uppercase text-accent mb-1">
                            Reservation
                        </p>
                        <p className="text-xs text-text-muted">
                            {dateString} at {timeString}
                        </p>
                    </div>

                    {/* Items */}
                    <div className="divide-y divide-border">
                        {items.map((item) => (
                            <div key={item.id} className="px-5 py-3 flex items-center justify-between">
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm text-text truncate">
                                        {item.name}
                                    </p>
                                    {item.category && (
                                        <p className="text-[10px] tracking-[0.2em] uppercase text-text-muted">
                                            {item.category}
                                        </p>
                                    )}
                                </div>
                                <div className="text-right shrink-0 ml-4">
                                    <p className="text-sm text-text">
                                        × {item.quantity}
                                    </p>
                                    <p className="text-xs text-text-muted">
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Total */}
                    <div className="border-t border-border px-5 py-4 flex items-center justify-between">
                        <span className="text-sm font-heading text-text">Estimated Total</span>
                        <span className="text-lg font-heading text-text">
                            ${total.toFixed(2)}
                        </span>
                    </div>
                </div>

                {/* Info */}
                <div className="mt-6 space-y-4">
                    <div className="flex gap-3 items-start">
                        <span className="text-sm">📍</span>
                        <div>
                            <p className="text-sm text-text">2797 NY-95, Bombay, NY 12914</p>
                            <p className="text-xs text-text-muted">Open 24/7</p>
                        </div>
                    </div>
                    <div className="flex gap-3 items-start">
                        <span className="text-sm">💵</span>
                        <div>
                            <p className="text-sm text-text">Cash only at pickup</p>
                            <p className="text-xs text-text-muted">ATM available in store</p>
                        </div>
                    </div>
                    <div className="flex gap-3 items-start">
                        <span className="text-sm">⏰</span>
                        <div>
                            <p className="text-sm text-text">We&apos;ll hold this for 2 hours</p>
                            <p className="text-xs text-text-muted">After that it goes back on the shelf</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="border-t border-border px-6 py-4 space-y-3">
                <a
                    href="tel:+15183581023"
                    className="block w-full bg-primary text-bg py-4 text-sm tracking-[0.2em] uppercase hover:opacity-90 transition-opacity rounded-[5px] text-center font-heading"
                >
                    Call (518) 358-1023
                </a>
                <button
                    onClick={onClose}
                    className="w-full text-xs text-text-muted hover:text-text transition-colors py-2 tracking-[0.2em] uppercase cursor-pointer"
                >
                    Close
                </button>
            </div>
        </div >
    )
}