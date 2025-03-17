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

})