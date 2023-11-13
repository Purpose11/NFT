import Hero from "../components/homePage/Hero";
import Trending from "../components/homePage/Trending";
import TopArtists from "../components/homePage/TopArtists";
import Categories from "../components/homePage/Categories";
import Discover from "../components/homePage/Discover";
import Highlight from "../components/homePage/Highlight";
import HowItWorks from "../components/homePage/HowItWorks";
import Subscribe from "../components/homePage/Subscribe";

const Home = () => {
  return (
    <>
      <Hero />
      <Trending />
      <TopArtists />
      <Categories />
      <Discover />
      <Highlight />
      <HowItWorks />
      <Subscribe />
    </>
  );
};

export default Home;
