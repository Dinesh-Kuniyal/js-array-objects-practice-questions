// groupByDate([{ date: '2024-01-01', value: 10 },
// { date: '2024-01-01', value: 20 },
// { date: '2024-01-02', value: 30 }])
// => { '2024-01-01': [10, 20], '2024-01-02': [30] }

const groupByDate = function (records) {
  return records.reduce((group, { date, value }) => {

    const newGroup = { ...group };
    const existingValue = (date in newGroup && newGroup[date]) || [];

    newGroup[date] = [...existingValue, value];

    return newGroup;
  }, {});
};

console.log(groupByDate([
  { date: '2024-01-01', value: 10 },
  { date: '2024-01-01', value: 20 },
  { date: '2024-01-02', value: 30 }
]));

console.log(groupByDate([
  { date: '2024-01-01', value: 10 },
  { date: '2024-01-01', value: 20 },
  { date: '2024-01-01', value: 30 }
]));

console.log = function () { };

// findMinMax([1, 2, 3, 4, 5]) => { min: 1, max: 5 }
const findMinMax = function (numbers) {
  return numbers.reduce(function ({ min, max }, number) {
    return {
      min: Math.min(number, min),
      max: Math.max(number, max)
    };

  }, { min: +Infinity, max: -Infinity });
};

console.log(findMinMax([]));
console.log(findMinMax([5, 5, 6]));
console.log(findMinMax([5, 5, 5]));
console.log(findMinMax([1, 2, 3, 4, 5]));

// sumByCategory([{ category: 'A', value: 10 }, 
// { category: 'B', value: 20 }, { category: 'A', value: 30 }]) 
// => { A: 40, B: 20 }

const sumByCategory = function (items) {
  return items.reduce(function (categoriesSum, item) {

    const newSum = { ...categoriesSum };
    const categorySum = (item.category in newSum && newSum[item.category]) || 0;
    newSum[item.category] = item.value + categorySum;

    return newSum;
  }, {});
};

console.log(sumByCategory([
  { category: 'A', value: 10 },
  { category: 'B', value: 20 },
  { category: 'A', value: 30 }
]));

console.log(sumByCategory([
  { category: 'A', value: 10 },
  { category: 'B', value: 20 },
  { category: 'C', value: 40 }
]));