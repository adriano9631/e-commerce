import React from "react";
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
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 100px;
`;

export const FlexWrapper = styled.div`
  display: flex;
  width: 90vw;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 100px;
`;

export const IntroductionWrapper = styled(
  motion.div
)<IntroductionWrapperProps>``;
export const Subheading = styled.h3`
  font-size: 23px;
`;

export const Heading = styled.h2`
  font-size: 40px;
  margin-top: 15px;
  color: #0f2c66;
  font-family: "Oswald", sans-serif;
  max-width: 535px;
`;

export const Description = styled.p`
  font-size: 18px;
  margin-top: 25px;
  max-width: 602px;
`;

export const FavoriteShortsListWrapper = styled(motion.ul)<FavoriteShortsListWrapperProps>`
  display: flex;
  justify-content: space-around;
  column-gap: 10px;
  margin-top: 80px;
`;

export const FavoriteShortWrapper = styled(motion.li)<{ variants: object }>`
  position: relative;
`;

export const NewArrival = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15px;
  background-color: #b73030;
  color: white;
  font-family: "Oswald", sans-serif;
  font-size: 19px;
`;

export const Name = styled.p`
  font-size: 18px;
  margin-top: 7px;
  color: #393c3e;
`;

export const Price = styled.p`
  font-size: 24px;
  color: #0f2c66;
  margin-top: 5px;
  font-weight: bold;
`;
