import React, { FC } from "react";
import * as s from "./ShippingCountryModal.style";
import Select from "react-select";
import countryList from "react-select-country-list";

type ShippingCountryModalProps = {
  setIsShippingCountryModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setShippingCountry: React.Dispatch<React.SetStateAction<string | undefined>>;
  shippingCountry: string | undefined;
};

// cause no types from countryList library, have to use any for state and provide
const customStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    width: 282,
    outline: "none",
    border: state.isFocused
      ? "2px solid var(--primary-color) "
      : "2px solid #888888",
    boxShadow: "none",
    "&:hover": {
      border: "2px solid var(--primary-color)",
    },
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isSelected && "var(--primary-color)",
    "&:hover": {
      backgroundColor: !state.isSelected && "#e7dcdc",
    },
  }),
};
const ShippingCountryModal: FC<ShippingCountryModalProps> = ({
  setIsShippingCountryModalOpen,
  setShippingCountry,
  shippingCountry,
}) => {
  const handleSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
    if (shippingCountry) {
      setIsShippingCountryModalOpen(false);
    }
    event.preventDefault();
  };

  return (
    <s.ShippingCountryModalContainer
      onClick={() => setIsShippingCountryModalOpen(false)}
    >
      <s.Modal onClick={(e) => e.stopPropagation()}>
        <s.Form>
          <button onClick={() => setIsShippingCountryModalOpen(false)}>
            <s.CloseIcon />
          </button>
          <s.ChangeRegionText>
            Select the destination of your shipment
          </s.ChangeRegionText>
          <s.Country htmlFor="select country">Country</s.Country>
          <Select
            id="select country"
            onChange={(value) => setShippingCountry(value?.label)}
            placeholder="Select country"
            defaultValue={countryList().getData()[177]}
            isClearable
            options={countryList().getData()}
            styles={customStyles}
          />
          <s.UpdateCountryBtn onClick={handleSubmit}>Update</s.UpdateCountryBtn>
        </s.Form>
      </s.Modal>
    </s.ShippingCountryModalContainer>
  );
};

export default ShippingCountryModal;
