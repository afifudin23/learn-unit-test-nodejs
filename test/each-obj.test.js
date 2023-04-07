 const sumAll = (numbers) => {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
};

const table = [
  {
     numbers: [10, 10, 10],
     expected : 30
  },
  {
     numbers: [10, 10, 10, 10, 10],
     expected : 50
  }, 
  {
     numbers: [10, 10, 10, 10, 10, 10, 10],
     expected : 70
  }
]


test.each(table)("test sumAll($numbers) should result $expected", ({numbers, expected}) => {
  expect(sumAll(numbers)).toBe(expected);
});

