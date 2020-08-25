import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

describe("App", () => {
  it("renders Card component correctly", () => {
    const { getByTestId, rerender } = render(
      <Card title="Temperature">10</Card>
    );
    const title = getByTestId("title");
    const children = getByTestId("children");

    expect(title).toHaveTextContent("Temperature");
    expect(children).toHaveTextContent("10");

    rerender(<Card title="Temperature">20</Card>);
    expect(children).toHaveTextContent("20");
  });
});
