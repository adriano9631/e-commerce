import styled from "styled-components/macro";

export const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 96px;
  height: 50px;
  margin-top: 5px;
`;

export const QuantityInput = styled.input`
  padding-left: 20px;
  border: 1px solid #c8c8c8;
  outline: none;
  width: 96px;
  height: 50px;
  -moz-appearance: textfield;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const SignsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
`;

export const SignBtn = styled.button`
  border: none;
  background-color: var(--primary-color);
  color: white;
  padding: 0 5px;
  height: 24px;
`;
export const IncrementSign = styled.span`
  font-size: 18px;
`;

export const DecrementSign = styled.span`
  font-size: 18px;
`;
