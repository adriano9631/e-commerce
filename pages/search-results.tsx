import React, { FC, useState } from "react";
import { useRouter } from "next/router";
import * as s from "styles/search-results.style";
import * as queries from "lib/api/queries";
import { request } from "lib/api/datocms";
import { GetServerSideProps } from "next";
import Link from "next/link";

type SearchResultsProps = {
  allProducts: {
    id: string;
    name: string;
    price: string;
    productType: string;
    slug: string;
    images: {
      url: string;
      alt: string;
    }[];
    _createdAt: Date;
  }[];
};

const SearchResults: FC<SearchResultsProps> = ({ allProducts }) => {
  const router = useRouter();
  const [hoveredImgSlug, setHoveredImgSlug] = useState("");
  return (
    <s.SearchResultsContainer>
      <s.Header>
        <s.SearchResultsText>SEARCH RESULTS</s.SearchResultsText>
      </s.Header>
      <s.MainSection>
        <s.SearchInputWrapper>
          <s.SearchIcon />
          <s.SearchInput />
        </s.SearchInputWrapper>
        <s.NumberOfProductsFound>
          Products ({allProducts.length})
        </s.NumberOfProductsFound>
        <s.ProductsList>
          {allProducts.map((product) => (
            <s.ProductWrapper
              key={product.id}
              onMouseOver={() => setHoveredImgSlug(product.slug)}
              onMouseOut={() => setHoveredImgSlug("")}
            >
              <Link href={`product/${product.slug}`}>
                <a>
                  <s.ProductImage
                    src={
                      hoveredImgSlug === product.slug && product.images[1]
                        ? product.images[1].url
                        : product.images[0].url
                    }
                    alt={
                      hoveredImgSlug === product.slug && product.images[1]
                        ? product.images[1].alt
                        : product.images[0].alt
                    }
                    height={220}
                    width={220}
                  />
                  <s.Name>{product.name}</s.Name>
                </a>
              </Link>
              <s.Price>{product.price}</s.Price>
              <Link href={`product/${product.slug}`} passHref>
                <s.AddToCartBtn>Add to cart</s.AddToCartBtn>
              </Link>
            </s.ProductWrapper>
          ))}
        </s.ProductsList>
      </s.MainSection>
    </s.SearchResultsContainer>
  );
};

{
  /* <s.BestSellerWrapper
onMouseOver={() => setHoveredImgSlug(product.slug)}
onMouseOut={() => setHoveredImgSlug("")}
variants={item}
onClick={() =>
  dispatch(
    addPreviouslyViewedProductsLinks(
      previouslyViewedProductsLinks
    )
  )
}
>
<s.BestSellerImg
  src={
    hoveredImgSlug === product.slug && product.images[1]
      ? product.images[1].url
      : product.images[0].url
  }
  alt={
    hoveredImgSlug === product.slug && product.images[1]
      ? product.images[1].alt
      : product.images[0].alt
  } */
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await request({
    query: queries.allProductsBySearchPatternQuery,
    variables: { searchPattern: context.query.search_query },
  });

  return {
    props: {
      allProducts: data.allProducts,
    },
  };
};

export default SearchResults;
