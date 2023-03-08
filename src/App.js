
import { Routes, Route } from "react-router-dom";
import { useGetMovies } from "./hooks/movie-api/useGetMovies";
import HomePage from "./pages/HomePage";
import "swiper/css";

function App() {


  return (
    <>
      <HomePage />
    </>
  );
}

export default App;
