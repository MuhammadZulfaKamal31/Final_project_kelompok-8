import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import TvPage from "./pages/TvPage";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Register from "./pages/Register";

import "swiper/css";

import { DataContext } from "./contextProvider/DataProvider";
import { useContext } from "react";
import DetailPage from "./pages/DetailPage";
import { useLocation } from "react-router-dom";
import Login from "./pages/Login";
import SearchPage from "./pages/SearchPage";

function App() {
  const [theme, setTheme] = useContext(DataContext);
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <Navbar />
      )}

      <div
        className={`w-full h-full ${theme
            ? " bg-background_dark text-white"
            : " bg-background_light text-black"
          }`}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/movie" element={<MoviePage />} />
          <Route path="/tv" element={<TvPage />} />
          <Route path="/:mediaType/:mediaId" element={<DetailPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
        {location.pathname !== "/login" &&
          location.pathname !== "/register" && <Footer />}
      </div>
    </>
  );
}

export default App;
