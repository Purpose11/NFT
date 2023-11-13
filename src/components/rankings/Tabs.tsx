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
      <div className="w-[1050px] h-[60px] mx-auto flex items-center justify-between relative">
        {tabs.map((tab) => {
          return (
            <div
              key={tab.id}
              className="w-[25%] h-[60px] flex items-center justify-center"
            >
              <h5
                className={`font-Work_sance text-[22px] font-[600]  cursor-pointer ${
                  activeTab === tab.id ? "text-white" : "text-[#858584]"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.name}
              </h5>
            </div>
          );
        })}
        <div className={`underline2 menu${activeTab}`} />
      </div>
      <div className="w-full h-[2206px]">
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
