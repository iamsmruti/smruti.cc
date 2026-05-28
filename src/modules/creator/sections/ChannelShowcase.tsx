import { FaYoutube, FaTelegram, FaLinkedin } from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai"
import { HiExternalLink, HiGlobe } from "react-icons/hi"
import { blogIndex } from "../../../content"

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
      { title: "Setting up a React Project From Scratch", url: "https://agilecoder.in/blog/setting-up-a-react-project-from-scratch", thumbnail: "https://s3-eu-north-1.amazonaws.com/agile-coder-bucket/2025/02/react-project-setup-in-2024.png", date: "Feb 3, 2025" },
      { title: "SEO for Next.js: Optimize Your Application for Search Engines", url: "https://agilecoder.in/blog/seo-for-next-js-how-to-optimize-your-application-for-search-engines/", thumbnail: "https://s3-eu-north-1.amazonaws.com/agile-coder-bucket/2024/10/seo-in-nextjs-metadata-configurations-1.png", date: "Oct 3, 2024" },
    ],
  },
  {
    name: "Silicon Mulation",
    handle: "@silicon-mulation",
    thumbnail: "",
    description: "Exploring the intersection of silicon and simulation. AI art, creative coding experiments, and the kind of tech that feels like magic.",
    tags: ["AI", "Creative Coding", "Experiments"],
    links: [
      { Icon: HiGlobe,    label: "silicon-mulation.vercel.app", url: "https://silicon-mulation.vercel.app", accent: false },
      { Icon: FaYoutube,  label: "silicon-mulation",            url: "https://www.youtube.com/@silicon-mulation", accent: false },
      { Icon: FaTelegram, label: "SiliconMulation",             url: "https://t.me/SiliconMulation",             accent: false },
    ],
    youtubeUrl: "https://www.youtube.com/@silicon-mulation",
    blogUrl: "https://silicon-mulation.vercel.app",
    blogLabel: "artfulcoding.in",
    videos: [
      { title: "Create Stunning Images for FREE with DreamShaper", url: "https://www.youtube.com/watch?v=Yt4Jw9GpTM0", thumbnail: "https://img.youtube.com/vi/Yt4Jw9GpTM0/maxresdefault.jpg" },
    ],
    posts: [
      { title: "Uncovering the Cardiod: Beauty, Math & Code", url: "https://artfulcoding.in/blog/fractals/cardiod", thumbnail: "https://artfulcoding.in/_next/image?url=%2Fassets%2Fthumbnails%2Fcardiod.png&w=3840&q=75", date: "May, 2024" },
      { title: "Simple Fractal Tree", url: "https://artfulcoding.in/blog/fractals/simple_fractal_tree", thumbnail: "https://artfulcoding.in/_next/image?url=%2Fassets%2Fthumbnails%2Fsimple_fractal_tree.png&w=3840&q=75", date: "May, 2024" },
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
    videos: [],
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
                      <Icon className="text-sm flex-shrink-0 text-[#4c82c5]" />
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
