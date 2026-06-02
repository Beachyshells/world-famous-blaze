import { FeaturedPreview } from './components/sections/FeaturedPreview'
import { Hero } from './components/sections/Hero'
import { StoryPreview } from './components/sections/StoryPreview'
import { VisitPreview } from './components/sections/VisitPreview'
import { LearnPreview } from './components/sections/LearnPreview'
import { MerchandisePreview } from './components/sections/MerchandisePreview'

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPreview />
      <MerchandisePreview />
      <VisitPreview />
      <StoryPreview />
      <LearnPreview />
    </>
  )
}