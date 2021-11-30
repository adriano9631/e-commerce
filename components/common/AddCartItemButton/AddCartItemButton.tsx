import React, { FC } from "react";
import * as s from "./AddCartItemButton.style";
import ReactTooltip from "react-tooltip";
import type { CartItem } from "features/productsSlice";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { addCartItem } from "features/productsSlice";
import { ProductProps } from "pages/product/[productSlug]";

type Product = {
  name: string;
  id: string;
  stock: number;
  description: string;
  details: string;
  slug: string;
  price: string;
  images: {
    url: string;
    alt: string;
  }[];
};

type AddCartItemButtonsProps = {
  size: string;
  quantity: number | "";
  cartItems: CartItem[];
  setIsPopupVisible: ActionCreatorWithPayload<boolean, string>;
  sizeRef: React.RefObject<HTMLSpanElement>;
  quantityRef: React.RefObject<HTMLSpanElement>;
  productTotalPrice: number;
  backgroundColor: string;
  product: Product;
};

const AddCartItemButton: FC<AddCartItemButtonsProps> = ({
  product,
  size,
  quantity,
  setIsPopupVisible,
  sizeRef,
  quantityRef,
  productTotalPrice,
  backgroundColor,
}) => {
  const dispatch = useDispatch();
  const handleAddCartItem = () => {
    if (size !== "Choose" && quantity !== "") {
      dispatch(
        addCartItem({
          id: product.id,
          name: product.name,
          price: parseInt(product.price),
          image: product.images[0].url,
          alt: product.images[0].alt,
          stock: product.stock,
          size,
          quantity,
          productTotalPrice,
        })
      );
      dispatch(setIsPopupVisible(true));
    }

    if (size === "Choose") {
      const element = sizeRef?.current as unknown as Element;
      ReactTooltip.show(element);
    }
    if (quantity === "") {
      const element = quantityRef?.current as unknown as Element;
      ReactTooltip.show(element);
    }
  };
  return (
    <s.AddToCartBtnContainer
      backgroundColor={backgroundColor}
      onClick={handleAddCartItem}
    >
      Add to cart
    </s.AddToCartBtnContainer>
  );
};
export default AddCartItemButton;
