import React from "react";
import { render, screen } from "../test-utils";
import Women from "../pages/women";
import * as mockData from "../__mocks__/mockData";
import "intersection-observer";
import userEvent from "@testing-library/user-event";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe("Womenpage", () => {
  const checkSortedProducts = (sortType, sortTypeLinkText) => {
    const sortByBtn = screen.getByRole("button", { name: "Sort by" });
    userEvent.click(sortByBtn);

    useRouter.mockImplementationOnce(() => ({
      query: { sort: sortType },
      asPath: "/",
    }));
    const sortTypeLink = screen.getByRole("link", { name: sortTypeLinkText });
    userEvent.click(sortTypeLink);
    const sortedProducts = screen.getAllByTestId("name");

    const firstProduct = sortedProducts[0];
    const secondProduct = sortedProducts[1];
    const thirdProduct = sortedProducts[2];

    if (sortType === "newest") {
      expect(firstProduct).toHaveTextContent("Pastel Jacket");
      expect(secondProduct).toHaveTextContent("Short Shorties");
      expect(thirdProduct).toHaveTextContent("Distressed Jean");
    }
    if (sortType === "price_ascending") {
      expect(firstProduct).toHaveTextContent("Short Shorties");
      expect(secondProduct).toHaveTextContent("Pastel Jacket");
      expect(thirdProduct).toHaveTextContent("Distressed Jean");
    }
    if (sortType === "price_descending") {
      expect(firstProduct).toHaveTextContent("Distressed Jean");
      expect(secondProduct).toHaveTextContent("Pastel Jacket");
      expect(thirdProduct).toHaveTextContent("Short Shorties");
    }
    if (sortType === "name_ascending") {
      expect(firstProduct).toHaveTextContent("Distressed Jean");
      expect(secondProduct).toHaveTextContent("Pastel Jacket");
      expect(thirdProduct).toHaveTextContent("Short Shorties");
    }

    if (sortType === "name_descending") {
      expect(firstProduct).toHaveTextContent("Short Shorties");
      expect(secondProduct).toHaveTextContent("Pastel Jacket");
      expect(thirdProduct).toHaveTextContent("Distressed Jean");
    }
  };
  beforeEach(() => {
    render(
      <Women
        allProducts={mockData.womenProducts}
        modelsImages={mockData.womenModelsImages}
      />
    );
  });

  test("should render women products list that contain price, name and image ", () => {
    for (const product of mockData.womenProducts) {
      const name = screen.getByText(product.name);
      const price = screen.getByText(product.price);
      const link = screen.getByTestId(`${product.slug}`);
      expect(price).toBeInTheDocument();
      expect(name).toBeInTheDocument();
      expect(link).toBeInTheDocument();
      for (const image of product.images) {
        const alt = screen.getByAltText(image.alt);
        expect(alt).toBeInTheDocument();
      }
    }
  });

  test("should render women products list, when sorted by newest", () => {
    checkSortedProducts("newest", "Newest");
  });
  test("should render women products list, when sorted by price (from lowest to highest)", () => {
    checkSortedProducts("price_ascending", "Price (from lowest to highest)");
  });
  test("should render women products list, when sorted by price (from highest to lowest)", () => {
    checkSortedProducts("price_descending", "Price (from highest to lowest)");
  });
  test("should render women products list, when sorted by name (from lowest to highest)", () => {
    checkSortedProducts("name_ascending", "Name A-Z");
  });
  test("should render women products list, when sorted by name (from highest to lowest)", () => {
    checkSortedProducts("name_descending", "Name Z-A");
  });

  test("should render products list, when collection is provided", () => {
    const collectionBtn = screen.getByRole("button", { name: "Collection" });
    useRouter.mockImplementationOnce(() => ({
      query: { collection: mockData.womenProducts[0].productType },
      asPath: "/",
    }));
    const collectionTypeBtn = screen.getByRole("link", {
      name: mockData.womenProducts[0].productType,
    });

    userEvent.click(collectionBtn);
    userEvent.click(collectionTypeBtn);
    const productsListLength = screen.getAllByTestId("name").length;
  });

  test("should render products list, when collection is all", () => {
    useRouter.mockImplementationOnce(() => ({
      query: { collection: "all" },
      asPath: "/",
    }));

    const collectionBtn = screen.getByRole("button", { name: "Collection" });
    const collectionTypeBtn = screen.getByRole("link", { name: "All" });
    userEvent.click(collectionBtn);
    userEvent.click(collectionTypeBtn);
    const productsListLength = screen.getAllByTestId("name").length;
    expect(productsListLength).toBe(3);
  });
});
