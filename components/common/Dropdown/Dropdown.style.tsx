import styled from "styled-components/macro";
import dropownArrowDownIcon from "public/icons/dropdown-arrow-down.svg";
import dropownArrowUpIcon from "public/icons/dropdown-arrow-up.svg";
import { ReactNode } from "react";

type DropdownProps = {
  onClick: (value: React.SetStateAction<boolean>) => void;
  children: ReactNode;
};

type DropdownContentProps = {
  isDropdownContentVisible: boolean;
};

export const Dropdown = styled.button<DropdownProps>`
  width: 355px;
  height: 40px;
  padding: 0 5px;
  margin-top: 5px;
  border: 1px solid #c8c8c8;
  margin-bottom: 15px;

  @media screen and (max-width: 500px) {
    width: 50vw;
  }
`;

export const DropdownFlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ChooseText = styled.p`
  font-size: 14px;
  padding: 5px;
  color: #393c3e;
`;

export const DropdownArrowDownIcon = styled(dropownArrowDownIcon)``;

export const DropdownArrowUpIcon = styled(dropownArrowUpIcon)``;

export const DropdownContent = styled.div<DropdownContentProps>`
  width: 355px;
  height: 129px;
  border: 1px solid #c8c8c8;
  display: ${(props) => (props.isDropdownContentVisible ? "block" : "none")};
  position: absolute;
  z-index: 999;
  background-color: #fff;
  cursor: pointer;

  @media screen and (max-width: 500px) {
    width: 50vw;
  }
`;

export const DropdownOption = styled.p`
  padding: 8px 12px;

  &:hover {
    background-color: var(--primary-color);
    color: #fff;
  }
`;
