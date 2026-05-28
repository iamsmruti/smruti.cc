import CreatorHero from "./sections/CreatorHero"
import ChannelShowcase from "./sections/ChannelShowcase"
import BlogsWriting from "./sections/BlogsWriting"

const Creator = () => {
  return (
    <div className="w-full overflow-hidden">
      <CreatorHero />
      <ChannelShowcase />
      <BlogsWriting />
    </div>
  )
}

export default Creator
