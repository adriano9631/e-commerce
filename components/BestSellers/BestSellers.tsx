import React, { useEffect, useRef, useCallback } from "react";
import * as s from "./BestSellers.style";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import jeans1 from "public/images/jeans-1.jpg";

const BestSellers: React.FC = () => {
  const controls = useAnimation();
  const controls2 = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }

    if (inView2) {
      controls2.start("visible");
    }
  }, [controls, controls2, inView, inView2]);

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  const item = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const headingAnimation = {
    hidden: {
      opacity: 0,
      x: -30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.5,
      },
    },
  };

  return (
    <s.BestSellersContainer>
      <s.Heading
        initial="hidden"
        animate={controls}
        variants={headingAnimation}
        ref={ref}
      >
        BEST SELLING DENIM
      </s.Heading>
      <s.BestSellersList
        ref={ref2}
        initial="hidden"
        animate={controls2}
        variants={list}
      >
        <s.BestSellerWrapper variants={item}>
          <s.BestSellerImg src={jeans1} width={280} height={373} />
          <s.BestSeller>Best Seller</s.BestSeller>
          <s.Name>Straight Leg Jean</s.Name>
          <s.Price>99,00 zł</s.Price>
        </s.BestSellerWrapper>

        <s.BestSellerWrapper variants={item}>
          <s.BestSellerImg src={jeans1} width={280} height={373} />
          <s.BestSeller>Best Seller</s.BestSeller>
          <s.Name>Rose Patch</s.Name>
          <s.Price>10,00 zł</s.Price>
        </s.BestSellerWrapper>

        <s.BestSellerWrapper variants={item}>
          <s.BestSellerImg src={jeans1} width={280} height={373} />
          <s.BestSeller>Best Seller</s.BestSeller>
          <s.Name>Deni Vest</s.Name>
          <s.Price>45,00 zł</s.Price>
        </s.BestSellerWrapper>

        <s.BestSellerWrapper variants={item}>
          <s.BestSellerImg src={jeans1} width={280} height={373} />
          <s.BestSeller>Best Seller</s.BestSeller>
          <s.Name>Straight Cut Jean</s.Name>
          <s.Price>99,00 zł</s.Price>
        </s.BestSellerWrapper>

        <s.BestSellerWrapper variants={item}>
          <s.BestSellerImg src={jeans1} width={280} height={373} />
          <s.BestSeller>Best Seller</s.BestSeller>
          <s.Name>Deni Bag</s.Name>
          <s.Price>15,00 zł</s.Price>
        </s.BestSellerWrapper>

        <s.BestSellerWrapper variants={item}>
          <s.BestSellerImg src={jeans1} width={280} height={373} />
          <s.BestSeller>Best Seller</s.BestSeller>
          <s.Name>Oversized Jacket</s.Name>
          <s.Price>65,00 zł</s.Price>
        </s.BestSellerWrapper>
      </s.BestSellersList>
    </s.BestSellersContainer>
  );
};

export default BestSellers;
