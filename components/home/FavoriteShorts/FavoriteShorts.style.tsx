import styled from "styled-components/macro";
import { motion } from "framer-motion";

type IntroductionWrapperProps = {
  initial: string;
  variants: object;
  animate: object;
  ref: Function;
};

type FavoriteShortsListWrapperProps = {
  ref: (node?: Element | null | undefined) => void;
  initial: string;
  animate: object;
  variants: object;
};

export const FavoriteShortsContainer = styled.section`
  background-attachment: fixed;
  padding: 100px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (max-width: 1170px) {
    padding: 30px;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  max-width: 1440px;
  margin: 0 auto;
  margin-bottom: 50px;

  @media screen and (max-width: 830px) {
    flex-direction: column;
    align-items: center;
    max-width: 530px;
  }
`;

export const IntroductionWrapper = styled(
  motion.div
)<IntroductionWrapperProps>``;
export const Subheading = styled.h3`
  font-size: 23px;

  @media screen and (max-width: 830px) {
    text-align: center;
  }
`;

export const Heading = styled.h2`
  font-size: 40px;
  margin-top: 15px;
  color: var(--secondary-color);
  font-family: var(--secondary-font-family), sans-serif;
  max-width: 535px;

  @media screen and (max-width: 830px) {
    text-align: center;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  margin-top: 25px;
  max-width: 602px;
`;

export const FavoriteShortsListWrapper = styled(
  motion.ul
)<FavoriteShortsListWrapperProps>`
  display: flex;
  margin-top: 80px;
  column-gap: 10px;
  max-width: 1440px;
  margin: 0 auto;
  justify-content: center;
  @media screen and (max-width: 1100px) {
    flex-wrap: wrap;
    row-gap: 30px;
  }
`;

export const FavoriteShortWrapper = styled(motion.li)<{ variants: object }>`
  position: relative;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
  transition: transform 0.2s;
`;

export const NewArrival = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15px;
  background-color: var(--primary-color);
  color: white;
  font-family: var(--secondary-font-family), sans-serif;
  font-size: 19px;
`;

export const Name = styled.p`
  font-size: 18px;
  margin-top: 7px;
  color: #393c3e;
`;

export const Price = styled.p`
  font-size: 24px;
  color: var(--secondary-color);
  margin-top: 5px;
  font-weight: bold;
`;
