import { blogIndex } from "../../content";
import { Link } from "react-router-dom";

const formatDate = (dateString: string) =>
  new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const BlogCard = ({ post, index }: any) => {
  return (
    <Link
      to={post.slug}
      className="group glass rounded-2xl overflow-hidden card-hover opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${index * 0.08}s`, animationFillMode: "forwards" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3">
        <img
          src={post.image}
          alt={post.title}
          className="col-span-1 w-full h-48 md:h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="p-6 col-span-2 flex flex-col">
          <h3 className="text-xl font-medium text-white mb-3 group-hover:text-[#4c82c5] transition-colors">
            {post.title}
          </h3>

          <p className="text-gray-400 font-light text-sm leading-relaxed mb-5 flex-1">
            {post.description}
          </p>

          <div className="flex justify-between items-center pt-4 border-t border-white/[0.05]">
            <span className="text-xs text-gray-500 font-light">{formatDate(post.date)}</span>
            <span className="text-[#4c82c5] text-sm font-light group-hover:underline">
              Read more →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

const Blog = () => {
  return (
    <div className="page-section px-4">
      <div className="max-w-5xl mx-auto">
        <p className="sm:text-5xl text-3xl mb-3">
          <span className="font-extralight text-gray-400">Blog </span>
          <span className="font-light">Posts</span>
        </p>
        <p className="text-gray-500 mb-10 font-light">
          Insights, tutorials, and thoughts on web development, technology, and software engineering.
        </p>

        <div className="flex flex-col gap-5 w-full">
          {blogIndex.map((post, i) => (
            <BlogCard key={post.slug} post={post as any} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
