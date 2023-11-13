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
    <div className="w-full h-[642px]  flex justify-between">
      <img src={space} className="w-[610px] h-[642px]" />
      <div className="w-[610px] h-[642px]  py-[100px]">
        <div className="w-[460px] h-[146px] ">
          <h2 className=" font-Work_sance text-[51px] font-[600] capitalize">
            Connect wallet
          </h2>
          <p className=" font-Work_sance text-[22px]">
            Choose a wallet you want to connect. There are several wallet
            providers.
          </p>
        </div>
        <div className="w-[320px] h-[256px]  mt-[40px] flex flex-col gap-[20px]">
          {walltets.map((wallet) => {
            return (
              <div
                className="w-full h-[72px] rounded-[20px] bg-[#3B3B3B] border border-main pr-[20px] pl-[40px] flex items-center gap-[20px] cursor-pointer"
                key={wallet.id}
              >
                <img src={wallet.icon} className="w-[40px] h-[40px]" />
                <h5 className=" font-Work_sance text-[22px] font-[600]">
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
