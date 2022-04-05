import styled, { css, keyframes } from "styled-components/macro";
import Image from "next/image";

type ImageProps = {
  src: StaticImageData;
  layout: string;
  objectFit: string;
  alt: string;
};

const btnStyles = css`
  background: var(--primary-color);
  color: white;
  font-size: 18px;
  border: none;
  cursor: pointer;
  border-radius: 5%;
`;

export const HeaderContainer = styled.header`
  display: flex;
  position: relative;
  overflow: hidden;
  margin-top: 80px;
  @media screen and (max-width: 1050px) {
    flex-direction: column;
    margin-top: 70px;
  }
`;

export const HeroLeft = styled.div`
  width: 49.5vw;
  height: 1050px;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 1050px) {
    height: 100vw;
    width: 100vw;
  }

  @media screen and (max-width: 830px) {
    margin-top: 80px;
  }
`;

export const ImageLeft = styled(Image)<ImageProps>`
  @media screen and (max-width: 1050px) {
  }
`;

export const HeroRight = styled.div`
  width: 49.5vw;
  height: 1050px;
  position: relative;
  z-index: 1;
  left: 1vw;

  @media screen and (max-width: 1050px) {
    height: 100vw;
    width: 100vw;
    left: 0vw;
  }
`;

export const ImageRight = styled(Image)<ImageProps>`
  @media screen and (max-width: 1050px) {
  }
`;

export const CollectionSelectionWrapper = styled.div`
  position: absolute;
  background-color: white;
  display: flex;
  z-index: 10;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 460px;
  width: 80%;
  padding: 30px 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1050px) {
    position: static;
    left: 0;
    bottom: 0;
    transform: translate(0, 0);
    margin: 0 auto;
  }
`;

export const ShopWomenLink = styled.a`
  &:nth-child(2) {
    display: none;
  }
  ${btnStyles} margin-right: auto;
  padding: 20px 15px;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--secondary-color);
  }

  @media screen and (max-width: 1050px) {
    &:nth-child(2) {
      display: block;
    }
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);

    &:nth-child(1) {
      display: none;
    }
  }
`;

export const ShopMenLink = styled.a`
  &:nth-child(2) {
    display: none;
  }
  ${btnStyles}
  margin-left: auto;
  padding: 20px 28px;
  transition: background-color 0.2s;
  &:hover {
    background-color: var(--secondary-color);
  }

  @media screen and (max-width: 1050px) {
    &:nth-child(2) {
      display: block;
    }

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);

    &:nth-child(3) {
      display: none;
    }
  }
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
