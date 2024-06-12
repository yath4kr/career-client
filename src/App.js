import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Outro from "./Components/Outro";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Instructors from "./Pages/Instructors";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/instructors" element={<Instructors />} />
        </Routes>
        <Footer />
        <Outro />
      </BrowserRouter>
    </div>
  );
}

export default App;
