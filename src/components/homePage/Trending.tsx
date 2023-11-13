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
    <div className="w-full h-[836px] py-[80px] flex flex-col gap-[60px]">
      <div className="w-[1046px] h-[91px] mx-auto">
        <h3 className=" font-Work_sance font-[600] text-[38px] ">
          Trending Collection
        </h3>
        <p className=" font-Work_sance text-[22px] capitalize font-normal">
          Checkout our weekly updated trending collection.
        </p>
      </div>
      <div className="w-[1046px] h-[525px] mx-auto  flex gap-[30px]">
        <div className="h-[525px] w-[330px]">
          <div className="h-[445px] w-full  flex flex-col gap-[15px]">
            <img src={DSGN} alt="DSGN" className="h-[330px] rounded-[20px]" />
            <div className="h-[100px] w-full  flex gap-[15px]">
              <img src={DSGN1} alt="" className="h-[100px]" />
              <img src={DSGN2} alt="" className="h-[100px]" />
              <div className="h-[100px] w-[100px] bg-main rounded-[20px] flex items-center justify-center">
                <h5 className=" font-Space_mono text-[22px]">1025+</h5>
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
        <div className="h-[525px] w-[330px]">
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
        <div className="h-[525px] w-[330px]">
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
