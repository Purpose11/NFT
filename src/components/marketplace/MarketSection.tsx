import { useState } from "react";
import Market from "./Market";

const MarketSection = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    {
      id: 1,
      text: "NFTs",
      number: 12,
    },
    {
      id: 2,
      text: "Collections",
      number: 23,
    },
  ];
  return (
    <div className="w-full h-[2176px]">
      <div className="w-full h-[70px]">
        <div className="w-[1050px] h-[70px] mx-auto mt-[10px] flex justify-between relative">
          {tabs.map((tab) => {
            return (
              <div
                key={tab.id}
                className="h-[60px] w-[50%] flex items-center justify-center gap-[16px]"
              >
                <h5
                  className={` font-Work_sance text-[22px] font-[600] cursor-pointer ${
                    activeTab === tab.id ? "text-white" : "text-[#858584]"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.text}
                </h5>
                <div
                  className={`w-fit h-[32px] rounded-[20px] flex items-center justify-center  py-[5px] px-[10px] ${
                    activeTab === tab.id ? "bg-[#858584]" : "bg-[#3B3B3B]"
                  }`}
                >
                  <p className=" font-Space_mono text-base">{tab.number}</p>
                </div>
              </div>
            );
          })}
          <div className={`underline menu${activeTab}`} />
        </div>
      </div>
      {activeTab === 1 ? <Market /> : activeTab === 2 ? <Market /> : null}
    </div>
  );
};

export default MarketSection;
