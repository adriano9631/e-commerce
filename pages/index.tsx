import { NextPage } from "next";
import Header from "components/Header";
import BestSellers from "components/BestSellers";
import MainSection from "components/MainSection";
import FavoriteShorts from "components/FavoriteShorts";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <BestSellers />
      <MainSection />
      <FavoriteShorts />
    </>
  );
};

export default Home;
