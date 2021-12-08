import React, { useState, useEffect } from "react";
import SearchBox from "components/common/SearchBox";
import useScrollListener from "lib/hooks/useScrollListeners";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

import * as s from "./Navbar.style";

const Navbar: React.FC = () => {
  const scroll = useScrollListener();
  const [isVisible, setIsVisible] = useState(true);
  const { data: session } = useSession();

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
          {!session && (
            <s.LoginBtn onClick={() => signIn("google")}>
              <s.Avatar />
              <s.LoginText>Log In</s.LoginText>
            </s.LoginBtn>
          )}
          {session && (
            <s.UserNavItemsList>
              <Link href="/" passHref>
                <s.UserImg
                  src={session.user.image}
                  width={30}
                  height={30}
                  alt="User profile image"
                />
              </Link>
              <Link href="/account/my-wishlist" passHref>
                <s.UserNavItem>My Wishlist</s.UserNavItem>
              </Link>
              <Link href="/account/my-account" passHref>
                <s.UserNavItem>My Account</s.UserNavItem>
              </Link>
              <s.UserNavItem>
                <s.LogOutBtn onClick={() => signOut({ redirect: false })}>
                  Log out
                </s.LogOutBtn>
              </s.UserNavItem>
            </s.UserNavItemsList>
          )}
        </s.FlexWrapper>
        <Link href="/">
          <a>
            <s.BrandLogo src="/images/brand-logo.png" />
          </a>
        </Link>
        <s.NavItemsList>
          <s.NavItem>Women</s.NavItem>
          <s.NavItem>Men</s.NavItem>
          <s.NavItem>Accessories</s.NavItem>
          <s.NavItem>Discover</s.NavItem>
          <s.NavItem>Clearance</s.NavItem>
        </s.NavItemsList>
      </s.FlexRow>
      <s.Discount>25% OFF WOMENS JEANS - USE CODE: BTTRDAYS</s.Discount>
      <SearchBox />
    </s.NavbarContainer>
  );
};

export default Navbar;
