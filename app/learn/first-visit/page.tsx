import LearnArticleLayout from '../LearnArticleLayout'

export default function FirstVisitPage() {
    return (
        <LearnArticleLayout
            category="Shop Learn"
            title="Your First Visit"
            subtitle="What to expect, how it works, and all the ways to win when you come through."
        >
            <p>
                Walking into a dispensary for the first time can feel like a lot. We get it. World Famous Blaze is set up to make it easy, whether you&#39;ve been smoking for years or you&#39;re brand new to this.
            </p>

            <div className="border-t border-border pt-8 mt-8">
                <h2 className="text-2xl font-heading text-text mb-4">When You Walk In</h2>
                <p>
                    Bring your ID — you need to be 21 or older with a valid government-issued ID. No exceptions. Once you&#39;re checked in, our staff is right there to help. No pressure, no rushing. You can browse at your own pace or ask us anything. That&#39;s literally what we&#39;re here for.
                </p>
            </div>

            <div className="border-t border-border pt-8 mt-8">
                <h2 className="text-2xl font-heading text-text mb-4">How We Do Things</h2>
                <p>
                    This isn&#39;t a grab-and-go situation. Our team knows the menu inside and out and they&#39;ll walk you through whatever you need. Not sure what strain to try? We&#39;ll figure it out together. Don&#39;t know the difference between a cart and a concentrate? We&#39;ll explain it without making you feel dumb. That&#39;s the World Famous Blaze way.
                </p>
            </div>

            <div className="border-t border-border pt-8 mt-8">
                <h2 className="text-2xl font-heading text-text mb-4">Ways to Win</h2>
                <p className="mb-6">
                    We like rewarding the people who come through for us, so we&#39;ve built a few ways to make your visit worth even more.
                </p>

                <div className="space-y-8">
                    <div className="border-l-2 border-primary pl-6">
                        <h3 className="text-lg font-heading text-text mb-2">Loyalty Points</h3>
                        <p>
                            Every purchase earns you points. Stack them up and put them toward future visits. The more you shop, the more you save. Simple.
                        </p>
                    </div>

                    <div className="border-l-2 border-primary pl-6">
                        <h3 className="text-lg font-heading text-text mb-2">Spin the Wheel</h3>
                        <p>
                            Spend enough and you get a spin on the prize wheel. Could be a discount, could be free product, could be something else entirely. Only one way to find out.
                        </p>
                    </div>

                    <div className="border-l-2 border-primary pl-6">
                        <h3 className="text-lg font-heading text-text mb-2">Keys to the Vault</h3>
                        <p>
                            Grab a key and unlock the vault of goodies. This one&#39;s as fun as it sounds. Come in and see for yourself.
                        </p>
                    </div>

                    <div className="border-l-2 border-accent pl-6">
                        <h3 className="text-lg font-heading text-text mb-2">The Dollar Dab</h3>
                        <p>
                            Our house dab. When you qualify, you get a dab for a dollar. It&#39;s our way of saying thanks for spending with us. Ask the team how to unlock it.
                        </p>
                    </div>
                </div>
            </div>

            <div className="border-t border-border pt-8 mt-8">
                <h2 className="text-2xl font-heading text-text mb-4">Before You Leave</h2>
                <p>
                    If you&#39;re new, don&#39;t be afraid to start small. You can always come back — we&#39;re open 24/7. And if you have questions after you leave, call us at{' '}
                    <a href="tel:+15183581023" className="text-primary hover:text-accent transition-colors">
                        (518) 358-1023
                    </a>
                    . We&#39;re not going anywhere.
                </p>
            </div>
        </LearnArticleLayout>
    )
}