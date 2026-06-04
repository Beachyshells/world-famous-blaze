import type { Metadata } from 'next'
import LearnArticleLayout from '../LearnArticleLayout'

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
            <p>
                So you've got stuff to do but you still want to smoke? Sativa's your pick. These strains are known for that heady, uplifting buzz — the kind where you clean your whole house, go for a walk, or suddenly become a genius at whatever hobby you forgot you had.
            </p>
            <p>
                Sativas tend to hit more in the head than the body. A lot of people reach for them during the day because they keep you moving instead of melting into the couch. Think creative energy, good conversations, and that &quot;everything is interesting right now&quot; feeling.
            </p>
            <p>
                They're also a popular choice if you're hanging out with people. Social settings, outdoor adventures, music, art — sativas tend to pair well with doing things rather than just sitting there.
            </p>
            <p>
                A few things to keep in mind though. If you're someone who gets anxious or overthinks, strong sativas can sometimes crank that up. Start low, see how you feel, and work your way up. Everyone's different and the same strain can hit different people in totally different ways.
            </p>

            <div className="border-t border-border pt-8 mt-8">
                <p className="text-sm font-heading text-text mb-2">Common vibes people describe</p>
                <p className="text-text-muted">
                    Energized, focused, creative, talkative, uplifted.
                </p>
            </div>
        </LearnArticleLayout>
    )
}