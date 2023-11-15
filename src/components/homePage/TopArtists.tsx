import { PiRocketLaunch } from "react-icons/pi";
import artist1 from "../../assets/images/artist1.png";
import artist2 from "../../assets/images/artist2.png";
import artist3 from "../../assets/images/artist3.png";
import artist4 from "../../assets/images/artist4.png";
import artist5 from "../../assets/images/artist5.png";
import artist6 from "../../assets/images/artist6.png";
import artist7 from "../../assets/images/artist7.png";
import artist8 from "../../assets/images/artist8.png";
import artist9 from "../../assets/images/artist9.png";
import artist10 from "../../assets/images/artist10.png";
import artist11 from "../../assets/images/artist11.png";
import artist12 from "../../assets/images/artist12.png";

const TopArtists = () => {
  return (
    <div className="w-full lg:h-[1085px] h-[893px]  lg:py-[80px] py-[40px] flex flex-col lg:gap-[60px] gap-[40px]  relative lg:static">
      <div className="lg:w-[1050px] w-[315px] lg:h-[91px] h-[93px] mx-auto flex flex-col lg:flex-row lg:items-end  gap-[100px]">
        <div className="lg:w-[703px] w-full  lg:h-[91px] h-[93px]">
          <h3 className=" font-Work_sance lg:text-[38px] text-[28px] font-[600]">
            Top creators
          </h3>
          <p className=" font-Work_sance lg:text-[22px] text-base">
            Checkout Top Rated Creators on the NFT Marketplace
          </p>
        </div>
        <button className="lg:w-[247px] w-[315px] h-[60px] rounded-[20px] border-2 border-main flex items-center justify-center gap-[12px] absolute lg:static lg:bottom-0 bottom-[40px]">
          <PiRocketLaunch className=" shrink-0 h-[20px] w-[20px] text-main" />
          <p className=" font-Work_sance  text-base">View Rankings</p>
        </button>
      </div>
      <div className="lg:w-[1050px] w-[315px] lg:h-[774px] h-[580px] mx-auto  lg:grid lg:grid-cols-4 flex flex-col lg:gap-[30px] gap-[20px]">
        <div className="lg:w-[240px] w-full lg:h-[238px] h-[100px] p-[20px]  rounded-[20px] bg-[#3B3B3B] flex lg:flex-col flex-row gap-[20px] items-center relative">
          <img
            src={artist1}
            className="lg:h-[120px] lg:w-[120px] h-[60px] w-[60px] rounded-[100px]"
          />
          <div className="lg:w-[200px] w-[195px] h-[58px] gap-[5px] lg:gap-0">
            <h5 className=" font-Work_sance font-[600px] lg:text-[22px] text-[18px] lg:text-center">
              Keepitreal
            </h5>
            <p className="lg:text-base text-sm font-Work_sance text-[#858584] lg:text-center">
              Total Sales:{" "}
              <span className=" font-Space_mono text-white  ml-[5px] lg:ml-0">
                34.5 ETH
              </span>
            </p>
          </div>
          <div className="w-[30px] h-[30px] rounded-[20px] bg-[#2B2B2B] flex items-center justify-center lg:top-[20px] top-[12px]  absolute lg:left-[20px] left-[15px]">
            <p className=" font-Space_mono text-base text-[#858584]">1</p>
          </div>
        </div>
        <div className="lg:w-[240px] w-full lg:h-[238px] h-[100px] p-[20px]  rounded-[20px] bg-[#3B3B3B] flex lg:flex-col flex-row gap-[20px] items-center relative">
          <img
            src={artist2}
            className="lg:h-[120px] lg:w-[120px] h-[60px] w-[60px] rounded-[100px]"
          />
          <div className="lg:w-[200px] w-[195px] h-[58px] gap-[5px] lg:gap-0">
            <h5 className=" font-Work_sance font-[600px] lg:text-[22px] text-[18px] lg:text-center">
              DigiLab
            </h5>
            <p className="lg:text-base text-sm  font-Work_sance text-[#858584] lg:text-center">
              Total Sales:{" "}
              <span className=" font-Space_mono text-white ml-[5px] lg:ml-0">
                34.5 ETH
              </span>
            </p>
          </div>
          <div className="w-[30px] h-[30px] rounded-[20px] bg-[#2B2B2B] flex items-center justify-center lg:top-[20px] top-[12px]  absolute lg:left-[20px] left-[15px]">
            <p className=" font-Space_mono text-base text-[#858584]">2</p>
          </div>
        </div>
        <div className="lg:w-[240px] w-full lg:h-[238px] h-[100px] p-[20px]  rounded-[20px] bg-[#3B3B3B] flex lg:flex-col flex-row gap-[20px] items-center relative">
          <img
            src={artist3}
            className="lg:h-[120px] lg:w-[120px] h-[60px] w-[60px] rounded-[100px]"
          />
          <div className="lg:w-[200px] w-[195px] h-[58px] gap-[5px] lg:gap-0">
            <h5 className=" font-Work_sance font-[600px] lg:text-[22px] text-[18px] lg:text-center">
              GravityOne
            </h5>
            <p className="lg:text-base text-sm  font-Work_sance text-[#858584] lg:text-center">
              Total Sales:{" "}
              <span className=" font-Space_mono text-white ml-[5px] lg:ml-0">
                34.5 ETH
              </span>
            </p>
          </div>
          <div className="w-[30px] h-[30px] rounded-[20px] bg-[#2B2B2B] flex items-center justify-center lg:top-[20px] top-[12px]  absolute lg:left-[20px] left-[15px]">
            <p className=" font-Space_mono text-base text-[#858584]">3</p>
          </div>
        </div>
        <div className="lg:w-[240px] w-full lg:h-[238px] h-[100px] p-[20px]  rounded-[20px] bg-[#3B3B3B] flex lg:flex-col flex-row gap-[20px] items-center relative">
          <img
            src={artist4}
            className="lg:h-[120px] lg:w-[120px] h-[60px] w-[60px] rounded-[100px]"
          />
          <div className="lg:w-[200px] w-[195px] h-[58px] gap-[5px] lg:gap-0">
            <h5 className=" font-Work_sance font-[600px] lg:text-[22px] text-[18px] lg:text-center">
              Juanie
            </h5>
            <p className="lg:text-base text-sm  font-Work_sance text-[#858584] lg:text-center">
              Total Sales:{" "}
              <span className=" font-Space_mono text-white ml-[5px] lg:ml-0">
                34.5 ETH
              </span>
            </p>
          </div>
          <div className="w-[30px] h-[30px] rounded-[20px] bg-[#2B2B2B] flex items-center justify-center lg:top-[20px] top-[12px]  absolute lg:left-[20px] left-[15px]">
            <p className=" font-Space_mono text-base text-[#858584]">4</p>
          </div>
        </div>

        {/* second row*/}
        <div className="lg:w-[240px] w-full lg:h-[238px] h-[100px] p-[20px]  rounded-[20px] bg-[#3B3B3B] flex lg:flex-col flex-row gap-[20px] items-center relative">
          <img
            src={artist5}
            className="lg:h-[120px] lg:w-[120px] h-[60px] w-[60px] rounded-[100px]"
          />
          <div className="lg:w-[200px] w-[195px] h-[58px] gap-[5px] lg:gap-0">
            <h5 className=" font-Work_sance font-[600px] lg:text-[22px] text-[18px] lg:ext-center">
              BlueWhale
            </h5>
            <p className="lg:text-base text-sm  font-Work_sance text-[#858584] lg:text-center">
              Total Sales:{" "}
              <span className=" font-Space_mono text-white ml-[5px] lg:ml-0">
                34.5 ETH
              </span>
            </p>
          </div>
          <div className="w-[30px] h-[30px] rounded-[20px] bg-[#2B2B2B] flex items-center justify-center lg:top-[20px] top-[12px]  absolute lg:left-[20px] left-[15px]">
            <p className=" font-Space_mono text-base text-[#858584]">5</p>
          </div>
        </div>
        <div className="w-[240px] h-[238px] p-[20px]  rounded-[20px] bg-[#3B3B3B] lg:flex hidden flex-col gap-[20px] items-center relative">
          <img src={artist6} className="h-[120px] w-[120px] rounded-[100px]" />
          <div className="w-[200px] h-[58px]">
            <h5 className=" font-Work_sance font-[600px] text-[22px] text-center">
              Mr Fox
            </h5>
            <p className="text-base font-Work_sance text-[#858584] text-center">
              Total Sales:{" "}
              <span className=" font-Space_mono text-white">34.5 ETH</span>
            </p>
          </div>
          <div className="w-[30px] h-[30px] rounded-[20px] bg-[#2B2B2B] flex items-center justify-center top-[20px] absolute left-[20px]">
            <p className=" font-Space_mono text-base text-[#858584]">6</p>
          </div>
        </div>
        <div className="w-[240px] h-[238px] p-[20px]  rounded-[20px] bg-[#3B3B3B] lg:flex hidden flex-col gap-[20px] items-center relative">
          <img src={artist7} className="h-[120px] w-[120px] rounded-[100px]" />
          <div className="w-[200px] h-[58px]">
            <h5 className=" font-Work_sance font-[600px] text-[22px] text-center">
              Shroomie
            </h5>
            <p className="text-base font-Work_sance text-[#858584] text-center">
              Total Sales:{" "}
              <span className=" font-Space_mono text-white">34.5 ETH</span>
            </p>
          </div>
          <div className="w-[30px] h-[30px] rounded-[20px] bg-[#2B2B2B] flex items-center justify-center top-[20px] absolute left-[20px]">
            <p className=" font-Space_mono text-base text-[#858584]">7</p>
          </div>
        </div>
        <div className="w-[240px] h-[238px] p-[20px]  rounded-[20px] bg-[#3B3B3B] lg:flex hidden flex-col gap-[20px] items-center relative">
          <img src={artist8} className="h-[120px] w-[120px] rounded-[100px]" />
          <div className="w-[200px] h-[58px]">
            <h5 className=" font-Work_sance font-[600px] text-[22px] text-center">
              Robotica
            </h5>
            <p className="text-base font-Work_sance text-[#858584] text-center">
              Total Sales:{" "}
              <span className=" font-Space_mono text-white">34.5 ETH</span>
            </p>
          </div>
          <div className="w-[30px] h-[30px] rounded-[20px] bg-[#2B2B2B] flex items-center justify-center top-[20px] absolute left-[20px]">
            <p className=" font-Space_mono text-base text-[#858584]">8</p>
          </div>
        </div>

        {/* third row*/}
        <div className="w-[240px] h-[238px] p-[20px]  rounded-[20px] bg-[#3B3B3B] lg:flex hidden flex-col gap-[20px] items-center relative">
          <img src={artist9} className="h-[120px] w-[120px] rounded-[100px]" />
          <div className="w-[200px] h-[58px]">
            <h5 className=" font-Work_sance font-[600px] text-[22px] text-center">
              RustyRobot
            </h5>
            <p className="text-base font-Work_sance text-[#858584] text-center">
              Total Sales:{" "}
              <span className=" font-Space_mono text-white">34.5 ETH</span>
            </p>
          </div>
          <div className="w-[30px] h-[30px] rounded-[20px] bg-[#2B2B2B] flex items-center justify-center top-[20px] absolute left-[20px]">
            <p className=" font-Space_mono text-base text-[#858584]">9</p>
          </div>
        </div>
        <div className="w-[240px] h-[238px] p-[20px]  rounded-[20px] bg-[#3B3B3B] lg:flex hidden flex-col gap-[20px] items-center relative">
          <img src={artist10} className="h-[120px] w-[120px] rounded-[100px]" />
          <div className="w-[200px] h-[58px]">
            <h5 className=" font-Work_sance font-[600px] text-[22px] text-center">
              AnimaKid
            </h5>
            <p className="text-base font-Work_sance text-[#858584] text-center">
              Total Sales:{" "}
              <span className=" font-Space_mono text-white">34.5 ETH</span>
            </p>
          </div>
          <div className="w-[30px] h-[30px] rounded-[20px] bg-[#2B2B2B] flex items-center justify-center top-[20px] absolute left-[20px]">
            <p className=" font-Space_mono text-base text-[#858584]">10</p>
          </div>
        </div>
        <div className="w-[240px] h-[238px] p-[20px]  rounded-[20px] bg-[#3B3B3B] lg:flex hidden flex-col gap-[20px] items-center relative">
          <img src={artist11} className="h-[120px] w-[120px] rounded-[100px]" />
          <div className="w-[200px] h-[58px]">
            <h5 className=" font-Work_sance font-[600px] text-[22px] text-center">
              Dotgu
            </h5>
            <p className="text-base font-Work_sance text-[#858584] text-center">
              Total Sales:{" "}
              <span className=" font-Space_mono text-white">34.5 ETH</span>
            </p>
          </div>
          <div className="w-[30px] h-[30px] rounded-[20px] bg-[#2B2B2B] flex items-center justify-center top-[20px] absolute left-[20px]">
            <p className=" font-Space_mono text-base text-[#858584]">11</p>
          </div>
        </div>
        <div className="w-[240px] h-[238px] p-[20px]  rounded-[20px] bg-[#3B3B3B] lg:flex hidden flex-col gap-[20px] items-center relative">
          <img src={artist12} className="h-[120px] w-[120px] rounded-[100px]" />
          <div className="w-[200px] h-[58px]">
            <h5 className=" font-Work_sance font-[600px] text-[22px] text-center">
              Ghiblier
            </h5>
            <p className="text-base font-Work_sance text-[#858584] text-center">
              Total Sales:{" "}
              <span className=" font-Space_mono text-white">34.5 ETH</span>
            </p>
          </div>
          <div className="w-[30px] h-[30px] rounded-[20px] bg-[#2B2B2B] flex items-center justify-center top-[20px] absolute left-[20px]">
            <p className=" font-Space_mono text-base text-[#858584]">12</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopArtists;
