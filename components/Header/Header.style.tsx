import styled, { css, keyframes } from "styled-components/macro";
import Image from "next/image";

type ImageProps = {
  src: StaticImageData;
  layout: string;
  objectFit: string;
  alt: string;
 
};

export const HeaderContainer = styled.header`
  display: flex;
  margin-top: 20px;
  position: relative;
  overflow: hidden;
`;

export const HeroLeft = styled.div`
  width: 49.5vw;
  height: 1050px;
  position: relative;
  z-index: 1;
`;

export const ImageLeft = styled(Image)<ImageProps>`
 
`;

export const Discount = styled.div`
  background-color: #b73030;
  font-size: 18px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  color: white;
  font-family: "PT Sans Narrow", sans-serif;
  padding: 12px;
`;

export const HeroRight = styled.div`
  width: 49.5vw;
  height: 1050px;
  position: relative;
  z-index: 1;
  left: 1vw;
`;

export const ImageRight = styled(Image)<ImageProps>`
  /* display: ${({ $isImageLeftLoaded, $isImageRightLoaded }) =>
    !$isImageLeftLoaded && !$isImageRightLoaded && "none"}; */
`;

export const CollectionSelectionWrapper = styled.div`
  position: absolute;
  background-color: white;
  display: flex;
  z-index: 10;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 280px;
  width: 80%;
  padding: 30px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const btnStyles = css`
  background: #b73030;
  color: white;
  font-size: 18px;
  border: none;
  cursor: pointer;
  border-radius: 5%;
`;

export const ShopWomenBtn = styled.button`
  ${btnStyles} margin-right: auto;
  padding: 20px 15px;
`;

export const ImageWrapper = styled.div``;

export const HeadingsWrapper = styled.div``;

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

export const Heading = styled.h1<{ inview: boolean; ref: Function }>`
  font-family: "Oswald", sans-serif;
  font-size: 52px;
  text-align: center;
  animation-name: ${(props) => props.inview && headingAnimation};
  animation-duration: 2s;
  /* animation-iteration-count: infinite; */
  @media only screen and (max-width: 1320px) {
    max-width: 450px;
  }
`;

export const Subheading = styled.h2`
  font-family: "Oswald", sans-serif;
  font-size: 23px;
  text-align: center;
`;

export const ShopMenBtn = styled.button`
  ${btnStyles}
  margin-left: auto;
  /* margin-right: 25px; */
  /* padding: 20px; */
  padding: 20px 28px;
`;
