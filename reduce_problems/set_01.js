// mergeConsecutiveDuplicates([1,1,1,2,3,3,4]) => [1,2,3,4]
const mergeConsecutiveDuplicates = function (array) {
  return array.reduce(function (uniques, number) {

    return uniques.at(-1) !== number ? [...uniques, number] : uniques;
  }, []);
};

console.log(mergeConsecutiveDuplicates([1, 1, 1, 2, 3, 3, 4]));
console.log(mergeConsecutiveDuplicates([0, 1, 1, 1, 2, 3, 3, 4]));

console.log = () => { };

// longestConsecutiveSubsequence([1, 2, 0, 1, 3, 4, 5]) => [0, 1, 2, 3, 4, 5]
const createSubsequence = function (seq, number) {
  const sequence = { ...seq };
  const lastElement = seq.currentSequence ? seq.currentSequence.at(-1) : 0;

  if (number > lastElement) {
    sequence.currentSequence = [...sequence.currentSequence, number];

    if (sequence.currentSequence.length > sequence.largestSequence.length) {
      sequence.largestSequence = sequence.currentSequence;
    }

    return sequence;
  }

  return {
    largestSequence: sequence.largestSequence, currentSequence: [number]
  };
};

const longestConsecutiveSubsequence = function (numbers) {
  const defaultValue = { largestSequence: [], currentSequence: [] };

  return numbers.reduce(createSubsequence, defaultValue).largestSequence;
};

console.log(longestConsecutiveSubsequence([1, 2, 0, 1, 3, 4, 5]));
console.log(longestConsecutiveSubsequence([1, 2, 3, 4, 5, 6, 1, 3, 4, 5]));
console.log(longestConsecutiveSubsequence([0, 0, 1, 0, 1]));

// topKFrequent([1,1,1,2,2,3], 2) => [1, 2]
const countFrequency = function (array, target) {
  return array.reduce(function (frequency, number) {
    return number === target ? frequency + 1 : frequency;
  }, 0);
};

const topKFrequent = function (numbers, k) {
  return numbers.reduce(function (frequentNumbers, number) {
    const isAlreadyCounted = frequentNumbers.includes(number);

    if (isAlreadyCounted) {
      return frequentNumbers;
    }

    const frequency = countFrequency(numbers, number);
    if (frequency >= k) {
      return [...frequentNumbers, number];
    }

    return frequentNumbers;
  }, []);
};

console.log(topKFrequent([], 1));
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 1));

// cartesianProduct([1, 2], ['a', 'b']) => [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
const cartesianProduct = function (arr1, arr2) {
  return arr1.reduce(function (product, number) {
    const presentPairProduct = arr2.map(function (character) {
      return [number, character];
    });

    return [...product, ...presentPairProduct];
  }, []);
};

console.log(cartesianProduct([1, 2], []));
console.log(cartesianProduct([1, 2], ['a']));
console.log(cartesianProduct([1, 2], ['a', 'b']));

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