import { FaYoutube, FaTelegram, FaLinkedin } from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai"
import { HiExternalLink, HiGlobe } from "react-icons/hi"
import { blogIndex } from "../../../content"

const iconColors = new Map<unknown, string>([
  [FaYoutube, "#FF0000"],
  [AiFillInstagram, "#E4405F"],
  [FaTelegram, "#26A5E4"],
  [FaLinkedin, "#0A66C2"],
  [HiGlobe, "#4c82c5"],
])

const GAME_PLACEHOLDER = `data:image/svg+xml,${encodeURIComponent(`
<svg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450'>
  <defs>
    <linearGradient id='bg' x1='0' y1='0' x2='0' y2='1'>
      <stop offset='0' stop-color='#0a1326'/>
      <stop offset='1' stop-color='#05070d'/>
    </linearGradient>
    <radialGradient id='glow' cx='50%' cy='40%' r='60%'>
      <stop offset='0' stop-color='#4c82c5' stop-opacity='0.30'/>
      <stop offset='1' stop-color='#4c82c5' stop-opacity='0'/>
    </radialGradient>
  </defs>
  <rect width='800' height='450' fill='url(#bg)'/>
  <rect width='800' height='450' fill='url(#glow)'/>
  <g stroke='#4c82c5' stroke-opacity='0.20'>
    <line x1='0' y1='300' x2='800' y2='300'/>
    <line x1='0' y1='320' x2='800' y2='320'/>
    <line x1='0' y1='346' x2='800' y2='346'/>
    <line x1='0' y1='380' x2='800' y2='380'/>
    <line x1='0' y1='420' x2='800' y2='420'/>
    <line x1='400' y1='300' x2='-260' y2='450'/>
    <line x1='400' y1='300' x2='60' y2='450'/>
    <line x1='400' y1='300' x2='240' y2='450'/>
    <line x1='400' y1='300' x2='400' y2='450'/>
    <line x1='400' y1='300' x2='560' y2='450'/>
    <line x1='400' y1='300' x2='740' y2='450'/>
    <line x1='400' y1='300' x2='1060' y2='450'/>
  </g>
  <text x='400' y='278' text-anchor='middle' font-family='Inter, Arial, sans-serif' font-size='34' font-weight='600' fill='#ffffff' letter-spacing='2'>SILICON M-ULATION</text>
  <text x='400' y='303' text-anchor='middle' font-family='Inter, Arial, sans-serif' font-size='13' font-weight='400' fill='#4c82c5' letter-spacing='6'>GAMING · EMULATION</text>
</svg>`)}`

