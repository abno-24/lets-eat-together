import Header from "./components/Header"
import About from "./components/About"
import RestaurantContainer from "./components/RestaurantContainer"
import Restaurtant from "./components/Restaurtant"
import { createBrowserRouter, Outlet } from "react-router-dom"

export const App = () => {
  return (
    <div className="container">
      <Header />
      <Outlet />
    </div>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <RestaurantContainer />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/restaurant/:id",
        element: <Restaurtant />,
      },
    ],
    errorElement: <div>Error occurred!</div>,
  }
])