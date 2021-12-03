import { gql } from "graphql-request";

const allProductsQuery = gql`
  query allProductsQuery {
    allProducts {
      id
      name
      price
      productType
      slug
      _createdAt
      images {
        alt
        url
      }
    }
  }
`;

const slugFromProductsListQuery = gql`
  query slugFromAProductsQuery {
    allProducts {
      slug
    }
  }
`;
const productsListByTypeQuery = gql`
  query productsListByTypeQuery($productType: String!) {
    allProducts(filter: { productType: { eq: $productType } }) {
      name
      id
      quantitySold
      price
      images {
        url
        alt
      }
    }
  }
`;

const productBySlugQuery = gql`
  query productBySlugQuery($slug: String!) {
    product(filter: { slug: { eq: $slug } }) {
      stock
      id
      productType
      price
      slug
      name
      description
      details
      images {
        url
        alt
      }
    }
  }
`;

const productsListByHighestQuantityQuery = gql`
  {
    allProducts(first: 6, orderBy: quantitySold_DESC) {
      name
      price
      slug
      images {
        url
        alt
      }
    }
  }
`;
const modelsImageQuery = gql`
  {
    homePage {
      modelsImage {
        url
        alt
      }
    }
  }
`;

const benefitImageQuery = gql`
  {
    homePage {
      benefitImage {
        url
        alt
      }
    }
  }
`;

const carouselImagesListQuery = gql`
  {
    homePage {
      carouselImages {
        url
        alt
      }
    }
  }
`;

const shortsListByLeastQuantityQuery = gql`
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
      images {
        url
        alt
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

const femaleModelsImagesQuery = gql`
  query femaleModelsImagesQuery {
    womenpage {
      firstImage {
        url
        alt
      }
      secondImage {
        url
        alt
      }
    }
  }
`;

export {
  productsListByHighestQuantityQuery,
  productsListByTypeQuery,
  productBySlugQuery,
  modelsImageQuery,
  benefitImageQuery,
  carouselImagesListQuery,
  shortsListByLeastQuantityQuery,
  newArrivalDateQuery,
  slugFromProductsListQuery,
  allProductsQuery,
  femaleModelsImagesQuery,
};
