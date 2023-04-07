import { sum } from "../src/sum";

beforeEach(() => console.log("Before Each"));
afterEach(() => console.log("After Each"));

beforeAll(() => console.log("Before All"));
afterAll(() => console.log("After All"));

test("first test", () => {
  expect(sum(2,3)).toBe(5);
  console.log("First test");
});
test("second test", () => {
  expect(sum(2,3)).toBe(5);
  console.log("Second test");
});
