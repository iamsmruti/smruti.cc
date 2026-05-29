import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import { useSectionTimer } from "../../../hooks/useSectionTimer"

type PR = { number: number; title: string }

const projects: { name: string; repo: string; prs: PR[] }[] = [
  {
    name: "Parabol",
    repo: "ParabolInc/parabol",
    prs: [
      { number: 11972, title: "fix: enable Update button correctly in PromptResponseEditor after cle…" },
      { number: 10699, title: "fix: Enter Key Functionality in the Response Editor when @ symbol is …" },
      { number: 10649, title: "fix: Restrict Timeline Feed scrolling to its column on /me route" },
    ],
  },
  {
    name: "ReactJS",
    repo: "facebook/react",
    prs: [
      { number: 34329, title: "Update Code Sandbox CI to Node 20 to Match .nvmrc" },
    ],
  },
]

const OpenSource = () => {
  const ref = useSectionTimer("open-source")

  return (
    <div ref={ref as any} className="page-section px-4">
      <div className="max-w-5xl mx-auto">
        <p className="sm:text-5xl text-3xl mb-3">
          <span className="font-extralight text-gray-400">Open </span>
          <span className="font-light">Source</span>
        </p>
        <p className="text-gray-500 mb-10 font-light">Merged PRs into projects I use and admire.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <div
              key={project.name}
              className="glass rounded-2xl p-6 card-hover opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s`, animationFillMode: "forwards" }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-semibold text-white">{project.name}</h3>
                <a
                  href={`https://github.com/${project.repo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full border border-white/[0.08] flex items-center justify-center text-gray-500 hover:text-white hover:border-white/20 transition-colors"
                >
                  <FaGithub className="text-xs" />
                </a>
              </div>

              <ul className="flex flex-col gap-3">
                {project.prs.map((pr) => (
                  <li key={pr.number}>
                    <a
                      href={`https://github.com/${project.repo}/pull/${pr.number}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 group/pr"
                    >
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full flex-shrink-0 bg-[#4c82c5]/[0.08] text-[#4c82c5]/80 border border-[#4c82c5]/20 mt-0.5">
                        #{pr.number}
                      </span>
                      <span className="text-sm text-gray-400 font-light leading-snug group-hover/pr:text-white transition-colors flex-1">
                        {pr.title}
                      </span>
                      <FaExternalLinkAlt className="text-[9px] flex-shrink-0 text-gray-600 group-hover/pr:text-[#4c82c5] mt-1.5 transition-colors" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OpenSource
