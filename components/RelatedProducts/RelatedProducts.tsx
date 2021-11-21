import React from "react";
import * as s from "./RelatedProducts.style";
import Image from "next/image";

type RelatedProductsList = {
  name: string;
  id: number;
  price: number;
  quantitySold: number;
  images: {
    url: string;
    alt: string;
  }[];
}[];

export type RelatedProductsProps = {
  relatedProductsList: RelatedProductsList;
};
const RelatedProducts: React.FC<RelatedProductsProps> = ({
  relatedProductsList,
}) => {
  const bestSellingProduct = relatedProductsList.reduce((prev, current) =>
    prev.quantitySold > current.quantitySold ? prev : current
  );

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <s.RelatedProductsContainer>
      <s.RelatedProductsText>Related products</s.RelatedProductsText>
      <s.RelatedProductsList
        renderButtonGroupOutside
        responsive={responsive}
        ssr
        infinite
        keyBoardControl
      >
        {relatedProductsList.map((product) => (
          <s.RelatedProductWrapper key={product.id}>
            <Image
              src={product.images[0].url}
              alt={product.images[0].alt}
              layout="fixed"
              width={200}
              height={264}
              draggable={false}
            />

            <s.Name>{product.name}</s.Name>
            <s.Price>{product.price}</s.Price>
            {product.quantitySold === bestSellingProduct.quantitySold && (
              <s.BestSeller>Best Seller</s.BestSeller>
            )}
          </s.RelatedProductWrapper>
        ))}
      </s.RelatedProductsList>
    </s.RelatedProductsContainer>
  );
};

export default RelatedProducts;
