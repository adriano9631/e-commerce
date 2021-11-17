import styled from "styled-components";
import avatar from "public/icons/avatar.svg";
import location from "public/icons/location.svg";

type NavbarContainerProps = {
  isVisible: boolean;
};

export const NavbarContainer = styled.nav<NavbarContainerProps>`
  /* margin-top: 20px; */
  position: sticky;
  /* top: 0; */
  z-index: 999;
  transition: top 0.3s;
  top: ${(props) => (props.isVisible ? "0" : "-140px")};
`;
export const FlexRow = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 40px;
  background-color: white;
`;

export const Discount = styled.div`
  background-color: var(--primary-color);
  font-size: 18px;
  position: absolute;

  color: white;
  font-family: "PT Sans Narrow", sans-serif;
  padding: 12px;
`;

export const LoginWrapper = styled.button`
  display: flex;
  align-items: center;
  border: none;
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
