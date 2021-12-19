import React from "react";
import { render, fireEvent, screen } from "../test-utils";
import Home from "../pages/index";
import * as mockData from "../__mocks__/mockData";
import "intersection-observer";

beforeAll(() => {
  render(<Home bestSellingProducts={mockData.bestSellingProducts} />);
});

describe("Home", () => {
  it("renders a heading", () => {
    // const heading = screen.queryByRole("heading", {
    //   name: "BEST SELLING DENIM",
    // });

    // expect(heading).toBeInTheDocument();
  });
});
