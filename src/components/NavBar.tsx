import { PiStorefront, PiUser } from "react-icons/pi";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="w-full h-[100px] flex justify-between items-center py-[20px] px-[50px]">
      <Link
        className="w-[243.41px] h-[32px] flex items-center gap-[10px]"
        to="/"
      >
        <PiStorefront className="text-main shrink-0 h-[32px] w-[32px]" />
        <h1 className=" font-Space_mono text-xl">NFT Marketplace</h1>
      </Link>

      <div className="w-[607px] h-[60px] flex items-center justify-between font-Work_sance">
        <Link to="/marketplace" className="hover:text-main">
          Marketplace
        </Link>
        <Link to="/marketplace" className="hover:text-main">
          Rankings
        </Link>
        <Link to="/marketplace" className="hover:text-main">
          Connect a walltet
        </Link>
        <Link
          to="/marketplace"
          className="w-[152px] h-[60px] bg-main flex items-center justify-center gap-[12px] rounded-[20px]"
        >
          <PiUser className="shrink-0 h-[20px] w-[20px] text-base" />
          <p>Sign Up</p>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
