import React, { FC, useEffect, useState } from "react";
import Link from "next/link";
import * as s from "./BestSellers.style";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useDispatch } from "react-redux";
import { addPreviouslyViewedProductsLinks } from "features/productsSlice";

export type BestSellersProps = {
  bestSellingProducts: {
    name: string;
    price: number;
    slug: string;
    images: {
      url: string;
      alt: string;
    }[];
  }[];
};
const BestSellers: FC<BestSellersProps> = ({ bestSellingProducts }) => {
  const [hoveredImgSlug, setHoveredImgSlug] = useState("");
  const controls = useAnimation();
  const controls2 = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const dispatch = useDispatch();
  const previouslyViewedProductsLinks = bestSellingProducts.map((product) => {
    return `/product/${encodeURIComponent(product.slug)}`;
  });

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
            <Link
              href={`/product/${encodeURIComponent(product.slug)}`}
              key={product.slug}
              passHref
            >
              <s.BestSellerWrapper
                onMouseOver={() => setHoveredImgSlug(product.slug)}
                onMouseOut={() => setHoveredImgSlug("")}
                variants={item}
                onClick={() =>
                  dispatch(
                    addPreviouslyViewedProductsLinks(
                      previouslyViewedProductsLinks
                    )
                  )
                }
              >
                <s.BestSellerImg
                  src={
                    hoveredImgSlug === product.slug && product.images[1]
                      ? product.images[1].url
                      : product.images[0].url
                  }
                  alt={
                    hoveredImgSlug === product.slug && product.images[1]
                      ? product.images[1].alt
                      : product.images[0].alt
                  }
                  width={280}
                  height={373}
                />

                <s.BestSeller>Best Seller</s.BestSeller>
                <s.Name>{product.name}</s.Name>
                <s.Price>{product.price}</s.Price>
              </s.BestSellerWrapper>
            </Link>
          );
        })}
      </s.BestSellersList>
    </s.BestSellersContainer>
  );
};

export default BestSellers;
