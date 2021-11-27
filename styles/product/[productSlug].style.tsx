import React, { ReactNode } from "react";
import styled, { css } from "styled-components/macro";
import heartIcon from "public/icons/heart.svg";
import dropownArrowDownIcon from "public/icons/dropdown-arrow-down.svg";
import dropownArrowUpIcon from "public/icons/dropdown-arrow-up.svg";
import plusIcon from "public/icons/plus.svg";

type DropdownProps = {
  onClick: (value: React.SetStateAction<boolean>) => void;
  children: ReactNode;
};

type DropdownContentProps = {
  isDropdownContentVisible: boolean;
};

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

type CollapsibleProps = {
  onClick: (value: React.SetStateAction<boolean>) => void;
};

export const ProductContainer = styled.div`
  width: 890px;
  margin: 0 auto;
  margin-top: 100px;
`;

export const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
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
  margin-top: 50px;
`;

export const LeftSide = styled.section``;

export const RightSide = styled.section``;

export const ImgWrapper = styled.div`
  position: relative;
  width: 500px;
  height: 667px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
`;

export const Name = styled.h1`
  font-size: 24px;
  color: var(--secondary-color);
  font-family: var(--secondary-font-family);
  font-weight: 300;
`;
export const Price = styled.p`
  font-size: 36px;
  font-weight: 400;
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const SizeText = styled.label``;

export const Dropdown = styled.button<DropdownProps>`
  width: 355px;
  height: 40px;
  padding: 0 5px;
  margin-top: 5px;
  border: 1px solid #c8c8c8;
  margin-bottom: 15px;
`;

export const DropdownFlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ChooseText = styled.p`
  font-size: 14px;
  padding: 5px;
  color: #393c3e;
`;

export const DropdownArrowDownIcon = styled(dropownArrowDownIcon)``;

export const DropdownArrowUpIcon = styled(dropownArrowUpIcon)``;

export const DropdownContent = styled.div<DropdownContentProps>`
  width: 355px;
  height: 129px;
  border: 1px solid #c8c8c8;
  display: ${(props) => (props.isDropdownContentVisible ? "block" : "none")};
  position: absolute;
  z-index: 999;
  background-color: #fff;
  cursor: pointer;
`;

export const DropdownOption = styled.p`
  padding: 8px 12px;

  &:hover {
    background-color: var(--primary-color);
    color: #fff;
  }
`;

export const Size = styled.p``;

export const QuantityText = styled.label``;

export const ButtonsWrapper = styled.div`
  display: flex;
  margin-top: 40px;
  column-gap: 10px;
`;

export const AddToCartBtn = styled.button`
  flex-basis: 85%;
  padding: 14px 0px;
  font-size: 18px;
  background-color: #393c3e;
  color: #fff;
  border: none;
  border-radius: 5px;

  &:hover {
    opacity: 0.8;
  }
`;

export const HeartIcon = styled(heartIcon)``;

export const AddToFavoriteBtn = styled.button`
  flex-basis: 15%;
  border: 1px solid var(--primary-color);
  border-radius: 7px;
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
`;

export const CollapsibleWrapper = styled.article`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-top: 30px;
`;

export const Collapsible = styled.button<CollapsibleProps>`
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
`;

export const ExpandIcon = styled(plusIcon)``;

export const Subheading = styled.h2`
  font-weight: normal;
  font-size: 18px;
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
