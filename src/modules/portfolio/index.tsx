import Hero from "./sections/Hero"
import Career from "./sections/Career"
import Brands from "./sections/Brands"
import FreelanceClients from "./sections/FreelanceClients"
import Skills from "./sections/Skills"
import Contact from "./sections/Contact"

const Portfolio = () => {
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <Career />
      <Brands />
      <FreelanceClients />
      <Skills />
      <Contact />
    </div>
  )
}

export default Portfolio
