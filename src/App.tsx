import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.tsx";
import Footer from "./components/Footer.tsx";
import Home from "./pages/Home.tsx";
import Marketplace from "./pages/Marketplace.tsx";
import Rankings from "./pages/Rankings.tsx";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/rankings" element={<Rankings />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
