import { useState } from "react"
import { HiChevronDown } from "react-icons/hi"
import { FaGithub } from "react-icons/fa"
import { useSectionTimer } from "../../../hooks/useSectionTimer"

const numbers = [
  { value: "90+", label: "Vercel Deployments" },
  { value: "250+", label: "Projects" },
  { value: "5+", label: "Clients" },
]

const Stats = () => {
  const ref = useSectionTimer("stats")
  const [open, setOpen] = useState(false)

  return (
    <div ref={ref as any} className="mt-6 pt-6 border-t border-white/[0.05]">
      {/* Header / toggle */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between text-left group"
        aria-expanded={open}
      >
        <div>
          <p className="sm:text-2xl text-xl mb-1">
            <span className="font-extralight text-gray-400">My </span>
            <span className="font-light">Stats</span>
          </p>
          <p className="text-gray-500 font-light text-sm">for those who care.</p>
        </div>
        <span
          className={`w-9 h-9 flex-shrink-0 rounded-full border border-white/[0.08] flex items-center justify-center text-gray-400 transition-all duration-300 group-hover:text-white group-hover:border-white/20 ${
            open ? "rotate-180" : ""
          }`}
        >
          <HiChevronDown className="text-lg" />
        </span>
      </button>

      {/* Collapsible body */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-[2000px] opacity-100 mt-8" : "max-h-0 opacity-0"
        }`}
      >
        {/* Numbers */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          {numbers.map((n) => (
            <div key={n.label} className="glass rounded-2xl p-6 text-center card-hover">
              <p className="text-4xl md:text-5xl font-light text-white mb-2">{n.value}</p>
              <p className="text-gray-500 font-light text-sm">{n.label}</p>
            </div>
          ))}
        </div>

        {/* GitHub contributions graph */}
        <div className="glass rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <FaGithub className="text-gray-400" />
            <p className="text-gray-400 font-light text-sm">
              GitHub contributions ·{" "}
              <a
                href="https://github.com/iamsmruti"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4c82c5] hover:underline"
              >
                @iamsmruti
              </a>
            </p>
          </div>
          <img
            src="https://ghchart.rshah.org/4c82c5/iamsmruti"
            alt="GitHub contributions graph for @iamsmruti"
            loading="lazy"
            className="w-full"
          />
        </div>
      </div>
    </div>
  )
}

export default Stats
