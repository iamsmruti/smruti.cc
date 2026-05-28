import Heading from "../../../components/Heading";
import { useSectionTimer } from '../../../hooks/useSectionTimer'
import { event as trackEvent } from "../../../utils/gtag";
import blogs from "../data/blogs";

const MyBlogs = () => {
  const ref = useSectionTimer("blogs");

  const reportBlogClick = (title: string) => {
    trackEvent({
      action: "blog_click",
      category: "engagement",
      label: title,
    });
  };

  return (
    <div ref={ref as any} className="mb-[200px]">
      <Heading thin="My" thick="Blogs" />
      <p className="text-2xl font-thin">I love to write about many things.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-[#121212] text-black p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <a
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => reportBlogClick(blog.name)}
            >
              <img
                src={blog.image}
                alt={blog.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
            </a>

            <a
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => reportBlogClick(blog.name)}
            >
              <h3 className="text-xl text-white mb-2 hover:underline">{blog.name}</h3>
            </a>

            <p className="text-gray-400 mb-4 font-light">{blog.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {blog.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs bg-gray-100 border border-gray-300 rounded-full px-3 py-1 text-gray-800"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {blog.url ? (
              <a
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-light hover:text-gray-400"
                onClick={() => reportBlogClick(blog.name)}
              >
                Read more...
              </a>
            ) : (
              <span className="text-gray-400 italic">Coming soon</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBlogs;
