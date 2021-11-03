import styled, { keyframes } from "styled-components/macro";
import Image from "next/image";

export const BestSellersContainer = styled.section`
  width: 90%;
  margin: 0 auto;
  margin-top: 80px;
  /* padding-left: 70px;  */
`;

const headingAnimation = keyframes`
  from {
    transform: translateX(-30px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
`;

export const Heading = styled.h2<{ inview: boolean; ref: Function }>`
  color: #0f2c66;
  font-size: 36px;
  font-family: "Oswald", sans-serif;
  animation-name: ${(props) => props.inview && headingAnimation};
  animation-duration: 2s;
  /* margin-left: 30px; */
`;

export const BestSellersList = styled.article`
  display: flex;
  /* justify-content: flex-end; */
  /* margin: 0 auto; */
  margin-top: 40px;
`;

export const BestSellerWrapper = styled.div`
  position: relative;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
  transition: transform 0.2s;
`;

type ImageProps = {
  src: StaticImageData;
  width: number;
  height: number;
};

export const BestSellerImg = styled(Image)<ImageProps>`
  transform: translateY(10px);
`;

export const BestSeller = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #b73030;
  padding: 8px;
  color: white;
  font-size: 15px;
`;

export const Name = styled.p`
  font-size: 18px;
  color: #393c3e;
`;

export const Price = styled.p`
  font-size: 24px;
  color: #0f2c66;
  margin-top: 5px;
  font-weight: bold;
`;
