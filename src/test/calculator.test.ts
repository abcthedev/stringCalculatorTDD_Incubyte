import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Calculator from "./Calculator";

describe("Calculator Component", () => {
  test("renders the input field and calculate button", () => {
    render(<Calculator />);
    
    expect(screen.getByPlaceholderText("Enter numbers...")).toBeInTheDocument();
    expect(screen.getByText("Calculate")).toBeInTheDocument();
  });
});
