import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.tsx";
import Home from "./pages/Home.tsx";
import Marketplace from "./pages/Marketplace.tsx";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
      </Routes>
    </>
  );
}

export default App;
