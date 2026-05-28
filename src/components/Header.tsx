import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { HiMenuAlt3, HiX } from "react-icons/hi"

const links = [
  { name: "Home", path: "/" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Books", path: "/books" },
  { name: "Travel Log", path: "/travel-log" },
  { name: "Creator", path: "/creator" },
]

const Header = ({ isDark }: { isDark: boolean }) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const handleNav = (path: string) => {
    navigate(path)
    setMobileOpen(false)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/"
    return pathname.startsWith(path)
  }

  const navBase = isDark
    ? "text-gray-400 hover:text-white hover:bg-white/[0.05]"
    : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"

  const navActive = isDark
    ? "text-white bg-white/[0.08] font-medium"
    : "text-gray-900 bg-gray-100 font-medium"

  const logoText = isDark ? "text-white" : "text-gray-900"
  const logoSub = isDark ? "text-gray-500" : "text-gray-400"
  const borderClass = isDark ? "border-b border-white/[0.04]" : "border-b border-gray-100"

  return (
    <>
      <nav className={`py-4 flex justify-between items-center lg:px-0 px-3 relative z-50 ${borderClass} mb-2`}>
        <p
          onClick={() => handleNav("/")}
          className={`text-lg font-light cursor-pointer tracking-wide transition-colors ${logoText}`}
        >
          <span className="font-semibold">smruti</span>
          <span className={`ml-1 text-sm hidden sm:inline ${logoSub}`}>.cc</span>
        </p>

        <div className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <button
              key={link.path}
              onClick={() => handleNav(link.path)}
              className={`px-3 py-1.5 rounded-lg text-sm transition-all duration-200 ${
                isActive(link.path) ? navActive : navBase
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden text-2xl transition-colors z-50 ${isDark ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"}`}
        >
          {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </nav>

      {mobileOpen && (
        <div className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-2 animate-fade-in ${isDark ? "bg-black/95 backdrop-blur-xl" : "bg-white/98 backdrop-blur-xl"}`}>
          {links.map((link, i) => (
            <button
              key={link.path}
              onClick={() => handleNav(link.path)}
              className={`text-2xl py-3 px-8 rounded-xl transition-all duration-200 opacity-0 animate-fade-in-up ${
                isActive(link.path)
                  ? isDark ? "text-white font-medium" : "text-gray-900 font-medium"
                  : isDark ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-900"
              }`}
              style={{ animationDelay: `${i * 0.08}s`, animationFillMode: "forwards" }}
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </>
  )
}

export default Header
