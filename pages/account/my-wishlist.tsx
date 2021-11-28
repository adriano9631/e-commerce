import { FC } from "react";
import * as s from "styles/account/my-wishlist.style";
import AccountHeader from "components/AccountHeader";
import { getSession } from "next-auth/react";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { prisma } from "lib/db";
type MyWishlistProps = {
  wishlist: {
    id: string;
    alt: string;
    image: string;
    price: string;
    productSlug: string;
  }[];
};

const MyWishlist: FC<MyWishlistProps> = ({ wishlist }) => {
  return (
    <s.MyWishlistContainer>
      <AccountHeader />
      <s.MyWishlistTextWrapper>
        <s.Title>My wishlist</s.Title>
        <s.Description>
          View your favorite products on the wishlist.
        </s.Description>
      </s.MyWishlistTextWrapper>
      <s.WishlistWrapper>
        {wishlist.map((product) => (
          <s.ProductWrapper key={product.productSlug}>
            <Link href={`/product/${product.productSlug}`} passHref>
              <a>
                <s.ProductImage
                  src={product.image}
                  width={300}
                  height={300}
                  alt={product.alt}
                />
                <s.Name>{product.alt}</s.Name>
                <s.Price>{product.price}</s.Price>
              </a>
            </Link>

            <s.AddToCartBtn>Add to cart</s.AddToCartBtn>
          </s.ProductWrapper>
        ))}
      </s.WishlistWrapper>
    </s.MyWishlistContainer>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  const wishlist = await prisma.wishlist.findMany({
    where: { userId: session?.id },
  });

  return {
    props: {
      wishlist,
    },
  };
};

export default MyWishlist;
