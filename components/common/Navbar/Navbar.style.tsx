import styled, { css } from "styled-components";
import avatar from "public/icons/avatar.svg";
import location from "public/icons/location.svg";
import expandArrowIcon from "public/icons/dropdown-arrow-down.svg";
import Image from "next/image";

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
  position: sticky;
  z-index: 999;
  transition: top 0.3s;
  top: ${(props) => (props.isVisible ? "0" : "-140px")};
`;
export const FlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
  background-color: white;
  position: relative;
`;

export const Discount = styled.div`
  background-color: var(--primary-color);
  font-size: 18px;
  position: absolute;

  color: white;
  font-family: "PT Sans Narrow", sans-serif;
  padding: 12px;
`;

export const LoginBtn = styled.button`
  display: flex;
  align-items: center;
  border: none;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    color: #c93c3e;
    transition: all 0.1s ease;
  }
`;

export const Avatar = styled(avatar)`
  transform: scale(0.6);
`;

export const LoginText = styled.p``;

export const UserImg = styled(Image)`
  border-radius: 50%;
  cursor: pointer;
`;

export const UserNavItemsList = styled.div`
  display: flex;
  align-items: center;
  column-gap: 30px;
`;
export const LogOutBtn = styled.button`
  ${navItemsStyles};
  margin-top: 6px;
`;

export const UserNavItem = styled.a`
  &:not(:last-child) {
    ${navItemsStyles}
  }
`;

// export const ExpandArrowIcon = styled(expandArrowIcon)``;

export const FlexWrapper = styled.div`
  display: flex;
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
`;

export const NavItem = styled.li`
  ${navItemsStyles}
`;
