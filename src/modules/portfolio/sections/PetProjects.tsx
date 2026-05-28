import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import projects from '../data/projects'
import { useSectionTimer } from '../../../hooks/useSectionTimer'
import { event as trackEvent } from "../../../utils/gtag"

const PetProjects = () => {
  const ref = useSectionTimer("pet-projects")

  const reportClick = (title: string, type: "live" | "source") => {
    trackEvent({
      action: "project_click",
      category: "engagement",
      label: `${title} - ${type}`,
    })
  }

  return (
    <div ref={ref as any} className="page-section px-4">
      <div className="max-w-5xl mx-auto">
        <p className="sm:text-5xl text-3xl mb-3">
          <span className="font-extralight text-gray-400">Side </span>
          <span className="font-light">Projects</span>
        </p>
        <p className="text-gray-500 mb-10 font-light">Things I build when I'm curious. Some are just POCs.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group glass rounded-2xl overflow-hidden card-hover opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.08}s`, animationFillMode: 'forwards' }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => reportClick(project.title, "live")}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </a>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-44 object-cover"
                  />
                )}

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-medium text-white">{project.title}</h3>
                  <div className="flex gap-2 ml-2 flex-shrink-0">
                    {project.link && (
                      <a
                        href={project.link}
                        onClick={() => reportClick(project.title, "live")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 rounded-full border border-white/[0.08] flex items-center justify-center text-gray-500 hover:text-white hover:border-white/20 transition-colors"
                      >
                        <FaExternalLinkAlt className="text-[10px]" />
                      </a>
                    )}
                    {project.source && (
                      <a
                        href={project.source}
                        onClick={() => reportClick(project.title, "source")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 rounded-full border border-white/[0.08] flex items-center justify-center text-gray-500 hover:text-white hover:border-white/20 transition-colors"
                      >
                        <FaGithub className="text-xs" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">{project.description}</p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech, j) => (
                    <span
                      key={j}
                      className="text-[10px] px-2.5 py-1 rounded-full font-light"
                      style={{
                        backgroundColor: '#6C63FF18',
                        color: '#9B93FF',
                        border: '1px solid #6C63FF30',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {!project.source && !project.link && (
                  <p className="text-gray-600 text-xs font-light italic mt-2">Private / Coming soon</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PetProjects
