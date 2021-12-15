import React from "react";
import styled, { css } from "styled-components/macro";
import heartIcon from "public/icons/heart.svg";
import plusIcon from "public/icons/plus.svg";

type PreviewImgWrapperProps = {
  isActive?: boolean;
  disabled: boolean;
};

type ProductInfoDetailsProps = {
  ref: React.RefObject<HTMLParagraphElement>;
  isActive1: boolean;
  scrollHeight1: number | undefined;
};

type RefundPolicyDetailsProps = {
  ref: React.RefObject<HTMLParagraphElement>;
  isActive2: boolean;
  scrollHeight2: number | undefined;
};

type ShippingInfoDetailsProps = {
  ref: React.RefObject<HTMLParagraphElement>;
  isActive3: boolean;
  scrollHeight3: number | undefined;
};

export const ProductContainer = styled.div`
  max-width: 890px;
  margin: 0 auto;
  margin-top: 100px;

  @media screen and (max-width: 950px) {
    margin-top: 150px;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  transform: translateY(50px);

  @media screen and (max-width: 950px) {
    max-width: 500px;
    margin: 0 auto;
  }

  @media screen and (max-width: 950px) {
    flex-direction: column;
  }
`;

export const Divider = styled.span`
  margin: 0 5px;
  font-size: 20px;
  opacity: 0.9;
`;

export const Arrow = styled.span`
  font-size: 35px;
  margin: 0 6px;
  display: inline-block;
  transform: translateY(3px);
`;

export const FlexWrapper = styled.main`
  display: flex;
  column-gap: 30px;
  margin-top: 60px;

  @media screen and (max-width: 950px) {
    flex-direction: column;
  }
`;

export const LeftSide = styled.section`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 950px) {
    align-items: center;
  }
`;

export const RightSide = styled.section`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 950px) {
    align-items: center;
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
  width: 500px;
  height: 667px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  @media screen and (max-width: 550px) {
    width: 250px;
    height: 333px;
  }
`;

export const ImagesListWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  column-gap: 10px;
`;

export const PreviewImgWrapper = styled.button<PreviewImgWrapperProps>`
  ${(props) =>
    props.isActive
      ? css`
          border: 2px solid rgb(14, 44, 102);
        `
      : css`
          border: 2px solid transparent;
        `}
`;

export const Description = styled.p`
  margin-top: 20px;
  font-size: 18px;

  @media screen and (max-width: 950px) {
    max-width: 500px;
    padding: 0 20px;
  }
`;

export const Name = styled.h1`
  font-size: 24px;
  color: var(--secondary-color);
  font-family: var(--secondary-font-family);
  font-weight: 300;

  @media screen and (max-width: 950px) {
    margin-top: 50px;
  }
`;
export const Price = styled.p`
  font-size: 36px;
  font-weight: 400;
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const SizeText = styled.label``;

export const Size = styled.p``;

export const QuantityText = styled.label``;

export const ButtonsWrapper = styled.div`
  display: flex;
  margin-top: 40px;
  column-gap: 10px;
`;

export const HeartIcon = styled(heartIcon)``;

export const AddToFavoriteBtn = styled.button`
  flex-basis: 15%;
  border: 1px solid var(--primary-color);
  border-radius: 7px;

  &:nth-of-type(1) {
    display: none;
  }
  @media screen and (max-width: 950px) {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 999;
    width: 40px;
    height: 40px;

    &:nth-of-type(1) {
      display: block;
    }

    &:nth-of-type(2) {
      display: none;
    }
  }
`;

export const BuyProductBtn = styled.button`
  margin-top: 15px;
  border: none;
  width: 100%;
  padding: 14px 0px;
  border-radius: 5px;
  background-color: var(--primary-color);
  color: #fff;
  font-size: 18px;

  &:hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 950px) {
    width: 50vw;
  }
`;

export const CollapsibleWrapper = styled.article`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-top: 30px;

  @media screen and (max-width: 950px) {
    align-items: center;
    padding: 0 20px;
  }
`;

export const Collapsible = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0px;
  border-bottom: 1px solid var(--secondary-color);
  border-top: none;
  border-right: none;
  border-left: none;
  color: #393c3e;
  background-color: white;
  &:last-child {
    border-bottom: 1px solid transparent;
  }
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  @media screen and (max-width: 950px) {
    width: 50%;
  }
`;

export const ExpandIcon = styled(plusIcon)``;

export const Subheading = styled.h2`
  font-weight: normal;
  font-size: 18px;
  line-height: 20px;
  @media screen and (max-width: 950px) {
    font-size: 15px;
  }
`;

export const ProductInfoDetails = styled.p<ProductInfoDetailsProps>`
  overflow: hidden;
  max-height: ${(props) => (props.isActive1 ? `${props.scrollHeight1}px` : 0)};
  transition: max-height 0.15s ease-out;
`;

export const RefundPolicyDetails = styled.p<RefundPolicyDetailsProps>`
  overflow: hidden;
  max-height: ${(props) => (props.isActive2 ? `${props.scrollHeight2}px` : 0)};
  transition: max-height 0.15s ease-out;
`;

export const ShippingInfoDetails = styled.p<ShippingInfoDetailsProps>`
  overflow: hidden;
  max-height: ${(props) => (props.isActive3 ? `${props.scrollHeight3}px` : 0)};
  transition: max-height 0.15s ease-out;
`;
