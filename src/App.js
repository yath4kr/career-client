import "./App.css";
import Navbar from "./Components/Navbar";
import Outro from "./Components/Outro";
import Home from "./Pages/Home";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Outro />
      </BrowserRouter>
    </div>
  );
}

export default App;
