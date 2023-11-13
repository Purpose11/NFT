import astronaut from "../../assets/images/astronaut.png";
import { BiEnvelope } from "react-icons/bi";

const Subscribe = () => {
  return (
    <div className=" w-full h-[550px] pt-[40px] pb-[80px]">
      <div className="w-[1050px] h-[430px] mx-auto bg-[#3B3B3B] rounded-[20px] p-[60px] flex items-center gap-[80px]">
        <img src={astronaut} className="w-[425px] h-[310px] rounded-[20px]" />
        <div className="w-[425px] h-[272px] flex flex-col gap-[40px]">
          <div className="w-[425px] h-[172px] ">
            <h3 className=" font-Work_sance font-[600] text-[38px] capitalize">
              Join our weekly digest
            </h3>
            <p className=" capitalize text-[22px] font-Work_sance">
              Get exclusive promotions & updates straight to your inbox.
            </p>
          </div>

          <div className=" w-[425px] h-[60px] rounded-[20px]  flex bg-white gap-[12px]">
            <input
              type="text"
              placeholder="Enter your email here"
              className="h-[60px] w-[202px] rounded-[20px] outline-none border-none px-[16px] text-[#2B2B2B]
              text-base placeholder:text-base font-Work_sance placeholder:font-Work_sance placeholder:text-[#2B2B2B]"
            />
            <button className=" bg-main w-[211px] h-[60px] flex items-center justify-center gap-[12px] rounded-[20px]">
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
