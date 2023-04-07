import { sayHelloAsync } from "../src/async";

test.concurrent("test concurrent 1", async () => {
  await expect(sayHelloAsync("Rara")).resolves.toBe("Hello Rara");
});
test.concurrent("test concurrent 2", async () => {
  await expect(sayHelloAsync("Rara")).resolves.toBe("Hello Rara");
});
test.concurrent("test concurrent 3", async () => {
  expect(await sayHelloAsync("Rara")).toBe("Hello Rara");
});
test.concurrent("test concurrent 4", async () => {
  expect(await sayHelloAsync("Rara")).toBe("Hello Rara");
});
test.concurrent("test concurrent 5", async () => {
  expect(await sayHelloAsync("Rara")).toBe("Hello Rara");
});
