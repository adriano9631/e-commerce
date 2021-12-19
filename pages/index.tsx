import { NextPage } from "next";
import { request } from "lib/api/datocms";
import { useProgressiveImage } from "lib/hooks/useProgressiveImage";
import styled from "styled-components";
import * as queries from "lib/api//queries";
import BestSellers from "components/home/BestSellers";
import MainSection from "components/home/MainSection";
import FavoriteShorts from "components/home/FavoriteShorts";
import type { BestSellersProps } from "components/home/BestSellers";
import type { MainSectionProps } from "components/home/MainSection";
import type { FavoriteShortsProps } from "components/home/FavoriteShorts";
import Header from "components/home/Header";

const FourModelsPosingImg = styled.div<{ loadedbBackgroundImage: string }>`
  background-image: ${({ loadedbBackgroundImage }) =>
    `url(${loadedbBackgroundImage})`};
  background-attachment: fixed;
  height: 800px;
  filter: brightness(70%);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

type HomeProps = BestSellersProps & MainSectionProps & FavoriteShortsProps;

const Home: NextPage<HomeProps> = ({
  bestSellingProducts,
  modelsImage,
  benefitImage,
  carouselImages,
  favoriteShorts,
  newArrivalDate,
}) => {
  const loadedbBackgroundImage = useProgressiveImage(
    "/images/four-models-posing.jpg"
  );

  
  return (
    <>
      <Header />
      {/* <BestSellers bestSellingProducts={bestSellingProducts} /> */}
      {/* <MainSection
        modelsImage={modelsImage}
        benefitImage={benefitImage}
        carouselImages={carouselImages}
      /> */}
      {/* <FavoriteShorts
        favoriteShorts={favoriteShorts}
        newArrivalDate={newArrivalDate}
      /> */}
      {/* <FourModelsPosingImg loadedbBackgroundImage={loadedbBackgroundImage} /> */}
    </>
  );
};

export async function getStaticProps() {
  const data1 = await request({
    query: queries.productsListByHighestQuantityQuery,
  });
  const data2 = await request({ query: queries.modelsImageQuery });
  const data3 = await request({ query: queries.benefitImageQuery });
  const data4 = await request({ query: queries.carouselImagesListQuery });
  const data5 = await request({
    query: queries.shortsListByLeastQuantityQuery,
  });
  const data6 = await request({ query: queries.newArrivalDateQuery });

  return {
    props: {
      bestSellingProducts: data1.allProducts,
      modelsImage: data2.homePage.modelsImage,
      benefitImage: data3.homePage.benefitImage,
      carouselImages: data4.homePage.carouselImages,
      favoriteShorts: data5.allProducts,
      newArrivalDate: data6.homePage.newArrivalDate,
    },
    revalidate: 60,
  };
}

export default Home;
