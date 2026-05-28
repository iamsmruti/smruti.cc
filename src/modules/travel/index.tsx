import TravelHero from "./sections/TravelHero"
import TravelMap from "./sections/TravelMap"
import TravelTimeline from "./sections/TravelTimeline"

const Travel = () => {
  return (
    <div className="w-full overflow-hidden">
      <TravelHero />
      <TravelMap />
      <TravelTimeline />
    </div>
  )
}

export default Travel
