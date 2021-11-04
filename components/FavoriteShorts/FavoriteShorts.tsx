import React from "react";
import Image from "next/image";
import { useProgressiveImage } from "hooks/useProgressiveImage";
import shortShorties from "public/images/short-shorties.jpg";
import * as s from "./FavoriteShorts.style";
import ShopAllButton from "components/ShopAllButton";

const FavoriteShorts = () => {
  const loadedBackgroundImage = useProgressiveImage(
    "/images/blue-background.jpg"
  );

  return (
    <s.FavoriteShortsContainer
      style={{ backgroundImage: `url(${loadedBackgroundImage})` }}
    >
      <s.FlexWrapper>
        <s.IntroductionWrapper>
          <s.Subheading>We Love Denim</s.Subheading>
          <s.Heading>
            OUR FAVOURITE SHORTS MADE FOR THE BEST COMFORT AND STYLE
          </s.Heading>
          <s.Description>
            {`I'm`} a paragraph. Click here to add your own text and edit me.
            I’m a great place for you to tell a story and let your users know a
            little more about you.
          </s.Description>
        </s.IntroductionWrapper>
        <ShopAllButton />
      </s.FlexWrapper>
      <s.FavoriteShortsListWrapper>
        <s.FavoriteShortWrapper>
          <Image
            src={shortShorties}
            alt="Short shorties"
            width={283}
            height={374}
          />
          <s.Name>Tapered Shorts</s.Name>
          <s.Price>45,00zł</s.Price>
        </s.FavoriteShortWrapper>
        <s.FavoriteShortWrapper>
          <Image
            src={shortShorties}
            alt="Short shorties"
            width={283}
            height={374}
          />
          <s.Name>Distressed Middies</s.Name>
          <s.Price>45,00zł</s.Price>
          <s.NewArrival>New Arrival</s.NewArrival>
        </s.FavoriteShortWrapper>
        <s.FavoriteShortWrapper>
          <Image
            src={shortShorties}
            alt="Short shorties"
            width={283}
            height={374}
          />
          <s.Name>Straight Leg Shorts</s.Name>
          <s.Price>45,00zł</s.Price>
          <s.NewArrival>New Arrival</s.NewArrival>
        </s.FavoriteShortWrapper>
        <s.FavoriteShortWrapper>
          <Image
            src={shortShorties}
            alt="Short shorties"
            width={283}
            height={374}
          />
          <s.Name>Tapered Shorts</s.Name>
          <s.Price>45,00zł</s.Price>
        </s.FavoriteShortWrapper>
        <s.FavoriteShortWrapper>
          <Image
            src={shortShorties}
            alt="Short shorties"
            width={283}
            height={374}
          />
          <s.Name>Short Shorties</s.Name>
          <s.Price>45,00zł</s.Price>
          <s.NewArrival>New Arrival</s.NewArrival>
        </s.FavoriteShortWrapper>
        <s.FavoriteShortWrapper>
          <Image
            src={shortShorties}
            alt="Short shorties"
            width={283}
            height={374}
          />
          <s.Name>Mom Shorts</s.Name>
          <s.Price>45,00zł</s.Price>
        </s.FavoriteShortWrapper>
      </s.FavoriteShortsListWrapper>
    </s.FavoriteShortsContainer>
  );
};

export default FavoriteShorts;
