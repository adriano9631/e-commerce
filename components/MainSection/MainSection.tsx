import React, { FC, useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import * as s from "./MainSection.style";
import ShopAllBtn from "components/ShopAllButton";

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

type disabledButtons = {
  btn1: boolean;
  btn2: boolean;
  btn3: boolean;
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
  const [disabledButtons, setDisabledButtons] = useState<disabledButtons>({
    btn1: false,
    btn2: false,
    btn3: false,
  });
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

    let newDisabledButtons = {} as disabledButtons;
    for (const [key] of Object.entries(disabledButtons)) {
      if (btnName === key) {
        newDisabledButtons = { ...newDisabledButtons, [key]: false };
      } else {
        newDisabledButtons = { ...newDisabledButtons, [key]: true };
      }
    }

    setDisabledButtons(newDisabledButtons);
  }, [currentImageNum]);

  const changePicture = (imageNum: number) => {
    if (currentImageNum === imageNum) {
      return;
    }
    setCurrentImageNum(imageNum);
  };

  const resetButtons = () => {
    setDisabledButtons({
      btn1: false,
      btn2: false,
      btn3: false,
    });
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
            <ShopAllBtn />
          </motion.div>
        </s.Wrapper>
        <s.ModelsImg
          lazyBoundary="500px"
          alt={modelsImage.alt}
          src={modelsImage.url}
          height={950}
          width={763}
        />
      </s.FlexWrapper>
      <s.FlexWrapper style={{ marginTop: "200px", marginRight: "200px" }}>
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
                {`I'm`} a paragraph. Click here to add your own text and edit
                me. I’m a great place for you to tell a story and let your users
                know a little more about you.
              </s.BenefitDescription>
              <s.LearnMoreBtn> Learn More </s.LearnMoreBtn>
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
                initial={{ zIndex: -1 }}
                animate={{ zIndex: 1, transition: { delay: 1.5 } }}
                exit={{
                  opacity: 0,
                  transition: { duration: 1.5 },
                }}
              >
                <s.CarouselImg
                  lazyBoundary="500px"
                  height={512}
                  width={363}
                  src={carouselImages[0].url}
                />
                <s.FirstImgWrapper>
                  <s.FirstImgDiscountPartOne />
                  <s.FirstImgDiscountPartTwo />
                  <s.FirstImgDiscountPercentage>
                    50% <br /> OFF
                  </s.FirstImgDiscountPercentage>
                  <s.FirstImgDiscountDescription>
                    GET HALF OFF IN OUR <br /> BIGGEST CLEARANCE YET
                  </s.FirstImgDiscountDescription>
                </s.FirstImgWrapper>
                <s.ShopNowBtn>Shop Now</s.ShopNowBtn>
              </motion.div>
            )}
            {currentImageNum === 2 && (
              <motion.div
                key="2"
                style={{ position: "absolute" }}
                initial={{ zIndex: -1 }}
                animate={{ zIndex: 1, transition: { delay: 1.5 } }}
                exit={{
                  opacity: 0,
                  transition: { duration: 1.5 },
                }}
              >
                <s.CarouselImg
                  lazyBoundary="500px"
                  height={512}
                  width={363}
                  src={carouselImages[1].url}
                />
                <s.SecondImgWrapper>
                  <s.SecondImgHeading>FREE SHIPPING</s.SecondImgHeading>
                  <s.SecondImgSubheading>
                    WHEN BUYING 3 ITEMS OR MORE.
                  </s.SecondImgSubheading>
                </s.SecondImgWrapper>
                <s.ShopNowBtn>Shop Now</s.ShopNowBtn>
              </motion.div>
            )}
            {currentImageNum === 3 && (
              <motion.div
                key="3"
                style={{ position: "absolute" }}
                initial={{ zIndex: -1 }}
                animate={{ zIndex: 1, transition: { delay: 1.5 } }}
                exit={{
                  opacity: 0,
                  transition: { duration: 1.5 },
                }}
              >
                <s.CarouselImg
                  lazyBoundary="500px"
                  height={512}
                  width={363}
                  src={carouselImages[2].url}
                />
                <s.ThirdImgWrapper>
                  <s.ThirdImgWritingArea />
                  <s.ThirdImgHeading>DISCOUNT!</s.ThirdImgHeading>
                  <s.ThirdImgDescription>
                    GET 25% OFF MENS DENIM JACKETS. USE CODE: BTTRJCKTS
                  </s.ThirdImgDescription>
                </s.ThirdImgWrapper>
                <s.ShopNowBtn>Shop Now</s.ShopNowBtn>
              </motion.div>
            )}
          </AnimatePresence>
          <s.PicutreChangeWrapper>
            <s.PictureChangeBtn
              isActiveBtn={activeButton.btn1}
              disabled={disabledButtons.btn1}
              onClick={() => changePicture(1)}
            />
            <s.PictureChangeBtn
              isActiveBtn={activeButton.btn2}
              disabled={disabledButtons.btn2}
              onClick={() => changePicture(2)}
            />
            <s.PictureChangeBtn
              isActiveBtn={activeButton.btn3}
              disabled={disabledButtons.btn3}
              onClick={() => changePicture(3)}
            />
          </s.PicutreChangeWrapper>
        </s.CarouselWrapper>
      </s.FlexWrapper>
    </s.MainSectionContainer>
  );
};

export default MainSection;
