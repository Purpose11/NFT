import space2 from "../assets/images/space2.png";
import { PiUser } from "react-icons/pi";
import { AiOutlineMail } from "react-icons/ai";
import { CiLock } from "react-icons/ci";
const SignUp = () => {
  return (
    <div className="w-full lg:h-[691px] h-[747px] flex flex-col lg:flex-row lg:gap-[60px] gap-0">
      <img
        src={space2}
        className="lg:w-[610px] w-full lg:h-[691px] h-[232px]"
      />
      <div className="lg:w-[610px] w-[315px] lg:h-[691px] h-[515px] mx-auto lg:mx-0 lg:py-[100px] py-[30px]">
        <div className="lg:w-[460px] w-[315px] lg:h-[146px] h-[110px]">
          <h2 className=" font-Work_sance lg:text-[51px] text-[38px] font-[600] capitalize">
            Create account
          </h2>
          <p className="lg:text-[22px] text-base font-Work_sance capitalize">
            Welcome! enter your details and start creating, collecting and
            selling NFTs.
          </p>
        </div>
        <div className="lg:w-[330px] w-[315px] h-[305px] lg:mt-[40px] mt-[30px]">
          <div className="w-full h-[229px] flex flex-col gap-[15px] ">
            <div className="bg-white w-full h-[46px] rounded-[20px] px-[20px] flex items-center gap-[12px] text-[#2B2B2B]">
              <PiUser className="w-[20px] h-[20px] text-gray-500" />
              <input
                type="text"
                placeholder="Username"
                className=" border-none w-[80%] h-[35px] outline-none bg-inherit text-base font-Work_sance placeholder:text-base placeholder:font-Work_sance placeholder:text-black"
              />
            </div>
            <div className="bg-white w-full h-[46px] rounded-[20px] px-[20px] flex items-center gap-[12px] text-[#2B2B2B]">
              <AiOutlineMail className="w-[20px] h-[20px] text-gray-500" />
              <input
                type="email"
                placeholder="Email Address"
                className=" border-none w-[80%] h-[35px] outline-none bg-inherit text-base font-Work_sance placeholder:text-base placeholder:font-Work_sance placeholder:text-black"
              />
            </div>
            <div className="bg-white w-full h-[46px] rounded-[20px] px-[20px] flex items-center gap-[12px] text-[#2B2B2B]">
              <CiLock className="w-[20px] h-[20px] text-gray-500" />
              <input
                type="password"
                placeholder="Password"
                className=" border-none w-[80%] h-[35px] outline-none bg-inherit text-base font-Work_sance placeholder:text-base placeholder:font-Work_sance placeholder:text-black"
              />
            </div>
            <div className="bg-white w-full h-[46px] rounded-[20px] px-[20px] flex items-center gap-[12px] text-[#2B2B2B]">
              <CiLock className="w-[20px] h-[20px] text-gray-500" />
              <input
                type="password"
                placeholder="Confirm Password"
                className=" border-none w-[80%] h-[35px] outline-none bg-inherit text-base font-Work_sance placeholder:text-base placeholder:font-Work_sance placeholder:text-black"
              />
            </div>
          </div>

          <button className="w-full h-[46px] bg-main rounded-[20px] flex items-center justify-center mt-[30px] font-Work_sance text-base font-[600]">
            Create account
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
