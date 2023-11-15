import { PiStorefront, PiUser } from "react-icons/pi";
import { CgMenuLeft } from "react-icons/cg";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="w-full lg:h-[100px] h-[54px] flex justify-between items-center lg:py-[20px] lg:px-[50px] py-[15px] px-[30px]">
      <Link
        className="lg:w-[243.41px] w-[182.56px] lg:h-[32px] h-[24px] flex items-center gap-[10px]"
        to="/"
      >
        <PiStorefront className="text-main shrink-0 lg:h-[32px] lg:w-[32px] w-[24px] h-[24px]" />
        <h1 className=" font-Space_mono lg:text-xl text-base">
          NFT Marketplace
        </h1>
      </Link>

      <div
        className={`lg:w-[607px] lg:h-[60px]  h-[100vh] flex  flex-col lg:flex-row lg:items-center lg:justify-between gap-[50px] lg:gap-0 font-Work_sance fixed lg:static top-0 lg:right-0  bg-[#3B3B3B] lg:bg-inherit z-50 lg:z-0  py-[50px] lg:py-0 px-[20px] lg:px-0 active overflow-hidden ${
          openMenu ? "w-[250px] md:w-[350px] right-0" : "w-0 right-[-400px]"
        }`}
      >
        <Link
          to="/marketplace"
          className="hover:text-main lg:text-base text-sm cursor-pointer"
        >
          Marketplace
        </Link>
        <Link
          to="/rankings"
          className="hover:text-main  lg:text-base text-sm cursor-pointer"
        >
          Rankings
        </Link>
        <Link
          to="/wallet"
          className="hover:text-main  lg:text-base text-sm cursor-pointer"
        >
          Connect a wallet
        </Link>
        <Link
          to="/signup"
          className="w-[152px] lg:h-[60px] h-[50px] bg-main flex items-center justify-center gap-[12px] rounded-[20px] cursor-pointer"
        >
          <PiUser className="shrink-0 lg:h-[20px] lg:w-[20px] w-[18px] h-[18px] text-base" />
          <p className="lg:text-base text-sm">Sign Up</p>
        </Link>
        <MdClose
          className="w-[24px] h-[24px] block lg:hidden absolute top-[20px] right-[20px] cursor-pointer"
          onClick={() => setOpenMenu(false)}
        />
      </div>
      <CgMenuLeft
        className="w-[24px] h-[24px] shrink-0 block lg:hidden"
        onClick={() => setOpenMenu(!openMenu)}
      />
    </nav>
  );
};

export default NavBar;
