import { ReactNode } from "react"
import Header from "./Header"

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full min-h-screen bg-black text-white">
      <div className="max-w-[1100px] mx-auto w-full px-3 py-2">
        <Header isDark={true} />
      </div>
      {children}
    </div>
  )
}

export default Container
