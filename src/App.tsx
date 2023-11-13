import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.tsx";
import Footer from "./components/Footer.tsx";
import Home from "./pages/Home.tsx";
import Marketplace from "./pages/Marketplace.tsx";
import Rankings from "./pages/Rankings.tsx";
import ConnectWallet from "./pages/ConnectWallet.tsx";
import SignUp from "./pages/SignUp.tsx";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/rankings" element={<Rankings />} />
        <Route path="/wallet" element={<ConnectWallet />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
