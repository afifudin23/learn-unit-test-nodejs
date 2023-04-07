 const sumAll = (numbers) => {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
};


const table = [,
  [
     [10, 10, 10],
     30
  ],
  [
     [10, 10, 10, 10, 10],
     50
  ],
  [
     [10, 10, 10, 10, 10, 10, 10],
     70
  ]
];

test.each(table)("test sumAll(%s) should result %i", (numbers, expected) => {
  expect(sumAll(numbers)).toBe(expected);
});
