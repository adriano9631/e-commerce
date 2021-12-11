import styled from "styled-components/macro";
import Image from "next/image";

type ImageProps = {
  src: StaticImageData;
  alt: string;
  width: number;
  height: number;
};

export const FooterContainer = styled.footer`
  margin: 0 auto;
  margin-bottom: 60px;
`;

export const FooterTopSide = styled.div`
  height: 120px;
  background-color: var(--secondary-color);
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const SocialMediaName = styled.p`
  font-size: 46px;
  color: #dbd7d7;
  font-family: var(--secondary-font-family), sans-serif;

  @media screen and (max-width: 680px) {
    font-size: 5vw;
  }
`;

export const DecorationImg1 = styled(Image)<ImageProps>``;
export const DecorationImg2 = styled(Image)<ImageProps>``;

export const FooterBottomSide = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
  column-gap: 10px;
  @media screen and (max-width: 700px) {
    row-gap: 30px;
    flex-wrap: wrap;
    padding: 0px 20px;
  }

  @media screen and (max-width: 485px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const SubpageTypeWrapper = styled.article`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  @media screen and (max-width: 700px) {
  }
`;

export const SubpageTypeName = styled.h4`
  color: var(--secondary-color);
  font-size: 16px;
  margin-bottom: 15px;
  font-family: var(--secondary-font-family), sans-serif;

  @media screen and (max-width: 485px) {
    font-size: 18px;
    text-align: center;
  }
`;

export const SubpageName = styled.a`
  color: #393c3e;
  font-size: 14px;

  @media screen and (max-width: 485px) {
    font-size: 18px;
    text-align: center;
  }
`;
export const MailingListWrapper = styled.article`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  order: 5;
`;

export const JoinMailingListText = styled.h5`
  font-size: 14px;
  color: #393c3e;
  font-weight: normal;
`;

export const DiscountText = styled.h4`
  color: var(--secondary-color);
  font-size: 16px;
  max-width: 200px;
  line-height: 22px;
  font-family: var(--secondary-font-family), sans-serif;
  margin-bottom: 10px;
`;
