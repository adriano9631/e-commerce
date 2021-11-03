import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as s from "./MainSection.style";
import ShopAllBtn from "components/ShopAllButton";
import carouselImg1 from "public/images/carousel-img-1.jpg";
import carouselImg2 from "public/images/carousel-img-2.jpg";
import carouselImg3 from "public/images/carousel-img-3.jpg";
import modelPosingInTheSand from "public/images/model-posing-in-the-sand.jpg";
import models from "public/images/models.jpg";

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

const MainSection = () => {
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
  return (
    <s.MainSectionContainer>
      <s.FlexWrapper>
        <s.Wrapper>
          <s.Subheading>Comfort Comes in Many Styles</s.Subheading>
          <s.Heading>
            OUR DENIM WILL MAKE WORKING FROM WORK FEEL JUST LIKE WORKING FROM
            HOME.
          </s.Heading>
          <s.Description>
            {`I'm`} a paragraph. Click here to add your own text and edit me.
            I’m a great place for you to tell a story and let your users know a
            little more about you.
          </s.Description>
          <ShopAllBtn />
        </s.Wrapper>
        <s.ModelsImg src={models} height={950} width={763} />
      </s.FlexWrapper>
      <s.FlexWrapper style={{ marginTop: "200px", marginRight: "200px" }}>
        <s.BenefitWrapper>
          <s.BenefitImg src={modelPosingInTheSand} height={793} width={528} />
          <s.BenefitHeading>EARTH-FRIENDLY AND LASTING</s.BenefitHeading>
          <s.BenefitDescription>
            {`I'm`} a paragraph. Click here to add your own text and edit me.
            I’m a great place for you to tell a story and let your users know a
            little more about you.
          </s.BenefitDescription>
          <s.LearnMoreBtn> Learn More </s.LearnMoreBtn>
        </s.BenefitWrapper>
        <s.CarouselWrapper>
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
                <s.CarouselImg height={512} width={363} src={carouselImg1} />
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
                <s.CarouselImg height={512} width={363} src={carouselImg2} />
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
                <s.CarouselImg height={512} width={363} src={carouselImg3} />
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
