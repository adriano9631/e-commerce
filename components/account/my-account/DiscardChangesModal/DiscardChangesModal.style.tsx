import styled from "styled-components/macro";
import crossIcon from "public/icons/cross.svg";

export const DiscardChangesModalContainer = styled.div`
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

  @media screen and (max-width: 660px) {
    max-width: 530px;
    margin-left: 20px;
    margin-right: 20px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const CloseIcon = styled(crossIcon)`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 15px;
  margin-right: 15px;
`;

export const Title = styled.p`
  font-family: var(--secondary-font-family);
  font-size: 32px;
`;
export const Description = styled.p`
  font-size: 16px;
  text-align: center;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  column-gap: 10px;
  margin-top: 10px;
`;
export const CancelChangesBtn = styled.button`
  width: 142px;
  height: 40px;
  border: 1px solid black;
  color: black;

  @media screen and (max-width: 660px) {
    width: 120px;
  }
`;

export const DiscardChangesBtn = styled.button`
  width: 142px;
  height: 40px;
  background-color: black;
  color: white;

  @media screen and (max-width: 660px) {
    width: 120px;
  }
`;
