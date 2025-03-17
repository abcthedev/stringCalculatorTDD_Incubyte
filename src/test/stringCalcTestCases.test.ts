import { addString } from "../stringCalc";

describe("String Calculator Test Cases", () => {

  test("returns 0 when an empty string is given", () => {
    expect(addString("")).toBe(0);
  });

})