import React from "react";
import { render, cleanup } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders app component", () => {
    render(<App />);
  });

  it("render card components", () => {
    const { getByTestId } = render(<App />);
    const cards = getByTestId("card-wrapper");

    expect(cards.children.length).toBe(3);
  });
});
