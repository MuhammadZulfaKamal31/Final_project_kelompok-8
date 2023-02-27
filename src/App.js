import { Navbar, Footerr, Backdrop, Popular, TopRated } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App bg-black">
  
      <Navbar/>
   <Backdrop/>
   <Popular/>
   <TopRated/>
   <Footerr/>
      


    </div>
  );
}

export default App;
