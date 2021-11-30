import styled from "styled-components/macro";

export const AddToCartBtnContainer = styled.button<{backgroundColor: string}>`
  flex-basis: 85%;
  padding: 14px 0px;
  font-size: 18px;
  background-color: ${(props) => props.backgroundColor};
  /* background-color: #393c3e; */
  color: #fff;
  border: none;
  border-radius: 5px;
  width: 100%;
  &:hover {
    opacity: 0.8;
  }
`;
