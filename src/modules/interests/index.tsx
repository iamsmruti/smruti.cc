import InterestsHero from "./sections/InterestsHero"
import GamingSection from "./sections/GamingSection"
import ReadingSection from "./sections/ReadingSection"
import AstronomySection from "./sections/AstronomySection"
import WritingSection from "./sections/WritingSection"

const Interests = () => {
  return (
    <div className="w-full overflow-hidden">
      <InterestsHero />
      <GamingSection />
      <ReadingSection />
      <AstronomySection />
      <WritingSection />
    </div>
  )
}

export default Interests
