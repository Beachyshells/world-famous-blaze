import type { Metadata } from 'next'
import LearnArticleLayout from '../LearnArticleLayout'
import { Quote, VibeTags, SplitCard, ShelfGrid, Callout, Section, BottomCTA } from '../../components/ArticleBlocks'

export const metadata: Metadata = {
    title: 'Sativa Strains | World Famous Blaze',
    description: 'What sativa strains are, how they feel, and when to reach for one.',
}

export default function SativaPage() {
    return (
        <LearnArticleLayout
            category="Strains"
            title="Sativa"
            subtitle="The daytime strain. Uplifting, energizing, and built for people who still have things to do."
        >
            <Quote
                text="I smoked and then I cleaned my entire apartment and reorganized my closet by color."
                attribution="Every sativa smoker, at some point"
            />

            <Section title="So what is it?">
                <p>
                    Sativa is the &quot;get stuff done&quot; strain. Head high, not body high. You&apos;re up, you&apos;re moving, you&apos;re suddenly interested in everything. Colors look better, music sounds better, and you&apos;ll probably want to talk about whatever you&apos;re thinking about.
                </p>
                <p>
                    These strains hit more in the head than the body. That&apos;s why people reach for them during the day — they keep you moving instead of melting into the couch.
                </p>
            </Section>

            <VibeTags
                label="The Vibe"
                vibes={['Energized', 'Creative', 'Talkative', 'Focused', 'Uplifted', 'Motivated', 'Giggly']}
            />

            <SplitCard
                leftTitle="Reach for a sativa when..."
                leftItems={[
                    '☀️ It\'s daytime and you\'ve got plans',
                    '🎨 You want to make or fix something',
                    '🎵 You\'re going to a show or hanging out',
                    '🥾 You\'re heading outside',
                    '💬 You want good conversation',
                ]}
                rightTitle="Maybe skip it if..."
                rightItems={[
                    '😬 You tend to overthink or get anxious',
                    '😴 You\'re trying to fall asleep',
                    '🛋️ You want full body relaxation',
                    '🤯 You\'re brand new and unsure',
                    '📵 You need your brain OFF not ON',
                ]}
            />

            <Section title="What to expect">
                <p>
                    Most people describe it as a head high — you feel it behind your eyes and in your thoughts before you feel it anywhere else. The energy side is real. Sativas can give you that motivated feeling where suddenly every task seems doable.
                </p>
                <p>
                    Some people use them for workouts, hikes, or creative work. Others just like the mood boost on a regular afternoon. Either way, you&apos;re not sitting still.
                </p>
            </Section>

            <Callout title="Real talk">
                <p>
                    If you&apos;ve had a sativa that made you jittery, don&apos;t write off the whole category. Try a different strain or drop down a tier. The experience varies a LOT from product to product. Start low, go slow, find your lane.
                </p>
            </Callout>

            <ShelfGrid
                strains={[
                    { name: 'Sunny Haze', desc: 'Energizing citrus notes', tier: 'Yellow', color: '#ecc94b' },
                    { name: 'Tropical Sunrise', desc: 'Exotic flavor profile', tier: 'Blue', color: '#4299e1' },
                    { name: 'Craft Sativa', desc: 'Small-batch, premium', tier: 'Pink', color: '#ed64a6' },
                    { name: 'Signature Sativa', desc: 'The best we carry. Period.', tier: 'White', color: '#ffffff' },
                ]}
            />

            <BottomCTA
                label="Ready to try one?"
                href="/menu?category=flower"
                text="Browse Sativa Flower"
            />
        </LearnArticleLayout>
    )
}