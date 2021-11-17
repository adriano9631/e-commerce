import React from "react";
import * as s from "./RelatedProducts.style";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
  return (
    <s.RelatedProductsContainer>
      <s.RelatedProductsText>Related products</s.RelatedProductsText>
      <s.RelatedProductsList
        useArrowKeys
        leftArrow={
          <s.ChangeProductBtn>
            <s.LeftArrowIcon />
          </s.ChangeProductBtn>
        }
        rightArrow={
          <s.ChangeProductBtn>
            <s.RightArrowIcon />
          </s.ChangeProductBtn>
        }
        show={4}
        slide={4}
        swiping
      >
        {relatedProductsList.map((product) => (
          <s.RelatedProductWrapper key={product.id}>
            <Image
              src={product.images[0].url}
              alt={product.images[0].alt}
              layout="fixed"
              width={200}
              height={264}
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
