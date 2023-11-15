import { AiOutlineEye } from "react-icons/ai";
import moonDancer from "../../assets/images/moonDancer.png";
import galaxy from "../../assets/images/galaxy.png";
import nebulaKid from "../../assets/images/nebulakid.png";
import nebulaAvatar from "../../assets/images/nebulaAvatar.png";
import astro from "../../assets/images/astro.png";
import spaceone from "../../assets/images/spaceone.png";
import { Link } from "react-router-dom";
const Discover = () => {
  const NFTs = [
    {
      id: 1,
      image: galaxy,
      name: "Distant Galaxy",
      artistAvatar: moonDancer,
      artistname: "MoonDancer",
    },
    {
      id: 2,
      image: nebulaKid,
      name: "Life On Edena",
      artistAvatar: nebulaAvatar,
      artistname: "NebulaKid",
    },
    {
      id: 3,
      image: astro,
      name: "AstroFiction",
      artistAvatar: spaceone,
      artistname: "Spaceone",
    },
  ];
  return (
    <div className="w-full lg:h-[780px] h-[1557px] lg:py-[80px] py-[40px] flex flex-col lg:gap-[60px] gap-[40px] relative lg:static">
      <div className="lg:w-[1050px] w-[315px] lg:h-[91px] h-[71px] mx-auto flex items-end gap-[100px]">
        <div className="lg:w-[763px] w-full  lg:h-[91px] h-[71px]">
          <h3 className=" font-Work_sance font-[600] lg:text-[38px] text-[28px]">
            Discover More NFTs
          </h3>
          <p className=" font-Work_sance lg:text-[22px] text-base">
            Explore new trending NFTs
          </p>
        </div>

        <Link
          className="lg:w-[187px] w-[315px] h-[60px] border-2 border-main rounded-[20px] flex items-center justify-center gap-[12px] cursor-pointer absolute lg:static lg:bottom-0 bottom-[40px]"
          to="/marketplace"
        >
          <AiOutlineEye className=" shrink-0 text-main h-[20px] w-[20px]" />
          <p className=" font-Work_sance text-base font-[600]">See All</p>
        </Link>
      </div>

      <div className="lg:w-[1050px] w-[315px] lg:h-[496px] h-[1246px] lg:grid lg:grid-cols-3 flex flex-col lg:gap-[30px] gap-[20px] mx-auto">
        {NFTs.map((NFT) => {
          return (
            <div
              key={NFT.id}
              className=" lg:w-[330px] w-[315px] lg:h-[469px] h-[402px] rounded-[20px]"
            >
              <img
                src={NFT.image}
                className="w-full lg:h-[296px] h-[238px] rounded-t-[20px]"
              />

              <div className="bg-[#3B3B3B] w-full lg:h-[173px] h-[164px] rounded-b-[20px] flex flex-col  gap-[25px] lg:px-[30px] lg:pt-[20px] lg:pb-[25px] px-[20px] pt-[20px] pb-[25px]">
                <div className="lg:w-[270px] w-[275px] h-[60px] flex flex-col gap-[5px]">
                  <h5 className=" font-Work_sance lg:text-[22px] text-[18px] font-[600]">
                    {NFT.name}
                  </h5>
                  <div className="h-[24px] lg:w-[270px] w-[275px] flex gap-[12px]">
                    <img src={NFT.artistAvatar} className="h-[24px] w-[24px]" />
                    <p className=" font-Space_mono lg:text-base text-sm font-normal">
                      {NFT.artistname}
                    </p>
                  </div>
                </div>
                <div className="lg:w-[270px] w-[275px] lg:h-[43px] h-[34px] flex justify-between">
                  <div className=" lg:w-[135px] w-[137.5px] lg:h-[43px] h-[34px]  flex flex-col lg:gap-[8px] gap-[5px]">
                    <p className=" font-Space_mono text-[#858584] text-xs">
                      Price
                    </p>
                    <p className="  font-Space_mono lg:text-base text-xs">
                      1.63 ETH
                    </p>
                  </div>
                  <div className=" lg:w-[135px] w-[137.5px] lg:h-[43px] h-[34px]  flex items-end flex-col lg:gap-[8px] gap-[5px]">
                    <p className=" font-Space_mono text-[#858584] text-xs">
                      Highest Bid
                    </p>
                    <p className="font-Space_mono lg:text-base text-xs">
                      0.33 wETH
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Discover;
