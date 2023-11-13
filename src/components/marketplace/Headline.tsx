import { FiSearch } from "react-icons/fi";
function Headline() {
  return (
    <div className="w-full h-[351px] py-[80px] border-b border-[#3B3B3B]">
      <div className="w-[1050px] h-[191px]  mx-auto flex flex-col gap-[30px]">
        <div className="w-full h-[101px]">
          <h2 className=" text-[51px] font-[600] font-Work_sance">
            Browse Marketplace
          </h2>
          <p className=" text-[22px] font-Work_sance ">
            Browse through more than 50k NFTs on the NFT Marketplace.
          </p>
        </div>
        <div className="w-[1050px] h-[60px] rounded-[20px] border border-[#3B3B3B] mx-auto flex items-center justify-between px-[20px]">
          <input
            type="text"
            placeholder="Search your favourite NFTs"
            className="h-[50px] w-[70%] outline-none bg-inherit text-base placeholder:text-base font-Work_sance placeholder:font-Work_sance
             placeholder:text-[#858584] text-[#CCCCCC]"
          />
          <FiSearch className=" text-white h-[24px] w-[24px]" />
        </div>
      </div>
    </div>
  );
}

export default Headline;
