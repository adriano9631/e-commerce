import React, { useState } from "react";
import * as s from "./Header.style";
import { throttle } from "underscore";
import SearchBox from "components/SearchBox";

const Header: React.FC = () => {
  const [yAxis, setYaxis] = useState<number>(0);
  const [xAxis, setXaxis] = useState<number>(0);

  const handleImageAnimationOnScroll = () => {
    const step = 20;
    const stepXaxis = window.scrollY / step;
    setXaxis(stepXaxis);
    const stepYaxis = window.scrollY / step;
    setYaxis(stepYaxis);
  };
  const throttledScroll = throttle(handleImageAnimationOnScroll, 0);

  window.addEventListener("scroll", throttledScroll);

  return (
    <s.HeaderContainer>
      <s.HeroLeft>
        <s.Discount>25% OFF WOMENS JEANS - USE CODE: BTTRDAYS</s.Discount>
        <s.ImageLeft
          xAxis={xAxis}
          yAxis={yAxis}
          src="/images/hero-left.jpg"
          layout="fill"
          objectFit="cover"
          alt="fashionably dressed woman"
        />
      </s.HeroLeft>
      <s.HeroRight>
        <SearchBox />
        <s.ImageRight
          xAxis={xAxis}
          yAxis={yAxis}
          src="/images/hero-right.jpg"
          layout="fill"
          objectFit="cover"
          alt="fashionably dressed man"
        />
      </s.HeroRight>
      <s.CollectionSelectionWrapper>
        <s.ShopWomenBtn>Shop Women</s.ShopWomenBtn>
        <s.HeadingsWrapper>
          <s.Heading>GOODBYE SWEATS, HELLO DENIM</s.Heading>
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
