import { FeaturedPreview } from './components/sections/FeaturedPreview'
import { Hero } from './components/sections/Hero'
import { StoryPreview } from './components/sections/StoryPreview'
import { VisitPreview } from './components/sections/VisitPreview'
import { LearnPreview } from './components/sections/LearnPreview'

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPreview />
      <VisitPreview />
      <StoryPreview />
      <LearnPreview />
    </>
  )
}