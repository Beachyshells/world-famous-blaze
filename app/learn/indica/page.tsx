import type { Metadata } from 'next'
import LearnArticleLayout from '../LearnArticleLayout'
import { Quote, VibeTags, SplitCard, ShelfGrid, Callout, Section, BottomCTA } from '../../components/ArticleBlocks'

export const metadata: Metadata = {
    title: 'Indica Strains | World Famous Blaze',
    description: 'What indica strains are, how they feel, and when to reach for one.',
}

export default function IndicaPage() {
    return (
        <LearnArticleLayout
            category="Strains"
            title="Indica"
            subtitle="The evening strain. Relaxing, calming, and made for winding down."
        >
            <Quote
                text="I was gonna go to the store but then I got comfortable and now I live on this couch."
                attribution="Every indica smoker, every single night"
            />

            <Section title="So what is it?">
                <p>
                    Indica is the &quot;I&apos;m done for the day&quot; strain. If you&apos;re looking to wind down, relax, and let your body just melt into whatever you&apos;re sitting on — this is the one.
                </p>
                <p>
                    Where sativa hits your head, indica hits your body. Your shoulders drop, your jaw unclenches, and suddenly the couch feels like the best place on earth. Some people describe it as a warm blanket that starts in your chest and spreads outward.
                </p>
            </Section>

            <VibeTags
                label="The Vibe"
                vibes={['Relaxed', 'Sleepy', 'Hungry', 'Calm', 'Cozy', 'Heavy', 'Peaceful']}
            />

            <SplitCard
                leftTitle="Reach for an indica when..."
                leftItems={[
                    '🌙 The day is done and you\'re done with it',
                    '🛋️ You want full body relaxation',
                    '🍿 Movie night, snacks, no plans',
                    '😴 You need help falling asleep',
                    '🧘 You want your brain to stop for a minute',
                ]}
                rightTitle="Maybe skip it if..."
                rightItems={[
                    '☀️ You still have stuff to do today',
                    '🚗 You need to drive anywhere',
                    '💪 You\'re trying to be productive',
                    '🎉 You\'re going out with people',
                    '📝 You need to think clearly about anything',
                ]}
            />

            <Section title="What to expect">
                <p>
                    Your thoughts slow down in a good way. You&apos;re not overthinking, you&apos;re not planning tomorrow — you&apos;re just here. That&apos;s what makes indica popular with people who have trouble turning their brain off at night.
                </p>
                <p>
                    The body high is the main event. Everything feels heavier — your eyelids, your arms, your motivation to stand up. This is not a strain for getting things done. This is a strain for being completely okay with getting nothing done.
                </p>
            </Section>

            <Callout title="Fair warning">
                <p>
                    The munchies hit HARD with indica. Like &quot;eating cereal at midnight standing in front of the open fridge&quot; hard. Keep snacks nearby. You&apos;ve been warned.
                </p>
                <p>
                    Also — start small if you&apos;re new. These strains can be heavy and it&apos;s easy to overdo it when you&apos;re feeling relaxed. You can always smoke more but you can&apos;t un-smoke what you already smoked. Set yourself up before you light up.
                </p>
            </Callout>

            <ShelfGrid
                strains={[
                    { name: 'Night Owl', desc: 'Relaxing, calming effects', tier: 'Yellow', color: '#ecc94b' },
                    { name: 'Midnight Moon', desc: 'Rich, earthy flavors', tier: 'Blue', color: '#4299e1' },
                    { name: 'Twilight Reserve', desc: 'High potency indica', tier: 'Pink', color: '#ed64a6' },
                    { name: 'Signature Indica', desc: 'The heaviest hitter we carry.', tier: 'White', color: '#ffffff' },
                ]}
            />

            <BottomCTA
                label="Ready to melt into the couch?"
                href="/menu?category=flower"
                text="Browse Indica Flower"
            />
        </LearnArticleLayout>
    )
}