import { sum, sumAll } from "../src/sum.js";

test("2 plus 3 is 5", () => {
    expect(sum(2,3)).toBe(5);
});

test("sum all testing", () => {
  expect(sumAll(1,2,3,4,5)).toBe(15);
});
