import art from "../../assets/images/art.png";
import paintBrush from "../../assets/images/PaintBrush.png";
import Swatches from "../../assets/images/Swatches.png";
import collectible from "../../assets/images/collectible.png";
import music from "../../assets/images/music.png";
import MusicNotes from "../../assets/images/MusicNotes.png";
import Camera from "../../assets/images/Camera.png";
import photography from "../../assets/images/photography.png";
import video from "../../assets/images/video.png";
import VideoCamera from "../../assets/images/VideoCamera.png";
import utility from "../../assets/images/utility.png";
import MagicWand from "../../assets/images/MagicWand.png";
import Basketball from "../../assets/images/Basketball.png";
import sport from "../../assets/images/sport.png";
import planet from "../../assets/images/Planet.png";
import planetImg from "../../assets/images/planetImg.png";
const Categories = () => {
  const categoriesInfo = [
    {
      id: 1,
      name: "Art",
      bg: `url(${art})`,
      image: paintBrush,
    },
    {
      id: 2,
      name: "Collectibles",
      bg: `url(${collectible})`,
      image: Swatches,
    },
    {
      id: 3,
      name: "Music",
      bg: `url(${music})`,
      image: MusicNotes,
    },
    {
      id: 4,
      name: "Photography",
      bg: `url(${photography})`,
      image: Camera,
    },
    {
      id: 5,
      name: "Video",
      bg: `url(${video})`,
      image: VideoCamera,
    },
    {
      id: 6,
      name: "Utility",
      bg: `url(${utility})`,
      image: MagicWand,
    },
    {
      id: 7,
      name: "Sport",
      bg: `url(${sport})`,
      image: Basketball,
    },
    {
      id: 8,
      name: "Virtual Worlds",
      bg: `url(${planetImg})`,
      image: planet,
    },
  ];
  return (
    <div className="lg:h-[928px] h-[1084px] w-full lg:py-[80px] py-[40px] flex flex-col lg:gap-[60px] gap-[40px]">
      <div className="lg:w-[1050px] w-[85%] h-[46px] mx-auto ">
        <h3 className=" font-Work_sance lg:text-[38px] text-[28px] font-[600]">
          Browse Categories
        </h3>
      </div>

      <div className="lg:h-[662px] h-[918px] lg:w-[1050px] w-[315px] grid lg:grid-cols-4 grid-cols-2 lg:gap-[30px] gap-[20px] mx-auto">
        {categoriesInfo.map((category) => {
          return (
            <div
              key={category.id}
              className="lg:w-[240px] w-[147.5px] lg:h-[316px] h-[209px] rounded-[20px] relative"
            >
              <div
                className="lg:w-[240px] w-[147.5px] lg:h-[240px] h-[142px] rounded-t-[20px] blur-[3px]"
                style={{
                  background: category.bg,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <img
                src={category.image}
                alt={category.name}
                className="absolute lg:top-[20%] top-[22px] lg:left-[30%] left-[28px] w-[80px] h-[80px] lg:w-[100px] lg:h-[100px]"
              />

              <div className="lg:h-[76px] h-[67px] w-full bg-[#3B3B3B] rounded-b-[20px] lg:px-[30px] px-[20px] flex items-center">
                <h5 className="lg:text-[22px] text-base font-Work_sance font-[600]">
                  {category.name}
                </h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
