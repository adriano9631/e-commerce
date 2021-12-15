import styled from "styled-components/macro";

export const MyAccountContainer = styled.div`
  max-width: 980px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 100px;
  @media screen and (max-width: 840px) {
    margin-top: 150px;
  }
`;

export const MyAccountWrapper = styled.div`
  display: flex;
  margin-left: 20px;
  margin-top: 30px;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 650px) {
    flex-direction: column;
    align-items: flex-start;
    row-gap: 20px;
  }
`;

export const MyAccountTextWrapper = styled.div``;

export const MyAccountTitle = styled.h1`
  font-family: var(--secondary-font-family);
  font-size: 26px;
`;

export const MyAccountDescription = styled.p`
  margin-top: 10px;
  font-size: 15px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  column-gap: 10px;
`;

export const DiscardChangesBtn = styled.button`
  width: 100px;
  height: 36px;
  font-family: var(--secondary-font-family);
  border: 1px solid var(--primary-color);
  color: var(--primary-color);
  font-size: 15px;
  &:hover {
    opacity: 0.8;
  }
  &:disabled {
    opacity: 0.5;
    cursor: auto;
  }

  @media screen and (max-width: 450px) {
    width: 80px;
  }
`;
export const ConfirmChangesBtn = styled.button`
  width: 140px;
  height: 36px;
  font-size: 15px;
  font-family: var(--secondary-font-family);
  background-color: var(--primary-color);
  color: white;
  transition: all 0.25s;
  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.5;
    cursor: auto;
  }

  @media screen and (max-width: 450px) {
    width: 120px;
  }
`;

export const PublicInfromationsWrapper = styled.div`
  padding-top: 30px;
  border-top: 1px solid #dcdcdc;
  margin-left: 20px;
  margin-top: 30px;
`;

export const PublicInformationTitle = styled.h2`
  font-family: var(--secondary-font-family);
  font-size: 26px;
`;

export const PublicInformationDescription = styled.p`
  margin-top: 10px;
  font-size: 15px;
  margin-bottom: 50px;
`;

export const NameChangeInputLabel = styled.label`
  font-size: 15px;
  color: var(--gray-color);
  display: inline-block;
  margin-top: 20px;
`;

export const NameChangeInput = styled.input`
  width: 394px;
  height: 38px;
  display: block;
  margin-top: 7px;
  padding: 10px;

  @media screen and (max-width: 450px) {
    width: 200px;
  }
`;
