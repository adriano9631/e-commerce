import styled from "styled-components/macro";
import Image from "next/image";

export const SearchResultsContainer = styled.div`
  margin-bottom: 100px;
`;

export const Header = styled.header`
  width: 100vw;
  margin-top: 137px;
  height: 250px;
  background-color: #e0effb;
  display: flex;
  align-items: center;
`;

export const SearchResultsText = styled.h1`
  font-size: 45px;
  color: #0f2c66;
  font-family: var(--secondary-font-family);
  margin-left: 80px;
`;

export const MainSection = styled.main`
  max-width: 1100px;
  margin: 0 auto;
  margin-top: 100px;

  @media screen and (max-width: 1110px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`;

export const SearchInputWrapper = styled.div`
  position: relative;
`;

export const SearchBtn = styled.button``;

export const SearchIcon = styled.svg`
  position: absolute;
  top: 27%;
  left: 10px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 50px;
  font-size: 18px;
  padding-left: 40px;

  &:active {
    border: 1px solid red;
  }
`;
export const NumberOfProductsFound = styled.p`
  font-family: var(--secondary-font-family);
  font-size: 20px;
  margin: 20px 0;

  @media screen and (max-width: 964px) {
    text-align: center;
  }
`;

export const ProductsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;

  @media screen and (max-width: 964px) {
    justify-content: center;
  }
`;

export const ProductWrapper = styled.li``;

export const ProductImage = styled(Image)``;

export const Name = styled.p``;

export const Price = styled.p``;

export const AddToCartLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #393c3e;
  color: white;
  width: 100%;
  height: 35px;
  font-size: 15px;
  margin-top: 10px;
`;
