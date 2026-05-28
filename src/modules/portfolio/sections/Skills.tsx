import { useSectionTimer } from '../../../hooks/useSectionTimer'

const capabilities = [
  {
    title: "Full-Stack Web Development",
    description: "End to end — UI, API, database, deployment. Most of my work at eLitmus and on personal projects sits across the whole stack rather than just one layer.",
    tools: ["React", "Next.js", "Node.js", "Rails", "TypeScript", "MongoDB", "MySQL"],
  },
  {
    title: "Systems Thinking & Architecture",
    description: "I try to think about structure before writing code. Modular monorepos, clean API design, domain separation — things that make a project easier to work in over time.",
    tools: ["NX Monorepo", "REST APIs", "Express", "Domain-Driven Design", "Docker"],
  },
  {
    title: "My AI Toolkit",
    description: "AI has changed how I work day to day. I use Claude Code for generating and reviewing code, Antigravity as my code editor, Adobe Firefly for images, logos, and graphics, and LangChain and LangGraph for building agent workflows.",
    tools: ["Claude Code", "Antigravity", "Adobe Firefly", "LangChain", "LangGraph"],
  },
  {
    title: "Cloud Expertise",
    description: "I understand pipelines and deployments beyond just writing the code. I've worked with AWS services, set up CI/CD workflows, and managed containerised apps — enough to get things shipped and running.",
    tools: ["AWS", "Docker", "CI/CD", "Git", "Deployment Pipelines"],
  },
]

const Skills = () => {
  const ref = useSectionTimer("skills")

  return (
    <div ref={ref as any} className="page-section px-4">
      <div className="max-w-5xl mx-auto">
        <p className="sm:text-5xl text-3xl mb-3">
          <span className="font-extralight text-gray-400">How I </span>
          <span className="font-light">Build</span>
        </p>
        <p className="text-gray-500 mb-10 font-light">
          Tools are secondary. Here's what I can actually deliver.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {capabilities.map((cap, i) => (
            <div
              key={cap.title}
              className="group glass rounded-2xl p-6 card-hover relative overflow-hidden opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'forwards' }}
            >
              {/* Single accent bar */}

              {/* Hover glow */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full blur-[80px] bg-[#4c82c5] opacity-0 group-hover:opacity-[0.08] transition-opacity duration-700" />

              <div className="relative z-10">
                <div className="flex items-start gap-3 mb-4">
                  <h3 className="text-base font-semibold text-white leading-snug">{cap.title}</h3>
                </div>

                <p className="text-gray-400 font-light text-sm leading-relaxed mb-5">
                  {cap.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {cap.tools.map((tool) => (
                    <span key={tool} className="text-[10px] px-2 py-0.5 rounded-full font-light bg-[#4c82c5]/[0.08] text-[#4c82c5]/80 border border-[#4c82c5]/20">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
