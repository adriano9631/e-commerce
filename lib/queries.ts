import { gql } from "graphql-request";

const allProductsSlugQuery = gql`
  query allProductsSlug {
    allProducts {
      slug
    }
  }
`;

const productQuery = gql`
  query product($slug: String!) {
    product(filter: { slug: { eq: $slug } }) {
      stock
      productType
      price
      name
      image {
        url
        alt
      }
    }
  }
`;

const bestSellingProductsQuery = gql`
  {
    allProducts(first: 6, orderBy: quantitySold_DESC) {
      name
      price
      slug
      image {
        url
      }
    }
  }
`;
const modelsImageURLquery = gql`
  {
    homePage {
      modelsImage {
        url
        alt
      }
    }
  }
`;

const benefitImageURLquery = gql`
  {
    homePage {
      benefitImage {
        url
        alt
      }
    }
  }
`;

const carouselImagesURLquery = gql`
  {
    homePage {
      carouselImages {
        url
        alt
      }
    }
  }
`;

const favoriteShortsQuery = gql`
  {
    allProducts(
      first: 6
      orderBy: quantitySold_ASC
      filter: { productType: { eq: "shorts" } }
    ) {
      name
      price
      slug
      id
      image {
        url
      }
      createdAt
    }
  }
`;

const newArrivalDateQuery = gql`
  {
    homePage {
      newArrivalDate
    }
  }
`;

export {
  bestSellingProductsQuery,
  productQuery,
  modelsImageURLquery,
  benefitImageURLquery,
  carouselImagesURLquery,
  favoriteShortsQuery,
  newArrivalDateQuery,
  allProductsSlugQuery,
};
