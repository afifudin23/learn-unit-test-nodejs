import { sayHello } from "../src/sayHelo";

test("sayHello success", () => {
  expect(sayHello("Rara")).toBe("Hello Rara");
});
test.failing("sayHello error with failing", () => {
  sayHello(null);
});
test("sayHello error with toThrow", () => {
  expect(() => sayHello(null)).toThrow(Error);
});
