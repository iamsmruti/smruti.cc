import Heading from "../../../components/Heading"
import { useSectionTimer } from '../../../hooks/useSectionTimer'
import { event as trackEvent } from "../../../utils/gtag";
import books from "../data/books";

const MyBooks = () => {
  const ref = useSectionTimer("books");

  const reportBookClick = (bookTitle: string, platform: string) => {
    trackEvent({
      action: "book_purchase_click",
      category: "engagement",
      label: `${bookTitle} - ${platform}`,
    });
  };

  return (
    <div ref={ref as any} className='mt-[10vh] mb-[20vh]'>
      <Heading thin="My" thick="Books" />

      <p className="text-2xl font-thin">I am trying to put my thoughts, Still Learning.</p>

      {books.map((book, index) => (
        <div key={index} className="flex flex-wrap gap-5 mt-10">
          <div className="w-[300px]">
            <img src={book.image} className="rounded-lg" alt={book.title} />
          </div>

          <div className="flex-1">
            <h3 className="text-2xl font-semibold">{book.title}</h3>
            <p className="text-gray-400 mt-2">{book.description}</p>
            <p className="text-gray-400 text-xs mt-4">Published: {book.published}</p>

            <div className="mt-6 flex flex-wrap gap-4 text-xs sm:text-sm">
              {book.links.amazon && (
                <a
                  href={book.links.amazon}
                  className="bg-white text-black px-5 py-2 rounded-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => reportBookClick(book.title, "Amazon")}
                >
                  Buy on Amazon
                </a>
              )}
              {book.links.gumroad && (
                <a
                  href={book.links.gumroad}
                  className="bg-white text-black px-5 py-2 rounded-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => reportBookClick(book.title, "Gumroad")}
                >
                  Buy on Gumroad
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MyBooks;
