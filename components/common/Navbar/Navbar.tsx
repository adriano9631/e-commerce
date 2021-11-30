import React, { useState, useEffect } from "react";
import Link from "next/link";
import SearchBox from "components/common/SearchBox";
import useScrollListener from "lib/hooks/useScrollListeners";
import { useSession, signIn, signOut } from "next-auth/react";

import * as s from "./Navbar.style";

const Navbar: React.FC = () => {
  const scroll = useScrollListener();
  const [isVisible, setIsVisible] = useState(true);
  const { data: session } = useSession();

  if (session) {
    console.log(session);
  } else {
    console.log("not logged in");
  }

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
        <s.FlexWrapper>
          <button onClick={() => signIn("google")}>Sign in</button>
          <button onClick={() => signOut({ redirect: false })}>Sign out</button>
          <s.LoginWrapper>
            <s.Avatar />
            <s.Login>Log In</s.Login>
          </s.LoginWrapper>
          <s.LocationWrapper>
            <s.Location />
            <s.LocationsText>Locations</s.LocationsText>
          </s.LocationWrapper>
        </s.FlexWrapper>
        <Link href="/">
          <a>
            <s.BrandLogo src="/images/brand-logo.png" />
          </a>
        </Link>
        <s.NavItemsWrapper>
          {session ? <p>LOGGED IN </p> : <p>NOT LOGGED IN</p>}
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
