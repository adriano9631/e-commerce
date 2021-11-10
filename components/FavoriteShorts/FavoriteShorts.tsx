import React, { FC, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useProgressiveImage } from "hooks/useProgressiveImage";
import * as s from "./FavoriteShorts.style";
import ShopAllButton from "components/ShopAllButton";

export type FavoriteShortsProps = {
  favoriteShorts: {
    name: string;
    price: number;
    id: number;
    createdAt: Date;
    image: {
      url: string;
    };
  }[];
  newArrivalDate: Date;
};

const FavoriteShorts: FC<FavoriteShortsProps> = ({
  favoriteShorts,
  newArrivalDate,
}) => {
  const controls = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (inView2) {
      controls2.start("visible");
    }
    if (inView3) {
      controls3.start("visible");
    }
  }, [controls, controls2, controls3, inView, inView2, inView3]);

  const loadedBackgroundImage = useProgressiveImage(
    "/images/blue-background.jpg"
  );

  const outerWrapper = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const innerWrapper = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const shopAllButtonWrapper = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

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

  return (
    <s.FavoriteShortsContainer
      style={{ backgroundImage: `url(${loadedBackgroundImage})` }}
    >
      <s.FlexWrapper>
        <s.IntroductionWrapper
          initial="hidden"
          variants={outerWrapper}
          animate={controls}
          ref={ref}
        >
          <motion.div variants={innerWrapper}>
            <s.Subheading>We Love Denim</s.Subheading>
          </motion.div>
          <motion.div variants={innerWrapper}>
            <s.Heading>
              OUR FAVOURITE SHORTS MADE FOR THE BEST COMFORT AND STYLE
            </s.Heading>
            <s.Description>
              {`I'm`} a paragraph. Click here to add your own text and edit me.
              I’m a great place for you to tell a story and let your users know
              a little more about you.
            </s.Description>
          </motion.div>
        </s.IntroductionWrapper>
        <ShopAllButton
          initial="hidden"
          animate={controls2}
          ref={ref2}
          variants={shopAllButtonWrapper}
        />
      </s.FlexWrapper>
      <s.FavoriteShortsListWrapper
        ref={ref3}
        initial="hidden"
        animate={controls3}
        variants={list}
      >
        {favoriteShorts.map((product) => (
          <s.FavoriteShortWrapper key={product.id} variants={item}>
            <Image
              src={product.image.url}
              alt="Short shorties"
              width={253}
              height={344}
            />
            <s.Name>{product.name}</s.Name>
            <s.Price>{product.price}</s.Price>
            {new Date(product.createdAt) > new Date(newArrivalDate) && (
              <s.NewArrival>New Arrival</s.NewArrival>
            )}
          </s.FavoriteShortWrapper>
        ))}
      </s.FavoriteShortsListWrapper>
    </s.FavoriteShortsContainer>
  );
};

export default FavoriteShorts;
