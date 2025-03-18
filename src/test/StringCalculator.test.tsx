import { fireEvent, render, screen } from "@testing-library/react";
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

    it("should display the sum when user enters numbers and clicks calculate", () => {
        render(<StringCalculator />);

        const inputElement = screen.getByPlaceholderText("Enter numbers...");
        const btnElement = screen.getByText("Calculate");

        fireEvent.change(inputElement, { target: { value: "1,2,3" } });
        fireEvent.click(btnElement);

        const output = screen.getByText("Result : 6")
    
        expect(output).toBeInTheDocument();
    });

    it("should display error message when input contains negative numbers", () => {
        render(<StringCalculator />);
        
        const inputElement = screen.getByPlaceholderText("Enter numbers...");
        const btnElement = screen.getByText("Calculate");

        fireEvent.change(inputElement, { target: { value: "1,-2,3,-4" } });
        fireEvent.click(btnElement);

        const output = screen.getByText("Negative numbers not allowed: -2,-4")
      
        expect(output).toBeInTheDocument();
      });
      
});
