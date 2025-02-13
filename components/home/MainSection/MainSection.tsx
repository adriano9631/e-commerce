import React, { FC, useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import * as s from "./MainSection.style";
import ShopAllBtn from "components/home/ShopAllButton";
import Link from "next/link";
import Image from "next/image";

export type MainSectionProps = {
  modelsImage: {
    url: string;
    alt: string;
  };
  benefitImage: {
    url: string;
    alt: string;
  };
  carouselImages: {
    url: string;
    alt: string;
  }[];
};

type activeButtons = {
  btn1: boolean;
  btn2: boolean;
  btn3: boolean;
};

const MainSection: FC<MainSectionProps> = ({
  modelsImage,
  benefitImage,
  carouselImages,
}) => {
  const controls = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });
  const [ref4, inView4] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (inView3) {
      controls3.start("visible");
    }
    if (inView4) {
      controls4.start("visible");
    }
  }, [controls, controls3, controls4, inView, inView3, inView4]);

  const [currentImageNum, setCurrentImageNum] = useState(1);
  const [disabledButtons, setDisabledButtons] = useState(false);
  const [activeButton, setActiveButton] = useState<activeButtons>({
    btn1: false,
    btn2: false,
    btn3: false,
  });

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentImageNum((prevImageNum) =>
        prevImageNum === 3 ? 1 : prevImageNum + 1
      );
    }, 3000);
    return () => {
      window.clearInterval(timer);
    };
  }, [activeButton]);

  useEffect(() => {
    let btnName = `btn${currentImageNum}`;
    let newActiveButton = {} as activeButtons;
    for (const [key] of Object.entries(activeButton)) {
      if (btnName === key) {
        newActiveButton = { ...newActiveButton, [key]: true };
      } else {
        newActiveButton = { ...newActiveButton, [key]: false };
      }
    }

    setActiveButton(newActiveButton);

    setDisabledButtons(true);
  }, [currentImageNum]);

  const changePicture = (imageNum: number) => {
    if (currentImageNum === imageNum) {
      return;
    }
    setCurrentImageNum(imageNum);
  };

  const resetButtons = () => {
    setDisabledButtons(false);
  };

  const outer = {
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

  const inner = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const carouselWrapperAnimation = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const carouselImgAnimation = {
    hidden: { zIndex: -1 },
    visible: { zIndex: 1, transition: { delay: 1.5 } },
    exit: {
      opacity: 0,
      transition: { duration: 1.5 },
    },
  };

  return (
    <s.MainSectionContainer>
      <s.FlexWrapper>
        <s.Wrapper
          ref={ref}
          variants={outer}
          initial="hidden"
          animate={controls}
        >
          <motion.div variants={inner}>
            <s.Subheading>Comfort Comes in Many Styles</s.Subheading>
            <s.Heading>
              OUR DENIM WILL MAKE WORKING FROM WORK FEEL JUST LIKE WORKING FROM
              HOME.
            </s.Heading>
          </motion.div>
          <motion.div variants={inner}>
            <s.Description>
              {`I'm`} a paragraph. Click here to add your own text and edit me.
              I’m a great place for you to tell a story and let your users know
              a little more about you.
            </s.Description>
            <div style={{ marginTop: "50px" }}>
              <Link href="/all-products" passHref>
                <ShopAllBtn />
              </Link>
            </div>
          </motion.div>
        </s.Wrapper>
        <s.ModelsImgWrapper>
          <s.ModelsImg
            lazyBoundary="500px"
            alt={modelsImage.alt}
            src={modelsImage.url}
            height={900}
            width={920}
          />
        </s.ModelsImgWrapper>
      </s.FlexWrapper>
      <s.FlexWrapper>
        <s.BenefitWrapper ref={ref2}>
          <s.BenefitImg
            $inView={inView2}
            src={benefitImage.url}
            alt={benefitImage.alt}
            height={793}
            width={528}
          />
          <motion.div
            initial="hidden"
            animate={controls3}
            variants={outer}
            ref={ref3}
          >
            <motion.div variants={inner}>
              <s.BenefitHeading>EARTH-FRIENDLY AND LASTING</s.BenefitHeading>
            </motion.div>
            <motion.div variants={inner}>
              <s.BenefitDescription>
                {`I'm a paragraph. Click here to if you want add your own text
                and edit me. I'm a great place for you to tell a story and let
                your users know a little more about you.`}
              </s.BenefitDescription>
              <Link href="/">
                <s.LearnMoreLink>Learn More</s.LearnMoreLink>
              </Link>
            </motion.div>
          </motion.div>
        </s.BenefitWrapper>
        <s.CarouselWrapper
          initial="hidden"
          animate={controls4}
          variants={carouselWrapperAnimation}
          ref={ref4}
        >
          <AnimatePresence onExitComplete={resetButtons}>
            {currentImageNum === 1 && (
              <motion.div
                key="1"
                style={{ position: "absolute" }}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={carouselImgAnimation}
              >
                <s.CarouselImg
                  lazyBoundary="500px"
                  height={512}
                  width={363}
                  src={carouselImages[0].url}
                  alt={carouselImages[0].alt}
                />
                <s.FirstImgWrapper>
                  <s.FirstImgDiscountPartOne src="/icons/discount-part-1.svg" />
                  <s.FirstImgDiscountPartTwo src="/icons/discount-part-2.svg" />
                  <s.FirstImgDiscountPercentage>
                    50% <br /> OFF
                  </s.FirstImgDiscountPercentage>
                  <s.FirstImgDiscountDescription>
                    GET HALF OFF IN OUR <br /> BIGGEST CLEARANCE YET
                  </s.FirstImgDiscountDescription>
                </s.FirstImgWrapper>
                <Link href="/all-products">
                  <s.ShopNowLink>Shop Now</s.ShopNowLink>
                </Link>
              </motion.div>
            )}
            {currentImageNum === 2 && (
              <motion.div
                key="2"
                style={{ position: "absolute" }}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={carouselImgAnimation}
              >
                <s.CarouselImg
                  lazyBoundary="500px"
                  height={512}
                  width={363}
                  src={carouselImages[1].url}
                  alt={carouselImages[1].alt}
                />
                <s.SecondImgWrapper>
                  <s.SecondImgHeading>FREE SHIPPING</s.SecondImgHeading>
                  <s.SecondImgSubheading>
                    WHEN BUYING 3 ITEMS OR MORE.
                  </s.SecondImgSubheading>
                </s.SecondImgWrapper>
                <Link href="/all-products">
                  <s.ShopNowLink>Shop Now</s.ShopNowLink>
                </Link>
              </motion.div>
            )}
            {currentImageNum === 3 && (
              <motion.div
                key="3"
                style={{ position: "absolute" }}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={carouselImgAnimation}
              >
                <s.CarouselImg
                  lazyBoundary="500px"
                  height={512}
                  width={363}
                  src={carouselImages[2].url}
                  alt={carouselImages[2].alt}
                />
                <s.ThirdImgWrapper>
                  <s.ThirdImgWritingArea src="/icons/writing-area.svg" />
                  <s.ThirdImgHeading>DISCOUNT!</s.ThirdImgHeading>
                  <s.ThirdImgDescription>
                    GET 25% OFF MENS DENIM JACKETS. USE CODE: BTTRJCKTS
                  </s.ThirdImgDescription>
                </s.ThirdImgWrapper>
                <Link href="/all-products">
                  <s.ShopNowLink>Shop Now</s.ShopNowLink>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
          <s.PicutreChangeWrapper>
            <s.PictureChangeBtn
              isActiveBtn={activeButton.btn1}
              data-testid="firstPictureChangeBtn"
              disabled={disabledButtons}
              onClick={() => changePicture(1)}
            />
            <s.PictureChangeBtn
              isActiveBtn={activeButton.btn2}
              data-testid="secondPictureChangeBtn"
              disabled={disabledButtons}
              onClick={() => changePicture(2)}
            />
            <s.PictureChangeBtn
              isActiveBtn={activeButton.btn3}
              data-testid="thirdPictureChangeBtn"
              disabled={disabledButtons}
              onClick={() => changePicture(3)}
            />
          </s.PicutreChangeWrapper>
        </s.CarouselWrapper>
      </s.FlexWrapper>
    </s.MainSectionContainer>
  );
};

export default MainSection;
