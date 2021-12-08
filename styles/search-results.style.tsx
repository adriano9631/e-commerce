import styled from "styled-components/macro";
import searchIcon from "public/icons/search.svg";
import Image from "next/image";

export const SearchResultsContainer = styled.div``;

export const Header = styled.header`
  width: 100vw;
  height: 250px;
  background-color: #e0effb;
  display: flex;
  align-items: center;
`;

export const SearchResultsText = styled.h1`
  font-size: 40px;
  color: #0f2c66;
  font-family: var(--secondary-font-family);
  margin-left: 80px;
`;

export const MainSection = styled.main`
  width: 1100px;
  margin: 0 auto;
  margin-top: 100px;
`;

export const SearchInputWrapper = styled.div``;

export const SearchIcon = styled(searchIcon)``;

export const SearchInput = styled.input``;
export const NumberOfProductsFound = styled.p``;

export const ProductsList = styled.ul``;

export const ProductWrapper = styled.li``;

export const ProductImage = styled(Image)``;

export const Name = styled.p``;

export const Price = styled.p``;
export const AddToCartBtn = styled.button``;
