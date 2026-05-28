import { FaLinkedin, FaExternalLinkAlt } from "react-icons/fa"
import { useSectionTimer } from '../../../hooks/useSectionTimer'

const companies = [
  {
    name: "eLitmus Evaluation Pvt. Ltd.",
    role: "Full Stack Developer",
    description: "Working full-time building tools and exploring how AI is transforming assessments and skill evaluations.",
    logo: "https://www.elitmus.com/blog/images/elitmus-only-logo.svg",
    website: "https://www.elitmus.com",
    linkedin: "https://www.linkedin.com/company/elitmus-evaluation-pvt-ltd",
    accentColor: "#4c82c5",
    tag: "Full-time",
  },
  {
    name: "Devian Labs",
    role: "Founder",
    description: "Building my own product studio on the side. Shipped Devian Desktop, currently building Khao.",
    logo: "https://devianlabs.com/_next/image?url=%2Fdevian-labs-logo.png&w=64&q=75",
    website: "https://devianlabs.com",
    linkedin: "https://www.linkedin.com/company/devian-labs/",
    accentColor: "#4c82c5",
    tag: "Startup",
  },
]

const Career = () => {
  const ref = useSectionTimer("career")

  return (
    <div ref={ref as any} id="eng-career" className="page-section px-4">
      <div className="max-w-5xl mx-auto">
        <p className="sm:text-5xl text-3xl mb-3">
          <span className="font-extralight text-gray-400">What I'm </span>
          <span className="font-light">Doing Now</span>
        </p>
        <p className="text-gray-500 mb-10 font-light">I split my time between my full-time role and my own startup. Both are moving fast.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {companies.map((company) => (
            <div key={company.name} className="group glass rounded-2xl p-6 card-hover relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[60px] opacity-0 group-hover:opacity-15 transition-opacity duration-500"
                style={{ backgroundColor: company.accentColor }}
              />
              <div className="relative z-10">
                {/* Header row: logo + name + tag */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl overflow-hidden border border-white/10 bg-surface-2 flex-shrink-0">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="w-full h-full object-contain p-1"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none"
                        ;(e.target as HTMLImageElement).parentElement!.innerHTML = "🏢"
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-medium text-white leading-snug">{company.name}</h3>
                    <p className="text-xs font-light mt-0.5" style={{ color: company.accentColor }}>{company.role}</p>
                  </div>
                  <span
                    className="text-[10px] px-2.5 py-1 rounded-full font-light flex-shrink-0"
                    style={{ backgroundColor: company.accentColor + "18", color: company.accentColor, border: `1px solid ${company.accentColor}30` }}
                  >
                    {company.tag}
                  </span>
                </div>

                <p className="text-gray-400 font-light text-sm leading-relaxed mb-5">
                  {company.description}
                </p>

                {/* Links */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/[0.05]">
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-white transition-colors"
                  >
                    <FaExternalLinkAlt className="text-[10px]" />
                    <span>Website</span>
                  </a>
                  <span className="text-gray-700 text-xs">·</span>
                  <a
                    href={company.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-[#0A66C2] transition-colors"
                  >
                    <FaLinkedin className="text-sm" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Career
