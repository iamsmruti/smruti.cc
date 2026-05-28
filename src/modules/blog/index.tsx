import { blogIndex } from "../../content";
import Heading from "../../components/Heading";
import { Link } from "react-router-dom";

const BlogCard = ({ post }: any) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Link to={post.slug}>
      <div className="bg-[#121212] grid grid-cols-1 md:grid-cols-3 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={post.image}
        alt={post.title}
        className="col-span-1 w-full object-cover hover:scale-105 transition-transform duration-300"
      />

      <div className="p-6 col-span-2">
        <p className="text-xl mb-3 hover:underline cursor-pointer">
          {post.title}
        </p>

        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {post.description}
        </p>

        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-400">
            {formatDate(post.date)}
          </span>

          <button className="text-blue-600 text-sm font-medium hover:underline">
            Read more →
          </button>
        </div>
      </div>
    </div>
    </Link>
  );
};

const Blog = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <Heading thin="Blog" thick='Posts' />
          <p className="text-2xl font-thin">
            Discover insights, tutorials, and thoughts on web development,
            technology, and software engineering.
          </p>

          <div className="flex flex-col gap-5 w-full mt-12">
            {blogIndex.map((post) => (
              <BlogCard key={post.slug} post={post as any} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;