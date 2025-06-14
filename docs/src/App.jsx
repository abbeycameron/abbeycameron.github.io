import "./App.css";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";

import HomePage from "./pages/Home";
import PetsPage from "./PetsPage";
import Layout from "./components/NavBar";
import Experience from "./pages/Experience";
import LandingPage from "./pages/LandingPage";
import ScrollPage from "./pages/ScrollingPage";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<LandingPage />} />
    //     <Route path="/" element={<Layout />}>
    //       <Route path="/home" element={<HomePage />} />
    //       <Route path="/pets" element={<PetsPage />} />
    //       <Route path="/experience" element={<Experience />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>

    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/home"
          element={
            <Layout>
              <ScrollPage />
            </Layout>
          }
        />
        <Route
          path="/pets"
          element={
            <Layout>
              <PetsPage />
            </Layout>
          }
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
