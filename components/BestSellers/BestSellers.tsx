import React, { FC, useEffect } from "react";
import * as s from "./BestSellers.style";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import jeans1 from "public/images/jeans-1.jpg";

type BestSellersProps = {
  bestSellingProducts: {
    name: string;
    price: number;
    id: number;
    image: {
      url: string;
    };
  }[];
};

const BestSellers: FC<BestSellersProps> = ({ bestSellingProducts }) => {
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
        {bestSellingProducts.map((product) => {
          return (
            <s.BestSellerWrapper key={product.id} variants={item}>
              <s.BestSellerImg
                src={product.image.url}
                width={280}
                height={373}
              />
              <s.BestSeller>Best Seller</s.BestSeller>
              <s.Name>{product.name}</s.Name>
              <s.Price>{product.price}</s.Price>
            </s.BestSellerWrapper>
          );
        })}
      </s.BestSellersList>
    </s.BestSellersContainer>
  );
};

export default BestSellers;
