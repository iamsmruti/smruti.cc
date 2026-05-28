import Heading from "../../../components/Heading"
import { useSectionTimer } from '../../../hooks/useSectionTimer'
import { event as trackEvent } from "../../../utils/gtag";

const MyVideos = () => {
  const ref = useSectionTimer("videos")

  const videos = [
    { title: "NX Monorepo: Manage Multiple React Apps & Libraries", url: "https://www.youtube.com/watch?v=XMv-wWO5RKQ", thumbnail: "https://img.youtube.com/vi/XMv-wWO5RKQ/maxresdefault.jpg" },
    { title: "The Right Way to Setup Node, Express + TS Project", url: "https://www.youtube.com/watch?v=oODlPLfnTIk", thumbnail: "https://img.youtube.com/vi/oODlPLfnTIk/maxresdefault.jpg" },
    { title: "NodeJS + Express Project Structure | Domain Driven Design", url: "https://www.youtube.com/watch?v=Q2OIXOV7A4s", thumbnail: "https://img.youtube.com/vi/Q2OIXOV7A4s/maxresdefault.jpg" },
    { title: "The Right Way to Setup PhaserJS in ReactJS", url: "https://www.youtube.com/watch?v=qaiFueJXGKM&t", thumbnail: "https://img.youtube.com/vi/qaiFueJXGKM/maxresdefault.jpg" },
    { title: "The Right Way to Setup Node, Express + TS Project", url: "https://www.youtube.com/watch?v=QEAePQKVSsA", thumbnail: "https://img.youtube.com/vi/QEAePQKVSsA/maxresdefault.jpg" },
    { title: "Create Stunning Images for FREE with DreamShaper, Stability Matrix, and ComfyUI", url: "https://www.youtube.com/watch?v=Yt4Jw9GpTM0", thumbnail: "https://img.youtube.com/vi/Yt4Jw9GpTM0/maxresdefault.jpg" },
  ]

  const channels = [
    { name: "Agile Coder", url: "https://www.youtube.com/@AgileCoderYT", thumbnail: "https://yt3.ggpht.com/9JcW1BVwWuVtGf4jYniQqEU3MDICPpIYVx8xoRsOg3nx6-8wM-GsFAtHk92VnWpYXgMOgEMlMA=s600-c-k-c0x00ffffff-no-rj-rp-mo" },
    { name: "Smrutify", url: "https://www.youtube.com/@smrutify", thumbnail: "https://yt3.ggpht.com/7ukFRlV0drn_IX_WVlxE45RnZm-n0n10ZL6bmqIoTS4B3t_VVIrIFPEB6xC3eNT6MIISJSx7Hg=s600-c-k-c0x00ffffff-no-rj-rp-mo" },
  ]

  const handleVideoClick = (title: string) => {
    trackEvent({
      action: "video_click",
      category: "engagement",
      label: title,
    });
  };

  const handleChannelClick = (name: string) => {
    trackEvent({
      action: "channel_click",
      category: "engagement",
      label: name,
    });
  };

  return (
    <div ref={ref as any} className="mb-[200px]">
      <Heading thin="My" thick="Videos" />
      <p className="text-2xl font-thin">You can request videos as well. Feel Free!</p>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-14">
        {videos.map((video) => (
          <div className="rounded-lg p-3 border-[1px] border-[#121212]">
            <a onClick={() => handleVideoClick(video.title)} href={video.url} target="_blank" rel="noopener noreferrer">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full object-cover rounded-md mb-4"
              />

              <h3 className="text-md text-white mb-2 hover:underline">{video.title}</h3>
            </a>
          </div>
        ))}
      </div>


      <p className="text-2xl font-thin">Support me by Subscribing</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-14">
        {channels.map((channel, index) => (
          <div key={index} className="rounded-lg p-3 border-[1px] border-[#121212]">
            <a onClick={() => handleChannelClick(channel.name)} href={channel.url} target="_blank" rel="noopener noreferrer" className="flex">
              <img
                src={channel.thumbnail}
                alt={channel.name}
                className="w-20 object-cover rounded-full"
              />
              <div className="ml-4">
                <h3 className="text-md text-white mb-2 hover:underline">{channel.name}</h3>
                <p className="bg-red-500 text-white text-sm px-2 py-1 rounded-lg">Go to Channel</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyVideos