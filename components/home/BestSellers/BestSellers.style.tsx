import styled from "styled-components/macro";
import { motion } from "framer-motion";
import Image from "next/image";

type BestSellersListProps = {
  ref: Function;
  initial: string;
  animate: object;
  variants: object;
};

type ImageProps = {
  src: string;
  width: number;
  height: number;
};

type HeadingsProps = BestSellersListProps;

export const BestSellersContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  margin-top: 100px;
  padding: 0 50px;
`;

export const Heading = styled(motion.h2)<HeadingsProps>`
  color: var(--secondary-color);
  font-size: 36px;
  font-family: var(--secondary-font-family);
  text-align: center;
`;

export const BestSellersList = styled(motion.ul)<BestSellersListProps>`
  display: flex;
  margin-top: 40px;
  column-gap: 30px;
  justify-content: center;
  row-gap: 30px;
  @media screen and (max-width: 1168px) {
    flex-wrap: wrap;
    column-gap: 10px;
  }
`;

export const BestSellerWrapper = styled(motion.li)`
  /* display: inline-block; */
  display: flex;
  justify-content: center;
  position: relative;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
  transition: transform 0.2s;
  @media screen and (max-width: 1168px) {
    flex-basis: calc(33% - 20px);
  }
  @media screen and (max-width: 650px) {
    flex-basis: calc(50% - 10px);
  }
  @media screen and (max-width: 427px) {
    flex-basis: 100%;
  }
`;

export const BestSellerImg = styled(Image)<ImageProps>`
  transform: translateY(10px);
  background-color: transparent;
  filter: red;
`;

export const BestSeller = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--primary-color);
  padding: 8px;
  color: white;
  font-size: 15px;
  /* @media screen and (max-width: 427px) {
    left: 22px;
  } */
`;

export const Name = styled.p`
  font-size: 18px;
  color: #393c3e;
`;

export const Price = styled.p`
  font-size: 24px;
  color: var(--secondary-color);
  margin-top: 5px;
  font-weight: bold;
`;
