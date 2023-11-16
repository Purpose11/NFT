import { PiStorefront } from "react-icons/pi";
import { Link } from "react-router-dom";
import DiscordLogo from "../assets/images/DiscordLogo.png";
import InstagramLogo from "../assets/images/InstagramLogo.png";
import YoutubeLogo from "../assets/images/YoutubeLogo.png";
import TwitterLogo from "../assets/images/TwitterLogo.png";

const Footer = () => {
  return (
    <div className=" w-full lg:h-[334px] h-fit bg-[#3B3B3B] py-[40px]">
      <div className="lg:w-[1050px] w-[315px] lg:h-[191px] h-[633px] mx-auto flex flex-col lg:flex-row lg:justify-between gap-[30px] lg:gap-0">
        {/* logo and info*/}
        <div className=" lg:w-[327.41px] w-[315px] lg:h-[191px] h-[185px]">
          <Link
            className="w-[243.41px] h-[32px] flex items-center gap-[10px] "
            to="/"
          >
            <PiStorefront className="text-main shrink-0 h-[32px] w-[32px]" />
            <h1 className=" font-Space_mono text-xl  font-[700]">
              NFT Marketplace
            </h1>
          </Link>
          <div className="lg:w-[238px] w-[315px] lg:h-[129px] h-[133px] lg:mt-[30px] mt-[20px] text-[#CCCCCC]">
            <p className=" text-base font-Work_sance">
              NFT marketplace UI created with Anima for Figma.
            </p>
            <div className="lg:w-[238px] w-[315px] lg:h-[65px] h-[69px] mt-[20px]">
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
        <div className="lg:w-[240px] w-[315px] lg:h-[166px] h-[161px]">
          <h5 className=" font-Space_mono font-[700] text-[22px]">Explore</h5>
          <p className=" font-Work_sance text-base text-[#CCCCCC] lg:mt-[25px] mt-[20px]">
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
        <div className="lg:w-[420px] w-[315px] lg:h-[184px] h-[227px] flex flex-col lg:gap-[25px] gap-[20px]">
          <h5 className=" font-Space_mono text-[22px] font-[700] capitalize ">
            Join our weekly digest
          </h5>
          <div className="lg:w-[420px] w-[315px] lg:h-[124px] h-[172px]  text-[#CCCCCC]">
            <div className="lg:w-[330px] w-[315px] h-[44px]">
              <p className=" font-Work_sance text-base ">
                Get exclusive promotions & updates straight to your inbox.
              </p>
            </div>
            <div className="lg:w-[420px] w-[315px] lg:h-[60px] h-[108px] lg:rounded-[20px]  flex flex-col lg:flex-row lg:bg-white lg:gap-[12px] gap-[16px] mt-[20px]">
              <input
                type="text"
                placeholder="Enter your email here"
                className="lg:h-[60px] h-[46px] lg:w-[229px] w-[315px] rounded-[20px] outline-none  px-[16px] text-[#2B2B2B]
              text-base placeholder:text-base font-Work_sance placeholder:font-Work_sance placeholder:text-[#2B2B2B] border-none"
              />
              <button className=" bg-main lg:w-[179px] w-[315px] lg:h-[60px] h-[46px] flex items-center justify-center rounded-[20px]">
                <p className=" font-Work_sance font-[600] text-base text-white">
                  Subscribe
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-[1050px] w-[315px] h-[33px] border-[#858584]  border mx-auto lg:mt-[30px] mt-[30px] pt-[20px]">
        <p className="text-[#CCCCCC] text-xs font-Work_sance">
          Ⓒ NFT Market. Developed by Adebayo Fatai.
        </p>
      </div>
    </div>
  );
};

export default Footer;
