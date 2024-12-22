
// words with more than 5 letters ["apple", "banana", "kiwi", "grape"] => ["banana"]
const isStringLong = function (string) {
  return string.length > 5;
};

const filterLongWords = function (words) {
  return words.filter(isStringLong);
};

console.log(filterLongWords([]));
console.log(filterLongWords(["apple", "banana", "kiwi", "grape"]));
console.log(filterLongWords(["apple", "kiwi", "grape"]));
console.log(filterLongWords(["banana", "pineapple"]));

console.log = function () { };

// even numbers [1, 2, 3, 4, 5] => [2, 4]
const isEven = function (number) {
  return number % 2 === 0;
};

const filterEvenNumbers = function (numbers) {
  return numbers.filter(isEven);
};

console.log(filterEvenNumbers([]));
console.log(filterEvenNumbers([1, 2, 3, 4]));
console.log(filterEvenNumbers([1, 3, 5, 7]));
console.log(filterEvenNumbers([2, 4, 6, 8]));