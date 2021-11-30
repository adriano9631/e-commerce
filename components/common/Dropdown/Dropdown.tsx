import React, { FC } from "react";
import ReactTooltip from "react-tooltip";
import * as s from "./Dropdown.style";

type DropdownProps = {
  setSize: React.Dispatch<React.SetStateAction<string>>;
  setIsDropdownContentVisible: React.Dispatch<React.SetStateAction<boolean>>;
  sizeRef: React.RefObject<HTMLSpanElement>;
  isDropdownContentVisible: boolean;
  size: string;
  dropdownRef: React.RefObject<HTMLDivElement>;
};

const Dropdown: FC<DropdownProps> = ({
  setSize,
  setIsDropdownContentVisible,
  sizeRef,
  isDropdownContentVisible,
  size,
  dropdownRef,
}) => {
  const handleDropdownOption = (size: string) => {
    setSize(size);
    setIsDropdownContentVisible((prevValue) => !prevValue);
    const element = sizeRef?.current as unknown as Element;
    ReactTooltip.hide(element);
  };

  return (
    <div ref={dropdownRef}>
      <span data-tip data-for="chooseSize" ref={sizeRef} data-event="fakeEvent">
        <s.Dropdown
          onClick={() =>
            setIsDropdownContentVisible((prevValue: any) => !prevValue)
          }
        >
          <s.DropdownFlexWrapper>
            <s.ChooseText>{size}</s.ChooseText>
            {isDropdownContentVisible ? (
              <s.DropdownArrowDownIcon />
            ) : (
              <s.DropdownArrowUpIcon />
            )}
          </s.DropdownFlexWrapper>
        </s.Dropdown>
      </span>
      <ReactTooltip effect="solid" place="left" id="chooseSize" type="error">
        <span>Please choose size</span>
      </ReactTooltip>

      <s.DropdownContent isDropdownContentVisible={isDropdownContentVisible}>
        <s.DropdownOption onClick={() => handleDropdownOption("Small")}>
          Small
        </s.DropdownOption>
        <s.DropdownOption onClick={() => handleDropdownOption("Medium")}>
          Medium
        </s.DropdownOption>
        <s.DropdownOption onClick={() => handleDropdownOption("Large")}>
          Large
        </s.DropdownOption>
      </s.DropdownContent>
    </div>
  );
};

export default Dropdown;
