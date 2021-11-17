import styled from "styled-components/macro";
import leftArrowIcon from "public/icons/left-arrow.svg";
import rightArrowIcon from "public/icons/right-arrow.svg";
import { Carousel } from "@trendyol-js/react-carousel";

export const RelatedProductsContainer = styled.section`
  margin-top: 50px;
  border-top: 1px solid var(--secondary-color);
  padding-top: 10px;
`;

export const RelatedProductsText = styled.h2`
  font-family: var(--secondary-font-family);
  font-size: 25px;
  margin-top: 30px;
  /* padding: 35px 0; */
`;

export const RelatedProductsList = styled(Carousel)`
  display: flex;
  align-items: center;
  column-gap: 30px;
  margin-top: 60px;
  margin-bottom: 100px;
`;

export const ChangeProductBtn = styled.button`
  border: none;
  transform: translateY(-20px);
`;

export const LeftArrowIcon = styled(leftArrowIcon)``;
export const RightArrowIcon = styled(rightArrowIcon)``;

export const RelatedProductWrapper = styled.div`
  display: inline-block;
  position: relative;
`;

export const BestSeller = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--primary-color);
  padding: 8px;
  color: white;
  font-size: 15px;
`;

export const Name = styled.p`
  font-size: 16px;
  color: #393c3e;
  max-width: 200px;
`;

export const Price = styled.p`
  font-size: 20px;
  color: var(--secondary-color);
  margin-top: 5px;
  font-weight: bold;
  max-width: 200px;
`;
