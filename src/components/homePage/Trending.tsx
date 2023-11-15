import DSGN from "../../assets/images/DSGN.png";
import DSGN1 from "../../assets/images/DSGN1.png";
import DSGN2 from "../../assets/images/DSGN2.png";
import Disco from "../../assets/images/Disco.png";
import Mushrooms from "../../assets/images/Mushrooms.png";
import mushroom1 from "../../assets/images/mushroom1.png";
import disco1 from "../../assets/images/disco1.png";
import disco2 from "../../assets/images/disco2.png";
import dsgn_avatar from "../../assets/images/dsgn_avatar.png";
import shroomie from "../../assets/images/shroomie.png";
import robot from "../../assets/images/robot.png";

const Trending = () => {
  return (
    <div className="w-full lg:h-[836px] h-[718px] lg:py-[80px] py-[40px] flex flex-col lg:gap-[60px] gap-[40px] ">
      <div className="lg:w-[1046px] w-[315px] lg:h-[91px] h-[93px] mx-auto">
        <h3 className=" font-Work_sance font-[600] lg:text-[38px] text-[28px] ">
          Trending Collection
        </h3>
        <p className=" font-Work_sance lg:text-[22px] text-base capitalize font-normal">
          Checkout our weekly updated trending collection.
        </p>
      </div>
      <div className="lg:w-[1046px] w-[315px] h-[525px] mx-auto  flex flex-col lg:flex-row md:flex-row gap-[30px]">
        <div className="lg:h-[525px] h-[505px] full lg:w-[330px]">
          <div className="lg:h-[445px] h-[425px] w-full  flex flex-col gap-[15px]">
            <img
              src={DSGN}
              alt="DSGN"
              className="lg:h-[330px] h-[315px] w-full rounded-[20px]"
            />
            <div className="lg:h-[100px] h-[95px] w-full  flex gap-[15px]">
              <img src={DSGN1} alt="" className="lg:h-[100px] h-[95px]" />
              <img src={DSGN2} alt="" className="lg:gh-[100px] h-[95px]" />
              <div className="lg:h-[100px] lg:w-[100px] w-[95px] h-[95px] bg-main rounded-[20px] flex items-center justify-center">
                <h5 className=" font-Space_mono lg:text-[22px] text-base">
                  1025+
                </h5>
              </div>
            </div>
            <div className="h-[65px]  w-full  flex flex-col gap-[10px]">
              <h5 className=" font-Work_sance text-[22px]">DSGN Animals</h5>
              <div className="flex items-center gap-[12px] h-[24px] w-full">
                <img src={dsgn_avatar} className="h-[24px]" />
                <p className=" font-Work_sance text-base">Mr Fox</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[525px] w-[330px] hidden lg:block md:block">
          <div className="h-[445px] w-full  flex flex-col gap-[15px]">
            <img
              src={Mushrooms}
              alt="Disco"
              className="h-[330px] rounded-[20px]"
            />
            <div className="h-[100px] w-full  flex gap-[15px]">
              <img src={mushroom1} alt="" className="h-[100px]" />
              <img src={mushroom1} alt="" className="h-[100px]" />
              <div className="h-[100px] w-[100px] bg-main rounded-[20px] flex items-center justify-center">
                <h5 className=" font-Space_mono text-[22px]">1025+</h5>
              </div>
            </div>
            <div className="h-[65px]  w-full  flex flex-col gap-[10px]">
              <h5 className=" font-Work_sance text-[22px]">Magic Mushrooms</h5>
              <div className="flex items-center gap-[12px] h-[24px] w-full">
                <img src={shroomie} className="h-[24px]" />
                <p className=" font-Work_sance text-base">Shroomie</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[525px] w-[330px] hidden lg:block">
          <div className="h-[445px] w-full flex flex-col gap-[15px]">
            <img
              src={Disco}
              alt="Mushrooms"
              className="h-[330px] rounded-[20px]"
            />
            <div className="h-[100px] w-full flex gap-[15px]">
              <img src={disco1} alt="" className="h-[100px]" />
              <img src={disco2} alt="" className="h-[100px]" />
              <div className="h-[100px] w-[100px] bg-main rounded-[20px] flex items-center justify-center">
                <h5 className=" font-Space_mono text-[22px]">1025+</h5>
              </div>
            </div>
            <div className="h-[65px]  w-full  flex flex-col gap-[10px]">
              <h5 className=" font-Work_sance text-[22px]">Disco Machines</h5>
              <div className="flex items-center gap-[12px] h-[24px] w-full">
                <img src={robot} className="h-[24px]" />
                <p className=" font-Work_sance text-base">BeKind2Robots</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
