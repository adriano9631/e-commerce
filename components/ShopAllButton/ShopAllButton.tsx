import * as s from "./ShopAllButton.style";
import { Variants } from "framer-motion";
import React from "react";

type ShopAllbutonProps = {
  initial: string;
  animate: object;
  variants: Variants & object;
} | {};
export type Ref = HTMLButtonElement;

const ShopAllButton = React.forwardRef<Ref, ShopAllbutonProps>(
  ({ ...rest }, ref) => {
    return (
      <s.ShopAllBtnContainer {...rest} ref={ref}>
        Shop All Denim
      </s.ShopAllBtnContainer>
    );
  }
);
ShopAllButton.displayName = "ShopAllButton";
export default ShopAllButton;
