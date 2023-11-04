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
import Details2 from "./components/Detailscard/Details2";
import Details3 from "./components/Detailscard/Details3";
import Details4 from "./components/Detailscard/Details4";
import Details5 from "./components/Detailscard/Details5";
import Details6 from "./components/Detailscard/Details6";
import Details7 from "./components/Detailscard/Details7";
import Details8 from "./components/Detailscard/Details8";
import Details9 from "./components/Detailscard/Details9";
import Details10 from "./components/Detailscard/Details10";
import Details11 from "./components/Detailscard/Details11";
import Details12 from "./components/Detailscard/Details12";

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
      <Route path="/details1" element={<Details1/>}></Route>
      <Route path="/details2" element={<Details2></Details2>}></Route>
      <Route path="/details3" element={<Details3></Details3>}></Route>
      <Route path="/details4" element={<Details4></Details4>}></Route>
      <Route path="/details5" element={<Details5></Details5>}></Route>
      <Route path="/details6" element={<Details6></Details6>}></Route>
      <Route path="/details7" element={<Details7></Details7>}></Route>
      <Route path="/details8" element={<Details8></Details8>}></Route>
      <Route path="/details9" element={<Details9></Details9>}></Route>
      <Route path="/details10" element={<Details10></Details10>}></Route>
      <Route path="/details11" element={<Details11></Details11>}></Route>
      <Route path="/details12" element={<Details12></Details12>}></Route>
      
    </Routes>
    <Footer></Footer>
       
    </>
  );
}

export default App;
