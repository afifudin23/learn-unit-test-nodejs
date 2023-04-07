import { sayHelloAsync } from "../src/async";

test("test async function", async () => {
  try {
    var value1 = await sayHelloAsync();
  } catch (err) {
    var value1 = err;
  }
  try {
    var value2 = await sayHelloAsync("Afif");
  } catch (err) {
    var value2 = err;
  }

  expect(value1).toBe("Name is empty");
  expect(value2).toBe("Hello Afif");

});

 
