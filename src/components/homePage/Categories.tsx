import art from "../../assets/images/art.png";
import paintBrush from "../../assets/images/PaintBrush.png";
import Swatches from "../../assets/images/Swatches.png";
import collectible from "../../assets/images/Collectible.png";
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
    <div className="h-[928px] w-full py-[80px] flex flex-col gap-[60px] ">
      <div className="w-[1050px] h-[46px] mx-auto">
        <h3 className=" font-Work_sance text-[38px] font-[600]">
          Browse Categories
        </h3>
      </div>

      <div className="h-[662px] w-[1050px] grid grid-cols-4 gap-[30px] mx-auto">
        {categoriesInfo.map((category) => {
          return (
            <div
              key={category.id}
              className="w-[240px] h-[316px] rounded-[20px] relative"
            >
              <div
                className="w-[240px] h-[240px] rounded-t-[20px] blur-[3px]"
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
                className="absolute top-[20%] left-[30%]"
              />

              <div className="h-[76px] w-full bg-[#3B3B3B] rounded-b-[20px] px-[30px] flex items-center">
                <h5 className="text-[22px] font-Work_sance font-[600]">
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
