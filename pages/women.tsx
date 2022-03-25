import React, { FC } from "react";
import Products from "components/common/Products";
import type { ProductsProps } from "components/common/Products";
import { request } from "lib/api/datocms";
import * as queries from "lib/api//queries";

type WomenProps = ProductsProps;

const Women: FC<WomenProps> = ({ allProducts, modelsImages }) => {
  return (
    <Products
      allProducts={allProducts}
      modelsImages={modelsImages}
      collection="WOMEN"
    />
  );
};

export async function getStaticProps() {
  const data1 = await request({ query: queries.allWomenProductsQuery });
  const data2 = await request({ query: queries.femaleModelsImagesQuery });

  return {
    props: {
      allProducts: data1.allProducts,
      modelsImages: data2.womenpage,
    },
    revalidate: 60,
  };
}

export default Women;
