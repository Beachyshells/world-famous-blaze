'use client'

import { useEffect, useState } from 'react'

const VERIFICATION_DAYS = 30

type GateState = 'checking' | 'show' | 'verified' | 'rejected'

export function AgeGate() {
    const [state, setState] = useState<GateState>('checking')
    const [month, setMonth] = useState('')
    const [day, setDay] = useState('')
    const [year, setYear] = useState('')
    const [acknowledged, setAcknowledged] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        const verifiedAt = localStorage.getItem('age-verified-at')

        if (verifiedAt) {
            const verifiedDate = new Date(verifiedAt)
            const now = new Date()
            const daysSince = (now.getTime() - verifiedDate.getTime()) / (1000 * 60 * 60 * 24)

            if (daysSince < VERIFICATION_DAYS) {
                setState('verified')
                return
            }
        }

        setState('show')
    }, [])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setError('')

        const m = parseInt(month, 10)
        const d = parseInt(day, 10)
        const y = parseInt(year, 10)

        if (!m || !d || !y || y < 1900 || y > new Date().getFullYear()) {
            setError('Please enter a valid date of birth.')
            return
        }
        if (m < 1 || m > 12 || d < 1 || d > 31) {
            setError('Please enter a valid date of birth.')
            return
        }
        if (!acknowledged) {
            setError('You must acknowledge the terms to continue.')
            return
        }

        const dob = new Date(y, m - 1, d)
        const today = new Date()
        let age = today.getFullYear() - dob.getFullYear()
        const monthDiff = today.getMonth() - dob.getMonth()
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
            age--
        }

        if (age >= 21) {
            localStorage.setItem('age-verified-at', new Date().toISOString())
            setState('verified')
        } else {
            setState('rejected')
        }
    }

    if (state === 'checking' || state === 'verified') {
        return null
    }

    return (
        <div className="fixed inset-0 z-50 bg-bg flex items-center justify-center p-6 overflow-y-auto">
            <div className="max-w-lg w-full bg-surface border border-border rounded p-8 md:p-12 my-8">

                {state === 'show' && (
                    <div>
                        <p className="text-xs tracking-[0.3em] uppercase text-primary mb-2">
                            Age Verification Required
                        </p>
                        <h1 className="text-3xl font-heading mb-4">Welcome</h1>                        <p className="text-text-muted mb-8 text-sm leading-relaxed">
                            You must be 21 years of age or older to enter this site. Please
                            verify your date of birth to continue.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="text-xs tracking-[0.2em] uppercase text-text-muted block mb-2">
                                    Date of Birth
                                </label>
                                <div className="grid grid-cols-3 gap-3">
                                    <input
                                        type="number"
                                        placeholder="MM"
                                        min="1"
                                        max="12"
                                        value={month}
                                        onChange={(e) => setMonth(e.target.value)}
                                        className="bg-bg border border-border rounded px-3 py-2 text-text text-center focus:border-primary outline-none"
                                        aria-label="Month"
                                    />
                                    <input
                                        type="number"
                                        placeholder="DD"
                                        min="1"
                                        max="31"
                                        value={day}
                                        onChange={(e) => setDay(e.target.value)}
                                        className="bg-bg border border-border rounded px-3 py-2 text-text text-center focus:border-primary outline-none"
                                        aria-label="Day"
                                    />
                                    <input
                                        type="number"
                                        placeholder="YYYY"
                                        min="1900"
                                        max={new Date().getFullYear()}
                                        value={year}
                                        onChange={(e) => setYear(e.target.value)}
                                        className="bg-bg border border-border rounded px-3 py-2 text-text text-center focus:border-primary outline-none"
                                        aria-label="Year"
                                    />
                                </div>
                            </div>

                            <label className="flex items-start gap-3 text-sm text-text-muted cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={acknowledged}
                                    onChange={(e) => setAcknowledged(e.target.checked)}
                                    className="mt-1 shrink-0"
                                />
                                <span>
                                    I am 21 years of age or older. I understand that cannabis is
                                    legal where this dispensary operates but may not be legal in
                                    my own jurisdiction, and I accept full responsibility for my
                                    decision to enter this site.
                                </span>
                            </label>

                            {error && (
                                <p className="text-sm text-danger">{error}</p>
                            )}

                            <button
                                type="submit"
                                className="w-full bg-primary text-bg py-3 rounded font-medium tracking-wide hover:opacity-90 transition-opacity"
                            >
                                Enter Site
                            </button>
                        </form>

                        <p className="text-xs text-text-muted text-center mt-8 leading-relaxed">
                            By entering this site, you confirm you are of legal age in your
                            jurisdiction. This product has not been analyzed or approved by
                            the FDA.
                        </p>
                    </div>
                )}

                {state === 'rejected' && (
                    <div className="text-center">
                        <p className="text-xs tracking-[0.3em] uppercase text-danger mb-4">
                            Access Denied
                        </p>
                        <h1 className="text-3xl font-heading mb-4">We're Sorry</h1>
                        <p className="text-text-muted mb-8 text-sm leading-relaxed">
                            You must be 21 years of age or older to enter this site. Please
                            come back when you're of legal age.
                        </p>
                    </div>
                )}

            </div>
        </div>
    )
}