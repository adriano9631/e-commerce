import styled from "styled-components/macro";
import Image from "next/image";

type ImageProps = {
  src: StaticImageData;
  alt: string;
  width: number;
  height: number;
};

export const FooterContainer = styled.footer`
  margin-bottom: 50px;
`;

export const FooterTopSide = styled.div`
  height: 120px;
  background-color: #0f2c66;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const SocialMediaName = styled.p`
  font-size: 46px;
  color: #dbd7d7;
  font-family: "Oswald", sans-serif;
`;

export const DecorationImg1 = styled(Image)<ImageProps>``;
export const DecorationImg2 = styled(Image)<ImageProps>``;

export const FooterBottomSide = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
`;

export const SubpageTypeWrapper = styled.article`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const SubpageTypeName = styled.h4`
  color: #0f2c66;
  font-size: 16px;
  margin-bottom: 15px;
  font-family: "Oswald", sans-serif;
`;

export const SubpageName = styled.a`
  color: #393c3e;
  font-size: 14px;
`;
export const MailingListWrapper = styled.article`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

export const JoinMailingListText = styled.h5`
  font-size: 14px;
  color: #393c3e;
  font-weight: normal;
`;

export const DiscountText = styled.h4`
  color: #0f2c66;
  font-size: 16px;
  max-width: 200px;
  line-height: 22px;
  font-family: "Oswald", sans-serif;
  margin-bottom: 10px;
`;

export const FloatingLabel = styled.label`
  font-size: 14px;
  color: #666b70;
`;

export const MailingListInputWrapper = styled.div`
  display: flex;
`;

export const MailingListInput = styled.input`
  border: 1px solid #0f2c66;
  outline: none;
  border-radius: 5px 0 0 5px;
  padding-left: 20px;
  width: 140px;
  &:focus {
    border: 2px solid #0f2c66;
    /* outline: none; */
  }
`;

export const MailingListBtn = styled.button`
  color: white;
  border: none;
  background-color: #b73030;
  padding: 15px;
  border-radius: 5px;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
`;
