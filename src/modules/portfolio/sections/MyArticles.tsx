import Heading from "../../../components/Heading"
import { useSectionTimer } from '../../../hooks/useSectionTimer'
import { event as trackEvent } from "../../../utils/gtag";
import articles from "../data/articles";

const MyArticles = () => {
  const ref = useSectionTimer("articles")

  const reportArticleClick = (title: string) => {
    trackEvent({
      action: "article_click",
      category: "engagement",
      label: title,
    });
  };

  return (
    <div ref={ref as any} className="mb-[200px]">
      <Heading thin="My" thick="Articles" />
      <p className="text-2xl font-thin">You can request guides as well. Feel Free!</p>

      <div>
        <div className="flex flex-col gap-4 mt-8">
          {articles.map((article, index) => (
            <div key={index} className="w-full rounded-lg shadow-md flex flex-wrap sm:flex-nowrap mb-5 sm:mb-0 sm:gap-5 hover:shadow-lg border-b-[1px] border-[#212121] transition-shadow duration-300">
              <img src={article.thumbnail} alt={article.title} className="sm:w-56 rounded-lg object-cover mb-4" />
              <div className="flex flex-col items-start">
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-400 mb-2 text-clip line-clamp-2">{article.description}</p>
                <div className="flex items-center justify-between w-full mt-2 sm:mb-0 mb-4">
                  <p className="text-gray-400 text-sm">{article.date}</p>
                  <a onClick={() => reportArticleClick(article.title)} href={article.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Read more</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MyArticles