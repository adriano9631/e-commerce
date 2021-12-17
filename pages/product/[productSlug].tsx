import React, { useState, useRef, useEffect } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useOnClickOutside } from "usehooks-ts";
import * as queries from "lib/api/queries";
import { request } from "lib/api/datocms";
import axiosInstance from "lib/api/axios";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "features/store";
import type { RelatedProductsProps } from "components/product/[productSlug]";
import * as s from "styles/product/[productSlug].style";
import RelatedProducts from "components/product/[productSlug]";
import QuantityInput from "components/common/QuantityInput";
import PaymentDisabledModal from "components/common/PaymentDisabledModal";
import Dropdown from "components/common/Dropdown";
import { setIsPopupVisible } from "features/commonSlice";
import { useSession } from "next-auth/react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import AddToCartBtn from "components/common/AddCartItemButton";

export type ProductProps = {
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
} & RelatedProductsProps;

const Product: NextPage<ProductProps> = ({ product, relatedProductsList }) => {
  const { data: session } = useSession();
  const previouslyViewedProductsLinks = useSelector(
    (state: RootState) => state.products.previouslyViewedProductsLinks
  );

  const cartItems = useSelector((state: RootState) => state.products.cartItems);
  const [previousProductLink, setPreviousProductLink] = useState(0);
  const [nextProductLink, setNextProductLink] = useState(1);
  const [isPaymentDisabledModalOpen, setIsPaymentDisabledModalOpen] =
    useState(false);
  const [isActive1, setisActive1] = useState(false);
  const [isActive2, setisActive2] = useState(false);
  const [isActive3, setisActive3] = useState(false);
  const [isButtonsDisabled, setIsButtonsDisabled] = useState(false);
  const [currentImage, setCurrentImage] = useState({
    url: product.images[0].url,
    alt: product.images[0].alt,
  });
  const dynamicRoute = useRouter().asPath;
  const [quantity, setQuantity] = useState<number | "">(1);
  const [maximumQuantityError, setMaximumQuantityError] = useState("");
  const [isOpenSnackbar, setIsOpenSnackbar] = useState(false);
  const [productTotalPrice, setProductTotalPrice] = useState(
    (quantity as number) * parseInt(product.price)
  );
  const ref1 = useRef<HTMLParagraphElement>(null);
  const ref2 = useRef<HTMLParagraphElement>(null);
  const ref3 = useRef<HTMLParagraphElement>(null);
  const quantityRef = useRef<HTMLSpanElement>(null);
  const scrollHeight1: number | undefined = ref1?.current?.scrollHeight;
  const scrollHeight2: number | undefined = ref2?.current?.scrollHeight;
  const scrollHeight3: number | undefined = ref3?.current?.scrollHeight;

  const dropdownRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState("Choose");
  const sizeRef = useRef<HTMLSpanElement>(null);
  const [isDropdownContentVisible, setIsDropdownContentVisible] =
    useState(false);

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

  const handleBackProductLinkChange = () => {
    setPreviousProductLink((prevValue) => prevValue - 1);
    setNextProductLink((prevValue) => prevValue - 1);
  };

  const handleNextProductLinkChange = () => {
    setPreviousProductLink((prevValue) => prevValue + 1);
    setNextProductLink((prevValue) => prevValue + 1);
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setIsOpenSnackbar(false);
  };

  const handleAddProductToWishlist = async () => {
    try {
      await axiosInstance.post("wishlists", {
        // productId: product.id,
        name: product.name,
        images: product.images,
        price: product.price,
        stock: product.stock,
        description: product.description,
        details: product.details,
        productSlug: product.slug,
        userId: session?.id,
      });
      setIsOpenSnackbar(true);
    } catch (error: any) {
      throw new Error(error);
    }
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            transform: "translateY(-5px)",
          }}
        >
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
          <s.Divider
            style={{
              transform: "translateY(5px)",
            }}
          >
            |
          </s.Divider>
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
            <s.AddToFavoriteBtn onClick={handleAddProductToWishlist}>
              <s.HeartIcon />
            </s.AddToFavoriteBtn>
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
          <Dropdown
            dropdownRef={dropdownRef}
            size={size}
            setSize={setSize}
            sizeRef={sizeRef}
            setIsDropdownContentVisible={setIsDropdownContentVisible}
            isDropdownContentVisible={isDropdownContentVisible}
          />

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
            <AddToCartBtn
              backgroundColor="#393c3e"
              isProductPage
              product={product}
              size={size}
              quantity={quantity}
              cartItems={cartItems}
              setIsPopupVisible={setIsPopupVisible}
              sizeRef={sizeRef}
              quantityRef={quantityRef}
              productTotalPrice={productTotalPrice}
            />

            <s.AddToFavoriteBtn onClick={handleAddProductToWishlist}>
              <s.HeartIcon />
            </s.AddToFavoriteBtn>
          </s.ButtonsWrapper>
          <s.BuyProductBtn onClick={() => setIsPaymentDisabledModalOpen(true)}>
            Buy
          </s.BuyProductBtn>
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
          </s.CollapsibleWrapper>
        </s.RightSide>
      </s.FlexWrapper>
      <RelatedProducts relatedProductsList={relatedProductsList} />
      {isPaymentDisabledModalOpen && (
        <PaymentDisabledModal
          setIsPaymentDisabledModalOpen={setIsPaymentDisabledModalOpen}
        />
      )}
      <Snackbar
        open={isOpenSnackbar}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <MuiAlert
          onClose={handleClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Product have been added
        </MuiAlert>
      </Snackbar>
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
    revalidate: 60,
  };
}

export default Product;
