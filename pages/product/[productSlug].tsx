import React, { useState, useRef, useEffect } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useOnClickOutside } from "usehooks-ts";
import * as queries from "lib/queries";
import { request } from "lib/datocms";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { useSelector } from "react-redux";
import ReactTooltip from "react-tooltip";
import { RootState } from "features/store";
import type { RelatedProductsProps } from "components/RelatedProducts";
import * as s from "styles/Product.style";
import RelatedProducts from "components/RelatedProducts";
import ShoppingCartPopup from "components/ShoppingCartPopup";
import QuantityInput from "components/QuantityInput";
import { addCartItem } from "features/productsSlice";
import { setIsPopupVisible } from "features/commonSlice";

type ProductProps = {
  product: {
    name: string;
    productType: string;
    id: string;
    stock: number;
    description: string;
    details: string;
    price: string;
    images: {
      url: string;
      alt: string;
    }[];
  };
} & RelatedProductsProps;

const Product: NextPage<ProductProps> = ({ product, relatedProductsList }) => {
  const dispatch = useDispatch();
  const previouslyViewedProductsLinks = useSelector(
    (state: RootState) => state.products.previouslyViewedProductsLinks
  );
  const isPopupVisible = useSelector(
    (state: RootState) => state.common.isPopupVisible
  );
  const cartItems = useSelector((state: RootState) => state.products.cartItems);
  const [previousProductLink, setPreviousProductLink] = useState(0);
  const [nextProductLink, setNextProductLink] = useState(1);
  const [isActive1, setisActive1] = useState(false);
  const [isActive2, setisActive2] = useState(false);
  const [isActive3, setisActive3] = useState(false);
  const [isButtonsDisabled, setIsButtonsDisabled] = useState(false);
  const [currentImage, setCurrentImage] = useState({
    url: product.images[0].url,
    alt: product.images[0].alt,
  });
  const dynamicRoute = useRouter().asPath;
  const [isDropdownContentVisible, setIsDropdownContentVisible] =
    useState(false);
  const [quantity, setQuantity] = useState<number | "">(1);
  const [maximumQuantityError, setMaximumQuantityError] = useState("");
  const [size, setSize] = useState("Choose");
  const [productTotalPrice, setProductTotalPrice] = useState(
    (quantity as number) * parseInt(product.price)
  );
  const ref1 = useRef<HTMLParagraphElement>(null);
  const ref2 = useRef<HTMLParagraphElement>(null);
  const ref3 = useRef<HTMLParagraphElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const sizeRef = useRef<HTMLSpanElement>(null);
  const quantityRef = useRef<HTMLSpanElement>(null);
  const scrollHeight1: number | undefined = ref1?.current?.scrollHeight;
  const scrollHeight2: number | undefined = ref2?.current?.scrollHeight;
  const scrollHeight3: number | undefined = ref3?.current?.scrollHeight;

  useEffect(() => {
    setCurrentImage({
      url: product.images[0].url,
      alt: product.images[0].alt,
    });
  }, [dynamicRoute]);

  useEffect(() => {
    setProductTotalPrice((quantity as number) * parseInt(product.price));
  }, [quantity]);

  const handleClickOutside = () => {
    setIsDropdownContentVisible(false);
  };
  useOnClickOutside(dropdownRef, handleClickOutside);

  const currentImgAnimation = {
    hidden: { zIndex: -1 },
    visible: { zIndex: 1, transition: { delay: 0.5 } },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  const handleImageChange = ({ url, alt }: { url: string; alt: string }) => {
    if (currentImage.url !== url) {
      setIsButtonsDisabled(true);
    }
    setCurrentImage({ url, alt });
  };

  const handleDropdownOption = (size: string) => {
    setSize(size);
    setIsDropdownContentVisible((prevValue) => !prevValue);
    const element = sizeRef?.current as unknown as Element;
    ReactTooltip.hide(element);
  };

  const handleAddCartItem = () => {
    const productFromShoppingCard: any = cartItems.find(
      (item) => item.id === product.id && item.size === size
    );
    if (productFromShoppingCard?.quantity) {
      if (
        size !== "Choose" &&
        quantity !== "" &&
        quantity + productFromShoppingCard?.quantity <= product.stock
      ) {
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
    } else {
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
    }

    if (quantity + productFromShoppingCard?.quantity > product.stock) {
      setMaximumQuantityError(
        `Sum quantity of this product is higher than the maximum allowed quantity which is ${product.stock}`
      );
    } else {
      setMaximumQuantityError("");
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

  const handleBackProductLinkChange = () => {
    setPreviousProductLink((prevValue) => prevValue - 1);
    setNextProductLink((prevValue) => prevValue - 1);
  };

  const handleNextProductLinkChange = () => {
    setPreviousProductLink((prevValue) => prevValue + 1);
    setNextProductLink((prevValue) => prevValue + 1);
  };

  return (
    <s.ProductContainer>
      <s.LinksWrapper>
        <div>
          <Link href="/">
            <a style={{ fontSize: "18px" }}>Home Page</a>
          </Link>
          <s.Divider>/</s.Divider>
          <p
            style={{
              fontSize: "18px",
              opacity: 0.6,
              display: "inline-block",
            }}
          >
            {product.name}
          </p>
        </div>
        <div>
          <Link
            href={previouslyViewedProductsLinks[previousProductLink]}
            passHref
          >
            <button
              onClick={() => handleBackProductLinkChange()}
              style={{
                border: "none",
                backgroundColor: "white",
                pointerEvents:
                  previouslyViewedProductsLinks.indexOf(
                    previouslyViewedProductsLinks[previousProductLink]
                  ) === 0
                    ? "none"
                    : "auto",
                opacity:
                  previouslyViewedProductsLinks.indexOf(
                    previouslyViewedProductsLinks[previousProductLink]
                  ) === 0
                    ? 0.7
                    : 1,
              }}
            >
              <a>
                <s.Arrow>&#8249;</s.Arrow>
                <span
                  style={{
                    fontSize: "18px",
                  }}
                >
                  Back
                </span>
              </a>
            </button>
          </Link>
          <s.Divider>|</s.Divider>
          <Link
            href={
              previouslyViewedProductsLinks.indexOf(
                previouslyViewedProductsLinks[nextProductLink]
              ) === -1
                ? ""
                : previouslyViewedProductsLinks[nextProductLink]
            }
            passHref
          >
            <button
              onClick={() => handleNextProductLinkChange()}
              style={{
                border: "none",
                backgroundColor: "white",
                pointerEvents:
                  previouslyViewedProductsLinks.indexOf(
                    previouslyViewedProductsLinks[nextProductLink]
                  ) === -1
                    ? "none"
                    : "auto",
                opacity:
                  previouslyViewedProductsLinks.indexOf(
                    previouslyViewedProductsLinks[nextProductLink]
                  ) === -1
                    ? 0.7
                    : 1,
              }}
            >
              <a>
                <span style={{ fontSize: "18px" }}>Next</span>
                <s.Arrow>&#8250;</s.Arrow>
              </a>
            </button>
          </Link>
        </div>
      </s.LinksWrapper>
      <s.FlexWrapper>
        <s.LeftSide>
          <s.ImgWrapper>
            <AnimatePresence onExitComplete={() => setIsButtonsDisabled(false)}>
              {product.images.map(
                (image) =>
                  currentImage.url === image.url && (
                    <motion.div
                      key={image.url}
                      style={{
                        position: "absolute",
                      }}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={currentImgAnimation}
                    >
                      <Image
                        src={image.url}
                        alt={image.alt}
                        width={500}
                        height={667}
                      />
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </s.ImgWrapper>

          <s.ImagesListWrapper>
            {product.images.map((image) => (
              <s.PreviewImgWrapper
                isActive={currentImage.url === image.url}
                disabled={isButtonsDisabled}
                onClick={() =>
                  handleImageChange({ url: image.url, alt: image.alt })
                }
                key={image.url}
              >
                <Image alt={image.alt} src={image.url} width={43} height={43} />
              </s.PreviewImgWrapper>
            ))}
          </s.ImagesListWrapper>
          <s.Description>{product.description}</s.Description>
        </s.LeftSide>
        <s.RightSide>
          <s.Name>{product.name}</s.Name>
          <s.Price>{product.price}</s.Price>
          <s.SizeText>Size</s.SizeText>
          <div ref={dropdownRef}>
            <span
              data-tip
              data-for="chooseSize"
              ref={sizeRef}
              data-event="fakeEvent"
            >
              <s.Dropdown
                onClick={() =>
                  setIsDropdownContentVisible((prevValue) => !prevValue)
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
            <ReactTooltip
              effect="solid"
              place="left"
              id="chooseSize"
              type="error"
            >
              <span>Please choose size</span>
            </ReactTooltip>

            <s.DropdownContent
              isDropdownContentVisible={isDropdownContentVisible}
            >
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
          <s.QuantityText>Quantity</s.QuantityText>
          <QuantityInput
            quantityRef={quantityRef}
            productStock={product.stock}
            quantity={quantity}
            setQuantity={setQuantity}
          />
          <p style={{ color: "var(--primary-color)" }}>
            {maximumQuantityError}
          </p>
          <s.ButtonsWrapper>
            <s.AddToCartBtn onClick={handleAddCartItem}>
              Add to cart
            </s.AddToCartBtn>
            <s.AddToFavoriteBtn>
              <s.HeartIcon />
            </s.AddToFavoriteBtn>
          </s.ButtonsWrapper>
          <s.BuyProductBtn>Buy</s.BuyProductBtn>
          <s.CollapsibleWrapper>
            <s.Collapsible
              onClick={() => setisActive1((prevValue) => !prevValue)}
            >
              <s.Subheading>Product Info</s.Subheading>
              <s.ExpandIcon>&#43;</s.ExpandIcon>
            </s.Collapsible>
            <s.ProductInfoDetails
              scrollHeight1={scrollHeight1}
              isActive1={isActive1}
              ref={ref1}
            >
              {product.details}
            </s.ProductInfoDetails>
            <s.Collapsible
              onClick={() => setisActive2((prevValue) => !prevValue)}
            >
              <s.Subheading>Return & Refund Policy</s.Subheading>
              <s.ExpandIcon>&#43;</s.ExpandIcon>
            </s.Collapsible>
            <s.RefundPolicyDetails
              scrollHeight2={scrollHeight2}
              isActive2={isActive2}
              ref={ref2}
            >
              I’m a Return and Refund policy. I’m a great place to let your
              customers know what to do in case they are dissatisfied with their
              purchase. Having a straightforward refund or exchange policy is a
              great way to build trust and reassure your customers that they can
              buy with confidence.
            </s.RefundPolicyDetails>
            <s.Collapsible
              onClick={() => setisActive3((prevValue) => !prevValue)}
            >
              <s.Subheading>Shipping Info</s.Subheading>
              <s.ExpandIcon>&#43;</s.ExpandIcon>
            </s.Collapsible>
          </s.CollapsibleWrapper>
          <s.ShippingInfoDetails
            scrollHeight3={scrollHeight3}
            isActive3={isActive3}
            ref={ref3}
          >
            I’m a shipping policy. I’m a great place to add more information
            about your shipping methods, packaging and cost. Providing
            straightforward information about your shipping policy is a great
            way to build trust and reassure your customers that they can buy
            from you with confidence.
          </s.ShippingInfoDetails>
        </s.RightSide>
      </s.FlexWrapper>
      <RelatedProducts relatedProductsList={relatedProductsList} />
      <AnimatePresence>
        {isPopupVisible && <ShoppingCartPopup />}
      </AnimatePresence>
    </s.ProductContainer>
  );
};

export async function getStaticPaths() {
  const data = await request({ query: queries.slugFromProductsListQuery });

  const paths = data.allProducts.map((product: { slug: string }) => ({
    params: { productSlug: product.slug },
  }));

  return { paths, fallback: "blocking" };
}

type Params = {
  params: {
    productSlug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const data1 = await request({
    query: queries.productBySlugQuery,
    variables: { slug: params.productSlug },
  });
  const data2 = await request({
    query: queries.productsListByTypeQuery,
    variables: { productType: data1.product.productType },
  });

  return {
    props: {
      product: data1.product,
      relatedProductsList: data2.allProducts,
    },
  };
}

export default Product;
