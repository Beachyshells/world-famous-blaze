'use client'

import { useBag } from '../context/BagContext'

export default function AddToBagButton({
    id,
    name,
    price,
    category,
}: {
    id: string
    name: string
    price: number
    category?: string
}) {
    const { addItem } = useBag()

    return (
        <button
            onClick={() => addItem({ id, name, price, category })}
            className="block w-full bg-primary text-bg rounded-[5px] px-8 py-4 text-center text-sm tracking-[0.2em] uppercase hover:opacity-90 transition-opacity cursor-pointer font-heading"
        >
            Add to Bag
        </button>
    )
}