const channels = [
  {
    name: "Agile Coder",
    handle: "@AgileCoderYT",
    thumbnail: "https://yt3.ggpht.com/9JcW1BVwWuVtGf4jYniQqEU3MDICPpIYVx8xoRsOg3nx6-8wM-GsFAtHk92VnWpYXgMOgEMlMA=s600-c-k-c0x00ffffff-no-rj-rp-mo",
    description: "My developer brand. Tech tutorials, project setups, and deep dives into modern web development — NX Monorepo, Node + Express, React, and everything in between.",
    tags: ["Web Dev", "Tutorials", "React", "Node.js"],
    links: [
      { Icon: HiGlobe,         label: "agilecoder.in",   url: "https://agilecoder.in",                    accent: false },
      { Icon: FaYoutube,       label: "AgileCoderYT",    url: "https://www.youtube.com/@AgileCoderYT",    accent: false },
      { Icon: AiFillInstagram, label: "@agilecoder_",    url: "https://www.instagram.com/agilecoder_",    accent: false },
      { Icon: FaTelegram,      label: "AgileCoderYT",    url: "https://t.me/AgileCoderYT",                accent: false },
    ],
    youtubeUrl: "https://www.youtube.com/@AgileCoderYT",
    blogUrl: "https://agilecoder.in/blog",
    blogLabel: "agilecoder.in/blog",
    videos: [
      { title: "NX Monorepo: Manage Multiple React Apps & Libraries", url: "https://www.youtube.com/watch?v=XMv-wWO5RKQ", thumbnail: "https://img.youtube.com/vi/XMv-wWO5RKQ/maxresdefault.jpg" },
      { title: "The Right Way to Setup Node, Express + TS Project", url: "https://www.youtube.com/watch?v=oODlPLfnTIk", thumbnail: "https://img.youtube.com/vi/oODlPLfnTIk/maxresdefault.jpg" },
    ],
    posts: [
      { title: "Manage Multiple Claude Code Profiles like a Pro", url: "https://www.agilecoder.in/blog/manage-multiple-claude-code-profiles-like-a-pro", thumbnail: "https://res.cloudinary.com/dqr9hdjjp/image/upload/v1779821602/agilecoder/amyqhl86g0cvhr8bjdoj.png", date: "May 27, 2026" },
      { title: "Building a Developer Friendly Business: Why Should You Care?", url: "https://www.agilecoder.in/blog/building-a-developer-friendly-business-why-should-you-care", thumbnail: "https://res.cloudinary.com/dqr9hdjjp/image/upload/v1779303037/agilecoder/posts/agilecoder/posts/building-a-developer-friendly-business-why-should-you-care.jpg", date: "May 21, 2026" },
    ],
  },
  {
    name: "Silicon Mulation",
    handle: "@silicon-mulation",
    thumbnail: "",
    description: "Exploring the intersection of silicon and simulation. AI art, creative coding experiments, and the kind of tech that feels like magic.",
    tags: ["Gaming", "Apple Silicon", "Emulation"],
    links: [
      { Icon: HiGlobe,    label: "silicon-mulation.vercel.app", url: "https://silicon-mulation.vercel.app", accent: false },
      { Icon: FaYoutube,  label: "silicon-mulation",            url: "https://www.youtube.com/@silicon-mulation", accent: false },
      { Icon: FaTelegram, label: "SiliconMulation",             url: "https://t.me/SiliconMulation",             accent: false },
    ],
    youtubeUrl: "https://www.youtube.com/@silicon-mulation",
    blogUrl: "https://silicon-mulation.vercel.app",
    blogLabel: "artfulcoding.in",
    videos: [
      { title: "Is Macbook Pro M4 Pro powerful enough for RPCS3 Emulation", url: "https://www.youtube.com/watch?v=KTmCskflbQ4", thumbnail: "https://img.youtube.com/vi/KTmCskflbQ4/maxresdefault.jpg" },
      { title: "Can a MacBook Survive 25 Years of GTA? You'll be surprised!", url: "https://www.youtube.com/watch?v=YMSxKLvlaSM", thumbnail: "https://img.youtube.com/vi/YMSxKLvlaSM/maxresdefault.jpg" },
    ],
    posts: [
      { title: "What's the Difference b/w Emulation and Virtualization", url: "https://silicon-mulation.vercel.app/blogs/what-s-the-difference-b-w-emulation-and-virtualization", thumbnail: GAME_PLACEHOLDER, date: "2026" },
      { title: "Best PS1 Emulators for Mac 2026", url: "https://silicon-mulation.vercel.app/blogs/best-ps1-emulators-for-mac-2026", thumbnail: GAME_PLACEHOLDER, date: "2026" },
    ],
  },
  {
    name: "Smrutify",
    handle: "@smrutify",
    thumbnail: "https://yt3.ggpht.com/7ukFRlV0drn_IX_WVlxE45RnZm-n0n10ZL6bmqIoTS4B3t_VVIrIFPEB6xC3eNT6MIISJSx7Hg=s600-c-k-c0x00ffffff-no-rj-rp-mo",
    description: "The personal side. Vlogs, life updates, stories from the road, and everything that doesn't fit the tech-only box.",
    tags: ["Vlogs", "Lifestyle", "Personal"],
    links: [
      { Icon: HiGlobe,         label: "smruti.cc",        url: "https://smruti.cc",                              accent: false },
      { Icon: FaYoutube,       label: "@smrutify",        url: "https://www.youtube.com/@smrutify",             accent: false },
      { Icon: AiFillInstagram, label: "__iamsmruti",      url: "https://www.instagram.com/__iamsmruti",         accent: false },
      { Icon: FaLinkedin,      label: "iamsmruti",        url: "https://www.linkedin.com/in/iamsmruti/",        accent: false },
    ],
    youtubeUrl: "https://www.youtube.com/@smrutify",
    blogUrl: "/blog",
    blogLabel: "smruti.cc/blog",
    videos: [
      { title: "3 Days in Phuket, Thailand 🇹🇭 | Travel, Food & Adventure Vlog", url: "https://www.youtube.com/watch?v=IX4zr9GHzTw", thumbnail: "https://img.youtube.com/vi/IX4zr9GHzTw/maxresdefault.jpg" },
      { title: "A Memory | Teacher's Day Celebration with Manish Sir at ALLEN BBSR | Leader Batch (2019-2020)", url: "https://www.youtube.com/watch?v=AfvH8nWRSEA", thumbnail: "https://img.youtube.com/vi/AfvH8nWRSEA/hqdefault.jpg" },
    ],
    posts: blogIndex.map((p) => ({
      title: p.title,
      url: `/blog/${p.slug}`,
      thumbnail: p.image,
      date: new Date(p.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }),
    })),
  },
]

