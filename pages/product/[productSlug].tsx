import React, { FC } from "react";
import * as queries from "lib/queries";
import { request } from "lib/datocms";

type ProductProps = {
  product: {
    name: string;
    productType: string;
    stock: number;
    price: number;
    image: {
      url: string;
      alt: string;
    };
  };
};

const Product: FC<ProductProps> = ({ product }) => {
  return <p>Product name {product.name}</p>;
};

export default Product;

export async function getStaticPaths() {
  const data = await request({ query: queries.allProductsSlugQuery });

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
  const data = await request({
    query: queries.productQuery,
    variables: { slug: params.productSlug },
  });

  return { props: { product: data.product } };
}
