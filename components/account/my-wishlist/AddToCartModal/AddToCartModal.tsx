import AddCartItemButton from "components/common/AddCartItemButton";
import Dropdown from "components/common/Dropdown";
import QuantityInput from "components/common/QuantityInput";
import { setIsPopupVisible } from "features/commonSlice";
import { RootState } from "features/store";
import React, { FC, SetStateAction, useRef, useState } from "react";
import { useSelector } from "react-redux";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as s from "./AddToCartModal.style";

type AddToCartModalProps = {
  product: {
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
  setIsModalOpen: React.Dispatch<SetStateAction<boolean>>;
};

const AddToCartModal: FC<AddToCartModalProps> = ({
  setIsModalOpen,
  product,
}) => {
  const cartItems = useSelector((state: RootState) => state.products.cartItems);
  const matches = useMediaQuery("(max-width:1050px)");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState("Choose");
  const sizeRef = useRef<HTMLSpanElement>(null);
  const [isDropdownContentVisible, setIsDropdownContentVisible] =
    useState(false);
  const quantityRef = useRef<HTMLSpanElement>(null);
  const [quantity, setQuantity] = useState<number | "">(1);
  const productTotalPrice = (quantity as number) * parseInt(product.price);
  const imagesLength = product.images.length;
  const initialButtonsDisabled = new Array(imagesLength);

  for (let i = 0; i < imagesLength; i++) {
    if (i === 0) {
      initialButtonsDisabled[i] = true;
    } else {
      initialButtonsDisabled[i] = false;
    }
  }

  const [buttonsDisabled, setButtonsDisabled] = useState(
    initialButtonsDisabled
  );

  const [url, setUrl] = useState(product.images[0].url);
  const handleChangeImage = (url: string, imageIndex: number) => {
    setUrl(url);
    const newDisabledButtons = buttonsDisabled.map(
      (isButtonDisabled, isButtonDisabledIndex) => {
        if (imageIndex === isButtonDisabledIndex) {
          return true;
        } else {
          return false;
        }
      }
    );
    setButtonsDisabled(newDisabledButtons);
  };

  const variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.1 } },
    exit: { opacity: 0 },
  };
  return (
    <s.AddToCartModalContainer onClick={() => setIsModalOpen(false)}>
      <s.Modal onClick={(e) => e.stopPropagation()}>
        <s.ContentWrapper>
          <s.CarouselWrapper>
            {product.images.map(
              (image) =>
                image.url === url && (
                  <s.ProductImageWrapper
                    variants={variants}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    key={image.url}
                    style={{ position: "absolute" }}
                  >
                    <s.ProductImage
                      src={image.url}
                      width={matches ? 313 : 363}
                      height={matches ? 458 : 512}
                      alt={image.alt}
                    />
                  </s.ProductImageWrapper>
                )
            )}
            <s.ImageChangeButtonsWrapper>
              {product.images.map((image, index) => (
                <div key={image.url}>
                  <s.ImageChangeBtn
                    disabled={buttonsDisabled[index]}
                    onClick={() => handleChangeImage(image.url, index)}
                  />
                </div>
              ))}
            </s.ImageChangeButtonsWrapper>
          </s.CarouselWrapper>
          <s.RightSideColumn>
            <s.Name>{product.name}</s.Name>
            <s.Price>{product.price}</s.Price>
            <s.SizeText>Size</s.SizeText>
            <Dropdown
              dropdownRef={dropdownRef}
              size={size}
              setSize={setSize}
              sizeRef={sizeRef}
              isDropdownContentVisible={isDropdownContentVisible}
              setIsDropdownContentVisible={setIsDropdownContentVisible}
            />
            <s.QuantityText>Quantity</s.QuantityText>
            <QuantityInput
              quantityRef={quantityRef}
              productStock={product.stock}
              quantity={quantity}
              setQuantity={setQuantity}
            />
            <div style={{ marginTop: "50px" }}>
              <AddCartItemButton
                backgroundColor="var(--primary-color)"
                isAddToCartModal
                product={product}
                size={size}
                quantity={quantity}
                cartItems={cartItems}
                setIsPopupVisible={setIsPopupVisible}
                sizeRef={sizeRef}
                quantityRef={quantityRef}
                productTotalPrice={productTotalPrice}
              />
            </div>
          </s.RightSideColumn>
        </s.ContentWrapper>
        <button onClick={() => setIsModalOpen(false)}>
          <s.CloseIcon />
        </button>
      </s.Modal>
    </s.AddToCartModalContainer>
  );
};

export default AddToCartModal;
