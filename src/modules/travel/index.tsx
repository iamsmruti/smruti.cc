import { TravelProvider } from './context/TravelContext'
import TravelSidebar from './sections/TravelSidebar'
import TravelMap from './sections/TravelMap'
import TravelTimeline from './sections/TravelTimeline'

const Travel = () => {
  return (
    <TravelProvider>
      <div className="max-w-[1100px] mx-auto w-full">
        {/* Cinematic experience: sidebar + map */}
        <div className="flex" style={{ height: 'calc(100vh - 60px)' }}>
          <TravelSidebar />
          <TravelMap />
        </div>

        {/* Full journey grid below */}
        <TravelTimeline />
      </div>
    </TravelProvider>
  )
}

export default Travel
