import { PiStorefront } from "react-icons/pi";
import { Link } from "react-router-dom";
import DiscordLogo from "../assets/images/DiscordLogo.png";
import InstagramLogo from "../assets/images/InstagramLogo.png";
import YoutubeLogo from "../assets/images/YoutubeLogo.png";
import TwitterLogo from "../assets/images/TwitterLogo.png";

const Footer = () => {
  return (
    <div className=" w-full h-[334px] bg-[#3B3B3B] py-[40px]">
      <div className="w-[1050px] h-[191px] mx-auto flex justify-between">
        {/* logo and info*/}
        <div className=" w-[327.41px] h-[191px]">
          <Link
            className="w-[243.41px] h-[32px] flex items-center gap-[10px]"
            to="/"
          >
            <PiStorefront className="text-main shrink-0 h-[32px] w-[32px]" />
            <h1 className=" font-Space_mono text-xl font-[700]">
              NFT Marketplace
            </h1>
          </Link>
          <div className="w-[238px]  h-[129px] mt-[30px] text-[#CCCCCC]">
            <p className=" text-base font-Work_sance">
              NFT marketplace UI created with Anima for Figma.
            </p>
            <div className="w-[238px] h-[65px] mt-[20px]">
              <p className=" font-Work_sance text-base">Join our community</p>
              <div className="w-[158px] h-[32px] flex gap-[10px] mt-[10px]">
                <img src={DiscordLogo} className="w-[32px] h-[32px]" />
                <img src={YoutubeLogo} className="w-[32px] h-[32px]" />
                <img src={TwitterLogo} className="w-[32px] h-[32px]" />
                <img src={InstagramLogo} className="w-[32px] h-[32px]" />
              </div>
            </div>
          </div>
        </div>
        {/* explore links*/}
        <div className="w-[240px] h-[166px] ">
          <h5 className=" font-Space_mono font-[700] text-[22px]">Explore</h5>
          <p className=" font-Work_sance text-base text-[#CCCCCC] mt-[25px]">
            Marketplace
          </p>
          <p className=" font-Work_sance text-base text-[#CCCCCC] mt-[20px]">
            Rankings
          </p>
          <p className=" font-Work_sance text-base text-[#CCCCCC] mt-[20px]">
            Connect a wallet
          </p>
        </div>
        {/* subscribe*/}
        <div className="w-[420px] h-[184px] flex flex-col gap-[25px]">
          <h5 className=" font-Space_mono text-[22px] font-[700] capitalize ">
            Join our weekly digest
          </h5>
          <div className="w-[420px] h-[124px]  text-[#CCCCCC]">
            <div className="w-[330px] h-[44px] ">
              <p className=" font-Work_sance text-base ">
                Get exclusive promotions & updates straight to your inbox.
              </p>
            </div>
            <div className=" w-[420px] h-[60px] rounded-[20px]  flex bg-white gap-[12px] mt-[20px]">
              <input
                type="text"
                placeholder="Enter your email here"
                className="h-[60px] w-[229px] rounded-[20px] outline-none  px-[16px] text-[#2B2B2B]
              text-base placeholder:text-base font-Work_sance placeholder:font-Work_sance placeholder:text-[#2B2B2B] border-none"
              />
              <button className=" bg-main w-[179px] h-[60px] flex items-center justify-center rounded-[20px]">
                <p className=" font-Work_sance font-[600] text-base text-white">
                  Subscribe
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1050px] h-[33px] border-[#858584]  border-t mx-auto mt-[30px] pt-[20px]">
        <p className="text-[#CCCCCC] text-xs font-Work_sance">
          Ⓒ NFT Market. Developed by Adebayo Fatai.
        </p>
      </div>
    </div>
  );
};

export default Footer;
