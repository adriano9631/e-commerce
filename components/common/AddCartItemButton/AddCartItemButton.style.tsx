import styled from "styled-components/macro";

export const AddToCartBtnContainer = styled.button<{
  backgroundColor: string;
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
    flex-basis: 100%;
    width: 50vw;
  }
`;
