'use client'

import { useState } from 'react'
import { useBag, BagItem } from '../context/BagContext'
import ReservationForm from './RservationForm'
import ReservationReceipt from './ReservationReciept'

type DrawerView = 'bag' | 'form' | 'receipt'

export default function BagDrawer() {
    const { items, removeItem, updateQuantity, clearBag, total, isOpen, setIsOpen, itemCount } = useBag()
    const [view, setView] = useState<DrawerView>('bag')
    const [receiptData, setReceiptData] = useState<{ items: BagItem[]; total: number; name: string } | null>(null)

    const handleClose = () => {
        setIsOpen(false)
        // Reset view after drawer closes
        setTimeout(() => setView('bag'), 300)
    }

    const handleReserve = (name: string, phone: string) => {
        // Save receipt data before clearing the bag
        setReceiptData({
            items: [...items],
            total,
            name,
        })

        // TODO: Push to Sanity when wired
        // await createReservation({ name, phone, items, total })

        // TODO: Send SMS notification to staff via Twilio
        // await sendStaffNotification({ name, phone, items })

        console.log('Reservation submitted:', { name, phone, items, total })

        clearBag()
        setView('receipt')
    }

    if (!isOpen) return null

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-dark/50 z-40"
                onClick={handleClose}
            />

            {/* Drawer */}
            <div className="fixed top-0 right-0 h-full w-full sm:w-96 bg-surface border-l border-border z-50 flex flex-col shadow-2xl">

                {view === 'form' && (
                    <ReservationForm
                        onSubmit={handleReserve}
                        onBack={() => setView('bag')}
                    />
                )}

                {view === 'receipt' && receiptData && (
                    <ReservationReceipt
                        items={receiptData.items}
                        total={receiptData.total}
                        customerName={receiptData.name}
                        onClose={handleClose}
                    />
                )}

                {view === 'bag' && (
                    <>
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
                            <div>
                                <h2 className="text-lg font-heading text-text">Your Bag</h2>
                                <p className="text-xs text-text-muted">
                                    {itemCount} item{itemCount !== 1 ? 's' : ''}
                                </p>
                            </div>
                            <button
                                onClick={handleClose}
                                className="text-text-muted hover:text-text transition-colors p-1 cursor-pointer"
                                aria-label="Close bag"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Items */}
                        <div className="flex-1 overflow-y-auto px-6 py-4">
                            {items.length === 0 ? (
                                <div className="text-center py-16">
                                    <p className="text-text-muted text-sm mb-2">Your bag is empty</p>
                                    <p className="text-xs text-text-muted">Browse the menu and add something</p>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {items.map((item) => (
                                        <div
                                            key={item.id}
                                            className="flex gap-4 bg-bg border border-border rounded-[5px] p-4"
                                        >
                                            <div className="flex-1 min-w-0">
                                                {item.category && (
                                                    <p className="text-xs tracking-[0.2em] uppercase text-accent mb-1">
                                                        {item.category}
                                                    </p>
                                                )}
                                                <p className="text-sm font-heading text-text truncate">
                                                    {item.name}
                                                </p>
                                                <p className="text-sm text-text-muted mt-1">
                                                    ${item.price > 0 ? item.price.toFixed(2) : '0.00'}
                                                </p>
                                            </div>

                                            <div className="flex flex-col items-end gap-2">
                                                <div className="flex items-center gap-2 border border-border rounded-[5px]">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="px-2 py-1 text-text-muted hover:text-text transition-colors text-sm cursor-pointer"
                                                    >
                                                        −
                                                    </button>
                                                    <span className="text-sm text-text w-6 text-center">
                                                        {item.quantity}
                                                    </span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="px-2 py-1 text-text-muted hover:text-text transition-colors text-sm cursor-pointer"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                                <button
                                                    onClick={() => removeItem(item.id)}
                                                    className="text-[10px] tracking-[0.2em] uppercase text-text-muted hover:text-danger transition-colors cursor-pointer"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        {items.length > 0 && (
                            <div className="border-t border-border px-6 py-4 space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-text-muted">Estimated Total</span>
                                    <span className="text-xl font-heading text-text">
                                        ${total > 0 ? total.toFixed(2) : '0.00'}
                                    </span>
                                </div>

                                <button
                                    onClick={() => setView('form')}
                                    className="w-full bg-primary text-bg py-4 text-sm tracking-[0.2em] uppercase hover:opacity-90 transition-opacity rounded-[5px] cursor-pointer font-heading"
                                >
                                    Reserve My Bag
                                </button>

                                <button
                                    onClick={clearBag}
                                    className="w-full text-xs text-text-muted hover:text-danger transition-colors py-2 tracking-[0.2em] uppercase cursor-pointer"
                                >
                                    Empty Bag
                                </button>

                                <p className="text-[10px] text-text-muted text-center leading-relaxed">
                                    This is a reservation, not a purchase. Pay in store with cash when you pick up.
                                </p>
                            </div>
                        )}
                    </>
                )}
            </div>
        </>
    )
}