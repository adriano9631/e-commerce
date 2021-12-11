import React from "react";
import { useInView } from "react-intersection-observer";
import * as s from "./Header.style";
import heroLeft from "public/images/hero-left.jpg";
import heroRight from "public/images/hero-right.jpg";
import Link from "next/link";

const Header: React.FC = () => {
  const [ref, inview] = useInView({ triggerOnce: true });

  return (
    <s.HeaderContainer>
      <s.HeroLeft>
        <s.ImageLeft
          priority
          placeholder="blur"
          src={heroLeft}
          layout="fill"
          objectFit="cover"
          alt="Fashionably dressed woman"
        />
        <Link href="/women" passHref>
          <s.ShopWomenLink>Shop Women</s.ShopWomenLink>
        </Link>
      </s.HeroLeft>
      <s.HeroRight>
        <s.ImageRight
          src={heroRight}
          placeholder="blur"
          priority
          layout="fill"
          objectFit="cover"
          alt="Fashionably dressed man"
        />
        <Link href="/men" passHref>
          <s.ShopMenLink>Shop Men</s.ShopMenLink>
        </Link>
      </s.HeroRight>
      <s.CollectionSelectionWrapper>
        <Link href="/women" passHref>
          <s.ShopWomenLink>Shop Women</s.ShopWomenLink>
        </Link>
        <s.HeadingsWrapper>
          <s.Heading ref={ref} inview={inview}>
            GOODBYE SWEATS, HELLO DENIM
          </s.Heading>
          <s.Subheading>
            Better days are coming, take them on in style.
          </s.Subheading>
        </s.HeadingsWrapper>
        <Link href="/men" passHref>
          <s.ShopMenLink>Shop Men</s.ShopMenLink>
        </Link>
      </s.CollectionSelectionWrapper>
    </s.HeaderContainer>
  );
};

export default Header;
