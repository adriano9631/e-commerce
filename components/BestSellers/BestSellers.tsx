import React from "react";
import * as s from "./BestSellers.style";
import { useInView } from "react-intersection-observer";

const BestSellers: React.FC = () => {
  const [ref, inview] = useInView({ triggerOnce: true });

  return (
    <s.BestSellersContainer>
      <s.Heading ref={ref} inview={inview}>
        BEST SELLING DENIM
      </s.Heading>
      <s.BestSellersList>
        <s.BestSellerWrapper>
          <s.BestSellerImg src="/images/jeans-1.jpg" width={280} height={373} />
          <s.BestSeller>Best Seller</s.BestSeller>
          <s.Name>Straight Leg Jean</s.Name>
          <s.Price>99,00 zł</s.Price>
        </s.BestSellerWrapper>

        <s.BestSellerWrapper>
          <s.BestSellerImg src="/images/jeans-1.jpg" width={280} height={373} />
          <s.BestSeller>Best Seller</s.BestSeller>
          <s.Name>Rose Patch</s.Name>
          <s.Price>10,00 zł</s.Price>
        </s.BestSellerWrapper>

        <s.BestSellerWrapper>
          <s.BestSellerImg src="/images/jeans-1.jpg" width={280} height={373} />
          <s.BestSeller>Best Seller</s.BestSeller>
          <s.Name>Deni Vest</s.Name>
          <s.Price>45,00 zł</s.Price>
        </s.BestSellerWrapper>

        <s.BestSellerWrapper>
          <s.BestSellerImg src="/images/jeans-1.jpg" width={280} height={373} />
          <s.BestSeller>Best Seller</s.BestSeller>
          <s.Name>Straight Cut Jean</s.Name>
          <s.Price>99,00 zł</s.Price>
        </s.BestSellerWrapper>

        <s.BestSellerWrapper>
          <s.BestSellerImg src="/images/jeans-1.jpg" width={280} height={373} />
          <s.BestSeller>Best Seller</s.BestSeller>
          <s.Name>Deni Bag</s.Name>
          <s.Price>15,00 zł</s.Price>
        </s.BestSellerWrapper>

        <s.BestSellerWrapper>
          <s.BestSellerImg src="/images/jeans-1.jpg" width={280} height={373} />
          <s.BestSeller>Best Seller</s.BestSeller>
          <s.Name>Oversized Jacket</s.Name>
          <s.Price>65,00 zł</s.Price>
        </s.BestSellerWrapper>
      </s.BestSellersList>
    </s.BestSellersContainer>
  );
};

export default BestSellers;

// Cena99,00 zł
// Rose PatchRose PatchBest Seller
// Rose Patch

// Cena10,00 zł
// Deni VestDeni VestBest Seller
// Deni Vest

// Cena45,00 zł
// Straight Cut JeanStraight Cut JeanBest Seller
// Straight Cut Jean

// Cena99,00 zł
// Deni BagBest Seller
// Deni Bag

// Cena15,00 zł
// Oversized JacketOversized JacketBest Seller
// Oversized Jacket

// Cena65,00 zł
