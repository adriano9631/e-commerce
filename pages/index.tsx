import { NextPage } from "next";
import { useProgressiveImage } from "hooks/useProgressiveImage";
import styled from "styled-components";
import Header from "components/Header";
import BestSellers from "components/BestSellers";
import MainSection from "components/MainSection";
import FavoriteShorts from "components/FavoriteShorts";

const FourModelsPosing = styled.div<{ $loadedbBackgroundImage: string }>`
  background-image: ${({ $loadedbBackgroundImage }) =>
    `url(${$loadedbBackgroundImage})`};
  background-attachment: fixed;
  height: 800px;
  filter: brightness(70%);
`;

const Home: NextPage = () => {
  const loadedbBackgroundImage = useProgressiveImage(
    "/images/four-models-posing.jpg"
  );

  return (
    <>
      <Header />
      <BestSellers />
      <MainSection />
      <FavoriteShorts />
      <FourModelsPosing $loadedbBackgroundImage={loadedbBackgroundImage} />
    </>
  );
};

export default Home;
