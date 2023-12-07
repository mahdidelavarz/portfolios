
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./Components/Home";
import Particle from "./Components/Particle";
import MainPage from "./pages/MainPage";
import SinglePortfolio from "./Components/SinglePortfolio";
function App() {
  return (
    <>
      <Particle />
      <div className="w-full absolute top-5">
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/Portfolio/:id" element={<SinglePortfolio />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
