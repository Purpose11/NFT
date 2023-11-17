import { PiRocketLaunch } from "react-icons/pi";
import Image_Placeholder from "../../assets/images/Image_Placeholder.png";
import avatar from "../../assets/images/avatar.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Hero = () => {
  const initialInfo = [
    {
      id: 1,
      name: 0,
      text: "total sale",
      target: 240,
    },
    {
      id: 2,
      name: 0,
      text: "Auctions",
      target: 100,
    },
    {
      id: 3,
      name: 0,
      text: "Artists",
      target: 240,
    },
  ];

  const [info, setInfo] = useState(initialInfo);

  useEffect(() => {
    const updateCounts = () => {
      setInfo((prevInfo) =>
        prevInfo.map((item) => {
          if (item.name < item.target) {
            return {
              ...item,
              name: item.name + 1,
            };
          }
          return item;
        })
      );
    };

    const interval = setInterval(updateCounts, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full lg:h-[704px] h-[786px] flex flex-col gap-[30px] lg:gap-0 lg:items-center lg:justify-center py-[40px] lg:py-0">
      <div className="lg:w-[1050px] w-[315px] lg:h-[544px] h-[706px]  flex flex-col lg:flex-row gap-[30px] mx-auto lg:mx-0 relative lg:static">
        <div className="lg:w-[510px] w-full lg:h-[544px] h-[154px]  flex flex-col lg:gap-[30px] gap-[10px]">
          <div className="w-full lg:h-[347px] h-[154px] flex flex-col lg:gap-[20px] gap-[10px]">
            <h1 className=" font-Work_sance font-[600] lg:text-[67px] text-[28px] lg:leading-[73.7px]  leading-[39.2px] capitalize lg:w-[90%] w-[95%] ">
              Discover digital art & Collect NFTs
            </h1>
            <p className="  font-Work_sance capitalize lg:text-[22px] lg:leading-[35.2px] text-[16px] leading-[22.4px] font-normal  w-full ">
              NFT marketplace UI created with Anima for Figma. Collect, buy and
              sell art from more than 20k NFT artists.
            </p>
          </div>
          <Link
            className="bg-main lg:w-[224px] w-full h-[60px] rounded-[20px] flex  py-0 px-[50px] items-center justify-center lg:justify-normal gap-3 cursor-pointer absolute bottom-[100px] lg:static"
            to="/signup"
          >
            <PiRocketLaunch className=" shrink-0 h-[20px] w-[20px]" />
            <p className=" font-Work_sance text-base font-[600] lg:font-normal">
              Get Started
            </p>
          </Link>
          <div className="w-full lg:h-[77px] h-[57px] flex lg:gap-[20px] justify-between absolute lg:static bottom-0">
            {info.map((inf) => (
              <div
                className="lg:w-[150px] lg:h-[77px] w-[85px] h-[57px]"
                key={inf.id}
              >
                <h4 className=" font-Space_mono lg:text-[28px] text-[22px]">
                  {inf.name}k
                </h4>
                <p className=" font-Work_sance lg:text-2xl text-base capitalize">
                  {inf.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-[510px] w-full lg:h-[510px] h-[315px]">
          <div className="w-full lg:h-[401px] h-[206px]">
            <img
              src={Image_Placeholder}
              className="object-cover h-[100%] rounded-t-[20px] w-full "
            />
          </div>
          <div className="bg-[#3B3B3B] rounded-b-[20px] w-full h-[109px] p-[20px] flex flex-col gap-[10px]">
            <h5 className=" font-Work_sance text-[22px]">Space Walking</h5>
            <div className="flex w-full gap-[10px] items-center">
              <img src={avatar} className="h-[24px] w-[24px]" />
              <p className=" font-Work_sance text-base">Animakid</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
