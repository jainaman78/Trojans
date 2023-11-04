import Navbar from "./components/Navbar";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import { Route,Routes} from "react-router-dom";
import Trip from "./components/Trip";
import Discovercards from "./components/Discovercard";
import Details from "./components/Details";
import Details1 from "./components/Detailscard/Details1";

function App() {
  const [show,setshow]=useState(0);
  useEffect(() => {
    setshow(1);
  }, []);
  return (
    <>
    
    <Navbar/>
    <Routes>
      <Route path="/" element={<Header/>}></Route>
      <Route path="/discover" element={<Discovercards></Discovercards>}></Route>
      <Route path="/details" element={<Details/>}></Route>
      <Route path="/details1" element={<Details1/>}></Route>
    </Routes>
    <Footer></Footer>
       
    </>
  );
}

export default App;
