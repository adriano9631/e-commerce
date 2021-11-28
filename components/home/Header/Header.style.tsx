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
  position: relative;
  overflow: hidden;
`;

export const HeroLeft = styled.div`
  width: 49.5vw;
  height: 1050px;
  position: relative;
  z-index: 1;
`;

export const ImageLeft = styled(Image)<ImageProps>``;



export const HeroRight = styled.div`
  width: 49.5vw;
  height: 1050px;
  position: relative;
  z-index: 1;
  left: 1vw;
`;

export const ImageRight = styled(Image)<ImageProps>``;

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
  background: var(--primary-color);
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
  font-family: var(--secondary-font-family), sans-serif;
  font-size: 52px;
  text-align: center;
  animation-name: ${(props) => props.inview && headingAnimation};
  animation-duration: 2s;
  @media only screen and (max-width: 1320px) {
    max-width: 450px;
  }
`;

export const Subheading = styled.h2`
  font-family: var(--secondary-font-family), sans-serif;
  font-size: 23px;
  text-align: center;
`;

export const ShopMenBtn = styled.button`
  ${btnStyles}
  margin-left: auto;
  padding: 20px 28px;
`;
