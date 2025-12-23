import Header from "./components/Header"
import About from "./components/About"
import RestaurantContainer from "./components/RestaurantContainer"
import Restaurant from "./components/Restaurant"
import { createBrowserRouter, Outlet } from "react-router-dom"
import Error from "./components/Error"
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
        element: <Restaurant />,
      },
    ],
    errorElement: <Error />,
  }
])