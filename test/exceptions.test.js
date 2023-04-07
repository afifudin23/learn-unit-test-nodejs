import { MyExceptions, callme } from "../src/exceptions";

test("Error if name 'Rara'", () => {
  expect(() => callme("Rara")).toThrow();
  expect(() => callme("Rara")).toThrow(MyExceptions);
  expect(() => callme("Rara")).toThrow("Upss her my girlfriend");

});
test("If params name else 'Rara'", () => {
  expect(callme("Afif")).toBe("OK!");
});
