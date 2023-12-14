import React from "react";
import "../../../../../matchMedia";
import { render, screen } from "@testing-library/react";
import CitiesHomeComponent from "../cities.component";

describe("CitiesHomeComponent", () => {
  it("should render the title", () => {
    render(<CitiesHomeComponent />);
    const title = screen.getByText(
      "The best homes in Lagos, Abuja, PH City & Ibadan"
    );
    expect(title).toBeInTheDocument();
  });

  it("should render the guy component", () => {
    render(<CitiesHomeComponent />);
    const guy = screen.getAllByRole("img");
    expect(guy.some((tag) => expect(tag).toBeInTheDocument()));
  });
});
