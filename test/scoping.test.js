import { sum } from "../src/sum";

beforeEach(() => console.log("Before Each Outer"));
afterEach(() => console.log("After Each Outer"));

beforeAll(() => console.log("Before All Outer"));
afterAll(() => console.log("After All Outer")); 

test("first test", () => {
  expect(sum(2,3)).toBe(5);
  console.log("First test Outer");
});
describe("Inner test", () => {
  beforeAll(() => console.log("Before All Inner"));
  afterAll(() => console.log("After All Inner")); 

  beforeEach(() => console.log("Before Each Inner"));
  afterEach(() => console.log("After Each Inner"));

  test("second test", () => {
    expect(sum(2,3)).toBe(5);
    console.log("Second test Inner");
  });
});
