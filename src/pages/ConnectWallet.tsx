import space from "../assets/images/space.png";
import Metamask from "../assets/images/Metamask.png";
import WalletConnect from "../assets/images/WalletConnect.png";
import Coinbase from "../assets/images/Coinbase.png";
const ConnectWallet = () => {
  const walltets = [
    {
      id: 1,
      icon: Metamask,
      name: "Metamask",
    },
    {
      id: 2,
      icon: WalletConnect,
      name: "Wallet Connect",
    },
    {
      id: 3,
      icon: Coinbase,
      name: "Coinbase",
    },
  ];
  return (
    <div className="w-full lg:h-[642px] h-[662px]  flex flex-col lg:flex-row lg:gap-[60px]">
      <img src={space} className="lg:w-[610px] w-full lg:h-[642px] h-[232px]" />
      <div className="lg:w-[610px] w-[315px] lg:h-[642px] h-[430px] lg:py-[100px] py-[30px]  mx-auto lg:mx-0">
        <div className="lg:w-[460px] w-[315px] lg:h-[146px] h-[110px]">
          <h2 className=" font-Work_sance lg:text-[51px] text-[38px] font-[600] capitalize">
            Connect wallet
          </h2>
          <p className=" font-Work_sance lg:text-[22px] text-[16px]">
            Choose a wallet you want to connect. There are several wallet
            providers.
          </p>
        </div>
        <div className="lg:w-[320px] w-full lg:h-[256px] h-[220px]  mt-[40px] flex flex-col gap-[20px] ">
          {walltets.map((wallet) => {
            return (
              <div
                className="w-full lg:h-[72px] h-[60px] rounded-[20px] bg-[#3B3B3B] border border-main pr-[20px] pl-[40px] flex items-center gap-[20px] cursor-pointer"
                key={wallet.id}
              >
                <img
                  src={wallet.icon}
                  className="lg:w-[40px] lh:h-[40px] w-[32px] h-[32px]"
                />
                <h5 className=" font-Work_sance lg:text-[22px] text-[18px] font-[600]">
                  {wallet.name}
                </h5>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
