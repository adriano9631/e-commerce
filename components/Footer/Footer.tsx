import React from "react";
import Link from "next/link";
import decorationImg1 from "public/images/decoration-1.jpg";
import decorationImg2 from "public/images/decoration-2.jpg";

import * as s from "./Footer.style";

const Footer = () => {
  return (
    <s.FooterContainer>
      <s.FooterTopSide>
          <s.SocialMediaName>INSTAGRAM</s.SocialMediaName>
          <s.DecorationImg1
            src={decorationImg1}
            alt="Decoration image"
            width={46}
            height={85}
          />
          <s.SocialMediaName>TIK TOK</s.SocialMediaName>
          <s.DecorationImg1
            src={decorationImg2}
            alt="Decoration image"
            width={46}
            height={85}
          />
          <s.SocialMediaName>PINTEREST</s.SocialMediaName>
      </s.FooterTopSide>
      <s.FooterBottomSide>
          <s.SubpageTypeWrapper>
            <s.SubpageTypeName>HEADQUARTERS</s.SubpageTypeName>
            <s.SubpageName>500 Terry Francois Street</s.SubpageName>
            <s.SubpageName>San Francisco, CA 94158</s.SubpageName>
            <s.SubpageName>info@mysite.com</s.SubpageName>
            <s.SubpageName>123-456-7890</s.SubpageName>
          </s.SubpageTypeWrapper>
          <s.SubpageTypeWrapper>
            <s.SubpageTypeName>MENU</s.SubpageTypeName>
            <Link href="/" passHref>
              <s.SubpageName>Shop All</s.SubpageName>
            </Link>
            <Link href="/" passHref>
              <s.SubpageName>Women</s.SubpageName>
            </Link>
            <Link href="/" passHref>
              <s.SubpageName>Men</s.SubpageName>
            </Link>
            <Link href="/" passHref>
              <s.SubpageName>Accessories</s.SubpageName>
            </Link>
            <Link href="/" passHref>
              <s.SubpageName>Discover</s.SubpageName>
            </Link>
            <Link href="/" passHref>
              <s.SubpageName>Clearance</s.SubpageName>
            </Link>
          </s.SubpageTypeWrapper>
          <s.SubpageTypeWrapper>
            <s.SubpageTypeName>POLICY</s.SubpageTypeName>
            <Link href="/" passHref>
              <s.SubpageName>Shipping & Returns </s.SubpageName>
            </Link>
            <Link href="/" passHref>
              <s.SubpageName>Store Policy</s.SubpageName>
            </Link>
            <Link href="/" passHref>
              <s.SubpageName>Payment Methods </s.SubpageName>
            </Link>
            <Link href="/" passHref>
              <s.SubpageName>FAQ</s.SubpageName>
            </Link>
            <Link href="/" passHref>
              <s.SubpageName>Contact</s.SubpageName>
            </Link>
          </s.SubpageTypeWrapper>
          <s.MailingListWrapper>
            <s.JoinMailingListText>Join Our Mailing List</s.JoinMailingListText>
            <s.DiscountText>
              GET 15% OFF AND ENJOY SALES PERKS ON YOUR FIRST ORDER.
            </s.DiscountText>
            <s.FloatingLabel>Email Address *</s.FloatingLabel>
            <s.MailingListInputWrapper>
              <s.MailingListInput />
              <s.MailingListBtn>Submit</s.MailingListBtn>
            </s.MailingListInputWrapper>
          </s.MailingListWrapper>
          <s.SubpageTypeWrapper>
            <s.SubpageTypeName>SOCIAL</s.SubpageTypeName>
            <Link href="/" passHref>
              <s.SubpageName>Twitter</s.SubpageName>
            </Link>
            <Link href="/" passHref>
              <s.SubpageName>Instagram</s.SubpageName>
            </Link>
            <Link href="/" passHref>
              <s.SubpageName>Facebook</s.SubpageName>
            </Link>
            <Link href="/" passHref>
              <s.SubpageName>Pinterest</s.SubpageName>
            </Link>
            <Link href="/" passHref>
              <s.SubpageName>TikTok</s.SubpageName>
            </Link>
          </s.SubpageTypeWrapper>
      </s.FooterBottomSide>
    </s.FooterContainer>
  );
};

export default Footer;
