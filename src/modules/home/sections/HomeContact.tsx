import { FaLinkedin, FaExternalLinkAlt, FaGithub, FaYoutube } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { AiFillInstagram } from "react-icons/ai"

const socials = [
  { icon: FaLinkedin, label: "in/iamsmruti", url: "https://www.linkedin.com/in/iamsmruti/" },
  { icon: AiFillInstagram, label: "__iamsmruti", url: "https://www.instagram.com/__iamsmruti" },
  { icon: FaGithub, label: "iamsmruti", url: "https://github.com/iamsmruti" },
  { icon: FaYoutube, label: "Agile Coder", url: "https://www.youtube.com/@AgileCoderYT" },
  { icon: MdEmail, label: "smruti.ranjan@outlook.in", url: "mailto:smruti.ranjan@outlook.in" },
]

const HomeContact = () => {
  return (
    <div className="px-4 mb-20">
      <div className="max-w-5xl mx-auto">
        <p className="sm:text-5xl text-3xl mb-3 text-center">
          <span className="font-[200] text-gray-400">Let's </span>
          <span className="font-[300] text-white">Connect</span>
        </p>
        <p className="text-gray-500 text-center mb-14 font-light text-lg">
          Feel free to reach out. I don't bite.
        </p>

        <div className="max-w-lg mx-auto flex flex-col gap-3">
          {socials.map((social, i) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center light-card rounded-xl p-4 opacity-0 animate-fade-in-up group"
              style={{ animationDelay: `${i * 0.08}s`, animationFillMode: "forwards" }}
            >
              <div className="flex items-center gap-3">
                <social.icon className="text-xl text-gray-500 group-hover:text-white transition-colors" />
                <span className="text-gray-400 font-light group-hover:text-white transition-colors">{social.label}</span>
              </div>
              <FaExternalLinkAlt className="text-sm text-gray-700 group-hover:text-gray-400 transition-colors" />
            </a>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-400 text-sm font-light">
            © {new Date().getFullYear()} Smruti Ranjan Badatya · Built with care
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomeContact
