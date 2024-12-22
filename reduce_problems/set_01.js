// sumByCategory([{ category: 'A', value: 10 }, 
// { category: 'B', value: 20 }, { category: 'A', value: 30 }]) 
// => { A: 40, B: 20 }

const sumByCategory = function (items) {
  const defaultValue = {};

  return items.reduce(function (categoriesSum, item) {

    const newSum = { ...categoriesSum };
    const categorySum = (item.category in newSum && newSum[item.category]) || 0;
    newSum[item.category] = item.value + categorySum;

    return newSum;
  }, defaultValue);
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