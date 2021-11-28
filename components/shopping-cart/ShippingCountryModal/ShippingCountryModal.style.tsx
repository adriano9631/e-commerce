import styled from "styled-components/macro";
export { default } from "./ShippingCountryModal";
import crossIcon from "public/icons/cross.svg";

export const ShippingCountryModalContainer = styled.div`
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
  width: 630px;
  height: 406px;
  background-color: #fff;
  margin-top: -300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 20px;
  position: relative;
`;

export const CloseIcon = styled(crossIcon)`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 15px;
  margin-right: 15px;
`;

export const ChangeRegionText = styled.p`
  font-size: 25px;
  line-height: 35px;
  font-family: var(--secondary-font-family);
  text-align: center;
  margin-top: 50px;
`;

export const Country = styled.label`
  font-size: 14px;
  color: var(--color-gray);
  margin-top: 30px;
  margin-bottom: 6px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 342px;
  width: 282px;
`;

export const UpdateCountryBtn = styled.button`
  width: 100%;
  background-color: var(--primary-color);
  color: #fff;
  height: 42px;
  font-size: 17px;
  border-radius: 5px;
  margin-top: 40px;

  &:hover {
    opacity: 0.8;
  }
`;
