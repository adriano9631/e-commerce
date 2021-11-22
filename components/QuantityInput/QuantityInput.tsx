import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import React, { useState, FC } from "react";
import ReactTooltip from "react-tooltip";
import * as s from "./QuantityInput.style";
import { useDispatch } from "react-redux";
import uniqid from "uniqid";

type QuantityInputProps = {
  quantityRef: React.RefObject<HTMLSpanElement>;
  productStock: number;
  quantity: any;
  setQuantity: any;
  size?: string;
  id?: string;
};

// quantity: string | number;

// ActionCreatorWithPayload<{
//   quantity: number;
//   id: string;
// }> | React.Dispatch<any>;

const QuantityInput: FC<QuantityInputProps> = ({
  quantityRef,
  productStock,
  setQuantity,
  quantity,
  id,
  size,
}) => {
  const [quantityError, setQuantityError] = useState("");
  const dispatch = useDispatch();
  const toolTipId = uniqid();
  const resetToDefaultQuantity = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    const quantityAsString = quantity.toString();
    if (
      (event.key === "Backspace" && quantityAsString.length === 1) ||
      (event.key === "Delete" && quantityAsString.length === 1)
    ) {
      id ? dispatch(setQuantity({ quantity: "", size, id })) : setQuantity("");
    }
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    const max = Number(event.target.max);
    const min = Number(event.target.min);

    if (value <= max) {
      const element = quantityRef?.current as unknown as Element;
      ReactTooltip.hide(element);
      setQuantityError("");
    }
    if (value > max || value < min) {
      setQuantityError(`Enter min. 1, max. ${productStock}`);
    } else {
      id
        ? dispatch(setQuantity({ quantity: value, size, id }))
        : setQuantity(value);
    }
  };

  const incrementQuantity = () => {
    id
      ? dispatch(setQuantity({ quantity: Number(quantity + 1), size, id }))
      : setQuantity((prevQuantity: number) => Number(prevQuantity + 1));

    const element = quantityRef?.current as unknown as Element;
    ReactTooltip.hide(element);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      id
        ? dispatch(setQuantity({ quantity: Number(quantity - 1), size, id }))
        : setQuantity((prevQuantity: number) => prevQuantity - 1);
    }
  };

  return (
    <>
      <span
        data-tip
        data-for={toolTipId}
        ref={quantityRef}
        data-event={`${id}`}
      >
        <s.QuantityWrapper>
          <s.QuantityInput
            type="number"
            onKeyDown={resetToDefaultQuantity}
            onChange={handleQuantityChange}
            value={quantity}
            min="1"
            max={productStock}
          />
          <s.SignsWrapper>
            <s.SignBtn
              onClick={incrementQuantity}
              disabled={quantity === productStock}
              style={{ opacity: quantity === productStock ? 0.6 : 1 }}
            >
              <s.IncrementSign>+</s.IncrementSign>
            </s.SignBtn>
            <s.SignBtn
              style={{ opacity: quantity === 1 || quantity === "" ? 0.6 : 1 }}
              onClick={decrementQuantity}
            >
              <s.DecrementSign>-</s.DecrementSign>
            </s.SignBtn>
          </s.SignsWrapper>
        </s.QuantityWrapper>
      </span>
      <ReactTooltip effect="solid" place="left" id={toolTipId} type="error">
        <span>Please choose quantity</span>
      </ReactTooltip>
      <p
        style={{
          color: "#ff3333",
          fontSize: "12px",
          maxWidth: "60px",
        }}
      >
        {quantityError}
      </p>
    </>
  );
};

export default QuantityInput;
