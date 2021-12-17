import styled, { css } from "styled-components/macro";

export const AddToCartBtnContainer = styled.button<{
  backgroundColor: string;
  isProductPage: boolean | undefined;
  isAddToCartModal: boolean | undefined;
}>`
  flex-basis: 85%;
  padding: 14px 0px;
  font-size: 18px;
  background-color: ${(props) => props.backgroundColor};
  color: #fff;
  border: none;
  border-radius: 5px;
  width: 100%;
  &:hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 950px) {
    ${(props) =>
      props.isProductPage &&
      css`
        flex-basis: 100%;
        width: 50vw;
      `}
  }

  @media screen and (max-width: 400px) {
    ${(props) =>
      props.isAddToCartModal &&
      css`
        width: 200px;
      `}
  }
`;
