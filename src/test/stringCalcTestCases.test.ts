import { addString } from "../stringCalc";

describe("String Calculator Test Cases", () => {

  test("returns 0 when an empty string is given", () => {
    expect(addString("")).toBe(0);
  });

  test("returns the same number when one number is given", () => {
    expect(addString("5")).toBe(5);
  });

  test("returns sum when two numbers are given", () => {
    expect(addString("3, 5")).toBe(8);
  });

  test("returns sum when multiple numbers are given", () => {
    expect(addString("1,2,3,4")).toBe(10);
  });

  test("returns sum when multiple numbers given along with new line as delimiter", () => {
    expect(addString("1\n2,3")).toBe(6);
  });

  test("returns sum when multiple numbers given, and also supporting different delimiters", () => {
    expect(addString("//;\n1;2")).toBe(3);
  });

  test("returns an error for negative numbers", () => {
    expect(() => addString("1,-2,3,-4")).toThrow("Negative numbers not allowed: -2,-4");
  });
})