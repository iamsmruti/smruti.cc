const channels = [
  {
    name: "Agile Coder",
    youtubeUrl: "https://www.youtube.com/@AgileCoderYT",
    platformUrl: "https://agilecoder.in",
    platformLabel: "agilecoder.in",
    thumbnail: "https://yt3.ggpht.com/9JcW1BVwWuVtGf4jYniQqEU3MDICPpIYVx8xoRsOg3nx6-8wM-GsFAtHk92VnWpYXgMOgEMlMA=s600-c-k-c0x00ffffff-no-rj-rp-mo",
    description: "My developer brand. Tech tutorials, project setups, and deep dives into modern web development — NX Monorepo, Node + Express, React, and everything in between.",
    tags: ["Web Dev", "Tutorials", "React", "Node.js"],
    color: "#4c82c5",
  },
  {
    name: "Silicon Mulation",
    youtubeUrl: "https://www.youtube.com/@SiliconMulation",
    platformUrl: "https://silicon-mulation.vercel.app",
    platformLabel: "silicon-mulation.vercel.app",
    thumbnail: "",
    description: "Exploring the intersection of silicon and simulation. AI art, creative coding experiments, and the kind of tech that feels like magic.",
    tags: ["AI", "Creative Coding", "Experiments"],
    color: "#4c82c5",
  },
  {
    name: "Smrutify",
    youtubeUrl: "https://www.youtube.com/@smrutify",
    platformUrl: "https://smruti.cc",
    platformLabel: "smruti.cc",
    thumbnail: "https://yt3.ggpht.com/7ukFRlV0drn_IX_WVlxE45RnZm-n0n10ZL6bmqIoTS4B3t_VVIrIFPEB6xC3eNT6MIISJSx7Hg=s600-c-k-c0x00ffffff-no-rj-rp-mo",
    description: "The personal side. Vlogs, life updates, stories from the road, and everything that doesn't fit the tech-only box.",
    tags: ["Vlogs", "Lifestyle", "Personal"],
    color: "#4c82c5",
  },
]

const featuredVideos = [
  { title: "NX Monorepo: Manage Multiple React Apps & Libraries", url: "https://www.youtube.com/watch?v=XMv-wWO5RKQ", thumbnail: "https://img.youtube.com/vi/XMv-wWO5RKQ/maxresdefault.jpg" },
  { title: "The Right Way to Setup Node, Express + TS Project", url: "https://www.youtube.com/watch?v=oODlPLfnTIk", thumbnail: "https://img.youtube.com/vi/oODlPLfnTIk/maxresdefault.jpg" },
  { title: "NodeJS + Express Project Structure | Domain Driven Design", url: "https://www.youtube.com/watch?v=Q2OIXOV7A4s", thumbnail: "https://img.youtube.com/vi/Q2OIXOV7A4s/maxresdefault.jpg" },
  { title: "The Right Way to Setup PhaserJS in ReactJS", url: "https://www.youtube.com/watch?v=qaiFueJXGKM&t", thumbnail: "https://img.youtube.com/vi/qaiFueJXGKM/maxresdefault.jpg" },
  { title: "Create Stunning Images for FREE with DreamShaper", url: "https://www.youtube.com/watch?v=Yt4Jw9GpTM0", thumbnail: "https://img.youtube.com/vi/Yt4Jw9GpTM0/maxresdefault.jpg" },
  { title: "The Right Way to Setup Node, Express + TS Project", url: "https://www.youtube.com/watch?v=QEAePQKVSsA", thumbnail: "https://img.youtube.com/vi/QEAePQKVSsA/maxresdefault.jpg" },
]

const ChannelShowcase = () => {
  return (
    <div className="page-section px-4">
      <div className="max-w-5xl mx-auto">
        {/* Channels */}
        <p className="sm:text-4xl text-2xl mb-3">
          <span className="font-[200] text-gray-400">My </span>
          <span className="font-light text-white">Channels</span>
        </p>
        <p className="text-gray-500 mb-10 font-light">
          Each channel has a different focus. Pick the one that resonates.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
          {channels.map((channel, i) => (
            <div
              key={channel.name}
              className="group light-card rounded-2xl overflow-hidden opacity-0 animate-fade-in-up relative"
              style={{ animationDelay: `${i * 0.1}s`, animationFillMode: "forwards" }}
            >
              {/* Color accent bar */}
              <div className="h-[3px] w-full" style={{ backgroundColor: channel.color }} />

              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  {channel.thumbnail ? (
                    <img src={channel.thumbnail} alt={channel.name} className="w-14 h-14 rounded-full object-cover" />
                  ) : (
                    <div className="w-14 h-14 rounded-full bg-white/[0.05] flex items-center justify-center text-2xl border border-white/[0.08]">🎥</div>
                  )}
                  <div>
                    <h3 className="text-base font-semibold text-white">{channel.name}</h3>
                    <span className="text-xs text-gray-400">YouTube Channel</span>
                  </div>
                </div>

                <p className="text-gray-500 font-light text-sm leading-relaxed mb-4">
                  {channel.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {channel.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full font-light"
                      style={{ backgroundColor: channel.color + "12", color: channel.color, border: `1px solid ${channel.color}30` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Two links */}
                <div className="flex flex-col gap-2 pt-4 border-t border-white/[0.06]">
                  <a
                    href={channel.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs text-gray-500 hover:text-white transition-colors"
                  >
                    <span>▶</span>
                    <span>Watch on YouTube</span>
                  </a>
                  <a
                    href={channel.platformUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-medium transition-colors hover:underline"
                    style={{ color: channel.color }}
                  >
                    <span>🔗</span>
                    <span>{channel.platformLabel}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Videos */}
        <p className="sm:text-4xl text-2xl mb-3">
          <span className="font-[200] text-gray-400">Featured </span>
          <span className="font-light text-white">Videos</span>
        </p>
        <p className="text-gray-500 mb-10 font-light">
          A handful of videos I'm proud of — mostly from Agile Coder.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredVideos.map((video, i) => (
            <a
              key={i}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group light-card rounded-xl overflow-hidden opacity-0 animate-fade-in-up block"
              style={{ animationDelay: `${i * 0.08}s`, animationFillMode: "forwards" }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-[#EF4444] flex items-center justify-center">
                    <span className="text-white text-base ml-0.5">▶</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-sm text-gray-400 font-light group-hover:text-white transition-colors line-clamp-2">
                  {video.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ChannelShowcase
