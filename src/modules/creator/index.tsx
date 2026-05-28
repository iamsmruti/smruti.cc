import CreatorHero from "./sections/CreatorHero"
import ChannelShowcase from "./sections/ChannelShowcase"

const Creator = () => {
  return (
    <div className="w-full overflow-hidden">
      <CreatorHero />
      <ChannelShowcase />
    </div>
  )
}

export default Creator
