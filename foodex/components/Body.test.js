import React from "react";
import { render, screen } from "@testing-library/react";
import Body from "./Body";

describe("Body", () => {
  it("renders restaurant cards from the nested data source", () => {
    render(<Body />);

    expect(screen.getByText(/Adil Hotel/i)).toBeInTheDocument();
  });
});
