import React, { useState, useEffect } from "react";
import SearchBox from "components/common/SearchBox";
import useScrollListener from "lib/hooks/useScrollListeners";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { slide as HamburgerMenu } from "react-burger-menu";
import useMediaQuery from "@mui/material/useMediaQuery";

import * as s from "./Navbar.style";

const Navbar: React.FC = () => {
  const scroll = useScrollListener();
  const [isVisible, setIsVisible] = useState(true);
  const { data: session } = useSession();
  const matches = useMediaQuery("(max-width:950px)");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (scroll.y > 150 && scroll.y - scroll.lastY > 0) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, [scroll.y, scroll.lastY]);

  const styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "36px",
      height: "30px",
      top: "15px",
      right: "20px",
      display: matches ? "block" : "none",
    },
    bmBurgerBars: {
      background: "var(--primary-color)",
    },
    bmBurgerBarsHover: {
      background: "#a90000",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#bdc3c7",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
    },
    bmMenu: {
      background: "#373a47",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "0.8em",
    },
    bmItem: {
      display: "inline-block",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
    },
  };

  const handleMenuOpenChange = ({ isOpen }: { isOpen: boolean }) => {
    setIsMenuOpen(isOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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
              <Link href="/account/my-account" passHref>
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
              <s.LogOutBtn onClick={() => signOut({ redirect: false })}>
                Log out
              </s.LogOutBtn>
            </s.UserNavItemsList>
          )}
        </s.FlexWrapper>
        <Link href="/">
          <a>
            <s.BrandLogo src="/images/brand-logo.png" />
          </a>
        </Link>
        <s.NavItemsList>
          <Link href="/women" passHref>
            <s.NavItem>Women</s.NavItem>
          </Link>
          <Link href="/men" passHref>
            <s.NavItem>Men</s.NavItem>
          </Link>
          <Link href="/all-products" passHref>
            <s.NavItem>All Products</s.NavItem>
          </Link>
        </s.NavItemsList>
      </s.FlexRow>
      <s.Discount>
        25% OFF WOMENS JEANS - USE CODE: BTTRDAYS
      </s.Discount>
      <SearchBox />
      <HamburgerMenu
        isOpen={isMenuOpen}
        styles={styles}
        onStateChange={(state) => handleMenuOpenChange(state)}
        right
      >
        <s.NavItemsList>
          <Link href="/women" passHref>
            <s.NavItem onClick={() => closeMenu()}>Women</s.NavItem>
          </Link>
          <Link href="/men" passHref>
            <s.NavItem onClick={() => closeMenu()}>Men</s.NavItem>
          </Link>
          <Link href="/all-products" passHref>
            <s.NavItem onClick={() => closeMenu()}>All Products</s.NavItem>
          </Link>
        </s.NavItemsList>
        {session && (
          <s.UserNavItemsList
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Link href="/account/my-wishlist" passHref>
              <s.UserNavItem>My Wishlist</s.UserNavItem>
            </Link>
            <Link href="/account/my-account" passHref>
              <s.UserNavItem>My Account</s.UserNavItem>
            </Link>
            <s.LogOutBtn
              style={{ backgroundColor: "inherit", color: "#B8B7AD" }}
              onClick={() => signOut({ redirect: false })}
            >
              Log out
            </s.LogOutBtn>
          </s.UserNavItemsList>
        )}
        {!session && (
          <s.LoginBtn
            style={{
              backgroundColor: "inherit",
              color: "#B8B7AD",
              display: "block",
            }}
            onClick={() => signIn("google")}
          >
            Log In
          </s.LoginBtn>
        )}
      </HamburgerMenu>
    </s.NavbarContainer>
  );
};

export default Navbar;
