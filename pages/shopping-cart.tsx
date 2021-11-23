import React, { createRef, useState, useEffect, useRef } from "react";
import * as s from "styles/shopping-cart.style";
import Image from "next/image";
import QuantityInput from "components/QuantityInput";
import { useSelector } from "react-redux";
import { RootState } from "features/store";
import { setQuantity } from "features/productsSlice";
import { removeItemFromCart } from "features/productsSlice";
import { useDispatch } from "react-redux";
import ReactTooltip from "react-tooltip";
import ssl from "public/images/ssl.png";

const ShoppingCart = () => {
  const cartItems = useSelector((state: RootState) => state.products.cartItems);
  const totalPrice = useSelector(
    (state: RootState) => state.products.totalPrice
  );
  const dispatch = useDispatch()
  const [elRefs, setElRefs] = React.useState<any[]>([]);
  const [isError, setIsError] = useState(false);
  const [isPromoInputOpen, setIsPromoInputOpen] = useState(false);
  const [code, setCode] = useState("");
  const inputRef = useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    setElRefs((elRefs) =>
      Array(cartItems.length)
        .fill(undefined)
        .map((_, i) => elRefs[i] || createRef())
    );
  }, [cartItems.length]);

  React.useEffect(() => {
    const element = inputRef?.current as unknown as Element;
    if (isError) {
      ReactTooltip.show(element);
    } else {
      ReactTooltip.hide(element);
    }
  }, [isError]);

  const applyPromoCodeWithEnter = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      setIsError(true);
    }
  };
  const applyPromoCode = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsError(true);
  };

  useEffect(() => {
    if (code === "") {
      setIsError(false);
    }
  }, [code]);

  const disableError = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCode(event.target.value);
  };

  return (
    <s.ShoppingCartContainer>
      <s.Main>
        <s.ShoppingCartList>
          <s.MyCartText>MY CART</s.MyCartText>
          {cartItems.map((item, i) => (
            <s.ShoppingCart key={item.id + item.size}>
              <s.ImgWrapper>
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={100}
                  height={133}
                  layout="fixed"
                />
              </s.ImgWrapper>
              <s.NamePriceWrapper>
                <s.Name>{item.name}</s.Name>
                <s.Price>{item.price} zł</s.Price>
              </s.NamePriceWrapper>
              <QuantityInput
                productStock={item.stock}
                quantity={item.quantity}
                setQuantity={setQuantity}
                id={item.id}
                size={item.size}
                quantityRef={elRefs[i]}
              />
              <s.ProductTotalPrice>
                {item.productTotalPrice} zł
              </s.ProductTotalPrice>
              <button>
                <s.ExitIcon />
              </button>
            </s.ShoppingCart>
          ))}
          <s.EnterPromoCodeBtn
            onClick={() => setIsPromoInputOpen(!isPromoInputOpen)}
          >
            <s.CouponIcon />
            <s.EnterPromoCodeText>Enter a promo code</s.EnterPromoCodeText>
          </s.EnterPromoCodeBtn>
          {isPromoInputOpen && (
            <s.EnterPromoCodeWrapper>
              <s.EnterPromoCodeInput
                onKeyUp={applyPromoCodeWithEnter}
                onChange={disableError}
                value={code}
                placeholder="Enter the promotional code"
                autoFocus
              />
              {isError && (
                <span
                  data-tip
                  data-offset="{'left': 25}"
                  data-for="errorIcon"
                  style={{ marginTop: "10px" }}
                  ref={inputRef}
                >
                  <s.ErrorIcon />
                </span>
              )}
              <ReactTooltip id="errorIcon" type="error">
                <span>Promo code is invalid</span>
              </ReactTooltip>
              <s.ApplyPromoCodeBtn type="submit" onClick={applyPromoCode}>
                Apply
              </s.ApplyPromoCodeBtn>
            </s.EnterPromoCodeWrapper>
          )}
          <Image
            src={ssl}
            width={175}
            height={48}
            layout="fixed"
            alt="Ssl cerificate"
          />
        </s.ShoppingCartList>
        <s.OrderSummaryWrapper>
          <s.OrderSummaryText>Order summary</s.OrderSummaryText>
          <s.FlexWrapper>
            <s.PartialAmountText>
              Price without shipping costs
            </s.PartialAmountText>
            <s.PartialAmount>{totalPrice}</s.PartialAmount>
          </s.FlexWrapper>
          <s.FlexWrapper>
            <s.ShippingText>Shipping</s.ShippingText>
            <s.ShippingPrice>FREE</s.ShippingPrice>
          </s.FlexWrapper>
          <s.ShippingCountryBtn>Albania</s.ShippingCountryBtn>
          <s.FlexWrapper>
            <s.TotalPriceText>Total price</s.TotalPriceText>
            <s.TotalPrice>{totalPrice + 0} </s.TotalPrice>
          </s.FlexWrapper>
          <s.MakeAnOrderBtn>
            <s.LockIcon />
            Make an order
          </s.MakeAnOrderBtn>
        </s.OrderSummaryWrapper>
      </s.Main>
    </s.ShoppingCartContainer>
  );
};

export default ShoppingCart;
