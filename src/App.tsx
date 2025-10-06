import { Outlet } from "react-router"
import { Header } from "./layouts/header"
import { Footer } from "./layouts/footer"

export const App = () => {
  return <div className="min-h-screen flex flex-col justify-between">
    <Header />

    <main className="flex-1">
      <Outlet />
    </main>

    <Footer />
  </div>
}