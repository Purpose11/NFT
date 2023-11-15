import shroomie from "../../assets/images/shroomie.png";
import mushrooms from "../../assets/images/NFTs/mushrooms.png";
import happyRobot1 from "../../assets/images/NFTs/happyRobot1.png";
import happyRobot2 from "../../assets/images/NFTs/happyRobot2.png";
import bear from "../../assets/images/NFTs/bear.png";
import robot from "../../assets/images/robot.png";
import artist6 from "../../assets/images/artist6.png";
import artist8 from "../../assets/images/artist8.png";
import artist11 from "../../assets/images/artist11.png";
import artist10 from "../../assets/images/artist10.png";
import artist100 from "../../assets/images/artist100.png";
import artist101 from "../../assets/images/artist101.png";
import dog from "../../assets/images/NFTs/dog.png";
import dog2 from "../../assets/images/NFTs/dog2.png";
import DancingRobot from "../../assets/images/NFTs/DancingRobot.png";
import girl from "../../assets/images/NFTs/girl.png";
import moonDancer from "../../assets/images/moonDancer.png";
import space from "../../assets/images/NFTs/space.png";
import nebulaAvater from "../../assets/images/nebulaAvatar.png";
import sunset from "../../assets/images/NFTs/sunset.png";
import desert from "../../assets/images/NFTs/desert.png";
import catch22 from "../../assets/images/catch22.png";
import ape from "../../assets/images/NFTs/ape.png";
const Market = () => {
  const NFTs = [
    {
      id: 1,
      image: mushrooms,
      name: "Magic Mushroom 0325",
      artistAvatar: shroomie,
      artistName: "Shroomie",
    },
    {
      id: 2,
      image: happyRobot1,
      name: "Happy Robot 032",
      artistAvatar: robot,
      artistName: "BeKind2Robots",
    },
    {
      id: 3,
      image: happyRobot2,
      name: "Happy Robot 024",
      artistAvatar: robot,
      artistName: "BeKind2Robots",
    },
    {
      id: 4,
      image: bear,
      name: "Designer Bear",
      artistAvatar: artist6,
      artistName: "Mr Fox",
    },
    {
      id: 5,
      image: dog,
      name: "Colorful Dog 0356",
      artistAvatar: artist11,
      artistName: "Keepitreal",
    },
    {
      id: 6,
      image: DancingRobot,
      name: "Dancing Robot 0312",
      artistAvatar: artist8,
      artistName: "Robotica",
    },
    {
      id: 7,
      image: girl,
      name: "Cherry Blossom Girl 035",
      artistAvatar: moonDancer,
      artistName: "MoonDancer",
    },
    {
      id: 8,
      image: space,
      name: "Space Travel",
      artistAvatar: nebulaAvater,
      artistName: "NebulaKid",
    },
    {
      id: 9,
      image: sunset,
      name: "Sunset Dimension",
      artistAvatar: artist10,
      artistName: "Animakid",
    },
    {
      id: 10,
      image: desert,
      name: "Desert Walk",
      artistAvatar: catch22,
      artistName: "Catch 22",
    },
    {
      id: 11,
      image: ape,
      name: "IceCream Ape 0324",
      artistAvatar: artist100,
      artistName: "Ice Ape Club",
    },
    {
      id: 12,
      image: dog2,
      name: "Colorful Dog 0344",
      artistAvatar: artist101,
      artistName: "PuppyPower",
    },
  ];
  return (
    <div className=" w-full lg:h-[2106px] h-fit bg-[#3B3B3B] border-b-2 border-[#2B2B2B] lg:py-[60px] py-[40px] ">
      <div className="lg:w-[1050px] w-[315px] h-fit lg:grid lg:grid-cols-3 flex flex-col gap-[30px]  mx-auto">
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

              <div className="bg-[#2B2B2B] w-full lg:h-[173px] h-[164px] rounded-b-[20px] flex flex-col  gap-[25px] lg:px-[30px] px-[20px] pt-[20px] pb-[25px] ">
                <div className="lg:w-[270px] w-[275px] h-[60px] flex flex-col gap-[5px]">
                  <h5 className=" font-Work_sance text-[22px] font-[600]">
                    {NFT.name}
                  </h5>
                  <div className="h-[24px] lg:w-[270px] w-[275px] flex gap-[12px]">
                    <img src={NFT.artistAvatar} className="h-[24px] w-[24px]" />
                    <p className=" font-Space_mono text-base font-normal">
                      {NFT.artistName}
                    </p>
                  </div>
                </div>
                <div className="lg:w-[270px] w-[275px] lg:h-[43px] h-[34px] flex justify-between ">
                  <div className="lg:w-[135px] w-[137.5px] lg:h-[43px] h-[34px]  flex flex-col gap-[8px] ">
                    <p className=" font-Space_mono text-[#858584] lg:text-xs text-[12px] leading-[13.2px] lg:leading-0 ">
                      Price
                    </p>
                    <p className="  font-Space_mono lg:text-base text-[12px]">
                      1.63 ETH
                    </p>
                  </div>
                  <div className=" lg:w-[135px] w-[137.5px] lg:h-[43px] h-[34px] flex items-end flex-col gap-[8px]">
                    <p className=" font-Space_mono text-[#858584] lg:text-xs text-[12px] leading-[13.2px] lg:leading-0">
                      Highest Bid
                    </p>
                    <p className="font-Space_mono lg:text-base text-[12px]">
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

export default Market;
