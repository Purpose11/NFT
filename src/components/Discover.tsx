import { AiOutlineEye } from "react-icons/ai";
import moonDancer from "../assets/images/moonDancer.png";
import galaxy from "../assets/images/galaxy.png";
import nebulaKid from "../assets/images/nebulakid.png";
import nebulaAvatar from "../assets/images/nebulaAvatar.png";
import astro from "../assets/images/astro.png";
import spaceone from "../assets/images/spaceone.png";
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
    <div className="w-full h-[780px] py-[80px] flex flex-col gap-[60px]">
      <div className="w-[1050px] h-[91px] mx-auto flex items-end gap-[100px]">
        <div className="w-[763px] h-[91px]">
          <h3 className=" font-Work_sance font-[600] text-[38px]">
            Discover More NFTs
          </h3>
          <p className=" font-Work_sance text-[22px]">
            Explore new trending NFTs
          </p>
        </div>

        <button className="w-[187px] h-[60px] border-2 border-main rounded-[20px] flex items-center justify-center gap-[12px]">
          <AiOutlineEye className=" shrink-0 text-main h-[20px] w-[20px]" />
          <p className=" font-Work_sance text-base font-[600]">See All</p>
        </button>
      </div>

      <div className="w-[1050px] h-[496px] grid grid-cols-3 gap-[30px] mx-auto">
        {NFTs.map((NFT) => {
          return (
            <div key={NFT.id} className=" w-[330px] h-[469px] rounded-[20px]">
              <img
                src={NFT.image}
                className="w-full h-[296px] rounded-t-[20px]"
              />

              <div className="bg-[#3B3B3B] w-full h-[173px] rounded-b-[20px] flex flex-col  gap-[25px] px-[30px] pt-[20px] pb-[25px]">
                <div className="w-[270px] h-[60px] flex flex-col gap-[5px]">
                  <h5 className=" font-Work_sance text-[22px] font-[600]">
                    {NFT.name}
                  </h5>
                  <div className="h-[24px] w-[270px] flex gap-[12px]">
                    <img src={NFT.artistAvatar} className="h-[24px] w-[24px]" />
                    <p className=" font-Space_mono text-base font-normal">
                      {NFT.artistname}
                    </p>
                  </div>
                </div>
                <div className="w-[270px] h-[43px] flex justify-between">
                  <div className=" w-[135px] h-[43px]  flex flex-col gap-[8px]">
                    <p className=" font-Space_mono text-[#858584] text-xs">
                      Price
                    </p>
                    <p className="  font-Space_mono text-base">1.63 ETH</p>
                  </div>
                  <div className=" w-[135px] h-[43px]  flex items-end flex-col gap-[8px]">
                    <p className=" font-Space_mono text-[#858584] text-xs">
                      Highest Bid
                    </p>
                    <p className="font-Space_mono text-base">0.33 wETH</p>
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
