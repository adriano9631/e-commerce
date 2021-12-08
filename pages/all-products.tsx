import React, { FC } from "react";
import Products from "components/common/Products";
import type { ProductsProps } from "components/common/Products";
import { request } from "lib/api/datocms";
import * as queries from "lib/api//queries";

type AllProductsProps = ProductsProps;

const AllProducts: FC<AllProductsProps> = ({ allProducts, modelsImages }) => {
  return (
    <Products
      allProducts={allProducts}
      modelsImages={modelsImages}
      isAllProducts
    />
  );
};

export async function getStaticProps() {
  const data1 = await request({ query: queries.allProductsQuery });
  const data2 = await request({ query: queries.menModelsImagesQuery });

  return {
    props: {
      allProducts: data1.allProducts,
      modelsImages: data2.menpage,
    },
    revalidate: 60,
  };
}

export default AllProducts;
