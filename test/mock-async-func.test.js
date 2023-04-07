import { getBalance } from "../src/async";

// Resolved
test("mock async function resolved", async () => {
  const from = jest.fn().mockResolvedValueOnce(1000);
  await expect(getBalance("Afif", from)).resolves
    .toEqual({name: "Afif", balance: 1000});
  await expect(from.mock.calls.length).toBe(1);
  await expect(from.mock.results[0].value).resolves.toBe(1000);
});

// Rejected
test.failing("mock async function rejected", async () => {
  const from = jest.fn().mockRejectedValueOnce(new Error("Upss This Mock Fail !"));
  await getBalance("Afif", from);
})

test("mock async function error matchers", async () => {
  const from = jest.fn().mockRejectedValueOnce(new Error("kiw"));
  expect(getBalance("Afif", from)).rejects.toThrow(Error);
});
