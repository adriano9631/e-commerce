import styled from "styled-components";
// import BrandLogo from 'public/images/BrandLogo.png'

import avatar from "public/icons/avatar.svg";
import location from "public/icons/location.svg";

export const NavbarContainer = styled.nav`
  margin-top: 20px;
  padding: 0 40px;
  display: flex;
  align-items: center;
`;
export const LoginWrapper = styled.button`
  display: flex;
  align-items: center;
  border: none;
  cursor: pointer;
`;

export const Avatar = styled(avatar)`
  transform: scale(0.6);
`;

export const Login = styled.p``;

export const LocationWrapper = styled.button`
  display: flex;
  align-items: center;
  margin-left: 40px;
  border: none;
  cursor: pointer;
`;

export const Location = styled(location)`
  width: 17px;
  height: 22px;
`;

export const LocationsText = styled.p`
  margin-left: 8px;
`;

export const BrandLogo = styled.img<{ src: any }>`
  width: 92px;
  height: 41px;
  position: absolute;
  left: calc(50% - 40px);
  cursor: pointer;
  /* top: 50%; */
`;

export const NavItemsWrapper = styled.ul`
  display: flex;
  margin-left: auto;
`;

export const NavItem = styled.li`
  font-size: 15px;
  margin-left: 30px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: #c93c3e;
    transition: all 0.1s ease;
  }
`;
