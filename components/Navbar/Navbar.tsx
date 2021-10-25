import React from "react";
import * as s from "./Navbar.style";

// import Avatar from "public/icons/avatar.svg";
// import Location from "public/icons/location.svg";

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
      <s.BrandLogo src="images/brand-logo.png" />
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
