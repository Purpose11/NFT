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
    <div className="w-full h-[738px] py-[80px]">
      <div className="w-[1050px] h-[91px] mx-auto">
        <h3 className=" capitalize font-Work_sance text-[38px] font-[600]">
          How it works
        </h3>
        <p className=" capitalize font-Work_sance text-[22px] ">
          Find out how to get started
        </p>
      </div>

      <div className="w-[1050px] h-[439px] grid grid-cols-3 gap-[30px] mx-auto mt-[48px]">
        {Info.map((inf) => {
          return (
            <div
              key={inf.id}
              className=" w-[330px] h-[439px] rounded-[20px] bg-[#3B3B3B] px-[30px] flex flex-col gap-[20px]"
            >
              <img src={inf.image} className="w-[250px] h-[250px]" />
              <div className="w-[270px] h-[126px]">
                <h5 className=" font-Work_sance text-[22px] font-[600] text-center">
                  {inf.heading}
                </h5>
                <p className=" font-Work_sance text-base text-center mt-[10px]">
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
