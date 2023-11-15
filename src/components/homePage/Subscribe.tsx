import astronaut from "../../assets/images/astronaut.png";
import { BiEnvelope } from "react-icons/bi";

const Subscribe = () => {
  return (
    <div className=" w-full lg:h-[550px] h-[645px] lg:pt-[40px] lg:pb-[80px] py-[40px]">
      <div className="lg:w-[1050px] w-[315px] lg:h-[430px] h-[565px] mx-auto lg:bg-[#3B3B3B] lg:rounded-[20px] lg:-[60px] flex flex-col lg:flex-row lg:items-center lg:gap-[80px] gap-[30px]">
        <img
          src={astronaut}
          className="lg:w-[425px] w-[315px] lg:h-[310px] h-[255px] rounded-[20px]"
        />
        <div className="lg:w-[425px] w-[315px] lg:h-[272px] h-[280px] flex flex-col gap-[40px]">
          <div className="lg:w-[425px] w-[315px] lg:h-[172px] h-[132px]  flex flex-col gap-[10px]">
            <h3 className=" font-Work_sance font-[600] lg:text-[38px] lg:leading-[45.6px] leading-[39.2px] text-[28px] capitalize w-[90%] lg:w-full">
              Join our weekly digest
            </h3>
            <p className=" capitalize lg:text-[22px] lg:leading-[35.2px] leading-[22.4px] text-base font-Work_sance">
              Get exclusive promotions & updates straight to your inbox.
            </p>
          </div>

          <div className="lg:w-[425px] w-[315px] lg:h-[60px] h-[108px] lg:rounded-[20px]  flex flex-col lg:flex-row lg:bg-white lg:gap-[12px] gap-[16px]">
            <input
              type="text"
              placeholder="Enter your email here"
              className="lg:h-[60px] h-[46px] lg:w-[202px] w-full rounded-[20px] outline-none border-none px-[16px] text-[#2B2B2B]
              text-base placeholder:text-base font-Work_sance placeholder:font-Work_sance placeholder:text-[#2B2B2B]"
            />
            <button className=" bg-main lg:w-[211px] w-full lg:h-[60px] h-[46px] flex items-center justify-center gap-[12px] rounded-[20px]">
              <BiEnvelope className=" shrink-0 text-white h-[20px] w-[20px]" />
              <p className=" font-Work_sance font-[600] text-base">Subscribe</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
