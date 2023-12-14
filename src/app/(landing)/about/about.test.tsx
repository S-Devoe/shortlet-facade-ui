import React from "react";
import { render, screen } from "@testing-library/react";
import About from "./page";

describe("About Page", () => {
  it("should render the page title", () => {
    render(<About />);
    const pageTitleElement = screen.getByText(
      "Hassle-free holiday homes & shortstays for"
    );
    expect(pageTitleElement).toBeInTheDocument();
  });
});
