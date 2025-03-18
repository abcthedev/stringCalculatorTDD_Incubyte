import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import StringCalculator from '../components/StringCalculator';

describe("Calculator Component", () => {
    it("should display the input field and calculate button", () => {
        render(<StringCalculator />);

        const element = screen.getByText('String Calculator')
        expect(element).toBeInTheDocument()
    });
});
