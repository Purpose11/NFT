import Mushrooms from "../../assets/images/Mushrooms.png";
import shroomie from "../../assets/images/shroomie.png";
import { AiOutlineEye } from "react-icons/ai";
import { useState, useEffect } from "react";

const Highlight = () => {
  const initialTime = {
    hours: 59,
    minutes: 59,
    seconds: 59,
  };

  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => {
        const newTime = { ...prevTime };

        if (newTime.seconds > 0) {
          newTime.seconds--;
        } else {
          if (newTime.minutes > 0) {
            newTime.minutes--;
            newTime.seconds = 59;
          } else {
            if (newTime.hours > 0) {
              newTime.hours--;
              newTime.minutes = 59;
              newTime.seconds = 59;
            } else {
              clearInterval(intervalId);
            }
          }
        }

        return newTime;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className="lg:h-[640px] h-[590px] w-full mx-auto lg:pt-[360px] pt-[120px] lg:pb-[60px] pb-[40px]"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(162, 89, 255, 0), rgba(162, 89, 255, 1)), url(${Mushrooms})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="lg:w-[1050px] w-[315px] lg:h-[220px] h-[430px]  mx-auto flex flex-col lg:flex-row lg:items-end relative lg:static gap-[20px] lg:gap-0">
        <div className="lg:w-[775px] w-full lg:h-[220px] h-fit flex flex-col gap-[30px]">
          <div className="w-[151px] h-[44px] rounded-[20px] flex items-center justify-center gap-[12px] bg-[#3B3B3B]">
            <img src={shroomie} className="w-[24px] h-[24px]" />
            <p className=" font-Work_sance text-base ">Shroomie</p>
          </div>
          <h2 className=" font-Work_sance lg:text-[51px] text-[38px] font-[600] ">
            Magic Mushrooms
          </h2>
          <button className="lg:w-[198px] w-[315px] h-[60px] rounded-[20px] flex items-center justify-center gap-[12px] bg-white absolute lg:static bottom-0">
            <AiOutlineEye className=" text-main h-[20px] w-[20px] shrink-0" />
            <p className=" font-Work_sance text-base text-black font-[600]">
              See NFT
            </p>
          </button>
        </div>
        <div className="lg:w-[295px] w-[315px] h-[144px] rounded-[20px] p-[30px]  bg-[#3B3B3B]/50 flex flex-col gap-[10px]">
          <p className=" font-Space_mono text-xs">Auction ends in:</p>
          <div className="w-[235px] h-[61px] flex gap-[10px]">
            <div className="w-[53px] h-[61px]">
              <h3 className=" font-Space_mono font-[700] text-[38px]">
                {time.hours}
              </h3>
              <p className=" font-Space_mono text-xs ">Hours</p>
            </div>
            <h4 className=" font-Space_mono font-[700] text-[28px]">:</h4>
            <div className="w-[53px] h-[61px]">
              <h3 className=" font-Space_mono font-[700] text-[38px]">
                {time.minutes}
              </h3>
              <p className=" font-Space_mono text-xs ">Minutes</p>
            </div>
            <h4 className=" font-Space_mono font-[700] text-[28px]">:</h4>
            <div className="w-[53px] h-[61px]">
              <h3 className=" font-Space_mono font-[700] text-[38px]">
                {time.seconds}
              </h3>
              <p className=" font-Space_mono text-xs ">Seconds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
