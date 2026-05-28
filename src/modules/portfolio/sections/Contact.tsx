import React, { useState } from "react"
import { FaLinkedin, FaExternalLinkAlt, FaGithub } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { AiFillInstagram } from "react-icons/ai"
import { useSectionTimer } from '../../../hooks/useSectionTimer'

const socials = [
  {
    name: "LinkedIn",
    handle: "in/iamsmruti",
    url: "https://www.linkedin.com/in/iamsmruti/",
    icon: FaLinkedin,
  },
  {
    name: "GitHub",
    handle: "iamsmruti",
    url: "https://github.com/iamsmruti",
    icon: FaGithub,
  },
  {
    name: "Instagram",
    handle: "__iamsmruti",
    url: "https://www.instagram.com/__iamsmruti",
    icon: AiFillInstagram,
  },
  {
    name: "Email",
    handle: "smruti.ranjan@outlook.in",
    url: "mailto:smruti.ranjan@outlook.in",
    icon: MdEmail,
  },
]

const Contact = () => {
  const ref = useSectionTimer("contact")
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [formStatus, setFormStatus] = useState({ submitted: false, success: false, message: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const url = import.meta.env.VITE_GOOGLE_FORM_URL || ""
    try {
      const response = await fetch(url, { method: "POST", body: JSON.stringify(formData) })
      const result = await response.json()
      if (result.result === "success") {
        setFormStatus({ submitted: true, success: true, message: "Thanks! I'll get back to you." })
        setFormData({ name: "", email: "", message: "" })
      } else throw new Error("Failed")
    } catch {
      setFormStatus({ submitted: true, success: false, message: "Something went wrong. Please try again." })
    }
  }

  return (
    <div ref={ref as any} className="page-section px-4">
      <div className="max-w-5xl mx-auto">
        <p className="sm:text-5xl text-3xl mb-3">
          <span className="font-extralight text-gray-400">Let's </span>
          <span className="font-light">Talk</span>
        </p>
        <p className="text-gray-500 mb-10 font-light">Got a project in mind? Or just want to say hi?</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Social links */}
          <div className="space-y-3">
            {socials.map((s, i) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass rounded-xl p-4 flex items-center justify-between card-hover opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.08}s`, animationFillMode: 'forwards' }}
              >
                <div className="flex items-center gap-3">
                  <s.icon className="text-lg text-gray-400 group-hover:text-white transition-colors" />
                  <span className="text-gray-400 font-light text-sm group-hover:text-gray-200 transition-colors">{s.handle}</span>
                </div>
                <FaExternalLinkAlt className="text-xs text-gray-600 group-hover:text-gray-400 transition-colors" />
              </a>
            ))}
          </div>

          {/* Contact form */}
          <div className="glass rounded-2xl p-6 md:p-8">
            <p className="text-lg font-medium text-white mb-5">Send a Message</p>

            {formStatus.submitted && (
              <div className={`p-3 rounded-lg mb-4 text-sm font-light ${formStatus.success ? "bg-green-400/10 text-green-400 border border-green-400/20" : "bg-red-400/10 text-red-400 border border-red-400/20"}`}>
                {formStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text" name="name" placeholder="Your Name"
                value={formData.name} onChange={handleChange} required
                className="w-full bg-surface-2 border border-surface-border rounded-xl px-4 py-3 text-sm font-light text-white placeholder-gray-600 focus:outline-none focus:border-[#4c82c5]/30 transition-colors"
              />
              <input
                type="email" name="email" placeholder="Your Email"
                value={formData.email} onChange={handleChange} required
                className="w-full bg-surface-2 border border-surface-border rounded-xl px-4 py-3 text-sm font-light text-white placeholder-gray-600 focus:outline-none focus:border-[#4c82c5]/30 transition-colors"
              />
              <textarea
                name="message" placeholder="Your Message"
                value={formData.message} onChange={handleChange} required rows={5}
                className="w-full bg-surface-2 border border-surface-border rounded-xl px-4 py-3 text-sm font-light text-white placeholder-gray-600 focus:outline-none focus:border-[#4c82c5]/30 transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full py-3 bg-white text-black rounded-xl text-sm font-medium hover:shadow-lg hover:shadow-white/10 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
