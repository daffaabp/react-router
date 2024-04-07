import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Cars from "./pages/Cars";
import CarDetail from './pages/CarDetail'
// import SecondCar from './pages/SecondCar'
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cars/:id" element={<CarDetail />} />
      </Routes>
    </>
  );
}

export default App;
