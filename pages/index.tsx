import { NextPage } from "next";
import { gql } from "graphql-request";
import datocms from "api/datocmsClient";
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

type HomeProps = {
  bestSellingProducts: {
    name: string;
    price: number;
    id: number;
    image: {
      url: string;
    };
  }[];
  modelsImageURL: string;
  benefitImageURL: string;
  carouselImagesURL: {
    url: string;
  }[];
};

const Home: NextPage<HomeProps> = ({
  bestSellingProducts,
  modelsImageURL,
  benefitImageURL,
  carouselImagesURL,
}) => {
  const loadedbBackgroundImage = useProgressiveImage(
    "/images/four-models-posing.jpg"
  );

  return (
    <>
      <Header />
      <BestSellers bestSellingProducts={bestSellingProducts} />
      <MainSection
        modelsImageURL={modelsImageURL}
        benefitImageURL={benefitImageURL}
        carouselImagesURL={carouselImagesURL}
      />
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
  const modelsImageURLquery = gql`
    query MyQuery {
      homePage {
        modelsImage {
          url
        }
      }
    }
  `;

  const benefitImageURLquery = gql`
    query MyQuery {
      homePage {
        benefitImage {
          url
        }
      }
    }
  `;

  const carouselImagesURLquery = gql`
    query MyQuery {
      homePage {
        carouselImages {
          url
        }
      }
    }
  `;

  const data1 = await datocms.request(bestSellingProductsQuery);
  const data2 = await datocms.request(modelsImageURLquery);
  const data3 = await datocms.request(benefitImageURLquery);
  const data4 = await datocms.request(carouselImagesURLquery);

  return {
    props: {
      bestSellingProducts: data1.allProducts,
      modelsImageURL: data2.homePage.modelsImage.url,
      benefitImageURL: data3.homePage.benefitImage.url,
      carouselImagesURL: data4.homePage.carouselImages,
    },
  };
}

export default Home;
