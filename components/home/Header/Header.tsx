import React from "react";
import { useInView } from "react-intersection-observer";
import * as s from "./Header.style";
import heroLeft from "public/images/hero-left.jpg";
import heroRight from "public/images/hero-right.jpg";

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
      </s.HeroRight>
      <s.CollectionSelectionWrapper>
        <s.ShopWomenBtn>Shop Women</s.ShopWomenBtn>
        <s.HeadingsWrapper>
          <s.Heading ref={ref} inview={inview}>
            GOODBYE SWEATS, HELLO DENIM
          </s.Heading>
          <s.Subheading>
            Better days are coming, take them on in style.
          </s.Subheading>
        </s.HeadingsWrapper>
        <s.ShopMenBtn>Shop Men</s.ShopMenBtn>
      </s.CollectionSelectionWrapper>
    </s.HeaderContainer>
  );
};

export default Header;
