test("Find char 'trining' in name 'Nur Ratriningsih'", () => {
  const name = "Nur Ratriningsih";
  expect(name).toMatch(/ningsih/)
})
