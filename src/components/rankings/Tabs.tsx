import { useState } from "react";
import Ranks from "./Ranks";
const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);
  const tabs = [
    {
      id: 1,
      name: "Today",
      span: "1d",
    },
    {
      id: 2,
      name: "This Week",
      span: "7d",
    },
    {
      id: 3,
      name: "This Month",
      span: "30d",
    },
    {
      id: 4,
      name: "All Time",
      span: "All Time",
    },
  ];
  return (
    <div className="w-full h-fit">
      <div className="lg:w-[1050px] w-[315px] h-[60px] mx-auto flex items-center justify-between relative ">
        {tabs.map((tab) => {
          return (
            <div
              key={tab.id}
              className="w-[25%] h-[60px] flex items-center justify-center"
            >
              <div
                className={`font-Work_sance lg:text-[22px] text-base font-[600]  cursor-pointer   ${
                  activeTab === tab.id ? "text-white" : "text-[#858584]"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <h5 className="hidden lg:block">{tab.name}</h5>
                <h5 className="block lg:hidden">{tab.span}</h5>
              </div>
            </div>
          );
        })}
        <div className={`underline2 menu${activeTab}`} />
      </div>
      <div className="w-full lg:h-[2206px] h-fit">
        {activeTab === 1 ? (
          <Ranks />
        ) : activeTab === 2 ? (
          <Ranks />
        ) : activeTab === 3 ? (
          <Ranks />
        ) : (
          <Ranks />
        )}
      </div>
    </div>
  );
};

export default Tabs;
