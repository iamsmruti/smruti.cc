import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { pageview } from "../utils/gtag"

const AnalyticsWrapper = () => {
  const location = useLocation()

  useEffect(() => {
    pageview(location.pathname + location.search)
  }, [])

  useEffect(() => {
    pageview(location.pathname + location.search)
  }, [location])

  return <Outlet />
}

export default AnalyticsWrapper
