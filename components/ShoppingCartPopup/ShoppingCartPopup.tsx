import React, { useRef, FC, createRef, RefObject } from "react";
import ReactDom from "react-dom";
import * as s from "./ShoppingCartPopup.style";
import { setIsPopupVisible } from "features/commonSlice";
import { useOnClickOutside } from "usehooks-ts";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import uniqid from "uniqid";
import ReactTooltip from "react-tooltip";
import { RootState } from "features/store";
import { setQuantity } from "features/productsSlice";
import QuantityInput from "components/QuantityInput";
const variants = {
  hidden: {
    x: 500,
  },
  visible: {
    x: 0,
    transition: { duration: 0.8 },
  },
  exit: {
    x: 500,
    transition: { duration: 0.8 },
  },
};

const OVERLAY_STYLES = {
  position: "fixed" as "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .5)",
  zIndex: 999,
};

const ShoppingCartPopup: FC = () => {
  const [elRefs, setElRefs] = React.useState<any[]>([]);
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.products.cartItems);
  const totalPrice = useSelector(
    (state: RootState) => state.products.totalPrice
  );

  React.useEffect(() => {
    setElRefs((elRefs) =>
      Array(cartItems.length)
        .fill(undefined)
        .map((_, i) => elRefs[i] || createRef())
    );
  }, [cartItems.length]);

  const handleClickOutside = () => {
    dispatch(setIsPopupVisible(false));
  };

  useOnClickOutside(ref, handleClickOutside);

  const handleViewCart = () => {
    for (let i = 0; i < elRefs.length; i++) {
      if ((cartItems[i].quantity as "") === "") {
        const element = elRefs[i]?.current as unknown as Element;
        console.log(element);

        ReactTooltip.show(element);
      }
    }
  };

  return ReactDom.createPortal(
    <div style={OVERLAY_STYLES}>
      <s.ShoppingCartPopupContainer
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variants}
        ref={ref}
      >
        <s.Header>
          <s.RightArrowIcon
            onClick={() => dispatch(setIsPopupVisible(false))}
          />
          <s.CartText>CART</s.CartText>
        </s.Header>
        <s.CartItemsList>
          {cartItems.map((item, i) => (
            <s.CartItem key={item.id + uniqid()}>
              <Image src={item.image} width={200} height={200} alt={item.alt} />
              <s.Wrapper>
                <s.Name>{item.name}</s.Name>
                <s.FlexWrapper>
                  <s.Size>{item.size}&nbsp;</s.Size>
                  <s.Price>{item.price} zł</s.Price>
                </s.FlexWrapper>
                <QuantityInput
                  productStock={item.stock}
                  quantity={item.quantity}
                  setQuantity={setQuantity}
                  id={item.id}
                  size={item.size}
                  quantityRef={elRefs[i]}
                />
              </s.Wrapper>
            </s.CartItem>
          ))}
        </s.CartItemsList>

        <s.SumWrapper>
          <s.SumText>Total price:&nbsp;</s.SumText>
          <s.Sum> {totalPrice} zł</s.Sum>
        </s.SumWrapper>
        <s.Footer>
          {/* <Link href="/" passHref> */}
          <s.ViewCartBtn onClick={handleViewCart}>View Cart</s.ViewCartBtn>
          {/* </Link> */}
        </s.Footer>
      </s.ShoppingCartPopupContainer>
    </div>,
    document.body
  );
};

export default ShoppingCartPopup;
