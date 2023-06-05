import DetailPage from "../pages/DetailPage";
import HomePage from "../pages/HomePage";
import TvPage from "../pages/TvPage";
import MoviePage from "../pages/MoviePage";
import FavoritePage from "../pages/FavoritePage";
import PageNotFound from "./PageNotFound";
import About from "../pages/About"
import Login from "../pages/Login";
import Register from "../pages/Register";
import SearchPage from "../pages/SearchPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import ProtectedRoute from "./ProtectedRoutes";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/movie",
          element: <MoviePage />,
        },
        {
          path: "/tv",
          element: <TvPage />,
        },
        {
          path: "/search",
          element: <SearchPage />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/*",
          element: <PageNotFound />,
        },
        {
          path: "/:mediaType/:mediaId",
          element: <DetailPage />,
        },
        {
          path: "/favorite",
          element: (
            <ProtectedRoute>
              <FavoritePage />
            </ProtectedRoute>
          ),
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Routes;
