'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export interface BagItem {
    id: string
    name: string
    price: number
    category?: string
    quantity: number
}

interface BagContextType {
    items: BagItem[]
    addItem: (item: Omit<BagItem, 'quantity'>) => void
    removeItem: (id: string) => void
    updateQuantity: (id: string, quantity: number) => void
    clearBag: () => void
    itemCount: number
    total: number
    isOpen: boolean
    setIsOpen: (open: boolean) => void
}

const BagContext = createContext<BagContextType | undefined>(undefined)

export function BagProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<BagItem[]>([])
    const [isOpen, setIsOpen] = useState(false)
    const [loaded, setLoaded] = useState(false)

    // Load from localStorage on mount
    useEffect(() => {
        const saved = localStorage.getItem('wfb-bag')
        if (saved) {
            try {
                setItems(JSON.parse(saved))
            } catch {
                // corrupted data, start fresh
            }
        }
        setLoaded(true)
    }, [])

    // Save to localStorage whenever items change
    useEffect(() => {
        if (loaded) {
            localStorage.setItem('wfb-bag', JSON.stringify(items))
        }
    }, [items, loaded])

    const addItem = (item: Omit<BagItem, 'quantity'>) => {
        setItems((prev) => {
            const existing = prev.find((i) => i.id === item.id)
            if (existing) {
                return prev.map((i) =>
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                )
            }
            return [...prev, { ...item, quantity: 1 }]
        })
    }

    const removeItem = (id: string) => {
        setItems((prev) => prev.filter((i) => i.id !== id))
    }

    const updateQuantity = (id: string, quantity: number) => {
        if (quantity <= 0) {
            removeItem(id)
            return
        }
        setItems((prev) =>
            prev.map((i) => (i.id === id ? { ...i, quantity } : i))
        )
    }

    const clearBag = () => {
        setItems([])
    }

    const itemCount = items.reduce((sum, i) => sum + i.quantity, 0)
    const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0)

    return (
        <BagContext.Provider value={{
            items, addItem, removeItem, updateQuantity, clearBag,
            itemCount, total, isOpen, setIsOpen,
        }}>
            {children}
        </BagContext.Provider>
    )
}

export function useBag() {
    const context = useContext(BagContext)
    if (!context) {
        throw new Error('useBag must be used within a BagProvider')
    }
    return context
}