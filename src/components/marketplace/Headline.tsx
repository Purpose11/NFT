import { FiSearch } from "react-icons/fi";
function Headline() {
  return (
    <div className="w-full lg:h-[351px] h-[263px] lg:py-[80px] py-[40px] border-b border-[#3B3B3B] ">
      <div className="lg:w-[1050px] w-[315px] lg:h-[191px] h-[183px]  mx-auto flex flex-col gap-[30px]">
        <div className="w-full lg:h-[101px] h-[93px]">
          <h2 className=" lg:text-[51px] text-[28px] font-[600] font-Work_sance">
            Browse Marketplace
          </h2>
          <p className=" lg:text-[22px] text-base font-Work_sance mt-[10px] lg:mt-0 ">
            Browse through more than 50k NFTs on the NFT Marketplace.
          </p>
        </div>
        <div className="lg:w-[1050px] w-full h-[60px] rounded-[20px] border border-[#3B3B3B] mx-auto flex items-center justify-between px-[20px]">
          <input
            type="text"
            placeholder="Search your favourite NFTs"
            className="h-[50px] lg:w-[70%] w-[85%] outline-none bg-inherit text-base placeholder:text-base font-Work_sance placeholder:font-Work_sance
             placeholder:text-[#858584] text-[#CCCCCC]"
          />
          <FiSearch className=" text-white h-[24px] w-[24px]" />
        </div>
      </div>
    </div>
  );
}

export default Headline;
