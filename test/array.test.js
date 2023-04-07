test("array", () => {
  const value = ["afif", "rara", "hafizh"];
  expect(value).toEqual(["afif", "rara", "hafizh"]);
  expect(value).toContain("afif");
});

test("array", () => {
  const value = [["satu", "dua", "tiga"], {nama: "Afif"}, {nama: "Rara"}];
  expect(value).toEqual([["satu", "dua", "tiga"], {nama: "Afif"}, {nama: "Rara"}])
  expect(value).toContainEqual(["satu", "dua", "tiga"]);
  expect(value).toContainEqual({nama: "Afif"});
  expect(value).toContainEqual({nama: "Rara"});
});
