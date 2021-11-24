import React, { createRef, useState, useEffect, useRef } from "react";
import * as s from "styles/shopping-cart.style";
import Image from "next/image";
import Link from "next/link";
import QuantityInput from "components/QuantityInput";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import { RootState } from "features/store";
import { setQuantity } from "features/productsSlice";
import { removeItemFromCart } from "features/productsSlice";
import { useDispatch } from "react-redux";
import ReactTooltip from "react-tooltip";
import PaymentDisabledModal from "components/PaymentDisabledModal";
import ShippingCountryModal from "components/ShippingCountryModal";

const ShoppingCart = () => {
  const cartItems = useSelector((state: RootState) => state.products.cartItems);
  const totalPrice = useSelector(
    (state: RootState) => state.products.totalPrice
  );
  const [isTotalPriceChanged, setIsTotalPriceChanged] = useState(false);
  const [delayedTotalPrice, setDelayedTotalPrice] = useState(0);
  const [isCartItemsEmpty, setIsCartItemsEmpty] = useState(false);
  const dispatch = useDispatch();
  const [elRefs, setElRefs] = React.useState<any[]>([]);
  const [isError, setIsError] = useState(false);
  const [isPaymentDisabledModalOpen, setIsPaymentDisabledModalOpen] =
    useState(false);
  const [isShippingCountryModalOpen, setIsShippingCountryModalOpen] =
    useState(false);
  const [shippingCountry, setShippingCountry] = useState<string | undefined>("Poland");
  const [isPromoInputOpen, setIsPromoInputOpen] = useState(false);
  const [code, setCode] = useState("");
  const inputRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    setElRefs((elRefs) =>
      Array(cartItems.length)
        .fill(undefined)
        .map((_, i) => elRefs[i] || createRef())
    );
  }, [cartItems.length]);

  useEffect(() => {
    const element = inputRef?.current as unknown as Element;
    if (isError) {
      ReactTooltip.show(element);
    } else {
      ReactTooltip.hide(element);
    }
  }, [isError]);

  useEffect(() => {
    setIsTotalPriceChanged(true);
    setTimeout(() => {
      setDelayedTotalPrice(totalPrice);
      setIsTotalPriceChanged(false);
    }, 500);
  }, [totalPrice]);

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
    if (cartItems.length > 0) {
      setIsCartItemsEmpty(false);
    } else {
      setIsCartItemsEmpty(true);
    }
  }, [cartItems.length]);

  useEffect(() => {
    if (code === "") {
      setIsError(false);
    }
  }, [code]);

  const disableError = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCode(event.target.value);
  };

  return (
    <s.ShoppingCartContainer isCartItemsEmpty={isCartItemsEmpty}>
      {isCartItemsEmpty && (
        <s.EmptyShoppingCartWrapper>
          <s.EmptyShoppingCartText>
            The shopping cart is empty
          </s.EmptyShoppingCartText>
          <Link href="/" passHref>
            <s.ContinueShoppingLink>Continue shopping</s.ContinueShoppingLink>
          </Link>
        </s.EmptyShoppingCartWrapper>
      )}
      {!isCartItemsEmpty && (
        <>
          <s.Main>
            <s.ShoppingCartList>
              <s.MyCartText>MY CART</s.MyCartText>
              <AnimatePresence>
                {cartItems.map((item, i) => (
                  <s.ShoppingCartWrapper
                    exit={{ opacity: 0 }}
                    layout
                    key={item.id + item.size}
                  >
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
                      <p style={{ fontSize: "18", color: "#393c3e99" }}>
                        {item.size}
                      </p>
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
                      {item.productTotalPrice}zł
                    </s.ProductTotalPrice>
                    <button
                      onClick={() =>
                        dispatch(
                          removeItemFromCart({ id: item.id, size: item.size })
                        )
                      }
                    >
                      <s.ExitIcon />
                    </button>
                  </s.ShoppingCartWrapper>
                ))}
              </AnimatePresence>
            </s.ShoppingCartList>

            <s.OrderSummaryWrapper>
              {isTotalPriceChanged && (
                <s.CustomizedCircularProgress color="error" />
              )}
              <s.OrderSummaryText>Order summary</s.OrderSummaryText>
              <s.FlexWrapper>
                <s.PartialAmountText>
                  Price without shipping costs
                </s.PartialAmountText>
                <s.PartialAmount>{delayedTotalPrice} zł</s.PartialAmount>
              </s.FlexWrapper>
              <s.FlexWrapper>
                <s.ShippingText>Shipping</s.ShippingText>
                <s.ShippingPrice>FREE</s.ShippingPrice>
              </s.FlexWrapper>
              <s.ShippingCountryBtn
                onClick={() => setIsShippingCountryModalOpen(true)}
                disabled={isTotalPriceChanged}
              >
                {shippingCountry}
              </s.ShippingCountryBtn>
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
              <s.FlexWrapper>
                <s.TotalPriceText>Total price</s.TotalPriceText>
                <s.TotalPrice>{delayedTotalPrice + 0} zł </s.TotalPrice>
              </s.FlexWrapper>
              <s.MakeAnOrderBtn
                disabled={isTotalPriceChanged}
                onClick={() => setIsPaymentDisabledModalOpen(true)}
              >
                <s.LockIcon />
                Make an order
              </s.MakeAnOrderBtn>
            </s.OrderSummaryWrapper>
          </s.Main>
        </>
      )}
      {isPaymentDisabledModalOpen && (
        <PaymentDisabledModal
          setIsPaymentDisabledModalOpen={setIsPaymentDisabledModalOpen}
        />
      )}
      {isShippingCountryModalOpen && (
        <ShippingCountryModal
          setShippingCountry={setShippingCountry}
          shippingCountry={shippingCountry}
          setIsShippingCountryModalOpen={setIsShippingCountryModalOpen}
        />
      )}
    </s.ShoppingCartContainer>
  );
};

export default ShoppingCart;
