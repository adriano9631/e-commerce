import styled from "styled-components";
import avatar from "public/icons/avatar.svg";
import location from "public/icons/location.svg";

type NavbarContainerProps = {
  isVisible: boolean;
};

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

export const LoginWrapper = styled.button`
  display: flex;
  align-items: center;
  border: none;
`;

export const Avatar = styled(avatar)`
  transform: scale(0.6);
`;

export const Login = styled.p``;

export const FlexWrapper = styled.div`
  display: flex;
`;

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

export const NavItemsWrapper = styled.ul`
  display: flex;
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
