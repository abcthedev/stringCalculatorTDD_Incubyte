import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import StringCalculator from '../components/StringCalculator';

describe("Calculator Component", () => {
    it("should display the title", () => {
        render(<StringCalculator />);

        const element = screen.getByText('String Calculator')
        expect(element).toBeInTheDocument()
    });

    it("should display the input field and calculate button", () => {
        render(<StringCalculator />);

        const inputElement = screen.getByPlaceholderText("Enter numbers...");
        const btnElement = screen.getByText("Calculate");
        expect(inputElement).toBeInTheDocument();
        expect(btnElement).toBeInTheDocument();
    });

});
