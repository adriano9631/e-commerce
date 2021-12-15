import React, { FC, useState } from "react";
import { useRouter } from "next/router";
import * as s from "styles/search-results.style";
import * as queries from "lib/api/queries";
import { request } from "lib/api/datocms";
import { GetServerSideProps } from "next";
import Link from "next/link";
import searchIcon from "public/icons/search.svg";

type SearchResultsProps = {
  fetchedAllProducts: {
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

const SearchResults: FC<SearchResultsProps> = ({ fetchedAllProducts }) => {
  const router = useRouter();
  const [hoveredImgSlug, setHoveredImgSlug] = useState("");
  const [searchQuery, setSearchQuery] = useState(router.query.search_query);
  const [allProducts, setAllProducts] = useState(fetchedAllProducts);
  const handleChangeSearchQuery = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchProduct = async () => {
    const data = await request({
      query: queries.allProductsBySearchPatternQuery,
      variables: { searchPattern: searchQuery },
    });
    setAllProducts(data.allProducts);
  };
  return (
    <s.SearchResultsContainer>
      <s.Header>
        <s.SearchResultsText>SEARCH RESULTS</s.SearchResultsText>
      </s.Header>
      <s.MainSection>
        <s.SearchIcon />
        <s.SearchInputWrapper>
          <s.SearchBtn onClick={handleSearchProduct}>
            <s.SearchIcon
              x="500px"
              y="500px"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </s.SearchIcon>
          </s.SearchBtn>
          <s.SearchInput
            value={searchQuery}
            onChange={handleChangeSearchQuery}
            placeholder="Search..."
            onKeyPress={(event) =>
              event.key === "Enter" && handleSearchProduct()
            }
          />
        </s.SearchInputWrapper>
        <s.NumberOfProductsFound>
          Products ({allProducts.length})
        </s.NumberOfProductsFound>
        <s.ProductsList>
          {allProducts.map((product) => (
            <s.ProductWrapper key={product.id}>
              <Link href={`product/${product.slug}`}>
                <a>
                  <s.ProductImage
                    onMouseOver={() => setHoveredImgSlug(product.slug)}
                    onMouseOut={() => setHoveredImgSlug("")}
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
                <s.AddToCartLink>Add to cart</s.AddToCartLink>
              </Link>
            </s.ProductWrapper>
          ))}
        </s.ProductsList>
      </s.MainSection>
    </s.SearchResultsContainer>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await request({
    query: queries.allProductsBySearchPatternQuery,
    variables: { searchPattern: context.query.search_query },
  });

  return {
    props: {
      fetchedAllProducts: data.allProducts,
    },
  };
};

export default SearchResults;
