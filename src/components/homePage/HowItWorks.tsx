import account from "../../assets/images/account.png";
import collection from "../../assets/images/collection.png";
import earning from "../../assets/images/earning.png";

const HowItWorks = () => {
  const Info = [
    {
      id: 1,
      image: account,
      heading: "Setup Your wallet",
      main: "Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner.",
    },
    {
      id: 2,
      image: collection,
      heading: "Create Collection",
      main: "Upload your work and setup your collection. Add a description, social links and floor price.",
    },
    {
      id: 3,
      image: earning,
      heading: "Start Earning",
      main: "Choose between auctions and fixed price listings. Start earning by selling your NFTs or trading others.",
    },
  ];
  return (
    <div className="w-full lg:h-[738px] h-fit lg:py-[80px] py-[40px]">
      <div className="lg:w-[1050px] w-[315px] lg:h-[91px] h-[71px] mx-auto">
        <h3 className=" capitalize font-Work_sance lg:text-[38px] text-[28px] font-[600]">
          How it works
        </h3>
        <p className=" capitalize font-Work_sance lg:text-[22px] text-base ">
          Find out how to get started
        </p>
      </div>

      <div className="lg:w-[1050px] w-[315px] lg:h-[439px] h-fit lg:grid lg:grid-cols-3 flex flex-col gap-[20px] lg:gap-[30px] mx-auto lg:mt-[48px] mt-[40px]">
        {Info.map((inf) => {
          return (
            <div
              key={inf.id}
              className="lg:w-[330px] w-[315px] lg:h-[439px] h-[157px] rounded-[20px] bg-[#3B3B3B] lg:px-[30px] flex lg:flex-col lg:gap-[20px] justify-between lg:justify-normal p-[20px] lg:p-0 border"
            >
              <img
                src={inf.image}
                className="lg:w-[250px] w-[100px] lg:h-[250px] h-[100px]"
              />
              <div className="lg:w-[270px] w-[155px] lg:h-[126px] h-[117px] border">
                <h5 className=" font-Work_sance lg:text-[22px] text-[16px] leading-[16.8px] lg:leading-0 font-[600] lg:text-center">
                  {inf.heading}
                </h5>
                <p className=" font-Work_sance lg:text-base text-[12px] lg:text-center lg:mt-[10px] mt-[5px] border">
                  {inf.main}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HowItWorks;
