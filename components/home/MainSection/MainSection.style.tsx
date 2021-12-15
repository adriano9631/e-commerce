import styled, { css, keyframes } from "styled-components/macro";
import Image from "next/image";
import { motion } from "framer-motion";

import discountPartOne from "public/icons/discount-part-1.svg";
import discountPartTwo from "public/icons/discount-part-2.svg";
import writingArea from "public/icons/writing-area.svg";

export const btnStyles = css`
  padding: 18px;
  background-color: var(--primary-color);
  border-radius: 5px;
  cursor: pointer;
  color: white;
  border: none;
  font-size: 18px;
  transition: background-color 0.4s;
  margin-top: 30px;
  &:hover {
    background-color: var(--secondary-color);
  }
`;

const headingStyles = css`
  color: var(--secondary-color);
  font-size: 40px;
  font-family: var(--secondary-font-family), sans-serif;
`;

const descriptionStyles = css`
  margin-top: 25px;
  font-size: 18px;
  max-width: 510px;
  color: #393c3e;
`;

type ImgProps = {
  src: string;
  height: number;
  width: number;
};

type PictureChangeBtnProps = {
  isActiveBtn: boolean;
  disabled: boolean;
  onClick: Function;
};

type WrapperProps = {
  initial: string;
  animate: object;
  variants: object;
};

export const MainSectionContainer = styled.main`
  margin-top: 200px;
`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1440px;
  column-gap: 150px;
  margin: 0 auto;
  padding: 0 50px;

  &:last-child {
    margin-top: 300px;
    justify-content: space-evenly;
  }

  @media screen and (max-width: 950px) {
    &:first-child {
      flex-direction: column;
    }
  }
  @media screen and (max-width: 1140px) {
    &:nth-child(2) {
      align-items: center;
      flex-direction: column;
    }
  }
`;

export const Wrapper = styled(motion.div)<WrapperProps>`
  margin-top: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Subheading = styled.h3`
  font-weight: 400;
  font-size: 23px;
`;

export const Heading = styled.h2`
  ${headingStyles}
  max-width: 510px;
  margin-top: 15px;
`;

export const Description = styled.p`
  ${descriptionStyles}
`;

export const ModelsImgWrapper = styled.div`
  @media screen and (max-width: 950px) {
    margin-top: 150px;
  }
`;

export const ModelsImg = styled(Image)<ImgProps>``;

export const BenefitWrapper = styled.div`
  transform: translateY(-100px);
`;

const benefitImgAnimation = keyframes`
  from {
    transform: translateX(-100px);
    opacity:0;
  }
  to {
    transform: translateX(0);
    opacity:1;
  }
`;

export const BenefitImg = styled(Image)<ImgProps & { $inView: boolean }>`
  animation-name: ${(props) => props.$inView && benefitImgAnimation};
  animation-duration: 2s;
`;

export const BenefitHeading = styled.h2`
  ${headingStyles}
  margin-top: 35px;
`;
export const BenefitDescription = styled.p`
  ${descriptionStyles}
`;

export const LearnMoreLink = styled.button`
  ${btnStyles}
`;

export const FirstImgWrapper = styled.div`
  position: absolute;
  top: 15px;
  z-index: 999;
`;

export const FirstImgDiscountPartOne = styled(discountPartOne)`
  width: 100px;
  height: 100px;
  transform: translateX(50px);
`;

export const FirstImgDiscountPercentage = styled.p`
  color: white;
  transform: translate3d(85px, -93px, 0px);
  font-family: var(--secondary-font-family), sans-serif;
  font-size: 25px;
  display: inline-block;
`;

export const FirstImgDiscountPartTwo = styled(discountPartTwo)`
  width: 222px;
  height: 88px;
`;

export const FirstImgDiscountDescription = styled.p`
  color: white;
  font-family: var(--secondary-font-family), sans-serif;
  font-size: 16px;
  transform: translate3d(115px, -103px, 0px);
  display: inline-block;
`;

export const SecondImgWrapper = styled.div`
  position: absolute;
  z-index: 999;
  width: 100%;
  text-align: center;
  bottom: 160px;
`;
export const SecondImgSubheading = styled.h4`
  color: white;
  font-family: var(--secondary-font-family), sans-serif;
  font-size: 20px;
  letter-spacing: 1px;
`;
export const SecondImgHeading = styled.h3`
  color: white;
  font-family: var(--secondary-font-family), sans-serif;
  font-size: 40px;
`;
export const ShopNowLink = styled.a`
  width: 130px;
  height: 55px;
  font-size: 22px;
  background-color: white;
  cursor: pointer;
  transition: all 0.4s;
  font-family: var(--secondary-font-family), sans-serif;
  border-radius: 5px;
  bottom: 80px;
  display: block;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: var(--primary-color);
    color: white;
    outline: 1px solid white;
  }
`;

export const ThirdImgWrapper = styled.div`
  position: absolute;
  z-index: 999;
  top: 45px;
  left: 50%;
  transform: translate(-50%, 0);
`;
export const ThirdImgWritingArea = styled(writingArea)``;
export const ThirdImgHeading = styled.h3`
  transform: translate3d(35px, -140px, 0px);
  font-size: 45px;
  color: var(--secondary-color);
  font-family: var(--secondary-font-family), sans-serif;
  letter-spacing: 1px;
`;
export const ThirdImgDescription = styled.p`
  transform: translate3d(0px, -144px, 0px);
  font-size: 16px;
  color: white;
  text-align: center;
  font-family: var(--secondary-font-family), sans-serif;
  letter-spacing: 0.5px;
`;

export const CarouselWrapper = styled(motion.div)<
  WrapperProps & { ref: (node?: Element | null | undefined) => void }
>`
  position: relative;
  height: 512px;
  width: 363px;
  @media screen and (max-width: 1140px) {
    margin-bottom: 100px;
  }

  @media screen and (max-width: 380px) {
    width: 340px;
    height: 480px;
  }
`;

export const CarouselImg = styled(Image)<ImgProps>``;

export const PicutreChangeWrapper = styled.div`
  position: absolute;
  z-index: 999;
  bottom: 30px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  width: 60px;
  display: flex;
  justify-content: space-between;
`;

export const PictureChangeBtn = styled.button<PictureChangeBtnProps>`
  height: 12px;
  width: 12px;
  opacity: ${(props) => (props.isActiveBtn ? 1 : 0.5)};
  border: none;
  border-radius: 50%;
`;
