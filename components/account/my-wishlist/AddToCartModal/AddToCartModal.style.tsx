import styled from "styled-components/macro";
import crossIcon from "public/icons/cross.svg";
import Image from "next/image";

export const AddToCartModalContainer = styled.div`
  position: fixed;
  height: 100vh;
  z-index: 999;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  width: 1000px;
  height: 700px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 20px;
  position: relative;
`;

export const ContentWrapper = styled.div`
  display: flex;
  column-gap: 40px;
`;

export const CarouselWrapper = styled.div`
  position: relative;
  height: 512px;
  width: 363px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductImage = styled(Image)``;

export const ImageChangeButtonsWrapper = styled.div`
  display: flex;
  column-gap: 10px;
  position: absolute;
  bottom: -30px;
`;

export const ImageChangeBtn = styled.button`
  border-radius: 50%;
  width: 12px;
  height: 12px;
  background-color: rgba(0, 0, 0, 0.3);
  &:disabled {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const CloseIcon = styled(crossIcon)`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 15px;
  margin-right: 15px;
`;

export const RightSideColumn = styled.div``;

export const Name = styled.h1``;

export const Price = styled.p`
  font-size: 18px;
  margin-top: 5px;
`;

export const SizeText = styled.p`
  margin-top: 20px;
`;

export const QuantityText = styled.p`
  margin-top: 10px;
`;

export const AddToCartBtn = styled.button`
  background-color: var(--primary-color);
`;

export const MoreDetailsLink = styled.a``;
