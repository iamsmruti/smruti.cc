import HomeHero from "./sections/HomeHero"
import LifeWorlds from "./sections/LifeWorlds"
import HomeContact from "./sections/HomeContact"

const Home = () => {
  return (
    <div className="w-full overflow-hidden">
      <HomeHero />
      <LifeWorlds />
      <HomeContact />
    </div>
  )
}

export default Home
