import { FaYoutube } from "react-icons/fa"
import { SiGumroad } from "react-icons/si"
import KhaoLogo from "../../../assets/khao.png"
import DevianDesktopLogo from "../../../assets/devian-desktop.png"
import CampfyrLogo from "../../../assets/campfyr.png"

const Brands = () => {
  return (
    <div className="page-section px-4">
      <div className="max-w-5xl mx-auto">
        <p className="sm:text-5xl text-3xl mb-3">
          <span className="font-extralight text-gray-400">Building </span>
          <span className="font-light">Brands</span>
        </p>
        <p className="text-gray-500 mb-10 font-light">
          Beyond the day job — I'm building two distinct brands in parallel. One around knowledge sharing, one around products.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Agile Coder */}
          <div className="group glass rounded-2xl overflow-hidden card-hover relative">
            <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full blur-[80px] bg-[#4c82c5] opacity-0 group-hover:opacity-10 transition-opacity duration-700" />

            <div className="p-6 md:p-8 relative z-10">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-xl overflow-hidden border border-[#4c82c5]/20 bg-surface-2 flex-shrink-0">
                  <img
                    src="https://www.agilecoder.in/_next/image?url=%2Fagilecoder-dark.png&w=96&q=75"
                    alt="Agile Coder"
                    className="w-full h-full object-contain p-1"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none" }}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white">Agile Coder</h3>
                  <span className="text-xs text-[#4c82c5] tracking-wider uppercase font-light">Developer Brand</span>
                </div>
              </div>

              <p className="text-gray-400 font-light text-sm leading-relaxed mb-4">
                Agile Coder is my developer brand — a platform built around teaching software engineering the right way. Through tutorials, guides, and deep dives, I'm building a community of developers who care about craft.
              </p>
              <p className="text-gray-500 font-light text-sm leading-relaxed mb-6">
                The goal is to become a trusted name in the developer education space — covering web development, architecture patterns, and the tools that actually matter in production.
              </p>

              {/* Platform rows */}
              <div className="flex flex-col gap-2 mb-6">
                <a href="https://www.youtube.com/@AgileCoderYT" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#4c82c5]/[0.07] border border-[#4c82c5]/15 hover:bg-[#4c82c5]/15 hover:border-[#4c82c5]/30 transition-all group/card">
                  <FaYoutube className="text-2xl text-[#FF0000] flex-shrink-0" />
                  <span className="text-sm text-gray-300 group-hover/card:text-white transition-colors">YouTube Channel</span>
                  <span className="ml-auto text-gray-600 group-hover/card:text-gray-400 text-xs transition-colors">→</span>
                </a>
                <a href="https://blog.agilecoder.in" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#4c82c5]/[0.07] border border-[#4c82c5]/15 hover:bg-[#4c82c5]/15 hover:border-[#4c82c5]/30 transition-all group/card">
                  <div className="w-6 h-6 rounded flex-shrink-0 overflow-hidden">
                    <img src="https://www.agilecoder.in/_next/image?url=%2Fagilecoder-dark.png&w=96&q=75" alt="Tech Blog" className="w-full h-full object-contain" />
                  </div>
                  <span className="text-sm text-gray-300 group-hover/card:text-white transition-colors">Tech Blog</span>
                  <span className="ml-auto text-gray-600 group-hover/card:text-gray-400 text-xs transition-colors">→</span>
                </a>
                <a href="https://agilecoder.gumroad.com" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#4c82c5]/[0.07] border border-[#4c82c5]/15 hover:bg-[#4c82c5]/15 hover:border-[#4c82c5]/30 transition-all group/card">
                  <SiGumroad className="text-2xl text-[#FF90E8] flex-shrink-0" />
                  <span className="text-sm text-gray-300 group-hover/card:text-white transition-colors">Gumroad</span>
                  <span className="ml-auto text-gray-600 group-hover/card:text-gray-400 text-xs transition-colors">→</span>
                </a>
              </div>

              <a href="https://agilecoder.in" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#4c82c5] hover:underline font-light">
                Visit agilecoder.in →
              </a>
            </div>
          </div>

          {/* Devian Labs */}
          <div className="group glass rounded-2xl overflow-hidden card-hover relative">
            <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full blur-[80px] bg-[#4c82c5] opacity-0 group-hover:opacity-10 transition-opacity duration-700" />

            <div className="p-6 md:p-8 relative z-10">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-xl overflow-hidden border border-[#4c82c5]/20 bg-surface-2 flex-shrink-0">
                  <img
                    src="https://devianlabs.com/_next/image?url=%2Fdevian-labs-logo.png&w=64&q=75"
                    alt="Devian Labs"
                    className="w-full h-full object-contain p-1"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none" }}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white">Devian Labs</h3>
                  <span className="text-xs text-[#4c82c5] tracking-wider uppercase font-light">Product Brand</span>
                </div>
              </div>

              <p className="text-gray-400 font-light text-sm leading-relaxed mb-4">
                Devian Labs is my product studio — a small, focused company building software tools I wish existed. Where Agile Coder is about sharing knowledge, Devian Labs is about shipping products.
              </p>
              <p className="text-gray-500 font-light text-sm leading-relaxed mb-6">
                Currently shipped: Devian Desktop. In progress: Khao, a mobile app. The thesis is simple — find a real problem, build the simplest thing that solves it, and keep shipping.
              </p>

              {/* Product rows */}
              <div className="flex flex-col gap-2 mb-6">
                <a href="https://devian.app" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#4c82c5]/[0.07] border border-[#4c82c5]/15 hover:bg-[#4c82c5]/15 hover:border-[#4c82c5]/30 transition-all group/card">
                  <img src={DevianDesktopLogo} alt="Devian Desktop" className="w-6 h-6 rounded object-contain flex-shrink-0" />
                  <span className="text-sm text-gray-300 group-hover/card:text-white transition-colors">Devian Desktop</span>
                  <span className="ml-auto text-gray-600 group-hover/card:text-gray-400 text-xs transition-colors">→</span>
                </a>
                <a href="https://khao.app" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#4c82c5]/[0.07] border border-[#4c82c5]/15 hover:bg-[#4c82c5]/15 hover:border-[#4c82c5]/30 transition-all group/card">
                  <img src={KhaoLogo} alt="Khao" className="w-6 h-6 rounded object-contain flex-shrink-0" />
                  <span className="text-sm text-gray-300 group-hover/card:text-white transition-colors">Khao</span>
                  <span className="ml-auto text-gray-600 group-hover/card:text-gray-400 text-xs transition-colors">→</span>
                </a>
                <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#4c82c5]/[0.07] border border-[#4c82c5]/15 hover:bg-[#4c82c5]/15 hover:border-[#4c82c5]/30 transition-all group/card">
                  <img src={CampfyrLogo} alt="Campfyr" className="w-6 h-6 rounded object-contain flex-shrink-0" />
                  <span className="text-sm text-gray-300 group-hover/card:text-white transition-colors">Campfyr</span>
                  <span className="ml-auto text-gray-600 group-hover/card:text-gray-400 text-xs transition-colors">coming soon</span>
                </a>
              </div>

              <a href="https://devianlabs.com" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#4c82c5] hover:underline font-light">
                Visit devianlabs.com →
              </a>
            </div>
          </div>
        </div>

        {/* Narrative connector */}
        <div className="mt-8 glass rounded-2xl p-6 md:p-8 border-l-4 border-[#4c82c5]/40">
          <p className="text-gray-400 font-light text-sm leading-relaxed">
            <span className="text-white font-normal">The bigger picture:</span> Agile Coder builds the audience and reputation in the developer community. Devian Labs builds the products that community needs. They feed each other — and together they're the long-term play.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Brands
