import React, { useState, useEffect } from "react";
import Link from "next/link";
import SearchBox from "components/SearchBox";
import useScrollListener from "hooks/useScrollListeners";
import * as s from "./Navbar.style";

const Navbar: React.FC = () => {
  const scroll = useScrollListener();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (scroll.y > 150 && scroll.y - scroll.lastY > 0) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, [scroll.y, scroll.lastY]);

  return (
    <s.NavbarContainer isVisible={isVisible}>
      <s.FlexRow>
        <s.LoginWrapper>
          <s.Avatar />
          <s.Login>Log In</s.Login>
        </s.LoginWrapper>
        <s.LocationWrapper>
          <s.Location />
          <s.LocationsText>Locations</s.LocationsText>
        </s.LocationWrapper>
        <Link href="/" passHref>
          <s.BrandLogo src="/images/brand-logo.png" />
        </Link>
        <s.NavItemsWrapper>
          <s.NavItem>Women</s.NavItem>
          <s.NavItem>Men</s.NavItem>
          <s.NavItem>Accessories</s.NavItem>
          <s.NavItem>Discover</s.NavItem>
          <s.NavItem>Clearance</s.NavItem>
        </s.NavItemsWrapper>
      </s.FlexRow>
      <s.Discount>25% OFF WOMENS JEANS - USE CODE: BTTRDAYS</s.Discount>
      <SearchBox />
    </s.NavbarContainer>
  );
};

export default Navbar;
