import styled from "styled-components/macro";
import crossIcon from "public/icons/cross.svg";

export const PaymentDisabledModalContainer = styled.div`
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
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 20px;
  position: relative;
`;

export const ErrorMsg1 = styled.p`
  text-align: center;
  line-height: 42px;
  font-family: var(--secondary-font-family);
  font-size: 32px;
  font-weight: bold;
  max-width: 400px;
`;
export const ErrorMsg2 = styled.p`
  font-size: 16px;
`;

export const ConfirmBtn = styled.button`
  background-color: var(--primary-color);
  color: white;
  width: 141px;
  height: 41px;
  margin-top: 10px;

  &:hover {
    opacity: 0.8;
  }
`;

export const CloseIcon = styled(crossIcon)`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 15px;
  margin-right: 15px;
`;
