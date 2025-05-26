import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./Home";
import PetsPage from "./PetsPage";
import Layout from "./NavBar";
import Experience from "./Experience";
import LandingPage from "./LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/pets" element={<PetsPage />} />
          <Route path="/experience" element={<Experience />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
