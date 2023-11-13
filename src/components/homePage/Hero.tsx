import { PiRocketLaunch } from "react-icons/pi";
import Image_Placeholder from "../../assets/images/Image_Placeholder.png";
import avatar from "../../assets/images/avatar.png";
import { Link } from "react-router-dom";

const Hero = () => {
  const info = [
    {
      id: 1,
      name: "240k+",
      text: "total sale",
    },
    {
      id: 2,
      name: "100k+",
      text: "Auctions",
    },
    {
      id: 3,
      name: "240k+",
      text: "Artists",
    },
  ];
  return (
    <div className="w-full h-[704px] flex items-center justify-center">
      <div className="w-[1050px] h-[544px]  flex gap-[30px]">
        <div className="w-[510px] h-[544px]  flex flex-col gap-[30px]">
          <div className="w-full h-[347px] flex flex-col gap-[20px]">
            <h1 className=" font-Work_sance font-[600] text-[67px] leading-[73.7px] capitalize w-[90%]">
              Discover digital art & Collect NFTs
            </h1>
            <h1 className="  font-Work_sance capitalize text-[22px] leading-[35.2px] font-normal ">
              NFT marketplace UI created with Anima for Figma. Collect, buy and
              sell art from more than 20k NFT artists.
            </h1>
          </div>
          <Link
            className="bg-main w-[224px] h-[60px] rounded-[20px] flex  py-0 px-[50px] items-center gap-3 cursor-pointer"
            to="/signup"
          >
            <PiRocketLaunch className=" shrink-0 h-[20px] w-[20px]" />
            <p className=" font-Work_sance text-base">Get Started</p>
          </Link>
          <div className="w-full h-[77px] flex gap-[20px]">
            {info.map((inf) => (
              <div className="w-[150px] h-[77px]" key={inf.id}>
                <h4 className=" font-Space_mono text-[28px]">{inf.name}</h4>
                <p className=" font-Work_sance text-2xl capitalize">
                  {inf.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[510px] h-[510px]">
          <div className="w-full h-[401px]">
            <img
              src={Image_Placeholder}
              className="object-cover h-[100%] rounded-t-[20px] "
            />
          </div>
          <div className="bg-[#3B3B3B] rounded-b-[20px] w-full h-[109px] p-[20px] flex flex-col gap-[10px]">
            <h5 className=" font-Work_sance text-[22px]">Space Walking</h5>
            <div className="flex w-full gap-[10px] items-center">
              <img src={avatar} className="h-[24px]" />
              <p className=" font-Work_sance text-base">Animakid</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
