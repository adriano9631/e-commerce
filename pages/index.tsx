import { NextPage } from "next";
import { gql } from "graphql-request";
import datocms from "api/datocmsClient";
import { BestSellingProducts } from "types";
import { useProgressiveImage } from "hooks/useProgressiveImage";
import styled from "styled-components";
import Header from "components/Header";
import BestSellers from "components/BestSellers";
import MainSection from "components/MainSection";
import FavoriteShorts from "components/FavoriteShorts";

const FourModelsPosingImg = styled.div<{ $loadedbBackgroundImage: string }>`
  background-image: ${({ $loadedbBackgroundImage }) =>
    `url(${$loadedbBackgroundImage})`};
  background-attachment: fixed;
  height: 800px;
  filter: brightness(70%);
`;

type HomeProps = BestSellingProducts;

const Home: NextPage<HomeProps> = ({ bestSellingProducts }) => {
  const loadedbBackgroundImage = useProgressiveImage(
    "/images/four-models-posing.jpg"
  );

  return (
    <>
      <Header />
      <BestSellers bestSellingProducts={bestSellingProducts} />
      <MainSection />
      <FavoriteShorts />
      <FourModelsPosingImg $loadedbBackgroundImage={loadedbBackgroundImage} />
    </>
  );
};

export async function getStaticProps() {
  const bestSellingProductsQuery = gql`
    {
      allProducts(filter: { stock: { gte: "5" } }) {
        name
        price
        id
        image {
          url
        }
      }
    }
  `;

  const bestSellingProducts = await datocms.request(bestSellingProductsQuery);

  return {
    props: {
      bestSellingProducts: bestSellingProducts.allProducts,
    },
  };
}

export default Home;
