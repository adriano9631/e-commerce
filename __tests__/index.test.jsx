import React from "react";
import { render, screen } from "../test-utils";
import { act } from "react-dom/test-utils";
import Home from "../pages/index";
import * as mockData from "../__mocks__/mockData";
import "intersection-observer";
import userEvent from "@testing-library/user-event";

describe("Homepage", () => {
  beforeEach(() => {
    // jest.useFakeTimers();
    render(
      <Home
        bestSellingProducts={mockData.bestSellingProducts}
        modelsImage={mockData.modelsImage}
        benefitImage={mockData.benefitImage}
        carouselImages={mockData.carouselImages}
        favoriteShorts={mockData.favoriteShorts}
        newArrivalDate={mockData.newArrivalDate}
      />
    );
  });

  afterEach(() => {
    // jest.runOnlyPendingTimers();
    // jest.useRealTimers();
  });
  test("should render two hero images", () => {
    const heroLeft = screen.getByAltText("Fashionably dressed woman");
    const heroRight = screen.getByAltText("Fashionably dressed man");
    expect(heroLeft).toBeInTheDocument();
    expect(heroRight).toBeInTheDocument();
  });
  test("should render 4 cta links", () => {
    const shopWomenLinks = screen.getAllByText("Shop Women");
    const shopMenLinks = screen.getAllByText("Shop Men");
    expect(shopWomenLinks).toHaveLength(2);
    expect(shopMenLinks).toHaveLength(2);
  });
  test("should render 2 hero headings", () => {
    const firstHeading = screen.getByRole("heading", {
      name: "GOODBYE SWEATS, HELLO DENIM",
    });
    const secondHeading = screen.getByRole("heading", {
      name: "Better days are coming, take them on in style.",
    });

    expect(firstHeading).toBeInTheDocument();
    expect(secondHeading).toBeInTheDocument();
  });
  test("should render heading of best sellers products", () => {
    const heading = screen.getByRole("heading", { name: "BEST SELLING DENIM" });
    expect(heading).toBeInTheDocument();
  });
  test("should render best selling products list that contain price, name, image and best seller text", () => {
    for (const product of mockData.bestSellingProducts) {
      const name = screen.getByText(product.name);
      const price = screen.getByText(product.price);
      const link = screen.getByTestId(product.slug);
      expect(price).toBeInTheDocument();
      expect(name).toBeInTheDocument();
      expect(link).toBeInTheDocument();
      for (const image of product.images) {
        const alt = screen.getByAltText(image.alt);
        expect(alt).toBeInTheDocument();
      }
    }
    const bestSellerText = screen.getAllByText("Best Seller");
    expect(bestSellerText).toHaveLength(2);
  });
  test("should render heading, subheading, cta and description of MainSection", () => {
    const heading = screen.getByRole("heading", {
      name: "Comfort Comes in Many Styles",
    });
    const subheading = screen.getByRole("heading", {
      name: "OUR DENIM WILL MAKE WORKING FROM WORK FEEL JUST LIKE WORKING FROM HOME.",
    });
    const description = screen.getByText(
      "I'm a paragraph. Click here to if you want add your own text and edit me. I'm a great place for you to tell a story and let your users know a little more about you."
    );
    const cta = screen.getByRole("link", { name: "Shop All Denim" });

    expect(heading).toBeInTheDocument();
    expect(subheading).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(cta).toBeInTheDocument();
  });
  test("should render models, benefit and carousel images", () => {
    const modelsImage = screen.getByAltText("Two models posing");
    const benefitImage = screen.getByAltText(
      "Model wearing jeans posing in the sand"
    );
    const firstImage = screen.getByAltText(mockData.carouselImages[0].alt);
    expect(firstImage).toBeInTheDocument();

    userEvent.click(screen.getByTestId("secondPictureChangeBtn"));
    act(() => {
      jest.advanceTimersByTime(3100);
    });
    const secondImage = screen.getByAltText(mockData.carouselImages[1].alt);
    expect(secondImage).toBeInTheDocument();

    userEvent.click(screen.getByTestId("thirdPictureChangeBtn"));
    act(() => {
      jest.advanceTimersByTime(3100);
    });
    const thirdImage = screen.getByAltText(mockData.carouselImages[2].alt);
    expect(thirdImage).toBeInTheDocument();

    expect(modelsImage).toBeInTheDocument();
    expect(benefitImage).toBeInTheDocument();
  });
  test("should render heading, cta and description under benefit image", () => {
    const heading = screen.getByRole("heading", {
      name: "EARTH-FRIENDLY AND LASTING",
    });
    const description = screen.getByText(
      "I'm a paragraph. Click here to if you want add your own text and edit me. I'm a great place for you to tell a story and let your users know a little more about you."
    );
    const cta = screen.getByRole("button", { name: "Learn More" });

    expect(heading).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(cta).toBeInTheDocument();
  });
  test("should render heading subheading, cta and description of FavoriteShorts section", () => {
    const heading = screen.getByRole("heading", {
      name: "We Love Denim",
    });
    const subheading = screen.getByRole("heading", {
      name: "OUR FAVOURITE SHORTS MADE FOR THE BEST COMFORT AND STYLE",
    });
    const description = screen.getByText(
      "I'm a paragraph. Click here to if you want add your own text and edit me. I'm a great place for you to tell a story and let your users know a little more about yourself."
    );
    const cta = screen.getByRole("link", { name: "Shop All Denim" });

    expect(heading).toBeInTheDocument();
    expect(subheading).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(cta).toBeInTheDocument();
  });
  test("should render favorite shorts products list that contain price, name, image and new arrival text", () => {
    for (const product of mockData.favoriteShorts) {
      const name = screen.getByText(product.name);
      const price = screen.getByText(product.price);
      const link = screen.getByTestId(product.slug);
      expect(price).toBeInTheDocument();
      expect(name).toBeInTheDocument();
      expect(link).toBeInTheDocument();
      for (const image of product.images) {
        const alt = screen.getByAltText(image.alt);
        expect(alt).toBeInTheDocument();
      }
    }
    const bestSellerText = screen.getAllByText("New Arrival");
    expect(bestSellerText).toHaveLength(2);
  });
  test("should render background image of four models posing", () => {
    const backgroundImage = screen.getByTestId("four models posing");
    expect(backgroundImage).toBeInTheDocument();
  });
});
