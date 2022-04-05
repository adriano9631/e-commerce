import React, { FC, useEffect, useRef, useState } from "react";
import * as s from "./Products.style";
import Link from "next/link";
import { useRouter } from "next/router";
import sortProducts from "lib/utils/sortProducts";

export type ProductsProps = {
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
    _createdAt: string;
  }[];
  modelsImages: {
    firstImage: {
      url: string;
      alt: string;
    };
    secondImage: {
      url: string;
      alt: string;
    };
  };
  collection: "MEN" | "WOMEN" | null;
  isAllProducts?: boolean;
};

const Products: FC<ProductsProps> = ({
  allProducts,
  modelsImages,
  isAllProducts,
  collection,
}) => {
  const router = useRouter();
  const [hoveredImgSlug, setHoveredImgSlug] = useState("");
  const scrollHeightRef1 = useRef<HTMLDivElement>(null);
  const scrollHeightRef2 = useRef<HTMLDivElement>(null);
  const [height1, setHeight1] = useState<number | undefined>(0);
  const [height2, setHeight2] = useState<number | undefined>(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [filterName, setFilterName] = useState("Sort by");
  const [currentProductsList, setCurrentProductsList] = useState(allProducts);
  const [price, setPrice] = useState<number[]>([]);
  const [productsBeforePriceChange, setProductsBeforePriceChange] = useState<
    {
      id: string;
      name: string;
      price: string;
      productType: string;
      slug: string;
      images: { url: string; alt: string }[];
      _createdAt: string;
    }[]
  >(allProducts);


  const uniqueProductTypes = Array.from(
    new Set(allProducts.map((product) => product.productType))
  );

  useEffect(() => {
    const minPrice = Math.min(
      ...allProducts.map((product) => parseInt(product.price))
    );
    const maxPrice = Math.max(
      ...allProducts.map((product) => parseInt(product.price))
    );
    setPrice([minPrice, maxPrice]);
  }, []);

  const handlePriceChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setPrice([Math.min(newValue[0], price[1] - 1), price[1]]);
    } else {
      setPrice([price[0], Math.max(newValue[1], price[0] + 1)]);
    }
  };

  function formatPrice(price: number) {
    return `${price}, 00zł`;
  }

  useEffect(() => {
    if (router.query?.sort) {
      let newCurrentProductsList = [...currentProductsList];
      sortProducts(router.query.sort, newCurrentProductsList);
      setCurrentProductsList(newCurrentProductsList);
      setProductsBeforePriceChange(newCurrentProductsList);
    }
  }, [router.query?.sort]);

  useEffect(() => {
    const minPrice = price[0];
    const maxPrice = price[1];
    const filteredProductsList = productsBeforePriceChange.filter((product) => {
      if (
        parseInt(product.price) >= minPrice &&
        parseInt(product.price) <= maxPrice
      ) {
        return product;
      }
    });
    setCurrentProductsList(filteredProductsList);
  }, [price]);

  useEffect(() => {
    if (router.query?.collection) {
      let newProducts;
      if (router.query.collection === "all") {
        newProducts = [...allProducts];
      } else {
        newProducts = allProducts.filter(
          (product) => product.productType === router.query.collection
        );
      }
      if (router.query.sort) {
        sortProducts(router.query.sort, newProducts);
      }

      const minPrice = Math.min(
        ...newProducts.map((product) => parseInt(product.price))
      );
      const maxPrice = Math.max(
        ...newProducts.map((product) => parseInt(product.price))
      );
      setPrice([minPrice, maxPrice]);

      setCurrentProductsList(newProducts);
      setProductsBeforePriceChange(newProducts);
    }
  }, [router.query?.collection]);

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

  const handleSortFilterChange = (filterName: string) => {
    setIsDropdownOpen(false);
    setFilterName(filterName);
  };

  return (
    <s.WomenPageContainer>
      {!isAllProducts && (
        <s.WomenModelsImagesWrapper>
          <s.ColumnWrapper>
            <s.HeadingsWrapper>
              <s.Title>SHOP {collection}</s.Title>
              <s.Description>
                {`I'm a paragraph. Click here to add your own text and edit me. I’m a
            great place for you to tell a story and let your users know a little
            more about you.`}
              </s.Description>
            </s.HeadingsWrapper>
          </s.ColumnWrapper>
          <s.FirstImageWrapper>
            <s.FirstImage
              src={modelsImages.firstImage.url}
              alt={modelsImages.firstImage.alt}
              layout="fill"
              objectFit="cover"
              // objectPosition="50% 40px"
            />
          </s.FirstImageWrapper>
          <s.SecondImageWrapper>
            <s.SecondImage
              src={modelsImages.secondImage.url}
              alt={modelsImages.secondImage.alt}
              layout="fill"
              objectFit="cover"
              objectPosition={
                collection === "WOMEN" ? "50% 40px" : "50% 100px"
              }
            />
            <s.WritingArea>
              <s.WritingAreaText>WHEN BUYING 3 ITEMS OR MORE</s.WritingAreaText>
            </s.WritingArea>
            <s.CouponIconWrapper>
              <s.SpecialOfferText>FREE SHIPPING</s.SpecialOfferText>
              <s.CouponIcon src="/icons/discount-part-2.svg" />
            </s.CouponIconWrapper>
          </s.SecondImageWrapper>
        </s.WomenModelsImagesWrapper>
      )}
      <s.MainSection>
        <s.LeftColumn>
          <s.FilterWrapper>
            <s.FilterTitle>Filter By</s.FilterTitle>
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
                {height1 ? (
                  <s.CollapseIcon src="/icons/minus.svg" />
                ) : (
                  <s.ExpandIcon src="/icons/plus.svg" />
                )}
              </s.CollapsibleBtn>

              <s.CollapsibleContent height={height1} ref={scrollHeightRef1}>
                <s.OptionsWrapper>
                  <li>
                    <Link
                      href={{
                        pathname: router.pathname,
                        query: { ...router.query, collection: "all" },
                      }}
                      scroll={false}
                      passHref
                    >
                      <s.CollectionOptionLink
                        isActive={
                          router.asPath.includes("all") ||
                          router.asPath === "/women"
                            ? true
                            : false
                        }
                      >
                        All
                      </s.CollectionOptionLink>
                    </Link>
                  </li>

                  {uniqueProductTypes.map((productType) => (
                    <li key={productType}>
                      <Link
                        href={{
                          pathname: router.pathname,
                          query: { ...router.query, collection: productType },
                        }}
                        scroll={false}
                        passHref
                      >
                        <s.CollectionOptionLink
                          isActive={decodeURIComponent(router.asPath)
                            .replace(/\+/g, " ")
                            .includes(`Collection=${productType}`)}
                        >
                          {productType}
                        </s.CollectionOptionLink>
                      </Link>
                    </li>
                  ))}
                </s.OptionsWrapper>
              </s.CollapsibleContent>
            </s.CollapsibleWrapper>
            {price[0] !== price[1] && (
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
                  {height2 ? (
                    <s.CollapseIcon src="/icons/minus.svg" />
                  ) : (
                    <s.ExpandIcon src="/icons/plus.svg" />
                  )}
                </s.CollapsibleBtn>
                <s.CollapsibleContent height={height2} ref={scrollHeightRef2}>
                  <s.PriceSlider
                    getAriaLabel={() => "Price range"}
                    value={price}
                    onChange={handlePriceChange}
                    getAriaValueText={formatPrice}
                    valueLabelDisplay="on"
                    valueLabelFormat={(price) => `${price}zł`}
                    disableSwap
                    min={Math.min(
                      ...productsBeforePriceChange.map((product) =>
                        parseInt(product.price)
                      )
                    )}
                    max={Math.max(
                      ...productsBeforePriceChange.map((product) =>
                        parseInt(product.price)
                      )
                    )}
                  />
                </s.CollapsibleContent>
              </s.CollapsibleWrapper>
            )}
          </s.FilterWrapper>
        </s.LeftColumn>
        <s.RightColumn>
          <s.SortByWrapper
            style={{
              position: "absolute",
              minWidth: "200px",
              display: "inline-block",
              top: 0,
              right: 0,
            }}
          >
            <s.SortByBtn onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <span>{filterName}</span>
              {isDropdownOpen ? (
                <s.ArrowUpIcon src="/icons/dropdown-arrow-up.svg" />
              ) : (
                <s.ArrowDownIcon src="/icons/dropdown-arrow-down.svg" />
              )}
            </s.SortByBtn>
            <s.SortByDropdown isDropdownOpen={isDropdownOpen}>
              <li onClick={() => handleSortFilterChange("Newest")}>
                <Link
                  href={{
                    pathname: router.pathname,
                    query: { ...router.query, sort: "newest" },
                  }}
                  scroll={false}
                  passHref
                >
                  <s.DropdownOptionLink
                    isActive={decodeURIComponent(router.asPath).includes(
                      `sort=newest`
                    )}
                  >
                    Newest
                  </s.DropdownOptionLink>
                </Link>
              </li>
              <li
                onClick={() =>
                  handleSortFilterChange("Price (from lowest to highest)")
                }
              >
                <Link
                  href={{
                    pathname: router.pathname,
                    query: { ...router.query, sort: "price_ascending" },
                  }}
                  scroll={false}
                  passHref
                >
                  <s.DropdownOptionLink
                    isActive={decodeURIComponent(router.asPath).includes(
                      `sort=price_ascending`
                    )}
                  >
                    Price (from lowest to highest)
                  </s.DropdownOptionLink>
                </Link>
              </li>
              <li
                onClick={() =>
                  handleSortFilterChange("Price (from highest to lowest)")
                }
              >
                <Link
                  href={{
                    pathname: router.pathname,
                    query: { ...router.query, sort: "price_descending" },
                  }}
                  scroll={false}
                  passHref
                >
                  <s.DropdownOptionLink
                    isActive={decodeURIComponent(router.asPath).includes(
                      `sort=price_descending`
                    )}
                  >
                    Price (from highest to lowest)
                  </s.DropdownOptionLink>
                </Link>
              </li>

              <li onClick={() => handleSortFilterChange("Name A-Z")}>
                <Link
                  href={{
                    pathname: router.pathname,
                    query: { ...router.query, sort: "name_ascending" },
                  }}
                  scroll={false}
                  passHref
                >
                  <s.DropdownOptionLink
                    isActive={decodeURIComponent(router.asPath).includes(
                      `sort=name_ascending`
                    )}
                  >
                    Name A-Z
                  </s.DropdownOptionLink>
                </Link>
              </li>
              <li onClick={() => handleSortFilterChange("Name Z-A")}>
                <Link
                  href={{
                    pathname: router.pathname,
                    query: { ...router.query, sort: "name_descending" },
                  }}
                  scroll={false}
                  passHref
                >
                  <s.DropdownOptionLink
                    isActive={decodeURIComponent(router.asPath).includes(
                      `sort=name_descending`
                    )}
                  >
                    Name Z-A
                  </s.DropdownOptionLink>
                </Link>
              </li>
            </s.SortByDropdown>
          </s.SortByWrapper>
          <s.ProductsList>
            {currentProductsList.map((product) => (
              <s.ProductWrapper key={product.id}>
                <Link href={`/product/${product.slug}`}>
                  <a data-testid={`${product.slug}`}>
                    <s.ProductImage
                      onMouseOver={() => setHoveredImgSlug(product.slug)}
                      onMouseOut={() => setHoveredImgSlug("")}
                      src={
                        hoveredImgSlug === product.slug && product.images[1]
                          ? product.images[1].url
                          : product.images[0].url
                      }
                      width={168}
                      height={215}
                      alt={product.images[0].alt}
                    />
                    <s.Name data-testid="name">{product.name}</s.Name>
                    <s.Price>{product.price}</s.Price>
                  </a>
                </Link>
              </s.ProductWrapper>
            ))}
            {currentProductsList.length === 0 && (
              <p style={{ margin: "150px auto" }}>
                There is no product that matches the search criteria
              </p>
            )}
          </s.ProductsList>
        </s.RightColumn>
      </s.MainSection>
    </s.WomenPageContainer>
  );
};

export default Products;
