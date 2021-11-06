import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useProgressiveImage } from "hooks/useProgressiveImage";
import shortShorties from "public/images/short-shorties.jpg";
import * as s from "./FavoriteShorts.style";
import ShopAllButton from "components/ShopAllButton";

const FavoriteShorts = (props: any) => {
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
        <s.FavoriteShortWrapper variants={item}>
          <Image
            src={shortShorties}
            alt="Short shorties"
            width={253}
            height={344}
          />
          <s.Name>Tapered Shorts</s.Name>
          <s.Price>45,00zł</s.Price>
        </s.FavoriteShortWrapper>
        <s.FavoriteShortWrapper variants={item}>
          <Image
            src={shortShorties}
            alt="Short shorties"
            width={253}
            height={344}
          />
          <s.Name>Distressed Middies</s.Name>
          <s.Price>45,00zł</s.Price>
          <s.NewArrival>New Arrival</s.NewArrival>
        </s.FavoriteShortWrapper>
        <s.FavoriteShortWrapper variants={item}>
          <Image
            src={shortShorties}
            alt="Short shorties"
            width={253}
            height={344}
          />
          <s.Name>Straight Leg Shorts</s.Name>
          <s.Price>45,00zł</s.Price>
          <s.NewArrival>New Arrival</s.NewArrival>
        </s.FavoriteShortWrapper>
        <s.FavoriteShortWrapper variants={item}>
          <Image
            src={shortShorties}
            alt="Short shorties"
            width={253}
            height={344}
          />
          <s.Name>Tapered Shorts</s.Name>
          <s.Price>45,00zł</s.Price>
        </s.FavoriteShortWrapper>
        <s.FavoriteShortWrapper variants={item}>
          <Image
            src={shortShorties}
            alt="Short shorties"
            width={253}
            height={344}
          />
          <s.Name>Short Shorties</s.Name>
          <s.Price>45,00zł</s.Price>
          <s.NewArrival>New Arrival</s.NewArrival>
        </s.FavoriteShortWrapper>
        <s.FavoriteShortWrapper variants={item}>
          <Image
            src={shortShorties}
            alt="Short shorties"
            width={253}
            height={344}
          />
          <s.Name>Mom Shorts</s.Name>
          <s.Price>45,00zł</s.Price>
        </s.FavoriteShortWrapper>
      </s.FavoriteShortsListWrapper>
    </s.FavoriteShortsContainer>
  );
};

export default FavoriteShorts;
