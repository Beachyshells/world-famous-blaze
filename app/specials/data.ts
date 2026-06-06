export interface PromoFeature {
    text: string
    slug: string
}

export interface DailyDeal {
    day: string
    dayShort: string
    title: string
    description: string
    discount: string
    promoFeatures: PromoFeature[]
}

export const weeklyDeals: DailyDeal[] = [
    {
        day: 'Monday',
        dayShort: 'Mon',
        title: 'Monday Special',
        description: 'Monday\'s deal goes here.',
        discount: 'Deal TBD',
        promoFeatures: [],
    },
    {
        day: 'Tuesday',
        dayShort: 'Tue',
        title: 'Tuesday Special',
        description: 'Tuesday\'s deal goes here.',
        discount: 'Deal TBD',
        promoFeatures: [],
    },
    {
        day: 'Wednesday',
        dayShort: 'Wed',
        title: 'Wednesday Special',
        description: 'Wednesday\'s deal goes here.',
        discount: 'Deal TBD',
        promoFeatures: [],
    },
    {
        day: 'Thursday',
        dayShort: 'Thu',
        title: 'Thursday Special',
        description: 'Thursday\'s deal goes here.',
        discount: 'Deal TBD',
        promoFeatures: [],
    },
    {
        day: 'Friday',
        dayShort: 'Fri',
        title: 'Friday Special',
        description: 'Friday\'s deal goes here.',
        discount: 'Deal TBD',
        promoFeatures: [],
    },
    {
        day: 'Saturday',
        dayShort: 'Sat',
        title: 'SUPER SATURDAY',
        description: 'While supplies last. Exclusions apply.',
        discount: 'BUY 1 PEN GET 1 FREE',
        promoFeatures: [
            { text: 'NEW FLOWER — GOING UP EVERY HOUR!', slug: '' },
            { text: 'TEST: PREMIUM GRINDER', slug: 'premium-grinder' },
            { text: 'NUMBER 1 PRICE MATCHING STORE IN TOWN!', slug: '' },
            { text: 'FLASH TATTOOS', slug: '' },
            { text: 'FLASH MANICURES', slug: '' },
            { text: 'GOOD VIBES ONLY', slug: '' }
        ],
    },
    {
        day: 'Sunday',
        dayShort: 'Sun',
        title: 'Sunday Special',
        description: 'Sunday\'s deal goes here.',
        discount: 'Deal TBD',
        promoFeatures: [],
    },
]

// THIS IS THE LINE THAT WAS MISSING
export function getTodaysDeal(): DailyDeal {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const today = days[new Date().getDay()]
    return weeklyDeals.find((deal) => deal.day === today) || weeklyDeals[0]
}