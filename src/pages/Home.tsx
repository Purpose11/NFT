import Hero from "../components/Hero";
import Trending from "../components/Trending";
import TopArtists from "../components/TopArtists";
import Categories from "../components/Categories";
import Discover from "../components/Discover";
import Highlight from "../components/Highlight";

const Home = () => {
  return (
    <>
      <Hero />
      <Trending />
      <TopArtists />
      <Categories />
      <Discover />
      <Highlight />
    </>
  );
};

export default Home;
