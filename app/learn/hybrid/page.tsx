import type { Metadata } from 'next'
import LearnArticleLayout from '../LearnArticleLayout'
import { Quote, VibeTags, SplitCard, ShelfGrid, Callout, Section, BottomCTA } from '../../components/ArticleBlocks'

export const metadata: Metadata = {
    title: 'Hybrid Strains | World Famous Blaze',
    description: 'What hybrid strains are, how they feel, and why they are a great starting point.',
}

export default function HybridPage() {
    return (
        <LearnArticleLayout
            category="Strains"
            title="Hybrid"
            subtitle="The best of both worlds. Balanced, versatile, and perfect if you can't decide."
        >
            <Quote
                text="I could go for a hike or I could watch four hours of cooking shows. Either way I'm having a great time."
                attribution="The hybrid sweet spot"
            />

            <Section title="So what is it?">
                <p>
                    Can&apos;t decide? Don&apos;t want to? Hybrids are what happens when sativa and indica get together and make something in between.
                </p>
                <p>
                    Some lean sativa — you feel uplifted but with a little body relaxation mixed in. Some lean indica — you&apos;re chilling but your brain is still turned on. And some sit right in the middle where you&apos;re just... good. Functional but relaxed. Alert but comfortable. Not too much of anything.
                </p>
            </Section>

            <VibeTags
                label="The Vibe"
                vibes={['Balanced', 'Easygoing', 'Versatile', 'Chill but aware', 'Adaptable', 'Smooth', 'Comfortable']}
            />

            <SplitCard
                leftTitle="Reach for a hybrid when..."
                leftItems={[
                    '🤷 You genuinely can\'t decide',
                    '☕ It\'s a lazy weekend afternoon',
                    '🎮 Hanging out, no specific plans',
                    '🌱 You\'re new and figuring out your preference',
                    '🎯 You want a little of everything',
                ]}
                rightTitle="Good to know..."
                rightItems={[
                    '⚖️ 70/30 sativa-dominant = more energy',
                    '⚖️ 70/30 indica-dominant = more relaxation',
                    '⚖️ 50/50 = right down the middle',
                    '🏷️ Check the label or ask us which way it leans',
                    '🔄 No two hybrids hit exactly the same',
                ]}
            />

            <Section title="What to expect">
                <p>
                    You get a little of everything. Your mood lifts while your body simultaneously relaxes. Your mind stays clear enough to hold a conversation, but you&apos;re also comfortable enough to not care if the conversation goes nowhere.
                </p>
                <p>
                    The balance is the whole point. Where sativas can sometimes be too heady and indicas can sometimes be too heavy, hybrids sit in that sweet spot where everything feels right. Not wired, not locked, just present.
                </p>
            </Section>

            <Callout title="Best starting point for new smokers">
                <p>
                    If you&apos;re new to cannabis and don&apos;t know what you prefer, start here. Hybrids give you a taste of both sides so you can figure out which direction you lean. If a hybrid makes you want to get up and do stuff, you&apos;re probably a sativa person. If it makes you want to sink deeper into the cushions, you lean indica.
                </p>
                <p>
                    Either way, you just learned something about yourself. That&apos;s half the fun.
                </p>
            </Callout>

            <Section title="Every hybrid is different">
                <p>
                    This is the thing about hybrids — the ratio changes strain to strain. What you feel from one might be totally different from another. The staff can tell you which way each one leans if you want to get specific, or you can just try a few and see what clicks.
                </p>
            </Section>

            <ShelfGrid
                strains={[
                    { name: 'Balanced Blend', desc: 'Even 50/50 mix', tier: 'Yellow', color: '#ecc94b' },
                    { name: 'True Balance', desc: 'Perfectly proportioned', tier: 'Blue', color: '#4299e1' },
                    { name: 'Craft Hybrid', desc: 'Small-batch, complex flavor', tier: 'Pink', color: '#ed64a6' },
                    { name: 'Premium Hybrid Reserve', desc: 'When it\'s gone, it\'s gone.', tier: 'White', color: '#ffffff' },
                ]}
            />

            <BottomCTA
                label="Ready to find your balance?"
                href="/menu?category=flower"
                text="Browse Hybrid Flower"
            />
        </LearnArticleLayout>
    )
}