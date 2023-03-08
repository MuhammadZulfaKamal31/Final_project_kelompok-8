import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import TvPage from "./pages/TvPage";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "swiper/css";

import { DataProvider } from "./contextProvider/DataProvider";

function App() {


  return (
    <>
      <DataProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie" element={<MoviePage />} />
          <Route path="/tv" element={<TvPage />} />
        </Routes>
        <Footer />
      </DataProvider>
    </>
  );
}

export default App;
