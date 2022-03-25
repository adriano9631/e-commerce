import styled, { css } from "styled-components";
import avatar from "public/icons/avatar.svg";
import location from "public/icons/location.svg";
import expandArrowIcon from "public/icons/dropdown-arrow-down.svg";
import Image from "next/image";
import { slide as Menu } from "react-burger-menu";

type NavbarContainerProps = {
  isVisible: boolean;
};

const navItemsStyles = css`
  font-size: 16px;
  cursor: pointer;
  margin-top: 8px;
  border-bottom: 3px solid transparent;
  padding-bottom: 5px;
  &:hover {
    border-bottom: 3px solid var(--primary-color);
    color: #c93c3e;
    transition: all 0.1s ease;
  }
`;

export const NavbarContainer = styled.nav<NavbarContainerProps>`
  position: fixed;
  width: 100vw;
  z-index: 999;
  transition: top 0.3s;
  top: ${(props) => (props.isVisible ? "0" : "-160px")};
`;
export const FlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
  background-color: white;
  position: relative;
  @media screen and (max-width: 950px) {
    padding: 30px;
  }
`;

export const Discount = styled.div`
  background-color: var(--primary-color);
  font-size: 18px;
  position: absolute;

  color: white;
  font-family: "PT Sans Narrow", sans-serif;
  padding: 12px;

  @media screen and (max-width: 840px) {
    margin-top: 47px;
    width: 100vw;
    text-align: center;
  }
`;

export const LoginBtn = styled.button`
  display: flex;
  align-items: center;
  border: none;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    color: #c93c3e !important;
    transition: all 0.1s ease;
  }
  &:nth-child(2) {
    ${navItemsStyles}
  }
`;

export const Avatar = styled(Image)`
  transform: scale(0.6);
`;

export const LoginText = styled.p``;

export const UserImg = styled(Image)`
  border-radius: 50%;
  cursor: pointer;
`;

export const AccountLink = styled.a``;

export const UserNavItemsList = styled.div`
  display: flex;
  align-items: center;
  column-gap: 30px;
`;
export const LogOutBtn = styled.button`
  ${navItemsStyles};
  color: var(--gray-color);
  margin-top: 6px;
  &:hover {
    color: #c93c3e !important;
    transition: all 0.1s ease;
  }
`;

export const UserNavItem = styled.a`
  &:not(:last-child) {
    ${navItemsStyles}
  }
`;

export const FlexWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 950px) {
    display: none;
  }
`;

export const BrandLogo = styled.img`
  width: 92px;
  height: 41px;
  position: absolute;
  cursor: pointer;
  margin-left: 10px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const NavItemsList = styled.ul`
  display: flex;
  column-gap: 30px;

  @media screen and (max-width: 950px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  ${navItemsStyles}
`;
