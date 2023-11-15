import avatar1 from "../../assets/images/avatar/avatar1.png";
import avatar2 from "../../assets/images/avatar/avatar2.png";
import avatar3 from "../../assets/images/avatar/avatar3.png";
import avatar4 from "../../assets/images/avatar/avatar4.png";
import avatar5 from "../../assets/images/avatar/avatar5.png";
import avatar6 from "../../assets/images/avatar/avatar6.png";
import avatar7 from "../../assets/images/avatar/avatar7.png";
import avatar8 from "../../assets/images/avatar/avatar8.png";
import avatar9 from "../../assets/images/avatar/avatar9.png";
import avatar10 from "../../assets/images/avatar/avatar10.png";
import avatar11 from "../../assets/images/avatar/avatar11.png";
import avatar12 from "../../assets/images/avatar/avatar12.png";
import avatar13 from "../../assets/images/avatar/avatar13.png";
import avatar14 from "../../assets/images/avatar/avatar14.png";
import avatar15 from "../../assets/images/avatar/avatar15.png";
import avatar16 from "../../assets/images/avatar/avatar16.png";
import avatar17 from "../../assets/images/avatar/avatar17.png";
import avatar18 from "../../assets/images/avatar/avatar18.png";
const Ranks = () => {
  const artists = [
    {
      id: 1,
      avatar: avatar1,
      name: "Jaydon Ekstrom",
    },
    {
      id: 2,
      avatar: avatar2,
      name: "Ruben Carder",
    },
    {
      id: 3,
      avatar: avatar3,
      name: "Alfredo Septimus",
    },
    {
      id: 4,
      avatar: avatar4,
      name: "Davis Franci",
    },
    {
      id: 5,
      avatar: avatar5,
      name: "Livia Rosser",
    },
    {
      id: 6,
      avatar: avatar6,
      name: "Kianna Donin",
    },
    {
      id: 7,
      avatar: avatar7,
      name: "Phillip Lipshutz",
    },
    {
      id: 8,
      avatar: avatar8,
      name: "Maria Rosser",
    },
    {
      id: 9,
      avatar: avatar9,
      name: "Kianna Stanton",
    },
    {
      id: 10,
      avatar: avatar10,
      name: "Angel Lubin",
    },
    {
      id: 11,
      avatar: avatar11,
      name: "Allison Torff",
    },
    {
      id: 12,
      avatar: avatar12,
      name: "Davis Workman",
    },
    {
      id: 13,
      avatar: avatar13,
      name: "Lindsey Lipshutz",
    },
    {
      id: 14,
      avatar: avatar14,
      name: "Randy Carder",
    },
    {
      id: 15,
      avatar: avatar15,
      name: "Lydia Culhane",
    },
    {
      id: 16,
      avatar: avatar16,
      name: "Rayna Bator",
    },
    {
      id: 17,
      avatar: avatar17,
      name: "Jocelyn Westervelt",
    },
    {
      id: 18,
      avatar: avatar18,
      name: "Marilyn Torff",
    },
    {
      id: 19,
      avatar: avatar10,
      name: "Skylar Levin",
    },
    {
      id: 19,
      avatar: avatar3,
      name: "Terry Dorwart",
    },
  ];
  return (
    <div className="w-full lg:h-[2206px] h-fit py-[40px] ">
      <div className="lg:w-[1050px] w-[315px] h-fit mx-auto">
        {/*header*/}
        <div className="h-[46px] w-full rounded-[20px] border border-[#858584] flex justify-between lg:px-[20px] px-[12px] text-[#858584]">
          <div className="lg:w-[50%] w-[215px] flex items-center lg:gap-[20px] gap-[10px]  ">
            <div className=" font-Space_mono text-base lg:h-[30px] lg:w-[30px] h-[24px] w-[24px] flex items-center justify-center">
              #
            </div>
            <p className=" font-Space_mono lg:text-base text-[12px] ">Artist</p>
          </div>
          <div className="w-[16.5%]  lg:flex items-center hidden">
            <p className=" font-Space_mono text-base ">Change</p>
          </div>
          <div className="w-[16.5%]  lg:flex hidden items-center">
            <p className=" font-Space_mono text-base ">NFTs Sold</p>
          </div>
          <div className="lg:w-[16.5%] w-[100px] flex items-center">
            <p className=" font-Space_mono lg:text-base text-[12px] ">
              Volume{" "}
            </p>
          </div>
        </div>
        {artists.map((artist) => {
          return (
            <div
              key={artist.id}
              className="lg:h-[84px] h-[50px] w-full bg-[#3B3B3B] rounded-[20px] lg:px-[20px] px-[12px] mt-[20px] flex justify-between"
            >
              <div className="lg:w-[50%] w-[215px]  flex items-center lg:gap-[20px] gap-[10px]">
                <div className="lg:w-[30px] lg:h-[30px] w-[24px] h-[24px] bg-[#2B2B2B] flex items-center justify-center rounded-[20px] font-Space_mono lg:text-base text-[12px] text-[#858584]">
                  {artist.id}
                </div>
                <img
                  src={artist.avatar}
                  className="lg:h-[60px] lg:w-[60px] h-[24px] w-[24px]"
                />
                <p className=" font-Work_sance lg:text-[22px] text-[12px]">
                  {artist.name}
                </p>
              </div>
              <div className="w-[16.5%]  lg:flex hidden items-center">
                <p className=" font-Space_mono text-[#00AC4F] text-base">
                  +1.41%
                </p>
              </div>
              <div className="w-[16.5%]  lg:flex hidden items-center">
                <p className=" font-Space_mono text-base ">602</p>
              </div>
              <div className="lg:w-[16.5%] w-[100px] flex items-center">
                <p className=" font-Space_mono lg:text-base text-[12px] ">
                  12.4 ETH
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Ranks;