const ChannelShowcase = () => {
  return (
    <div className="page-section px-4">
      <div className="max-w-5xl mx-auto space-y-6">
        {channels.map((channel, i) => (
          <div
            key={channel.name}
            className="light-card rounded-2xl overflow-hidden opacity-0 animate-fade-in-up"
            style={{ animationDelay: `${i * 0.12}s`, animationFillMode: "forwards" }}
          >
            {/* Top accent bar */}
            <div className="h-[3px] w-full bg-[#4c82c5]" />

            {/* 3-column layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.05]">

              {/* Col 1 — identity */}
              <div className="p-6 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  {channel.thumbnail ? (
                    <img src={channel.thumbnail} alt={channel.name} className="w-12 h-12 rounded-full object-cover flex-shrink-0" />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-xl flex-shrink-0">🎥</div>
                  )}
                  <div>
                    <h3 className="text-base font-semibold text-white">{channel.name}</h3>
                    <span className="text-xs text-gray-500 -mt-1 block">{channel.handle}</span>
                  </div>
                </div>

                <p className="text-gray-500 font-light text-sm leading-relaxed">{channel.description}</p>

                <div className="flex flex-wrap gap-1.5">
                  {channel.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full font-light bg-[#4c82c5]/10 text-[#4c82c5] border border-[#4c82c5]/20">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col gap-2 mt-auto pt-2 border-t border-white/[0.05]">
                  {channel.links.map(({ Icon, label, url }) => (
                    <a key={label} href={url} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs text-gray-500 hover:text-white transition-colors">
                      <Icon className="text-sm flex-shrink-0" style={{ color: iconColors.get(Icon) ?? "#4c82c5" }} />
                      <span className="truncate">{label}</span>
                      <HiExternalLink className="text-xs opacity-30 ml-auto flex-shrink-0" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Col 2 + 3 — content */}
              <div className="col-span-1 md:col-span-2 flex flex-col divide-y divide-white/[0.05]">

                {/* Videos */}
                {channel.videos.length > 0 && (
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <FaYoutube className="text-[#4c82c5] text-sm" />
                        <span className="text-xs font-medium text-gray-300 uppercase tracking-wider">Featured Videos</span>
                      </div>
                      <a href={channel.youtubeUrl} target="_blank" rel="noopener noreferrer"
                        className="text-xs text-gray-600 hover:text-[#4c82c5] transition-colors">View all →</a>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {channel.videos.slice(0, 2).map((video, vi) => (
                        <a key={vi} href={video.url} target="_blank" rel="noopener noreferrer" className="group block">
                          <div className="relative overflow-hidden rounded-lg aspect-video bg-white/[0.04] mb-2">
                            <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                              <div className="w-8 h-8 rounded-full bg-[#4c82c5] flex items-center justify-center">
                                <span className="text-white text-xs ml-0.5">▶</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-xs text-gray-400 group-hover:text-white transition-colors line-clamp-2 leading-relaxed">
                            {video.title}
                          </p>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Posts */}
                {channel.posts.length > 0 && (
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-[#4c82c5] text-sm">✍</span>
                        <span className="text-xs font-medium text-gray-300 uppercase tracking-wider">Featured Posts</span>
                      </div>
                      <a href={channel.blogUrl} target={channel.blogUrl.startsWith("/") ? "_self" : "_blank"} rel="noopener noreferrer"
                        className="text-xs text-gray-600 hover:text-[#4c82c5] transition-colors">View all →</a>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {channel.posts.slice(0, 2).map((post, pi) => (
                        <a key={pi} href={post.url} target={post.url.startsWith("/") ? "_self" : "_blank"} rel="noopener noreferrer" className="group block">
                          <div className="overflow-hidden rounded-lg aspect-video bg-white/[0.04] mb-2">
                            <img src={post.thumbnail} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          </div>
                          <p className="text-xs text-gray-400 group-hover:text-white transition-colors line-clamp-2 leading-relaxed mb-1">
                            {post.title}
                          </p>
                          <p className="text-[10px] text-gray-600 font-light">{post.date}</p>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Empty state when no videos and no posts */}
                {channel.videos.length === 0 && channel.posts.length === 0 && (
                  <div className="flex-1 flex items-center justify-center py-16 px-6">
                    <p className="text-gray-600 font-light text-sm">Content coming soon</p>
                  </div>
                )}

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ChannelShowcase
