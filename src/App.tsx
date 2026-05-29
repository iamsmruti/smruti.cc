import { BrowserRouter, Route, Routes } from "react-router-dom"
import Portfolio from "./modules/portfolio"
import Travel from "./modules/travel"
import Creator from "./modules/creator"
import Book from "./modules/book"
import Blog from "./modules/blog"
import BlogPage from "./modules/blog/_BlogPage"
import TripDetails from "./modules/travel/sections/TripDetails"
import Container from "./components/Container"
import AnalyticsWrapper from "./components/AnalyticsWrapper"

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route element={<AnalyticsWrapper />}>
            <Route path="/" element={<Portfolio />} />
            <Route path="/books" element={<Book />} />
            <Route path="/travel-log" element={<Travel />} />
            <Route path="/travel-log/:slug" element={<TripDetails />} />
            <Route path="/creator" element={<Creator />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPage />} />
          </Route>
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
