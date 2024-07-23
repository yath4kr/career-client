import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Outro from "./Components/Outro";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Instructors from "./Pages/Instructors";
import Instructor from "./Pages/Instructor";
import Auth from "./Pages/Auth";
import Profile from "./Pages/Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/instructors/" element={<Instructors />} />
          <Route path="/instructor/:id" element={<Instructor />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<h1>You are not supposed to be here!</h1>} />
        </Routes>
        <Footer />
        <Outro />
      </BrowserRouter>
    </div>
  );
}

export default App;
