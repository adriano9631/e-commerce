import React from "react";
import Link from "next/link";
import * as s from "./Navbar.style";

const Navbar: React.FC = () => {
  return (
    <s.NavbarContainer>
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
    </s.NavbarContainer>
  );
};

export default Navbar;
