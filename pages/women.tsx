import React, { FC, useEffect, useRef, useState } from "react";
import { request } from "lib/api/datocms";
import * as queries from "lib/api//queries";
import * as s from "styles/women.style";
import Link from "next/link";
import { useRouter } from "next/router";
// import Slider from "@mui/material/Slider";

type WomenProps = {
  allProducts: {
    id: string;
    name: string;
    price: string;
    productType: string;
    slug: string;
    images: {
      url: string;
      alt: string;
    }[];
    _createdAt: Date;
  }[];
  femaleModelsImages: {
    firstImage: {
      url: string;
      alt: string;
    };
    secondImage: {
      url: string;
      alt: string;
    };
  };
};

const Women: FC<WomenProps> = ({ allProducts, femaleModelsImages }) => {
  const router = useRouter();
  const scrollHeightRef1 = useRef<HTMLDivElement>(null);
  const scrollHeightRef2 = useRef<HTMLDivElement>(null);
  const [height1, setHeight1] = useState<number | undefined>(0);
  const [height2, setHeight2] = useState<number | undefined>(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentProductsList, setCurrentProductsList] = useState(allProducts);
  const [value, setValue] = React.useState<number[]>([45, 99]);

  const uniqueProductTypes = Array.from(
    new Set(allProducts.map((product) => product.productType))
  );
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  function valuetext(value: number) {
    return `${value}, 00zł`;
  }

  const defaultImages = currentProductsList.map((product) => {
    return product.images[0].url;
  });
  console.log(decodeURIComponent(router.asPath));
  console.log(decodeURI(router.asPath));


  const [productImages, setProductImages] = useState(defaultImages);
  useEffect(() => {
    if (router.query.Collection) {
      const newProducts = allProducts.filter(
        (product) => product.productType === router.query.Collection
      );
      setCurrentProductsList(newProducts);
      const defaultImages = newProducts.map((product) => {
        return product.images[0].url;
      });
      setProductImages(defaultImages);
    } else {
      const defaultImages = allProducts.map((product) => {
        return product.images[0].url;
      });
      setProductImages(defaultImages);
      setCurrentProductsList(allProducts);
    }
  }, [router.query.Collection]);

  const handleCollapsible = (
    height: number | undefined,
    scrollHeight: number | undefined,
    setHeight: React.Dispatch<React.SetStateAction<number | undefined>>
  ) => {
    if (height === 0) {
      setHeight(scrollHeight);
    } else {
      setHeight(0);
    }
  };
  const handleChangeToSecondImage = (image: string, index: number) => {
    const newImages = [...productImages];
    if (image) {
      newImages[index] = image;
    }
    setProductImages(newImages);
  };

  const handleChangeToFirstImage = (image: string, index: number) => {
    const newImages = [...productImages];
    newImages[index] = image;
    setProductImages(newImages);
  };

  return (
    <s.WomenPageContainer>
      <s.WomenModelsImagesWrapper>
        <s.ColumnWrapper>
          <s.HeadingsWrapper>
            <s.Title>SHOP WOMEN</s.Title>
            <s.Description>
              {`I'm a paragraph. Click here to add your own text and edit me. I’m a
            great place for you to tell a story and let your users know a little
            more about you.`}
            </s.Description>
          </s.HeadingsWrapper>
        </s.ColumnWrapper>
        <s.FirstImageWrapper>
          <s.FirstImage
            src={femaleModelsImages.firstImage.url}
            alt={femaleModelsImages.firstImage.alt}
            layout="fill"
          />
        </s.FirstImageWrapper>
        <s.SecondImageWrapper>
          <s.SecondImage
            src={femaleModelsImages.secondImage.url}
            alt={femaleModelsImages.secondImage.alt}
            layout="fill"
          />
          <s.WritingArea>
            <s.WritingAreaText>WHEN BUYING 3 ITEMS OR MORE</s.WritingAreaText>
          </s.WritingArea>
          <s.CouponIconWrapper>
            <s.SpecialOfferText>FREE SHIPPING</s.SpecialOfferText>
            <s.CouponIcon />
          </s.CouponIconWrapper>
        </s.SecondImageWrapper>
      </s.WomenModelsImagesWrapper>
      <s.MainSection>
        <s.LeftColumn>
          <s.FilterTitle>Filter By</s.FilterTitle>
          <ul>
            <s.CollapsibleWrapper>
              <s.CollapsibleBtn
                onClick={() =>
                  handleCollapsible(
                    height1,
                    scrollHeightRef1?.current?.scrollHeight,
                    setHeight1
                  )
                }
              >
                <s.CollectionText>Collection</s.CollectionText>
                {height1 ? <s.CollapseIcon /> : <s.ExpandIcon />}
              </s.CollapsibleBtn>

              <s.CollapsibleContent height={height1} ref={scrollHeightRef1}>
                <s.OptionsWrapper>
                  <li>
                    <Link href="/women" passHref>
                      <s.CollectionOptionLink
                        isActive={router.asPath === "/women" ? true : false}
                      >
                        All
                      </s.CollectionOptionLink>
                    </Link>
                  </li>
                  {uniqueProductTypes.map((productType) => (
                    <li key={productType}>
                      <Link href={`/women?Collection=${productType}`} passHref>
                        <s.CollectionOptionLink
                          isActive={
                            decodeURIComponent(router.asPath) ===
                            `/women?Collection=${productType}`
                              ? true
                              : false
                          }
                        >
                          {productType}
                        </s.CollectionOptionLink>
                      </Link>
                    </li>
                  ))}
                </s.OptionsWrapper>
              </s.CollapsibleContent>
            </s.CollapsibleWrapper>
            <s.CollapsibleWrapper>
              <s.CollapsibleBtn
                onClick={() =>
                  handleCollapsible(
                    height2,
                    scrollHeightRef2?.current?.scrollHeight,
                    setHeight2
                  )
                }
              >
                <s.PriceText>Price</s.PriceText>
                {height2 ? <s.CollapseIcon /> : <s.ExpandIcon />}
              </s.CollapsibleBtn>
              <s.CollapsibleContent height={height2} ref={scrollHeightRef2}>
                <s.PriceSlider
                  getAriaLabel={() => "Price range"}
                  value={value}
                  onChange={handleChange}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="on"
                  valueLabelFormat={(value) => `${value}zł`}
                  min={45}
                  max={99}
                />
              </s.CollapsibleContent>
            </s.CollapsibleWrapper>
          </ul>
        </s.LeftColumn>
        <s.RightColumn>
          <div style={{ position: "relative" }}>
            <s.SortByBtn onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <span>Sort by</span>
              {isDropdownOpen ? <s.ArrowUpIcon /> : <s.ArrowDownIcon />}
            </s.SortByBtn>
            <s.SortByDropdown isDropdownOpen={isDropdownOpen}>
              <li onClick={() => setIsDropdownOpen(false)}>
                <Link href="/women" passHref>
                  <s.DropdownOptionLink
                    isActive={router.pathname === "/women" ? true : false}
                  >
                    Sort By
                  </s.DropdownOptionLink>
                </Link>
              </li>
              <li onClick={() => setIsDropdownOpen(false)}>
                <Link href="/women" passHref>
                  <s.DropdownOptionLink>Newest</s.DropdownOptionLink>
                </Link>
              </li>
              <li onClick={() => setIsDropdownOpen(false)}>
                <Link href="/women" passHref>
                  <s.DropdownOptionLink>
                    Price (from lowest to highest)
                  </s.DropdownOptionLink>
                </Link>
              </li>
              <li onClick={() => setIsDropdownOpen(false)}>
                <Link href="/women" passHref>
                  <s.DropdownOptionLink>
                    Price (from highest to lowest)
                  </s.DropdownOptionLink>
                </Link>
              </li>
              <li onClick={() => setIsDropdownOpen(false)}>
                <Link href="/women" passHref>
                  <s.DropdownOptionLink>Name A-Z</s.DropdownOptionLink>
                </Link>
              </li>
              <li onClick={() => setIsDropdownOpen(false)}>
                <Link href="/women" passHref>
                  <s.DropdownOptionLink>Name Z-A</s.DropdownOptionLink>
                </Link>
              </li>
            </s.SortByDropdown>
          </div>
          <s.ProductsList>
            {currentProductsList.map((product, index) => (
              <s.ProductWrapper key={product.id}>
                <s.ProductImage
                  src={productImages[index]}
                  onMouseOver={() =>
                    handleChangeToSecondImage(product.images[1]?.url, index)
                  }
                  onMouseOut={() =>
                    handleChangeToFirstImage(product.images[0].url, index)
                  }
                  width={168}
                  height={215}
                  alt={product.images[0].alt}
                />
                <s.Name>{product.name}</s.Name>
                <s.Price>{product.price}</s.Price>
              </s.ProductWrapper>
            ))}
          </s.ProductsList>
        </s.RightColumn>
      </s.MainSection>
    </s.WomenPageContainer>
  );
};

export async function getStaticProps() {
  const data1 = await request({ query: queries.allProductsQuery });
  const data2 = await request({ query: queries.femaleModelsImagesQuery });

  return {
    props: {
      allProducts: data1.allProducts,
      femaleModelsImages: data2.womenpage,
    },
    revalidate: 60,
  };
}

export default Women;
