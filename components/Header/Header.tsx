import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import * as s from "./Header.style";
import { throttle } from "underscore";
import SearchBox from "components/SearchBox";
import heroLeft from "public/images/hero-left.jpg";
import heroRight from "public/images/hero-right.jpg";

const Header: React.FC = () => {
  const [yAxis, setYaxis] = useState<number>(0);
  const [xAxis, setXaxis] = useState<number>(0);
  const [isImageLeftLoaded, setisImageLeftLoaded] = useState(false);
  const [isImageRightLoaded, setisImageRightLoaded] = useState(false);
  const [ref, inview] = useInView({ triggerOnce: true });
  const isBrowser = () => typeof window !== "undefined";

  const handleImageAnimationOnScroll = () => {
    const step = 20;
    const stepXaxis = window.scrollY / step;
    setXaxis(stepXaxis);
    const stepYaxis = window.scrollY / step;
    setYaxis(stepYaxis);
  };
  const throttledScroll = throttle(handleImageAnimationOnScroll, 0);
  if (isBrowser()) {
    window.addEventListener("scroll", throttledScroll);
  }

  return (
    <s.HeaderContainer>
      <s.HeroLeft>
        <s.Discount>25% OFF WOMENS JEANS - USE CODE: BTTRDAYS</s.Discount>
        <s.ImageLeft
          xaxis={xAxis}
          yaxis={yAxis}
          priority
          placeholder="blur"
          $isImageLeftLoaded={isImageLeftLoaded}
          $isImageRightLoaded={isImageRightLoaded}
          src={heroLeft}
          onLoad={() => setisImageLeftLoaded(true)}
          layout="fill"
          objectFit="cover"
          alt="Fashionably dressed woman"
        />
      </s.HeroLeft>
      <s.HeroRight>
        <SearchBox />
        <s.ImageRight
          xaxis={xAxis}
          yaxis={yAxis}
          src={heroRight}
          $isImageLeftLoaded={isImageLeftLoaded}
          $isImageRightLoaded={isImageRightLoaded}
          placeholder="blur"
          onLoad={() => setisImageRightLoaded(true)}
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
