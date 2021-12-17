import { FC, useState, forwardRef } from "react";
import * as s from "styles/account/my-wishlist.style";
import AccountHeader from "components/common/AccountHeader";
import { getSession } from "next-auth/react";
import { GetServerSideProps } from "next";
import axiosInstance from "lib/api/axios";
import Link from "next/link";
import { prisma } from "lib/api/db";
import AddToCartModal from "components/account/my-wishlist/AddToCartModal";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
type MyWishlistProps = {
  fetchedWishlists: {
    id: string;
    name: string;
    stock: number;
    description: string;
    details: string;
    slug: string;
    price: string;
    images: {
      url: string;
      alt: string;
    }[];
  }[];
};

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert ref={ref} {...props} />;
});

const MyWishlist: FC<MyWishlistProps> = ({ fetchedWishlists }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [wishlists, setWishlists] = useState(fetchedWishlists);

  const [open, setOpen] = useState(false);

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const removeProductFromWishlist = async (id: string) => {
    try {
      await axiosInstance.delete(`wishlists/${id}`);
      setWishlists(wishlists.filter((wishlist) => wishlist.id !== id));
      setOpen(true);
    } catch (error: any) {
      throw new Error(error);
    }
  };

  return (
    <s.MyWishlistContainer>
      <AccountHeader />
      <s.MyWishlistTextWrapper>
        <s.Title>My wishlist</s.Title>
        <s.Description>
          View your favorite products on the wishlist.
        </s.Description>
      </s.MyWishlistTextWrapper>
      {wishlists.length === 0 && (
        <s.NoProductsWrapper>
          <s.NoProductsText>
            {"You haven't added any products yet"}
          </s.NoProductsText>
          <Link href="/" passHref>
            <s.NoProductsLink>Start adding products</s.NoProductsLink>
          </Link>
        </s.NoProductsWrapper>
      )}
      {wishlists.length > 0 && (
        <>
          <s.WishlistWrapper>
            {wishlists.map((product) => (
              <s.ProductWrapper key={product.id}>
                <Link href={`/product/${product.slug}`}>
                  <a>
                    <s.ProductImage
                      src={product.images[0].url}
                      width={300}
                      height={300}
                      alt={product.images[0].alt}
                    />
                    <s.Name>{product.name}</s.Name>
                    <s.Price>{product.price}</s.Price>
                  </a>
                </Link>
                <s.AddToCartBtn onClick={() => setIsModalOpen(true)}>
                  Add to cart
                </s.AddToCartBtn>
                {isModalOpen && (
                  <AddToCartModal
                    product={product}
                    setIsModalOpen={setIsModalOpen}
                  />
                )}
                <s.RemoveProductFromWishlistBtn
                  onClick={() => removeProductFromWishlist(product.id)}
                >
                  <s.RemoveIcon />
                </s.RemoveProductFromWishlistBtn>
              </s.ProductWrapper>
            ))}
          </s.WishlistWrapper>
          <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              Removed successfully
            </Alert>
          </Snackbar>
        </>
      )}
    </s.MyWishlistContainer>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  let foundWishlists = await prisma.wishlist.findMany({
    where: { userId: session?.id },
  });
  const fetchedWishlists = foundWishlists.map((product) => {
    return {
      id: product.id,
      name: product.name,
      description: product.description,
      details: product.details,
      slug: product.productSlug,
      price: product.price,
      images: product.second_image
        ? [
            { url: product.first_image, alt: product.first_image_alt },
            { url: product.second_image, alt: product.second_image_alt },
          ]
        : [{ url: product.first_image, alt: product.first_image_alt }],
    };
  });

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      fetchedWishlists,
    },
  };
};

export default MyWishlist;
